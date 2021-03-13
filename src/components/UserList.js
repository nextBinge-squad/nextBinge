import RenderTvShow from "./RenderTvShow";

// tvShows should be an array of tvShow objects
function UserList({ tvShows }) {

  const compareShows = (tvShow1, tvShow2) =>
    tvShow2.priority - tvShow1.priority;

  return (
    <ul className="UserList">
      {tvShows
        .sort(compareShows)
        .map(tvShow =>
          <li className="tvShow" key={tvShow.id.firebase}>
            <RenderTvShow tvShow={tvShow} />
          </li>)}
    </ul>
  );
}

export default UserList;