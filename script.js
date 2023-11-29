// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Função para aplicar uma cor aleatória ao título
  function changeTitleColor() {
    var title = document.getElementById('color-changing-title');
    title.style.color = getRandomColor();
  }
  
  // Atualiza a cor do título a cada 1000 milissegundos (1 segundo)
  setInterval(changeTitleColor, 1000);
  