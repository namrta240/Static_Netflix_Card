import "./Netflix.css";

export const SeriesCard =(props) =>{
  console.log(props);
  const {img_url, name, rating, description, cast, genre, watch_url } = props.data;

    return(
      <li className="card">
      <div>
      <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className="card-content">
      <h2>Name: {name} </h2>
      <h3>Rating:
        <span className={ `rating ${rating >= 8.5 ? "super_hit" : "average"}`}> {rating}</span> </h3>
      <p>Summary: {description} </p>
      <p>Genre: {genre}</p>
      <p>Cast:{cast}</p>
      <a href={watch_url} target="_blank">
          <button className="btn">Watch Now</button>
      </a>
      </div>
      </li>
        );
    
};