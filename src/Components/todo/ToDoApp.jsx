import React, { useState } from 'react'
export default function ToDoApp(){
    return(
        <div className="ToDoApp">
            Hello World
            <LoginComponent/>
        </div>
    )


}

function LoginComponent(){

    const [username,setUserName] = useState('userName')
    const [password, setPassword] = useState('');
    const [showErrorMessage,setShowErrorMessage] = useState(false);
    const [showSuccessMessage,setShowtSuccessMessage] = useState(false);


    //username hook 
    function handleUsernameChange(event){
        console.log(event);
        setUserName (event.target.value);
    }

    //password hhook
    function handlePasswordChange(event){
        console.log(event);
        setPassword(event.target.value);

    }

    //login handler
    function handleSubmit(){
        if(username==="Tshiamo" && password==="1234"){
            console.log("SUCCESS");
            setShowErrorMessage(false);
            setShowtSuccessMessage(true);

        }else{
            console.log("FAILURE");
            setShowErrorMessage(true);
            setShowtSuccessMessage(false);
        }
    }

    function SuccessMessageComponent(){
        if(showSuccessMessage)
        return(
            <div className="successMessage">Authentication Successfull</div>
    
        )
        return null;
    }

    function ErrorMessageComponent(){
        if(showErrorMessage)
        return(
            <div className="successMessage">Authentication Successfull</div>
        )
        return null;
    }
    

    return(
        <div className="Login">
            <SuccessMessageComponent/>
            <div className="errorMessage">Authentication failed!</div>
            <div className="LoginForm">
                <div>
                    <label >User Name:</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}



function WelcomeComponent(){
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
}