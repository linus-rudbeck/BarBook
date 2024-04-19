import GoogleMap from "@/components/GoogleMap/GoogleMap";
import { getMapSrc } from "@/data/google-map-codes";

export const metadata = { title: "Map" };

export default function MapPage(){
    const mapSrc = getMapSrc();

    return (<>
        <h2>Map</h2>

        <GoogleMap mapSrc={mapSrc} />
    </>);
}