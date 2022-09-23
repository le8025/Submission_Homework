import './Style.css'

function Header(){
    return(
        <div>
            <div className='nav'>
                <ul className='menu'>
                    <li><a href="home"><div>Home</div></a></li>
                    <li><a href="about"><div>About</div></a></li>
                    <li><a href="contact"><div>Contact</div></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;