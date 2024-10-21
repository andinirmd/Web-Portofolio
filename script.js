function handleSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Display the success message
    document.getElementById('successMessage').style.display = 'block';

    // Optionally, reset the form after submission
    document.getElementById('contactForm').reset();
    
    return false; // Prevent the form from submitting to a server
}
// Tampilkan pesan selamat datang saat halaman dimuat
window.onload = function() {
    alert('Selamat datang di situs PORTOFOLIO ANDINI!');
};

// Tambahkan scroll halus ketika menavigasi ke bagian lain di halaman
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'instant'
        });
    });
});
