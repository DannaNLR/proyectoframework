import React, { useState } from "react";
import './App.css';

import { Index } from "./dates/Index";
import { Index0 } from "./dates/Index0.jsx";
import { Index1 } from "./dates/Index1.jsx";
import { Index2 } from "./dates/Index2.jsx";
import { Index3 } from "./dates/Index3.jsx";

const App = () => {
  const [currentForm, setCurrentForm] = useState('index');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const formComponents = {
    index: <Index onFormSwitch={toggleForm} />,
    index0: <Index0 onFormSwitch={toggleForm} />,
    index1: <Index1 onFormSwitch={toggleForm} />,
    index2: <Index2 onFormSwitch={toggleForm} />,
    index3: <Index3 onFormSwitch={toggleForm} />,
  };


  return (
    <div className="App">
      {formComponents[currentForm]}
    </div>
  );
}

export default App;
