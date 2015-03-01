var search = {

    searchByName: function(name) {

        // search legislators by name
        // ref: https://sunlightlabs.github.io/congress/committees.html

        $.get("https://rocky-refuge-9596.herokuapp.com/search/term=" + name +"&location=Boulder&limit=20", function(data) {
            console.log(data)
            $.get("/yelp-jquery/js/search/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data.businesses
                })
                $("#list").html(html)
            })

        })

    },

    load: function() {

        $.get("/yelp-jquery/js/search/ui.jade", function(template) {
            var html = jade.render(template)
            $("#searchdiv").html(html)
            $("#details").html("")
            $("#list").html("")
        })

    }

}