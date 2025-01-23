let URLHome = "http://127.0.0.1:5501/client/public/homepage.html";

async function signupAllData() {
    try {
        if (typeof axios === 'undefined') {
            console.error('Axios is not loaded!');
            return;
        }

        let fullName = getNameFromURL();

        let signupData = getDataforSignup(fullName);

        const response = await axios.post("http://localhost:3000/login", signupData);

        console.log(response.data);

        if (response.statusText == "OK") {
            URLHome = `homepage.html?fullname=${encodeURIComponent(fullName)}`
            window.location.href = URLHome;
            //location.assign(URLHome);
        }

        //error.response.status)
        return response;
    } catch (e) {
        console.log(e.message);
        alert(e.message);
        throw e;
    }
}


function getNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('fullname');
}


function getDataforSignup(fullName) {

    // Get data from html document
    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    // Validate data
    let errMessage = validateFormData(userName, email, password, confirmPassword);

    // Set data to object
    let signupData = {};
    if (errMessage == "") {
        signupData = {
            fullname: fullName,
            userName: userName,
            email: email,
            password: password,
            confirmpassword: confirmPassword,
        }
    }
    return signupData;
}


function validateFormData(userName, email, password, confirmPassword) {
    let errorMessage = "";
    if (!(userName.length >= 4 && userName.length <= 8)) {
        errorMessage = errorMessage + "- Username is not between 4 to 8 characters " + "\n";
    }

    if (!email.includes("@")) {
        errorMessage = errorMessage + "- E-mail must include a '@' character " + "\n";
    }

    if (!password.includes("$")) {
        errorMessage = errorMessage + "- Password must include '$' sign" + "\n";
    }
    if (!(password.length >= 5 && password.length <= 10)) {
        errorMessage = errorMessage + "- Password is not between 5 to 10 characters " + "\n";
    }

    let res = confirmPassword.localeCompare(password);
    if (res !== 0) {
        errorMessage = errorMessage + "- Confirmed Password is not equal Password" + "\n";
    }

    if (errorMessage.length > 0) {
        errorMessage = "Error: \n " + errorMessage;
        throw new Error(errorMessage);
    }

    return errorMessage = "";
}



