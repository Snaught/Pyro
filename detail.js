window.onload = function() {
    var url = new URL(window.location.href);
    var imgSrc = url.searchParams.get("image");
    var img = document.getElementById('detailImage');
    var magnifierEnabled = true;
    img.src = imgSrc;

    var magnifier = document.createElement("DIV");
    magnifier.setAttribute("class", "magnifier");
    document.body.appendChild(magnifier);

    document.getElementById('toggleButton').addEventListener('click', function() {
        magnifierEnabled = !magnifierEnabled;
    });

    img.addEventListener("mousemove", function(e) {
        if (magnifierEnabled) {
            magnifier.style.backgroundImage = "url('" + imgSrc + "')";
            magnifier.style.backgroundRepeat = "no-repeat";
            magnifier.style.backgroundSize = (img.width * 3) + "px " + (img.height * 3) + "px";
            magnifier.style.backgroundPosition = "-" + ((e.pageX - img.offsetLeft) * 3) + "px -" + ((e.pageY - img.offsetTop) * 3) + "px";
            magnifier.style.left = e.pageX + "px";
            magnifier.style.top = e.pageY + "px";
        }
    });

    img.addEventListener("mouseout", function() {
        if (magnifierEnabled) {
            magnifier.style.display = "none";
        }
    });

    img.addEventListener("mouseover", function() {
        if (magnifierEnabled) {
            magnifier.style.display = "block";
        }
    });
}
