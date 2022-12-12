"use strict";

document.addEventListener("DOMContentLoaded", function() {
    console.log("dom is loaded!");
    let headerNav = document.querySelector("header nav");
    headerNav.classList.add("collapsed");

    headerNav.addEventListener("click", function() {
        console.log("Nav was clciked!");
        headerNav.classList.toggle("collapsed");
    });
});

