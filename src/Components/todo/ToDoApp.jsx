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

    const [username,setUSer] = useState('UserName')

    function handleUsernameChange(event){
        console.log(event);
    }

    return(
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label >User Name:</label>
                <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <button type="button">Login</button>
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