import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthAPI } from '../../API/auth.api';
import { LoginDTO } from '../../dto/auth.dto';
import { INeeds, ISkills, UserDTO } from '../../dto/user.dto';
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
        editSkills: (state, action: PayloadAction<ISkills[]>) => {
            state.currentUser.skills = [...action.payload]
        },
        editNeeds: (state, action: PayloadAction<INeeds[]>) => {
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

export const updateProjectSkills = (skills: ISkills[]) => async (dispatch: AppDispatch) => {
    dispatch(editSkills(skills))
}

export const updateProjectNeeds = (skills: INeeds[]) => async (dispatch: AppDispatch) => {
    dispatch(editNeeds(skills))
}