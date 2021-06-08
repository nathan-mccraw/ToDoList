//I don't like prompts -- possibly use a disappearing edit pencil graphic beside name that appears when hover
let userName = prompt("Enter your first name: ");
while (!userName) userName = prompt("Enter your first name:");

//use drop-down list with a custom option at the bottom
let activity = prompt("Enter the activity (ie grocery shopping, chores, etc):");

document.getElementById("userName").textContent = userName + "'s";
document.getElementById("activityType").textContent = activity;

//Function for form submission --if you hit submit
//-text from the text box is added into an array
//if statement
//-if array is empty then display graphic else display array
//array needs to display a check box on the left of the string and a button on the right of the string
//-check box on left of string in array that does text-transform strikeout <- strikeout function?
//-circular button on right with "x" that deletes array at that index <- delete function ?
