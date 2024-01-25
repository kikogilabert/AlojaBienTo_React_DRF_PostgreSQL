import React, {useState, useEffect} from "react";
import CitiesService from "../services/CitiesService";

const Context = React.createContext({});

export function CitiesContextProvider({children}) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        CitiesService.getAllCities()
            .then(response => {
                setCities(response.data);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, [setCities]);

    return (
        <Context.Provider value={{cities, setCities}}>
            {children}
        </Context.Provider>
    );
}
export default Context;