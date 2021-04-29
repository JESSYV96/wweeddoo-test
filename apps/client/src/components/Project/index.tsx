import React, { useEffect, useState } from 'react'
import { SkillAPI } from '../../API/skill.api'
import { INeeds, ISkills } from '../../dto/user.dto'
import InputSkill from '../UI/DynamicInputField'
import "./styles.css"
import { useAppDispatch } from '../../redux/hooks';
import { updateProjectSkills, updateProjectNeeds } from '../../redux/features/userSlice'


import Button from '@material-ui/core/Button';

interface Props {
    projectName: string
    projectDescription?: string
    projectSkills: ISkills[]
    projectNeeds: INeeds[]
}

const Project = ({ projectName, projectDescription, projectSkills: ps, projectNeeds: pn }: Props) => {
    const dispatch = useAppDispatch()
    const [skills, setSkills] = useState<ISkills[]>()
    const [projectSkills, setProjectSkills] = useState(ps)
    const [projectNeeds, setProjectNeeds] = useState(pn)

    useEffect(() => {
        (async function getAllSkills() {
            const allSkills = await SkillAPI.getAllSkills();
            setSkills(allSkills)
        })();
    }, [])

    /**
     * 
     * @param skills 
     * @param skillsOrNeeds If true it means that skills, if false it means that needs
     * @returns 
     */
    const submitHandler = (skills: ISkills[] | INeeds[], skillsOrNeeds: boolean) => {
        if (skills === []) return;
        if(skillsOrNeeds) {
            dispatch(updateProjectSkills(skills))
        } else {
            dispatch(updateProjectNeeds(skills))
        }
    }

    const addProjectSkillsFieldHandler = () => {
        const newSkills = { id: 0, content: '' }
        if (projectSkills !== undefined) {
            const updateProjectSkills: ISkills[] = [...projectSkills, newSkills];
            return setProjectSkills(updateProjectSkills)
        }
        const updateProjectSkills: ISkills[] = [newSkills];
        return setProjectSkills(updateProjectSkills)
    }

    const removeProjectSkillsFieldHandler = (indexToRemove: number) => {
        if (projectSkills !== undefined) {
            const updateProjectSkills: ISkills[] = [...projectSkills];
            //updateProjectSkills.filter((_, index: number) => indexToRemove !== index)
            updateProjectSkills.splice(indexToRemove, 1)
            setProjectSkills(updateProjectSkills)
        }
    }

    const updateProjectSkillsHandler = (index: number, skillUpdate: string) => {
        if (projectSkills !== undefined) {
            const updateProjectSkills: ISkills[] = [...projectSkills];
            updateProjectSkills[index].content = skillUpdate
            setProjectSkills(updateProjectSkills)
        }
    }

    const addProjectNeedsFieldHandler = () => {
        const newSkills = { id: 0, content: '' }
        
        if (projectNeeds !== undefined) {
            const updateProjectNeeds: INeeds[] = [...projectNeeds, newSkills];
            return setProjectNeeds(updateProjectNeeds)
        }
        const updateProjectNeeds: INeeds[] = [newSkills];
        return setProjectNeeds(updateProjectNeeds)
    }

    const removeProjectNeedsFieldHandler = (indexToRemove: number) => {
        if (projectNeeds !== undefined) {
            const updateProjectNeeds: INeeds[] = [...projectNeeds];
            updateProjectNeeds.splice(indexToRemove, 1)
            setProjectNeeds(updateProjectNeeds)
        }
    }

    const updateProjectNeedsHandler = (index: number, needUpdate: string) => {
        if (projectNeeds !== undefined) {
            const updateProjectNeeds: INeeds[] = [...projectNeeds];
            updateProjectNeeds[index].content = needUpdate
            setProjectNeeds(updateProjectNeeds)
        }
    }

    return (
        <div className="project">
            <div>
                <h2>{projectName}</h2>
                <h3>{projectDescription}</h3>
            </div>

            <div className="projectInfos">
                <div className="projectSkills">
                    <strong>Compétences : </strong>
                    <div>
                        {projectSkills?.map((skill, index) => (
                            <InputSkill
                                addSkill={() => addProjectSkillsFieldHandler()}
                                removeSkill={() => removeProjectSkillsFieldHandler(index)}
                                updateSkill={(skillUpdate: string) => updateProjectSkillsHandler(index, skillUpdate)}
                                allSkills={skills}
                                key={skill.id}>{skill.content}</InputSkill>
                        ))}
                    </div>
                    <Button
                        onClick={() => submitHandler(projectSkills || [], true)}
                        variant="contained"
                        color="primary">
                        Save
                    </Button>
                </div>
                <div className="projectNeeds">
                    <strong>Besoin en compétences : </strong>
                    <div>
                        {projectNeeds?.map((need, index) => (
                            <InputSkill
                                addSkill={() => addProjectNeedsFieldHandler()}
                                removeSkill={() => removeProjectNeedsFieldHandler(index)}
                                updateSkill={(needUpdate: string) => updateProjectNeedsHandler(index, needUpdate)}
                                allSkills={skills}
                                key={need.id}>{need.content}</InputSkill>
                        ))}
                    </div>
                    <Button
                        onClick={() => submitHandler(projectNeeds || [], false)}
                        variant="contained"
                        color="primary">
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Project
