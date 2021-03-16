import TVCard from "./TVCard";

// tvShows should be a tvShowList object
function BingeListDisplay({ tvShows }) {

  // defines a sorting criterion: compare two shows' upvote count
  const compareShows = (tvShow1, tvShow2) =>
    tvShow2.upvotes - tvShow1.upvotes;

  return (
    <ul className="BingeList">
      {tvShows.shows
        // sort tvShows based on compareShows criterion
        .sort(compareShows)
        // render each tv show using RenderTvShow component
        .map(tvShow =>
          <li className="tvShow" key={tvShow.id.firebase}>
            <TVCard tvShow={tvShow} />
          </li>)}
    </ul>
  );
}

export default BingeListDisplay;