const layers = document.querySelectorAll('.parallax-layer');

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.02;
    const x = (centerX - clientX) * speed;
    const y = (centerY - clientY) * speed;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});