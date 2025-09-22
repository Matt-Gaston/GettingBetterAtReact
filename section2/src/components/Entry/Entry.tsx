import "./Entry.css"

interface EntryProps {
    img: {src: string, alt:string};
    title: string;
    country: string;
    dates: string;
    gmapslink: string;
    text: string;
}


function Entry (props: EntryProps) {
    return (
        <article>
            <div className="MainImgContainer">
                <img className="MainPhoto" src={props.img.src} alt={props.img.alt}/>
            </div>
            <div>
                <img className="marker" src="/src/assets/marker.png" alt="Marker Icon"/>
                <span>{props.country}</span>
                <a href={props.gmapslink}>View on Google Maps</a>
                <h2>{props.title}</h2>
                <p className="dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
            
        </article>
    )
}

export default Entry;