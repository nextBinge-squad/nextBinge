class tvShow {

  id = {
    firebase: '',
    tvmaze: '',
  }

  constructor({
    name,
    genres,
    network,
    webChannel,
    image,
    summary,
  }) {
    this.name = name;
    this.genres = [...genres];
    this.image = image.medium;
    this.summary = summary;

    if (network) {
      this.network = network.name;
      this.id.network = network.id;
    }

    if (webChannel) {
      this.webChannel = webChannel.name;
      this.id.webChannel = webChannel.id;
    }
  }
}

export default tvShow;