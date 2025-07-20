
import APIClient from "api/utils/api-client";

export default class ScheduleAPI  {
    private baseURI: string;

    constructor(baseURI: string) {
        this.baseURI = baseURI;
    }

    // Static methods
    static init() {
        return new ScheduleAPI("/api/schedule");
    }

    //Get all scheduled workouts
    async GetSchedules(_query?: string) {
      
        const query = _query ? `?${_query}` : "";
        const data = await APIClient.get(`${this.baseURI}${query}`)
        
        return data;
    }
    //Get all scheduled workouts
     DeleteAllSchedules =  () => {
        const data =  APIClient.post(`${this.baseURI}/deleteAll`)
        
        return data;
    }
    // Create Schedule
    async CreateSchedule(schedule: object) {
        const data = APIClient.post(`${this.baseURI}/create`, schedule);
        return data;
    }

    async GetScheduleById(id: any) {
        const data = await APIClient.get(`${this.baseURI}/edit/${id}`);
        
        return data;
    }

    // Update Schedule
    async UpdateSchedule(schedule: object) {
        const data = APIClient.post(`${this.baseURI}/update`, schedule);
        return data;
    }

    DeleteScheduleById(id: string) {
        const data = APIClient.post(`${this.baseURI}/delete`, { id });
        return data;
    }
    // :::STATIC METHODS ::: //
    // Create Schedule
    static async CreateSchedule(schedule: object) {
        const data = await ScheduleAPI.init().CreateSchedule(schedule);
        return data;
    }

    // Get schedules workouts
    static async GetSchedules(_query?: string) {
        return ScheduleAPI.init().GetSchedules(_query);
    }
    // Get schedules workouts
    static DeleteAllSchedules = async () => {
        const data = await ScheduleAPI.init().DeleteAllSchedules();
        return data;
    }
    // Get schedules by id
    static GetScheduleById = async (id: any) => {
        return ScheduleAPI.init().GetScheduleById(id);
    }

    // Update Schedule
    static UpdateSchedule(schedule: object) {
        return ScheduleAPI.init().UpdateSchedule(schedule);
    }

    static DeleteScheduleById(id: string) {
        return ScheduleAPI.init().DeleteScheduleById(id);
    }

}