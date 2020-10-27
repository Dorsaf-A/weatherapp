import React,{ useState,useEffect } from "react";
import axios from "axios";

function Weather({cityName}) {
    const [weather,setWeather] = useState({})
    const key = "4759e5c577e13cb8f3b33608fb5ee8c9"

    useEffect(async ()=>{
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
        .then((response)=>{
            let data=response.data
            return data
        })
        .then((data)=>{
            setWeather({
                name:data.name,
                country:data.sys.country,
                main:data.weather[0].description
            })
            console.log(data)
        })}
        
        ,[])
    return(
        <div>
           <div className="card">
        <h2>
          {weather.name},{weather.country}
        </h2>
        <h3>
          <span >
          {weather.main}
          </span>
        </h3>
      </div>
    </div>
    )
}

export default Weather