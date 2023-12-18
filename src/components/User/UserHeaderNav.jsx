import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as AdicionarFoto } from '../../assets/adicionar.svg'
import { ReactComponent as Estatisticas } from '../../assets/estatisticas.svg'
import { ReactComponent as MinhasFotos } from '../../assets/feed.svg'
import { ReactComponent as Sair } from '../../assets/sair.svg'
import { UserContext } from '../../context/UserContext'
import useMedia from '../../hooks/useMedia'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {

    const mobile = useMedia('(max-width: 40rem)')
    const {userLogout} = useContext(UserContext)
    const [mobileMenu, setMobileMenu] = useState(false)
    const navigate = useNavigate();
    const {pathname} = useLocation()

    useEffect(() => {
      setMobileMenu(false)
    },[pathname])

    function handleLogout(){
        userLogout();
        navigate('/login');
    }

  return (
    <>
    {mobile &&
    <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)}></button>
    }
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to='/conta' end><MinhasFotos/>{mobile && 'Minhas Fotos'}</NavLink>
        <NavLink to='/conta/estatisticas'><Estatisticas/>{mobile && 'Estatísticas'}</NavLink>
        <NavLink to='/conta/postar'><AdicionarFoto/>{mobile && 'Adicionar Foto'}</NavLink>
        <button onClick={handleLogout}><Sair/>{mobile && 'Sair'}</button>
    </nav>
    </>
  )
}

export default UserHeaderNav