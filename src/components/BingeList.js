import TVCardSmall from "./TVCardSmall";

// tvShows should be an array of tvShow objects
function BingeList({ tvShows }) {

  // defines a sorting criterion: compare two shows' upvote count
  const compareShows = (tvShow1, tvShow2) =>
    tvShow2.upvotes - tvShow1.upvotes;

  return (
    <ul className="UserList">
      {tvShows
        // sort tvShows based on compareShows criterion
        .sort(compareShows)
        // render each tv show using RenderTvShow component
        .map(tvShow =>
          <li className="tvShow" key={tvShow.id.firebase}>
            <TVCardSmall tvShow={tvShow} />
          </li>)}
    </ul>
  );
}

export default BingeList;