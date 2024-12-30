import { db } from ".";
import { products } from "./schema";

async function seed() {
  try {
    // Cleansing step for development environment
    await db.delete(products);
    console.log("Database cleansed for development seeding");

    // Insert sample data
    await db.insert(products).values([
      {
        name: "Product 1",
        barcode: "00001",
        price: 1000,
        stock: 10,
        sku: "SKU001",
      },
      {
        name: "Product 2",
        barcode: "00002",
        price: 2000,
        stock: 20,
        sku: "SKU002",
      },
      {
        name: "Product 3",
        barcode: "00003",
        price: 3000,
        stock: 30,
        sku: "SKU003",
      },
      {
        name: "Product 4",
        barcode: "00004",
        price: 4000,
        stock: 40,
        sku: "SKU004",
      },
      {
        name: "Product 5",
        barcode: "00005",
        price: 4000,
        stock: 50,
        sku: "SKU005",
      },
    ]);
    console.log("Seeding completed successfully");
  } catch (error) {
    console.log("Error seeding database", error);
    throw error;
  }
}

seed();
