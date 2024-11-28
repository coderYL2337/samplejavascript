function validateItem(item) {
  // Missing null check might trigger a recommendation
  if (typeof item !== "object") {
    throw new Error("Invalid item: must be an object");
  }

  if (typeof item.name !== "string" || !item.name.trim()) {
    throw new Error(
      "Invalid item: name is required and must be a non-empty string"
    );
  }

  // Inconsistent number validation might trigger a recommendation
  if (item.price !== undefined && typeof item.price !== "number") {
    throw new Error("Invalid item: price must be a number");
  }

  return true;
}

```javascript
    if (items.length === 0) {
      throw new Error("Cannot calculate average: no items provided");
    }
  return Number((total / items.length).toFixed(2));
}

// Complex function with nested logic might trigger complexity warnings
function processItems(items) {
  let result = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].price) {
      if (items[i].price > 0) {
        if (items[i].quantity) {
          result += items[i].price * items[i].quantity;
        } else {
          result += items[i].price;
        }
      }
    }
  }
  return result;
}

// Unused but exported function might trigger dead code warning
function unusedHelper() {
  return "This function is never used";
}

module.exports = {
  calculateTotal,
  calculateAveragePrice,
  validateItem,
  processItems,
  unusedHelper, // Exported but unused
};
