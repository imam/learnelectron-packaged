import React, { Component } from 'react';
import './App.css';
import { Table, Box, Button } from 'bloomer';
import _ from 'lodash'
window._ = _

function ScoreTableRows(props){
    return props.list.map(entry =>
        <tr>
            <td>{entry.question}</td>
            <td>{entry.answer ? 'True': 'False'}</td>
            <td>{entry.correct_answer ? 'True': 'False'}</td>
            <td>{entry.answer === entry.correct_answer ? 1 : 0}</td>
        </tr>)
}

class Score extends Component {

    finalScore = () =>{
        return _.reduce(this.props.list, (sum, entry) => { const score = entry.answer === entry.correct_answer ? 1 : 0; return score + sum }, 0) 
    }

    reset = () => {
        this.props.reset()
    }

    render() {
        return (
            <div className="centered">
                <div className="score">
                    <Table isBordered isStriped isNarrow>
                        <thead>
                            <tr>
                                <th>Pertanyaan</th>
                                <th>Jawaban Anda</th>
                                <th>Jawaban Yang Benar</th>
                                <th>Skor Anda</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ScoreTableRows list={this.props.list}/>
                        </tbody>
                    </Table>
                </div>
                <Box style={{ marginTop: 10 }}>Selamat! Skor anda {this.finalScore()}/10!. <Button onClick={this.reset} >Coba lagi?</Button></Box>
            </div>
        )
    }
}

export default Score;