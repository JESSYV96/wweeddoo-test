export interface UserDTO {
    firstname: string;
    lastname: string;
    email: string;
    projects: IProject[];
    skills: ISkills[];
    needs: INeeds[];
}

export interface IProject {
    name: string;
    description: string;
}

export interface ISkills {
    id: number;
    content: string;
}

export interface INeeds {
    id: number;
    content: string;
}