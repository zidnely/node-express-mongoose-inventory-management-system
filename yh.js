db.products.insertOne([
    {
      name: "Wireless Headphones",
      description: "Premium wireless headphones with active noise cancellation.",
      unit: "pcs",
      supplier: supplierId,
      category: [{ name: "Electronics" }],
      brand: [{ name: "Example Brand", id: brandId }],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  