// Menambahkan interaktivitas ke tombol
const button = document.getElementById('magicButton');
const resultText = document.getElementById('resultText');

button.addEventListener('click', () => {
  const currentTime = new Date().toLocaleTimeString('id-ID');
  resultText.textContent = `Tombol ini diklik pada pukul: ${currentTime}`;
});
