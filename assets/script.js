// Shared list of mock tests by subject. Add a new subject here, add the matching
// <option> in the resources.html form, and drop the PDF in assets/downloads/ —
// the form and the thank-you page both read from this one place.
var MOCK_TEST_SUBJECTS = {
  "maths":             { label: "Mathematics",      file: "gcse-foundation-maths-mock-test.pdf" },
  "statistics":        { label: "Statistics",        file: "gcse-statistics-mock-test.pdf" },
  "english":           { label: "English",           file: "gcse-english-mock-test.pdf" },
  "biology":           { label: "Biology",           file: "gcse-biology-mock-test.pdf" },
  "chemistry":         { label: "Chemistry",         file: "gcse-chemistry-mock-test.pdf" },
  "physics":           { label: "Physics",           file: "gcse-physics-mock-test.pdf" },
  "computer-science":  { label: "Computer Science",  file: "gcse-computer-science-mock-test.pdf" }
};

var COOKIE_CONSENT_KEY = "beh-cookie-consent"; // "accepted" | "declined"

function loadTawk() {
  if (window.__tawkLoaded) return;
  window.__tawkLoaded = true;
  var Tawk_API = window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();
  Tawk_API.customStyle = {
    visibility: {
      desktop: { position: 'bl', xOffset: 20, yOffset: 20 },
      mobile: { position: 'bl', xOffset: 12, yOffset: 12 }
    }
  };
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/6a81de871d62051d4f68081d/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
}

function loadCalendly() {
  var wrap = document.getElementById('calendlyWrap');
  if (!wrap || window.__calendlyLoaded) return;
  window.__calendlyLoaded = true;
  var s = document.createElement('script');
  s.src = 'https://assets.calendly.com/assets/external/widget.js';
  s.async = true;
  document.body.appendChild(s);
}

var REVIEWS_WIDGET_ID = '01a02fed124870008f326d1fff1bc2bb9559';

function loadReviewsWidget() {
  var wrap = document.getElementById('JFWebsiteWidget-' + REVIEWS_WIDGET_ID);
  if (!wrap || window.__reviewsWidgetLoaded) return;
  window.__reviewsWidgetLoaded = true;
  var s = document.createElement('script');
  s.src = 'https://www.jotform.com/website-widgets/embed/' + REVIEWS_WIDGET_ID;
  s.async = true;
  document.body.appendChild(s);
}

function showReviewsConsentPrompt() {
  var wrap = document.getElementById('JFWebsiteWidget-' + REVIEWS_WIDGET_ID);
  if (!wrap) return;
  wrap.innerHTML =
    '<div class="calendly-consent-prompt">' +
    '<p>Live reviews are loaded via a third-party widget that uses cookies. Accept cookies to load it here, or ' +
    '<a href="https://g.page/r/CWNd7dylpQh7EBM/review" target="_blank" rel="noopener noreferrer">see our reviews on Google</a> instead.</p>' +
    '<button type="button" class="btn btn-primary" id="reviewsConsentAccept">Accept cookies &amp; load reviews</button>' +
    '</div>';
  var btn = document.getElementById('reviewsConsentAccept');
  if (btn) btn.addEventListener('click', function () { setConsent('accepted'); });
}

function showCalendlyConsentPrompt() {
  var wrap = document.getElementById('calendlyWrap');
  if (!wrap) return;
  wrap.innerHTML =
    '<div class="calendly-consent-prompt">' +
    '<p>The booking calendar uses a cookie from Calendly. Accept cookies to load it here, or ' +
    '<a href="https://calendly.com/info-brainyedhub/30min" target="_blank" rel="noopener noreferrer">open it in a new tab</a> instead.</p>' +
    '<button type="button" class="btn btn-primary" id="calendlyConsentAccept">Accept cookies &amp; load calendar</button>' +
    '</div>';
  var btn = document.getElementById('calendlyConsentAccept');
  if (btn) btn.addEventListener('click', function () { setConsent('accepted'); });
}

