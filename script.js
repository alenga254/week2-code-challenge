document.addEventListener("DOMContentLoaded", () => {
  const itemInput = document.getElementById("itemInput");
  const addItemBtn = document.getElementById("addItemBtn");
  const shoppingList = document.getElementById("shoppingList");
  const clearListBtn = document.getElementById("clearListBtn");
  const markPurchasedBtn = document.getElementById("markPurchasedBtn");

  // Array to store shopping list items
  let items = [];

  // Render the shopping list
  function renderList() {
    shoppingList.innerHTML = ""; // Clear the current list
    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item.text;
      li.classList.toggle("purchased", item.purchased);
      li.addEventListener("click", () => {
        item.purchased = !item.purchased; // on/off switch purchased status
        renderList(); // Re-render the list
      });
      // Create a remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        items.splice(index, 1); // Remove the item from the array
        renderList(); // Re-render the list
      });

      li.appendChild(removeBtn); // Append the remove button to the list item
      shoppingList.appendChild(li);
      shoppingList.appendChild(li);
    });
  }

  // Adding item to the shopping list
  addItemBtn.addEventListener("click", () => {
    const itemText = itemInput.value.trim();
    if (itemText) {
      items.push({ text: itemText, purchased: false }); // Add item to the array
      itemInput.value = ""; // Clear the input
      renderList(); // Render the updated list
    }
  });

  //Clear the shopping list
  clearListBtn.addEventListener("click", () => {
    items = []; // Clear the array
    renderList(); // Render the empty list
  });

  //Mark purchased items
  markPurchasedBtn.addEventListener("click", () => {
    items.forEach((item) => {
      if (!item.purchased) {
        item.purchased = true; // Mark as purchased
      }
    });
    renderList(); // Re-render the list
  });
});
