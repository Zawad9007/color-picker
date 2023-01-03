let colorIndicator = document.getElementById("color-indicator")
    let result = document.getElementById("result")
    var colorPicker = new iro.ColorPicker("#color-picker", {
        width: 180,
        color: "#ffff"
    });
    colorPicker.on("color:change", (color) => {
        colorIndicator.style.backgroundColor = color.hexString;
        result.innerHTML = color.hexString;
    });