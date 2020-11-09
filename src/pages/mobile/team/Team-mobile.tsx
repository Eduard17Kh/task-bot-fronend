import React from 'react';
import {Avatar} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import AvatarTest from '../../../static/images/1.jpg';
import HeaderMobileComponent from "../../../components/mobile/header/header-mobile-component";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export default function TeamMobile() {
    const classes = useStyles();

    return (
        <div>
            <HeaderMobileComponent></HeaderMobileComponent>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={AvatarTest} />
                    </ListItemAvatar>
                    <ListItemText primary="Хусаинов Эдуард Рафилевич" secondary="кол-во задач в работе: 2" />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={AvatarTest} />
                    </ListItemAvatar>
                    <ListItemText primary="Хусаинов Эдуард Рафилевич" secondary="кол-во задач в работе: 2" />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </div>
    );
}