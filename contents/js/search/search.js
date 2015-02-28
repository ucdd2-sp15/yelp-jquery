function search(term, location) {

    // Get the data through our handy-dandy server
    $.get("https://rocky-everglades-5328.herokuapp.com/search/term=" + term + "&location=" + location, function(data) {

        // Get our local search template to render
        $.get("/yelp-jquery/templates/search.jade", function(template) {

            var html;
            var error;
            if ('data' in data) {
                var parse = JSON.parse(data.data);
                if (parse.error) error = parse.error;
            }
            if (error) {
                $.get('/yelp-jquery/templates/error.jade', function(template) {
                    html = jade.render(template, {item: error});
                    $('#search').html(html);
                    $('#business').html("<img src='./images/Hd_computer_guy_meme_by_zapgod16-d4t2jh3.png'></img>");
                });
            } else if (data.businesses == undefined) {
                $.get('/yelp-jquery/templates/empty.jade', function(template) {
                    html = jade.render(template, {});
                    $('#search').html(html);
                    $('#business').html("<img src='./images/Hd_computer_guy_meme_by_zapgod16-d4t2jh3.png'></img>");
                });
            } else {
                // render the template
                html = jade.render(template, {items: data.businesses});

                // assign the rendered html to the dom element whose id is #list
                $("#search").html(html);

                // load the first doctor to view
                business(data.businesses[0].id)
            }
        })
    })
}