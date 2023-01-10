//هذا هو اليوم المستقبلي
let openingDay = new Date("March 18, 2023 23:30:20").getTime();



// إنشاء الكود اللي هيحسب الفرق ويظهر النتيجة كالآتي
let expired = setInterval(function () {
    // هذا هو التاريخ الحالي
    let currentDate = new Date().getTime();

    //إحسب الفرق بين التاريخين
    let difference = openingDay - currentDate;
    var day = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;

    if (difference < 0) {
    clearInterval(expired);
    document.getElementById("ex").innerHTML = "عفواً انتهت صلاحية العرض";
    }

}, 1000);