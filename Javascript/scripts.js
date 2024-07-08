document.getElementById('navbarToggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const isActive = sidebar.style.width === '250px';
    
    sidebar.style.width = isActive ? '0' : '250px';
    overlay.style.width = isActive ? '0' : '100%';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.style.width = '0';
    overlay.style.width = '0';
});

document.getElementById('overlay').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.style.width = '0';
    overlay.style.width = '0';
});
