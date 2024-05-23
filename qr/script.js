document.addEventListener("DOMContentLoaded", function () {
    function onScanSuccess(decodedText, decodedResult) {
        // 新しいリストアイテムを作成して結果を表示
        let listItem = document.createElement('li');
        listItem.innerText = `QR Code Result: ${decodedText}`;

        // リストに新しいリストアイテムを追加
        document.getElementById('results').appendChild(listItem);

        console.log(`Scan result: ${decodedText}`, decodedResult);
    }

    function onScanFailure(error) {
        // スキャンの失敗を処理（通常は無視してスキャンを続行）
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
