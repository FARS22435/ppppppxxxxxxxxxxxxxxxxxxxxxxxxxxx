let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons'))[0].children;
let setPasswordButton = document.querySelector('.set-password');
let password = "";
let enteredPassword = "";
let passwordSet = false;
let cPressCount = 0; // عدد الضغطات على زر C
let studioPage = document.getElementById('studio');
let calculatorPage = document.getElementById('calculator');

document.addEventListener('DOMContentLoaded', () => {
  let storedPassword = localStorage.getItem("password");
  if (storedPassword) {
    password = storedPassword;
  }
});

Array.from(buttons).forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerText;

    if (value === 'C') {
      cPressCount++;
      if (cPressCount === 2) {
        setPasswordButton.style.display = 'inline-block';
        setTimeout(() => {
          setPasswordButton.style.display = 'none';
        }, 60000);
      }
      display.value = '';
    } else if (value === '=') {
      display.value = eval(display.value);
    } else if (value === '009') {
      let newPassword = prompt("أدخل كلمة السر الجديدة:");
      if (newPassword) {
        password = newPassword;
        localStorage.setItem("password", password);
        alert("تم حفظ كلمة السر بنجاح");
      }
    } else if (value === '0' && password) {
      localStorage.setItem("password", password);
    } else if (value === '_' && enteredPassword.length < 2) {
      enteredPassword += '_';
      if (enteredPassword.length === 2) {
        let storedPassword = localStorage.getItem("password");
        let entered = prompt("أدخل كلمة السر:");
        if (entered === storedPassword) {
          calculatorPage.style.display = 'none'; // إخفاء الآلة الحاسبة
          studioPage.classList.remove("hidden"); // عرض صفحة استديو
        } else {
          alert("كلمة السر خاطئة");
        }
      }
    } else if (value === '++') {
      let storedPassword = localStorage.getItem("password");
      let entered = prompt("أدخل كلمة السر:");
      if (entered === storedPassword) {
        calculatorPage.style.display = 'none'; // إخفاء الآلة الحاسبة
        studioPage.classList.remove("hidden"); // عرض صفحة استديو
      } else {
        alert("كلمة السر خاطئة");
      }
    } else {
      display.value += value;
    }
  });
});
