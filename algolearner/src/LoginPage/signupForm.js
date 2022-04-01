import {Box,TextField, Button} from '@mui/material'
import {useState} from 'react';

function SignUpForm(){
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const [cPassword, setConfirmedPassword] = useState('');

    

    const register = () =>{ //register code
        const data = {  //set the object
            username: username,
            password: password
        };      
        fetch('http://35.225.166.73:3001/api/register', {  //connect to backend
            method: 'POST', //post
            headers: {
                'Content-Type': 'application/json',
        },
            body: JSON.stringify(data), //body is the set data from earlier
        })
            .then(response => (response.json()))

            .then(data => {
                alert(data.message);
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error:', error);
        });
        
    }
    return(
        <>
            <Box 
            sx ={{
                width: '20vw',
                height: '40vh',
                border: "2px solid rgb(216, 216, 216)",
                padding: '20px'
            }}>
                <form method = 'post' onSubmit = {(e)=>{
                    e.preventDefault();
                    e.preventDefault();
                    if (password == cPassword)
                        register();
                    else
                        alert("The confirmed password does not match");
                }}>
                    
                    <label for="username">Username:</label><br/>
                        <TextField  required placeholder="Enter username" type="text" id="login_Username" name="username"
                             onChange ={(e) =>{
                                setUser(e.target.value);
                            }}
                        /><br/><br/>

                    <label for="password">Password:</label><br/>
                        <TextField  required placeholder="Enter password" type="password" id="login_Password" name="password"
                            onChange ={(e) =>{
                                setPass(e.target.value);

                            }}
                        /><br/><br/>
                    <label for="cPassword">Confirm Password:</label><br/>
                        <TextField  required placeholder="Confirm password" type="password" id="login_cPassword" name="cPassword"
                            onChange ={(e) =>{
                                setConfirmedPassword(e.target.value);

                            }}
                        /><br/><br/>
                    
                    <Button variant = "outlined" type = 'submit'>Signup</Button>

                </form>
            </Box>

        </>
    );
}

export default SignUpForm;