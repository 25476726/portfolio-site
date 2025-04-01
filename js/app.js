document.addEventListener("DOMContentLoaded", function () {
    const togglers = document.querySelectorAll(".skillhead");

    togglers.forEach((toggler) => {
        toggler.addEventListener("click", function () {
            let sibling = toggler.nextElementSibling;
            
            while (sibling && sibling.tagName === "P") {
                if (sibling.style.maxHeight === "0px") {
                    sibling.style.maxHeight = sibling.scrollHeight + "px";
                    sibling.style.opacity = "1";
                    sibling.style.margin = "10px 0";  // Ensure spacing when visible
                } else {
                    sibling.style.maxHeight = "0px";
                    sibling.style.opacity = "0";
                    sibling.style.margin = "0";  // Remove spacing when hidden
                }
                sibling = sibling.nextElementSibling;
            }
        });

        // Initially hide all paragraphs
        let sibling = toggler.nextElementSibling;
        while (sibling && sibling.tagName === "P") {
            sibling.style.maxHeight = "0px";
            sibling.style.opacity = "0";
            sibling.style.overflow = "hidden";
            sibling.style.transition = "max-height 0.3s ease-out, opacity 0.3s ease-out, margin 0.3s ease-out";
            sibling.style.margin = "0";
            sibling = sibling.nextElementSibling;
        }
    });
});
