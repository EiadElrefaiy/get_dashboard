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
          
        var access = localStorage.getItem("access");
        var user_id = localStorage.getItem("id");
         fetch("http://app.getcenter.info/api/v1/admins/get-admins", {
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
                 console.log(data); 
                 var position;
                 var action;
                 for(var n = 0; n <= data["admins"].length - 1 ; n++){
                    if(data["admins"][n]["access"] == 1){
                       position = "مالك";
                    }else if(data["admins"][n]["access"] == 2){
                       position = "مدير";
                    }else if(data["admins"][n]["access"] == 3){
                       position = "استقبال";
                    }else if(data["admins"][n]["access"] == 4){
                       position = "بيانات";
                    }else{
                       position = "مدير شحن";
                    }
                    
                    if(access == 1){
                        if(user_id == data["admins"][n]["id"]){
                            action = '<a onclick="'+"deleteAdmin("+data["admins"][n]["id"]+");"+'"><div class="badge badge-pill badge-danger">حذف</div></a> <a><div class="badge badge-pill badge-warning" onclick="'+"localStorage.setItem('adminPage' , "+data["admins"][n]["id"]+");location.assign('editAdmin.html');"+'">تعديل</div></a>';
                        }else{
                            action = '<a onclick="'+"deleteAdmin("+data["admins"][n]["id"]+");"+'"><div class="badge badge-pill badge-danger">حذف</div></a> <a><div class="badge badge-pill badge-warning" onclick="'+"localStorage.setItem('adminPage' , "+data["admins"][n]["id"]+");location.assign('editAdmins.html');"+'">تعديل</div></a>';
                        }
                }
                    else if(access == 2){
                        if(data["admins"][n]["access"] == 1){
                            action = "";
                        }
                        else{
                            if(user_id == data["admins"][n]["id"]){
                                action = '<a onclick="'+"deleteAdmin("+data["admins"][n]["id"]+");"+'"><div class="badge badge-pill badge-danger">حذف</div></a> <a><div class="badge badge-pill badge-warning" onclick="'+"localStorage.setItem('adminPage' , "+data["admins"][n]["id"]+");location.assign('editAdmin.html');"+'">تعديل</div></a>';
                            }else{
                                action = '<a onclick="'+"deleteAdmin("+data["admins"][n]["id"]+");"+'"><div class="badge badge-pill badge-danger">حذف</div></a> <a><div class="badge badge-pill badge-warning" onclick="'+"localStorage.setItem('adminPage' , "+data["admins"][n]["id"]+");location.assign('editAdmins.html');"+'">تعديل</div></a>';
                            }
                        }
                    }
                    $("#adminsNode").append(' <tr class="text-center"> <td> '+action+' </td> <td dir="rtl">'+data["admins"][n]["money"]+' ج.م</td> <td dir="rtl">'+position+'</td> <td dir="rtl">'+data["admins"][n]["address"]+'</td> <td>'+data["admins"][n]["phone"]+'</td> <td><img style="border-radius:100px;" width= "60" height="60" src="'+data["admins"][n]["photo"]+'"></td> <td>'+data["admins"][n]["username"]+'</td></tr>');
                 }
             });                                 
          }
        }

         function deleteAdmin(id){
            fetch("http://app.getcenter.info/api/v1/admins/delete-admin", {
                method: 'POST',
                body: JSON.stringify({
                    id : id,
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
                    window.location.reload();
            });        
        }
        

         