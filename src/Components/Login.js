import React from "react";
import { Navigate } from 'react-router-dom'
import Users from '../Users.json';

export default function Login() {

    const [currentUser, setCurrentUser] = React.useState({
        email:'',
        password:'',
        // remember: false,
    })

    const [error, setError] = React.useState('')
    const [accessToken, setAccessToken] = React.useState(false)

    //CHANGES VALUES OF INPUTS
    function handleChange(e){
        setCurrentUser(user => {
            return { 
                ...user,
                [e.target.name]:e.target.value
            }
        })
    }

    let getUser = {}

    function handleSubmit(e){
        e.preventDefault()


        Users.forEach(user => {
            // user.username === currentUser.email ? getUser = {...user} : setError('greska')

            if(user.username !== currentUser.email){
                return setError('Greska! korisnik ne postoji u bazi!')
            } 

            getUser = {...user}
            
            if(getUser.password === currentUser.password){
                setAccessToken(true)
                localStorage.setItem('access_token', JSON.stringify(accessToken))
                localStorage.setItem('User',JSON.stringify(currentUser))
                // if(logged === true) return <Navigate to='/home' replace={true} />
    
            } else {
                return setError('Greska! netacna lozinka!')
            }
        })        
    }

    return (
        <>
        {accessToken && <Navigate to="/home"/>}
            <section className="login" style={{backgroundImage:`url(https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg)`}}>
                
                <div className="login-main">

                    <h1>Sign in</h1>

                    <form onSubmit={handleSubmit} className="login-form">

                        <p className="login-error-msg">{error}</p>
                        <input type='email' className="login-email" name="email" onChange={handleChange} required placeholder='example@example.com' />
                        <input type='password' className="login-pass" name="password" onChange={handleChange} required placeholder='******' />
                        
                        <button>SIGN IN</button>
                        
                        <div className="save-credentials">
                            <input type='checkbox' checked={currentUser.remember} name='remember_me'/>
                            <label htmlFor="remember_me">remember me?</label>
                        </div>

                    </form>

                    <p className="sign-up">don't have account yet? <a href='/'>sign up</a></p>
                </div>
                
            </section>
        </>
    )
}