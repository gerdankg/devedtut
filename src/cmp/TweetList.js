import React from 'react'
import Tweet from './Tweet'

const TweetList = ({name,tweets,setTweets}) => {
    return (
        <div>
       {tweets.map((message) => (
       <Tweet 
       setTweets={setTweets}
        name={name} 
        message={message} 
        tweets={tweets} 
         key={message.id}
         /> 
       ))}
    
       
    </div>
    )
}

export default TweetList