function setConsent(value) {
  try { localStorage.setItem(COOKIE_CONSENT_KEY, value); } catch (e) {}
  var banner = document.getElementById('cookieBanner');
  if (banner) banner.remove();
  if (value === 'accepted') {
    loadTawk();
    loadCalendly();
    loadReviewsWidget();
  } else {
    if (document.getElementById('calendlyWrap')) showCalendlyConsentPrompt();
    if (document.getElementById('JFWebsiteWidget-' + REVIEWS_WIDGET_ID)) showReviewsConsentPrompt();
  }
}

function initCookieConsent() {
  var stored = null;
  try { stored = localStorage.getItem(COOKIE_CONSENT_KEY); } catch (e) {}

  if (stored === 'accepted') {
    loadTawk();
    loadCalendly();
    loadReviewsWidget();
    return;
  }
  if (stored === 'declined') {
    if (document.getElementById('calendlyWrap')) showCalendlyConsentPrompt();
    if (document.getElementById('JFWebsiteWidget-' + REVIEWS_WIDGET_ID)) showReviewsConsentPrompt();
    return;
  }

  // No decision yet — show the banner and leave Tawk/Calendly/Reviews unloaded until then.
  if (document.getElementById('calendlyWrap')) showCalendlyConsentPrompt();
  if (document.getElementById('JFWebsiteWidget-' + REVIEWS_WIDGET_ID)) showReviewsConsentPrompt();

  var banner = document.createElement('div');
  banner.id = 'cookieBanner';
  banner.className = 'cookie-banner';
  banner.innerHTML =
    '<p>We use cookies for live chat (Tawk.to), instant booking (Calendly), and displaying live reviews (Jotform). ' +
    'WhatsApp and the rest of the site work either way. Accept to enable these, or decline to keep browsing without them.</p>' +
    '<div class="cookie-banner-actions">' +
    '<button type="button" class="btn btn-ghost" id="cookieDecline">Decline</button>' +
    '<button type="button" class="btn btn-primary" id="cookieAccept">Accept</button>' +
    '</div>';
  document.body.appendChild(banner);

  document.getElementById('cookieAccept').addEventListener('click', function () { setConsent('accepted'); });
  document.getElementById('cookieDecline').addEventListener('click', function () { setConsent('declined'); });
}

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initCookieConsent();

  // Mock test request form (resources.html): append the chosen subject onto the
  // FormSubmit "_next" redirect URL so the thank-you page knows which PDF to show.
  var mtForm = document.getElementById('mock-test-form');
  var mtSubject = document.getElementById('mt-subject');
  var mtNext = document.getElementById('mt-next');
  if (mtForm && mtSubject && mtNext) {
    // Pre-select the subject if arriving from a landing page, e.g. resources.html?subject=maths
    var incomingSubject = new URLSearchParams(window.location.search).get('subject');
    if (incomingSubject && MOCK_TEST_SUBJECTS[incomingSubject]) {
      mtSubject.value = incomingSubject;
    }
    var baseNext = mtNext.value.split('?')[0];
    mtForm.addEventListener('submit', function () {
      var subj = mtSubject.value || 'maths';
      mtNext.value = baseNext + '?subject=' + encodeURIComponent(subj);
    });
  }

  // Mock test thank-you page (resources-thanks.html): read ?subject= from the URL
  // and point the download button and heading at the right subject's PDF.
  var thanksDownload = document.getElementById('thanks-download');
  var thanksTitle = document.getElementById('thanks-title');
  if (thanksDownload) {
    var params = new URLSearchParams(window.location.search);
    var subjKey = params.get('subject');
    var info = MOCK_TEST_SUBJECTS[subjKey] || MOCK_TEST_SUBJECTS['maths'];
    thanksDownload.href = 'assets/downloads/' + info.file;
    thanksDownload.textContent = 'Download the ' + info.label + ' Mock Test (PDF)';
    if (thanksTitle) thanksTitle.textContent = "Here's your " + info.label + ' mock test';
  }
});
