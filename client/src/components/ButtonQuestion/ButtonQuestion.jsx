import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../Card/Card.jsx'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material';

export default function ButtonQuestion({ _id }) {
    const { quiz } = useSelector(state => state.quiz)
    const title = quiz[_id - 1].question;
    console.log("🚀 ~ file: ButtonQuestion.jsx ~ line 11 ~ ButtonQuestion ~ title", title)

    const [answer, setAnswer] = useState(false);
    const ColorButton = styled(Button)(() => ({
        color: '#f4f7fb',
        width: "100%",
        backgroundColor: '#935a84',
        margin: '0.5%',
        '&:hover': {
            backgroundColor: '#d38fc1',
        },
    }));

    return (
        answer ?
            <Card _id={_id} setAnswer={() => setAnswer(false)} />
            :
            <List sx={{ width: '100%', color: "#f4f7fb" }}>
                <ListItem alignItems="flex-start">
                    <Avatar sx={{ bgcolor: "#935a84" }}>
                        {_id}
                    </Avatar>
                    <ColorButton
                        size="large"
                        onClick={() => setAnswer(true)}
                    >
                        {quiz[_id - 1].question}
                    </ColorButton>
                </ListItem>
            </List>
    )
}