import React from "react";
import StarRating from "../StarRating/StarRating";

function Forms() {
  return  <form>
  <label htmlFor="workout">
    Review this Workout:
  </label>
  <input id="workout-input" />
  <label htmlFor="description">
    Summary:
  </label>
  <input id="summary-input" />

  <label htmlFor="star-rating">
    Rating:
  </label>
  <StarRating />
  
  <button className="submit-btn">Submit</button>
    </form>
}
export default Forms;
