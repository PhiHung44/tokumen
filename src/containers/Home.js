import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContainerContent from '../components/container'
import '../containers/style.css'
const Home = ()=>{
    return (
       <div>
            <Header/>
            <Navbar/>
            <ContainerContent/>
            <Footer/>
       </div>
    );
}
export default Home;