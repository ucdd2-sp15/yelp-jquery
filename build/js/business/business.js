// TODO: Add some comments.
function business(id){
    $.get("https://rocky-everglades-5328.herokuapp.com/business/" + id, function(data) {

        $.get("/yelp-jquery/templates/business.jade", function(template) {

            console.log(data);
            var html = jade.render(template, {item: data});

            $("#business").html(html)
        })
    })
}