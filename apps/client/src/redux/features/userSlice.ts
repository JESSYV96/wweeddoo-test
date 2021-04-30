import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthAPI } from '../../API/auth.api';
import { LoginDTO } from '../../dto/auth/auth.dto';
import { SkillDTO } from '../../dto/skills/skill.dto';
import { UserDTO } from '../../dto/user/user.dto';
import { AppDispatch } from '../store';

interface UserSlice {
    currentUser: UserDTO,
    isAuth: boolean
}

const initialState: UserSlice = {
    currentUser: {
        firstname: '',
        lastname: '',
        email: '',
        projects: [],
        skills: [],
        needs: []
    },
    isAuth: false
}

export const userSlice = createSlice({
    name: 'users/current',
    initialState,
    reducers: {
        currentUser: (state, action: PayloadAction<UserDTO>) => {
            state.currentUser.firstname = action.payload.firstname
            state.currentUser.lastname = action.payload.lastname
            state.currentUser.email = action.payload.email
            state.currentUser.projects = [...action.payload.projects]
            state.currentUser.skills = [...action.payload.skills]
            state.currentUser.needs = [...action.payload.needs]

            state.isAuth = true
        },
        editSkills: (state, action: PayloadAction<SkillDTO[]>) => {
            state.currentUser.skills = [...action.payload]
        },
        editNeeds: (state, action: PayloadAction<SkillDTO[]>) => {
            state.currentUser.needs = [...action.payload]
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
            dispatch(currentUser(user))
        }
    }
    catch (e) {
        throw new Error(e.message);
    }
}

export const updateProjectSkills = (skills: SkillDTO[]) => async (dispatch: AppDispatch) => {
    dispatch(editSkills(skills))
}

export const updateProjectNeeds = (skills: SkillDTO[]) => async (dispatch: AppDispatch) => {
    dispatch(editNeeds(skills))
}