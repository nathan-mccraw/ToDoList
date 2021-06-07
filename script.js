let userName = prompt("Enter your first name: ");
while (!userName) userName = prompt("Enter your first name:");

let activity = prompt("Enter the activity (ie grocery shopping, chores, etc):");

document.getElementById("userName").textContent = userName + "'s";
document.getElementById("activityType").textContent = activity;
