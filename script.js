/* =========================================================
   SCRIPT.JS
========================================================= */


/* =========================================================
   RETURN FROM YOUR MEMORIES
========================================================= */

const skipOpening =
    sessionStorage.getItem(
        "skipUniverseOpening"
    ) === "true";


if (skipOpening) {

    sessionStorage.removeItem(
        "skipUniverseOpening"
    );

}



/* =========================================================
   ELEMENTS
========================================================= */

const openingPage =
    document.getElementById(
        "openingPage"
    );


const loginPage =
    document.getElementById(
        "loginPage"
    );


const welcomePage =
    document.getElementById(
        "welcomePage"
    );


const mainWebsite =
    document.getElementById(
        "mainWebsite"
    );



/* =========================================================
   OPENING FLOW
========================================================= */

if (skipOpening) {

    /*
        Dari Your Memories:
        langsung masuk dashboard.
    */

    openingPage?.classList.add(
        "hide"
    );


    loginPage?.classList.add(
        "hidden"
    );


    welcomePage?.classList.remove(
        "show"
    );


    mainWebsite?.classList.add(
        "show"
    );


    document.body.style.overflow =
        "auto";


} else {

    /*
        Pertama kali membuka website:
        opening → login
    */

    setTimeout(
        () => {

            openingPage?.classList.add(
                "hide"
            );


            loginPage?.classList.remove(
                "hidden"
            );

        },
        6500
    );

}



/* =========================================================
   LOGIN
========================================================= */

const secretInput =
    document.getElementById(
        "secretInput"
    );


const unlockBtn =
    document.getElementById(
        "unlockBtn"
    );


const errorMessage =
    document.getElementById(
        "errorMessage"
    );


function unlockWebsite() {

    if (!secretInput) {
        return;
    }


    const answer =
        secretInput.value
            .trim()
            .toLowerCase();


    if (
        answer === "sayangku"
    ) {

        if (errorMessage) {

            errorMessage.textContent =
                "";

        }


        loginPage?.classList.add(
            "hidden"
        );


        welcomePage?.classList.add(
            "show"
        );


        setTimeout(
            () => {

                welcomePage?.classList.remove(
                    "show"
                );


                mainWebsite?.classList.add(
                    "show"
                );


                document.body.style.overflow =
                    "auto";

            },
            2600
        );


    } else {

        if (errorMessage) {

            errorMessage.textContent =
                "wrong secret word... try again ♡";

        }


        secretInput.value =
            "";

        secretInput.focus();

    }

}


unlockBtn?.addEventListener(
    "click",
    unlockWebsite
);


secretInput?.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter"
        ) {

            unlockWebsite();

        }

    }
);



/* =========================================================
   EXPLORE BUTTON
========================================================= */

const exploreBtn =
    document.getElementById(
        "exploreBtn"
    );


exploreBtn?.addEventListener(
    "click",
    () => {

        document
            .getElementById(
                "gallery"
            )
            ?.scrollIntoView({
                behavior: "smooth"
            });

    }
);



/* =========================================================
   COUNTER
========================================================= */

const startDate =
    new Date(
        "2025-03-30T00:00:00"
    );


function updateCounter() {

    const now =
        new Date();


    let difference =
        now.getTime() -
        startDate.getTime();


    if (difference < 0) {

        difference = 0;

    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) /
            3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) /
            60
        );


    const seconds =
        totalSeconds % 60;


    const daysElement =
        document.getElementById(
            "days"
        );


    const hoursElement =
        document.getElementById(
            "hours"
        );


    const minutesElement =
        document.getElementById(
            "minutes"
        );


    const secondsElement =
        document.getElementById(
            "seconds"
        );


    if (daysElement) {

        daysElement.textContent =
            days;

    }


    if (hoursElement) {

        hoursElement.textContent =
            hours;

    }


    if (minutesElement) {

        minutesElement.textContent =
            minutes;

    }


    if (secondsElement) {

        secondsElement.textContent =
            seconds;

    }

}


updateCounter();


setInterval(
    updateCounter,
    1000
);



/* =========================================================
   GALLERY LIGHTBOX
========================================================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


const lightbox =
    document.getElementById(
        "lightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const closeLightbox =
    document.querySelector(
        ".close-lightbox"
    );


galleryItems.forEach(
    (item) => {

        const image =
            item.querySelector(
                "img"
            );


        if (!image) {
            return;
        }


        item.addEventListener(
            "click",
            () => {

                if (
                    !lightbox ||
                    !lightboxImage
                ) {

                    return;

                }


                lightboxImage.src =
                    image.src;


                lightboxImage.alt =
                    image.alt ||
                    "Memory";


                lightbox.classList.add(
                    "show"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);



function closeMemoryLightbox() {

    lightbox?.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "auto";


    if (lightboxImage) {

        lightboxImage.src =
            "";

    }

}


closeLightbox?.addEventListener(
    "click",
    closeMemoryLightbox
);


lightbox?.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            lightbox
        ) {

            closeMemoryLightbox();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key ===
            "Escape"
        ) {

            closeMemoryLightbox();

        }

    }
);



/* =========================================================
   LETTER MODAL
========================================================= */

const openLetter =
    document.getElementById(
        "openLetter"
    );


const letterModal =
    document.getElementById(
        "letterModal"
    );


const closeLetter =
    document.querySelector(
        ".close-letter"
    );


openLetter?.addEventListener(
    "click",
    () => {

        letterModal?.classList.add(
            "show"
        );


        document.body.style.overflow =
            "hidden";

    }
);


function closeLetterModal() {

    letterModal?.classList.remove(
        "show"
    );


    if (
        !document.body.classList.contains(
            "lightbox-open"
        )
    ) {

        document.body.style.overflow =
            "auto";

    }

}


closeLetter?.addEventListener(
    "click",
    closeLetterModal
);


letterModal?.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            letterModal
        ) {

            closeLetterModal();

        }

    }
);



/* =========================================================
   THEME
========================================================= */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


function applyTheme(theme) {

    const isLight =
        theme === "light";


    document.body.classList.toggle(
        "light-mode",
        isLight
    );


    if (themeBtn) {

        themeBtn.textContent =
            isLight
                ? "☀"
                : "♡";

    }

}


const savedTheme =
    localStorage.getItem(
        "ourUniverseTheme"
    );


applyTheme(
    savedTheme === "light"
        ? "light"
        : "dark"
);


themeBtn?.addEventListener(
    "click",
    () => {

        const isLight =
            document.body.classList.contains(
                "light-mode"
            );


        const newTheme =
            isLight
                ? "dark"
                : "light";


        localStorage.setItem(
            "ourUniverseTheme",
            newTheme
        );


        applyTheme(
            newTheme
        );

    }
);



/* =========================================================
   EXIT
========================================================= */

const exitButton =
    document.getElementById(
        "exitButton"
    );


exitButton?.addEventListener(
    "click",
    () => {

        mainWebsite?.classList.remove(
            "show"
        );


        welcomePage?.classList.remove(
            "show"
        );


        loginPage?.classList.remove(
            "hidden"
        );


        if (secretInput) {

            secretInput.value =
                "";

        }


        document.body.style.overflow =
            "hidden";


        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }
);



/* =========================================================
   NAVBAR LOGO
========================================================= */

const navbarLogo =
    document.querySelector(
        ".navbar-logo"
    );


navbarLogo?.addEventListener(
    "click",
    (event) => {

        event.preventDefault();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);