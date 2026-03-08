// Dark mode toggle – persists via localStorage
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('audhd-theme', isDark ? 'dark' : 'light');
  });
})();
