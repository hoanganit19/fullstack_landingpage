var formAdd = document.querySelector(".form-add");
formAdd.addEventListener("submit", function (e) {
  e.preventDefault();
  var btnText = e.target.querySelector("button").innerText;

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

  var data = new URLSearchParams(body).toString();

  e.target.querySelector("button").innerText = "Đang đăng ký...";
  e.target.querySelector("button").setAttribute("disabled", "disabled");

  fetch("https://email.unicode.vn/api/dang_ky_fullstack.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  }).then(function (response) {
    if (response.ok) {
      alert(
        "Đăng ký thành công! Unicode Academy sẽ liên hệ với bạn trong thời gian sớm nhất!"
      );
      nameObj.value = "";
      emailObj.value = "";
      phoneObj.value = "";
      e.target.querySelector("button").innerText = btnText;
      e.target.querySelector("button").removeAttribute("disabled");
    }
  });
});
function updateCountdown() {
  var now = new Date();
  var target = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1000,
    24,
    0,
    0
  );
  var diff = target - now;

  if (diff <= 0) {
    location.reload();
  }

  var days = Math.floor(diff / 1000 / 60 / 60 / 24);
  var hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  var minutes = Math.floor(diff / 1000 / 60) % 60;
  var seconds = Math.floor(diff / 1000) % 60;

  // document.getElementById('day').innerText = days;
  document.getElementById("hour").innerText = hours;
  document.getElementById("minute").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
