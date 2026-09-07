/*
1.ADV. САМОСТОЯТЕЛЬНО ИЗУЧИТЬ
Переделайте программу так, чтобы она сохраняла данные в CSV файл (такая возможность есть в Экселе)
 в корне проекта вместо JSON файла.

ПРИМЕР CSV ФАЙЛА:

Наименование,Количество
qqq,2
aaa,44.2
zzzz,55

2. Преработайте программу с урока или из п.1 так, чтобы ввод прекращался на слова "exit" или "выход" или "стоп" или 
"stop" (без учета регистра) и сохранялись данные в CSV  (JSON) файл в корне проекта. 

3. Доработайте программу с урока или из п.1 так, чтобы она позволяла пользователю удалять 
продукты из списка по наименованию если мы ввели 0 количество для данного наименования. 
После удаления продукта, программа должна обновлять CSV (JSON) файл 
и выводить обновленный список продуктов.

4. Доработайте программу с урока или из п.1 так, чтобы она позволяла пользователю изменять 
количество продукта в списке по наименованию если мы ввели другое количество для 
данного наименования но отличное от 0б. После изменения количества продукта, программа 
должна обновлять CSV  (JSON) файл и выводить обновленный список продуктов.
*/

// 1111111111111111111111111111111111111111111111
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import fs from "node:fs";
import path from "node:path";

async function runFridgeApp() {
  const rl = readline.createInterface({ input, output });
  const fridge = [];

  console.log("=== Учет продуктов в холодильнике ===");
  console.log(
    'Введите "выход", "exit", "стоп" или "stop", чтобы завершить ввод.\n'
  );

  while (true) {
    const name = await rl.question("Наименование продукта: ");
    const trimmedName = name.trim();

    if (
      ["exit", "выход", "стоп", "stop"].includes(
        trimmedName.toLowerCase()
      )
    ) {
      break;
    }

    if (!trimmedName) {
      console.log("Имя продукта не может быть пустым. Попробуйте снова.\n");
      continue;
    }

    const countInput = await rl.question(
      `Количество для "${trimmedName}": `
    );

    const count = +countInput.trim();

    if (Number.isNaN(count)) {
      console.log("Количество введено некорректно.\n");
      continue;
    }

    fridge.push({
      name: trimmedName,
      count: count
    });

    console.log("✓ Добавлено!\n");
  }

  rl.close();

  if (fridge.length > 0) {
    const filePath = path.resolve("fridge.csv");

    const header = "Наименование,Количество";

    const rows = fridge.map(
      (item) => `${item.name},${item.count}`
    );

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        const csvContent = [header, ...rows].join("\r\n");

        fs.writeFile(filePath, csvContent, "utf-8", (err) => {
          if (err) {
            console.log("Ошибка записи:", err);
            return;
          }

          console.log(`\nФайл создан: ${filePath}`);

          readAndPrintFile(filePath);
        });
      } else {
        const csvContent = "\r\n" + rows.join("\r\n");

        fs.appendFile(filePath, csvContent, "utf-8", (err) => {
          if (err) {
            console.log("Ошибка записи:", err);
            return;
          }

          console.log(`\nДанные добавлены в файл: ${filePath}`);

          readAndPrintFile(filePath);
        });
      }
    });
  } else {
    console.log("\nСписок продуктов пуст. Файл не был создан.");
  }
}

function readAndPrintFile(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Ошибка чтения:", err);
      return;
    }

    const arr = data.split("\r\n");

    arr.shift();

    const parsedProducts = [];

    for (const line of arr) {
      if (!line.trim()) {
        continue;
      }

      const cells = line.split(",");

      const name = cells[0];
      const count = cells[1];

      parsedProducts.push({
        name: name,
        count: count
      });
    }

    console.log("\nСписок продуктов:");

    parsedProducts.forEach((product) => {
      console.log(`- ${product.name}: ${product.count}`);
    });

    console.table(parsedProducts);
  });
}

runFridgeApp();















// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

// npm init

// npm install axios



//     https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true


// "type": "commonjs",  ->   "type": "module",

// Example of commonjs module export and import
// const {validateEcmascriptText} = require("./service/validate.js");
// module.exports = {validateEcmascriptText};


// =====================================63-23=

// https://jsonplaceholder.typicode.com/posts

//==========================================

// https://aistudio.google.com/api-keys

//  ???????????????????????????????????????????????????????

// npm install @google/genai
//===================================================
/*
1.
Параметры → Система → О системе → Дополнительные параметры системы → Переменные среды
Добавляйте ключ в раздел Переменные пользователя, а не 
Системные переменные — права администратора не нужны, и ключ будет доступен 
только вашей учётной записи.

2.
Powershell

[Environment]::SetEnvironmentVariable(
  "GEMINI_API_KEY",
  "ваш_настоящий_ключ",
  "User"
)

$env:GEMINI_API_KEY
if ($env:GEMINI_API_KEY) { "Ключ найден" } else { "Ключ не найден" }

node -e "console.log(process.env.GEMINI_API_KEY ? 'Ключ найден' : 'Ключ не найден')"

const apiKey = process.env.GEMINI_API_KEY;

`${apiKey}`
*/


// npm install @inquirer/prompts

//============================================
//============================================