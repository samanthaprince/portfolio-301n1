var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function(){
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value ="' + val + '">' + val + '</option>';
      $('#author-filter').append(option-tag);
      val = $(this).attr('data-category');
      optionTag = '<option value ="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function(){
  $('#author-filter').on('change', function(){
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').show();
    } else {
      $('article').show();
      $('.template').hide();
    }
    $('#category-filter').val('');
  });
};

//category-filter if necessary

articleView.handleMainNav = function() {
  $(document).ready(function(){
    $('.main-nav').on('click', '.tab', function(){
      $('.tab-content').hide();
      $('#' + test).show();
    });
  });
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('#articles').on('click', 'a.read-on', function(e){
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

//function calls
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleMainNav();
articleView.setTeasers();
