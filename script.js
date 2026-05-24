// =========================================================
// Reveal on scroll — with explicit and stagger delays
// =========================================================
const STAGGER_MS = 90;

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

// Apply explicit data-delay attributes, then observe
document.querySelectorAll('.reveal').forEach((el) => {
  const explicit = el.dataset.delay;
  if (explicit) el.style.setProperty('--delay', `${explicit}ms`);
  revealObserver.observe(el);
});

// Apply per-group stagger to siblings tagged with data-stagger
const staggerGroups = new Map();
document.querySelectorAll('[data-stagger]').forEach((el) => {
  const parent = el.parentElement;
  if (!staggerGroups.has(parent)) staggerGroups.set(parent, 0);
  const i = staggerGroups.get(parent);
  el.style.setProperty('--delay', `${i * STAGGER_MS}ms`);
  staggerGroups.set(parent, i + 1);
});

// =========================================================
// Scroll progress bar
// =========================================================
const progress = document.getElementById('scrollProgress');
const updateProgress = () => {
  const doc = document.documentElement;
  const scrolled = doc.scrollTop;
  const max = doc.scrollHeight - doc.clientHeight;
  const pct = max > 0 ? (scrolled / max) * 100 : 0;
  if (progress) progress.style.width = `${pct}%`;
};
document.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// =========================================================
// Active section indicator in nav
// =========================================================
const navLinks = Array.from(document.querySelectorAll('.masthead__nav a[data-target]'));
const targetSections = navLinks
  .map((a) => document.getElementById(a.dataset.target))
  .filter(Boolean);

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((a) => a.classList.remove('is-active'));
      const link = navLinks.find((a) => a.dataset.target === entry.target.id);
      if (link) link.classList.add('is-active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

targetSections.forEach((sec) => navObserver.observe(sec));
