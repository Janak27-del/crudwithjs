import { groceryItems } from "./data.js";
import { createItems } from "./items.js";

let item = groceryItems;


function render() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const itemsElement = createItems(items);
    app.appendChild(itemsElement);
}

render();

export function editCompleted(itemId) {
    items = items.map((item) => {
        if (item.id === itemId) {
            return { ...item, completed: !item.completed };
        }
        return item;
    });
    render();
}



export function removeItem(itemId) {
    items = items.filter((item) => item.id !== itemId);
    render();
    setTimeout(() => alert("Item Deleted Successfully!"), 0);
}



import { createForm } from "./form.js";

function render() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const formElement = createForm();
    const itemsElement = createItems(items);

    app.appendChild(formElement);
    app.appendChild(itemsElement);
}


function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Add Item Function
export function addItem(itemName) {
    const newItem = {
        name: itemName,
        completed: false,
        id: generateId(),
    };
    items = [...items, newItem];
    render();
    setTimeout(() => alert("Item Added Successfully!"), 0);
}

// ....

let editid = null;

// Render App
function render() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const formElement = createForm(
        editId,
        editId ? items.find((item) => item.id === editId) : null,
    ); // edited line
    const itemsElement = createItems(items);

    app.appendChild(formElement);
    app.appendChild(itemsElement);
}

// Initialize App
render();

// Update Item Name Function
export function updateItemName(newName) {
    items = items.map((item) => {
        if (item.id === editId) {
            return { ...item, name: newName };
        }
        return item;
    });
    editId = null;
    render();
    setTimeout(() => alert("Item Updated Successfully!"), 0);
}
export function setEditId(itemId) {
    editId = itemId;
    render();

    setTimeout(() => {
        const input = document.querySelector(".form-input");
        if (input) {
            input.focus();
        }
    }, 0);
}



// Local Storage Functions
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

let items = getLocalStorage();
let editId = null;


function addItem(itemName) {
    // ....
    setLocalStorage(items);
    render();
}

function editCompleted(itemId) {
    // ....
    setLocalStorage(items);
    render();
}

function removeItem(itemId) {
    items = items.filter((item) => item.id !== itemId);
    setLocalStorage(items);
    render();
}

function updateItemName(newName) {
    // ....
    setLocalStorage(items);
    render();
}

