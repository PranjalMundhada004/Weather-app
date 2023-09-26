import React, {useEffect, useState} from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=944b1a8b6e30e9d6fe15d984fac02028`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    },[search] )

    return(
        <>
            <div className="container">
                <div className="inputData">
                    <input 
                    type="search"
                    value={search} 
                    className="inputField"
                    onChange = { (event) => { 
                        setSearch(event.target.value)} }  /> 
                </div>

                {!city ? (
                    <p> No Data Found</p>
                )   : (
                    <>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>
                                    {search}</h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>
                            <h3 className="tempmin_max">
                                Min : {city.temp_min}°cel | Max : {city.temp_max}°cel
                            </h3>
                        </div>

                        <div className="ocean">
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        </div>
                    </>
                )}
            

            </div>
        </>
    )
}

export default Tempapp;