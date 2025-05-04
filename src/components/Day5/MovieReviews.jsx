import { useState } from "react";

const StarRating = ({ rating, onChange }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          onClick={() => onChange(star)}
          style={{
            cursor: "pointer",
            fontSize: "1.5em",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Movie = ({ id, title, rating, onRateChange }) => {
  return (
    <div>
      <h2>{title}</h2>
      <StarRating
        rating={rating}
        onChange={(newRating) => onRateChange(id, newRating)}
      />
    </div>
  );
};

// Movie listing component
// movies - state variable for movie
// moviewData - specific moview data
// onRateChange
const MovieList = ({ movies, movieData, onRateChange, onReviewSubmit }) => {
  return (
    <>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movieData[movie.id]?.rating || 0}
          onRateChange={onRateChange}
        />
      ))}
    </>
  );
};

//Main component
const MovieReviews = () => {
  //initializes moviews obj
  const initialMovies = [
    { id: 1, title: "Inception" },
    { id: 2, title: "The Great Gatsby" },
  ];
  //create state
  const [movieData, setMovieData] = useState({});

  //hande rate changes (moview id, rating)
  const handleRateChange = (id, rating) => {
    setMovieData((prevData) => ({
      ...prevData, // previoud movie data
      [id]: { ...prevData[id], rating }, //update movie whose ID matches id
    }));
  };

  return (
    <MovieList
      movies={initialMovies}
      movieData={movieData}
      onRateChange={handleRateChange}
      onReviewSubmit={() => {}} // TODO
    />
  );
};

export default MovieReviews;
