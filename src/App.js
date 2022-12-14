import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todaysWeather, setTodaysWeather] = useState("");
  const [city, setCity] = useState("chicago");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=38920dc3d2d7b05ac11436473723d742&units=imperial`
        )
        .catch((error) => {
          console.log(error);
        });
      setCity(data);
    };

    fetchData();
  }, []);
  // console.log(todaysWeather);
  // if (!todaysWeather) return null;

  // console.log(todaysWeather.main.temp.toString());

  const searchCity = (e) => {
    e.preventDefault();
    setCity(e.target.elements.searchInput.value);
  };

  return (
    <div className="App bg-gray-700 min-h-screen text-white">
      <h1 className="text-3xl bg-">Weather App</h1>
      <section className="flex flex-col justify-center items-center ">
        <form action="submit" onSubmit={searchCity}>
          <div className="flex">
            <h2 className="p-1">Search</h2>
            <input id="searchInput" type="text" className="shadow text-black" />
          </div>

          <button className="bg-gray-900 m-1 p-2 rounded-lg">
            Check Weather
          </button>
        </form>
      </section>

      <section>
        <h2>Forecast</h2>
        <p></p>
      </section>
      <section>
        <h2>History</h2>
      </section>
    </div>
  );
}

export default App;
