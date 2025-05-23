document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookieConsent')) {
        const cookieConsent = document.getElementById('cookieConsent');
        cookieConsent.style.display = 'block';

        const closeButton = document.getElementById('closeCookie');
        closeButton.addEventListener('click', function() {
            cookieConsent.style.display = 'none';
            localStorage.setItem('cookieConsent', 'true');
        });
    }
});
