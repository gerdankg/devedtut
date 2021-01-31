import logo from './logo.svg';
import './App.css';
import Tweet from './cmp/Tweet';
import NewTweet from './cmp/NewTweet';
import TweetList from './cmp/TweetList';
import {useState,useEffect} from 'react'

function App() {
  const [name,setNewName] = useState('Alman')
  const [textInput,setTextInput] = useState('');
  const [tweets,setTweets] = useState([]);

 const message = 'test'

useEffect(() => {
  console.log("we run a function yeyy")
},[setTweets])
  return (
    <div className="App">
   
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" style={{height:"50px", display:"flex", padding:"25px"}} />
     

  
      <NewTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
     
     
      <TweetList name={name} setNewName={setNewName} tweets={tweets} setTweets={setTweets} />
     
      
      </header>
    </div>
  );
}

export default App;
