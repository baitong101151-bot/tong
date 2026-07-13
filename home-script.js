document.getElementById('btnLogout').addEventListener('click', function() {
    const confirmLogout = confirm('คุณต้องการออกจากระบบใช่หรือไม่?');
    if (confirmLogout) {
        window.location.href = 'index.html';
    }
});