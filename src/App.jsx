import { useState } from 'react'
import './App.css'
import Search from './components/search';
import WeatherInfo from './components/WeatherInfo';


function App() {
  // API 키를 환경변수로 불러오기
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [location, setLocation] = useState(''); // 검색어
  const [weather, setWeather] = useState(null); // 날씨 데이터 null 값이 비었음을 명시적 선언
  const [code,setCode] = useState('');

  
  const [newSunriseTime,setNewSunriseTime] = useState();
  const [newSunsetTime,setNewSunsetTime] = useState();
  
  const timeSet = (data) =>{
    console.log(data);
    const sunsetStamp = data.weather.sys.sunset;
    const sunriseStamp = data.weather.sys.sunrise;
    console.log(sunriseStamp);
    const sunsetTime = new Date(sunsetStamp * 1000);
    const sunriseTime = new Date(sunriseStamp * 1000);
    const timeZoneOffset = 9 * 60;
    setNewSunriseTime(new Date(sunriseTime.getTime() + (timeZoneOffset * 60 * 1000))); 
    setNewSunsetTime(new Date(sunsetTime.getTime() + (timeZoneOffset * 60 * 1000))); 
    
  }

  // 날씨 요청 함수
  const fetchWeather = () => {
    
    const apiKey = API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=kr`;

    fetch(url)
      .then(res => res.json())  // json포맷으로 변환
      .then(data => {
        if(data.cod === '404'){
          // 검색결과 미존재시
          setWeather(null);
          setCode('404');
          // alert('올바른 정보를 입력해주세요.');  
          return;
        }
        console.log(data);
        setWeather(data);
        setCode('200');
        // timeSet(weather);
      })
      .catch(()=>{
        console.log('error!');
      })
  }

  // fetchWeather();
  
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    // fetchWeather();
  }
  const handleWeatherSearch = (e) =>{
    e.preventDefault();
    fetchWeather();
    console.log(weather);
    // timeSet(weather);
    
    // console.log('aa');
    
    
  }

  return (
    <div className="App">
      <div>
      <h1>Weather App</h1>
      <Search location={location}
      handleWeatherSearch={handleWeatherSearch}
      setLocation={setLocation}
      handleLocationChange={handleLocationChange}
      timeSet ={timeSet}/>
      <WeatherInfo weather={weather} code={code} newSunriseTime={newSunriseTime}/>
      </div>
    </div>
  )
}

export default App
