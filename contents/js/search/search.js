var search = {

    searchByTerm: function(term, location) {
        $.get("https://yelp-server.herokuapp.com/search/term="+term+"&location="+location, function(data) {

            $.get("/yelp-jquery/js/search/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#searchlist").html(html)
            })

        })

    },


    searchByBusiness: function(business) {
        $.get("https://yelp-server.herokuapp.com/business/" + business, function(data) {
            console.log(data)
            $.get("/yelp-jquery/js/search/listBusiness.jade", function(template) {
                var html = jade.render(template, {
                    item: data
                })
                $("#searchlist").html(html)
            })

        })

    },



    load: function() {
        $.get("/yelp-jquery/js/search/ui.jade", function(template) {
            var html = jade.render(template)
            $("#list").empty()
            $("#details").empty()
            $("#ui").html(html)
        })

        // default search results
        search.searchByBusiness('yelp-san-francisco')

    }

}