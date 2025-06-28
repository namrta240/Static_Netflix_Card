import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css";

// export default App
export const App = () => {
  return( 
  <section className="container" >
    <h1 className="card-heading">List of best Netflix Series</h1>
    <NetflixSeries/>;
  </section>
  ) }; 

 