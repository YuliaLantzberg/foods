// Open Menu
document.querySelector(".menu").addEventListener("click", () => {
	document.querySelectorAll(".target").forEach((item) => {
		item.classList.toggle("change");
	});
});

// Create slide show in section 1 (header)

const icons = document.querySelectorAll(".section-1-icons i");
let counter = 1;

setInterval(() => {
	counter++;

	const icon = document.querySelector(".section-1-icons .change");
	console.log(icon);

	icon.classList.remove("change");

	if (counter > icons.length) {
		icons[0].classList.add("change");
		counter = 1;
		console.log(icons[0]);
	} else icon.nextElementSibling.classList.add("change");
}, 4000);
