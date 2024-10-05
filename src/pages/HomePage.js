import './pagesStyle/HomePage.css'
import Content from "./Content/HomePageDE.json"
import FooterComp from '../components/footer';
import BrainPic from '../Images/Brainpic.jpg';

function HomePage() {
    return ( 
        <>
            <div class="header">
                <h1>{Content.header.welcomeText}</h1>
                <h2>{Content.header.slogan}</h2>
            </div>
            <div>
                <img style={{width:"100%", marginTop: "40px"}} src={BrainPic} />
            </div>
            <FooterComp />
        </>
    );
}

export default HomePage;