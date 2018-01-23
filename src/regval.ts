function regval()
{
    var fname = <HTMLInputElement> document.getElementById("txt-fname");
    if(fname.value === "")
    {
        alert("Plase enter first name");
    }
    var lname = <HTMLInputElement> document.getElementById("txt-lname");
    if(lname.value === "")
    {
        alert("Plase enter last name");
    }
    var email = <HTMLInputElement> document.getElementById("txt-email");
    if(email.value === "")
    {
        alert("Plase enter email");
    }
    var number = <HTMLInputElement> document.getElementById("num");
    if(number.value === "")
    {
        alert("Plase enter number");
    }
    var password = <HTMLInputElement> document.getElementById("pwd");
    if(password.value === "")
    {
        alert("Plase enter password");
    }
    var confirm = <HTMLInputElement> document.getElementById("pwd2");
    if(password.value != confirm.value)
    {
        alert("Passwords do not match");
    }
    var prgm = <HTMLInputElement> document.getElementById("pgm");
    if(prgm.value === "")
    {
        alert("Plase select a program");
    }
    var course = <HTMLInputElement> document.getElementById("course");
    if(course.value === "")
    {
        alert("Plase select a course");
    }
}