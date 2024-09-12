import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="#0000ff" onSetRating={setMovieRating} />
      <p>The movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating message={["Terrible", "Bad", "Okey", "Good", "Best"]} /> */}
    {/* <StarRating maxRating={6} color="#00ff00" /> */}
    {/* <StarRating
      maxRating="10"
      color="#ff0000"
      size="30"
      className="test"
      defaultRating={4}
    /> */}
    {/* <Test /> */}
    <App />
  </React.StrictMode>
);
