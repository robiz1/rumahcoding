function showPopup(title, price) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-price').textContent = price;
    document.getElementById('popup').style.display = 'flex';
  }
  
  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  function addToCart() {
    // Tambahkan logika untuk menambahkan produk ke keranjang atau panggil backend untuk memproses transaksi
    alert('Produk telah ditambahkan ke keranjang!');
    hidePopup();
  }
  