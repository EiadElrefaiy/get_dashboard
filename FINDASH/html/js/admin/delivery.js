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

    fetch("http://app.getcenter.info/api/v1/admins/get-deliveries", {
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
            for(var n = 0; n <= data["deliveries"].length - 1; n++){
                $("#deliveryNode").append(' <tr class="text-center"> <td><a onclick="'+"localStorage.setItem('deliveryPage' , "+data["deliveries"][n]["id"]+"); window.location.assign('editDelivery.html')"+'"><div class="badge badge-pill badge-warning">تعديل</div></a> </td> <td dir="rtl">'+data["deliveries"][n]["price"]+' ج.م</td> <td>'+data["deliveries"][n]["state"]+'</td> </tr>');           
            }
    });        
  }
}

