import React, { useState, useEffect } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import getJoke from './helpers/data/jokeData';

function App() {
  const [jokes, setJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState({});
  const [showJoke, setShowJoke] = useState(false);
  const [showPunchline, setShowPunchline] = useState(false);
  const [showNewJoke, setShowNewJoke] = useState(false);

  const handleClick = () => {
    if (showJoke) {
      setShowJoke(false);
    } else {
      setShowJoke(true);
      setSingleJoke(jokes[Math.floor(Math.random() * jokes.length)]);
      // setShowPunchline(false);
    }
  };

  const handlePunchlineClick = () => {
    if (showPunchline) {
      setShowPunchline(false);
    } else {
      setShowPunchline(true);
      setShowNewJoke(false);
    }
  };

  const handleNewJokeClick = () => {
    if (showNewJoke) {
      setShowJoke(false);
    } else {
      setShowNewJoke(true);
      setShowPunchline(false);
      setSingleJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    }
  };

  useEffect(() => {
    getJoke().then((items) => {
      setJokes(items);
      setSingleJoke(items[Math.floor(Math.random() * jokes.length)]);
    });
  }, []);

  return (
    <div className='App'>
     <div className="card">
    <div className="card-body d-flex flex-column">
      <h6 className="card-subtitle mb-2 text-muted"></h6>
      <p className="card-text">{showJoke || showPunchline ? singleJoke.setup : ''}</p>
      <p className="card-text">{showPunchline ? singleJoke.punchline : ''}</p>
      <div className="mt-auto">
        <div> {showJoke ? '' : <Button color="info" onClick={handleClick}>Get a Joke</Button> }
        </div>
        <div> {showPunchline ? '' : <Button color="info" onClick={handlePunchlineClick}>Get Punchline</Button>}
        </div>
        <div> {showNewJoke ? '' : <Button color="info" onClick={handleNewJokeClick}>Get a New Joke</Button>}
        </div>
      </div>
  </div>
</div>
    </div>
  );
}

export default App;
