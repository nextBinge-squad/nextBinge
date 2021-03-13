// tvShows should be an array of tvShow objects
function UserList({ tvShows }) {
  return(
    <ul className="UserList">
      {tvShows.map(tvShow => 
        <li className="tvShow" key={tvShow.id.firebase}>

        </li> )}
    </ul>
  );
}

export default UserList;