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
    this.summary = summary ?
      summary :
      `<b>${name}</b> is a show about stuff and things. 7/10.`;

    if (image) {
      this.image = image.medium;
    }

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