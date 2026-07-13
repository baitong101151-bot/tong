// สมัครสมาชิก
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('regUsername').value.trim();
        const passwordInput = document.getElementById('regPassword').value;
        const confirmPasswordInput = document.getElementById('confirmPassword').value;
        const regErrorMessage = document.getElementById('regErrorMessage');

        // แก้ไข: เปลี่ยนจากตรวจสอบความยาวของ username เป็นตรวจสอบความยาวของ password แทน
        if (passwordInput.length < 8) {
            regErrorMessage.textContent = 'Password ต้องมีความยาวอย่างน้อย 8 ตัวอักษร';
            return; 
        }

        if (passwordInput !== confirmPasswordInput) {
            regErrorMessage.textContent = 'รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน';
            return;
        }

        localStorage.setItem('savedUsername', usernameInput);
        localStorage.setItem('savedPassword', passwordInput);

        alert('สมัครสมาชิกสำเร็จ!');
        window.location.href = 'index.html';
    });
}

// เข้าสู่ระบบ
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');

        const correctUsername = localStorage.getItem('savedUsername') || 'useradmin123';
        const correctPassword = localStorage.getItem('savedPassword') || '1234';

        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            alert('เข้าสู่ระบบสำเร็จ!');
            window.location.href = 'home.html'; 
        } else {
            errorMessage.textContent = 'Username หรือ Password ไม่ถูกต้อง';
        }
    });
}
