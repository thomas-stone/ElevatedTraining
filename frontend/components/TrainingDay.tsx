import { TrainingDayType } from "@/types/TrainingPlanTypes"
import WorkoutCard from "./WorkoutCard";

type WorkoutDayType = {
    swim: TrainingDayType | null,
    cycle: TrainingDayType | null,
    run: TrainingDayType | null
}

const TrainingDay = ({swim, cycle, run}: WorkoutDayType) => {
  return (
    <div className="grid grid-cols-1 grid-flow-row">
        {swim ? <WorkoutCard workout={swim} color="bg-red-200"></WorkoutCard> : null}
        {cycle ? <WorkoutCard workout={cycle} color="bg-blue-200"></WorkoutCard> : null}
        {run ? <WorkoutCard workout={run} color="bg-green-200"></WorkoutCard> : null}
    </div>
  );
}

export default TrainingDay;