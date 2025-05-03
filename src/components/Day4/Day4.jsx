import { useState } from "react";

//Higher order function
export const UserInfo = ({ name, greeting }) => (
  <h1>
    Hello, {name}! {greeting}
  </h1>
);

export const withLoader = (Component) => {
  return function WrapperComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading... Please wait</div>;
    }
    return <Component {...props} />;
  };
};

//useState
export const MyCounter = () => {
  //useState is a hook that allows you to add state to functional components
  // [sateful_value, state_updated_function()] = useState(initial_value);

  const [counter, setCounter] = useState(0);

  //increment
  const handleOnClick = () => {
    setCounter(counter + 1);
  };
  //decrement
  const handleOnClickDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <button onClick={handleOnClick}>Increment</button>
      <button onClick={handleOnClickDecrement}>Decerement</button>
      Click counter: {counter}
    </>
  );
};

//Component that returns an input text.
//Whatever you type here should appear in diffrent component
// the other compopent can be a <p> tag
export const MyInput = () => {
  const [inputText, setInputText] = useState("");

  const inputOnChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={inputOnChange} value={inputText} />
      <p>{inputText}</p>
    </div>
  );
};
