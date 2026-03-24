/**
 * Al-Zahra Farm Project - Professional Interactions
 * Features: AOS Initialization, Counter Animation, Image Parallax, Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. تهيئة مكتبة الأنميشن (AOS)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // 2. تأثير العداد للأرقام (Counters)
    // هذا الجزء يبحث عن أي رقم ويقوم بعمل عد تصاعدي له عند ظهور القسم
    const counters = document.querySelectorAll('.font-black, .text-2xl');
    const runCounters = () => {
        counters.forEach(counter => {
            const target = +counter.innerText.replace(/[^0-9]/g, '');
            if (target > 0 && counter.innerText.includes('%') || target > 100) {
                const updateCount = () => {
                    const count = +counter.innerText.replace(/[^0-9]/g, '');
                    const speed = 200;
                    const inc = target / speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc) + (counter.innerText.includes('%') ? '%' : '');
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target + (counter.innerText.includes('%') ? '%' : '');
                    }
                };
                updateCount();
            }
        });
    };

    // 3. تأثير "البارالاكس" الخفيف على الصور عند تحريك الماوس
    const images = document.querySelectorAll('.gallery-item img');
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        images.forEach(img => {
            img.style.transform = `scale(1.1) translate(${xPos}px, ${yPos}px)`;
        });
    });

    // 4. نظام التنقل السلس (Smooth Scroll) للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 5. تأثير الهيدر (Header) عند التمرير
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    });

    // 6. إضافة "Ripple Effect" بسيط عند الضغط على البطاقات
    const cards = document.querySelectorAll('.info-card, .dark-card');
    cards.forEach(card => {
        card.addEventListener('mousedown', function(e) {
            this.style.transform = 'scale(0.98)';
        });
        card.addEventListener('mouseup', function(e) {
            this.style.transform = 'translateY(-10px) scale(1)';
        });
    });

    console.log("Al-Zahra Farm JS Loaded Successfully | 2026");
});