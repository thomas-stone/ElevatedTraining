import TrainingPlan from "@/components/training/TrainingPlan";

export default async function Page() {
  const data = await fetch("http://backend:8085/weeks");
  const training_weeks = await data.json();

  return (
    <TrainingPlan trainingPlan={training_weeks}></TrainingPlan>
  );
}
