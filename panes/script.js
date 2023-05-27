(function () {
    var top = document.getElementById("top");
    const container = document.getElementById("container");
    const slider = document.getElementById("slider");
    slider.addEventListener("mousedown", function (e) {
        container.addEventListener("mousemove", function (e) {
            e.preventDefault();
            top.style.width = e.clientX + "px";
            slider.style.left = e.clientX + "px";
        });
    });
    container.removeEventListener("mouseup", function (e) {});
})();
