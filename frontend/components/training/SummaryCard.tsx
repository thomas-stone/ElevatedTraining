import { WeeklySummaryType } from "@/types/TrainingPlanTypes"

type SummaryCardProps = {
    weekly: WeeklySummaryType,
    week_num: number
}

const SummaryCard = ({weekly, week_num} : SummaryCardProps) => {
  return (
    <div className="border border-red-300">
    <p>Week {week_num}</p>
    <p>Total Time: {weekly.total}</p>
    <p>Swim: {weekly.swim}</p>
    <p>Cycle: {weekly.cycle}</p>
    <p>Run: {weekly.run}</p>
    <p>{weekly.intensity.low} | {weekly.intensity.high}</p>
    </div>
  )
}

export default SummaryCard