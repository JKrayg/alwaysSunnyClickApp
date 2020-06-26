import React from 'react'
import '../App.css';

function TheGang(props) {
    return (
        <div className="card" clicked = {props.clicked} style={cardStyle} onClick={() => props.clickGangMember(props.id)} className="click">
            <img style={imgStyle} alt={props.name} src={props.image} />
            <div className="content">
                <strong style = {{color: "white"}}>{props.name}</strong>
            </div>
        </div>
    );
}

const imgStyle = {
    border: "5px solid white",
    borderRadius: "5px",
    height: "215px",
    width: "250px"
}

const cardStyle = {
    margin: "20px 60px 5px 60px",
    display: "inline-block",
    textAlign: "center"

}

export default TheGang;