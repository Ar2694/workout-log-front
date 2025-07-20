
import APIClient from "api/utils/api-client";

export default class WorkoutAPI  {
    private baseURI: string;

    constructor(baseURI: string) {
     this.baseURI = import.meta.env.MODE === 'development' ? baseURI : `${import.meta.env.VITE_API_URL}${baseURI}`;
        console.log("Base URI for ScheduleAPI:", this.baseURI);
    }

    // Static methods
    static init() {
        return new WorkoutAPI("/api/workouts");
    }

    //Get all workouts
    GetWorkouts = async (_params:any = null) => {
        const params = _params ? `?${_params}`: "";
        const data = await APIClient.get(`${this.baseURI}${params}`)
 
        return data;
    }
    //Get workout by id
    GetWorkoutById = async (id: any) => {
        const data = await APIClient.get(`${this.baseURI}/edit/${id}`);
        return data;
    }

    // Create Workout
    CreateWorkout = (workout: object) => {
        const data = APIClient.post(`${this.baseURI}/create`, workout);
        return data;
    }

    // Update Workout
    UpdateWorkout = (workout: object) => {
        const data = APIClient.post(`${this.baseURI}/update`, workout);
        return data;
    }

    DeleteWorkout = (id: string) => {
        const data = APIClient.post(`${this.baseURI}/delete`, { id });
        return data;
    }


    // :::STATIC METHODS ::: //
    // Create Workout
    static CreateWorkout = async (workout: object) => {
        const data = await WorkoutAPI.init().CreateWorkout(workout);
        return data;
    }

    static UpdateWorkout = async (workout: object) => {
        const data = await WorkoutAPI.init().UpdateWorkout(workout);
        return data;
    }
    static DeleteWorkout = async (id: string) => {
        const data = await WorkoutAPI.init().DeleteWorkout(id);
        return data;
    }
    static GetWorkouts = (_query?: string) => {
        return WorkoutAPI.init().GetWorkouts(_query);
    }


    static GetWorkoutById = async (id: any) => {
        return WorkoutAPI.init().GetWorkoutById(id);
    }


}