var business = {
    
    searchById: function(id) {

        // https://rocky-refuge-9596.herokuapp.com
        // http://api.yelp.com/v2/business/
        $.get("https://rocky-refuge-9596.herokuapp.com/business/" + id, function(data) {
            console.log(data)
            $.get("/yelp-jquery/js/business/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html(html)
            })
        })
    },
    
    load: function() {

        $.get("/yelp-jquery/js/business/ui.jade", function(template) {
            var html = jade.render(template)
            $("#list").html(html)
            
        })

        // default search results
        $("#details").html("")
        business.searchById('yelp-san-francisco')
    }
}
