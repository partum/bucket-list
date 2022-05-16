import React from "react"
import pin from "../Fill 219.svg"

export default function Card(props) {

    let visited = "Visited: "+ props.item.date
    if (props.item.date == "0") {
       visited = "Haven't visited yet!"
    } 
    console.log(visited)

    return (
        <div className="card">
            <div className="hero">
                <img src={props.item.image}></img>
                <a href={props.item.authorLink}>{props.item.author}</a>
            </div>
            <div className="card-body">
                <img src={pin}></img>
                <h2>{props.item.country}</h2>
                <a href={props.item.link}>View on Google Maps</a>
                <h3>{props.item.title}</h3>
                <p className="date">{visited}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}