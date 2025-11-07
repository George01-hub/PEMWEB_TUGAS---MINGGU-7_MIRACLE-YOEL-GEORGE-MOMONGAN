document.getElementById("formKontak").addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || pesan === "") {
    alert("Nama dan pesan tidak boleh kosong!");
  } else {
    alert(`Terima kasih, ${nama}! Pesanmu sudah dikirim.`);
    this.reset();
  }
});
