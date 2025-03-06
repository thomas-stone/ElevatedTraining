import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EmptyWorkoutCard = () => {
  return (
    <Card
      className={`h-50 w-75 md:w-full m-5 border border-gray-400 bg-gray-200`}
    >
      <CardHeader>
        <CardTitle>Rest Day</CardTitle>
        <CardDescription>Don't forget to stretch!</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default EmptyWorkoutCard;
