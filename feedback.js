var error;

function validationFeedback(){
    if(checkChooseFeedback() == false){
        return;
    }
    else if (checkName() == false){
        return;
    }
    else if (checkEmail() == false){
        return;
    }
    else if (checkComments() == false){
        return;
    }
    else if (checkAggreement() == false){
        return;
    }

    else{
        document.getElementById("formFeedback").submit();
        error.innerHTML = '';
        alert('Thank You. We will follow up on your feedback via email. Please check the immediately');
    }

}

function checkChooseFeedback(){
    let feedback = document.getElementById("feedback").value;
    // validasi harus dipilih
    if(feedback == ""){
        error = "Choose the type of feedback"
        document.getElementById("errorText").innerText = error
        return false;
    }
    return true;
}

function checkName(){
    let name = document.getElementById("name").value;
    //validasi harus diisi
    if (name.length == 0){ 
        error = "Name must be filled"
        document.getElementById("errorText").innerText = error
        return false;
    }
    return true;
}

function checkEmail(){
    let email = document.getElementById("email").value;
    // validasi harus diisi
    if (email.length == 0){
        error = "Email must be filled"
        document.getElementById("errorText").innerText = error
        return false;
    }
    // validasi email harus ada @ dan .
    else if(!email.includes('@') || !email.includes('.')){
        error = "Email must contain '@' and '.'"
        document.getElementById("errorText").innerText = error
        return false;
    }
    return true;
}

function checkComments(){
    let comments = document.getElementById("comments").value;
    // validasi harus diisi
    if (comments.length == 0){
        error = "Comments must be filled"
        document.getElementById("errorText").innerText = error
        return false;
    }
    return true;   
}

function checkAggreement(){
    let aggreement = document.getElementById("aggreement").checked;

    if(aggreement == false){
        error = "Aggreement must be checked"
        document.getElementById("errorText").innerText = error
        return false;
    }

    return true;
}