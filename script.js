{\rtf1\ansi\ansicpg1251\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const targetDate = new Date();\
targetDate.setDate(12);\
targetDate.setHours(0, 0, 0, 0);\
\
// ELEMENTS\
const intro = document.getElementById("intro");\
const timerScreen = document.getElementById("timer");\
const letterScreen = document.getElementById("letter");\
const mapScreen = document.getElementById("map");\
\
const startBtn = document.getElementById("startBtn");\
const openLetter = document.getElementById("openLetter");\
const openMap = document.getElementById("openMap");\
const mapLink = document.getElementById("mapLink");\
\
// TEXT ANIMATION (intro)\
window.addEventListener("load", () => \{\
  setTimeout(() => \{\
    document.getElementById("t2").classList.remove("hidden");\
  \}, 2000);\
\
  setTimeout(() => \{\
    startBtn.classList.remove("hidden");\
  \}, 4000);\
\});\
\
// NAVIGATION\
startBtn.onclick = () => \{\
  intro.classList.remove("active");\
  timerScreen.classList.add("active");\
\};\
\
// LETTER OPEN\
openLetter.onclick = () => \{\
  timerScreen.classList.remove("active");\
  letterScreen.classList.add("active");\
\};\
\
// MAP OPEN\
openMap.onclick = () => \{\
  letterScreen.classList.remove("active");\
  mapScreen.classList.add("active");\
\};\
\
// TIMER\
function updateTimer() \{\
  const now = new Date();\
  const diff = targetDate - now;\
\
  const daysEl = document.getElementById("days");\
  const hoursEl = document.getElementById("hours");\
  const minutesEl = document.getElementById("minutes");\
\
  if (diff <= 0) \{\
    daysEl.innerText = "00";\
    hoursEl.innerText = "00";\
    minutesEl.innerText = "00";\
\
    openLetter.classList.remove("hidden");\
    return;\
  \}\
\
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));\
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);\
  const minutes = Math.floor((diff / (1000 * 60)) % 60);\
\
  daysEl.innerText = String(days).padStart(2, "0");\
  hoursEl.innerText = String(hours).padStart(2, "0");\
  minutesEl.innerText = String(minutes).padStart(2, "0");\
\}\
\
setInterval(updateTimer, 1000);\
updateTimer();\
\
// MAP LINK (\uc0\u1074 \u1089 \u1090 \u1072 \u1074 \u1080 \u1096 \u1100  \u1087 \u1086 \u1079 \u1078 \u1077 )\
mapLink.href = "";}