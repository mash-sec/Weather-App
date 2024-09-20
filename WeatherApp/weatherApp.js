const apiKey="f4a86bc8e20cf0f0c7b7f310fb9374c7";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector('.searchInput');
const searchBtn=document.querySelector('.searchBtn');
const weatherIcon=document.querySelector('.weatherIcon');
const weatherContainer=document.querySelector('.container');


async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
   
    if(response.status === 404){

        document.querySelector('.error').style.display="block";
        document.querySelector('.all').style.display="none";
        document.querySelector('.error1').style.display="none";
        weatherContainer.style.backgroundImage="url('images/elegant design.jpeg')";
        document.body.style.backgroundImage="url('images/Sky, Horizon, Body of water, Sea, Afterglow, Wave.jpeg')";

    }else{
        var data= await response.json();
        document.querySelector('.temperature').innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
        document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';
      
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/sun.png";
            weatherContainer.style.backgroundImage="url('images/download (2).jpeg')";
        
  
           
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/sunny.png";
            weatherContainer.style.backgroundImage="url('images/panoramic-view-sunset.jpg')";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
            weatherContainer.style.backgroundImage="url('images/view-starry-night-sky-with-nature-mountains-landscape.jpg')";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/rain.png";
            weatherContainer.style.backgroundImage="url('images/3d-render-misty-island-landscape.jpg')";

        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/foggy.png";
            weatherContainer.style.backgroundImage="url('images/cloud-forest-landscape.jpg')";

        }
      
     
        document.querySelector('.all').style.display="block";
        document.querySelector('.error').style.display="none";
        document.querySelector('.error1').style.display="none";
    
    }
    
    

}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);

})

//current location
function weather() {

    var location = document.getElementById("location");
    var apiKey = 'f4a86bc8e20cf0f0c7b7f310fb9374c7';
    var url = 'https://api.openweathermap.org/data/2.5/weather?';

 navigator.geolocation.getCurrentPosition(success);

    function success(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
if(lat&&lon){
      
let FinalEndPoint=`${url}lat=${lat}&lon=${lon}&appid=${apiKey}`;
fetch(FinalEndPoint)
     .then(response => response.json())
     .then(data => {
        responseData=data;
        let check=data.main.temp;
        let conversion=check-273.15;
        document.querySelector('.temperature').innerHTML=Math.round(conversion)+"°C";
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
        document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';
      
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/sun.png";
            weatherContainer.style.backgroundImage="url('images/Céu sobre as nuvens Nuvens cinematográficas papel de parede 5 _ Foto Grátis.jpeg')";
        
  
           
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/sunny.png";
            weatherContainer.style.backgroundImage="url('images/Sky, Horizon, Body of water, Sea, Afterglow, Wave.jpeg')";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
            weatherContainer.style.backgroundImage="url('images/view-starry-night-sky-with-nature-mountains-landscape.jpg')";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/rain.png";
            weatherContainer.style.backgroundImage="url('images/A Symphony of Colors.jpeg')";

        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/foggy.png";
            weatherContainer.style.backgroundImage="url('images/Beautiful sunset at mountains_ Vector illustration Stock Vector.jpeg')";

        }
      
     
        document.querySelector('.all').style.display="block";
        document.querySelector('.error').style.display="none";
        document.querySelector('.error1').style.display="none";
    
        
 
    })
    .catch(error=>(alert('fail to fetch location')));

}
else{
    alert("Location not found")
}
}

}



weather();
