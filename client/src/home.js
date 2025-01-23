document.addEventListener('DOMContentLoaded', () => {
    showUserName();
})


function showUserName() {
    let fullName = getNameFromURL();
    document.getElementById("userhome").innerHTML = "Hello " + fullName;
}


function getNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('fullname');
}
