// scrool smooth transition

document.addEventListener('DOMContentLoaded', function() {
    let navbarLinks = document.querySelectorAll('#navbar a');

    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let targetId = this.getAttribute('href');

            let targetElement = document.querySelector(targetId);
            let targetPosition = targetElement.offsetTop;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

/* --- CHAT GPT EXPLANATION ---
This code adds a click event listener to each link in your navbar. 
When a link is clicked, it retrieves the href attribute, which is the identifier of the target section. 
Then, it uses querySelector to find the target section in the document and retrieves its vertical position using offsetTop. 
Finally, it uses window.scrollTo() to smoothly transition to the position of the target section, setting behavior to 'smooth'.
*/

// faq answers reveal

let faqElement = document.querySelectorAll('.faq')

faqElement.forEach(function(faq) {
    faq.addEventListener('click', function(){
        faq.classList.toggle('active')
    })
})

