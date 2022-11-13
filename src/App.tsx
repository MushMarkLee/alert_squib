import React, {useState, useEffect} from "react";
import './App.css';
import {Alert} from "./components/Alert/Alert";
import Voting from "./components/Voting/Voting";

function App() {
  const [cookiesOn, setCookiesOn] = useState(false);
  const [countInTimeout, setCountInTimeout] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCountInTimeout(1)
        }, 800);
        return () => clearTimeout(timer);
    }, []);

  const customFunction = () => {
      throw new Error('Method not implemented.');
  }

  return (
    <div className="App">
      <header className="App-header">
          <Voting/>
          {countInTimeout===1 && <Alert title='OOPS!' text='Du musst unsere Cookies akzeptieren, um an Voting teilzunehmen' cookies={cookiesOn} setCookiesOn={setCookiesOn} onSomething={customFunction}/> }
      </header>
    </div>
  );
}

export default App;
