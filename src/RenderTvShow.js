function RenderTvShow({ tvShow }) {
  return (
    <div className="tvShow" dangerouslySetInnerHTML={{ __html: tvShow.summary }}>

    </div>
  )
}

export default RenderTvShow;