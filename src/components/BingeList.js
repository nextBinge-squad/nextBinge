import TVCardSmall from "./TVCardSmall";

function BingeList({ bingelist }) {

  return (
    <ul className="UserList">
      {bingelist.shows.map(show =>
          <li className="tvShow" key={show.id.firebase}>
            <TVCardSmall tvShow={show} />
          </li>)}
    </ul>
  );
}

export default BingeList;