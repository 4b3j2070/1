const countdownElement = document.getElementById("day");
const firstShow = new Date("2026-12-21T19:30:00");

function updateCountdown() {
	const remaining = firstShow.getTime() - Date.now();
	if (remaining <= 0) {
		countdownElement.textContent = "首場演出登場中！";
		return;
	}

	const days = Math.ceil(remaining / (1000 * 60 * 60 * 24));
	countdownElement.textContent = `還有 ${days} 天`;
}

updateCountdown();
window.setInterval(updateCountdown, 60_000);