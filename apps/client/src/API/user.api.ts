import { SkillDTO } from "../dto/skills/skill.dto";
import { UserDTO } from "../dto/user/user.dto";



export class UserAPI {

    /**
     *  This function is a API call to retrieve 
     *  all informations about current user
     * 
     * @returns Data about the current user
     */
    public static async fetchCurrentUser(): Promise<UserDTO> {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/current`);
        const data = await response.json()

        return data;
    }

    /**
     * Retrieve a list of users who matches with needs projects
     */
    public static async getListUsersMatches(listNeeds: SkillDTO[]): Promise<any> {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users/matches`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listNeeds)
        });
        const data = await response.json();

        return data;
    }
}