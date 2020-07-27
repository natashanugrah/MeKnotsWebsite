var error;

function validationRating(){
    if(checkChooseRating() == false){
        return;
    }

    else{
        document.getElementById("formRating").submit();
        error.innerHTML = '';
        alert('Because you done rate for our products, you have discount 10% in next purchasing. Please, check your email immediately. Thank You');
    }
}

function checkChooseRating(){
    let rating = document.getElementById("rating").value;
    // validasi harus dipilih
    if(rating == ""){
        error = "Choose the rating"
        document.getElementById("errorText").innerText = error
        return false;
    }
    return true;
}
