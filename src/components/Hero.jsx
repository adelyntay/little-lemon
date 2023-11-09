import { Link } from 'react-router-dom';
import hero from '../images/hero.jpg';

function Hero() {
    return (
        <>
        <div className="hero-container">
        <div className="hero-info">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Start your day right with our handcrafted breakfast creations.</p>
            <button className="hero-btn">
                <Link to ="/booking" className="hero-link">Reserve a Table</Link>
            </button>
        </div>
        <div className="featured">
            <img src={hero} alt="featured" className="hero-img"/>
        </div>
        </div>
        </>
    )
}

export default Hero