/* ==========================================================
   EVENTSPHERE JAVASCRIPT
   ========================================================== */


/* ==========================================================
   MOBILE NAVIGATION
   ========================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const navLinks =
    document.getElementById("navLinks");


mobileMenu.addEventListener("click", function () {

    navLinks.classList.toggle("open");

});


/* Close mobile navigation after clicking a link */

document.querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

        });

    });



/* ==========================================================
   EVENT FILTERS
   ========================================================== */

const filters =
    document.querySelectorAll(".filter");

const eventCards =
    document.querySelectorAll(".event-card");


filters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        filters.forEach(function (item) {

            item.classList.remove("active");

        });

        filter.classList.add("active");

        const selected =
            filter.getAttribute("data-filter");


        eventCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");


            if (
                selected === "all" ||
                category === selected
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});



/* ==========================================================
   EVENT SEARCH
   ========================================================== */

const searchInput =
    document.getElementById("eventSearch");


searchInput.addEventListener("input", function () {

    const searchTerm =
        searchInput.value
        .toLowerCase()
        .trim();


    eventCards.forEach(function (card) {

        const searchableText =
            card.getAttribute("data-title");


        if (
            searchableText.includes(searchTerm)
        ) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

});



/* ==========================================================
   EVENT MODAL
   ========================================================== */

const eventModal =
    document.getElementById("eventModal");


function openEvent(
    title,
    category,
    date,
    time,
    venue,
    description
) {

    document.getElementById("modalTitle")
        .textContent = title;

    document.getElementById("modalCategory")
        .textContent = category.toUpperCase();

    document.getElementById("modalDate")
        .textContent = "📅 " + date;

    document.getElementById("modalTime")
        .textContent = "◷ " + time;

    document.getElementById("modalVenue")
        .textContent = "⌖ " + venue;

    document.getElementById("modalDescription")
        .textContent = description;


    eventModal.classList.add("show");

    eventModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeEvent() {

    eventModal.classList.remove("show");

    eventModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}



/* Close modal with Escape */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeEvent();

        }

    }
);



/* ==========================================================
   REGISTRATION FORM
   ========================================================== */

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const studentName =
            document.getElementById("studentName")
            .value.trim();

        const selectedEvent =
            document.getElementById("eventSelection")
            .value;


        if (!studentName || !selectedEvent) {

            alert(
                "Please complete all required fields."
            );

            return;

        }


        alert(
            "Registration successful!\n\n" +
            "Student: " + studentName +
            "\nEvent: " + selectedEvent
        );


        registrationForm.reset();

    }
);



/* ==========================================================
   NEWSLETTER
   ========================================================== */

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            newsletterForm
            .querySelector("input")
            .value.trim();


        if (email) {

            alert(
                "You're subscribed!\n\n" +
                "Campus updates will be sent to " +
                email
            );

            newsletterForm.reset();

        }

    }
);



/* ==========================================================
   SMOOTH SCROLL FOR INTERNAL LINKS
   ========================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        }
    );

});