const addProjectButton = document.querySelector("#add-project-button");
const projectForm = document.querySelector("#project-form");

addProjectButton.addEventListener("click", function () {
    projectForm.classList.toggle("hidden");

    const formIsHidden = projectForm.classList.contains("hidden");

    if (formIsHidden) {
        addProjectButton.textContent = "+ Add project";
        addProjectButton.setAttribute("aria-expanded", "false");
    } else {
        addProjectButton.textContent = "x Close form";
        addProjectButton.setAttribute("aria-expanded", "true");
    }
});
const button = document.getElementById("activateBtn");
const status = document.getElementById("status");

button.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        status.textContent = "Dark Mode On";
        button.textContent = "Disable Dark Mode";

        status.style.color = "orchid";
        button.style.backgroundColor = "orchid";
        button.style.color = "white";

    } else {

        status.textContent = "Dark Mode Off";
        button.textContent = "Enable Dark Mode";

        status.style.color = "rebeccapurple";
        button.style.backgroundColor = "midnightblue";
        button.style.color = "white";
    }

});
