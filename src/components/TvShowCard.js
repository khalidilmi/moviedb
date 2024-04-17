function TvShowCard({tv}){
    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src= {posterBasePath + tv.poster_path} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title "><span>{tv.title}</span></h5><span className="far fa-star" aria-hidden="true"></span><span className="ml-1">{tv.vote_average}</span>
                    <p className="card-text">{tv.overview}</p>
                    <div className="d-flex justify-content-between p-0"><span className="far fa-calendar" aria-hidden="true"> {tv.release_date}</span><span className="far fa-play-circle"></span></div>            
                </div>
            </div>
        </div>
      );
}


      
export default TvShowCard;