// 计算器逻辑 - 黄敏 2024008（带历史记录）
var screen = document.getElementById("screen");
var first = null;
var op = null;
var fresh = false;
var records = [];

function push(d) {
  if (fresh) {
    screen.textContent = d;
    fresh = false;
  } else {
    screen.textContent = screen.textContent === "0" ? d : screen.textContent + d;
  }
}

function setOp(o) {
  first = screen.textContent;
  op = o;
  fresh = true;
}

function calc() {
  if (first === null) return;
  var a = parseFloat(first);
  var b = parseFloat(screen.textContent);
  var r;
  switch (op) {
    case "+": r = a + b; break;
    case "-": r = a - b; break;
    case "*": r = a * b; break;
    case "/": r = b === 0 ? "不能除以0" : a / b; break;
  }
  screen.textContent = r;
  records.push(first + " " + op + " " + b + " = " + r);
  first = null;
  op = null;
}

function allClear() {
  screen.textContent = "0";
  first = null; op = null; fresh = false;
}

function back() {
  if (fresh) return;
  screen.textContent = screen.textContent.length > 1 ? screen.textContent.slice(0, -1) : "0";
}

function toggleHistory() {
  var h = document.getElementById("history");
  if (h.style.display === "none") {
    h.style.display = "block";
    h.innerHTML = records.length ? records.map(r => "<div>" + r + "</div>").join("") : "暂无记录";
  } else {
    h.style.display = "none";
  }
}
