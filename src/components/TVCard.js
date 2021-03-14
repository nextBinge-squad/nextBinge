import { Fragment } from "react";

function TVCard({ tvShow }) {
  return (
    <>
      {/* displays tv show summary */}
      <div
        className="tvShow"
        dangerouslySetInnerHTML={{ __html: tvShow.summary }}
      >
      </div>
      {/* displays tv show priority */}
      <p>priority: {tvShow.priority}</p>
    </>
  )
}

export default TVCard;