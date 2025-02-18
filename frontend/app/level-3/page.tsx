import TrainingPlan from "@/components/TrainingPlan";

export default async function Page() {
  const data = await fetch("http://127.0.0.1:8000/weeks");
  const training_weeks = await data.json();

  return (
    <TrainingPlan trainingPlan={training_weeks}></TrainingPlan>
  );
}
