import React from "react";

function NewWorkoutForm() {
    return  <form>
    <label htmlFor="workout">
      Workout:
    </label>
    <input id="workout-input" />
    <label htmlFor="description">
      Summary:
    </label>
    <input id="summary-input" />
  

    <button className="submit-btn">Add new workout</button>
      </form>
  }
export default NewWorkoutForm;
