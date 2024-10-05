import './pagesStyle/WebDevPath.css'
import { useState } from 'react';

function WebDevPath() {
    // State, um den Hover-Zustand zu verfolgen
    const [isHovered, setIsHovered] = useState(false);

    // Funktionen, um den Hover-Zustand zu ändern
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return ( 
        <>
            <div class="header">
                <h1>Web Entwicklung - Übersicht</h1>
                <h2>Hier kannst du dir ansehen, welche Stationen du durchläuft, um Web Entwicklung zu lernen</h2>
            </div>
            <section class="design-section">
                <div class="timeline">
                    <div class="timeline-empty"></div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3>HTML</h3>
                        <p>Some Text</p>
                    </div>
                    <div style={{textAlign:"right"}} class="timeline-component timeline-content">
                        <h3>CSS</h3>
                        <p>Some Text.</p>
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty"></div>
                    <div class="timeline-empty"></div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class=" timeline-component timeline-content">
                        <h3>Javascript</h3>
                        <p>Some Text.</p>
                    </div>
                </div>        
            </section>
        </>
    );
}

export default WebDevPath;