import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './UserHeader.module.css'
import UserHeaderNav from './UserHeaderNav'

const UserHeader = () => {

    const [title, setTitle] = useState('')
    const {pathname} = useLocation()

    useEffect(() => {
        switch (pathname) {
            case '/conta/postar':
                setTitle("Poste sua foto")
                break;
            case '/conta/estatisticas':
                setTitle("Estatísticas")
                break;
            default:
                setTitle("Minha Conta")
                break;
        }
    }, [pathname])

  return (
    <header className={styles.header}>
        <h1 className='title'>{title}</h1>
        <UserHeaderNav/>
    </header>
  )
}

export default UserHeader