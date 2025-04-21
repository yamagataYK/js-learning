const video = document.getElementById('camera');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
let stream;

async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
    } catch (error) {
        console.error('カメラへのアクセスに失敗しました:', error);
    }
}

// 初回起動時にカメラON
startCamera();

stopBtn.addEventListener('click', () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
});

startBtn.addEventListener('click', () => {
    if (!stream || !stream.active) {
        startCamera();
    }
});