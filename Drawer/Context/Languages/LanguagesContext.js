import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ar from "./ar.json"
import fr from "./fr.json"

export const Languages = React.createContext()
const Selections = {    'ar':ar     ,    'fr':fr     }

export default function LanguagesContextProvider ({children}){
    
    const [LanguageNow , setLanguageNow] = useState('fr');
    const [Language , setLanguage] = useState(fr);
    const value = {
        Langtype : [LanguageNow , setLanguageNow],
        Language

    }
    useEffect(()=>{
        setLanguage((LanguageNow=="ar") ? ar : fr )
    },[LanguageNow])
    return (
        <Languages.Provider value={value}>
            {children}
        </Languages.Provider>
    )
}