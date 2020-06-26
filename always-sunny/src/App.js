import React from 'react';
import './App.css';
import gang from "./gang.json"
import TheGang from "./components/TheGang"
import Header from "./components/Header"

class App extends React.Component {
  state = {
    gang,
    score: 0,
    streak: 0
  }

export default App;
