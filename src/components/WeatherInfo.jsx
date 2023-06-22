import React, { useState } from 'react'

function WeatherInfo(props) {


  const {weather,code,newSunriseTime} =props;
  
  
  return (
    <>
      {
        
        weather  ?
        <div>
          <p>{weather.name} 의 현재 날씨 정보 입니다.</p>
          <p>온도는 {(weather.main.temp - 273.15).toFixed(1)}° C 입니다.</p>
          <p>풍속은 {weather.wind.speed}m/sec 입니다.</p>
          <p>날씨는 {weather.weather[0].description} 입니다.</p>
          <p>일출은 {newSunriseTime} 입니다.</p>
        </div>
          
        :
        code === '404' ?
        <>
          <p
          style={{color : 'red'}}>
            올바른 지역명이 아닙니다.
          </p>
        </>
        :
        null
      
    }
    </>
  )
}

export default WeatherInfo