function search(term, location) {
    $.get("https://rocky-everglades-5328.herokuapp.com/search/term=" + term + "&location=" + location, function(data) {
        //console.log(data);
        //var results = JSON.parse(data);
        //console.log(results);
        $.get("/yelp-jquery/templates/search.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: data.businesses});

            // assign the rendered html to the dom element whose id is #list
            $("#search").html(html);

            // load the first doctor to view
            business(data.businesses[0].id)
        })
    })
}