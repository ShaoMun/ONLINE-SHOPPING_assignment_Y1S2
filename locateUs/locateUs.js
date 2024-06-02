document.addEventListener("DOMContentLoaded", function(){
    const klang = document.querySelector('.js-klang-button');

    klang.addEventListener("click", printKlang);
    
    function printKlang() {
        document.querySelector('.js-store-info')
        .innerHTML = 
        `<div class="store-info">
        <h2>LuxeLab Klang</h2>
        <p>123 Jalan Raja Bot,<br>
            Taman Klang Utama,<br>
            41000 Klang,<br>
            Selangor,<br>
            Malaysia.</p>
        <div class="phone-num">
            <p>Tel: 03-95127532</p>
            <p>Fax: 03-85217965</p>
        </div>
        </div>`;
    }
})


document.addEventListener("DOMContentLoaded", function(){
    const kotaDamansara = document.querySelector('.js-kd-button');

    kotaDamansara.addEventListener("click", printKD);
    
    function printKD() {
        document.querySelector('.js-store-info')
        .innerHTML = 
        `<div class="store-info">
        <h2>LuxeLab Kota Damansara</h2>
        <p>123 Jalan Kota Damansara 5/1,<br>
            Taman Kota Damansara,<br>
            47810 Petaling Jaya,<br>
            Selangor,<br>
            Malaysia.</p>
        <div class="phone-num">
            <p>Tel: 03-95177568</p>
            <p>Fax: 03-64358750</p>
        </div>
        </div>`;
    }
})


document.addEventListener("DOMContentLoaded", function(){
    const seriKembangan = document.querySelector('.js-sk-button');

    seriKembangan.addEventListener("click", printSK);
    
    function printSK() {
        document.querySelector('.js-store-info')
        .innerHTML = 
        `<div class="store-info">
        <h2>LuxeLab Seri Kembangan</h2>
        <p>456 Jalan Seri Kembangan 3/2,<br>
            Taman Seri Kembangan,<br>
            43300 Seri Kembangan,<br>
            Selangor,<br>
            Malaysia.</p>
        <div class="phone-num">
            <p>Tel: 03-54870269</p>
            <p>Fax: 03-34127906</p>
        </div>
        </div>`;
    }
})

