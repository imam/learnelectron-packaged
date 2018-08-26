import React, { Component } from 'react';
import './App.css';
import { Title, Box, Field, Control, Button} from 'bloomer';
import _ from 'lodash'
window._ = _

class Question extends Component {

    answer = (answer) =>{
        console.log('halo')
        this.props.onAnswer(answer)
    }

    render() {
        return (
            <div className="centered">
                <Title className="primary">Question {this.props.questionNumber}</Title>
                <Box>{_.unescape(this.props.question)}</Box>
                <Field isGrouped>
                    <Control>
                        <Button isColor='primary' onClick={()=>{this.answer(true)}}>True</Button>
                    </Control>
                    <Control>
                        <Button isColor='danger' onClick={()=>this.answer(false)}>False</Button>
                    </Control>
                </Field>
            </div>
        )
    }
}

export default Question;