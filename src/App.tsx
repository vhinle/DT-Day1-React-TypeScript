import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// INSTRUCTIONS: import Part2, and Part1Answer as Part0
// import Part0, { Part2 } from "./Activity1";
//import { HighlightedText, Dashboard } from "./components/Day3/Day3";
//import CourseCatalog from "./components/Day3/Day3";
import {
  MyCounter,
  MyInput,
  UserInfo,
  withLoader,
} from "./components/Day4/Day4";

// const MyComponent = ({ lname, fname, mname }: { lname: string; fname: string; mname?: string }) => {
//   return (
//     <div>
//       <h1>My Component</h1>
//       <p>This is the value passed from props {lname} {fname} {mname}</p>
//     </div>
//   );
// };

//const UserInfoWithLoader = withLoader(UserInfo);

function App() {
  return (
    <div className="App">
      <MyInput />

      {/* 
      
      <MyCounter />

      <UserInfoWithLoader isLoading={true} name="Elvin" greeting="Kumusta" />
      <UserInfoWithLoader isLoading={false} name="Elvin" greeting="Kumusta" />
      */}
      {/*<Dashboard />
      <HighlightedText text="This is a success text" />
      */}

      {/* Course Catlog */}
      {/*<CourseCatalog />*/}
    </div>
  );
}

export default App;
