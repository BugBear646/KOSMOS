function showPassword() {
    const passInput = document.getElementById('password1');
    const passStatus = document.getElementById('show-password');

    if(passInput.type == 'text') {
        passInput.type = 'password';
        passStatus.className = 'fa fa-eye';
    } else {
        passInput.type = 'text';
        passStatus.className = 'fa fa-eye-slash';
    }
}

var check = function() {
  if (document.getElementById('password1').value ==
    document.getElementById('password2').value) {
    document.getElementById('ct1').style.display = 'block';
    document.getElementById('cc2').style.display = 'none';
  } else {
    document.getElementById('cc2').style.display = 'block';
    document.getElementById('ct1').style.display = 'none';
  }
}
