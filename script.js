const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


  $(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        infinite: false,
    });
});
function toggleDetails(item) {
    var details = item.querySelector('.timeline-details');
    var displayStyle = details.style.display;
    details.style.display = displayStyle === 'block' ? 'none' : 'block';
}

function showDetails(detailId) {
    var details = document.getElementById(detailId);
    var isVisible = details.style.display === 'block';
    // Hide any open detail boxes before showing the new one
    document.querySelectorAll('.timeline-detail').forEach(function(detail) {
        detail.style.display = 'none';
    });
    // Toggle the visibility of the clicked detail
    details.style.display = isVisible ? 'none' : 'block';
}
