async function printWeather() {
    const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true'
    );
    console.log('-------- Результат работы fetch() САМ response---------------');
    console.log(response);

    const json = await response.json();
    console.log('---------------Response----------------');
    console.log(response);
    console.log('-------------JSON----------------');
    console.log(json);
    console.log('-----------------Wind Speed----------------');
    console.log('Speed wind: ' + json.current_weather.windspeed);

    console.log('---------------Temperature----------------');
    console.log('Temperature: ' + json.current_weather.temperature);

    console.log('------------- получаем JSON from object response.json ----------------');
    const res = JSON.stringify(json);
    console.log(res);

    const obj=JSON.parse(res);
    console.log('-------- получаем объект из JSON ----------------');
    console.log(obj);

}

console.log('--------fetch with await----------------');

printWeather();