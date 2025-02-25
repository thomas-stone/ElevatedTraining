import { TrainingDayType } from "@/types/TrainingPlanTypes";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type WorkoutCardProps = {
  workout: TrainingDayType;
  color: string;
};

const WorkoutCard = ({ workout, color }: WorkoutCardProps) => {
  const workoutDescription = workout.DESCRIPTION;

  const timeInZones = [
    workout.Z1,
    workout.Z2,
    workout.Z3,
    workout.Z4,
    workout.Z5,
  ];
  
  const totalTime = timeInZones
    .filter((x) => x !== null)
    .reduce((acc, curr) => acc + Number(curr), 0);

  return (
    <Card className={`h-50 m-5 border border-green-500 ${color}`}>
      <CardHeader>
        <CardTitle>
          {workout.CODE} -- {totalTime}
        </CardTitle>
        {workoutDescription.split("\n").map((line, i) => (
          <CardDescription key={i} className="m-[-2]">
            {line}
          </CardDescription>
        ))}
      </CardHeader>
    </Card>
  );
};

export default WorkoutCard;
