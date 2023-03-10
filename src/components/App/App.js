import Workouts from "../Workouts/Workouts";
import NewWorkoutForm from "../NewWorkoutForm/NewWorkoutForm";
import Header from "../Header/Header";

import "./App.css";


function App() {
  return (
    <>
    <Header />
      
      <Workouts />

      <h2>Add a new workout:</h2>
      <NewWorkoutForm />
      
    </>
  );
}

export default App;
