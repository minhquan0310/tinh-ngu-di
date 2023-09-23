"use strict";
const yesBtn = document.getElementById("yes-button");
const noBtn = document.getElementById("no-button");

// Xử lý sự kiện khi nút "Có" được nhấn
yesBtn.addEventListener("click", function () {
  alert("Rất tốt! Bạn đã đưa ra câu trả lời hoàn toàn đúng!");
});

yesBtn.addEventListener("mouseenter", function () {
  yesBtn.textContent = "Không";
});

yesBtn.addEventListener("mouseleave", function () {
  yesBtn.textContent = "Có";
});

// Xử lý sự kiện khi nút "Không" được nhấn
noBtn.addEventListener("click", function () {
  alert("Rất tốt! Bạn biết điều đấy!");
});
