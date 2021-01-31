import React,{useState} from 'react';

import styled from 'styled-components'
const Tweet = ({name,message,setTweets,tweets}) => {
    const deleteItem = () => {
    console.log(message);
      setTweets(tweets.filter((state) =>  state.id !== message.id ))
      
    }

  
    return (
        <TweetStyle>
            <h1>{name}</h1>
            <h3 className="tweet">{message.message}</h3>
           
            <button onClick={deleteItem}>Delete</button>
           
            <button>Like </button>
           
        </TweetStyle>
    )
}

const TweetStyle = styled.div`
background-color: lightblue;
`;


export default Tweet
