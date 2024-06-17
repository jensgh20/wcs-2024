document.addEventListener("DOMContentLoaded", function() {
    // Mengambil semua link tantangan
    const challengeLinks = document.querySelectorAll('.challenge-link');

    // Iterasi setiap link dan tambahkan event listener untuk menangani klik
    challengeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Mencegah default action dari link (navigasi langsung)
            event.preventDefault();
            
            // Mengambil href dari link yang diklik
            const href = this.getAttribute('href');
            
            // Memuat konten halaman tantangan ke dalam main section
            loadChallengeContent(href);
        });
    });

    // Fungsi untuk memuat konten halaman tantangan ke dalam main section
    function loadChallengeContent(url) {
        // Menggunakan fetch untuk mengambil konten dari halaman tantangan
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Memuat konten ke dalam main section
                document.querySelector('main').innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }
});
