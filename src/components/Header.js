function Header() {
    return(
        <header>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" width="30%"/>
        </header>
    )
}

export default Header;