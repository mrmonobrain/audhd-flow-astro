// Netlify Forms AJAX submission for waitlist
(function () {
  var form = document.getElementById('waitlist-form');
  var successEl = document.getElementById('waitlist-success');
  var errorEl = document.getElementById('waitlist-error');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = '...';
    }

    if (errorEl) errorEl.classList.add('hidden');

    var formData = new FormData(form);
    var encoded = new URLSearchParams(formData).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encoded,
    })
      .then(function (response) {
        if (response.ok) {
          form.style.display = 'none';
          if (successEl) successEl.classList.remove('hidden');
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.dataset.label || 'Submit';
        }
        if (errorEl) errorEl.classList.remove('hidden');
      });
  });
})();
