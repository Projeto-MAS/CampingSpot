function checkData(){
    cleanErrorMessages();

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    password.type = "text";

    if (email=="" || password==""){
        general_Error.style.display = "block";
        return;
    }

    for (i=0; i<localStorage.length; i++){
        var item = localStorage.getItem(localStorage.key(i));
        var itemName = localStorage.key(i);
        if (item.includes('"tipo":"login"')){
            var indexArray = [];
            var indexArray2 = [];
            for (i = 0; i < item.length; i++) {
                if (item.charAt(i)==':'){
                    indexArray.push(i);
                }
                if (item.charAt(i)==','){
                    indexArray2.push(i);
                }
            }
            var firstPart = item.substring(0,indexArray[6]+2);
            var lastPart = item.substring(item.length-2);
            var newItem = firstPart + "conta" + lastPart;
            localStorage.removeItem(item);
            localStorage.setItem(itemName, newItem);
            console.log(newItem);
        }
    }

    var accountExists = 0;
    for (i=0; i<localStorage.length; i++){
        var item = localStorage.getItem(localStorage.key(i));
        var itemName = localStorage.key(i);
            if (item.includes('"email":"' + email + '"')){
                accountExists = 1;
                        console.log("login");
                        console.log(item);

                        var indexArray = [];
                        var indexArray2 = [];
                        for (i = 0; i < item.length; i++) {
                            if (item.charAt(i)==':'){
                                indexArray.push(i);
                            }
                            if (item.charAt(i)==','){
                                indexArray2.push(i);
                            }
                        }
                        var firstPart = item.substring(0,indexArray[6]+2);
                        var lastPart = item.substring(item.length-2);
                        var newItem = firstPart + "login" + lastPart;
                        localStorage.removeItem(item);
                        localStorage.setItem(itemName, newItem);
                        console.log(newItem);

                        location.replace("homesemlogin.html");

                    }
                else{
                    console.log("wrong password!");
                    password_Error.style.display = "block";
                }
            }
        }
    
    if (accountExists==0){
        console.log("account doesn't exist!");
        email_Error.style.display = "block";
    }



function cleanErrorMessages() {
    general_Error.style.display = "none";
    email_Error.style.display = "none";
    password_Error.style.display = "none";
}