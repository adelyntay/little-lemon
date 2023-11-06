import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Header from '../components/Header'

function HomePage() {
    return(
    <>
    <Header />
    <Navbar />
    <div className="section">
        <Main />
        <Footer />
    </div>
    </>
    )
}

export default HomePage