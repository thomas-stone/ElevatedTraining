import {TrainingDayType} from "@types/TrainingPlanTypes";

type WorkoutDayType = {
    swim: TrainingDayType | null,
    cycle: TrainingDayType | null,
    run: TrainingDayType | null
}

const TrainingDay = ({swim, cycle, run}: WorkoutDayType) => {
  return (
    <div className="grid grid-cols-1 grid-flow-row">
        <div className="border h-30 border-black">{swim ? swim.DESCRIPTION : "NO SWIM"}</div>
        <div className="border h-30 border-black">{cycle ? cycle.DESCRIPTION : "NO CYCLE"}</div>
        <div className="border h-30 border-black">{run ? run.DESCRIPTION : "NO RUN"}</div>
    </div>
  )
}

export default TrainingDay