"use client";
import Image from "next/image";
import TrainingDay from "./TrainingDay";
import { TrainingPlanType, WorkoutWeekType } from "@/types/TrainingPlanTypes";
import React, { useState } from "react";
import leftArrow from "../images/button-arrow-left.png";
import rightArrow from "../images/button-arrow-right.png";
import WorkoutCard from "./WorkoutCard";
import EmptyWorkoutCard from "./EmptyWorkoutCard";

const MobileLayout = ({ trainingPlan }: TrainingPlanType) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const [currentWeekIndex, setCurrentWeekIndex] = useState(1);

  const mapNumberToDay = (num: number): keyof WorkoutWeekType | null => {
    const daysOfWeek: (keyof WorkoutWeekType)[] = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    if (num >= 0 && num <= 6) {
      return daysOfWeek[num];
    }

    return null;
  };

  const handleNextDay = () => {
    if (currentDayIndex == 6) {
      setCurrentWeekIndex(currentWeekIndex + 1);
    }
    setCurrentDayIndex((prevIndex) => (prevIndex + 1) % 7);
  };

  const handlePrevDay = () => {
    console.log("left press");
    if (currentWeekIndex == 1 && currentDayIndex == 0) {
      return;
    }
    if (currentDayIndex == 0 && currentWeekIndex > 1) {
      setCurrentWeekIndex(currentWeekIndex - 1);
    }
    setCurrentDayIndex((prevIndex) => (prevIndex - 1 + 7) % 7);
  };
  const dayKey = mapNumberToDay(currentDayIndex);

  const isEmpty =
    dayKey &&
    !trainingPlan[currentWeekIndex - 1].swim[dayKey] &&
    !trainingPlan[currentWeekIndex - 1].cycle[dayKey] &&
    !trainingPlan[currentWeekIndex - 1].run[dayKey];

  console.log(isEmpty);

  return (
    <div>
      <div className="pt-6 flex flex-col justify-center items-center">
        <div className="block">
          <h2 className="border-b text-3xl font-bold">
            WEEK {currentWeekIndex}
          </h2>
        </div>
        <div className="block text-xl font-bold">
          <h2>{mapNumberToDay(currentDayIndex)?.toUpperCase()}</h2>
        </div>
      </div>
      <div className="absolute p-6 flex w-full justify-center">
        {dayKey && (
          <TrainingDay
            swim={trainingPlan[currentWeekIndex - 1].swim[dayKey]}
            cycle={trainingPlan[currentWeekIndex - 1].cycle[dayKey]}
            run={trainingPlan[currentWeekIndex - 1].run[dayKey]}
          ></TrainingDay>
        )}
        {isEmpty && <EmptyWorkoutCard></EmptyWorkoutCard>}
      </div>
      <button className="absolute top-1/2 left-1/8" onClick={handlePrevDay}>
        <Image src={leftArrow} alt="Left Arrow" width={48} height={48}></Image>
      </button>
      <button className="absolute top-1/2 right-1/8" onClick={handleNextDay}>
        <Image
          src={rightArrow}
          alt="Right Arrow"
          width={48}
          height={48}
        ></Image>
      </button>
    </div>
  );
};

export default MobileLayout;
