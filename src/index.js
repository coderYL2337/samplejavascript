app.post("/calculate", (req, res) => {
  const { items } = req.body;

  // No try-catch block for potential errors
  const total = calculateTotal(items);
  const average = calculateAveragePrice(items);
  const processed = processItems(items);

  res.json({
    total,
    average,
    processed,
    itemCount: items.length,
  });
});

// Endpoint without proper input validation
app.post("/quick-calculate", (req, res) => {
  res.json({
    result: processItems(req.body.items),
  });
});
