window.onload = function(){
    var login = localStorage.getItem("login");
        if(login == 0){
        window.location.replace('../../login.html');
    }else{
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

    document.getElementById("month_date").valueAsDate = new Date();
    fetch("http://app.getcenter.info/api/v1/admins/get-statistics", {
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
            document.getElementById("total").innerHTML = data["total"] + " جنيه";
            document.getElementById("month_income").innerHTML = data["month_income"] + " جنيه";
            document.getElementById("day_income").innerHTML = data["day_income"] + " جنيه";
            document.getElementById("users_count").innerHTML = data["users_cont"] + " مستخدم";
            document.getElementById("total_orders_num").innerHTML = data["orders"] + " اوردر";
            document.getElementById("month_order").innerHTML = data["orders_month"] + " اوردر";
            document.getElementById("day_order").innerHTML = data["orders_day"] + " اوردر";
            document.getElementById("rest_orders").innerHTML = data["orders_not_done"] + " اوردر";
            document.getElementById("total_commession").innerHTML = data["commession"] + " جنيه";
            document.getElementById("month_commession").innerHTML = data["month_commession"] + " جنيه";
            document.getElementById("day_commession").innerHTML = data["day_commession"] + " جنيه";
            document.getElementById("rest_commession").innerHTML = data["commession_notDone"] + " جنيه";
            document.getElementById("month_profits").innerHTML = data["month_profits"] + " جنيه";
            document.getElementById("month_outcome").innerHTML = data["month_outcome"] + " جنيه";

            for(var n = 0; n <= data["outcomes"].length - 1; n++){
                var date = data["outcomes"][n]["created_at"];
                var outcome_date = date.substring(0, 10);    
                $("#outcomesNode").append(' <tr class="text-center"> <td> <a onclick="'+"deleteOutcome("+data["outcomes"][n]["id"]+");"+'" ><div class="badge badge-pill badge-danger">حذف</div></a> <a onclick="'+"localStorage.setItem('outcomePage' , "+data["outcomes"][n]["id"]+");location.assign('editOutcome.html');"+'"><div class="badge badge-pill badge-warning">تعديل</div></a> </td> <td>'+data["outcomes"][n]["description"]+'</td> <td dir="rtl">'+data["outcomes"][n]["money"]+'</td> <td>'+outcome_date+'</td> <td>'+data["outcomes"][n]["id"]+'</td></tr>');
            }
            $("#outcomesNode").append('<tr class="text-center"><th scope="col">الصافي</th><th scope="col">مرتجعات</th><th scope="col" colspan="2">اجمالي الخارج</th><th scope="col" colspan="2">اجمالي الداخل</th></tr><tr class="text-center"><td>'+data["total_profits"]+'</td><td>'+data["total_throwback"]+'</td><td colspan="2">'+data["total_outcomes"]+'</td><td colspan="2">'+data["total"]+'</td></tr>');
    });        
  }
}

function getMonthOutcome(){
    var date = new Date($('#month_date').val());
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    fetch("http://app.getcenter.info/api/v1/admins/get-outcome_month", {
        method: 'POST',
        body: JSON.stringify({
            year : year,
            month : month,
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
            $("#outcomesNode").empty(); 
            for(var n = 0; n <= data["outcomes"].length - 1; n++){
                var date = data["outcomes"][n]["created_at"];
                var outcome_date = date.substring(0, 10);  
                $("#outcomesNode").append(' <tr class="text-center"> <td> <a onclick="'+"deleteOutcome("+data["outcomes"][n]["id"]+");"+'" ><div class="badge badge-pill badge-danger">حذف</div></a> <a onclick="'+"localStorage.setItem('outcomePage' , "+data["outcomes"][n]["id"]+");location.assign('editOutcome.html');"+'"><div class="badge badge-pill badge-warning">تعديل</div></a> </td> <td>'+data["outcomes"][n]["description"]+'</td> <td dir="rtl">'+data["outcomes"][n]["money"]+'</td> <td>'+outcome_date+'</td> <td>'+data["outcomes"][n]["id"]+'</td></tr>');
            }
            $("#outcomesNode").append('<tr class="text-center"><th scope="col">الصافي</th><th scope="col">مرتجعات</th><th scope="col" colspan="2">اجمالي الخارج</th><th scope="col" colspan="2">اجمالي الداخل</th></tr><tr class="text-center"><td>'+data["total_profits"]+'</td><td>'+data["total_throwback"]+'</td><td colspan="2">'+data["total_outcomes"]+'</td><td colspan="2">'+data["total"]+'</td></tr>');
    });        
}

function deleteOutcome(id){
    fetch("http://app.getcenter.info/api/v1/admins/delete-outcome", {
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
