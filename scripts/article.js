function Article (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Article.all = [];

Article.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishedStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

Article.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  rawData.forEach(function(ele){
    Article.all.push(new Article(ele));
  });
};

Article.fetchAll = function(){
  if (localStorage.rawData) {
    Article.loadAll(JSON.parse(localStorage.rawData));
    articleView.initIndexPage();
  } else {
    $.getJSON('/data/blogArticles.json', function(data){
      Article.loadAll(data);
      localStorage.rawData = JSON.stringify(data);
      articleView.initIndexPage();
    });
  }
};
