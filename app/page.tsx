import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-grow">
      <div className="grid grid-flow-row grid-cols-1 justify-center" >
        <div>Shitty app for now... but you can get to training plan here:</div>
        <Button className="my-5">Level 2</Button>
        <Button className="my-5">Level 3</Button>
      </div>
    </div>
  );
}
