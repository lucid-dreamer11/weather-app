const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "4d4bf0af2a9f8b88b2575e0ccefbdccf"
}

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
      getInfo(input.value);
    }
  }

//Geolocation 

const myKey = '9d20807828764456a0adc14500738a9d';
async function getIP(){
  const res1 = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${myKey}`);
  const result1 = await res1.json();
  getInfo(result1.city);
}
getIP()

//Geolocation - end

async function getInfo (data) {
  const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
  const result = await res.json();
  displayResult(result);
}

function displayResult(result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = "Feels like: " + `${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " " + "Max " + `${Math.round(result.main.temp_max)}<span>°</span>`
}
function getOurDate() {
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let day = days[myDate.getDay()];
  
    let todayDate = myDate.getDate();

    let month = months[myDate.getMonth()];

    let year = myDate.getFullYear();

    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + "," +  " " + `${todayDate}` + " " + `${month}` + "," + " " + `${year}` 
}
gsap.from("#header", {y:-200, opacity:0, delay:0, duration:4,  ease:"power1.out"})
gsap.from("#city", {y:200, opacity:0, delay:0.5, duration:4, ease:"power1.out"})
gsap.from("#date", {y:-200, opacity:0, delay:1, duration:4, ease:"power1.out"})
gsap.from("#temperature", {y:200, opacity:0, delay:1.5, duration:4, ease:"power1.out"})
gsap.from("#feelsLike", {y:-200, opacity:0, delay:2, duration:4, ease:"power1.out"})
gsap.from("#conditions", {y:200, opacity:0, delay:2.5, duration:4, ease:"power1.out"})
gsap.from("#variation", {y:-200, opacity:0, delay:3, duration:4, ease:"power1.out"})
gsap.from(".link", {y:200, opacity:0, delay:3.5, duration:4, ease:"power1.out"})