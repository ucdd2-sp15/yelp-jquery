function listRestaurants(){

    console.log("listing restaurants")

    // $.get("https://lit-bayou-6850.herokuapp.com/search/term=food&location=San+Francisco", function(data) {

    //     var restaurants = JSON.parse(data)

    //     $.get("/yelp-jquery/templates/listRestaurants.jade", function(template) {

    //         // render the template
    //         var html = jade.render(template, {items: data})            

    //         // assign the rendered html to the dom element whose id is #list
    //         $("#list").html(html)

    //         // load the first doctor to view
    //         viewRestaurant(restaurants[0].business_id)

    //     })
    // })

    // var oauth = OAuth({
    //     consumer: {
    //         public: '0ZyMoF39-UnoxR9UoMDH9Q', 
    //         secret: 'pstjrqtLRuEqj8ecYE-xUicSaNo' 
    //     },
    //     signature_method: 'HMAC-SHA1',
    //     parameter_separator: String
    // })

    // var token = {
    //     public: keys.token,
    //     secret: keys.token_secret
    // }

    // var request_data = {
    //     url: "http://api.yelp.com/v2/business/yelp-san-francisco",
    //     method: "GET",
    // }

    // $.ajax({
    //     url: request_data.url,
    //     type: request_data.type,
    //     data: oauth.toHeader(oauth.authorize(request_data, token))
    // }).done(function(data){
    //     console.log(data)
    // })

    
    $.get("https://yelp-server.herokuapp.com/search/term=food&location=San+Francisco", function(data) {
        console.log(data)
        // var restaurants = JSON.parse(parseInt(data))

        $.get("/yelp-jquery/templates/listRestaurants.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: data})            
            $("#searchlist").empty()
            $("#ui").empty()
            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first doctor to view
            // viewRestaurant(data.business_id)

        })
    })
   
}
