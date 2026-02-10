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
