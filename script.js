document.addEventListener('DOMContentLoaded', () => {
    const cursorImg = document.createElement('div');
  
    cursorImg.classList.add('cursor-img');
  
    document.body.appendChild(cursorImg);
  
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
  
      cursorImg.style.left = `${x}px`;
      cursorImg.style.top = `${y}px`;
    });
  });
