window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('.navbar a');

    let CurrentSection ='';

    sections.forEach(sections => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - sectionHeight /3))
{
    CurrentSection = section.getAttribute('id');
}
  });

  navlinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href').includes(CurrentSection)){
        link.classList.add('active');
    }
});
});

document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.skill-circle');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        const circleInner = circle.querySelector('.circle-inner');
        const circleInnerMasked = circle.querySelector('.circle-inner-masked');
        const percentageText = circle.querySelector('.data-percentage');

        percentage.textContent = percentage + '%';

        const degree =(percentage / 100) * 360;

        circle.querySelector('.circle').style.background = `conic-gradient(#2b6101 0% ${degree}deg, #B0B0B0 ${degree}deg 360deg)`;

    });
});