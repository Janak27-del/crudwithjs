import { addItem, updateItemName } from "./app.js";

export function createForm(editId = null, itemToEdit = null) {
  const form = document.createElement("form");
  form.className = "grocery-form";

  form.innerHTML = `
    <h3>grocery bud</h3>
    <div class="form-control">
      <input type="text" class="form-input" placeholder="e.g. eggs" value="${itemToEdit ? itemToEdit.name : ""
    }" />
      <button type="submit" class="submit-btn">
        ${editId ? "edit" : "submit"}
      </button>
    </div>
  `;

  // Provide feedback element for alerts
  const alert = document.createElement("p");
  alert.className = "alert";
  form.prepend(alert); // Add alert to top of form

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = form.querySelector(".form-input").value;
    if (!value) return; // Prevent empty submission

    if (editId) {
      updateItemName(value);
    } else {
      addItem(value);
    }
  });

  return form;
}

import { addItem, updateItemName } from "./app.js"; // edited

// Create Form Element
export function createForm(editId, itemToEdit) {
  const form = document.createElement("form");

  // added value and dynamic button name
  form.innerHTML = `
    <h2>grocery bud</h2>
    <div class="form-control">
     <input
        type="text"
        class="form-input"
        placeholder="e.g. eggs"
        value="${itemToEdit ? itemToEdit.name : ""}"
      />
      <button type="submit" class="btn">
        ${editId ? "edit item" : "add item"}
      </button>
    </div>
  `;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".form-input");
    const value = input.value.trim();

    if (!value) {
      alert("please provide value", "error");
      return;
    }
    // added conditions
    if (editId) {
      updateItemName(value);
    } else {
      addItem(value);
    }

    input.value = "";
  });

  return form;
}
