var homeContent = `<h1>HOME</h1>`
var aboutContent = `<h1>ABOUT</h1>`
var productsContent = `<h1>PRODUCTS</h1>`
var contactContent = `<h1>CONTACT</h1>`


function initListeners() {
    $("nav a").click(function(e) {
        // this stores the id from the anchor tag
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";

        $("#app").html(eval(contentID));
    });
}




$(document).ready(function() {
    initListeners();
    $("#app").html(homeContent);
});