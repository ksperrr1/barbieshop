document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const status = document.getElementById("form-status");
    status.textContent = "Відправка...";

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });

        if (res.ok) {
            status.textContent = "Заявку успішно відправлено!";
            this.reset();
        } else {
            status.textContent = "Помилка, спробуйте ще раз.";
        }

    } catch (error) {
        status.textContent = "Помилка з’єднання.";
    }
});

document.querySelectorAll(".services .card button").forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = "#contacts";
    });
});

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
});

toTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
