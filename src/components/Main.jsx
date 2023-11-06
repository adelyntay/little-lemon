import logo2 from '../images/logo2.png';

function Main() {
    return(
        <div className="shop-card" id="shop-card">
            <div className="shop-info">
                <h6>Service</h6>
                <img src={logo2} alt="chef" width="50vh"/>
                <p>Types of garden design service that we provide </p>
            </div>
            <div className="shop-info ">
                <h6>New Arrivals</h6>
                <img src={logo2} alt="shop-info" width="50vh"/>
                <p>Shop indoor and outdoor plants for your home decoration</p>
            </div>
            <div className="shop-info ">
                <h6>Opening Hours</h6>
                <img src={logo2} alt="shop-info" width="50vh"/>
                <p>Closed every Monday<br/>
                Tues - Fri: 9am - 8pm<br/>
                Sat - Sun: 11am - 8pm</p>
            </div>
        </div>
    )
}

export default Main;