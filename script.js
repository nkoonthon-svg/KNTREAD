
let userPlan = "pro"; // change to free if needed

function login() {
  const email = emailEl().value;
  const password = passwordEl().value;
  if(email && password) {
    loginBox().style.display = "none";
    app().style.display = "block";
    plan().innerText = userPlan.toUpperCase();
    initChart();
  }
}

function initChart() {
  new TradingView.widget({
    width: "100%",
    height: "100%",
    symbol: "OANDA:XAUUSD",
    interval: "5",
    timezone: "Asia/Bangkok",
    theme: "dark",
    style: "1",
    container_id: "tv_chart"
  });
}

function analyze() {
  if(userPlan !== "pro") {
    alert("เฉพาะ PRO เท่านั้น");
    return;
  }
  result().innerHTML = `
    <h2>📈 BUY</h2>
    <p>Entry: 2034.20</p>
    <p>SL: 2033.60</p>
    <p>TP: 2037.20</p>
    <p>RR: 1 : 5</p>
    <p>Confidence: 82%</p>
  `;
}

const emailEl = () => document.getElementById("email");
const passwordEl = () => document.getElementById("password");
const loginBox = () => document.getElementById("loginBox");
const app = () => document.getElementById("app");
const plan = () => document.getElementById("plan");
const result = () => document.getElementById("result");
