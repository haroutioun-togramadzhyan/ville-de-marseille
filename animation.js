function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function showPhotoFrame() {
    var photoFrame = document.querySelector('.photo-frame');
    photoFrame.classList.add('show');
}

showPhotoFrame();