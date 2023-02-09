export default function Card(props){
    return(
        <div className="card">
            <div className="card--img" style={{
                backgroundImage: `url(${props.imageUrl})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}></div>
            <div className="card--info">
                <div className="card--location-info">
                    <h2><i class="fa-solid fa-location-dot card--location-icon"></i>{props.location}</h2>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}