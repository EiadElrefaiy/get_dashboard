window.onload = function () {
    var username = localStorage.getItem("username");
    var phote = localStorage.getItem("adminPhoto");
    var position = localStorage.getItem("position");
    $("#iq-sidebar-toggle").append(' <li> <a href="editAdmin.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-user-tie iq-arrow-left"></i><span>حساب الادمن</span></i></a> </li> <li> <a href="management.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-edit iq-arrow-left"></i><span>الادارة</span></i></a> </li> <li> <a href="shops.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-store iq-arrow-left"></i><span>المحلات</span></i></a> </li> <li> <a href="orders.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-tshirt iq-arrow-left"></i><span>الاوردرات</span></i></a> </li> <li> <a href="payments.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-money-bill iq-arrow-left"></i><span>دفع عمولات</span></i></a> </li> <li> <a href="statistics.html" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-chart-bar iq-arrow-left"></i><span>احصائيات</span></i></a> </li> <li> <a onclick="logout();" class="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span class="ripple rippleEffect"></span><i class="las la-sign-out-alt iq-arrow-left"></i><span>تسجيل الخروج</span></i></a> </li>');
}