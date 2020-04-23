import React from 'react';
const api = {
  key: "7650e128a6abf7511604586d543b3b21",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const dateBuilder = (d) => {

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
      </main>
    </div>
  );
}

export default App;
