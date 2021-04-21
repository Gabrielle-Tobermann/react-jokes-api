import React, { useState, useEffect } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import getJoke from './helpers/data/jokeData';

function App() {
  const [jokes, setJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState({});

  const handleClick = () => {
    console.warn(jokes);
    setSingleJoke(jokes[0]);
    console.warn(singleJoke.setup);
  };

  useEffect(() => {
    getJoke().then((items) => {
      setJokes(items);
      setSingleJoke(items[0]);
    });
  }, []);

  return (
    <div className='App'>
     <div className="card">
    <div className="card-body d-flex flex-column">
      {/* </div><img src="{jokeGenerator}" class="card-img-top" alt="..."> */}
      <h6 className="card-subtitle mb-2 text-muted"></h6>
      <p className="card-text">{singleJoke.setup}</p>
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
