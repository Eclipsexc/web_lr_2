document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button-container button");

    button.addEventListener("click", () => {
        const name = document.getElementById("company-name").value.trim();
        const sector = document.getElementById("business-sector").value.trim();
        const employees = document.getElementById("employees").value.trim();
        const capital = document.getElementById("starting-capital").value.trim();
        const organization = document.getElementById("organization-type").value;
        const country = document.getElementById("country").value.trim();
        const city = document.getElementById("city").value.trim();
        const street = document.getElementById("street").value.trim();
        const building = document.getElementById("building").value.trim();

        if (!name || !sector) {
            alert("Будь ласка, введіть назву та сектор.");
            return;
        }

        const startup = {
            name,
            sector,
            employees,
            capital,
            type: organization,
            country,
            city,
            street,
            building,
            image: getImageBySector(sector)
        };

        const existing = JSON.parse(localStorage.getItem("startups")) || [];
        existing.push(startup);
        localStorage.setItem("startups", JSON.stringify(existing));

        window.location.href = "my_startups.html";
    });

    function getImageBySector(sector) {
        const map = {
            "Агробізнес": "startups_icons/Агробізнес.jpg",
            "Дизайн та мистецтво": "startups_icons/Дизайн та мистецтво.jpg",
            "Електронна комерція": "startups_icons/Електронна комерція.jpg",
            "Енергетика": "startups_icons/Енергетика.jpg",
            "Кібербезпека": "startups_icons/Кібербезпека.jpg",
            "Логістика": "startups_icons/Логістика.jpg",
            "Маркетинг": "startups_icons/Маркетинг.jpg",
            "Освіта": "startups_icons/Освіта.jpg",
            "Охорона здоров'я": "startups_icons/Охорона здоров'я.jpg",
            "Розваги": "startups_icons/Розваги.jpg",
            "Технології": "startups_icons/Технології.jpg",
            "Туризм": "startups_icons/Туризм.jpg",
            "Фінанси": "startups_icons/Фінанси.jpg",
            "Юридичні послуги": "startups_icons/Юридичні послуги.jpg",
            "Нерухомість": "startups_icons/Нерухомість.jpg"
        };
        return map[sector] || "startups_icons/default.jpg";
    }
});
