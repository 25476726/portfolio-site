document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    
    // Check if the theme is saved in localStorage
    const currentTheme = localStorage.getItem('theme'); 
  
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }
  
    // Add event listener to toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            // Save the dark mode preference in localStorage
            localStorage.setItem('theme', 'dark-mode');
        } else {
            // Remove the theme from localStorage if it's not dark mode
            localStorage.removeItem('theme');
        }
    });
  });
  