import { createItems } from "./item.js";
import { createForm } from "./form.js";

// State
let items = getLocalStorage();
let editId = null;

// Helpers
function getLocalStorage() {
    const list = localStorage.getItem("grocery-list");
    if (list) {
        return JSON.parse(list);
    }
    return [];
}

function setLocalStorage(itemsArray) {
    localStorage.setItem("grocery-list", JSON.stringify(itemsArray));
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Logic
function addItem(itemName) {
    const newItem = {
        name: itemName,
        completed: false,
        id: generateId(),
    };
    items = [...items, newItem];
    setLocalStorage(items);
    render();
    setTimeout(() => alert("Item Added Successfully!"), 100);
}

function editCompleted(itemId) {
    items = items.map((item) => {
        if (item.id === itemId) {
            return { ...item, completed: !item.completed };
        }
        return item;
    });
    setLocalStorage(items);
    render();
}

function removeItem(itemId) {
    items = items.filter((item) => item.id !== itemId);
    setLocalStorage(items);
    render();
    setTimeout(() => alert("Item Deleted Successfully!"), 100);
}

function updateItemName(newName) {
    items = items.map((item) => {
        if (item.id === editId) {
            return { ...item, name: newName };
        }
        return item;
    });
    editId = null;
    setLocalStorage(items);
    render();
    setTimeout(() => alert("Item Updated Successfully!"), 100);
}

function setEditId(itemId) {
    editId = itemId;
    render();
    setTimeout(() => {
        const input = document.querySelector(".form-input");
        if (input) {
            input.focus();
        }
    }, 0);
}

// Render
function render() {
    const app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = "";

    const formElement = createForm(
        editId,
        editId ? items.find((item) => item.id === editId) : null,
        { addItem, updateItemName }
    );
    const itemsElement = createItems(items, { editCompleted, setEditId, removeItem });

    app.appendChild(formElement);
    app.appendChild(itemsElement);
}

// Init
render();
