import { Fragment } from "react";

function RenderTvShow({ tvShow }) {
  return (
    <>
      <div
        className="tvShow"
        dangerouslySetInnerHTML={{ __html: tvShow.summary }}
      >
      </div>
      <p>priority: {tvShow.priority}</p>
    </>
  )
}

export default RenderTvShow;