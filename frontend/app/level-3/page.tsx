import MobileLayout from "@/components/MobileLayout";
import TrainingPlan from "@/components/TrainingPlan";

export default async function Page() {
  const data = await fetch("http://127.0.0.1:8000/weeks");
  const training_weeks = await data.json();

  return (
    <div>
      <div className="p-8 md:block hidden">
        <TrainingPlan trainingPlan={training_weeks}></TrainingPlan>
      </div>
      <div className="md:hidden">
        <MobileLayout trainingPlan={training_weeks}></MobileLayout>
      </div>
    </div>
  );
}
