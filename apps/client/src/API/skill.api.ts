import { ISkills } from "../dto/user.dto";

 export class SkillAPI {
     public static async getAllSkills(): Promise<ISkills[]> {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/skills/list`);
        const data = await response.json()

        return data;
     }
 }