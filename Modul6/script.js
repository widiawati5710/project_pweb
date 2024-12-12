$(document).ready(function() {
    // Menampilkan gambar
    $('#showBtn').click(function() {
        $('#myImage').fadeIn(); // Menggunakan efek fadeIn
    });

    // Menyembunyikan gambar
    $('#hideBtn').click(function() {
        $('#myImage').fadeOut(); // Menggunakan efek fadeOut
    });
});
