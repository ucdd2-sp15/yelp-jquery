var oauth = OAuth({
    consumer: { 
        public: '0ZyMoF39-UnoxR9UoMDH9Q',
        secret: 'pstjrqtLRuEqj8ecYE-xUicSaNo'
    },
    signature_method: 'HMAC-SHA1'
})
var search = {

    searchByTerm: function (term){
        var request_data = {
            url: "http://api.yelp.com/v2/search?term=" + term,
            method: 'GET',
            data: {}
        }
    
        console.log('listing term')

        $.ajax({
            url: request_data.url,
            type: request_data.method,
            data: request_data.data,
            headers: oauth.toHeader(oauth.authorize(request_data, keys))
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
        search.searchByTerm('Food')
        
    }

}