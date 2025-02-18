export type TrainingDayType = {
  CODE: string;
  DISTANCE: string | null;
  DURATION: string | null;
  Z1: string | null;
  Z2: string | null;
  Z3: string | null;
  Z4: string | null;
  Z5: string | null;
  DESCRIPTION: string;
};

export type WorkoutWeekType = {
  monday: TrainingDayType | null;
  tuesday: TrainingDayType | null;
  wednesday: TrainingDayType | null;
  thursday: TrainingDayType | null;
  friday: TrainingDayType | null;
  saturday: TrainingDayType | null;
  sunday: TrainingDayType | null;
};

export type TrainingWeekType = {
  id: number;
  swim: WorkoutWeekType;
  cycle: WorkoutWeekType;
  run: WorkoutWeekType;
  weekly: {
    swim: string;
    cycle: string;
    run: string;
    total: string;
    intensity: {
      low: string;
      high: string;
    };
  };
};

export type TrainingPlanType = {
  trainingPlan: TrainingWeekType[];
};
