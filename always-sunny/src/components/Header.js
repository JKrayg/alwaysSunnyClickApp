import React from 'react'

function Header(props) {
    return (
        <header style = { headerStyle }>
            <div className = "row">
                <div className = "col-md-5">
                    <h2>Sunny Gang Game</h2>
                </div>
                <div className = "col-md-1">
                    <div style = {{color: "gold"}} className = "winLose">{ props.answer }</div>
                </div>
                <div className = "col-md-4 offset-2">
                    <h2 style = {{marginBottom: "0", marginTop: "5px"}}>Score: {props.score} | Streak: {props.streak}</h2>
                    <img alt = "clover" style = {{height: "50px", width: "50px", position: "absolute", top: "0", right: "30px"}} src = "https://skunkandgoattavern.com/wp-content/uploads/2017/03/four-leaf-clover-300x300.png"/>
                </div>
            </div>
        
            
            
        </header>
    )
}

const headerStyle = {
    backgroundColor: "rgb(26, 121, 26)",
    boxShadow: "3px 10px 10px grey",
    fontFamily: 'Lato, sansSerif',
    borderBottom: "10px solid gold",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    height: "100px",
    padding: "20px 20px 20px 50px",
    width: "100%"
}

export default Header;