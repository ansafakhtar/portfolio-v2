import {useState,useEffect} from 'react';
import  {Button}  from '../Button/Button';
import './NavBar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

useEffect(() => {
    showButton();
},[]);    

    const onButtonClick = () => {
             fetch("Ansaf-Resume.pdf").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Ansaf-Resume.pdf";
                alink.click();
            });
        });
    };

window.addEventListener('resize', showButton);

    return (
        <>    
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="#root" className='navbar-logo' onClick={closeMobileMenu}>
                        <img className="nav-logo" alt='Nav Logo' src="/nav-logo.png"/>
                        </a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href="#root" className='nav-links' onClick={closeMobileMenu}>Home</a>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <a href="#project-cards" className='nav-links' onClick={closeMobileMenu}>Projects</a>
                    </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' onClick={onButtonClick}>RESUME</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
