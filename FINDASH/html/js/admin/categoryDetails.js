var category_class ;
function classChanged(){
    var e = document.getElementById("class");
    var text = e.options[e.selectedIndex].text;
    category_class = text; 
   }

window.onload = function () {
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


    var categoryId = localStorage.getItem("categoryPage");
            fetch("http://app.getcenter.info/api/v1/admins/get-category-id", {
                method: 'POST',
                body: JSON.stringify({
                    id : categoryId,
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
                    document.getElementById("models_count").innerHTML = "عدد الموديلات : "+data["models_count"]+"";
                    document.getElementById("name").value = data["category"][0]["name"];
                    document.getElementById("position").value = data["category"][0]["position"];
                    var selectClass = document.getElementById('class');
                    var optionClass;
                    for (var i = 0; i < selectClass.options.length; i++) {
                        optionClass = selectClass.options[i];
                             if (optionClass.text == data["category"][0]["class"]) {
                                optionClass.setAttribute('selected', true);
                                classChanged();
                            // For a single select, the job's done
                        }
                    }
                    for(var n = 0; n <= data["models"].length -1; n++){
                        var description = data["models"][n]["description"];
                        if(description == null){
                            description = "لا يوجد وصف";
                        }
                        $("#modelsNode").append(' <tr class="text-center"> <td><a class="btn btn-primary" style="color:white;"  onclick="'+"localStorage.setItem('modelPage' , "+data['models'][n]['id']+");window.location.assign('modelDetails.html');"+'">تفاصيل</a> &nbsp; <!--a class="btn btn-danger" href="#">حذف</a--></td> <td><img height="100" width="100" src="'+data["models"][n]["picture"]+'"></td> <td dir="rtl">'+data["models"][n]["price"]+' ج.م</td> <td>'+description+'</td> <td>'+data["models"][n]["category"]+'</td> </tr>');
                    }
            });        
   }
}

function editCategory(){
    var categoryId = localStorage.getItem("categoryPage");
    var e = document.getElementById("class");
    var text = e.options[e.selectedIndex].text;
    category_class = text; 
    fetch("http://app.getcenter.info/api/v1/admins/edit-category", {
        method: 'POST',
        body: JSON.stringify({
            id : categoryId,
            name : document.getElementById("name").value,
            class : category_class,
            position :document.getElementById("position").value,
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
