import React from 'react';
import './App.css';
import gang from "./gang.json"
import TheGang from "./components/TheGang"
import Header from "./components/Header"

class App extends React.Component {
  state = {
    gang,
    score: 0,
    streak: 0,
    answer: true
  }



clickGangMember = id => {
  this.setState({ gang: this.state.gang.map(member => {
    if(member.id === id) {
      if (member.clicked === true) {
        localStorage.setItem("streak", this.state.streak)
        const newStreak = localStorage.getItem("streak") 
        this.setState({
          answer: !this.state.answer,
          streak: parseInt(newStreak)
        });
        console.log(this.state.streak)
        //debugger
        window.location.reload()
        
      } else {
        member.clicked = true
        this.setState({
          score: this.state.score + 1,
          streak: this.state.streak + 1
        });
      }
      
    }
    return member
  }) });
}

render() {
  return (
    <React.Fragment>
      <div className = "container">
        <Header 
          score = { this.state.score }
          streak = { this.state.streak }
          answer = {this.state.answer ? "Perfect!" : "Failure!"} 
            />
          {this.state.gang.map(member => (
          <TheGang
            clickGangMember={this.clickGangMember}
            id={member.id}
            key={member.id}
            name={member.name}
            image={member.image}
            clicked={member.clicked}
          />
        ))}
      </div>
      
    </React.Fragment>
    
    
  );
}
};
export default App;
