$( "#doctors" ).on( "click", function( event ) {
	$("#searchlist").empty()
    $("#ui").empty()
    listDoctors()
})

$( "#users" ).on( "click", function( event ) {
	$("#searchlist").empty()
    $("#ui").empty()
    listUsers()
})

$( "#restaurants" ).on( "click", function( event ) {
	$("#searchlist").empty()
    $("#ui").empty()
    listRestaurants()
})

$( "#search" ).on( "click", function( event ) {
    search.load()
})