import axios from "axios";
import { headers } from "./config/headers";

export class SkillAPI {
    public static async getAllSkills(): Promise<any> {
        try {
            return await axios.get(`${process.env.REACT_APP_SERVER_URL}/skills/list`, {
                headers
            });
        } catch (error) {
            throw new Error(error)
        }
    }
}