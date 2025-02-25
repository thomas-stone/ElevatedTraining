import TrainingWeek from "@/components/training/TrainingWeek";
import { TrainingPlanType, TrainingWeekType } from "@/types/TrainingPlanTypes";


const TrainingPlan = ({ trainingPlan }: TrainingPlanType ) => {
  return (
    <div className="grid grid-cols-8 mt-5">
      <div className="col-start-2 border border-red-500">Monday</div>
      <div className="border border-red-500">Tuesday</div>
      <div className="border border-red-500">Wednesday</div>
      <div className="border border-red-500">Thursday</div>
      <div className="border border-red-500">Friday</div>
      <div className="border border-red-500">Saturday</div>
      <div className="border border-red-500">Sunday</div>

      {trainingPlan.map((week : TrainingWeekType) => (
        <TrainingWeek key={week.id} workout={week}></TrainingWeek>
      ))}
    </div>
  );
};

export default TrainingPlan;
