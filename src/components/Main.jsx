import breakfast from '../images/breakfast.jpg';
import toast from '../images/toast.jpg';
import pancake from '../images/pancake.jpg';

function Main() {
    return(
        <div className="menu-section">
        <h1>Our Specials</h1>
        <div className="menu-card">
            <div className="menu-info">
                <img src={breakfast} alt="breakfast" width="100%"/>
                <p>Scrambled eggs, toast, bacon and seasonal greens</p>
            </div>
            <div className="menu-info ">
                <img src={toast} alt="avocado toast" width="100%"/>
                <p>Chunky avocado, tomatoes with multigrain bread</p>
            </div>
            <div className="menu-info ">
                <img src={pancake} alt="pancake" width="100%"/>
                <p>Pancakes topped with cream cheese
                and our daily freshly crafted strawberry jam</p>
            </div>
        </div>
        </div>
    )
}

export default Main;