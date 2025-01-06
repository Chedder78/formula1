document.addEventListener('DOMContentLoaded', function() {
    // Define menu and infoBox elements
    const menu = document.querySelector('#sliding-menu');
    const infoBox = document.getElementById('infoBox');

    // Toggle the menu visibility
    function toggleMenu() {
        menu.classList.toggle('show');
    }

    // Function to show an info box with fade-in effect
    function showInfoBox(item) {
        // Close any previously opened info boxes
        document.querySelectorAll('.info-box').forEach(box => {
            box.style.display = 'none';
        });

        const info = item.getAttribute('data-info');
        document.getElementById('infoContent').textContent = info.replace(/, /g, '\n');
        
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

    // Event delegation for closing the menu and info boxes
    window.onclick = function(event) {
        if (!menu.contains(event.target) && !event.target.matches('.menu-button')) {
            menu.classList.remove('show');
        }
        if (!event.target.matches('.item, .item *')) {
            document.querySelectorAll('.info-box').forEach(box => {
                box.style.display = 'none';
            });
        }
    };

    // Attach event handlers to menu buttons and items
    document.querySelectorAll('.menu-button').forEach(button => {
        button.addEventListener('click', toggleMenu);
    });

    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', function() {
            showInfoBox(this);
        });
    });

    // Toggle additional information display
    function toggleInfo() {
        const info = document.querySelector('.additional-info');
        if (info.style.maxHeight) {
            info.style.maxHeight = null;
        } else {
            info.style.maxHeight = info.scrollHeight + "px";
        }
    }

    // Event listener for elements with class 'additional-info'
    document.querySelectorAll('.additional-info').forEach(info => {
        info.addEventListener('click', toggleInfo);
    });
});
