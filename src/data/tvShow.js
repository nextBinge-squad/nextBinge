class tvShow {

  id = {
    firebase: '',
    tvmaze: '',
    network: ''
  }

  constructor({
    name,
    genres,
    network,
    image,
    summary,
  }) {
    this.name = name;
    this.genres = [...genres];
    this.network = network.name;
    this.image = image.medium;
    this.summary = summary;
    this.id.network = network.id;
  }
}

export default tvShow;