import React, {useState} from "react";
import RouteContext from "./context/RouterContext";

export default function Router({children}){
    const [location, setLoacation] = useState(window.location.pathname);

    return (
        <RouteContext.Provider value={{location}}>
            {children}
        </RouteContext.Provider>
    );
}