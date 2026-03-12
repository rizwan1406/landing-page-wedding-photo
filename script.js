const db = {
    "steakhouse": {
        name: "STEAK HOUSE", heroH: "Juicy Wagyu Experience", heroP: "Daging pilihan dengan teknik panggang artisan.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
        items: [{n: "Sirloin", d: "A5 Grade"}, {n: "T-Bone", d: "Dry Aged 30 Days"}],
        action: "Reservasi Meja"
    },
    "bakery": {
        name: "SWEET CRUMB", heroH: "Freshly Baked Daily", heroP: "Roti hangat langsung dari oven kami.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
        items: [{n: "Croissant", d: "Butter French"}, {n: "Bagel", d: "Sesame Seeds"}],
        action: "Pesan Roti"
    },
    "diet-plan": {
        name: "LEAN MEALS", heroH: "Makan Sehat, Hidup Hebat", heroP: "Katering gizi seimbang untuk diet maksimal.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
        items: [{n: "Paket Keto", d: "Low Carb"}, {n: "Paket Bulk", d: "High Protein"}],
        action: "Langganan Sekarang"
    },
    "juice-bar": {
        name: "VITA JUICE", heroH: "100% Raw Energy", heroP: "Sari buah murni tanpa gula tambahan.", img: "https://images.unsplash.com/photo-1610970881699-44a55b4cf7f5?w=800",
        items: [{n: "Detox Green", d: "Spinach & Apple"}, {n: "Sun Glow", d: "Orange & Ginger"}],
        action: "Beli Jus"
    },
    "food-truck": {
        name: "NOMAD BITES", heroH: "Street Food Gourmet", heroP: "Rasa bintang lima di pinggir jalan.", img: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800",
        items: [{n: "Smash Burger", d: "Double Beef"}, {n: "Loaded Fries", d: "Cheese Lava"}],
        action: "Cek Lokasi"
    },
    "sushi": {
        name: "TOKYO ROLL", heroH: "Authentic Sushi Art", heroP: "Kelezatan tradisional dari tangan Master Sushi.", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
        items: [{n: "Salmon Nigiri", d: "Fresh Catch"}, {n: "Dragon Roll", d: "Eel & Avocado"}],
        action: "Pesan Omakase"
    },
    "vintage-coffee": {
        name: "OLD BEAN", heroH: "Nostalgia dalam Cangkir", heroP: "Kopi tradisional dengan biji pilihan lokal.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        items: [{n: "Kopi Susu Gula Aren", d: "Signature"}, {n: "V60", d: "Single Origin"}],
        action: "Order Kopi"
    },
    "chocolate-factory": {
        name: "DARK COCOA", heroH: "Pure Artisan Chocolate", heroP: "Cokelat murni dari petani kakao Indonesia.", img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800",
        items: [{n: "Dark 80%", d: "Bitter Sweet"}, {n: "Milk Choco", d: "Creamy Joy"}],
        action: "Beli Cokelat"
    },
    // --- JASA & PROFESIONAL (9-40) ---
    "tax-consultant": { name: "TAX MATE", heroH: "Urus Pajak Tanpa Pusing", heroP: "Solusi legalitas dan keuangan bisnis Anda.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800", items: [{n: "Audit", d: "Tahunan"}, {n: "E-Faktur", d: "Reporting"}], action: "Konsultasi" },
    "digital-marketing": { name: "GROW AGENCY", heroH: "Scale Your Business", heroP: "Iklan digital yang tepat sasaran.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800", items: [{n: "SEO", d: "Rank #1"}, {n: "Ads", d: "FB & Google"}], action: "Mulai Iklan" },
    "wedding-photo": { name: "LOVE LENS", heroH: "Capture The Moment", heroP: "Abadikan hari bahagia Anda selamanya.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800", items: [{n: "Prewedding", d: "Cinematic"}, {n: "Wedding", d: "Full Day"}], action: "Booking Tanggal" },
    "architect": { name: "ARCHI-STUDIO", heroH: "Bangun Rumah Impian", heroP: "Desain hunian modern dan fungsional.", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800", items: [{n: "Residential", d: "Modern House"}, {n: "Office", d: "Smart Building"}], action: "Mulai Desain" },
    "shoe-cleaning": { name: "SHOE GLOW", heroH: "Kembali Seperti Baru", heroP: "Jasa cuci sepatu profesional & cepat.", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800", items: [{n: "Deep Clean", d: "All Material"}, {n: "Repaint", d: "Color Restore"}], action: "Antar Sepatu" },
    "barbershop": { name: "GENTS CUT", heroH: "Tampil Lebih Maksimal", heroP: "Potongan rambut pria paling stylish.", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800", items: [{n: "Haircut", d: "+ Massage"}, {n: "Shaving", d: "Hot Towel"}], action: "Booking Capster" },
    "movers": { name: "FAST MOVE", heroH: "Pindahan Tanpa Ribet", heroP: "Jasa pindah rumah aman & terpercaya.", img: "https://images.unsplash.com/photo-1586762522674-599d0de991bc?w=800", items: [{n: "Packing", d: "Kardus & Bubble"}, {n: "Transport", d: "Truk Box"}], action: "Cek Estimasi" },
    "law-firm": { name: "JUSTICE LAW", heroH: "Pendamping Hukum Anda", heroP: "Menyelesaikan masalah hukum dengan tuntas.", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800", items: [{n: "Pidana", d: "Litigasi"}, {n: "Perdata", d: "Bisnis"}], action: "Janji Temu" },
    "saas-tech": { name: "TASK FLOW", heroH: "Manage Tasks Faster", heroP: "Aplikasi manajemen tim paling simpel.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800", items: [{n: "Collab", d: "Realtime"}, {n: "Storage", d: "Cloud Based"}], action: "Coba Gratis" },
    "fintech": { name: "WALLET UP", heroH: "Smart Money Manager", heroP: "Kelola keuangan dalam satu genggaman.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800", items: [{n: "Investing", d: "Stocks & Crypto"}, {n: "Budgeting", d: "Auto Plan"}], action: "Download App" },
    "lms-online": { name: "SKILL UP", heroH: "Belajar Skill Baru", heroP: "Kursus online bersertifikat dari ahlinya.", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800", items: [{n: "Design", d: "UI/UX Course"}, {n: "Coding", d: "Python Pro"}], action: "Daftar Kursus" },
    "hosting": { name: "CLOUD HOST", heroH: "Server Tanpa Downtime", heroP: "Hosting tercepat untuk website Anda.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800", items: [{n: "Shared", d: "Free SSL"}, {n: "VPS", d: "Full Root"}], action: "Pilih Hosting" },
    "mobile-game": { name: "CYBER QUEST", heroH: "Mulai Petualanganmu", heroP: "Game RPG paling adiktif tahun ini.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800", items: [{n: "Hero", d: "Summon Now"}, {n: "Clan", d: "War Mode"}], action: "Mainkan Sekarang" },
    "ai-agency": { name: "AI BOTS", heroH: "Otomasi Bisnis Anda", heroP: "Integrasi AI untuk efisiensi maksimal.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800", items: [{n: "Chatbots", d: "24/7 Support"}, {n: "Data AI", d: "Prediction"}], action: "Cek Layanan" },
    "health-tracker": { name: "HEALTH FIT", heroH: "Pantau Kesehatanmu", heroP: "Analisis tidur dan langkah harian.", img: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800", items: [{n: "Steps", d: "Auto Count"}, {n: "Sleep", d: "Deep Analysis"}], action: "Cek Progres" },
    "ecommerce-niche": { name: "CRAFT SHOP", heroH: "Barang Unik & Langka", heroP: "Toko kerajinan tangan paling artistik.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800", items: [{n: "Pottery", d: "Handmade"}, {n: "Canvas", d: "Oil Painting"}], action: "Belanja" },
    "yoga-studio": { name: "ZEN SPACE", heroH: "Temukan Ketenangan", heroP: "Studio Yoga terbaik untuk kesehatan jiwa.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", items: [{n: "Vinyasa", d: "Power Flow"}, {n: "Meditation", d: "Stress Relief"}], action: "Ikut Kelas" },
    "gym": { name: "MUSCLE LAB", heroH: "Transformasi Tubuhmu", heroP: "Peralatan lengkap dan PT berpengalaman.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800", items: [{n: "Weight", d: "Free Area"}, {n: "Cardio", d: "High Tech"}], action: "Daftar Member" },
    "skincare-clinic": { name: "GLOW SKIN", heroH: "Kulit Sehat Bercahaya", heroP: "Perawatan dokter spesialis kulit.", img: "https://images.unsplash.com/photo-1570172619380-410403584e5c?w=800", items: [{n: "Facial", d: "Oxygen Glow"}, {n: "Laser", d: "Spot Removal"}], action: "Janji Konsul" },
    "therapy": { name: "CALM MIND", heroH: "Dengarkan Dirimu", heroP: "Konsultasi psikologi yang aman dan nyaman.", img: "https://images.unsplash.com/photo-1573497620053-ea5310f94a17?w=800", items: [{n: "Personal", d: "One-on-One"}, {n: "Group", d: "Support Circle"}], action: "Mulai Terapi" },
    "plant-shop": { name: "GREEN LEAF", heroH: "Bawa Hutan ke Rumah", heroP: "Koleksi tanaman hias eksotis.", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800", items: [{n: "Monstera", d: "Variegata"}, {n: "Succulent", d: "Mini Pot"}], action: "Pesan Tanaman" },
    "fashion-brand": { name: "URBAN WEAR", heroH: "The Style of Street", heroP: "Koleksi fashion paling trendi.", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800", items: [{n: "Hoodie", d: "Oversized"}, {n: "Tee", d: "Premium Cotton"}], action: "Lihat Koleksi" },
    "watch-store": { name: "TIME MASTER", heroH: "Elegan di Pergelangan", heroP: "Jam tangan mewah kualitas dunia.", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800", items: [{n: "Luxury", d: "Mechanical"}, {n: "Smart", d: "Titanium Case"}], action: "Cek Katalog" },
    "pet-grooming": { name: "HAPPY PAWS", heroH: "Anabul Jadi Ganteng", heroP: "Salon hewan dengan kasih sayang.", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800", items: [{n: "Grooming", d: "Full Bath"}, {n: "Spa", d: "Pet Relax"}], action: "Booking Groomer" },
    "adventure-trip": { name: "WILD EXPLORE", heroH: "Jelajahi Alam Liar", heroP: "Open trip gunung dan pantai terbaik.", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", items: [{n: "Hiking", d: "Bromo 2D1N"}, {n: "Diving", d: "Raja Ampat"}], action: "Pesan Trip" },
    "resort-bali": { name: "AZURE RESORT", heroH: "Surga di Dunia", heroP: "Penginapan mewah tepi pantai.", img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800", items: [{n: "Villa", d: "Private Pool"}, {n: "Suite", d: "Ocean View"}], action: "Reservasi Kamar" },
    "conference": { name: "TECH SUMMIT", heroH: "Masa Depan Teknologi", heroP: "Konferensi IT terbesar tahun ini.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800", items: [{n: "Speakers", d: "Global CEO"}, {n: "Workshop", d: "AI Deep Dive"}], action: "Beli Tiket" },
    "car-rental": { name: "LUXE DRIVE", heroH: "Berkendara dengan Gaya", heroP: "Sewa mobil mewah untuk segala acara.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", items: [{n: "Sport", d: "Ferrari"}, {n: "Luxury", d: "Alphard"}], action: "Sewa Sekarang" },
    "concert-event": { name: "LIVE MUSIC", heroH: "Rasakan Getarannya", heroP: "Info tiket konser artis internasional.", img: "https://images.unsplash.com/photo-1459749411177-0421800f3396?w=800", items: [{n: "Concerts", d: "Upcoming List"}, {n: "VIP Pass", d: "Backstage Access"}], action: "Cek Tiket" },
    "wedding-organizer": { name: "ROYAL WEDDING", heroH: "Pernikahan Impian", heroP: "Kami urus segalanya untuk Anda.", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800", items: [{n: "Package", d: "All In"}, {n: "Decor", d: "Custom Theme"}], action: "Konsultasi WO" },
    "coworking": { name: "SPACE HUB", heroH: "Kerja Lebih Produktif", heroP: "Ruang kerja nyaman dengan kopi gratis.", img: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800", items: [{n: "Desk", d: "Daily Pass"}, {n: "Meeting", d: "Fast Wifi"}], action: "Booking Meja" },
    "theme-park": { name: "FUN WORLD", heroH: "Kesenangan Tanpa Batas", heroP: "Taman hiburan keluarga paling seru.", img: "https://images.unsplash.com/photo-1513889959059-8af8743d4d7d?w=800", items: [{n: "Rides", d: "Roller Coaster"}, {n: "Show", d: "Night Parade"}], action: "Beli Pass" }
};

function renderPage() {
    const type = document.body.className;
    const data = db[type] || db["steakhouse"]; // Default jika salah ketik

    // Update Teks & Judul
    document.getElementById('logo').innerHTML = `${data.name.split(' ')[0]} <span>${data.name.split(' ').slice(1).join(' ')}</span>`;
    document.getElementById('hero-h1').innerText = data.heroH;
    document.getElementById('hero-p').innerText = data.heroP;
    document.getElementById('hero-btn').innerText = data.action;
    document.getElementById('footer-name').innerText = data.name;
    document.querySelector('.hero').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${data.img}')`;

    // Update Grid Layanan
    let gridHTML = "";
    data.items.forEach(item => {
        gridHTML += `
            <div class="card">
                <h3>${item.n}</h3>
                <p>${item.d}</p>
            </div>
        `;
    });
    document.getElementById('features-grid').innerHTML = gridHTML;

    // Update CTA
    document.getElementById('cta-title').innerText = `Tertarik dengan ${data.name}?`;
    document.getElementById('cta-content').innerHTML = `
        <p>Hubungi tim kami untuk mendapatkan penawaran spesial hari ini.</p>
        <button class="btn" onclick="alert('Terima kasih sudah menghubungi kami!')">${data.action}</button>
    `;
}

window.onload = renderPage;