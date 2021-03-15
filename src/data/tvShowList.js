class tvShowList {
  /**
   * basically an array with a name attached
   * @param {string} name this tv show list's name
   * @param {array} tvShows an array of tvShow objects
   */
  constructor(name, tvShows) {
    this.name = name;
    this.shows = tvShows;
  }
}

export default tvShowList;