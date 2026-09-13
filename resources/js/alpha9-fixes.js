/* Potts Modern compatibility fixes introduced in 1.4.0-alpha.9. */
(function () {
  'use strict';

  var modalFormIdCounter = 0;

  function installFamilyChartDropdownFix() {
    var styleId = 'potts-modern-family-chart-dropdown-fix';

    if (document.getElementById(styleId)) {
      return;
    }

    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = [
      'body.potts-family-page .wt-family-members:has(.wt-chart-box-dropdown.show){overflow:visible!important;position:relative!important;z-index:20!important;}',
      'body.potts-family-page .wt-family-members .wt-chart-box:has(.wt-chart-box-dropdown.show){overflow:visible!important;position:relative!important;z-index:30!important;}',
      'body.potts-family-page .wt-family-members .wt-chart-box-dropdown.show{z-index:40!important;}'
    ].join('');

    (document.head || document.documentElement).appendChild(style);
  }

  function installBiographyDropdownFix() {
    var styleId = 'potts-modern-biography-dropdown-fix';

    if (document.getElementById(styleId)) {
      return;
    }

    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = [
      '.potts-profile-hero:has(.potts-profile-menu .dropdown-menu.show){overflow:visible!important;z-index:20!important;}',
      '.potts-profile-toolbar:has(.potts-profile-menu .dropdown-menu.show){position:relative!important;z-index:30!important;}',
      '.potts-profile-menu:has(.dropdown-menu.show){position:relative!important;z-index:40!important;}',
      '.potts-profile-menu .dropdown-menu.show{z-index:50!important;}'
    ].join('');

    (document.head || document.documentElement).appendChild(style);
  }

  function installFancyImagebarFullWidthFix() {
    var styleId = 'potts-modern-fancy-imagebar-full-width-fix';

    if (document.getElementById(styleId)) {
      return;
    }

    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = [
      '.wt-main-wrapper>.jc-fancy-imagebar{box-sizing:border-box!important;width:100vw!important;max-width:none!important;margin-left:calc(50% - 50vw)!important;margin-right:calc(50% - 50vw)!important;}',
      '.wt-main-wrapper>.jc-fancy-imagebar>img{display:block!important;width:100%!important;max-width:none!important;height:auto!important;margin:0!important;}'
    ].join('');

    (document.head || document.documentElement).appendChild(style);
  }

  function installResponsiveHeaderStyles() {
    var styleId = 'potts-modern-responsive-header-fix';

    if (document.getElementById(styleId)) {
      return;
    }

    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = [
      '.wt-site-title.potts-tree-title-link>a{color:inherit!important;text-decoration:none!important;}',
      '.wt-site-title.potts-tree-title-link>a:hover,.wt-site-title.potts-tree-title-link>a:focus-visible{text-decoration:underline!important;text-underline-offset:.18em;}',
      '.potts-mobile-nav-toggle,.potts-mobile-nav-panel{display:none;}',
      '@media(min-width:768px) and (max-width:1199.98px){',
      '.wt-header-wrapper{position:relative!important;overflow:visible!important;z-index:1030!important;}',
      '.wt-header-container{position:relative!important;overflow:visible!important;}',
      '.wt-header-content.potts-mobile-header-ready{display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;align-items:center!important;gap:.65rem!important;position:relative!important;overflow:visible!important;}',
      '.wt-header-content.potts-mobile-header-ready>.wt-accessibility-links{position:absolute!important;}',
      '.wt-header-content.potts-mobile-header-ready>.wt-site-logo,',
      '.wt-header-content.potts-mobile-header-ready>.wt-header-search,',
      '.wt-header-content.potts-mobile-header-ready>.wt-secondary-navigation,',
      '.wt-header-content.potts-mobile-header-ready>.wt-primary-navigation{display:none!important;}',
      '.wt-header-content.potts-mobile-header-ready>.wt-site-title{display:block!important;grid-column:1!important;min-width:0!important;width:auto!important;max-width:none!important;margin:0!important;padding:.65rem .25rem!important;white-space:normal!important;overflow-wrap:anywhere!important;}',
      '.wt-header-content.potts-mobile-header-ready>.potts-mobile-nav-toggle{display:inline-flex!important;grid-column:2!important;align-items:center!important;justify-content:center!important;width:46px!important;height:46px!important;margin-right:.25rem!important;padding:0!important;border:1px solid rgba(255,255,255,.32)!important;border-radius:10px!important;background:rgba(255,255,255,.10)!important;color:#fff!important;box-shadow:none!important;}',
      '.wt-header-content.potts-mobile-header-ready>.potts-mobile-nav-toggle:hover,.wt-header-content.potts-mobile-header-ready>.potts-mobile-nav-toggle:focus-visible{background:rgba(255,255,255,.20)!important;outline:2px solid rgba(255,255,255,.7)!important;outline-offset:2px!important;}',
      '.potts-mobile-nav-toggle-lines,.potts-mobile-nav-toggle-lines::before,.potts-mobile-nav-toggle-lines::after{display:block;width:22px;height:2px;background:currentColor;border-radius:999px;content:"";transition:transform .18s ease,opacity .18s ease;}',
      '.potts-mobile-nav-toggle-lines{position:relative;}',
      '.potts-mobile-nav-toggle-lines::before{position:absolute;left:0;top:-7px;}',
      '.potts-mobile-nav-toggle-lines::after{position:absolute;left:0;top:7px;}',
      '.potts-mobile-nav-toggle[aria-expanded="true"] .potts-mobile-nav-toggle-lines{background:transparent;}',
      '.potts-mobile-nav-toggle[aria-expanded="true"] .potts-mobile-nav-toggle-lines::before{top:0;transform:rotate(45deg);}',
      '.potts-mobile-nav-toggle[aria-expanded="true"] .potts-mobile-nav-toggle-lines::after{top:0;transform:rotate(-45deg);}',
      '.wt-header-content.potts-mobile-header-ready>.potts-mobile-nav-panel{display:none;grid-column:1 / -1!important;position:absolute!important;top:100%!important;left:0!important;right:0!important;z-index:1100!important;max-height:calc(100vh - 72px)!important;overflow:auto!important;margin:0!important;padding:.7rem!important;background:var(--potts-bg-2,#fff)!important;color:var(--potts-ink,#26352e)!important;border:1px solid rgba(0,0,0,.12)!important;border-radius:0 0 14px 14px!important;box-shadow:0 18px 38px rgba(0,0,0,.22)!important;}',
      '.wt-header-content.potts-mobile-header-ready>.potts-mobile-nav-panel.potts-mobile-nav-open{display:block!important;}',
      '.potts-mobile-nav-panel .potts-mobile-nav-section+.potts-mobile-nav-section{margin-top:.7rem;padding-top:.7rem;border-top:1px solid rgba(0,0,0,.10);}',
      '.potts-mobile-nav-panel .nav{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:.15rem!important;width:100%!important;}',
      '.potts-mobile-nav-panel .nav-item{display:block!important;width:100%!important;margin:0!important;}',
      '.potts-mobile-nav-panel .nav-link,.potts-mobile-nav-panel .dropdown-item{display:flex!important;align-items:center!important;width:100%!important;min-height:44px!important;margin:0!important;padding:.65rem .75rem!important;color:var(--potts-ink,#26352e)!important;white-space:normal!important;text-align:left!important;}',
      '.potts-mobile-nav-panel .dropdown-menu{position:static!important;inset:auto!important;transform:none!important;float:none!important;width:100%!important;max-width:none!important;margin:.15rem 0 .35rem!important;padding:.2rem!important;box-shadow:none!important;border:1px solid rgba(0,0,0,.10)!important;background:rgba(255,255,255,.55)!important;}',
      '.potts-mobile-nav-panel .dropdown-menu:not(.show){display:none!important;}',
      '.potts-mobile-nav-panel .dropdown-menu.show{display:block!important;}',
      '.potts-mobile-nav-panel .wt-header-search-form{display:flex!important;width:100%!important;margin:0!important;}',
      '.potts-mobile-nav-panel .wt-header-search-form .input-group{width:100%!important;}',
      '.potts-mobile-nav-panel .potts-nav-icon{flex:0 0 auto!important;}',
      'body.potts-mobile-nav-active{overflow:hidden!important;}',
      '}',
      '@media(min-width:1200px){.potts-mobile-nav-toggle,.potts-mobile-nav-panel{display:none!important;}}'
    ].join('');

    (document.head || document.documentElement).appendChild(style);
  }

  function treeHomeUrl() {
    var urls = [window.location.href];

    document.querySelectorAll('a[href], form[action]').forEach(function (element) {
      var value = element.getAttribute('href') || element.getAttribute('action') || '';
      if (value) {
        urls.push(value);
      }
    });

    for (var i = 0; i < urls.length; i += 1) {
      try {
        var url = new URL(urls[i], window.location.href);
        var match = url.pathname.match(/^(.*\/tree\/[^/]+)(?:\/.*)?$/i);
        if (match) {
          return url.origin + match[1];
        }
      } catch (error) {
        // Ignore malformed or non-http links and try the next candidate.
      }
    }

    return '';
  }

  function makeTreeTitleClickable() {
    var title = document.querySelector('.wt-header-wrapper .wt-site-title');
    if (!title || title.querySelector(':scope > a[href]')) {
      return;
    }

    var homeUrl = treeHomeUrl();
    if (!homeUrl) {
      return;
    }

    var link = document.createElement('a');
    link.href = homeUrl;
    link.setAttribute('aria-label', (title.textContent || '').trim() || 'Tree home');

    while (title.firstChild) {
      link.appendChild(title.firstChild);
    }

    title.appendChild(link);
    title.classList.add('potts-tree-title-link');
  }

  function cloneHeaderSection(source, className) {
    if (!source) {
      return null;
    }

    var section = document.createElement('div');
    section.className = 'potts-mobile-nav-section ' + className;

    var clone = source.cloneNode(true);
    clone.removeAttribute('id');

    clone.querySelectorAll('[id]').forEach(function (element) {
      element.removeAttribute('id');
    });

    clone.querySelectorAll('label[for]').forEach(function (label) {
      label.removeAttribute('for');
    });

    section.appendChild(clone);
    return section;
  }

  function closeMobileNavigation(header) {
    if (!header) {
      return;
    }

    var button = header.querySelector(':scope > .potts-mobile-nav-toggle');
    var panel = header.querySelector(':scope > .potts-mobile-nav-panel');

    if (!button || !panel) {
      return;
    }

    button.setAttribute('aria-expanded', 'false');
    panel.classList.remove('potts-mobile-nav-open');
    document.body.classList.remove('potts-mobile-nav-active');
  }

  function installResponsiveHeader() {
    installResponsiveHeaderStyles();
    makeTreeTitleClickable();

    var header = document.querySelector('.wt-header-wrapper .wt-header-content');
    if (!header || header.classList.contains('potts-mobile-header-ready')) {
      return;
    }

    var genealogy = header.querySelector('.wt-primary-navigation');
    var user = header.querySelector('.wt-secondary-navigation');
    var search = header.querySelector('.wt-header-search');

    if (!genealogy && !user && !search) {
      return;
    }

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'potts-mobile-nav-toggle';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Menu');
    button.innerHTML = '<span class="potts-mobile-nav-toggle-lines" aria-hidden="true"></span>';

    var panel = document.createElement('div');
    panel.className = 'potts-mobile-nav-panel';

    var searchSection = cloneHeaderSection(search, 'potts-mobile-search');
    var genealogySection = cloneHeaderSection(genealogy, 'potts-mobile-genealogy');
    var userSection = cloneHeaderSection(user, 'potts-mobile-user');

    [searchSection, genealogySection, userSection].forEach(function (section) {
      if (section) {
        panel.appendChild(section);
      }
    });

    button.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.classList.toggle('potts-mobile-nav-open', open);
      document.body.classList.toggle('potts-mobile-nav-active', open && window.matchMedia('(min-width:768px) and (max-width:1199.98px)').matches);
    });

    panel.addEventListener('click', function (event) {
      var link = event.target.closest('a[href]');
      if (link && !link.matches('[data-bs-toggle="dropdown"], .dropdown-toggle')) {
        closeMobileNavigation(header);
      }
    });

    document.addEventListener('click', function (event) {
      if (!header.contains(event.target)) {
        closeMobileNavigation(header);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMobileNavigation(header);
        button.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (!window.matchMedia('(min-width:768px) and (max-width:1199.98px)').matches) {
        closeMobileNavigation(header);
      }
    });

    header.appendChild(button);
    header.appendChild(panel);
    header.classList.add('potts-mobile-header-ready');
  }

  function markStructuralHomepage() {
    var homepage = document.querySelector('[data-potts-homepage]');
    if (!(homepage instanceof HTMLElement)) {
      return;
    }

    document.body.classList.add('potts-home-page');

    var main = document.querySelector('main, #content, #main, #main-content, #page');
    if (main) {
      main.classList.add('potts-home-content');
    }
  }

  function preserveModalFormOwnership(root) {
    var scope = root && root.querySelectorAll ? root : document;
    var modals = [];

    if (root instanceof Element && root.matches('.modal')) {
      modals.push(root);
    }

    scope.querySelectorAll('.modal').forEach(function (modal) {
      if (!modals.includes(modal)) {
        modals.push(modal);
      }
    });

    modals.forEach(function (modal) {
      var ownerForm = modal.closest('form');
      if (!ownerForm) {
        return;
      }

      if (!ownerForm.id) {
        modalFormIdCounter += 1;
        ownerForm.id = 'potts-modal-owner-form-' + modalFormIdCounter;
      }

      modal.querySelectorAll('button, input, select, textarea').forEach(function (control) {
        if (control.form === ownerForm) {
          control.setAttribute('form', ownerForm.id);
        }
      });
    });
  }

  function applyFixes(root) {
    installFamilyChartDropdownFix();
    installBiographyDropdownFix();
    installFancyImagebarFullWidthFix();
    installResponsiveHeader();
    markStructuralHomepage();
    preserveModalFormOwnership(root || document);
  }

  // Register before the main theme script so translated homepages are marked
  // before its language-dependent homepage enhancements run.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyFixes(document);
    }, { once: true });
  } else {
    applyFixes(document);
  }

  // Access-level dialogs are normally present in the initial page markup, but
  // also protect any compatible modal added later by webtrees or another module.
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      Array.from(mutation.addedNodes).forEach(function (node) {
        if (node instanceof Element) {
          preserveModalFormOwnership(node);
        }
      });
    });
  });

  function startObserver() {
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver, { once: true });
  } else {
    startObserver();
  }
}());
