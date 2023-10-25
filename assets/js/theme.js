const themeToggle = document.querySelector('.theme-toggle');

const bck_base_gradient = document.querySelector('.bck-base-gradient');
const bck_base = document.querySelector('.bck-base');

const bck_clr_complementary = document.querySelectorAll(
    '.bck-clr-complementary'
);
const clr_base = document.querySelectorAll('.clr-base');
const clr_complementary = document.querySelectorAll('.clr-complementary');
const border_complementary = document.querySelectorAll('.border-complementary');

// console.log(bck_clr_complementary.style);

bck_base_gradient.style.background = "var(--light-gradient)";
bck_base.style.background = "var(--light-color)";

for (const iterator of bck_clr_complementary) {
    iterator.style.backgroundColor = "var(--dark-color)";
}
for (const iterator of clr_base) {
    iterator.style.color = "var(--light-color)";
}
for (const iterator of clr_complementary) {
    iterator.style.color = "var(--dark-color)";
}
for (const iterator of border_complementary) {
    iterator.style.borderColor = "var(--dark-color)";
}

// bck_clr_complementary.style.backgroundColor = "var(--dark-color)";

themeToggle.addEventListener('click', () => {
    if (bck_base_gradient.style.background === "var(--light-gradient)") {
        bck_base_gradient.style.background = "var(--dark-gradient)";
        bck_base.style.background = "var(--dark-color)";
        for (const iterator of bck_clr_complementary) {
            iterator.style.backgroundColor = "var(--light-color)";
        }
        for (const iterator of clr_base) {
            iterator.style.color = "var(--dark-color)";
        }
        for (const iterator of clr_complementary) {
            iterator.style.color = "var(--light-color)";
        }
        for (const iterator of border_complementary) {
            iterator.style.borderColor = "var(--light-color)";
        }
    } else {
        bck_base_gradient.style.background = "var(--light-gradient)";
        bck_base.style.background = "var(--light-color)";
        for (const iterator of bck_clr_complementary) {
            iterator.style.backgroundColor = "var(--dark-color)";
        }
        for (const iterator of clr_base) {
            iterator.style.color = "var(--light-color)";
        }
        for (const iterator of clr_complementary) {
            iterator.style.color = "var(--dark-color)";
        }
        for (const iterator of border_complementary) {
            iterator.style.borderColor = "var(--dark-color)";
        }
    }
});
