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


    var orderId = localStorage.getItem("orderPage");
    fetch("http://app.getcenter.info/api/v1/admins/get-order-id", {
        method: 'POST',
        body: JSON.stringify({
            id : orderId,
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
            var doneNode;
            if(data["order"][0]["done"] == 0){
                doneNode = '<div class="badge badge-pill badge-primary">في انتظار التأكيد</div>';
                $("#tableNode").append('<th scope="col">صورة</th><th scope="col">الحالة</th><th scope="col">سعر الشراء</th><th scope="col">السعر</th><th scope="col">المقاس</th><th scope="col">التصنيف</th>');
                $("#doneEventNode").append('<button onclick="'+"fetch('http://app.getcenter.info/api/v1/admins/order-done', { method: 'POST', body: JSON.stringify({ id:" + data["order"][0]["id"] + ", done:" + 3 + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'" type="button" class="btn btn-danger" style="color: white;">لم يتم التواصل</button>&nbsp&nbsp<button onclick="'+"fetch('http://app.getcenter.info/api/v1/admins/order-done', { method: 'POST', body: JSON.stringify({ id:" + data["order"][0]["id"] + ", done:" + 1 + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'" type="button" class="btn btn-success" style="color: white;">تأكيد الاوردر</button>');
            }else if(data["order"][0]["done"] == 1){
                doneNode = '<div class="badge badge-pill badge-warning">في انتظار التوصيل</div>';
                $("#tableNode").append('<th scope="col">صورة</th><th scope="col">الحالة</th><th scope="col">سعر الشراء</th><th scope="col">السعر</th><th scope="col">المقاس</th><th scope="col">التصنيف</th>');
                $("#doneEventNode").append('<button onclick="'+"fetch('http://app.getcenter.info/api/v1/admins/order-done', { method: 'POST', body: JSON.stringify({ id:" + data["order"][0]["id"] + ", done:" + 3 + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'" type="button" class="btn btn-danger" style="color: white;">لم يتم الاستلام</button>&nbsp&nbsp<button onclick="'+"fetch('http://app.getcenter.info/api/v1/admins/order-done', { method: 'POST', body: JSON.stringify({ id:" + data["order"][0]["id"] + ", done:" + 2 + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'" type="button" class="btn btn-success" style="color: white;">تم الاستلام</button>');
            }else if(data["order"][0]["done"] == 2){
                $("#tableNode").append('<th scope="col">صورة</th><th scope="col">الحالة</th><th scope="col">الحالة</th><th scope="col">سعر الشراء</th><th scope="col">السعر</th><th scope="col">المقاس</th><th scope="col">التصنيف</th>');
                doneNode = '<div class="badge badge-pill badge-success">نم الاستلام</div>';
                if(data["order"][0]["commession_done"] == 0){
                    $("#doneEventNode").append('<button onclick="'+"fetch('http://app.getcenter.info/api/v1/orders/update', { method: 'POST', body: JSON.stringify({ id:" + data["order"][0]["id"] + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'"  type="button" class="btn btn-warning" style="color: white;">اضافة العمولة</button>');
                    //onclick="'+"fetch('http://app.getcenter.info/api/v1/admins/order-done', { method: 'POST', body: JSON.stringify({ id:" + data["order"][0]["id"] + ", done:" + 3 + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'"    
                }else{
                    $("#doneEventNode").append('<button disabled  type="button" class="btn btn-success" style="color: white;">تم اضافة العمولة</button>');
                }
            }else{
                $("#tableNode").append('<th scope="col">صورة</th><th scope="col">الحالة</th><th scope="col">سعر الشراء</th><th scope="col">السعر</th><th scope="col">المقاس</th><th scope="col">التصنيف</th>');
                doneNode = '<div class="badge badge-pill badge-danger">لم يتم الاستلام</div>';
                $("#doneEventNode").append('');
            }

            $("#doneNode").append(doneNode);



            var date = data["order"][0]["created_at"];
            var order_date = date.substring(0, 10);
            document.getElementById("date").value = order_date;
            document.getElementById("user_name").value = data["order"][0]["user_name"];
            document.getElementById("order_name").value = data["order"][0]["name"];
            document.getElementById("phone").value = data["order"][0]["phone"];
            document.getElementById("address").value = data["order"][0]["address"];
            document.getElementById("order_number").innerHTML = "رقم الاوردر : " + data["order"][0]["id"];
            const uluru = { lat: data["order"][0]["latitude"] , lng: data["order"][0]["longitude"] };
            // The map, centered at Uluru
            const map = new google.maps.Map(document.getElementById("shop_location"), {
                zoom: 19,
                center: uluru,
            });
            // The marker, positioned at Uluru
            const marker = new google.maps.Marker({
                position: uluru,
                map: map,
            });
            document.getElementById("shop_image").src = data["shop"][0]["logo"];
            document.getElementById("shop_phone").innerHTML = "رقم المتجر: " + data["shop"][0]["phone"];
             for(var n = 0;  n <= data["pieces"].length - 1; n++){
                var existed
                if(data["pieces"][n]["existed"] == 0){
                    existed = '<a id="this" onclick="'+"fetch('http://app.getcenter.info/api/v1/admins/item-existed', { method: 'POST', body: JSON.stringify({ id:" + data["pieces"][n]["id"] + ", existed:" + data["pieces"][n]["existed"] + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'"><div class="badge badge-pill badge-danger">غير متوفر</div></a>'
                }else{
                    existed = '<a onclick="'+"fetch('http://app.getcenter.info/api/v1/admins/item-existed', { method: 'POST', body: JSON.stringify({ id:" + data["pieces"][n]["id"] + ", existed:" + data["pieces"][n]["existed"] + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'"><div class="badge badge-pill badge-success">متوفر</div></a>'
                }

                var done
                if(data["pieces"][n]["done"] == 0){
                    done = '<a onclick="'+"fetch('http://app.getcenter.info/api/v1/admins/item-done', { method: 'POST', body: JSON.stringify({ id:" + data["pieces"][n]["id"] + ", done:" + data["pieces"][n]["done"] + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'"><div class="badge badge-pill badge-danger">لم يتم الاستلام</div></a>'
                }else{
                    done = '<a onclick="'+"fetch('http://app.getcenter.info/api/v1/admins/item-done', { method: 'POST', body: JSON.stringify({ id:" + data["pieces"][n]["id"] + ", done:" + data["pieces"][n]["done"] + ", api_password: 'tQnyBMCfK32bUx6pUnIh5IzR', }), headers: { 'Content-Type': 'application/json;charset=UTF-8' } }) .then((response) => { return response.json(); }) .then((data) => { console.log(data); window.location.reload(); });"+'"><div class="badge badge-pill badge-success">تم الاستلام</div></a>'
                }
                if(data["order"][0]["done"] == 2){
                    $("#piecesNode").append('<tr class="text-center"><td><img height="100" width="100" src="'+data["pieces"][n]["picture"]+'"></td> <td> '+done+' </td> <td> '+existed+' </td> <td dir="rtl">'+data["pieces"][n]["price_get"]+' ج.م</td> <td dir="rtl">'+data["pieces"][n]["price"]+' ج.م</td> <td>'+data["pieces"][n]["size"]+'</td> <td>'+data["pieces"][n]["category"]+'</td> </tr>');
                }else{
                    $("#piecesNode").append('<tr class="text-center"><td><img height="100" width="100" src="'+data["pieces"][n]["picture"]+'"></td><td> '+existed+' </td> <td dir="rtl">'+data["pieces"][n]["price_get"]+' ج.م</td> <td dir="rtl">'+data["pieces"][n]["price"]+' ج.م</td> <td>'+data["pieces"][n]["size"]+'</td> <td>'+data["pieces"][n]["category"]+'</td> </tr>');

                }
             }       
             $("#piecesNode").append('<tr class="text-center"><th scope="col">الصافي</th><th scope="col" colspan="2">اجمالي البيع</th><th scope="col" colspan="2">اجمالي الشراء</th></tr><tr class="text-center"><td>'+data["profits"]+'</td><td colspan="2">'+data["order_total_price"]+'</td><td colspan="2">'+data["total_price_get"]+'</td></tr>');
    });        

   }
}