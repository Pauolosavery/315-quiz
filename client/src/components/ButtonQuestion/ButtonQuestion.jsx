import Button from '@mui/material/Button';

import React, { useState } from 'react';

import Card from '../Card/Card.jsx'

export default function ButtonQuestion({question}) {
  const [answer, setAnswer] = useState(false);

    return (
        !answer ? 
        <Button size="large"
            onClick={() => setAnswer(true)}
        >
            {question.points}
        </Button>
        :
        <Card question={question} answer={()=> setAnswer(false)}/>
    )
}