import './componentStyle/trackPathContainer.css'
import { Link } from "react-router-dom"

function TrackPathContainer({topic}) {
    return ( 
        <>
            <section className="pathContainer">
                <div className="pathLine">
                    <span className="pathCircle"></span>
                </div>
                <div className="pathTopicContainer">
                    <Link to={`/tracks/webdevpath/${topic.url}`}>
                        <div className="pathContentContainer">
                            <h1>{topic.name}</h1>
                            <p>{topic.content}</p>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default TrackPathContainer;