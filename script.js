// Получаем элементы DOM
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

// Функция для генерации QR-кода
function generateQR() {
  // Проверяем, что поле ввода не пусто
  if (qrText.value.trim() !== "") {
    // Строим URL для генерации QR-кода
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText.value)}`;

    // Устанавливаем src для изображения QR-кода
    qrImage.src = qrCodeUrl;

    // Показываем контейнер с изображением
    imgBox.classList.add("show-img");
  } else {
    // Если поле ввода пусто, добавляем класс ошибки и убираем его через 1 секунду
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
