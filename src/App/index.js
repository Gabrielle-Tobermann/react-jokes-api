import React from 'react';
import './App.scss';
import { Button } from 'reactstrap';
// import getJoke from '../App/helpers/data/jokeData';

function App() {
  // const [allJokes, setAllJokes] = useState([]);
  // const [singleJoke, setSingleJoke] = useState({});

  const handleClick = () => {
    console.warn('You clicked the button woo');
  };

  return (
    <div className='App'>
     <Button color="info" onClick={handleClick}>Click</Button>
    </div>
  );
}

export default App;
