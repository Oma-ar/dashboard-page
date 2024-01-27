"use strict";

//// Toggle sidebar

function toggleHeaderSideBar() {
	document.querySelector(".header-content__mobile").classList.toggle("active");
}

//// Toggle aside sidebar

function toggleAsideSideBar() {
	document.querySelector("aside").classList.toggle("active");
}

/// toggle Person profile

function toggleProfileContentDesktop() {
	document.querySelector(".profile-content").classList.toggle("active");
}

//// Toggle Person profile Mobile

function toggleProfileContentMobile() {
	document.querySelector(" .for-mobile").classList.toggle("active");
}

////// Dark Mode Functions

///// variables

const body = document.querySelector("body");
const toggleTheme = document.querySelector(".toggle-theme");
const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");

//// Toggle light dark mode

function toggleCloseDarkMode() {
	body.classList.remove("active");
	toggleTheme.classList.remove("active");
	lightMode.style.transform = "translateY(0)";
	darkMode.style.transform = "translateY(0)";
}

//// Toggle open dark mode

function toggleDarkMode() {
	body.classList.add("active");

	toggleTheme.classList.add("active");
	darkMode.style.transform = "translateY(-38px)";
	lightMode.style.transform = "translateY(38px)";
}
