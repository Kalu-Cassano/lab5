async function getWeather() {
    const city = document.getElementById("city").value;
    try {
        const res = await fetch(`https://wttr.in/${city}?format=3`);
        const text = await res.text();
        document.getElementById("weather").innerText = text;
    } catch (err) {
        document.getElementById("weather").innerText = "Failed to fetch weather.";
    }
}
