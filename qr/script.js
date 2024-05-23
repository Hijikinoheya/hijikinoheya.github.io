document.addEventListener("DOMContentLoaded", function () {
    function onScanSuccess(decodedText, decodedResult) {
        // Create a new list item with the decoded text
        let listItem = document.createElement('li');
        listItem.innerText = `QR Code Result: ${decodedText}`;
        
        // Append the list item to the results list
        document.getElementById('results').appendChild(listItem);
        
        console.log(`Scan result: ${decodedText}`, decodedResult);
    }

    function onScanFailure(error) {
        // Handle scan failure, usually better to ignore and keep scanning.
        console.warn(`QR Code scan error: ${error}`);
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        {
            fps: 10,
            qrbox: { width: 250, height: 250 }
        },
        /* verbose= */ false
    );

    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
});
