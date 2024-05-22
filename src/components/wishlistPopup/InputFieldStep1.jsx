import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { motion } from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { addDetails } from '../../store/slices/WishlistSlice';
import generateOTP from './generateOtp';
import {validateName,validateEmail} from "./validateNameEmail"

export default function FormDialog() {
  const [openpopup, setOpenpopup] = React.useState(false)

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errorName, setErrorName] = React.useState('')
  const [errorEmail, setErrorEmail] = React.useState('')


  const [openOTPdialog, setOpenOTPdialog] =React.useState(false)
  const [otp, setotp] =React.useState("")
  const dispatch = useDispatch();


  const handleClose = () => {
      setErrorEmail("")
      setErrorName("")
      setOpenpopup(false);
      setOpenOTPdialog(false);
      
    
  };

  React.useEffect(()=>{
    setOpenpopup(true)
  },[])
  const handleSubmit = (event) => {
    setErrorEmail("")
    setErrorName("")
    event.preventDefault();
    // Handle form submission logic here
    // console.log('Email:', email);
    // console.log('Password:', password);
    if(!validateName(name)){
      setErrorName("Name is not Correct")
      return
    }
    else if(!validateEmail(email)){
      setErrorEmail("Email is Not Correct")
      return
    }
    else{
      dispatch(addDetails({name,email}))
      setEmail("")
      setName("")
      setOpenOTPdialog(true)
    }
    // handleClose(); // Close the dialog after submission
  };

  const emailfromSelector=useSelector(state=>state.Wishlists)
  const mail=emailfromSelector.email
  console.log("emailfromSelector");
  console.log(emailfromSelector);
  console.log(mail);


  const handleEmail=(event)=>{
    event.preventDefault();
    const Otpgenrated=generateOTP()
    console.log(Otpgenrated);
    console.log(otp);

  }

  return (
    <React.Fragment>
      {/* sticky button */}
      <motion.div whileHover={{scale:1.2}} className=" fixed bottom-5 right-5 z-50">
        <button onClick={()=>setOpenpopup(!openpopup)} type="button" className=" text-black shadow-l g bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-lg py-3 px-4 me-2 mb-2">
        Join the Waitlist

      </button>
        </motion.div>


      <Dialog open={openpopup} onClose={handleClose}>
        <span className=' absolute top-3 right-3' onClick={()=>handleClose()}><CloseIcon/></span>
        {!openOTPdialog && <> <DialogTitle sx={{ 
          fontSize: '2rem',
          mt:"1rem",
          ml: '7rem',
          fontFamily:"sans-serif",
          '@media screen and (max-width: 600px)': {
          fontSize: '2rem',
          ml: '2rem'}}}
          >Join the waitlist</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ml: '4rem','@media screen and (max-width: 600px)': {
          fontSize: '1.2rem',
          ml: '0.4rem',textAlign:"center"} }}>
            Be the first to know when our app launches!
          </DialogContentText>
          
          <form className='w-full'>
            <TextField
              value={name}
              error={errorName}
              helperText={errorName}
              required
              onChange={(e) => setName(e.target.value)}
              label='Full Name'
              variant='outlined'
              fullWidth
              margin='normal'
              color='warning'
            />
            <TextField
              required
              error={errorEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label='Email'
              type="text"
              variant='outlined'
              fullWidth
              color='warning'
              margin='normal'
              helperText={errorEmail}
            />
          </form>
        </DialogContent>
        <DialogActions sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button type='submit' onClick={handleSubmit} variant='contained' sx={{mb:"1rem",borderRadius:"10%"}} color='secondary'>
            Join Now
          </Button>
        </DialogActions> </>}

        {openOTPdialog && <>
        <DialogTitle sx={{textAlign:"center",mt:"1rem"}}>Please Verify the Email</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{textAlign:"center"}}>
          Please enter the One-Time Password (OTP) that has been sent to your email address.
          </DialogContentText>
          <TextField
              value={otp}
              onChange={(e) => setotp(e.target.value)}
              label='Enter The Six Digit OTP'
              type="number"
              variant='outlined'
              fullWidth
              margin='normal'
              color='warning'
            />
        </DialogContent>
        <DialogActions sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Button type='submit' onClick={handleEmail} variant='contained' sx={{mb:"1rem",borderRadius:"10%"}} color='secondary'>
            Join Now
          </Button>
        </DialogActions> 
        </>}
      </Dialog>
    </React.Fragment>
  );
}

