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
