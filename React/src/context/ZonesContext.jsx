import React, {useState, useEffect} from "react";
import ZonesService from "../services/ZonesService";

const Context = React.createContext({});

export function ZonesContextProvider({children}) {
    const [zones, setZones] = useState([]);

    useEffect(() => {
        ZonesService.getAllZones()
            .then(response => {
                setZones(response.data);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, [setZones]);

    return (
        <Context.Provider value={{zones, setZones}}>
            {children}
        </Context.Provider>
    );
}
export default Context;