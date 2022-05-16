import React from "react"
import Card from "./components/Card" 
import Header from "./components/Header"
import data from "./data"
import "./style.css"

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
        <div className="content">
            <Header/>
            {card}
        </div>
    )
} 


