import './pagesStyle/HomePage.css'
import Content from "./Content/HomePageDE.json"
import FooterComp from '../components/footer';

function HomePage() {
    return ( 
        <>
            <h1>{Content.header.welcomeText}</h1>
            <FooterComp />
        </>
    );
}

export default HomePage;