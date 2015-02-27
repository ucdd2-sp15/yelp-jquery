function listRestaurants(){

    console.log('listing restaurants')

    $.get("https://lit-bayou-6850.herokuapp.com/search/term=food&location=Boulder", function(data) {

        var restaurants = data.businesses

        $.get("/yelp-jquery/templates/listRestaurants.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: restaurants})

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first doctor to view
            viewRestaurant(restaurants[0].id)
        })

    })

}
