let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "不和🐧玩", 
    "？你点错了吧", 
    "鹅觉得不能选这个", 
    "鹅会很伤心的…", 
    "不行:("
];

//Yes 按钮的文字变化
const yesTexts = [
    "更换心情车标", 
    "搞个自制地图", 
    "用新鲜事找附近新店", 
    "找附近的图书馆", 
    "去哪都行"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    //Yes 文案变化
   if (clickCount <= 5) {
        yesButton.innerText = yesTexts[clickCount - 1];
    }
   
    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "images/shaaaa.png"; // 震惊
    if (clickCount === 2) mainImage.src = "images/ohyeah.png";   // 思考
    if (clickCount === 3) mainImage.src = "images/shengqi.png";   // 生气
    if (clickCount === 4) mainImage.src = "images/crray.png";  // 哭
    if (clickCount >= 5) mainImage.src = "images/crray.png";  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!太好啦！和鹅一起出去玩吧～ ( >᎑<)♡︎ᐝ</h1>
            <img src="images/heart.png" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";

});



