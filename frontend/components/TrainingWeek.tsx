import { TrainingWeekType } from "@/types/TrainingPlanTypes";
import TrainingDay from "./TrainingDay";

const TrainingWeek = ({ workout }: { workout: TrainingWeekType }) => {
  return (
    <div className="col-span-9 grid grid-cols-9 justify-between border border-blue-500">
      <div className="border border-red-300">
        <h1>Week {workout.id}</h1>
      </div>
      <div className="border border-red-300">
        <TrainingDay swim={workout.swim.monday} cycle={workout.cycle.monday} run={workout.run.monday}></TrainingDay>
      </div>
      <div className="border border-red-300">
        <TrainingDay swim={workout.swim.tuesday} cycle={workout.cycle.tuesday} run={workout.run.tuesday}></TrainingDay>
      </div>
      <div className="border border-red-300">
        <TrainingDay swim={workout.swim.wednesday} cycle={workout.cycle.wednesday} run={workout.run.wednesday}></TrainingDay>
      </div>
      <div className="border border-red-300">
        <TrainingDay swim={workout.swim.thursday} cycle={workout.cycle.thursday} run={workout.run.thursday}></TrainingDay>
      </div>
      <div className="border border-red-300">
        <TrainingDay swim={workout.swim.friday} cycle={workout.cycle.friday} run={workout.run.friday}></TrainingDay>
      </div>
      <div className="border border-red-300">
        <TrainingDay swim={workout.swim.saturday} cycle={workout.cycle.saturday} run={workout.run.saturday}></TrainingDay>
      </div>
      <div className="border border-red-300">
        <TrainingDay swim={workout.swim.sunday} cycle={workout.cycle.sunday} run={workout.run.sunday}></TrainingDay>
      </div>
      <div className="border border-red-300">
        <p>Total Time: {workout.weekly.total}</p>
        <p>Swim: {workout.weekly.swim}</p>
        <p>Cycle: {workout.weekly.cycle}</p>
        <p>Run: {workout.weekly.run}</p>
        <p>{workout.weekly.intensity.low} | {workout.weekly.intensity.high}</p>
      </div>
    </div>
  );
};

export default TrainingWeek;
