document.addEventListener("DOMContentLoaded",()=>{
    const location= document.getElementById("location")
    const searchButton=document.getElementById("search-btn")
    const weatherInfo=document.querySelector(".weather-status")
    // const form=document.getElementById("form")
    searchButton.addEventListener("click",(event)=>{
       event.preventDefault(); 
     const cityLocation = location.value; 
     console.log(cityLocation);
       fetch(`https://api.openweathermap.org/data/2.5/weather?&appid=c9ee646209051c20b289c6ff4860386a&q=${cityLocation}&aqi=no`)
        .then(response=>response.json())
        .then((data)=>{
        console.log(data);
         const temperature=Math.round(data.main.temp*1.8-459.67)
         const description=data.weather[0].description
         const cityName=data.name;
       const weatherIcon = data.weather[0].icon;
         const weatherHTML=`
        <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="">
         <h1 id="city" >${cityName}</h1>
         <h3><span id="temp">${temperature}</span>&deg;F</h3>
         <h1 id= "status" class="lead">${description}</h1>`
         weatherInfo.innerHTML=weatherHTML
        })
       .catch(error=>console.log("fetched error while uploading weather in your area", error)) 
    });

})