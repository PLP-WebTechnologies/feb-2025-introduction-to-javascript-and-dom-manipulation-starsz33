// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const textChangerBtn = document.getElementById('text-changer');
    const dynamicText = document.getElementById('dynamic-text');
    
    textChangerBtn.addEventListener('click', function() {
        dynamicText.textContent = "The text has been changed successfully!";
        dynamicText.style.color = "#4a6fa5";
        dynamicText.style.fontWeight = "bold";
    });

    // 2. Modify CSS styles via JavaScript
    const styleChangerBtn = document.getElementById('style-changer');
    const styleBox = document.getElementById('style-box');
    let styleChanged = false;
    
    styleChangerBtn.addEventListener('click', function() {
        if (!styleChanged) {
            styleBox.style.backgroundColor = "#ffeb3b";
            styleBox.style.border = "2px solid #ff9800";
            styleBox.style.color = "#333";
            styleBox.style.fontStyle = "italic";
            styleChanged = true;
        } else {
            styleBox.style.backgroundColor = "#f9f9f9";
            styleBox.style.border = "1px solid #ddd";
            styleBox.style.color = "#333";
            styleBox.style.fontStyle = "normal";
            styleChanged = false;
        }
    });

    // 3. Add or remove an element when a button is clicked
    const elementTogglerBtn = document.getElementById('element-toggler');
    const toggleBox = document.getElementById('toggle-box');
    const toggleSection = document.querySelector('.content-section:last-child');
    let elementExists = true;
    
    elementTogglerBtn.addEventListener('click', function() {
        if (elementExists) {
            toggleBox.remove();
            elementTogglerBtn.textContent = "Add Element Back";
            elementExists = false;
        } else {
            toggleSection.insertBefore(toggleBox, elementTogglerBtn);
            elementTogglerBtn.textContent = "Toggle Element";
            elementExists = true;
        }
    });

    // Bonus: Change header color on mouseover
    const header = document.querySelector('header');
    
    header.addEventListener('mouseover', function() {
        this.style.backgroundColor = "#3a5a8f";
    });
    
    header.addEventListener('mouseout', function() {
        this.style.backgroundColor = "#4a6fa5";
    });
});