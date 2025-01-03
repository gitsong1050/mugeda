(function() {
    // 初始宽高设置
    var stageWidth = 320;
    var stageHeight = 626;

    // 如果 window.innerWidth 和 window.innerHeight 有值，就使用这些值，否则保留默认值
    stageWidth = window.innerWidth || stageWidth;
    stageHeight = window.innerHeight || stageHeight;

    // 创建水印元素并设置样式
    var watermark = document.createElement('div');
    watermark.innerHTML = '未购买，预览效果<br>vx:gitsong'; // 替换为你的水印内容
    watermark.style.position = 'fixed';
    watermark.style.top = '20px';
    watermark.style.left = '20px';
    watermark.style.fontSize = '20px';
    watermark.style.color = 'rgba(255, 0, 0, 0.2)'; // 设置透明度
    watermark.style.pointerEvents = 'none'; // 防止水印被点击
    watermark.style.zIndex = '9999'; // 保证水印位于最上层
    watermark.style.animation = 'move 20s ease-in-out infinite';
    document.body.appendChild(watermark);

    // 居中对齐样式
    watermark.style.textAlign = 'center'; // 水平方向居中
    watermark.style.lineHeight = '1.5';   // 调整行高，确保两行文本的间距合适

    // 动态获取水印文本宽高
    var watermarkWidth = watermark.offsetWidth;
    var watermarkHeight = watermark.offsetHeight;

    // 添加 CSS 动画样式，根据舞台减去水印宽高设置动画路径
    var styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @keyframes move {
        0% { transform: translate(0, 0); }
        20% { transform: translate(${(stageWidth - watermarkWidth) * 0.5}px, ${(stageHeight - watermarkHeight) * 0.25}px); }
        40% { transform: translate(${stageWidth - watermarkWidth}px, ${(stageHeight - watermarkHeight) * 0.5}px); }
        60% { transform: translate(${(stageWidth - watermarkWidth) * 0.5}px, ${(stageHeight - watermarkHeight) * 0.75}px); }
        80% { transform: translate(0, ${stageHeight - watermarkHeight}px); }
        100% { transform: translate(0, 0); }
      }
    `;
    document.head.appendChild(styleSheet);
})();
