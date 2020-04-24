import React, {useState} from 'react';
const api = {
  key: "7650e128a6abf7511604586d543b3b21",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key == "Enter") {
      fetch(`${api.base}weather?q=${query}&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => setWeather(result));
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Where's the weather?">
          </input>
        </div>
        <div className="location-box">
          <div className="location">Charlotte, NC
          </div>
          <div className="date"></div>
            {dateBuilder(new Date())}
          </div>
          <div className="weather-box">
            <div className="temp">
              70f
            </div>
            <div className="weather">
              Sunny
            </div>
          </div>
      </main>
    </div>
  );
}

export default App;
