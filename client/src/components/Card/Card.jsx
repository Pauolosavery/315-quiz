import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { CHECK_ANSWER } from '../../redux/actionTypes/quizAT';

export default function MediaCard({ question }) {
    const dispatch = useDispatch()
    const [answer, setAnswer] = useState();
    function checkAnswer() {
        console.log("🚀 ~ file: Card.jsx ~ line 15 ~ checkAnswer ~ answer", answer)
        dispatch({ type: 'CHECK_ANSWER', payload: answer })
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200/300"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {question.question}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>{
                    checkAnswer();
                    // useState((prev)=> !prev)
                }}>{question.answerButton1}</Button>
                <Button size="small">{question.answerButton2}</Button>
                <Button size="small">{question.answerButton3}</Button>
                <Button size="small">{question.answerButton4}</Button>
            </CardActions>
        </Card>
    );
}
