
function toggleMenu() {
    const menu = document.getElementById('slidingMenu');
    menu.classList.toggle('show');
  }
  
  // Close the menu when clicking outside
  window.onclick = function(event) {
    const menu = document.getElementById('slidingMenu');
    if (!menu.contains(event.target) && !event.target.matches('.menu-button')) {
      menu.classList.remove('show');
    }
  }
  
  function showInfoBox(item) {
    // Close any previously opened info boxes
    document.querySelectorAll('.info-box').forEach(box => {
      box.style.display = 'none';
    });
  
    // Show the info box for the clicked item
    const infoBox = item.querySelector('.info-box');
    infoBox.style.display = 'block';
  
    // Fade in effect
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
  
  // Hide info box when clicking outside of an item
  window.onclick = function(event) {
    if (!event.target.matches('.item, .item *')) {
      document.querySelectorAll('.info-box').forEach(box => {
        box.style.display = 'none';
      });
    }
  }
  function showInfoBox(item) {
    const info = item.getAttribute('data-info');
    document.getElementById('infoContent').textContent = info.replace(/, /g, '\n');
    
    const infoBox = document.getElementById('infoBox');
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
  
  window.onclick = function(event) {
    if (!event.target.matches('.item, .item *')) {
      document.getElementById('infoBox').style.display = 'none';
    }
  }
function toggleInfo() {
    const info = document.querySelector('.additional-info');
    if (info.style.maxHeight) {
        info.style.maxHeight = null;
    } else {
        info.style.maxHeight = info.scrollHeight + "px";
    }
}

  
