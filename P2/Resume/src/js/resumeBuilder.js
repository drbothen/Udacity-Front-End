/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
$("#main").append("Joshua Magady");
var awesomeThoughts = "I am Joshua Magady and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);
*/

var yourname = "Joshua Magady";
var role = "Web Developer";
var skills =

var formattedName = HTMLheaderName.replace("%data%", yourname);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole).prepend(formattedName);