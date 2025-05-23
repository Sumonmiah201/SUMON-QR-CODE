function generateQRCode() {
    const text = document.getElementById("qr-input").value.trim();
    const size = parseInt(document.getElementById("size").value);
    const color = document.getElementById("color").value;
    const bgColor = document.getElementById("bg-color").value;
    const canvas = document.getElementById("qr-canvas");
    const downloadLink = document.getElementById("download-link");

    if (!text) {
        alert("Please enter some text or URL.");
        return;
    }

    QRCode.toCanvas(
        canvas,
        text,
        {
            width: size,
            color: {
                dark: color,
                light: bgColor,
            },
        },
        function (error) {
            if (error) {
                console.error(error);
                alert("Error generating QR Code.");
                return;
            }
            // Show download link
            const dataUrl = canvas.toDataURL("image/png");
            downloadLink.href = dataUrl;
            downloadLink.style.display = "block";
        }
    );
}

function reset() {
    document.getElementById("qr-input").value = "";
    const canvas = document.getElementById("qr-canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("download-link").style.display = "none";
}
