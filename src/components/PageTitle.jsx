import { useState } from "react";
import { Card } from "react-bootstrap";
import "../assets/css/PageTitle.css";

function PageTitle(props){

    return(
        <div>
            <h2>{props.name}</h2>
        </div>
    )
}

export {PageTitle};