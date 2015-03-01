$( "#doctors" ).on( "click", function( event ) {
    $("#searchdiv").html("")
    listDoctors()
})

$( "#users" ).on( "click", function( event ) {
    $("#searchdiv").html("")
    listUsers()
})

$( "#restaurants" ).on( "click", function( event ) {
    $("#searchdiv").html("")
    listRestaurants()
})

$( "#search" ).on( "click", function( event ) {
    search.load()
})

$( "#business" ).on( "click", function( event ) {
    $("#searchdiv").html("")
    business.load()
})

