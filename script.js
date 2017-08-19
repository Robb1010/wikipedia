  var app = new Vue({
    el: '#app',
    data: {
      input: '',
      results: '',
      id: '',
      article: ''
    },
    methods: {
      search: function() {
        let app = this;
        // Replace the spaces in the user input with "+" for the API link
        let search = app.input.replace(/" "/g, "+");
        app.id = '';
        // Calling the API and returning the search results
        $.ajax({
          type: "GET",
          url: 'http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=' + search + '&callback=?',
          contentType: "application/json; charset=utf-8",
          async: false,
          dataType: "json",
          headers: {
            'Api-User-Agent': 'educational purposes'
          },
          success: function(data) {
            var array = $.map(data.query.search, function(value, index) {
              return [value];
              document.getElementById("article").style.display = "inline";
            });
            app.results = array;
          }
        });
      },
      article: function(page) {
        return ('http://en.wikipedia.org/?curid=' + page);
      }

    }
  });
