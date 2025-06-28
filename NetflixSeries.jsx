import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () =>{
   
    return (
        <ul className ="grid grid-three--cols">
            {seriesData.map((curElem) =>(
                <SeriesCard key={curElem.name} data={curElem} />
            ))}
            
      
        </ul>
    );
   }

   export default NetflixSeries;