// Premium Apple Wallet Card – Interactive Enhancements
document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('walletCard');
    const button = document.getElementById('walletBtn');

    // Ultra-subtle breathing glow animation
    let breath = 1;
    setInterval(() => {
        breath = breath === 1 ? 0.96 : 1;
        card.style.boxShadow = `
            0 0 60px rgba(100, 180, 255, ${0.22 * breath}),
            0 28px 85px rgba(0, 0, 0, .65),
            inset 0 0 50px rgba(140, 210, 255, ${0.07 * breath})
        `;
    }, 2800);

    // Elegant button interaction
    button.addEventListener('mousedown', () => {
        button.style.transform = 'translateY(-2px) scale(0.98)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = 'translateY(-4px)';
    });

    // Hover lift already handled in CSS – JS adds micro-feedback
    button.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-6px) rotateX(4deg)';
    });

    button.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0deg)';
    });

    // Console signature – luxury touch
    console.log('%c✦ LUMER Glass Wallet Card – Premium Apple Wallet Experience Loaded ✦', 
        'font-family:Georgia;font-size:11px;color:#a0d4ff;letter-spacing:1px');

    // Optional: Click on QR to simulate "access granted" (demo)
    const qr = document.getElementById('qrContainer');
    qr.style.cursor = 'pointer';
    qr.addEventListener('click', () => {
        qr.style.transition = 'all 0.3s cubic-bezier(0.23,1,0.32,1)';
        qr.style.transform = 'scale(1.08)';
        setTimeout(() => {
            qr.style.transform = 'scale(1)';
        }, 180);
        
        // In real use you would open a link or show success state
        console.log('%c✅ LUMER ACCESS – Digital identity verified', 
            'color:#b8e0ff;font-size:12px');
    });

    console.log('✅ Premium cinematic experience ready for Apple Wallet.');
});