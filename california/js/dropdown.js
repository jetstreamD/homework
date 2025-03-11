/// dropdown 

document.addEventListener('click', event => {
    const itIsDropdownBtn = event.target.matches('[data-dropdown-btn]');
    const dropdownIcon = event.target.querySelector('.dropdown-icon');
    const dropdown = event.target.nextElementSibling;

    if (itIsDropdownBtn) {
        document.querySelectorAll('[data-dropdown].active').forEach(openDropdown => {
            if (openDropdown !== dropdown) {
                openDropdown.classList.remove('active')
                openDropdown.previousElementSibling.querySelector('.dropdown-icon').classList.remove('active');
            }
        });

        dropdown.classList.toggle('active')
        dropdownIcon.classList.toggle('active')

    } else if (!event.target.closest('[data-dropdown]')) {
        document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
            dropdown.classList.remove('active')
            dropdown.previousElementSibling.querySelector('.dropdown-icon').classList.remove('active');
        })
    }
})







