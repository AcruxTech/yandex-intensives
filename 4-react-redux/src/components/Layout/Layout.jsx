import './Layout.css'


export const Layout = (props) => {
    return <div className='layout'>
        <header className='header'>Магазин</header>
        { props.children }
    </div>
}
