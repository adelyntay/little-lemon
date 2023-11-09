import logo2 from '../images/logo2.png';

function Footer() {
    return(
        <footer>
            <div className="footer-logo">
                <img src={logo2} alt="Footer logo" width="50vh"/>
            </div>
            <div className="footer-address">
                <p>Opening Hours:</p>
                <p className="timing">Closed every Monday<br/>
                Tues - Fri: 9am - 1pm<br/>
                Sat - Sun: 9am - 2pm<br/>
                </p>
            </div>
        </footer>
    )

}

export default Footer;