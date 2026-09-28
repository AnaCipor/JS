import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const filePath = path.resolve("fridge.json");

const newProducts = [
  {
    name: "beef",
    count: 1,
    price: 18,
    expDate: "2026-09-24",
  },
  {
    name: "beetroot",
    count: 3,
    price: 2.5,
    expDate: "2026-10-02",
  },
  {
    name: "potato",
    count: 5,
    price: 1.2,
    expDate: "2026-10-05",
  },
  {
    name: "carrot",
    count: 2,
    price: 1.5,
    expDate: "2026-10-03",
  },
  {
    name: "onion",
    count: 2,
    price: 1.1,
    expDate: "2026-10-04",
  },
  {
    name: "garlic",
    count: 1,
    price: 1,
    expDate: "2026-10-10",
  },
];

let fridge = [];

try {
  const fileData = await readFile(filePath, "utf-8");
  fridge = JSON.parse(fileData);
} catch (error) {
  if (error.code !== "ENOENT") {
    throw error;
  }
}

fridge.push(...newProducts);

await writeFile(
  filePath,
  JSON.stringify(fridge, null, 2),
  "utf-8"
);

console.log("Продукты для борща добавлены.");
console.table(fridge);