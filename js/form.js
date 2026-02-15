export function createForm(editId = null, itemToEdit = null, { addItem, updateItemName }) {
  const form = document.createElement("form");
  form.className = "grocery-form";

  form.innerHTML = `
    <h4>grocery bud</h4>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="e.g. eggs"
        value="${itemToEdit ? itemToEdit.name : ""}"
      />
      <button type="submit" class="btn submit-btn">
        ${editId ? "edit" : "submit"}
      </button>
    </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".form-input");
    const value = input.value.trim();

    if (!value) {
      alert("Please provide value");
      return;
    }

    if (editId) {
      updateItemName(value);
    } else {
      addItem(value);
    }
    input.value = "";
  });

  return form;
}
