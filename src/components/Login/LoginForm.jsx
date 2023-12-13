import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassowrd] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then((response) => {
            console.log(response)
            return response.json();
        }).then((json) => {
            console.log(json)

        })
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={({ target }) => setUsername(target.value)} value={username} />
                <input type="text" onChange={({ target }) => setPassowrd(target.value)} value={password} />
                <button>Entrar</button>
            </form>
            <Link to='/login/criar'>Cadastro</Link>
        </section>
    )
}

export default LoginForm