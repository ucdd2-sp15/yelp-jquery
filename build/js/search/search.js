function search(term, location) {

    // Get the data through our handy-dandy server
    $.get("https://rocky-everglades-5328.herokuapp.com/search/term=" + term + "&location=" + location, function(data) {
        var html;
        var error;

        // If data.data exists
        if ('data' in data) {

            // data.data might be a string
            var parse = JSON.parse(data.data);

            // Get the error if it exists
            if (parse.error) error = parse.error;
        }

        // If error exists
        if (error) {

            // Get the error jade template
            $.get('/yelp-jquery/templates/error.jade', function(template) {
                html = jade.render(template, {item: error});  // Display the error
                $('#search').html(html);
                $('#image').html("<img src='./images/Hd_computer_guy_meme_by_zapgod16-d4t2jh3.png'/>");
            });
        // else if there is no businesses array
        } else if (data.businesses == undefined) {

            // Get the empty jade template (no results were found)
            $.get('/yelp-jquery/templates/empty.jade', function(template) {
                html = jade.render(template, {});  // No dynamic variables in template
                $('#search').html(html);
                $('#image').html("<img src='./images/Hd_computer_guy_meme_by_zapgod16-d4t2jh3.png'/>");
            });
        } else {

            // Get our local search template to render
            $.get("/yelp-jquery/templates/search.jade", function(template) {
                html = jade.render(template, {items: data.businesses});
                $("#search").html(html);
                $('#image').html();
                business(data.businesses[0].id);  // Default to the first business found for the #business element
            });
        }
    })
}