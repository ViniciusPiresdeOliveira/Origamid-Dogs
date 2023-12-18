import React, { useContext } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import styles from './Login.module.css'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'

const Login = () => {

      const {login} = useContext(UserContext)
      const navigate = useNavigate()
      if (login === true) {
        navigate('/conta')
        // return <Navigate to='/conta'/>
      }

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path='/' element={<LoginForm />} />
                    <Route path='criar' element={<LoginCreate />} />
                    <Route path='perdeu' element={<LoginPasswordLost />} />
                    <Route path='resetar' element={<LoginPasswordReset />} />
                </Routes>
            </div>
        </section>
    )
}

export default Login