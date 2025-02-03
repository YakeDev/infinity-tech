document.addEventListener('DOMContentLoaded', function () {
	const menuBtn = document.getElementById('menu-btn')
	const mobileMenu = document.getElementById('mobile-menu')

	menuBtn.addEventListener('click', function () {
		mobileMenu.classList.toggle('hidden') // Afficher/Cacher le menu
	})
})
