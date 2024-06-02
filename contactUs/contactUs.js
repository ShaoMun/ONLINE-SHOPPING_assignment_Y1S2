document.getElementById('submitBox').addEventListener('click', () => {
    document.querySelector("body").innerHTML = 
    `<header>
    <div class="header-left">
        <a href="../mainpage/mainpage.html"><img src="../mainpage/logo.jpg" alt="LuxeLab"></a>
    </div>
    <div class="header-right">

        <div class="navbar-list">
            <ul>
                <li><a href="../new-product/new-product.html">NEW</a></li>
                    <li><a href="../makeup-product/makeup-product.html">MAKEUP</a></li>
                    <li><a href="../skincare-product/skincare-product.html">SKINCARE</a></li>
                    <li><a href="#">FRAGRANCE</a></li>
                    <li><a href="../hair-product/hair-product.html">HAIR</a></li>
                <li><a href="">SUPPORT</a></li>
            </ul>
        </div>
        <div class="navbar-img">
            <a href="../signup/signup.html"><img src="../mainpage/profile.png" alt="SignIn"></a>
            <a href="../cart/cart.html"><img src="../mainpage/cart.png" alt="Cart"></a>
        </div>
    </div>
</header>


    <h1>Contact Us</h1>
    <aside>
    <p>Thank you for your feedback!</p>
    </aside>
 
<footer>
    <div class="upper-section">
        <div class="footer-left">
            <p>ABOUT US</p>
            <ul>
                <li><a href="#">COMPANY INFO</a></li>
                <li><a href="../loyaltyProgramme/LoyaltyProgram.html">LOYALTY PROGRAMME</a></li>
                <li><a href="../news/news.html">NEWS</a></li>
            </ul>     
        </div>
        <div class="footer-mid">
            <p>SUPPORT</p>
            <ul>
                <li><a href="../contactUs/contactus.html">CONTACT US</a></li>
                <li><a href="../liveChat/livechat.html">LIVE CHAT</a></li>
                <li><a href="../FAQs/faqtopquestion.html">FAQs</a></li>
                <li><a href="../locateUs/locateUs-main.html">LOCATE US</a></li>
            </ul>
        </div>
        <div class="footer-right">
            <p>CONNECT</p>
            <a href="https://www.facebook.com/" target=“_blank”><img class="facebook" src="../mainpage/facebook.png"
                    alt="Facebook"></a>
            <a href="https://www.instagram.com/" target=“_blank”><img class="instagram"
                    src="../mainpage/instagram.png" alt="Instagram"></a>
            <a href="https://twitter.com/" target=“_blank”><img class="x" src="../mainpage/x.png" alt="X"></a>
        </div>
    </div>
    <div class="lower-section">
        <div class="lower-left">
            <p>Copyright © 2024 LuxeLab. All rights reserved.</p>
        </div>
        <div class="lower-right">
            <a href="../privacyPolicy.html">Privacy Policy</a>
            <a href="../termsOfUse.html">Terms of use</a>
            <a href="../legal.html">Legal</a>
        </div>
    </div>
    
</footer> `;
});