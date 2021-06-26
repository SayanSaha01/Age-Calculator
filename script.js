const x = document.querySelector(".submit");
x.addEventListener("click", myfunc);
function myfunc() {
    let date = document.querySelector(".date").value;
    let month = document.querySelector(".month").value;
    let year = document.querySelector(".year").value;
    console.log(date);
    console.log(month);
    console.log(year);
    let today = new Date();
    var a = today.getFullYear();
    console.log(a);
    var age = a - year;
    console.log(age);

    var b = today.getMonth() + 1;
    console.log(b);
    var months = b - month;
    console.log(months);
    if(months<0){
        months=12+months;
    }

    var c = today.getDate();
    console.log(c);
    var day = c - date;
    console.log(day);

    if ((day == 0) && (months == 0)) {
        let show = document.querySelector(".right");
        show.innerHTML="HAPPY BIRTHDAY !!!<br>\n"+'<video id="birth" src="images/bday.mp4" controls autoplay width="400px" height="400px"></video>';
    }
    else {
        let show = document.querySelector(".right");
        show.innerHTML = "You are " + age + " years and " + months + " months old!<br>\n Belated Birthday Wishes!!! ";
    }
}
