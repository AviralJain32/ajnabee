import { createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "./config.jsx"


const firebaseAuth=getAuth(app);
export class AuthService{
    
    async createAccount({email,password}){
        try{
            await createUserWithEmailAndPassword(firebaseAuth,email,password);
        }
        catch(e){
            console.log("Error while creating user :: ",e);
        }
    }
}