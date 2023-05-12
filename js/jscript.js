window.onload = () => {
    $("#top-container").click (function() {
        $("#top-container").css("background-color", getNextBackgroundColor());
        $("#click-button").hide();
    });  
};

let selectedColorIndex = 0;

function getNextBackgroundColor() {
    const colors = [
        "#CBF1F5",
        "#A6E3E9",
        "#71C9CE",
        "#E3FDFD"
    ];
    return colors[selectedColorIndex++ % colors.length];
};