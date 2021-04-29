import React, { useState } from 'react';
import './styles.css';
import Button from '@material-ui/core/Button';
import { INeeds } from '../../dto/user.dto';
import { UserAPI } from '../../API/user.api';
import { userMatchDTO } from '../../dto/userMatch.dto';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface Props {
    projectNeeds?: INeeds[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        tableContainer: {
            width: '80vw',
            height: '80vh',
            overflow: 'auto',
            position: 'absolute',
            left: '10%',
            top: '10%'
        },
        table: {
            minWidth: 650,
            textAlign: 'center'
        }
    })
);

const ListMatchingUser = ({ projectNeeds }: Props) => {
    const classes = useStyles();
    const [usersMatches, setUsersMatches] = useState<userMatchDTO[]>();
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleModalOpen = () => {
        setOpenModal(true);
        callHelpHandler(projectNeeds || []);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    }

    const callHelpHandler = async (needs: INeeds[]): Promise<void> => {
        if (needs === []) return console.log("Vous n'avez pas de besoin en compétence");

        const users: userMatchDTO[] = await UserAPI.getListUsersMatches(needs)
        users.sort((a, b) => b.percentageMatch - a.percentageMatch)
        setUsersMatches(users);
    }

    return (
        <>
            <div className="helpButtonContainer">
                <Button
                    onClick={handleModalOpen}
                    variant="contained">A l'aide</Button>
            </div>

            <Modal
                open={openModal}
                onClose={handleModalClose}>
                {usersMatches
                    ? <TableContainer className={classes.tableContainer} component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Prénom / Nom</TableCell>
                                    <TableCell>Compétences</TableCell>
                                    <TableCell>% Matching</TableCell>
                                    <TableCell>Projets</TableCell>
                                    <TableCell>Prise de contact</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {usersMatches !== undefined && usersMatches.map((user, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{user.fullName}</TableCell>
                                        <TableCell>
                                            <List>
                                                {user.skillsMatches.map((skill) => (
                                                    <ListItem key={`${index}-${skill}`}>
                                                        <ListItemText
                                                            primary={skill}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </TableCell>
                                        <TableCell>{user.percentageMatch} %</TableCell>
                                        <TableCell>
                                            <List>
                                                {user.projects.map((project, index) => (
                                                    <ListItem key={`${index}-${project}`}>
                                                        <ListItemText
                                                            primary={project}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </TableCell>
                                        <TableCell>non</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <CircularProgress color="inherit" />}
            </Modal>
        </>
    )
}

export default ListMatchingUser
