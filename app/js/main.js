// ========================================================
// ON DOM LOADED
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
	console.log('hello earth people');
	const dom = {
		background: document.querySelector('.t-panel'),
		svg: document.querySelector('.t-panel__circles svg'),
		center: document.querySelector('.t-panel__circles svg circle'),
	};

	let rect = dom.center.getBoundingClientRect();
	let center = {
		x: rect.left + rect.width / 2,
		y: rect.bottom - rect.height / 2,
	}

	document.onmousemove = mouseMove;
	window.addEventListener('resize', resize);

	function resize() {
		console.log('e');
		rect = dom.center.getBoundingClientRect();
		center = {
			x: rect.left + rect.width / 2,
			y: rect.bottom - rect.height / 2,
		}
	}

	function mouseMove(e) {
		const deltaX = e.clientX - center.x;
		const deltaY = e.clientY - center.y;
		const radians = Math.atan2(deltaY, deltaX);
		const degrees = toDegrees(radians);
		dom.svg.style.transform = `rotate(${degrees + 180}deg)`;
	}

	dom.background.classList.add('landed');
	// landing animation
	setTimeout(() => {
		document.body.classList.add('landed');
	}, 500);
});

function toDegrees(angle) {
	return angle * (180 / Math.PI);
}