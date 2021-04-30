import React, { useState } from 'react';
import './styles.css'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { SkillDTO } from '../../../dto/skills/skill.dto';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 350,
        },
        select: {
            height: 36,
        },
        icons: {
            cursor: 'pointer',
            fontSize: 28,
            marginLeft: theme.spacing(1.5),
        },
    }),
);

interface Props {
    key?: string | number
    children: string
    allSkills?: SkillDTO[]
    addSkill?: any
    removeSkill?: any
    updateSkill?: any
}

const InputSkill = ({ children, allSkills, addSkill, updateSkill, removeSkill }: Props) => {
    const classes = useStyles();
    const [skillChanged, setSkillChanged] = useState<string>(children)

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
        const val = event.target.value as string
        setSkillChanged(val);
        updateSkill(val)
    };

    return (
        <form className="inputSkillContainer">
            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                    value={skillChanged}
                    className={classes.select}
                    onChange={handleChange}>
                    {allSkills && allSkills.map(skill => (
                        <MenuItem key={skill.id} value={skill.content}>{skill.content}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <AddCircleOutlineIcon
                onClick={() => addSkill()}
                className={classes.icons} />
            <DeleteOutlineIcon
                onClick={() => removeSkill()}
                className={classes.icons} />
        </form>
    )
}

export default InputSkill
