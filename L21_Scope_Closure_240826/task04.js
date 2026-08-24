async function printWeather() {
    const response = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true');
    console.log (response);
}
printWeather();


/*
Самые основные HTTP-методы
GET     → получить
POST    → создать
PUT     → заменить
PATCH   → изменить часть
DELETE  → удалить


асинхронность
→ что-то происходит не мгновенно, код не обязан ждать.
API
→ способ общения программ.
REST API
→ API через HTTP-запросы и ресурсы.
GET
→ получить.
POST
→ создать.
fetch
→ отправить HTTP-запрос из JS.
Promise
→ результат будет позже.
async
→ функция работает с асинхронным кодом.
await
→ дождаться результата.
JSON
→ формат данных, который часто приходит от API.
try/catch
→ обработка ошибок.

Самая короткая цепочка:
JavaScript
↓
fetch()
↓
API
↓
сервер
↓
ответ
↓
response.json()
↓
данные
*/
