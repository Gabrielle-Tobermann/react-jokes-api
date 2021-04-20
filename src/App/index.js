import React, { useState, useEffect } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import getJoke from './helpers/data/jokeData';

function App() {
  const [allJokes, setAllJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState({});

  const handleClick = () => {
    console.warn('You clicked the button woo');
  };

  useEffect(() => {
    getJoke().then((jokes) => {
      console.warn(singleJoke);
      setAllJokes(jokes);
      setSingleJoke(allJokes[Math.floor(Math.random() * allJokes.length)]);
    });
  }, []);

  return (
    <div className='App'>
     <div className="card">
    <div className="card-body d-flex flex-column">
      {/* </div><img src="{jokeGenerator}" class="card-img-top" alt="..."> */}
      <h6 className="card-subtitle mb-2 text-muted"></h6>
      <p className="card-text">{setSingleJoke.setup}</p>
      <p className="card-text">This will be punchline</p>
      <div className="mt-auto">
        <Button color="info" onClick={handleClick}>Click</Button>
      </div>
  </div>
</div>
    </div>
  );
}

export default App;
