window.onload = function () {
    localStorage.setItem("login" , 0);
    var form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        if(username == "" || password == "" ){
            document.getElementById('username').placeholder = "من فضلك ادخل اسم الادمن"
            document.getElementById('password').placeholder = "من فضلك ادخل كلمة السر"
            with(document.getElementById("username").style) {
                borderColor = 'red' ;
            } 
            with(document.getElementById("password").style) {
                borderColor = 'red' ;
            } 
                    }else{
            fetch("http://app.getcenter.info/api/v1/admins/login", {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password,
                    api_password: "tQnyBMCfK32bUx6pUnIh5IzR",
                }),
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                }
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    if (data["status"] == true) {
                        localStorage.setItem("login" , 1);
                        localStorage.setItem("username" , username);
                        localStorage.setItem("password" , password);
                        localStorage.setItem("id" , data["admin"]["id"]);
                        localStorage.setItem("adminPhoto" , data["admin"]["photo"]);
                        localStorage.setItem("access" , data["admin"]["access"]);
                        if(data["admin"]["access"] == 1){
                            localStorage.setItem("position" , "Owner");
                        }else if(data["admin"]["access"] == 2){
                            localStorage.setItem("position" , "Manager");
                        }else if(data["admin"]["access"] == 3){
                            localStorage.setItem("position" , "Recepion");
                        }else if(data["admin"]["access"] == 4){
                            localStorage.setItem("position" , "Data Entry");
                        }else{
                            localStorage.setItem("position" , "Delivery");
                        }
                        localStorage.setItem("api_token" , data["admin"]["api_token"]);
                        if(data["admin"]["access"] == 4){
                            location.replace("FINDASH/html/orders.html");
                        }else{
                            location.replace("FINDASH/html/statistics.html");
                        }
                    }else{
                        alert("خطأ في اسم المستخدم او كلمة السر")
                    }
                });    
        }
    });
}

