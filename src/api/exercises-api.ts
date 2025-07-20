
import APIClient from "api/utils/api-client";

export default class ExercisesAPI {
  private baseURI: string;

  constructor(baseURI: string) {
    this.baseURI = baseURI;
    console.log("Base URI for ExercisesAPI:", this.baseURI);
  }

  async GetExercises(_query?: string): Promise<ExercisesAPI> {
    const query = _query ? `?${_query}` : "";
    const data = await APIClient.get(`${this.baseURI}${query}`)

    return data;
  }
  //Get exercises by id
  GetExerciseById = async (id: any) => {
    const data = await APIClient.get(`${this.baseURI}/view/${id}`);

    return data;
  }

  // GetExercises by body part
  async GetExercisesByBodyPart(bodypart: string): Promise<ExercisesAPI> {
    const data = await APIClient.get(`${this.baseURI}/bodyparts/${bodypart}`)
    return data;
  }

  // GetExercisesByBodyPart
  async GetExerciseBodyParts(): Promise<ExercisesAPI> {
    const data = await APIClient.get(`${this.baseURI}/bodyparts`);
    return data;
  }

  // Static methods
  static init() {
    return new ExercisesAPI("/api/exercises");
  }
  // GetExercises
  static GetExercises = (_query?: string) => {
    return ExercisesAPI.init().GetExercises(_query);
  }

  //Get exercises by id
  static GetExerciseById = async (id: any) => {
    return ExercisesAPI.init().GetExerciseById(id);
  }

  // GetExercisesByBodyPart
  static GetExercisesByBodyPart = (bodypart: string) => {
    return ExercisesAPI.init().GetExercisesByBodyPart(bodypart);
  }


  // GetExercisesByBodyPart
  static GetExerciseBodyParts = () => {
    return ExercisesAPI.init().GetExerciseBodyParts();
  }
}