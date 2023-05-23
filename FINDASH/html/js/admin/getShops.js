window.onload = function () {

    var login = localStorage.getItem("login");
    if (login == 0) {
        window.location.replace('../../login.html');
    } else {
    var username = localStorage.getItem("username");
    var photo = localStorage.getItem("adminPhoto");
    var position = localStorage.getItem("position");

    document.getElementById("adminPhoto").src = photo;
    document.getElementById("adminUsername").innerHTML = username;
    document.getElementById("adminPostiton").innerHTML = position;

    var sideBar;
    var access = localStorage.getItem("access");
    if(access == 1 || access == 2){
        sideBar = '<li onclick="'+"location.assign('editAdmin.html');"+'"> <a href="editAdmin.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-user-tie iq-arrow-left"></i><span>حساب الادمن</span></i></a> </li> <li onclick="'+"location.assign('management.html');"+'"> <a href="management.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-edit iq-arrow-left"></i><span>الادارة</span></i></a> </li> <li onclick="'+"location.assign('shops.html');"+'"> <a href="shops.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-store iq-arrow-left"></i><span>المحلات</span></i></a> </li> <li onclick="'+"location.assign('orders.html');"+'"> <a href="orders.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-tshirt iq-arrow-left"></i><span>الاوردرات</span></i></a> </li> <li onclick="'+"location.assign('payments.html');"+'"> <a href="payments.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-money-bill iq-arrow-left"></i><span>دفع عمولات</span></i></a> </li> <li onclick="'+"location.assign('statistics.html');"+'"> <a href="statistics.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-chart-bar iq-arrow-left"></i><span>احصائيات</span></i></a> </li> <li onclick="'+"location.assign('delivery.html');"+'"> <a href="#" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-truck-moving iq-arrow-left"></i><span>الشحن</span></i></a> </li> <li onclick="'+"location.replace('../../login.html');"+'"> <a href="#" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-sign-out-alt iq-arrow-left"></i><span>تسجيل الخروج</span></i></a> </li>';
    } 
    
    if(access == 4){
     sideBar = '<li onclick="'+"location.assign('editAdmin.html');"+'"> <a href="editAdmin.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-user-tie iq-arrow-left"></i><span>حساب الادمن</span></i></a> </li> <li onclick="'+"location.assign('shops.html');"+'"> <a href="shops.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-store iq-arrow-left"></i><span>المحلات</span></i></a> </li> <li onclick="'+"location.assign('orders.html');"+'"> <a href="orders.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-tshirt iq-arrow-left"></i><span>الاوردرات</span></i></a> </li> <li onclick="'+"location.assign('payments.html');"+'"> <a href="payments.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-money-bill iq-arrow-left"></i><span>دفع عمولات</span></i></a> </li><li onclick="'+"location.replace('../../login.html');"+'"> <a href="#" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-sign-out-alt iq-arrow-left"></i><span>تسجيل الخروج</span></i></a> </li>';

    }

    $("#iq-sidebar-toggle").append(sideBar);

    //var node = document.getElementById("node");
    function data (){
        alert("success");
    }
            fetch("http://app.getcenter.info/api/v1/admins/get-shops", {
                method: 'POST',
                body: JSON.stringify({
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
                    shops = data;
                    console.log(data); 
                    for(var n = 0; n <= data.length; n++){ //onclick=alert("'+data[n]["id"]+'"
                        $("#node").append('<div class="shop col-sm-6 col-md-6 col-lg-3"><div class="card iq-mb-3"><img height="185" src="'+data[n]["logo"]+'" class="card-img-top" alt="#"><div class="card-body"><div class="row"><div class="col-lg-6"><h4 class="card-title">'+data[n]["name"]+'</h4></div><div class="col-lg-6"><a href="#" class="btn btn-primary" onclick="'+"localStorage.setItem('shopPage' , "+data[n]["id"]+");location.replace('shopDetails.html');"+'">التفاصيل</a></div></div> </div></div></div>');
                    }  
                });    


                
                $( "#myInput" ).keyup(function() {
                    input = document.getElementById("myInput");
                    filter = input.value.toUpperCase();

                    fetch("http://app.getcenter.info/api/v1/admins/get-shops", {
                        method: 'POST',
                        body: JSON.stringify({
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
                            $("#node").empty();
                            for(var n = 0; n <= data.length; n++){
                                txtValue = data[n]["name"];
                                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                                    $("#node").append('<div class="shop col-sm-6 col-md-6 col-lg-3"><div class="card iq-mb-3"><img height="185" src="'+data[n]["logo"]+'" class="card-img-top" alt="#"><div class="card-body"><div class="row"><div class="col-lg-6"><h4 class="card-title">'+data[n]["name"]+'</h4></div><div class="col-lg-6"><a href="#" class="btn btn-primary" onclick="'+"localStorage.setItem('shopPage' , "+data[n]["id"]+");location.replace('shopDetails.html');"+'">التفاصيل</a></div></div> </div></div></div>');
                                }
                            }
                        });
                });                      
            
                /*
                function myFunction() {
                    var input, filter, table, tr, td, i, txtValue;
                    input = document.getElementById("myInput");
                    filter = input.value.toUpperCase();
                    table = document.getElementById("myTable");
                    tr = table.getElementsByTagName("tr");
                    for (i = 0; i < tr.length; i++) {
                      td = tr[i].getElementsByTagName("td")[0];
                      if (td) {
                        txtValue = td.textContent || td.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                          tr[i].style.display = "";
                        } else {
                          tr[i].style.display = "none";
                        }
                      }       
                    }
                  }
                  */
                  
            }
        }