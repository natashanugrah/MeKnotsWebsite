var error;

function validationRegister(){
    let username = document.getElementById("username").value;
    let angka = 0;
    let huruf = 0;
    let password = document.getElementById("password").value;
    angka = 0;
    huruf = 0;
 

    if(checkFullname() == false){
        return;
    } 
    /*else if(checkUsername() == false){
        return;
    } */
    else if (username.length == 0){ 
        error = "Username must be filled"
        document.getElementById("errorText").innerText = error
        return false;
    }
    else if(checkDate2() == false){
        return;
    }
    else if (checkMonth() == false){
        return;
    }
    else if(checkYear2() == false){
        return;
    }
    else if(checkGender() == false){
        return;
    }
    else if (checkEmail() == false){
        return;
    }
    /*else if (checkPassword() == false){
        return; */
    else if (password.length == 0){
            error = "Password must be filled"
            document.getElementById("errorText").innerText = error
            return  false;
        }
    // untuk local storage = database 
    else {
        let temp = [username , password ];
        //console.log(checkFullname().name, checkUsername().username, checkPassword().password);
        let idx = localStorage.length +1;
        localStorage.setItem( idx, temp) ;
        alert('Thank You. Your account has already been registered');
        window.open("login.html" );
    }
    /*else{
        document.getElementById("formRegister").submit();
        error.innerHTML = '';
        alert('Thank You. Your account has already been registered');
    } */
}

function checkFullname(){
    var fullname = document.getElementById("fullname").value;
    // validasi harus diisi
    if(fullname.length == 0){
        error = "Fullname must be filled"
        document.getElementById("errorText").innerText = error
        return false;
    }
    // validasi harus tulisan
    if (checkInputLetter (fullname) == false){
        error = "Fullname must only letter"
        document.getElementById("errorText").innerText = error
        return false;
    } 

    return true;
}

// validasi looping check input letter untuk fullname
function checkInputLetter(fullname){
    var numericArray = ['0','1','2','3','4','5','6','7','8','9']

    for (let i= 0; i < fullname.length; i++) {
        for (let a = 0; a < numericArray.length; a++) {
            if (fullname.charAt(i) == numericArray[a]) {
                return false;
            }
        }
    }
    return true;
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
} */

function checkDay(){
    let day = document.getElementById("date");
    for (i = 1 ; i <= 31; i++) {
    let option = document.createElement('option') ;
    option.value = i ;
    option.innerHTML = i ;
    day.appendChild(option);
     
    }
}

function checkDate2(){
    let day = document.getElementById("date").value;
    if (day ==""){
        error = "Choose the date"
        document.getElementById("errorText").innerText = error
        return false;
     }
     return true;
}

function checkMonth(){
    let month = document.getElementById("month").value;
    // validasi pilih bulan bagian DOB
    if(month == ""){
        error = "Choose the month"
        document.getElementById("errorText").innerText = error
        return false;

    }
    return true;
}

function checkYear(){
    let year = document.getElementById("year");
    for (i = 1995 ; i <= 2020; i++) {
    let option = document.createElement('option') ;
    option.value = i ;
    option.innerHTML = i ;
    year.appendChild(option);
    }
}

function checkYear2(){
    let year = document.getElementById("year").value;
    if (year ==""){
        error = "Choose the year"
        document.getElementById("errorText").innerText = error
        return false;
     }
     return true;
}

function checkGender(){
    let inputGenderMale = document.getElementById("inputGenderMale").checked;
    let inputGenderFemale = document.getElementById("inputGenderFemale").checked;
    // validasi harus dipilih
    if(inputGenderMale == false && inputGenderFemale == false){
        error = "Gender must be choose"
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
    // validasi email dan . tidak boleh bersebelahan
    else if (email.includes('@.') || email.includes('.@')){
        error = "'@' and '.' cannot be side by side"
        document.getElementById("errorText").innerText = error
        return false;

    }
    // validasi email tidak boleh mengandung simbol lain selain @ dan . 
    else if (checkValidationEmail(email) == false){
        error = "Email must not contain symbols others than '@' and '.'"
        document.getElementById("errorText").innerText = error
        return false;

    }
    return true;
}

// validasi email tidak boleh mengandung simbol lain selain @ dan . menggunakan looping
function checkValidationEmail(email){
    for (let i = 0; i < email.length; i++) {
        symbols = email.charCodeAt(i)
        if((symbols == 47 || symbols >= 32 && symbols <=45) || (symbols >= 58 && symbols <=63) || (symbols >= 91 && symbols <= 96) || (symbols>=123 && symbols <=126) || (symbols >=128 && symbols <=254)){
            return false;
        }
    }
    return true;
}

/*let angka = 0;
let huruf = 0;
function checkPassword(){
    var password = document.getElementById("password").value;
    let length = password.length;
    angka = 0;
    huruf = 0;

    // validasi password harus diisi
    if (password.length == 0){
        error = "Password must be filled"
        document.getElementById("errorText").innerText = error
        return false;
        
    }
    // validasi password harus lebih dari 8 karakter
    else if(password.length < 8){
        error = "Password must be more than 8 characters"
        document.getElementById("errorText").innerText = error
        return false;
        
    }
    // validasi password harus alpha-numeric
    checkAlphaNum(password);
    if (angka == 0 | huruf == 0){
        error = "Password must be alpha numeric"
        document.getElementById("errorText").innerText = error
        return false;
    }

    return true;
}  */

// validasi password harus alpha-numeric menggunakan looping
function checkAlphaNum(password){
    for (let i = 0; i< password.length; i++) {
        let character = +password.charCodeAt(i);
        if(character >= 65 && character <= 90){
            huruf++;
        }
        if(character >= 97 && character <= 122){
            huruf++;
        }
        if(character >= 48 && character <= 71){
            angka++;
        }
        if(angka > 0 && huruf > 0){
            break;
        }
    }

    // console.log(huruf);
    // console.log(angka);
} 


/*let name = ["Natasha", "Alvin", "Lia"];
let userName = ["Natnat", "Alvina", "Linaa"];
let dob = ["20112000", "01091999", "09072000"]
let theGender = ["Female", "Male", "Female"]
let theEmail = ["natasha@gmail.com", "alvin_kalvin@yahoo.com", "linasina@gmail.com"]
let pass = ["asd23","efg31","hij34"];
        
        function register(){
            var newname = document.getElementById("fullname").value;
            var newuserName = document.getElementById("username").value;
            var newdob = document.getElementById("").value;
            var newtheGender = document.getElementById("").value;
            var newtheEmail = document.getElementById("email").value;
            var newpass = document.getElementById("password")
            name.push(newname);
            userName.push(newuserName);

            load();
        
        }
        function load(){
            list = document.getElementById("listRegister");
            
            var result = "<li>";
            for(ab = 0; ab < name.length; ab++)
            {
                result = result + "<ul>"+(ab+1)+". Fullname: "+name[ab]+" Username:"+userName[ab]+"</ul>";
            }
		    result = result + "</li>";
            list.innerHTML = result;
        }

        function loadData(){
            list = document.getElementById("listMenu");
            
            var result = "<li>";
            for(ab = 0; ab < name.length; ab++)
            {
                result = result + "<ul>"+(ab+1)+". Fullname: "+name[ab]+" Username:"+userName[ab]+"</ul>";
            }
		    result = result + "</li>";
        } */
