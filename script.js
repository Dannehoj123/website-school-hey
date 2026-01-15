document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buy-btn');
    const statusMsg = document.getElementById('cart-msg');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Get the item name from the parent card
            const itemName = e.target.parentElement.getAttribute('data-item');
            
            // Add a "clicking" effect
            statusMsg.innerText = `Adding ${itemName} to your crate...`;
            statusMsg.style.color = '#ff00ff';
            
            // Retro sound-like visual feedback
            setTimeout(() => {
                statusMsg.innerText = `${itemName} added! Groovy.`;
                statusMsg.style.color = '#00ffff';
            }, 800);
        });
    });
});