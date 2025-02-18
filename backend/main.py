from fastapi import FastAPI
import json
import polars as pl

app = FastAPI()

cycle_df = pl.read_csv("./backend/data/cycling_workout_codes.csv")
run_df = pl.read_csv("./backend/data/running_workout_codes.csv")
swim_df = pl.read_csv("./backend/data/swimming_workout_codes.csv")
brick_df = pl.read_csv("./backend/data/brick_workout_codes.csv")


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/week/{week_num}")
async def get_week(week_num):

    with open("./backend/data/training-schedule.json") as f:
        training_schedule = json.load(f)


    return {"week_num": training_schedule["weeks"][week_num]}


@app.get("/weeks")
async def get_weeks():

    with open("./backend/data/training-schedule.json") as f:
        training_schedule = json.load(f)

    weeks = []
    for week_num, workout in training_schedule["weeks"].items():
        for day in workout["swim"]:
            if workout["swim"][day]:
                workout["swim"][day] = get_workout_from_code(workout["swim"][day])

        for day in workout["run"]:
            if workout["run"][day]:
                workout["run"][day] = get_workout_from_code(workout["run"][day])

        for day in workout["cycle"]:
            if workout["cycle"][day]:
                workout["cycle"][day] = get_workout_from_code(workout["cycle"][day])

        weeks.append(workout | {"id": week_num })

    return weeks

def get_workout_from_code(workout_code=""):
    if workout_code == "":
        return {}
    
    if workout_code[0] == "C":
        df = cycle_df
    elif workout_code[0] == "S":
        df = swim_df
    elif workout_code[0] == "R":
        df = run_df
    elif workout_code[0] == "B":
        df = brick_df

    workout = df.filter(pl.col("CODE").str.to_uppercase() == workout_code.upper()) 
    workout_json = json.loads(workout.write_json())[0]

    return workout_json


@app.get("/code/{workout_code}")
async def get_worout_code(workout_code):

    query_code = workout_code.upper()

    try:
        workout_json = get_workout_from_code(query_code)
    except:
        return {"Error: Code Not in Database"}

    return workout_json