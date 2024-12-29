import { db } from ".";
import { products } from "./schema";

async function seed() {
  try {
    // Insert sample data
    await db.insert(products).values([
      { name: "Product 1", price: 1000, stock: 10, sku: "SKU001" },
      { name: "Product 2", price: 2000, stock: 20, sku: "SKU002" },
    ]);

    console.log("Seeding completed successfully");
  } catch (error) {
    console.log("Error seeding database", error);
    throw error;
  }
}

seed();
