var business = {
    
    searchByName: function(name) {

        $.get("http://api.yelp.com/v2/business/?name=" + name, apikey, function(data) {

            $.get("/yelp-jquery/contents/js/business/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })
        })
    },
    
    searchByCategory: function(category) {

        $.get("http://api.yelp.com/v2/business/?categories=" + category, apikey, function(data) {

            $.get("/yelp-jquery/contents/js/business/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })
        })
    },
    
    searchByLocation: function(location) {

        $.get("http://api.yelp.com/v2/business/?location=" + location, apikey, function(data) {

            $.get("/yelp-jquery/contents/js/business/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })
        })
    },
    
    load: function() {

        $.get("/yelp-jquery/contents/js/business/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        businesses.searchByName('Urban Curry')

    }
}
