function viewDoctor(business_id){

    console.log('viewing doctor id = ', business_id)

    $.get("https://lit-bayou-6850.herokuapp.com/business/"+ business_id, function(doctor) {

        $.get("/yelp-jquery/templates/viewDoctor.jade", function(template) {

            var html = jade.render(template, {item: doctor})

            $("#details").html(html)

        })

    })

}
