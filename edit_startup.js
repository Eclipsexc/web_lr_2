document.addEventListener("DOMContentLoaded", () => {
    const index = new URLSearchParams(window.location.search).get("index");
    const startups = JSON.parse(localStorage.getItem("startups")) || [];

    if (index === null || !startups[index]) {
        alert("Стартап не знайдено");
        window.location.href = "my_startups.html";
        return;
    }

    const data = startups[index];

    document.getElementById("company-name").value = data.name;
    document.getElementById("employees").value = data.employees;
    document.getElementById("starting-capital").value = data.capital;
    document.getElementById("country").value = data.country;
    document.getElementById("city").value = data.city;
    document.getElementById("street").value = data.street;
    document.getElementById("building").value = data.building;

    // Після того як startup_options.js заповнив select-и, вибираємо потрібні значення
    setTimeout(() => {
        document.getElementById("business-sector").value = data.sector;
        document.getElementById("organization-type").value = data.type;
    }, 0);

    const saveBtn = document.getElementById("save-btn");
    const cancelBtn = document.getElementById("cancel-btn");

    saveBtn.addEventListener("click", () => {
        startups[index] = {
            ...data,
            name: document.getElementById("company-name").value.trim(),
            sector: document.getElementById("business-sector").value.trim(),
            employees: document.getElementById("employees").value.trim(),
            capital: document.getElementById("starting-capital").value.trim(),
            type: document.getElementById("organization-type").value,
            country: document.getElementById("country").value.trim(),
            city: document.getElementById("city").value.trim(),
            street: document.getElementById("street").value.trim(),
            building: document.getElementById("building").value.trim(),
            image: getImageBySector(document.getElementById("business-sector").value.trim())
        };

        localStorage.setItem("startups", JSON.stringify(startups));
        window.location.href = "my_startups.html";
    });

    cancelBtn.addEventListener("click", () => {
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
