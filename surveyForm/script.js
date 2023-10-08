let form = document.getElementById("survey-form");
let firstName;
let lastName;
let DOB;
let country;
let gender;
let email
let phone;


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    for (const [key, value] of formData) {
        if(!value) alert('fill all the fields');
    }
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(formData.get('email'))) alert('email incorrect')
    showData();
    form.reset();
  });

  function closePopup() {
    document.getElementById("popupContainer").style.display = 'none';
    let popupdata = document.getElementById("popupdata");
    while (popupdata.firstChild) {
        popupdata.removeChild(popupdata.firstChild);
      }
  }

function showData() {
    let formData = new FormData(form);
    let popupdata = document.getElementById("popupdata");
    var list = document.createElement('ul');
    for (const [key, value] of formData) {
        var item = document.createElement('li')
        item.textContent = `${key} + " : " ${value}`;
        list.appendChild(item);
      }
      popupdata.appendChild(list)
    document.getElementById("popupContainer").style.display = 'block';
}

function ResetFormData() {
    form.reset();
}
