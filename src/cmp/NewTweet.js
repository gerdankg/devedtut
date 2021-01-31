import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
const NewTweet = ({tweets,textInput,setTextInput,setTweets}) => {
   

    const userInputHandler = (e) => {
     
        setTextInput(e.target.value)
    }

 
    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, {message: textInput, id: uuidv4()}])

        setTextInput('');
       
    }
    return (
        <div>
            <form onSubmit={submitTweetHandler}>
                <textarea onChange={userInputHandler} value={textInput} cols="55" rows="15"></textarea>
                <br/>
                <button style={{width: "155px", height:"55px", fontWeight:"bold"}}>Create</button>
               
            </form>
            
        </div>
    )
}

export default NewTweet
