// js/cookie-consent.js
// Simple cookie consent banner that respects Google Consent Mode
// It sets dataLayer variables for GTM based on user choice.
(function () {
  // Helper to read/write a simple cookie
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + d.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }
  function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Show banner if consent not yet given
  var consent = getCookie('cubanero_consent_v1');
  if (!consent) {
    var banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.style = 'position:fixed;bottom:0;left:0;right:0;background:#111;color:#fff;padding:1rem;z-index:9999;display:flex;justify-content:space-between;align-items:center;gap:1rem;';
    banner.innerHTML = '<span>Este sitio usa cookies para mejorar tu experiencia y recopilar métricas (Google Analytics, GTM).</span>' +
      '<button id="consent-accept" style="background:#CF142B;color:#fff;border:none;padding:.5rem 1rem;cursor:pointer;">Aceptar</button>' +
      '<button id="consent-reject" style="background:#555;color:#fff;border:none;padding:.5rem 1rem;cursor:pointer;">Rechazar</button>';
    document.body.appendChild(banner);

    document.getElementById('consent-accept').addEventListener('click', function () {
      setCookie('cubanero_consent_v1', 'granted', 365);
      banner.remove();
      // Inform GTM that consent is granted (Google Consent Mode)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'consent_updated', consent: { ad_storage: 'granted', analytics_storage: 'granted' } });
      // Load GTM (loader will respect the dataLayer state)
      var loader = document.createElement('script');
      loader.src = '/js/gtm-loader.js';
      loader.async = true;
      document.head.appendChild(loader);
    });
    document.getElementById('consent-reject').addEventListener('click', function () {
      setCookie('cubanero_consent_v1', 'denied', 365);
      banner.remove();
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'consent_updated', consent: { ad_storage: 'denied', analytics_storage: 'denied' } });
      // No GTM load
    });
  } else if (consent === 'granted') {
    // Consent already granted – load GTM immediately
    var loader = document.createElement('script');
    loader.src = '/js/gtm-loader.js';
    loader.async = true;
    document.head.appendChild(loader);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'consent_updated', consent: { ad_storage: 'granted', analytics_storage: 'granted' } });
  } else {
    // Consent denied – set Consent Mode denied
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'consent_updated', consent: { ad_storage: 'denied', analytics_storage: 'denied' } });
  }
})();
