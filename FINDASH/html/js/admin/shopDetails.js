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
    var shopId = localStorage.getItem("shopPage");
    fetch("http://app.getcenter.info/api/v1/admins/get-shop-id", {
                method: 'POST',
                body: JSON.stringify({
                    id : shopId,
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
                    $("#shopDetails").append('<div class="card iq-mb-3"><div class="row no-gutters flex-row-reverse"><div class="col-md-3"><img height="230" src="'+data["shops"]["logo"]+'" class="card-img" alt="#"></div><div class="col-md-8"><div class="card-body text-right"><h4 class="card-title">'+data["shops"]["name"]+'</h4><p class="card-text">'+data["shops"]["address"]+" - "+ data["shops"]["center"] +'</p><p class="card-text"><small class="text-muted">'+data["shops"]["phone"]+'</small></p></div><br><br><a class="btn btn-warning" href="#" style="color: white;" onclick="'+"localStorage.setItem('editShopPage' , "+data["shops"]["id"]+");location.replace('editShop.html');"+'">تعديل المحل</a></div></div></div>');

                    // The location of Uluru
                    const uluru = { lat: data["shops"]["latitude"] , lng: data["shops"]["longitude"] };
                    // The map, centered at Uluru
                    const map = new google.maps.Map(document.getElementById("map"), {
                        zoom: 19,
                        center: uluru,
                    });
                    // The marker, positioned at Uluru
                    const marker = new google.maps.Marker({
                        position: uluru,
                        map: map,
                    });

                    for(var n = 0; n <= data["shops"]["images"].length - 1; n++){
                        if(n == 0){
                            $("#imageNode").append('<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>');
                            $("#showImageNode").append('<div class="carousel-item active"><img height="350" src="'+data["shops"]["images"][0]["img"]+'" class="d-block w-100" alt="#"></div>');
                        }else{
                            $("#imageNode").append('<li data-target="#carouselExampleIndicators" data-slide-to="'+n+'"></li>');
                            $("#showImageNode").append('<div class="carousel-item"><img height="350" src="'+data["shops"]["images"][n]["img"]+'" class="d-block w-100" alt="#"></div>');
                        }
                    }
                    for(var n = 0; n <= data["categories"].length - 1; n++){
                        $("#categoriesNode").append('<tr class="text-center"> <td><a class="btn btn-primary" style="color:white;" onclick="'+"localStorage.setItem('categoryPage' , "+data['categories'][n]['id']+");window.location.assign('categoryDetails.html');"+'">تفاصيل</a></td> <td>'+data["categories"][n]["model_count"]+'</td> <td>'+data["categories"][n]["class"]+'</td> <td>'+data["categories"][n]["name"]+'</td> </tr> ');
                    }
                    for(var n = 0; n <= data["models"].length - 1; n++){
                        var description = data["models"][n]["description"];
                        if(data["models"][n]["description"] == null){
                          description = "لا يوجد وصف";
                        }
                        $("#modelNode").append('<tr class="text-center"> <td><a class="btn btn-primary" href="#">تفاصيل</a> &nbsp; <a class="btn btn-danger" href="#">حذف</a></td> <td><img height="100" width="100" src="'+data["models"][n]["picture"]+'"></td> <td dir="rtl">'+data["models"][n]["price"]+' ج.م</td> <td>'+description+'</td> <td>'+data["models"][n]["category_name"]+'</td> </tr> ');
                    }
                    for(var n = 0; n <= data["offers"].length - 1; n++){
                        $("#offerNode").append('<tr class="text-center"> <td><a class="btn btn-warning" href="#" style="color: white;">تعديل</a>&nbsp;<a class="btn btn-danger" href="#">حذف</a></td> <td>'+data["offers"][n]["pieces_number"]+'</td> <td>'+data["offers"][n]["discount"]+'%</td> <td>'+data["offers"][n]["name"]+'</td> </tr> ');
                    }
                });    
            }
        }