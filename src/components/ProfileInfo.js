import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Typography, Grid, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Modal from '@material-ui/core/Modal'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const ProfileInfo = () => {
    const [value, setValue] = React.useState('female')
    const [open, setOpen] = React.useState(false)

    const handleChange = (event) => {
        setValue(event.target.value)
      };


      const handleOpen = ()=>{
          setOpen(true)
      }
      const handleClose = ()=>{
          setOpen(false)
      }

    return (
        <Grid container direction="column">
           <Grid item>
              <Typography>
                  Personal Information
              </Typography>
           </Grid>
           <Grid item style={{marginTop: "3rem"}}>
               <Typography variant="body" style={{marginRight: "2rem"}}>Name</Typography>
               <TextField  label="First Name" style={{marginRight: "1rem"}} />
               <TextField  label="Last Name" style={{marginRight: "3rem"}}/>
               <Button variant="contained" color="primary">Edit</Button>
           </Grid>
           <Grid item style={{marginTop:'3rem'}}>
               <Typography style={{marginRight: "2rem"}} variant="body">Gender</Typography>
               <FormControl component="fieldset" style={{display: "inLine"}}>
                <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                 </FormControl>    
               <Button variant="contained" color="primary">Edit</Button>
           </Grid>
           <Grid item style={{marginTop: "3rem"}}>
               <Typography variant="body" style={{marginRight: "2rem"}}>Credentials</Typography>
               <TextField  label="Email" style={{marginRight: "1rem"}} />
               <TextField  label="Password" style={{marginRight: "3rem"}}/>
               <Button variant="contained" color="primary" onClick={handleOpen}>Edit</Button>
           </Grid>
           <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
         <h1>Hello</h1>
      </Modal>
        </Grid>
    )
}

export default ProfileInfo
