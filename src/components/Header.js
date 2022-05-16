import React from "react"
import globe from "../Fill213.svg"

export default function Header() {
    return(
        <div className="header">
           <div className="title">
                <img src={globe}></img>
                <h1>my bucket list.</h1>
           </div>
        </div>
    )}