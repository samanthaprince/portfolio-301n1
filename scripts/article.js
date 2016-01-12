var articles = [];

function Article(opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.find('h1').html(this.title);
  $newArticle.find('.byline a').html(this.author);
  $newArticle.find('.byline a').attr('href', this.authorUrl);
  $newArticle.find('article-body').html(this.body);

  $newArticle.find('time[pubdate]').attr('title',this.publishedOn);

  $newArticle.find('time').html('about' + parseInt(new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')

  return $newArticle;
};
