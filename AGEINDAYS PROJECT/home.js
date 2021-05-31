function ageInDays() {
    var input = prompt("Enter Your Birth Year"); // target the prompt
    var daysInYear = (2021 - input) * 365;// logic and put value in variable
    document.getElementById('result').innerHTML = "Your Age in Days are " + daysInYear; // attach the value of login in the H1 Section
}

function reset() {
    document.getElementById('result').remove();// We use remove() function to remove...
}





