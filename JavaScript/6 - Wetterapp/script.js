const city = encodeURI("Wernigerode") // Anpassen für die eigene Stadt


document.querySelector(".city").innerText = city;


async function weatherUpdate() {
    const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Wernigerode&appid=868bc208df0d7d2c94f433afb09be393")
    const data = await result.json()

    let tempValue = data["main"]["temp"]
    document.querySelector(".temperature").innerText = Math.round(tempValue-273.15);

    let timeValue = new Date(); /*data["sys"]["timezone"]*/
    document.querySelector(".time").innerText = timeValue;
    

    let imageValue = data.weather[0].icon;  // ["weather"]["0"]["icon"]
    document.querySelector(".image").innerHTML = imageValue;
   
    console.log(data)
    // console.log(Intl.DateTimeFormat().resolvedOptions().timeValue)
}

setTimeout(weatherUpdate, 10000);

weatherUpdate();