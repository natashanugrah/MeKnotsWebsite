var error;

function validationLogin(){
    //var error;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.length == 0){ 
        error = "Username must be filled"
        document.getElementById("errorText").innerText = error
        return false;
    }
    else if (password.length == 0){
        error = "Password must be filled"
        document.getElementById("errorText").innerText = error
        return false;
    }
    else if (ValidationUsernameAndPassword() == false){
        //document.getElementById("formLogin").submit();
        //error.innerHTML = '';
        window.open("home.html")
    }
    else{
        alert("Email or Password is don't match or not register.");
    }


/*function checkUsername(){
    var username = document.getElementById("username").value;
    //validasi harus diisi
    if (username.length == 0){ 
        error = "Username must be filled"
        document.getElementById("errorText").innerText = error
        return false;
        
    }
    return true;
} 

function checkPassword(){
    var password = document.getElementById("password").value;
  
    // validasi password harus diisi
    if (password.length == 0){
        error = "Password must be filled"
        document.getElementById("errorText").innerText = error
        return false;
        
    }
    return true;
} */

   function ValidationUsernameAndPassword (){
        for (let i = 1 ; i < localStorage.length+1  ; i++) {
            var penyimpanan = localStorage.getItem(i) ;
            var pisah = penyimpanan.split(",") ;
            console.log(pisah);
            if( pisah[0] == username && pisah[1] == password){
                return false ;
            }
        }
    }

}
  
   

