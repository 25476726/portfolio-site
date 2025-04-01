document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll("h4, img");

    headings.forEach((heading) => {
        heading.addEventListener("click", function () {
            let sibling = heading.nextElementSibling;
            
            while (sibling && sibling.tagName === "P") {
                sibling.style.display = sibling.style.display === "none" ? "block" : "none";
                sibling = sibling.nextElementSibling;
            }
        });

        // Initially hide all paragraphs under h4
        let sibling = heading.nextElementSibling;
        while (sibling && sibling.tagName === "P") {
            sibling.style.display = "none";
            sibling = sibling.nextElementSibling;
        }
    });
});
