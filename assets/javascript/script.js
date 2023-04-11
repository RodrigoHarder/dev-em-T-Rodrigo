const titulos = document.querySelectorAll('.titulo-card');
const T = document.querySelector('.desenho-do-T');


titulos.forEach((titulo) => {
    titulo.addEventListener('mouseover', () => {
        T.style.display = 'block';
    });
    titulo.addEventListener('mouseout', () => {
        T.style.display = 'none';
    })
  });