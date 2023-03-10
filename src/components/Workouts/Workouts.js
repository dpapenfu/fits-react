import React from "react";
import Forms from "../Forms/Forms";

function Workouts(workout) {
  return (
    
    <card className="workoutName">
      <div className="description">
        <p className="workout">{"Bulgarian Split Squat"}</p>
        <p className="summary">
          {
            "From Wikipedia: The squat begins from a standing position. Weight is often added and is typically in the form of a loaded barbell. Dumbbells and kettlebells may also be used. When a barbell is used, it may be braced across the upper trapezius muscle, which is termed a high bar squat, or held lower across the back and rear deltoids, termed a low bar squat.[3] Wherever the bar is positioned on the back, various torso bracing actions are taken to ensure that it does not come into direct contact with the spine as this can lead to discomfort and injury. This can be a problem for new squatters who squat in a high bar style as they may not have enough muscle mass to form a cushion for the bar and prevent it from applying pressure directly to their spine.[4] A barbell pad can be used to help alleviate pressure or a low bar style can be used.[5] The squatting movement is initiated by moving the hips back and bending the knees and hips to lower the torso and accompanying weight, then returning to the upright position."
          }
        </p>
        <Forms />
      </div>

      <div className="description">
        <p className="workout">{"Nordic hamstring curl"}</p>
        <p className="summary">
          {
            "From Wikipedia: The Nordic hamstring curl (NHC) is an exercise in which a person kneels with their feet fixed in position and lowers their body by extending the knee. It reduces hamstring injuries in athletes, and is commonly used as a form of injury prevention.[1][2] NHC increases strength of the hamstrings and length of the fascia,[3][4][5] sprint speed, and change of direction ability.[6] It is debated whether NHC is an open or closed chain exercise.[7] NHC has been compared to the razor hamstring curl.[5][4]"
          }
        </p>
        <Forms />
      </div>
    </card>
  );
}

export default Workouts;
