function toggleMenu() {
    const menu = document.getElementById('.sliding-menu'); // Corrected to use ID
    menu.classList.toggle('.sliding-menu.show');
}

// Close the menu or info box when clicking outside
window.onclick = function(event) {
    const menu = document.getElementById('.sliding-menu');
    const infoBox = document.getElementById('infoBox');
    if (!menu.contains(event.target) && !event.target.matches('.menu-button')) {
        menu.classList.remove('sliding-menu.show');
    }
    if (!event.target.matches('.item, .item *')) {
        document.querySelectorAll('.info-box').forEach(box => {
            box.style.display = 'none';
        });
        if (infoBox) {
            infoBox.style.display = 'none';
        }
    }
};

function showInfoBox(item) {
    // Close any previously opened info boxes
    document.querySelectorAll('.info-box').forEach(box => {
        box.style.display = 'none';
    });

    // Get info from data attribute and update the info box
    const info = item.getAttribute('data-info');
    const infoContent = document.getElementById('infoContent');
    if (infoContent) {
        infoContent.textContent = info.replace(/, /g, '\n');
    }

    // Show and fade in the info box
    const infoBox = document.getElementById('infoBox');
    if (infoBox) {
        infoBox.style.display = 'block';
        infoBox.style.opacity = 0;
        let opacity = 0;
        const interval = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.1;
                infoBox.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 30);
    }
}

// Include this script in the <body> of your HTML, right before the closing tag.
