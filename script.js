document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("toggleButton");
    const text = document.getElementById("text");
    const container = document.getElementById("container");

    let isChanged = false;

    button.addEventListener("click", function() {
        if (isChanged) {
            // Revert to initial state
            text.textContent = "hello everyone";
            button.textContent = "Change";
            container.classList.remove("changed");
            container.classList.add("initial");
        } else {
            // Change to new state
            text.textContent = "Changed Text";
            button.textContent = "Revert";
            container.classList.remove("initial");
            container.classList.add("changed");
        }
        isChanged = !isChanged; // Toggle the state
    });
});