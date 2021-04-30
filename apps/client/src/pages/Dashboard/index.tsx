import React, { useEffect }from 'react';
import './styles.css';
import Navbar from '../../components/Navbar'; 
import Project from '../../components/Project';
import ListMatchingUser from '../../components/ListMatchingUser';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hooks';
import { useHistory } from 'react-router-dom';

function DashboardPage() {
    const { isAuth, user } = useAppSelector((state: RootState) => state.user)
    const navigation = useHistory()
    useEffect(() => {
       if(!isAuth) {
            navigation.push('/login')
       }
    }, [isAuth, navigation])
    return (
        <div className="App">
            {isAuth && (
                <>
                    <Navbar
                        firstname={user.firstname}
                        lastname={user.lastname} />

                    <Project
                        projectName={user.projects[0].name}
                        projectDescription={user.projects[0].description}
                        projectSkills={user.skills}
                        projectNeeds={user.needs} />

                    <ListMatchingUser projectNeeds={user.needs} />
                </>    
            ) 
        }
        </div>
    );
}

export default DashboardPage;