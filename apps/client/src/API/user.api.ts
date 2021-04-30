import axios from "axios";
import { SkillDTO } from "../dto/skills/skill.dto";
import { headers } from "./config/headers";

export class UserAPI {
    /**
     * Retrieve a list of users who matches with needs projects
     */
    public static async getListUsersMatches(listNeeds: SkillDTO[]): Promise<any> {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/matches`, {
            headers,
            data: listNeeds
            
        });

        return response.data
    }
}