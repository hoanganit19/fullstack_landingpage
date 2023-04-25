var formAdd = document.querySelector(".form-add");
formAdd.addEventListener("submit", function (e) {
    e.preventDefault();
    var nameObj = this.querySelector('[name="name"]');
    var emailObj = this.querySelector('[name="email"]');
    var phoneObj = this.querySelector('[name="phone"]');

    var name = nameObj.value;
    var email = emailObj.value;
    var phone = phoneObj.value;

    var body = {
        name: name,
        email: email,
        phone: phone,
    };

    fetch("http://localhost:3000/users?_sort=id&_order=desc", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then(function (response) {
        if (response.ok) {
            nameObj.value = "";
            emailObj.value = "";
            phoneObj.value = "";

        }
    })
})
function updateCountdown() {
    var now = new Date();
    var target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1000, 24, 0, 0);
    var diff = target - now;

    if (diff <= 0) {
        location.reload();
    }

    var days = Math.floor(diff / 1000 / 60 / 60 / 24);
    var hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    var minutes = Math.floor(diff / 1000 / 60) % 60;
    var seconds = Math.floor(diff / 1000) % 60;

    // document.getElementById('day').innerText = days;
    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

