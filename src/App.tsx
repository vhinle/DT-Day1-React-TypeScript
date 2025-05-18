import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// INSTRUCTIONS: import Part2, and Part1Answer as Part0
// import Part0, { Part2 } from "./Activity1";
//import { HighlightedText, Dashboard } from "./components/Day3/Day3";
//import CourseCatalog from "./components/Day3/Day3";
/*import {
  MyCounter,
  MyInput,
  UserInfo,
  withLoader,
} from "./components/Day4/Day4";

import Timer from "./components/Timer/Timer";
import BatchedCounter from "./components/Day5/Day5";
*/

//import MovieReviews from "./components/Day5/MovieReviews";

// const MyComponent = ({ lname, fname, mname }: { lname: string; fname: string; mname?: string }) => {
//   return (
//     <div>
//       <h1>My Component</h1>
//       <p>This is the value passed from props {lname} {fname} {mname}</p>
//     </div>
//   );
// };

//const UserInfoWithLoader = withLoader(UserInfo);

//import CheckoutPage from "./components/Day5/CheckoutPage";

//Day 6
// import UserForm from "./components/Day6/Day6";

// Day 7
// import { CounterWithEffect } from "./components/Day7/Day7";

import { MultiTab } from "./components/Day8/MultiTab";

function App() {
  return (
    <div className="App">
      {/* day 5 
      <BatchedCounter />
      <MovieReviews /> 
      <CheckoutPage />*/}

      {/* <UserForm /> */}

      {/*<MyInput /> */}

      {/* <CounterWithEffect /> */}

      {/* Day 08 */}
      <MultiTab />

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

      {/* Timer Project 
      <Timer />*/}
    </div>
  );
}

export default App;
