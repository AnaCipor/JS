import axios from 'axios';
import { GoogleGenAI } from '@google/genai';


async function askAi(prompt) {
  const genAi = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
  });

  const response = await genAi.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response.text;
}

async function main() {
  const prompt = `Расскажи про замыкание и область видимости в JavaScript.
    Обязательно:
        1. Объясни разницу между глобальной и локальной областью видимости.
        2. Покажи пример функции внутри функции.
        3. Объясни, почему внутренняя функция помнит переменные внешней функции.
        4. Приведи пример счётчика через замыкание.
        5. Добавь примеры HTTP-кодов 200, 201, 400, 404, 500.
        6. Упомяни REST-методы GET, POST, PUT, PATCH, DELETE несколько раз.`;

  const aiResponse = await askAi(prompt);

  console.log("AI Response:");
  console.log(aiResponse);

  // 1. Разбить ответ на отдельные строки
  const lines = aiResponse.split("\n");

  // 2. Поиск строки, где есть HTTP-коды
  const responseCodes = lines.filter((line) =>
    line.includes("200") ||
    line.includes("201") ||
    line.includes("400") ||
    line.includes("404") ||
    line.includes("500")
  );

  console.log("Коды ответа:");
  console.log(responseCodes);

  // 3. Список REST-методов
  const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

  // 4. Количество упоминаний для каждого метода
  methods.forEach((method) => {
    const count = aiResponse.split(method).length - 1;

    console.log(method + ": " + count);
  });
}

main();



/*
HW_23_TEXT
1.Из полученного ответа извлеките 
и распечатайте данные про коды ответа и их расшифровку.
2*** Подсчитайте, сколько раз в ответе упоминаются методы REST (GET, POST и т.д.).
и распечатайте результат. Используйте методы строк и массивов.
*/  

