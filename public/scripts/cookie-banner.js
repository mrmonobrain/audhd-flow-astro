// Cookie banner – show if no consent stored, handle accept/decline
(function () {
  var COOKIE_KEY = 'audhd-flow-cookie-consent';
  var banner = document.getElementById('cookie-banner');
  var acceptBtn = document.getElementById('cookie-accept');
  var declineBtn = document.getElementById('cookie-decline');

  if (!banner) return;

  var consent = localStorage.getItem(COOKIE_KEY);
  if (!consent) {
    banner.style.display = 'block';
  } else if (consent === 'accepted') {
    loadGA4();
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, 'accepted');
      banner.style.display = 'none';
      loadGA4();
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', function () {
      localStorage.setItem(COOKIE_KEY, 'declined');
      banner.style.display = 'none';
    });
  }

  function loadGA4() {
    // Load Google Analytics 4 only after consent
    // Replace G-XXXXXXXXXX with your actual GA4 measurement ID
    var GA_ID = 'G-XXXXXXXXXX';
    if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
  }
})();
