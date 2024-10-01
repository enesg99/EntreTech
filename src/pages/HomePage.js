import './pagesStyle/HomePage.css'
import Content from "./Content/HomePageDE.json"

function HomePage() {
    return ( 
        <>
            <h1>Home Page</h1>
            <h2>{Content.content.header.welcomeText}</h2>
        </>
    );
}

export default HomePage;