document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.img-fluid');
    images.forEach(function(image) {
        image.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            alert('右クリックは無効です');
        });
    });
});
