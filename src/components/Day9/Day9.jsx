import React, { useState, useMemo, useCallback, memo } from "react";
import xyz from "../../assets/images/Cabaret.png";

export const CabaretImage = () => {
  return <img src={xyz} className="" alt="Cabaret Logo example only" />;
};

const Child = memo(({ handleClick }) => {
  console.log("👶 Child rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child onClick={handleClick} />
    </div>
  );
};

// Simulate slow calculation
const calculateFactorial = (n) => {
  console.log("🔁 Calculating factorial...");
  let result = 1;
  for (let i = 1; i <= n; i++) {
    // simulate CPU work
    for (let j = 0; j < 100000000; j++) {}
    result *= i;
  }
  return result;
};

export const FactorialCalculator = () => {
  const [count, setCount] = useState(5);
  const [showText, setShowText] = useState(true);

  // Memoize only when count changes
  const factorial = useMemo(() => calculateFactorial(count), [count]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <p>Factorial: {factorial}</p>

      <hr />

      <button onClick={() => setShowText((prev) => !prev)}>Toggle Text</button>
      {showText && <p>This is some toggleable text.</p>}
    </div>
  );
};

// const EventsCard = ({
//   eventDetails,
//   onEventClick,
// }) => {

//   return(
//     <div>
//       <CardImage
//         image={eventDetails.image}
//         onLikeClick={onEventClick}
//       />
//       <CardContent />
//     </div>
//   )
// }

// const CardImage = ({image, onLikeClick}) => (
//   // add state here
//   <div style={{}} className={}>
//     <FavoriteIcon onClick={onLikeClick} />
//     <Image src={image}/>
//   </div>
// )

// const CardContent = () => (
//   <div>
//     <CardHeader />
//     <EventDate startDate={} endDate={} />
//     <EventDescription />
//     <EventTags />
//   </div>
// )

// const CardHeader = () => {
//   return (
//     <div>
//       <h3></h3>
//       <span>{price}</span>
//     </div>
//   )
// }

// const CardDate = ({startDate, endDate}) => {
//   return (
//     <div>{startDate} - {endDate}</div>
//   )
// }

// const EventDescription = () => {
//   return(
//     <p></p>
//   )
// }

// const EventTags =({tags}) => {
//   return (
//     <div>
//     {tags.map((tag) => <div></div>)}
//     </div>
//   )
// }
