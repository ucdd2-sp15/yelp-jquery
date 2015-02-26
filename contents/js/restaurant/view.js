function viewRestaurant(business_id){

    console.log('viewing restaurant id = ', business_id)

    $.get("https://lit-bayou-6850.herokuapp.com/business/"+ business_id, function(data) {

        var restaurant = data;

        $.get("/yelp-jquery/templates/viewRestaurant.jade", function(template) {

            var html = jade.render(template, {item: restaurant})

            $("#details").html(html)

        })

    })

}
