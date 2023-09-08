function send() {
    let y = document.getElementById('y');
    let r = document.getElementById('r');

    if (validateXYR()) {
        console.log("SENDING"); 
        $.ajax({
            type: "POST",
            url: "../php/base.php",
            dataType: "html",
            data: {
                x: x,
                y: y.value,
                r: r.value,
                time: new Date().getTimezoneOffset()
            },
            success: function(data) {
                addInTable(data);
            },
            error: function(XHR, status, error) {
                console.error("Error:", error);
            }
        });
    } else {
        console.log("Validation failed");
    }
}
