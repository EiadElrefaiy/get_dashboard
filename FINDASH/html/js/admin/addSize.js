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


    var colorId = localStorage.getItem("colorPage");
    fetch("http://app.getcenter.info/api/v1/admins/edit-color-id", {
        method: 'POST',
        body: JSON.stringify({
            id : colorId,
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
            var description = data["color"][0]["description"];
            if(description == null){
                description = "لا يوجد وصف";
            }
            console.log(data); 
            $("#modelNode").append('<div class="col-lg-12"> <div class="card iq-mb-3"> <div class="row no-gutters flex-row-reverse"> <div class="col-md-3"> <img width="300" height="400" src="'+data["color"][0]["picture"]+'"" alt="#"> </div> <div class="col-md-8"> <div class="card-body text-right"> <h4 class="card-title">'+data["color"][0]["category_name"]+'</h4> <p class="card-text">'+description+'</p> <p class="card-text"><small dir="rtl" class="text-muted" style="font-size: 20px;">'+data["color"][0]["price"]+' جنيه</small></p> </div> <br> <br> <br> <br> <br> <br> <br> <a class="btn btn-warning" style="color: white;" onclick="'+"window.location.assign('editColor.html');"+'">تعديل اللون</a> </div> </div> </div> </div>');
           /*
            for(var n = 0; n <= data["pieces"].length - 1; n++){
                var piece_description = data["pieces"][n]["description"];
                if(piece_description == null){
                    piece_description = "لا يوجد وصف";
                }
                $("#colorsNode").append('<tr class="text-center"> <td><a onclick="'+"localStorage.setItem('colorPage' , "+data["pieces"][n]["id"]+");window.location.assign('editColor.html');"+'" class="btn btn-warning" style="color: white;">تعديل</a> &nbsp; <!--a class="btn btn-danger" href="#">حذف</a--></td> <td>'+data["pieces"][n]["sizes"]+'</td> <td>'+data["pieces"][n]["color"]+'</td> <td><img height="100" width="100" src="'+data["pieces"][n]["picture"]+'"></td> <td>'+description+'</td> </tr>');
            }
            */
           /*
                               var selectClass = document.getElementById('class');
                    var optionClass;
                    for (var i = 0; i < selectClass.options.length; i++) {
                        optionClass = selectClass.options[i];
                             if (optionClass.text == data["category"][0]["class"]) {
                                optionClass.setAttribute('selected', true);
                                classChanged();
                            // For a single select, the job's done
                        }

           */
            var e = document.getElementById("selectSize");
            for(var n =0; n <= e.options.length - 1; n++){
              for(var x = 0; x <= data["sizes"].length - 1; x++){
                if(data["sizes"][x]["size"] == e.options[n].text){
                    e.options[n].setAttribute('disabled', true);
                }
              }
            }
    });    
  }    
}

function addSize(){
    var colorId = localStorage.getItem("colorPage");
    var size;
    var e = document.getElementById("selectSize");
    var text = e.options[e.selectedIndex].text;
    size = text; 
    fetch("http://app.getcenter.info/api/v1/admins/add-size", {
        method: 'POST',
        body: JSON.stringify({
            id : colorId,
            size : size,
            quantity : document.getElementById("quantity").value,
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
            window.location.assign("editColor.html");
    });        
}
