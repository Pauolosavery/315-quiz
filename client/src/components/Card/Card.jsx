import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//  { useEffect, useState } from 'react';

export default function MediaCard({ _id, setAnswer }) {
    const { quiz } = useSelector(state => state.quiz)

    const regex = /(<([^>]+)>)/ig
    const result = quiz[_id - 1].answer.replace(regex, '')

    return (
        <Card sx={{ maxWidth: "100%" }}>
            <Button
                onClick={setAnswer}
            >
                CLOSE
            </Button>
            <CardMedia
                component="img"
                height="auto"
                image={`/questions_img/${_id}.png`}
                alt="green iguana"
                style={{ position: "absolut", width: "90%" }}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "justify", padding: "3%" }}
                >
                    {result}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={setAnswer}
                >
                    CLOSE
                </Button>
            </CardActions>
        </Card>
    );
}
