import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PASSWORD_RESET } from '../../api'
import useFetch from '../../hooks/useFetch'
import useForm from '../../hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

const LoginPasswordReset = () => {

    const [login, setLogin] = useState('')
    const [key, setKey] = useState('')
    const password = useForm()
    const {error, loading,request} = useFetch()
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const keyParams = params.get('key');
        const loginParams = params.get('login');
        if (keyParams) {
            setKey(keyParams)            
        }
        if (loginParams) {
            setLogin(loginParams)            
        }
    },[])

    async function handleSubmit(e){
        e.preventDefault()
        if (password.validate()) {            
            const {url, options} = PASSWORD_RESET({login, key, password:password.value})
            const {response} = await request(url, options)
            if (response.ok) {            
                navigate('/login')
            }
        }

    }

    return (
        <section className='animeLeft'>
            <Head title={'Resete a senha'}/>
            <h1 className='title'>Resete a Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova senha" type="password" name="password" {...password}/>
                {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
            </form>
            <Error error={error}/>
        </section>
    )
}

export default LoginPasswordReset