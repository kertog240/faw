var icon = document.getElementById('toggleTheme');
var buttonImg = document.querySelector('.theme-dependent-img');

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('bxs-moon');
        icon.classList.add('bxs-sun');
        buttonImg.src = "/img/logo-funpay 2.png?" + new Date().getTime();
        document.cookie = "theme=dark; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    } else {
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon');
        buttonImg.src = "/img/logo-funpay 1.png?" + new Date().getTime();
        document.cookie = "theme=light; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }
}

var icon2 = document.getElementById('toggleTheme2');

if (icon2 !== null) {
    icon2.onclick = function() {
        document.body.classList.toggle('dark-theme');
    
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('bxs-moon');
            icon.classList.add('bxs-sun');
            buttonImg.src = "/img/logo-funpay 2.png?" + new Date().getTime();
            document.cookie = "theme=dark; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        } else {
            icon.classList.remove('bxs-sun');
            icon.classList.add('bxs-moon');
            buttonImg.src = "/img/logo-funpay 1.png?" + new Date().getTime();
            document.cookie = "theme=light; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split('=');
        if (cookie[0] == 'theme') {
            if (cookie[1] == 'light') {
                icon.classList.remove('bxs-sun');
                icon.classList.add('bxs-moon');
                if (icon2 !== null) {
                    icon2.classList.remove('bxs-sun');
                    icon2.classList.add('bxs-moon');
                }
                buttonImg.src = "/img/logo-funpay 1.png";
                document.body.classList.remove('dark-theme');
            } else {
                icon.classList.remove('bxs-moon');
                icon.classList.add('bxs-sun');
                if (icon2 !== null) {
                    icon2.classList.remove('bxs-moon');
                    icon2.classList.add('bxs-sun');
                }
                buttonImg.src = "/img/logo-funpay 2.png";
                document.body.classList.add('dark-theme');
            }
        }
    }
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
    }
});

document.addEventListener("keydown", function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
    }
});

var icon = document.getElementById('toggleTheme');
var buttonImg = document.querySelector('.theme-dependent-img');

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        buttonImg.src = "/img/logo-funpay 2.png";
        document.cookie = "theme=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT"; // Сохраняем темную тему
    } else {
        buttonImg.src = "/img/logo-funpay 1.png";
        document.cookie = "theme=light; expires=Fri, 31 Dec 9999 23:59:59 GMT"; // Сохраняем светлую тему
    }
}