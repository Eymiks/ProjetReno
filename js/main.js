// ===== UTILITY =====
function getDifficultyBadge(d) {
  const map = { beginner: 'badge-beginner', medium: 'badge-medium', advanced: 'badge-advanced' };
  return `<span class="badge ${map[d]}">${DIFFICULTY_LABELS[d]}</span>`;
}

function renderTutoCard(t) {
  const cat = CATEGORIES.find(c => c.id === t.category);
  return `
    <article class="tuto-card" data-id="${t.id}" role="button" tabindex="0" aria-label="Voir le tutoriel : ${t.title}">
      <div class="tuto-thumb" style="background:${t.thumbBg}">${t.thumb}</div>
      <div class="tuto-body">
        <div class="tuto-meta">
          ${getDifficultyBadge(t.difficulty)}
          <span class="badge badge-duration">⏱ ${t.duration}</span>
          ${cat ? `<span class="badge badge-category">${cat.name}</span>` : ''}
        </div>
        <h3 class="tuto-title">${t.title}</h3>
        <p class="tuto-desc">${t.desc}</p>
        <span class="btn-tuto">Voir le tutoriel →</span>
      </div>
    </article>`;
}

function renderModal(t) {
  const stepsHtml = t.steps.map((s, i) => `
    <li>
      <div class="step-num">${i + 1}</div>
      <div class="step-content">
        <strong>${s.title}</strong>
        <p>${s.detail}</p>
      </div>
    </li>`).join('');

  const toolsHtml = t.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('');

  const warningHtml = t.warning ? `
    <div class="tuto-section">
      <div class="warning-box">
        <span class="warn-icon">⚠️</span>
        <div><strong>Sécurité :</strong> ${t.warning}</div>
      </div>
    </div>` : '';

  const tipHtml = t.tip ? `
    <div class="tuto-section">
      <div class="tip-box">
        <span class="tip-icon">💡</span>
        <div><strong>Astuce :</strong> ${t.tip}</div>
      </div>
    </div>` : '';

  return `
    <div class="modal-header">
      <div>
        <div class="tuto-info-row">
          ${getDifficultyBadge(t.difficulty)}
          <span class="badge badge-duration">⏱ ${t.duration}</span>
        </div>
        <h2>${t.title}</h2>
      </div>
      <button class="modal-close" aria-label="Fermer">✕</button>
    </div>
    <div class="modal-body">
      <div class="tuto-section">
        <p>${t.desc}</p>
      </div>
      ${warningHtml}
      <div class="tuto-section">
        <h3>🛠 Matériel nécessaire</h3>
        <div class="tools-list">${toolsHtml}</div>
      </div>
      <div class="tuto-section">
        <h3>📋 Étapes</h3>
        <ul class="steps-list">${stepsHtml}</ul>
      </div>
      ${tipHtml}
    </div>`;
}

// ===== MODAL =====
let overlay, modal;

function openModal(id) {
  const t = TUTORIALS.find(t => t.id === id);
  if (!t) return;
  modal.innerHTML = renderModal(t);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('tabindex', '-1');
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function bindCards(container) {
  container.querySelectorAll('.tuto-card').forEach(card => {
    const handler = () => openModal(card.dataset.id);
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
  });
}

// ===== FILTER BAR (category pages) =====
function initFilterBar(containerSelector, cardsSelector) {
  const bar = document.querySelector('.filter-bar');
  const grid = document.querySelector(containerSelector);
  if (!bar || !grid) return;

  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      grid.querySelectorAll(cardsSelector).forEach(card => {
        const match = filter === 'all' || card.dataset.difficulty === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

// ===== SEARCH (homepage) =====
function initSearch() {
  const input = document.getElementById('searchInput');
  const btn   = document.getElementById('searchBtn');
  if (!input) return;
  const go = () => {
    const q = input.value.trim();
    if (q) window.location.href = `recherche.html?q=${encodeURIComponent(q)}`;
  };
  btn && btn.addEventListener('click', go);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
}

// ===== MOBILE NAV =====
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// ===== HOMEPAGE =====
function initHomepage() {
  const catGrid  = document.getElementById('categoriesGrid');
  const featGrid = document.getElementById('featuredGrid');
  if (!catGrid) return;

  // Render categories
  catGrid.innerHTML = CATEGORIES.map(cat => {
    const count = TUTORIALS.filter(t => t.category === cat.id).length;
    return `
      <a href="${cat.id}.html" class="category-card ${cat.cssClass}" aria-label="${cat.name} — ${count} tutoriels">
        <div class="cat-icon" style="background:${cat.bg}">${cat.icon}</div>
        <span class="cat-name">${cat.name}</span>
        <span class="cat-count">${count} tutoriel${count > 1 ? 's' : ''}</span>
      </a>`;
  }).join('');

  // Featured: one per category
  if (featGrid) {
    const featured = CATEGORIES.map(cat => TUTORIALS.find(t => t.category === cat.id)).filter(Boolean);
    featGrid.innerHTML = featured.map(renderTutoCard).join('');
    bindCards(featGrid);
  }
}

// ===== CATEGORY PAGE =====
function initCategoryPage(categoryId) {
  const grid = document.getElementById('tutorialsGrid');
  if (!grid) return;
  const tutos = TUTORIALS.filter(t => t.category === categoryId);
  grid.innerHTML = tutos.map(t => `<div data-difficulty="${t.difficulty}">${renderTutoCard(t)}</div>`).join('');
  bindCards(grid);
  initFilterBar('#tutorialsGrid', '.tuto-card');
}

// ===== SEARCH PAGE =====
function initSearchPage() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q') || '';
  const input = document.getElementById('searchInput');
  if (input) input.value = q;

  const header = document.getElementById('searchResultsHeader');
  const grid   = document.getElementById('searchGrid');
  if (!grid || !header) return;

  if (!q) {
    header.innerHTML = '<h2>Recherche</h2><p>Entrez un terme de recherche.</p>';
    grid.innerHTML = '';
    return;
  }

  const lower = q.toLowerCase();
  const results = TUTORIALS.filter(t =>
    t.title.toLowerCase().includes(lower) ||
    t.desc.toLowerCase().includes(lower) ||
    t.steps.some(s => s.title.toLowerCase().includes(lower) || s.detail.toLowerCase().includes(lower)) ||
    t.tools.some(tool => tool.toLowerCase().includes(lower))
  );

  header.innerHTML = `<h2>Résultats pour « ${q} »</h2><p>${results.length} tutoriel${results.length !== 1 ? 's' : ''} trouvé${results.length !== 1 ? 's' : ''}</p>`;

  if (results.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="no-results-icon">🔍</div><p>Aucun résultat pour « ${q} ».<br>Essayez avec d'autres mots-clés.</p></div>`;
  } else {
    grid.innerHTML = results.map(renderTutoCard).join('');
    bindCards(grid);
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initModal();
  initMobileNav();
  initSearch();

  const page = document.body.dataset.page;
  if (page === 'home')     initHomepage();
  if (page === 'search')   initSearchPage();
  if (page === 'electricite') initCategoryPage('electricite');
  if (page === 'plomberie')   initCategoryPage('plomberie');
  if (page === 'peinture')    initCategoryPage('peinture');
  if (page === 'carrelage')   initCategoryPage('carrelage');
  if (page === 'isolation')   initCategoryPage('isolation');
  if (page === 'menuiserie')  initCategoryPage('menuiserie');
});
