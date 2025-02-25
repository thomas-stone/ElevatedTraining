import { TrainingWeekType } from "@/types/TrainingPlanTypes";
import TrainingDay from "@/components/training/TrainingDay";
import SummaryCard from "@/components/training/SummaryCard";

const TrainingWeek = ({ workout }: { workout: TrainingWeekType }) => {
  return (
    <div className="col-span-9 grid grid-cols-8 justify-between border border-blue-500">
      <div className="border border-red-300">
        <SummaryCard weekly={workout.weekly} week_num={workout.id}></SummaryCard>
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
    </div>
  );
};

export default TrainingWeek;
