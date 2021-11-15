function fn() {
  let d = new Date();
  console.log(d)

 const dayInput = parseInt(document.getElementById("day").value);
 const month = parseInt(document.getElementById("month").value);
 const year = parseInt(document.getElementById("year").value);
  console.log(dayInput, month, year);

  if (year < 0) {
    document.getElementsByClassName("yearerror").innerHTML =
      "enter correct year";
  } else if ((year == "")) {
    document.getElementsByClassName("yearerror").innerHTML =
      "cannot leave it empty";
  } else {
    d.setFullYear(year);
  }
  if (month < 0 || month > 12) {
    document.getElementsByClassName("montherror").innerHTML =
      "enter correct month";
    return false;
  } else if ((month == "")) {
    document.getElementsByClassName("montherror").innerHTML =
      "cannot leave it empty";
  } else {
      console.log("hey is this", month-1)
d.setMonth(month - 1);
  }

  if (dayInput < 0 || dayInput > 31) {
    document.getElementsByClassName("dayerror").innerHTML =
      "enter correct date.";
    return false;
  } else if (dayInput == "") {
    document.getElementsByClassName("dayerror").innerHTML =
      "cannot leave space empty.";
    return false;
  } else {
    d.setDate(dayInput);
  }




  let day = d.getDay();
  console.log(day);
  console.log(d, d.getFullYear(), d.getMonth(), d.getDate());
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let female = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];

  function getAkanName() {
    let ismale = document.getElementById("male").checked;
    let isfemale = document.getElementById("female").checked;
    console.log(ismale, isfemale);
    if (ismale == true && isfemale == false) {
      if (day == 0) {
        alert("your akan name is" + male[0]);
      } else if (day == 1) {
        alert("your akan name is " + male[1]);
      } else if (day == 2) {
        alert("your akan name is " + male[2]);
      } else if (day == 3) {
        alert("your akan name is " + male[3]);
      } else if (day == 4)  {
        alert("your akan name is " + male[4]);
      } else if (day == 5) {
        alert("your akan name is " + male[5]);
      } else if (day == 6) {
        alert("your akan name is " + male[6]);
      }
    } else if (ismale == false && isfemale == true) {
      if (day == 0) {
        alert("your akan name is" + female[0]);
      } else if (day == 1) {
        alert("your akan name is " + female[1]);
      } else if (day == 2) {
        alert("your akan name is " + female[2]);
      } else if (day == 3) {
        alert("your akan name is " + female[3]);
      } else if (day == 4) {
        alert("your akan name is " + female[4]);
      } else if (day == 5) {
        alert("your akan name is " + female[5]);
      } else if (day == 6) {
        alert("your akan name is " + female[6]);
      }
    }
  }
  getAkanName();
}
