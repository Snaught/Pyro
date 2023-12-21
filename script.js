window.onload = function() {
    var totalImages = 13; // Set this to a high number

    for(var i = 1; i <= totalImages; i++) {
        var a = document.createElement('a');
        a.href = 'detail.html?image=images/img' + i + '.jpg';

        var img = document.createElement('img');
        img.src = 'images/img' + i + '.jpg';
        img.alt = 'Image ' + i;
        img.onerror = function() {
            // Stop the loop if an image fails to load
            totalImages = 0;
        };

        a.appendChild(img);
        document.getElementById('pic-grid').appendChild(a);
    }
}