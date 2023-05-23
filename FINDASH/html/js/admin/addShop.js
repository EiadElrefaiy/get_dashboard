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
}


var state;
var center;
function stateChanged(){
    if(document.getElementById('stateSelect').value == "alex") {
        $("#centerSelect").empty();
        $("#centerSelect").append("<option>الإسكندرية</option><option>برج العرب</option>");
   }
   if(document.getElementById("stateSelect").value == "ismailia"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>الإسماعيلية</option><option>فايد</option><option>القنطرة شرق</option><option>القنطرة غرب</option><option>التل الكبير</option><option>ابو صوير</option><option>القصاصين</option>");
   }
   if(document.getElementById("stateSelect").value == "aswan"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>أسوان</option><option>دراو</option><option>كوم امبو</option><option>النوبة</option><option>ادفو</option>");
   }
   if(document.getElementById("stateSelect").value == "ismailia"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>الإسماعيلية</option><option>فايد</option><option>القنطرة شرق</option><option>القنطرة غرب</option><option>التل الكبير</option><option>ابو صوير</option><option>القصاصين</option>");
   }
   if(document.getElementById("stateSelect").value == "asiot"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>أسيوط</option><option>ديروط</option><option>منقلوط</option><option>القوصية</option><option>ابنوب</option><option>ابو تيج</option><option>الغنايم</option><option>ساحل سليم</option><option>البداري</option><option>الفتح</option>");
   }
   if(document.getElementById("stateSelect").value == "luxor"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>الزينية</option><option>البياضية</option><option>القرنة</option><option>ارمنت</option><option>الطود</option><option>اسنا</option>");
   }
   if(document.getElementById("stateSelect").value == "red sea"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>رأس غارب</option><option>الغردقة</option><option>القصير</option><option>سفاجا</option><option>مرسى علم</option><option>حلايب</option><option>شلاتين</option>");
   }
   if(document.getElementById("stateSelect").value == "behera"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>دمنهور</option><option>كفر الدوار</option><option>رشيد</option><option>ادكو</option><option>ابو المطامير</option><option>ابو حمص</option><option>الدلنجات</option><option>المحمودية</option><option>الرحمانية</option><option>ايتاي البارود</option><option>رشيد</option><option>حوش عيسى</option><option>شبراخيت</option><option>كوم حمادة</option><option>بدر</option><option>وادي النطرون</option>");
   }
   if(document.getElementById("stateSelect").value == "bani swif"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>بني سويف</option><option>الواسطي</option><option>ناصر</option><option>اهناسيا</option><option>بيا</option><option>سمسطا</option><option>الفشن</option>");
   }
   if(document.getElementById("stateSelect").value == "borsaid"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>حي الشرق</option><option>حي الجنوب</option><option>بورفؤاد</option><option>الضواحي</option><option>المناخ</option><option>الزهور</option><option>العرب</option>");
   }
   if(document.getElementById("stateSelect").value == "south_sinani"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>ابو رديس</option><option>ابو زنيمة</option><option>نويبع</option><option>طابا</option><option>رأس سدر</option><option>دهب</option><option>شرم الشيخ</option><option>سانت كاترين</option><option>الطور</option>");
   }
   if(document.getElementById("stateSelect").value == "giza"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>البدرشين</option><option>الصف</option><option>اطفيح</option><option>العياط</option><option>الواحات البحرية</option><option>منشأة القناطر</option><option>اوسيم</option><option>كرداسة</option><option>ابو النمرس</option>");
   }
   if(document.getElementById("stateSelect").value == "dakahlia"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>المنصورة</option><option>طلخا</option><option>ميت غمر</option><option>دكرنس</option><option>أجا</option><option>منية النصر</option><option>السنبلاوين</option><option>بني عبيد</option><option>المنزلة</option><option>تمي الامديد</option><option>الجمالية</option><option>شربين</option><option>المطرية</option><option>بلقاس</option><option>ميت سلسيل</option><option>محلة دمنة</option><option>نبروه</option>");
   }
   if(document.getElementById("stateSelect").value == "domyat"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>دمياط</option><option>فارسكور</option><option>كفر سعد</option><option>الزرقا</option><option>كفر البطيخ</option>");
   }
   if(document.getElementById("stateSelect").value == "sohag"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>سوهاج</option><option>اخميم</option><option>البلينا</option><option>المراغة</option><option>المنشأة</option><option>دار السلام</option><option>جرجا</option><option>جهينة</option><option>ساقلته</option><option>طما</option><option>طهطا</option><option>العسيرات</option>");
   }
   if(document.getElementById("stateSelect").value == "suiz"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>السويس</option><option>الاربعين</option><option>عتاقة</option><option>الجناين</option><option>فيصل</option>");
   }
   if(document.getElementById("stateSelect").value == "sharkia"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>الزقازيق</option><option>منيا القمح</option><option>بلبيس</option><option>مشتول السوق</option><option>ابو حماد</option><option>ههيا</option><option>ابو كبير</option><option>فاقوس</option><option>الابراهيمية</option><option>ديرب النجم</option><option>كفر صقر</option><option>اولاد صقر</option><option>الحسينية</option>");
   }
   if(document.getElementById("stateSelect").value == "north_sinai"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>العريش</option><option>الشيخ زويد</option><option>رفح</option><option>بئر العبد</option><option>الحسنة</option><option>نخل</option>");
   }
   if(document.getElementById("stateSelect").value == "gharbia"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>طنطا</option><option>المحلة الكبرى</option><option>كفر الزيات</option><option>زفتى</option><option>السنطة</option><option>قطور</option><option>بسيون</option><option>سمنود</option>");
   }
   if(document.getElementById("stateSelect").value == "faiom"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>الفيوم</option><option>طامية</option><option>سنورس</option><option>اطسا</option><option>شواي</option><option>يوسف الصديق</option>");
   }
   if(document.getElementById("stateSelect").value == "cairo"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>القاهرة</option>");
   }
   if(document.getElementById("stateSelect").value == "qalobia"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>بنها</option><option>قليوب</option><option>القناطر الخيرية</option><option>الخانكة</option><option>كفر شكر</option><option>طوخ</option><option>شبين القناطر</option>");
   }
   if(document.getElementById("stateSelect").value == "qena"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>قنا</option><option>ابو تشت</option><option>نجع جمادي</option><option>دشنا</option><option>الوقف</option><option>فقط</option><option>نقادة</option><option>قوص</option><option>فرشوط</option>");
   }
   if(document.getElementById("stateSelect").value == "kafr_elsheikh"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>كفر الشيخ</option><option>دسوق</option><option>فوه</option><option>مطويس</option><option>البرلس</option><option>الحامول</option><option>بيلا</option><option>الرياض</option><option>سيدي سالم</option><option>قلين</option><option>رشيد</option><option>حوش عيسى</option><option>شبراخيت</option><option>كوم حمادة</option><option>بدر</option><option>وادي النطرون</option>");
   }
   if(document.getElementById("stateSelect").value == "matroh"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>مرسى مطروح</option><option>الحمام</option><option>العلمين</option><option>الضبعة</option><option>سيدي براني</option><option>السلوم</option><option>سيوة</option>");
   }
   if(document.getElementById("stateSelect").value == "monofya"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>شبين الكوم</option><option>السادات</option><option>منوف</option><option>اشمون</option><option>الباجور</option><option>قويسنا</option><option>بركة السبع</option><option>تلا</option>");
   }
   if(document.getElementById("stateSelect").value == "elminya"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>المنيا</option><option>العدوة</option><option>مغاغا</option><option>بني مزار</option><option>مطاي</option><option>سمالوط</option><option>ابو قرقاص</option><option>ملوى</option><option>دير مواس</option>");
   }
   if(document.getElementById("stateSelect").value == "new_vallage"){
    $("#centerSelect").empty();
    $("#centerSelect").append("<option>الخارجة</option><option>باريس</option><option>الداخلة</option><option>الفرافرة</option><option>بلاط</option>");
   }
   var e = document.getElementById("stateSelect");
   var text = e.options[e.selectedIndex].text;
   state = text;
   centerChanged();
   }
}

   function centerChanged(){
    var e = document.getElementById("centerSelect");
    var text = e.options[e.selectedIndex].text;
    center = text; 
   }

          function  addShop(){ 
                fetch("http://app.getcenter.info/api/v1/admins/add-shop", {
                    method: 'POST',
                    body: JSON.stringify({
                        name : document.getElementById("shopName").value,
                        phone: document.getElementById("shopPhone").value,
                        state : state,
                        center : center,
                        address : document.getElementById("shopAddress").value ,
                        longitude : document.getElementById("shopLong").value,
                        latitude : document.getElementById("shopLat").value,
                        logo : document.getElementById("shopLogo").value ,
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
                        window.location.replace("shops.html");
                });        
                
               /*
               alert(document.getElementById("shopName").value +"\n" + 
               document.getElementById("shopPhone").value +"\n" + state + "\n" + center + "\n"  +
               document.getElementById("shopAddress").value + "\n"  +
               document.getElementById("shopLong").value + "\n"  + 
               document.getElementById("shopLat").value + "\n"  +
               document.getElementById("shopLogo").value
               );
               */
            }