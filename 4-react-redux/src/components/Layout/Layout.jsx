import { NavLink } from 'react-router-dom'
import './Layout.css'


export const Layout = (props) => {
    return <div className='layout'>
        <header className='header'>
            <NavLink to='/' style={{ textDecoration: 'none', color: '#fff' }}>Магазин</NavLink>
            <NavLink to='/cart' style={{ textDecoration: 'none', color: '#fff' }}>Корзина</NavLink>
        </header>
        { props.children }
    </div>
}
