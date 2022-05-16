import React from "react"
import Card from "./components/Card" 
import data from "./data"

export default function App() {
    const card = data.map (item =>
        {
            return(
                <Card 
                    item={item}
                />
            )
        })
    return (
        <div>
            {card}
        </div>
    )
}


