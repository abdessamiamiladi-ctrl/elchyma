document.addEventListener('DOMContentLoaded', () => {
    // 1. تغيير الصورة الرئيسية عند الضغط على الصور المصغرة
    window.changeImage = function(element) {
        const mainImg = document.getElementById('mainProductImg');
        mainImg.src = element.src;
        
        // تحديث الفئة النشطة
        document.querySelectorAll('.thumbnails-grid img').forEach(img => {
            img.classList.remove('active');
        });
        element.classList.add('active');
    };

    // 2. تفعيل اختيار الألوان والمقاسات
    const colorDots = document.querySelectorAll('.color-dot');
    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            colorDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });

    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 3. تفعيل الأكورديون للأسئلة الشائعة (FAQ)
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const currentActive = document.querySelector('.accordion-item.active');
            if (currentActive && currentActive !== item) {
                currentActive.classList.remove('active');
            }
            item.classList.toggle('active');
        });
    });

    // 4. القائمة المنسدلة للهواتف المحمولة
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
});