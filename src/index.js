// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

function getButtonText() {
  return 'Click on me';
}

// Create a react component
const App = () => {
  // const buttonText = 'Click me';
  const buttonText = { text: 'Click me' };
  const style= { 
    backgroundColor: 'blue', 
    color: 'white' 
  }
  const labelText = 'Enter your name: ';

  return (
    <div>
      {/* <label className="label" for="name"> */}
      <label className="label" htmlFor="name">
        {/* Enter name: */}
        {labelText}
      </label>
      <input id="name" type="text" />
      {/* <button style={{ backgroundColor: 'blue', color: 'white' }}> */}
      <button style={style}>  
        {/* {buttonText} */}
        {/* {getButtonText()}; */}
        {buttonText.text}
      </button>
    </div>
  );
  
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);