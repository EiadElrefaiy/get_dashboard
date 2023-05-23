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


    $("#myInput" ).keyup(function() {
        input = document.getElementById("myInput").value;
    
        var trs = $('tr:not(:first)');
        $(trs).hide();
    
        var chkdName = "id";
        trs = $(trs).find("."+chkdName+':contains('+input+')').parent();
        $(trs).show();
    });                      


    $('input[type="radio"]').change(function () {
        //alert("suceess");
        var done = $('input[name="done"]:checked').prop('value') || '';
        var trs = $('tr:not(:first)');
        $(trs).hide();

            var chkdName = "done";
            trs = $(trs).find("."+chkdName+':contains('+done+')').parent();
            $(trs).show();
    });

    $("#reset").on('click', function(){
        document.getElementById("myInput").value = '';
        $(':radio').prop('checked', false);
        $('tr').show();
      });


    fetch("http://app.getcenter.info/api/v1/admins/get-payments", {
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
            for(var n = 0; n <= data["payments"].length - 1; n++){
                var done; 
                if(data["payments"][n]["done"] == 0){
                    done = '<div onclick="'+"fetch('http://app.getcenter.info/api/v1/admins/payment-done', { method: 'POST', body: JSON.stringify({ id:" + data["payments"][n]["id"] + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'" class="badge badge-pill badge-danger">لم يتم الدفع</div>';
                }else{
                    done = '<div class="badge badge-pill badge-success"> تم الدفع</div>';
                }
                var date = data["payments"][n]["created_at"];
                var order_date = date.substring(0, 10);    
                $("#paymentsNode").append('<tr class="text-center"> <td class="done">'+done+'</td> <td dir="rtl">'+data["payments"][n]["money"]+' ج.م</td> <td>'+data["payments"][n]["wallet_number"]+'</td> <td>'+order_date+'</td> <td>'+data["payments"][n]["user_name"]+'</td> <td class="id">'+data["payments"][n]["id"]+'</td> </tr>');    
            }
        });
    };
}
