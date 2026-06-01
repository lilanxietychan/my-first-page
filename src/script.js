const headerSpace = document.getElementById('header-space');


headerSpace.addEventListener('mousemove', function(e) {
    
    const star = document.createElement('div');
    star.classList.add('js-magic-star');
    
    
    const rect = headerSpace.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    
    
    const colors = ['#C6F35E', '#FF4081','#FFFFFF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.backgroundColor = randomColor;
    
    
    const randomX = (Math.random() - 0.5) * 80; 
    const randomY = (Math.random() - 0.5) * 80; 
    star.style.setProperty('--tx', `calc(-50% + ${randomX}px)`);
    star.style.setProperty('--ty', `calc(-50% + ${randomY}px)`);
  
  const minSize = 2;  
    const maxSize = 28; 
    const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    
    star.style.width = randomSize + 'px';
    star.style.height = randomSize + 'px';
    
    
    headerSpace.appendChild(star);
    
    
    setTimeout(() => {
        star.remove();
    }, 800);
});
