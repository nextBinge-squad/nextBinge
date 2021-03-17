class tvShow {

  id = {
    network: '',
    webChannel: '',
  };

  upvotes = 0;

  constructor({
    name,
    genres,
    network,
    webChannel,
    image,
    summary,
    language,
    id,
    rating,
  }) {
    this.name = name;
    this.genres = [...genres];
    this.summary = summary ?
      // removes enclosing <p> </p> tags that all this API's summaries seem to have.
      summary.slice(3,-4) :
      `A show about stuff and things. 7/10.`;
    this.language = language;

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

    if (rating) {
      this.rating = rating.average;
    }

    if(id){
      this.id = id;
    }
  }
}

export default tvShow;