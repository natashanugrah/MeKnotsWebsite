// https://stackoverflow.com/questions/24165013/how-to-add-an-eventlistener-to-a-button-javascript

var error;

function validationReply(){
    if(checkReply() == false){
        return;
    }

    else{
        document.getElementById("formForum").submit();
        error.innerHTML = '';
        alert('Success reply thread');
    }
}

function checkReply(){
    let reply = document.getElementById("reply").value;
    // validasi harus diisi
    if (reply.length == 0){
        error = "Reply thread must be filled"
        document.getElementById("errorText").innerText = error
        return false;
    }
    return true;   
}

function validationThread(){
    if(checkChooseTopic() == false){
        return;
    }
    else if (checkSubject() == false){
        return;
    }
    else if (checkDescriptionThread() == false){
        return;
    }
    else{
        document.getElementById("formForum2").submit();
        error.innerHTML = '';
        alert('Success add thread');
    }
}

function checkChooseTopic(){
    let topic2 = document.getElementById ("topic2").value;
    // validasi harus dipilih
    if(topic2 == ""){
        error = "Must choose the topic"
        document.getElementById("errorText2").innerText = error
        return false;
    }
    return true;
}

function checkSubject(){
    let subject = document.getElementById("subject").value;
    //validasi harus diisi
    if (subject.length == 0){ 
        error = "Subject must be filled"
        document.getElementById("errorText2").innerText = error
        return false;
    }
    return true;
}

function checkDescriptionThread(){
    let addThread = document.getElementById("addThread").value;
    // validasi harus diisi
    if (addThread.length == 0){
        error = "The content of thread must be filled"
        document.getElementById("errorText2").innerText = error
        return false;
    }
    return true;   
}

/*function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        
        return v.toString(16);
    });
}

const btn = document.getElementById('add'); */



