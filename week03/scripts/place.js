document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const temperature = 28; // °C
    const windSpeed = 10; // km/h

    document.getElementById("temp").textContent = temperature;
    document.getElementById("wind").textContent = windSpeed;

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChill;
});

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const chill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
        return chill.toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}