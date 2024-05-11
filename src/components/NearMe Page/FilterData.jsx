import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TuneIcon from '@mui/icons-material/Tune';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='flex font-poppins'>
      <Button sx={{textTransform:"capitalize",fontSize:"1.1rem",fontWeight:"400",color:"black",borderRadius:"0.75rem",padding:"0.5rem",margin:"0.5rem",borderWidth:"2px",borderColor:"black","&:hover":{backgroundColor:"#ffd600",borderColor:"black",borderWidth:"2px"}}} variant="outlined" onClick={handleClickOpen}>
      Filters
        <TuneIcon className='ml-2'></TuneIcon>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Filters
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography sx={{width:"25rem",display:"flex",justifyContent:"space-around",}}>
            <Typography sx={{fontWeight:"600",fontSize:"1.1rem",cursor:"pointer","&:active":{color:"#ffd600"}}}>Sort By</Typography>
            <Typography sx={{fontWeight:"600",fontSize:"1.1rem",cursor:"pointer"}}>Ratings</Typography>
          </Typography>
          <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group" 
              sx={{display:'flex',alignItems:"center",my:"3rem"}}
            >
              <FormControlLabel value="Popularity" control={<Radio color="warning" />} label="Popularity" />
              <FormControlLabel value="Descending" control={<Radio color="warning" />} label="Cost: High to Low" />
              <FormControlLabel value="Ascending" control={<Radio color="warning" />} label="Cost: Low to High" />
              <FormControlLabel value="Ratings" control={<Radio color="warning" />} label="Ratings " />
            </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{color:"black"}}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <button className=' focus:bg-primary hover:cursor-pointer border-2 border-black p-2 rounded-xl m-2 w-max flex items-center text-[1rem]'>
        Ratings: 4.0+
      </button>
      <button className=' focus:bg-primary hover:cursor-pointer border-2 border-black p-2 rounded-xl m-2 w-max flex items-center text-[1rem]'>
        Open Now
      </button>
    </div>
  );
}
    