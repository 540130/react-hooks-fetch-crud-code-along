import React from "react";

function Item({ item }) {
  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
    </li>
  );
}
function Item({ item }) {
  // Add function to handle button click
  function handleAddToCartClick() {
    console.log("clicked item:", item);
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      {/* add the onClick listener */}
      <button
        className={item.isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
    </li>
  );
}
function handleAddToCartClick() {
  // add fetch request
  fetch(`http://localhost:4000/items/${item.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isInCart: !item.isInCart,
    }),
  })
    .then((r) => r.json())
    .then((updatedItem) => console.log(updatedItem));
}
// Destructure the onUpdateItem prop
function Item({ item, onUpdateItem }) {
  function handleAddToCartClick() {
    // Call onUpdateItem, passing the data returned from the fetch request
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  }
  // ... rest of component
}
function Item({ item, onUpdateItem }) {
  // ...rest of component

  function handleDeleteClick() {
    console.log(item);
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      {/* ... rest of JSX */}

      {/* ... add onClick */}
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}
function handleDeleteClick() {
  fetch(`http://localhost:4000/items/${item.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => console.log("deleted!"));
}
// Deconstruct the onDeleteItem prop
function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleDeleteClick() {
    // Call onDeleteItem, passing the deleted item
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(item));
  }
  // ... rest of component
}


export default Item;
