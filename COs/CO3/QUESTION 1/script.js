const form = document.getElementById("studentForm");
const profileArea = document.getElementById("profile");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const regno = document.getElementById("regno").value.trim();
    const dept = document.getElementById("dept").value;
    const year = document.getElementById("year").value;

    // Simple validation
    if (name === "" || regno === "" || dept === "" || year === "") {

        alert("Please complete all the details.");

        return;
    }

    // Create profile dynamically
    const card = document.createElement("div");

    card.classList.add("profile");

    card.innerHTML = `
        <h3>${name}</h3>

        <div class="profile-line">
            <span>Register No.</span>
            <span>${regno}</span>
        </div>

        <div class="profile-line">
            <span>Department</span>
            <span>${dept}</span>
        </div>

        <div class="profile-line">
            <span>Year of Study</span>
            <span>${year}</span>
        </div>

        <button class="remove-btn">
            Remove Profile
        </button>
    `;

    // Add the card to the page
    profileArea.innerHTML = "";

    profileArea.appendChild(card);

    // Remove button
    const removeButton =
        card.querySelector(".remove-btn");

    removeButton.addEventListener("click", function() {

        card.remove();

        profileArea.innerHTML = `
            <div class="empty-note">
                <div class="paperclip">+</div>

                <h3>Your profile will appear here</h3>

                <p>
                    Fill in the details on the left
                    and add the student to the desk.
                </p>
            </div>
        `;

    });

    // Clear form
    form.reset();

});