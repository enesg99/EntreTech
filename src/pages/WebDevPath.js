import TrackPathContainer from '../components/trackPathContainer';

function WebDevPath() {
    return (
        <>
            <div class="header" style={{marginBottom: "40px"}}>
                <h1>Web Entwicklung - Übersicht</h1>
                <h2>Hier kannst du dir ansehen, welche Stationen du durchläufst, um Web Entwicklung zu lernen</h2>
            </div>
            <TrackPathContainer topic={{ 
                url: "basics",
                name: "1. Basics",
                content: "Bevor du dich an das Programmieren setzt, ist es wichtig, erst einmal ein paar Grundlagen zu lernen."
            }} />
            <TrackPathContainer topic={{ 
                url: "html",
                name: "2. HTML",
                content: "Eine Skriptsprache, mit der du den Inhalt einer Website steuerst."
            }} />
            <TrackPathContainer topic={{ 
                url: "css",
                name: "3. CSS",
                content: "Eine Skriptsprache, die für das Styling der Seite verantwortlich ist."
            }} />
            <TrackPathContainer topic={{ 
                url: "javascript",
                name: "4. JavaScript",
                content: "Deine erste Programmiersprache. Früher nur für die Logik einer Website verwendet, heute aber ein Allrounder."
            }} />
        </>
    );
}

export default WebDevPath;
