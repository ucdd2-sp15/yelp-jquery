var oauth = OAuth({
    consumer: { 
        public: 'PpC6R-ReP2lCXPZVxBvxrg',
        secret: '79Ppb4Wdx7cfmukBnpLwD86PDv4'
    },
    signature_method: 'HMAC-SHA1'
})
var token = {
    public: 'aNsg_E3KaV1BmH0Y5ylmNWgVlWGnQPsQ',
    secret: 'fQSciif3B6OAxfKZaKX3sWLCF70'
}
var search = {

    searchByTerm: function (term){
        var request_data = {
            url: "http://api.yelp.com/v2/search",
            method: 'GET',
            data: {
                
            }
        }
    
        console.log('listing term')

        $.ajax({
            url: request_data.url,
            type: request_data.method,
            data: oauth.authorize(request_data, token)
        }).done(function(data) {

            var searchKey = JSON.parse(data)

            $.get("/yelp-jquery/templates/search.jade", function(template) {

                var html = jade.render(template, {items: searchKey})            

                $("#search").html(html)

            })

        })
    },
    
    searchByLocation: function (location) {
    
        console.log('listing location')
        
        var loc = location
        loc = loc.replace('-', ' ')
        
        $.get("http://api.yelp.com/v2/search?location=" + loc, keys, function(data) {
        
            var searchKey = JSON.parse(data)
            
            $.get("/yelp-jquery/templates/search.jade", function(data) {
                var html = jade.render(template, {items: searchKey})
                
                $("#search").html(html)
            })
        })
    },
    
    load: function(){
        $.get("/yelp-jquery/templates/searchui.jade", function(template) {
            var html = jade.render(template)
            $("#searchui").html(html)
        })

        // default search results
        search.searchByTerm('food')
        
    }

}