import React from "react"

export default function Card(props) {

    let visited = props.date
    if (props.date === 0) {
       visited = "Haven't visited yet!"
    } 

    return (
        <div className="card">
            <img src={props.item.image}></img>
            <p>{props.item.author}</p>
            <h2>{props.item.country}</h2>
            <a href={props.item.link}>View on Google Maps</a>
            <h3>{props.item.title}</h3>
            <p>{visited}</p>
            <p>{props.item.description}</p>
        </div>
    )
}