let canvas = document.querySelector('#qipan');
let width = canvas.width;
let height = canvas.height;
let ctx = canvas.getContext('2d');
let grid = 38;

// 创建canvas快照


// 创建存储数组, 初始化
var arr = new Array(16);   //表格有10行

function init() {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(16);    //每行有10列
        for (var j = 0; j < 16; j++) {
            arr[i][j] = -1;
        }
    }

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.lineWidth = 2;
    // ctx.strokeRect(0, 0, width, height);
    for (let i = 1; i <= 15; i++) {
        ctx.beginPath();
        ctx.moveTo(grid, grid * i);
        ctx.lineTo(grid * 15, grid * i);
        ctx.closePath();
        ctx.stroke();
    }

    for (let i = 1; i <= 15; i++) {
        ctx.beginPath();
        ctx.moveTo(grid * i, grid);
        ctx.lineTo(grid * i, grid * 15);
        ctx.closePath();
        ctx.stroke();
    }
}

init();
var back0 = ctx.getImageData(0, 0, width, height);
var back1 = null;

// 落子部分
var now = 1 // black:1 white:0
var nowx = null;
var nowy = null;
white = document.getElementsByClassName("record")[0];
black = document.getElementsByClassName("record")[1];
var style = window.getComputedStyle(canvas, null);
var borderLeft = parseFloat(style["border-left-width"]);
var borderTop = parseFloat(style["border-top-width"]);
var paddingLeft = parseFloat(style["padding-left"]);
var paddingTop = parseFloat(style["padding-top"]);

function change_now() {
    if (now) {
        white.classList.remove("hidden");
        black.classList.add("hidden");
        now = 0;
    } else {
        white.classList.add("hidden");
        black.classList.remove("hidden");
        now = 1;
    }
}

// 绘制棋子
function draw_cheese(x, y) {
    back1 = ctx.getImageData(0, 0, width, height);
    arr[x][y] = now;
    ctx.beginPath();
    ctx.arc(x * grid, y * grid, grid / 3, 0, 361, false);
    
    if (now) {
        ctx.fillStyle = "black";
    }
    else {
        ctx.fillStyle = "#dcdcdc";
    }
    ctx.fill();
    document.getElementsByClassName("button")[1].classList.remove("hidden");
}

var end = 0;
function luozi(evt) {
    if (end) return;
    var x = evt.clientX;
    var y = evt.clientY;
    var rect = canvas.getBoundingClientRect();
    x = x - rect.left - borderLeft - paddingLeft; // 去除 borderLeft paddingLeft 后的坐标
    y = y - rect.top - borderTop - paddingTop; // 去除 borderLeft paddingLeft 后的坐标
    console.log(x, y); // (x, y) 就是鼠标在 canvas 单击时的坐标
    if (x < grid - grid / 3 || y < grid - grid / 3 || x > grid*15 + grid / 3 || y > grid*15 + grid / 3) return;

    function calculate(e) {
        return Math.round(e / grid);
    }
    nowx = calculate(x);
    nowy = calculate(y);

    if (arr[nowx][nowy] == -1) {
        
        draw_cheese(nowx, nowy);

        if (check(nowx, nowy, now)) {
            alert("人生代代 无穷无己\n你来我往 此局" + (now ? "黑" : "白") + "胜");
            end = 1;
        }

        change_now();
    }
}

function check(x, y, now) {
    var cnt;
    // -
    cnt = 0;
    for (i = y; i > 0; i--) {
        if (arr[x][i] != now) break;
        cnt++;
    }
    for (i = y + 1; i < 16; i++) {
        if (arr[x][i] != now) break;
        cnt++;
    }
    if (cnt >= 5) return 1;
    // \
    cnt = 0;
    for (i = x, j = y; i > 0 && j > 0; i--, j--) {
        if (arr[i][j] != now) break;
        cnt++;
    }
    for (i = x + 1, j = y + 1; i < 16 && j < 16; i++, j++) {
        if (arr[i][j] != now) break;
        cnt++;
    }
    if (cnt >= 5) return 1;
    // |
    cnt = 0;
    for (i = x; i > 0; i--) {
        if (arr[i][y] != now) break;
        cnt++;
    }
    for (i = x + 1; i < 16; i++) {
        if (arr[i][y] != now) break;
        cnt++;
    }
    if (cnt >= 5) return 1;
    // /
    cnt = 0;
    for (i = x, j = y; i > 0 && j <16; i--, j++) {
        if (arr[i][j] != now) break;
        cnt++;
    }
    for (i = x + 1, j = y - 1; i < 16 && j > 0; i++, j--) {
        if (arr[i][j] != now) break;
        cnt++;
    }
    if (cnt >= 5) return 1;
}

// back
function back() {
    if (back1 != null && !end) {
        ctx.putImageData(back1, 0, 0);
        back1 = null;
        change_now();
        arr[nowx][nowy] = -1;
        document.getElementsByClassName("button")[1].classList.add("hidden");
    } else {
        alert("人生如棋 黑白相间\n局里局外 一生好走")
    }
}

function restart() {
    now = 0;
    end = 0;
    change_now();
    ctx.putImageData(back0, 0, 0);
    
    back1 = null;
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            arr[i][j] = -1;
        }
    }
    document.getElementsByClassName("button")[1].classList.add("hidden");
}