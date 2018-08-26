import React, { Component } from 'react';
import './App.css';
import { Container } from 'bloomer';
import Login from './Login.js'
import Question from './Question.js';
import axios from 'axios';
import _ from 'lodash';
import Score from './Score.js';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {loggedIn: false, questions: null, answers: []}
    this.fetchQuestion().then(function(result){
      console.log(result)
      console.log(this.state)
    }.bind(this))
  }

  login = ()=>{
    this.setState({loggedIn: true})
  }

  async fetchQuestion(){
    const response = await axios.get('https://opentdb.com/api.php?amount=10&type=boolean');
    this.setState({questions: response.data.results})
    console.log('eee')
    return response
  }

  currentQuestion = () => {
    const key = this.state.answers.length;
    const number = key + 1;
    const data = this.state.questions[key];
    return {
      number,
      key,
      data
    }
  }

  answer = (answer)=>{
    this.setState({answers: [...this.state.answers, answer]})
  }

  correctAnswers = () => {
    return _.map(this.state.questions, question => question.correct_answer === 'True'? true: false)
  }

  scoringData = ()=>{
    return this.state.questions.map((question, key) => { 
      const correct_answer = question.correct_answer === 'True' ? true: false;
      return { question: question.question, answer: this.state.answers[key], correct_answer } 
    }) 
  }

  eraseData = () => {
    this.setState({answers: []})
  }

  render() {
    return (
      <Container className="App">
        {!this.state.loggedIn && <Login onLogin={this.login} isLoadingQuestion={ this.state.questions == null}></Login>}
        {this.state.loggedIn && this.currentQuestion().number <= 10 && <Question onAnswer={answer=>this.answer(answer)} questionNumber={this.state.answers.length + 1} question={this.currentQuestion().data.question}></Question>}
        {this.state.loggedIn && this.state.answers.length == 10 && <Score list={this.scoringData()} reset={this.eraseData} />}
      </Container>
    );
  }
}

export default App;
