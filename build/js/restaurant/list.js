function listRestaurants(){

    console.log('listing restaurants')

    $.get("/yelp-jquery/data/restaurants.json.data", function(data) {

        var restaurants = JSON.parse(data)
        console.log(restaurants)

        $.get("/yelp-jquery/templates/listRestaurants.jade", function(template) {

            var html = jade.render(template, {items: restaurants})

            $("#list").html(html)

            viewRestaurant(restaurants[0].business_id)

        })

    })
}
