import TVCard from "./TVCard";

/* 
params:
- name: this list's name
- shows: an array of tv show objects
- firebaseID: unique firebase ID
*/
function BingeList({
  name,
  setName,
  shows,
  removeShow,
  setUpvotes,
}) {

  return (<>
    <h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </h3>
    <ul className="BingeList">
      {shows.map((show, index) =>
        <li className="tvShow" key={show.id}>
          <TVCard
            show={show}
            setUpvotes={(upvotes) => setUpvotes(index, upvotes)}
            removeSelf={() => removeShow(index)}
            parent={"BingeList"}
          />
        </li>
      )}
    </ul>
  </>);
}

export default BingeList;
