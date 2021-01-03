import React from 'react'
import {Avatar,Grid, makeStyles, Typography} from "@material-ui/core"
import photo from "../images/pic.jpg"


const useStyles = makeStyles((theme) => ({
    mainContainer:{
      marginLeft: "5rem",
      display: "block"
    },
    profile:{
        width: "12rem",
        height: "10rem"
    }
  }));


const Profile = () => {
    const classes = useStyles()
    return (
        <Grid container direction="row" className={classes.mainContainer}>
            <Grid item>
                <Avatar src={photo} alt="profile photo" className={classes.profile} />
            </Grid>
            <Grid item style={{marginTop: "2rem", marginLeft:"3rem"}}>
                <Typography variant="body">
                   Md Riyaz Ansari
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Profile
