import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  // const dir2 = path.join(process.cwd());
  // console.log(dir2);
  // /Users/jangbuho/dev/Study/DreamCoding/note
  const filePath = path.join(process.cwd(), "data", "products.json");
  // console.log(filePath);
  // /Users/jangbuho/dev/Study/DreamCoding/note/data/products.json
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
