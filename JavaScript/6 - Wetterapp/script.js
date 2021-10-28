const city = encodeURI("Wernigerode") // Anpassen für die eigene Stadt

document.querySelector(".city").innerText = city;


async function weatherUpdate() {
    const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Wernigerode&appid=868bc208df0d7d2c94f433afb09be393")
    const data = await result.json()
    console.log(data)
}

weatherUpdate();