function listDoctors(){

    console.log('listing doctors')

    $.get("https://lit-bayou-6850.herokuapp.com/search/term=doctor&location=Boulder", function(data) {

        var doctors = data.businesses

        $.get("/yelp-jquery/templates/listDoctors.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: doctors})

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first doctor to view
            viewDoctor(doctors[0].id)

        })

    })

}
