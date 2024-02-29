function replaceName() {
  var name = prompt("Halo, siapa nama Anda?", "");
  if (name === "null" || name === "") {
    name = "Guest";
  }
  document.getElementById("name").innerHTML = name;
}

document.getElementById("name").addEventListener("click", function () {
  replaceName();
});

//validasi
document
  .getElementById("message_form")
  .addEventListener("submit", validasiForm);

function validasiForm(event) {
  event.preventDefault();

  var fullname = document.getElementById("fullname").value;
  var dob = document.getElementById("dob").value;
  var gender = document.querySelectorAll('input[name="gender"]:checked');
  var selectedGenders = [];
  var message = document.getElementById("message").value;

  // Reset form data
  var formData = document.getElementById("form-data");
  formData.innerHTML = "";
  //

  if (fullname == "") {
    alert("Nama tidak boleh kosong");
    return false;
  }

  if (dob == "") {
    alert("Isi tanggal lahir Anda");
    return false;
  }

  gender.forEach(function (radio) {
    selectedGenders.push(radio.value);
  });

  if (selectedGenders.length === 0) {
    alert("Tolong pilih jenis kelamin Anda");
    return false;
  }

  if (message == "") {
    alert("Anda belum mengisi pesan");
    return false;
  }

  // Display form data
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();
  var month = new Date().getMonth() + 1;
  var day = new Date().getDate();
  var year = new Date().getFullYear();
  var gmt = new Date().getTimezoneOffset();

  formData.innerHTML += `<p><strong>Current time:</strong> ${hours}:${minutes}:${seconds} (${month}/${day}/${year}) GMT ${gmt}</p>`;
  formData.innerHTML += `<p><strong>Nama:</strong> ${fullname}</p>`;
  formData.innerHTML += `<p><strong>Tanggal Lahir:</strong> ${dob}</p>`;
  formData.innerHTML += `<p><strong>Jenis Kelamin:</strong> ${selectedGenders.join(
    ", "
  )}</p>`;
  formData.innerHTML += `<p><strong>Pesan:</strong> ${message}</p>`;
  //

  // Reset form input
  document.getElementById("fullname").value = "";
  document.getElementById("dob").value = "";
  gender.forEach(function (radio) {
    radio.checked = false;
  });
  document.getElementById("message").value = "";
  //

  alert("Form berhasil disubmit");
  return true;
}

document
  .getElementById("message_form")
  .addEventListener("submit", validasiForm);
