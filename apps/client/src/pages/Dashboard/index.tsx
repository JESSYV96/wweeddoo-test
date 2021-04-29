import React from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'; 
import Project from '../../components/Project';
import ListMatchingUser from '../../components/ListMatchingUser';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hooks';
import { Redirect } from 'react-router-dom';

function DashboardPage() {
    const { currentUser, isAuth } = useAppSelector((state: RootState) => state.user)

    return (
        <div className="App">
            {isAuth ? (
                <>
                    <Navbar
                        firstname={currentUser.firstname}
                        lastname={currentUser.lastname} />

                    <Project
                        projectName={currentUser.projects[0].name}
                        projectDescription={currentUser.projects[0].description}
                        projectSkills={currentUser.skills}
                        projectNeeds={currentUser.needs} />

                    <ListMatchingUser projectNeeds={currentUser.needs} />
                </>    
            ) : <Redirect push to="/login" />
        }
        </div>
    );
}

export default DashboardPage;