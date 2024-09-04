const apikey="e7a151baca422c9fda4fd7d671412812";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const sbox=document.querySelector("input");
const sbtn=document.querySelector("button");
const icon=document.querySelector(".icon");
async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data= await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".humidity").innerHTML= "humidity: "+ data.main.humidity;
    document.querySelector(".wind").innerHTML= "speed: "+ data.wind.speed +" KmPH";
    document.getElementById("datetime").innerHTML = new Date().toLocaleString();

    if (data.weather[0].main == "Clouds") {
        icon.src = "../image/cloud.png";
    } else if (data.weather[0].main == "Clear") {
        icon.src = "../image/sun.jpg";
    } else if (data.weather[0].main == "Rain") {
        icon.src = "../image/orain.png";
    }
    document.querySelector(".icon").style.display = "block";
}
sbtn.addEventListener("click",()=>{
    checkWeather(sbox.value);
});
