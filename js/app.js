import { createItems } from "./item.js";
import { createForm } from "./form.js";

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

// State
let items = getLocalStorage();
let editId = null;

// Render App
function render() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const formElement = createForm(
        editId,
        editId ? items.find((item) => item.id === editId) : null
    );

    // Clear button logic could go here too, but sticking to basic requirements first

    const itemsElement = createItems(items);

    app.appendChild(formElement);
    app.appendChild(itemsElement);
}

// Generate unique ID
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
    setLocalStorage(items);
    render();
    setTimeout(() => alert("Item Added Successfully!"), 10);
}

// Edit Completed Function
export function editCompleted(itemId) {
    items = items.map((item) => {
        if (item.id === itemId) {
            return { ...item, completed: !item.completed };
        }
        return item;
    });
    setLocalStorage(items);
    render();
}

// Remove Item Function
export function removeItem(itemId) {
    items = items.filter((item) => item.id !== itemId);
    setLocalStorage(items);
    render();
    setTimeout(() => alert("Item Deleted Successfully!"), 10);
}

// Update Item Name Function
export function updateItemName(newName) {
    items = items.map((item) => {
        if (item.id === editId) {
            return { ...item, name: newName };
        }
        return item;
    });
    editId = null;
    setLocalStorage(items);
    render();
    setTimeout(() => alert("Item Updated Successfully!"), 10);
}

// Set Edit ID Function
export function setEditId(itemId) {
    editId = itemId;
    render();

    // Focus input after render
    setTimeout(() => {
        const input = document.querySelector(".form-input");
        if (input) {
            input.focus();
        }
    }, 0);
}

// Initialize App
render();




