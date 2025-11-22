// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project filter functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get the filter category
        const filterCategory = this.getAttribute('data-filter');
        
        // Hide all project items
        document.querySelectorAll('.project-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Show the selected project item
        const selectedItem = document.querySelector(`.project-item[data-category="${filterCategory}"]`);
        if (selectedItem) {
            selectedItem.classList.add('active');
        }
    });
});
