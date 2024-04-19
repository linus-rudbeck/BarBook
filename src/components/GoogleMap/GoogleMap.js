export default function GoogleMap({mapSrc}) {

    return (
        <iframe 
            src={mapSrc}
            width="100%" 
            height="450" 
            style={{border:0}}
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
    );
}