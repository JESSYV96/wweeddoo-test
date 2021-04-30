import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthAPI } from '../../API/auth.api';
import { LoginDTO } from '../../dto/auth/auth.dto';
import { SkillDTO } from '../../dto/skills/skill.dto';
import { UserDTO } from '../../dto/user/user.dto';
import { AppDispatch } from '../store';

interface UserSlice {
    user: UserDTO,
    isAuth: boolean
    loading: boolean
}

const initialState: UserSlice = {
    user: {
        firstname: '',
        lastname: '',
        email: '',
        projects: [],
        skills: [],
        needs: []
    },
    isAuth: false,
    loading: true
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        currentUser: (state, action: PayloadAction<UserDTO>) => {
            state.user.firstname = action.payload.firstname
            state.user.lastname = action.payload.lastname
            state.user.email = action.payload.email
            state.user.projects = [...action.payload.projects]
            state.user.skills = [...action.payload.skills]
            state.user.needs = [...action.payload.needs]
            state.loading = false
            state.isAuth = true
        },
        editSkills: (state, action: PayloadAction<SkillDTO[]>) => {
            state.user.skills = [...action.payload]
        },

        editNeeds: (state, action: PayloadAction<SkillDTO[]>) => {
            state.user.needs = [...action.payload]
        }
    },
})

export const { currentUser, editNeeds, editSkills } = userSlice.actions

export default userSlice.reducer

// Action 
export const login = ({ email, password }: LoginDTO) => async (dispatch: AppDispatch) => {
    try {
        const user = await AuthAPI.login({ email, password });
        if (user) {
            return dispatch(currentUser(user))
        }
    }
    catch (e) {
        throw new Error(e.message);
    }
}

export const currentUserTemp = () => async (dispatch: AppDispatch) => {
    const userTemp: UserDTO = {
        firstname: "John",
        lastname: "Smith",
        email: "john.smith@email.fr",
        projects: [
            {
                id: 1025,
                name: "Absolute project",
                description: "test project"
            }
        ],
        needs: [
            {
                id: 65,
                content: "Relations sociales"
            },
            {
                id: 82,
                content: "Photo"
            },
            {
                id: 10,
                content: "Développement durable"
            },
            {
                id: 13,
                content: "Recherche de partenaires et sponsors"
            },
            {
                id: 76,
                content: "Marketing digital"
            }
        ],
        skills: [
            {
                id: 15,
                content: "Gestion d'un projet de voyage"
            },
            {
                id: 82,
                content: "Organiser des événements"
            },
            {
                id: 16,
                content: "Autres langues"
            }
        ]

    }
    return dispatch(currentUser(userTemp))
}
export const updateProjectSkills = (skills: SkillDTO[]) => async (dispatch: AppDispatch) => {
    dispatch(editSkills(skills))
}

export const updateProjectNeeds = (skills: SkillDTO[]) => async (dispatch: AppDispatch) => {
    dispatch(editNeeds(skills))
}