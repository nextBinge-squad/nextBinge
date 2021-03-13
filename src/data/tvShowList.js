class tvShowList extends Array {
  /**
   * creates a tvShowList
   * @param {string} category this list's category (e.g. "sci-fi")
   * @param {array} shows an array of tvShow objects
   */
  constructor(category, shows) {
    // calls the Array class constructor
    // shows array is destructured since Array constructor takes individual items as inputs
    super(...shows);
    this.category = category;
  }
}