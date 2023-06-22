import React from 'react'

function Search(props) {
  const {location,setLocation,handleWeatherSearch,handleLocationChange} = props;
  return (
    <div>
      <form onSubmit={handleWeatherSearch}>
        <input 
        type='search'
        value={location}
        placeholder='위치를 입력'
        required
        onChange={handleLocationChange}/>
        <button
        className='btnSM'
        type='submit'
        >
          검색
        </button>
      </form>
      <div className='btnBox'>
        <button onClick={()=>{setLocation('서울특별시')}}>서울</button>
        <button onClick={()=>{setLocation('고양시')}}>고양</button>
        <button onClick={()=>{setLocation('의정부시')}}>의정부</button>
        <button onClick={()=>{setLocation('jeju')}}>제주도</button>
      </div>
    </div>
  )
}

export default Search;