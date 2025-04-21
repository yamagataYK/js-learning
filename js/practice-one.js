const video = document.getElementById('camera');
const canvas = document.getElementById("snapshot");
const photo = document.getElementById("photo");
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
const captureBtn = document.getElementById("captureBtn");

let stream;
//↑あとで使うための変数を先に宣言している Webカメラの映像データ（ストリーム）を保持する変数を準備

async function startCamera() {
    //↑非同期関数[async function]
    stream = await navigator.mediaDevices.getUserMedia({
        //↑カメラを使う許可をブラウザにリクエストしている
        video: true, audio: false
    });
    //↑映像は必要だけど音声はいらない
    video.srcObject = stream;
    //<video> タグにカメラ映像を映している
}


stopBtn.addEventListener('click', () => {
    if (stream) {
        //カメラが起動中なら実行する
        stream.getTracks().forEach(track => track.stop());
        //映像をトラックで配列で返してる
        video.srcObject = null;
    }
});


startBtn.addEventListener('click', () => {
    if (!stream || !stream.active) {
        //!stream  streamがまだ存在してない ||または  active はカメラが止まってる どちらか二つなら
        startCamera();
        //上で書いた非同期関数を呼び出している
    }
});

captureBtn.addEventListener("click", () => {
    const ctx = canvas.getContext('2d');
    //2D 描画用のコンテキスト 画像や図形を自由に描画できる
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    //キャンバスのサイズをビデオタグの解像度に合わしている
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    //映像をcanvasにコピーし静止画として記録される
    const imageDataUrl = canvas.toDataURL('image/png');
    //canvasの内容をPNG画像のデータURLに変換している。ブラウザ上で操作しやすい形式
    photo.src = imageDataUrl;
    //imgタグのsrcに画像データを送る 表示する
});

