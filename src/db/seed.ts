import { db } from ".";
import { products } from "./schema";

async function seed() {
  try {
    // Insert sample data
    await db.insert(products).values([
      { name: "Product 3", price: 3000, stock: 30, sku: "SKU003" },
      { name: "Product 4", price: 4000, stock: 40, sku: "SKU004" },
    ]);

    console.log("Seeding completed successfully");
  } catch (error) {
    console.log("Error seeding database", error);
    throw error;
  }
}

seed();
