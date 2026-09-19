/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================
   NAVBAR ON SCROLL
========================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const sections =
    document.querySelectorAll(
        ".section, .benefits, .join"
    );


sections.forEach((section) => {

    section.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


sections.forEach((section) => {

    revealObserver.observe(section);

});


/* =========================
   CURRENT YEAR
========================= */

const yearText =
    document.querySelector(".footer-bottom p");

if (yearText) {

    const currentYear =
        new Date().getFullYear();

    yearText.textContent =
        `© ${currentYear} PMR. All rights reserved.`;

}

/* =========================
   PMR TEAM
========================= */

const teamMembers = {

    komandan: {
        position: "KOMANDAN",
        name: "Nama Komandan",
        bio: "Bertanggung jawab dalam memimpin, mengarahkan, dan mengkoordinasikan seluruh kegiatan PMR.",
        image: "assets/images/team-komandan.jpg",
        number: "01",
        contact: "#"
    },

    sekretaris: {
        position: "SEKRETARIS",
        name: "Nama Sekretaris",
        bio: "Mengelola administrasi, dokumentasi, dan berbagai kebutuhan surat-menyurat organisasi PMR.",
        image: "assets/images/team-sekretaris.jpg",
        number: "02",
        contact: "#"
    },

    bendahara: {
        position: "BENDAHARA",
        name: "Nama Bendahara",
        bio: "Mengatur dan mencatat keuangan serta membantu memastikan kebutuhan organisasi dapat dikelola dengan baik.",
        image: "assets/images/team-bendahara.jpg",
        number: "03",
        contact: "#"
    },

    diklat: {
        position: "DIKLAT",
        name: "Nama Diklat",
        bio: "Mengatur kegiatan pendidikan dan latihan untuk meningkatkan pengetahuan serta keterampilan anggota PMR.",
        image: "assets/images/team-diklat.jpg",
        number: "04",
        contact: "#"
    },

    humas: {
        position: "HUMAS",
        name: "Nama Humas",
        bio: "Menjalin komunikasi dan membantu menyampaikan informasi PMR kepada anggota, sekolah, dan pihak lainnya.",
        image: "assets/images/team-humas.jpg",
        number: "05",
        contact: "#"
    },

    logistik: {
        position: "LOGISTIK",
        name: "Nama Logistik",
        bio: "Mengatur perlengkapan dan kebutuhan yang digunakan dalam berbagai kegiatan PMR.",
        image: "assets/images/team-logistik.jpg",
        number: "06",
        contact: "#"
    },

    umum: {
        position: "UMUM",
        name: "Nama Umum",
        bio: "Membantu berbagai kebutuhan organisasi dan mendukung kelancaran kegiatan PMR.",
        image: "assets/images/team-umum.jpg",
        number: "07",
        contact: "#"
    }

};


const teamButtons =
    document.querySelectorAll(".team-button");

const teamPhoto =
    document.querySelector("#team-photo");

const teamPosition =
    document.querySelector("#team-position");

const teamName =
    document.querySelector("#team-name");

const teamBio =
    document.querySelector("#team-bio");

const teamNumber =
    document.querySelector("#team-number");

const teamContact =
    document.querySelector("#team-contact");


teamButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const member =
            button.dataset.member;

        const data =
            teamMembers[member];


        if (!data) {
            return;
        }


        /* Remove active state */

        teamButtons.forEach((item) => {

            item.classList.remove("active");

        });


        /* Activate clicked button */

        button.classList.add("active");


        /* Fade photo */

        teamPhoto.style.opacity = "0";


        setTimeout(() => {

            /* Update photo */

            teamPhoto.src =
                data.image;

            teamPhoto.alt =
                data.name;


            /* Update information */

            teamPosition.textContent =
                data.position;

            teamName.textContent =
                data.name;

            teamBio.textContent =
                data.bio;

            teamNumber.textContent =
                data.number;


            /* Update contact */

            teamContact.href =
                data.contact;


            /* Show photo */

            teamPhoto.style.opacity = "1";

        }, 200);

    });

});