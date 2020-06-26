import React from 'react'

function Header(props) {
    return (
        <header style = { headerStyle }>
            <div className = "row">
                <div className = "col-md-5">
                    <h2>Sunny Gang Game</h2>
                </div>
                <div className = "col-md-3">
                    <div className = "winLose">{ props.answer }</div>
                </div>
                <div className = "col-md-4">
                    <h2 style = {{marginBottom: "0", marginTop: "5px"}}>Score: {props.score} | Streak: {props.streak}</h2>
                </div>
            </div>
        
            
            
        </header>
    )
}

const headerStyle = {
    backgroundColor: "#7FFF00",
    borderBottom: "10px solid #FFDF00",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    height: "100px",
    padding: "20px 20px 20px 50px",
    width: "100%"
}

export default Header;