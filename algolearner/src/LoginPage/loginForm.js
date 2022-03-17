import {Box,TextField, Button} from '@mui/material'
import {useState} from 'react';

function LoginForm(){
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    

    const loginUser = () =>{
        const data = {  //set the object
            username: username,
            password: password
        };      
        fetch('http://localhost:3001/api/login', {  //connect to backend
            method: 'POST', //post
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json',
        },
            body: JSON.stringify(data), //body is the set data from earlier
        })
            .then(response => (response.json()))

            .then(data => {
                if (data.login != null){
                    alert(data.login);
                    window.location.reload();
                }
                else{
                    alert(data.message);
                }

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
                height: '33vh',
                border: "2px solid rgb(216, 216, 216)",
                padding: '20px'
            }}>
                <form method = 'post' onSubmit = {(e)=>{
                    e.preventDefault();
                    loginUser();
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
                    
                    <Button variant = "outlined" type = 'submit'>Login</Button>

                </form>
            </Box>

        </>
    );
}

export default LoginForm;