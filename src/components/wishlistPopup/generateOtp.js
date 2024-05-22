import { useSelector } from "react-redux";

export default function generateOTP() {
    const digits = '0123456789';
    let OTP = '';
  
    while (OTP.length < 6) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
  
    return OTP;
  }


  export const sendMail=async ()=>{
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "956f802d09e172",
          pass: "ee9a57ad5589f1"
        }
      });
      const email=useSelector(state=>state.Wishlists.email)
      console.log(email);
      try {
        const mailOptions={
            from:"Aajnabee@gmail.com",
            to:email,
            subject:emailType==="VERIFY"?"Verify Your Email" :"Reset Your Password",
            html:`<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">Here</a> to ${emailType==="VERIFY"?"verify your email":"reset your password"} or copy and paste the link below in your browser. <br/>
            ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`
          }
          const mailresponse=await transport.sendMail(mailOptions);
          console.log(mailresponse);
          return mailresponse
      } catch (error) {
        console.log(error);
      }
  }