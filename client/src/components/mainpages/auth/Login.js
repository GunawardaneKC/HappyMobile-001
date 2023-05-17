import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {FaUserShield} from 'react-icons/fa';
import {BsFillShieldLockFill} from 'react-icons/bs';
import video from '../../../images/polygon-145031.mp4';
// import elaLogo from '../../../images/logo-hm.png';

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className='loginPageLR flexLR'>
        <div className="containerLR flexLR">

            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className='textDiv'>
                    <h2 className='title'>Buy And Rent Mobile Phones</h2>
                    <p>Adopt best quality Brand new Mobiles and Used ones.</p>
                </div>

                <div className="footerDiv flexLR">
                    <span className='text'>Don't have an account?</span>
                    <Link to={'/register'}>
                        <button className='btn font-secondary'>Sign Up</button>
                    </Link>
                </div>
            </div>    
            
            <div className="formDiv flexLR">
                <div className="headerDiv">
                    {/* <img src={elaLogo} alt="elaLogo" /> */}
                    <h3>Welcome Back!</h3>
                </div>

                <form noValidate onSubmit={loginSubmit} className='form grid' autoComplete='off'>
                    <span className='showMessage'>Login Status will go here</span>

                    <div className="inputDiv">
                        <label htmlFor="email">Email:</label>
                        <div className="input flexLR">
                            <FaUserShield className='icon' />
                            <input type="text" id="email" name="email" placeholder="Enter Email" value={user.email} onChange={onChangeInput} />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password:</label>
                        <div className="input flexLR">
                            <BsFillShieldLockFill className='icon' />
                            <input type="password" id="password" name="password" placeholder="Enter Password" value={user.password} onChange={onChangeInput} />
                        </div>
                    </div>

                    <button type='submit' className='btn flexLR'>
                        <span className='font-secondary'>Login</span>
                        {/* <AiOutlineSwapRight className='icon' /> */}
                    </button>

                    <span className='forgotPassword'>
                        Forgot your password? <a href="/">Click Here</a>
                    </span>

                </form>
            </div>

        </div>
      </div>
    )
}

export default Login
