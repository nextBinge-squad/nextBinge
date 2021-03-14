class tvShowList extends Array {

  /**
   * creates a list of tv shows,
   * which is an array with a few extra properties
   * @param {string} name the name of this tv show list
   * @param  {...any} args any number of tvShow objects
   */
  constructor(name, ...args) {
    super(...args);
    this.name = name;
  }
}