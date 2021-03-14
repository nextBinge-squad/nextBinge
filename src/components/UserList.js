import TVCard from "./TVCard";

// tvShows should be an array of tvShow objects
function UserList({ tvShows }) {

  // defines a sorting criterion: sort based on tv shows' "priority" property
  const compareShows = (tvShow1, tvShow2) =>
    tvShow2.priority - tvShow1.priority;

  return (
    <ul className="UserList">
      {tvShows
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

export default UserList;