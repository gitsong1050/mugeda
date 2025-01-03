(function() {
    console.log("Watermark script execution started.");

    var stageWidth = window.innerWidth || 320;
    var stageHeight = window.innerHeight || 626;
    console.log("Stage dimensions:", stageWidth, stageHeight);

    var watermark = document.createElement('div');
    watermark.innerHTML = '未购买，预览效果<br>vx:gitsong';
    watermark.style.position = 'fixed';
    watermark.style.top = '20px';
    watermark.style.left = '20px';
    watermark.style.fontSize = '20px';
    watermark.style.color = 'rgba(255, 0, 0, 0.2)';
    watermark.style.pointerEvents = 'none';
    watermark.style.zIndex = '9999';
    watermark.style.animation = 'move 20s ease-in-out infinite';
    document.body.appendChild(watermark);
    console.log("Watermark element added to body:", watermark);

    var styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @keyframes move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(100px, 100px); }
      }
    `;
    document.head.appendChild(styleSheet);
    console.log("CSS animation rules added.");
})();
