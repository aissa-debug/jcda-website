/*
Modal for gallery images
This script is to open a modal when an image is clicked
Display the image in the modal
Close the modal when the close button is clicked.
*/

       const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const closeButton = document.querySelector('.image-modal-close');

        if (modal && modalImage && closeButton) {
            document.querySelectorAll('.gallery-link').forEach(function (link) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    modalImage.src = this.getAttribute('data-full');
                    modalImage.alt = this.getAttribute('data-alt');
                    modal.classList.add('show');
                    modal.setAttribute('aria-hidden', 'false');
                });
            });

            function closeModal() {
                modal.classList.remove('show');
                modal.setAttribute('aria-hidden', 'true');
            }

            closeButton.addEventListener('click', closeModal);
            modal.addEventListener('click', function (event) {
                if (event.target === modal) {
                    closeModal();
                }
            });

            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    closeModal();
                }
            });
        }

/*Adds a filter by category feature for teh gallery*/
const categoryFilter = document.getElementById("categoryFilter");
const items = document.querySelectorAll(".event-card, .gallery-item");

if (categoryFilter && items.length > 0) {
    function filterEvents() {
        const selectedCategory = categoryFilter.value;

        items.forEach(function (item) {
            const itemCategory = item.className.toLowerCase();
            const matchesCategory = selectedCategory === "all" || itemCategory.includes(selectedCategory);

            item.style.display = matchesCategory ? "block" : "none";
        });
    }

    categoryFilter.addEventListener("change", filterEvents);
}


/*
Contact Form Validation
The script is to read the form fields and check that the required fields are not empty.
Validates the email address format.
Shows an inline error message below invalid fields.
Prevents form submission until the form is valid.
Resets the form after a successful submission.
And give alert when submission is successful.
*/
const contactForm = document.querySelector(".contact-form");
if(contactForm){
    contactForm.addEventListener(
        "submit",
        function(event){
// Prevent the browser from sending the form immediately.
            event.preventDefault();
// This flag stays true until one of the checks fails.
            let formValid = true;
// Get the current form fields from the contact page.
            const fullName = document.getElementById("name");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const message = document.getElementById("message");
//Creates or updates an inline error message under a field.
//This gives the user immediate feedback when something is wrong.
            function showError(
                field,
                message
            ){
                let errorElement = field.nextElementSibling;
                if(!errorElement || !errorElement.classList.contains("error-message")){
                     errorElement = document.createElement("div");
                     errorElement.className = "error-message";
                     field.insertAdjacentElement("afterend", errorElement);
                    }
                    errorElement.textContent = message;
                    field.setAttribute(
                        "aria-invalid",
                        "true"
                    );
                    formValid = false;
        }
//Clears any previous inline error message for a field.
//This prevents old errors from staying on screen after the user fixes input.
        function clearError(field){
            const errorElement = field.nextElementSibling;
            if(errorElement && errorElement.classList.contains("error-message")){
                errorElement.textContent = "";
            }
            field.setAttribute(
                "aria-invalid",
                "false"
            );
        }

//Validate empty fields.
[
    fullName,
    email,
    phone,
    message
        ].forEach(function(field){
            if(field){
                clearError(field);
                if(
                    field.value.trim()
                    === ""
                ){
                    showError(
                        field,
                        "This field is required."
                    );
                }
            }
        });

if(email &&
    email.value.trim() !== ""
);
const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(
        !emailPattern.test(
            email.value
        )
    ){
        showError(
            email,
            "Please enter a valid email address."
        );
    };
})
//If every validation check passed, then form is accepted.
if (formValid){
    alert(
        "Thank you for contacting JCDA. We will respond shortly."
    );
    contactForm.reset();
}
}

