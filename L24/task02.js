// Программа запрашивает наименование продуктов в вашем холодильнике
// и их количество. После ввода всех продуктов, программа выводит список и
// продуктов с их количеством и сохраняет данные в видее JSON в
// файл в корне проекта.
// readline.createInterface() используется для создания интерфейса
// чтения данных из стандартного ввода (stdin) и записи данных в
// стандартный вывод (stdout).
 
// JSON.stringify(fridge, null, 2 ) используется для преобразования
// объекта JavaScript в строку JSON,
// где null означает, что не используется функция замены replacer,
// а 2 указывает на количество пробелов для отступа в формате JSON.
 
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";
 
async function runFridgeApp() {
  const rl = readline.createInterface({ input, output });
  const fridge = [];
 
  console.log("Программа для учета продуктов в холодильнике.");
  console.log("Введите продукты в холодильнике.Для завершения введите 'exit'.");
 
  while (true) {
    const name = await rl.question("Введите наименование продукта: ");
    const trimmedName = name.trim();
 
    if (trimmedName.toLowerCase() === "exit") {
      break;
    }
 
    if (trimmedName === "") {
      // Проверка на пустую строку
      // if (!trimmedName)
      console.log(
        "Наименование продукта не может быть пустым. Попробуйте снова.",
      );
      continue;
    }
 
    const countInput = await rl.question(
      `Введите количество продукта "${trimmedName}": `,
    );
    // const count = parseInt(countInput.trim(), 10);
    const count = Number(countInput.trim());
 
    fridge.push({
      name: trimmedName,
      count: Number.isNaN(count) ? 0 : count,
    });
 
    console.log("Продукт добавлен:", {
      name: trimmedName,
      count: Number.isNaN(count) ? 0 : count,
    });
  }
 
  rl.close();
 
  if (fridge.length > 0) {
    const filePath = path.resolve("fridge.json");
    try {
      //1. Сохраняем данные в файл
      await writeFile(filePath, JSON.stringify(fridge, null, 2), "utf-8");
      console.log(`Данные о продуктах сохранены в файл: ${filePath}`);
 
      //2. Читаем данные из файла
      console.log("Считываем данные из файла...");
      const fileData = await readFile(filePath, "utf-8");
      console.log("Данные из файла:", fileData);
 
      //3.Преведем данные из JSON в объект JavaScript
      const saveProducts = JSON.parse(fileData);
      console.log("Данные из файла (объект):", saveProducts);
 
      //4. Выводим список продуктов с их количеством красиво
      console.log("1.Список продуктов в холодильнике:");
      saveProducts.forEach((product) => {
        console.log(`- ${product.name}: ${product.count}`);
      });
      console.log("2. Список продуктов в холодильнике:");
      console.table(saveProducts);
    } catch (error) {
      console.error("Ошибка при работе с файлом:", error.message);
    }
  } else {
    console.log("Список продуктов пуст. Данные не были сохранены.");
  }
}
 
runFridgeApp();
 
 