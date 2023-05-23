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

    var modelId = localStorage.getItem("modelPage");
    fetch("http://app.getcenter.info/api/v1/admins/get-model-id", {
        method: 'POST',
        body: JSON.stringify({
            id : modelId,
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
            var description = data["model"][0]["description"];
            if(description == null){
                description = "لا يوجد وصف";
            }
            console.log(data); 
            $("#modelNode").append('<div class="col-lg-12"> <div class="card iq-mb-3"> <div class="row no-gutters flex-row-reverse"> <div class="col-md-3"> <img width="300" height="400" src="'+data["model"][0]["picture"]+'"" alt="#"> </div> <div class="col-md-8"> <div class="card-body text-right"> <h4 class="card-title">'+data["model"][0]["category_name"]+'</h4> <p class="card-text">'+description+'</p> <p class="card-text"><small dir="rtl" class="text-muted" style="font-size: 20px;">'+data["model"][0]["price"]+' جنيه</small></p> </div> <br> <br> <br> <br> <br> <br> <br> <a class="btn btn-warning" style="color: white;" onclick="'+"window.location.assign('editModel.html');"+'">تعديل الموديل</a> </div> </div> </div> </div>');
            document.getElementById("description").value = data["model"][0]["description"];
            document.getElementById("price").value = data["model"][0]["price"];
            document.getElementById("price_get").value = data["model"][0]["price_get"];
            document.getElementById("url").value = data["model"][0]["picture"];
            document.getElementById("position").value = data["model"][0]["position"];
        });        
    }
}

function editModel(){
    var modelId = localStorage.getItem("modelPage");
    fetch("http://app.getcenter.info/api/v1/admins/edit-model-id", {
        method: 'POST',
        body: JSON.stringify({
            id : modelId,
            description : document.getElementById("description").value,
            price : document.getElementById("price").value,
            price_get : document.getElementById("price_get").value,
            picture : document.getElementById("url").value,
            position : document.getElementById("position").value,
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
