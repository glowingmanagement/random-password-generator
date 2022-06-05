const readFromLocalStorage = (key, defaultValue) => {
  // get from LS using key name
  const dataFromLS = localStorage.getItem(key);

  // parse data from LS
  const parsedData = JSON.parse(dataFromLS);

  if (parsedData) {
    return parsedData;
  } else {
    return defaultValue;
  }
};

const togglePassword = () => {
  const passwordIcon = $("#togglePassword");
  if (passwordIcon.hasClass("fa-eye-slash")) {
    passwordIcon.removeClass("fa-eye-slash");
    passwordIcon.addClass("fa-eye");
  } else {
    passwordIcon.addClass("fa-eye-slash");
    passwordIcon.removeClass("fa-eye");
  }
};

const onReady = () => {
  const data = readFromLocalStorage("passwords", []);
  data.forEach((element) => displayPasswords(element));
};

const displayPasswords = (element) => {
  $("#passwordTable").append(`<tr>
    <td>${element.website}</td>
    <td>${element.newPassword}</td>
  </tr>`);
};

onReady();

$("#homeBtn").click(function () {
  location.href = "../../index.html";
});
