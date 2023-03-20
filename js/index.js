console.log("Your index.js file is loaded correctly");
// Step 1: Change color of button on click
$("#buttonResume").on("click", function(){
    $('#buttonResume').css("background-color","black");
    $('#buttonResume').css("color", "white");
}); 
//Testing event listener on console log function
$("#buttonResume").on("click",function(){
    console.log("You clicked on buttonResume");
});
// Step 2: Open module view of Resume