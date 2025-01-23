let SIGNURL = "http://127.0.0.1:5501/client/public/signup.html";
//let URLHome = "http://127.0.0.1:5501/client/public/homepage.html";


// Change Page 
function changePageToSignup() {
    try {
        let fullName = document.getElementById("fullname").value
        validatePageInputData(fullName);
        SIGNURL = `signup.html?fullname=${encodeURIComponent(fullName)}`
        location.assign(SIGNURL);

    } catch (err) {
        console.log(err.message);
        alert(err.message);
        throw err;
    }
}

function validatePageInputData(fullName){
    if(fullName.length < 2 ) {
        throw new Error("Full name is less then 2 charcter");
    }
}