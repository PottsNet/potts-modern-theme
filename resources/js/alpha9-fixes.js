/* Potts Modern compatibility fixes introduced in 1.4.0-alpha.9. */
(function () {
  'use strict';

  var modalFormIdCounter = 0;
  var unifiedResponsiveNavigation = null;

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
      '@media(min-width:768px) and (max-width:1199.98px){',
      '.wt-header-wrapper{position:relative!important;overflow:visible!important;z-index:1030!important;}',
      '.wt-header-container,.wt-header-content{position:relative!important;overflow:visible!important;}',
      '.wt-header-content{display:grid!important;grid-template-columns:minmax(0,1fr)!important;align-items:center!important;}',
      '.wt-header-content>.wt-accessibility-links{position:absolute!important;}',
      '.wt-header-content>.wt-site-logo{display:none!important;}',
      '.wt-header-content>.wt-site-title{display:block!important;min-width:0!important;width:auto!important;max-width:none!important;margin:0!important;padding:.65rem 4.25rem .65rem .25rem!important;white-space:normal!important;overflow-wrap:anywhere!important;}',
      '.wt-header-wrapper>.potts-mobile-menu-toggle{display:inline-grid!important;position:absolute!important;z-index:1040!important;top:50%!important;right:max(.8rem,env(safe-area-inset-right))!important;width:46px!important;height:46px!important;place-items:center!important;margin:0!important;padding:0!important;border:1px solid rgba(255,255,255,.32)!important;border-radius:10px!important;background:rgba(255,255,255,.10)!important;color:#fff!important;box-shadow:none!important;transform:translateY(-50%)!important;}',
      '.wt-header-wrapper>.potts-mobile-menu-toggle:hover,.wt-header-wrapper>.potts-mobile-menu-toggle:focus-visible{background:rgba(255,255,255,.20)!important;outline:2px solid rgba(255,255,255,.7)!important;outline-offset:2px!important;}',
      '.potts-mobile-menu-layer[hidden]{display:none!important;}',
      '.potts-mobile-menu-layer:not([hidden]){display:block!important;position:fixed!important;inset:0!important;z-index:20000!important;}',
      '.potts-mobile-menu-backdrop{display:block!important;position:absolute!important;inset:0!important;width:100%!important;height:100%!important;margin:0!important;padding:0!important;border:0!important;background:rgba(20,28,31,.50)!important;opacity:0!important;transition:opacity 180ms ease!important;}',
      '.potts-mobile-menu-drawer{display:flex!important;position:absolute!important;top:0!important;right:0!important;bottom:0!important;width:min(420px,92vw)!important;max-width:92vw!important;flex-direction:column!important;overflow:hidden!important;margin:0!important;padding:0!important;background:var(--potts-bg-2,#fffdf8)!important;color:var(--potts-ink,#26343c)!important;box-shadow:-18px 0 40px rgba(20,28,31,.24)!important;transform:translateX(102%)!important;transition:transform 180ms ease!important;}',
      '.potts-mobile-menu-layer.is-open .potts-mobile-menu-backdrop{opacity:1!important;}',
      '.potts-mobile-menu-layer.is-open .potts-mobile-menu-drawer{transform:translateX(0)!important;}',
      '.potts-mobile-menu-header{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:1rem!important;min-height:64px!important;padding:.85rem 1rem!important;border-bottom:1px solid rgba(61,83,64,.16)!important;background:var(--potts-green-soft,#e3eadf)!important;}',
      '.potts-mobile-menu-close{display:inline-grid!important;width:42px!important;height:42px!important;place-items:center!important;border:0!important;border-radius:10px!important;background:rgba(255,255,255,.65)!important;color:inherit!important;}',
      '.potts-mobile-menu-body{display:flex!important;min-height:0!important;flex:1 1 auto!important;flex-direction:column!important;gap:.85rem!important;overflow:auto!important;padding:1rem!important;}',
      '.potts-unified-mobile-host{display:flex!important;flex-direction:column!important;gap:.85rem!important;width:100%!important;}',
      '.potts-unified-mobile-host>.potts-mobile-menu-section{display:block!important;width:100%!important;margin:0!important;padding:0!important;}',
      '.potts-unified-search .wt-header-search,.potts-unified-search .wt-header-search-form,.potts-unified-search .input-group{display:flex!important;width:100%!important;max-width:none!important;margin:0!important;}',
      '.potts-unified-mobile-host .wt-secondary-navigation,.potts-unified-mobile-host .wt-primary-navigation{display:block!important;width:100%!important;max-width:none!important;margin:0!important;padding:0!important;}',
      '.potts-unified-mobile-host .nav{display:flex!important;width:100%!important;flex-direction:column!important;align-items:stretch!important;gap:.35rem!important;margin:0!important;padding:0!important;}',
      '.potts-unified-mobile-host .nav-item{display:block!important;width:100%!important;margin:0!important;}',
      '.potts-unified-mobile-host .nav-link,.potts-unified-mobile-host .dropdown-item{display:flex!important;align-items:center!important;width:100%!important;min-width:0!important;min-height:44px!important;margin:0!important;padding:.65rem .75rem!important;border-radius:8px!important;color:var(--potts-ink,#26343c)!important;white-space:normal!important;text-align:left!important;}',
      '.potts-unified-mobile-host .dropdown-toggle::after{margin-left:auto!important;}',
      '.potts-unified-mobile-host .dropdown-menu{position:static!important;inset:auto!important;float:none!important;width:100%!important;max-width:none!important;margin:.15rem 0 .35rem!important;padding:.2rem!important;border:1px solid rgba(0,0,0,.10)!important;background:rgba(255,255,255,.72)!important;box-shadow:none!important;transform:none!important;}',
      '.potts-unified-mobile-host .dropdown-menu:not(.show){display:none!important;}',
      '.potts-unified-mobile-host .dropdown-menu.show{display:block!important;}',
      'body.potts-mobile-menu-open{overflow:hidden!important;overscroll-behavior:none;}',
      '}',
      '@media(min-width:768px) and (max-width:1199.98px) and (prefers-reduced-motion:reduce){.potts-mobile-menu-drawer,.potts-mobile-menu-backdrop{transition:none!important;}}'
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

  function positionMarkers(container) {
    if (!container) {
      return [];
    }

    return Array.from(container.childNodes).filter(function (node) {
      return node.nodeType === Node.COMMENT_NODE && String(node.nodeValue || '') === 'potts-mobile-menu-position';
    });
  }

  function insertAfterMarker(node, marker, fallback) {
    if (!node) {
      return;
    }

    if (marker && marker.parentNode) {
      marker.parentNode.insertBefore(node, marker.nextSibling);
    } else if (fallback) {
      fallback.appendChild(node);
    }
  }

  function closeExistingMobileDrawer(toggle, layer) {
    if (toggle) {
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    if (layer) {
      layer.classList.remove('is-open');
      layer.hidden = true;
    }

    document.body.classList.remove('potts-mobile-menu-open');
  }

  function installResponsiveHeader() {
    installResponsiveHeaderStyles();
    makeTreeTitleClickable();

    if (unifiedResponsiveNavigation) {
      unifiedResponsiveNavigation.refresh();
      return true;
    }

    var wrapper = document.querySelector('.wt-header-wrapper');
    var header = wrapper ? wrapper.querySelector('.wt-header-content') : null;
    var drawer = document.querySelector('.potts-mobile-menu-drawer');
    var drawerBody = drawer ? drawer.querySelector('.potts-mobile-menu-body') : null;
    var layer = document.querySelector('.potts-mobile-menu-layer');
    var toggle = wrapper ? wrapper.querySelector(':scope > .potts-mobile-menu-toggle') : null;

    if (!wrapper || !header || !drawer || !drawerBody || !layer || !toggle) {
      return false;
    }

    var search = header.querySelector(':scope > .wt-header-search');
    var user = header.querySelector(':scope > .wt-secondary-navigation');
    var genealogy = header.querySelector(':scope > .wt-primary-navigation');
    var structuralNodes = [search, user, genealogy].filter(Boolean);

    if (structuralNodes.length === 0) {
      return false;
    }

    var structuralPositions = structuralNodes.map(function (node) {
      var marker = document.createComment('potts-unified-header-position');
      node.parentNode.insertBefore(marker, node);
      return { node: node, marker: marker };
    });

    var host = document.createElement('div');
    host.className = 'potts-unified-mobile-host';
    host.hidden = true;

    var searchSection = document.createElement('section');
    searchSection.className = 'potts-mobile-menu-section potts-mobile-menu-utility potts-unified-search';

    var userSection = document.createElement('section');
    userSection.className = 'potts-mobile-menu-section potts-mobile-menu-utility potts-unified-user';

    var genealogySection = document.createElement('section');
    genealogySection.className = 'potts-mobile-menu-section potts-mobile-menu-primary potts-unified-genealogy';

    var extraSection = document.createElement('section');
    extraSection.className = 'potts-mobile-menu-section potts-mobile-menu-utility potts-unified-extra';
    var extraList = document.createElement('ul');
    extraList.className = 'potts-mobile-account-menu';
    extraSection.appendChild(extraList);

    [searchSection, userSection, genealogySection, extraSection].forEach(function (section) {
      host.appendChild(section);
    });
    drawerBody.appendChild(host);

    var compactQuery = window.matchMedia('(max-width:1199.98px)');
    var phoneQuery = window.matchMedia('(max-width:767.98px)');
    var refreshTimer = 0;

    function restoreLegacyMobileMoves() {
      var searchForm = document.querySelector('.potts-mobile-menu-search');
      if (search && searchForm && !search.contains(searchForm)) {
        insertAfterMarker(searchForm, positionMarkers(search)[0], search);
      }

      var genealogyMenu = document.querySelector('.wt-genealogy-menu');
      if (genealogy && genealogyMenu && !genealogy.contains(genealogyMenu)) {
        insertAfterMarker(genealogyMenu, positionMarkers(genealogy)[0], genealogy);
      }

      var userMenu = user ? user.querySelector('.wt-user-menu') : null;
      var legacyAccountMenu = drawer.querySelector('.potts-mobile-menu-body > .potts-mobile-menu-utility .potts-mobile-account-menu');
      if (userMenu && legacyAccountMenu && legacyAccountMenu !== extraList) {
        var markers = positionMarkers(userMenu);
        var movedRoots = Array.from(legacyAccountMenu.children);
        var restoreCount = Math.min(markers.length, movedRoots.length);

        for (var i = 0; i < restoreCount; i += 1) {
          insertAfterMarker(movedRoots[i], markers[i], userMenu);
        }

        Array.from(legacyAccountMenu.children).forEach(function (remaining) {
          if (remaining.querySelector('.potts-mobile-menu-sign-out') && !remaining.querySelector('.potts-history-global')) {
            remaining.remove();
          } else {
            extraList.appendChild(remaining);
          }
        });
      }

      drawerBody.querySelectorAll(':scope > .potts-mobile-menu-sign-in').forEach(function (clone) {
        clone.remove();
      });

      document.querySelectorAll('.potts-mobile-menu-auth-original').forEach(function (original) {
        original.classList.remove('potts-mobile-menu-auth-original');
      });

      drawerBody.querySelectorAll(':scope > .potts-mobile-menu-primary, :scope > .potts-mobile-menu-utility').forEach(function (section) {
        if (!host.contains(section)) {
          section.hidden = true;
        }
      });

      document.querySelectorAll('.potts-mobile-menu-vacant').forEach(function (element) {
        element.classList.remove('potts-mobile-menu-vacant');
      });
    }

    function moveStructuralNavigation() {
      if (!compactQuery.matches) {
        return;
      }

      restoreLegacyMobileMoves();

      if (search) {
        var searchForm = search.querySelector('form');
        if (searchForm) {
          searchForm.classList.add('potts-mobile-menu-search');
        }
        searchSection.appendChild(search);
      }
      if (user) {
        userSection.appendChild(user);
      }
      if (genealogy) {
        genealogySection.appendChild(genealogy);
      }

      extraSection.hidden = extraList.children.length === 0;
      host.hidden = false;
      document.body.classList.add('potts-unified-mobile-navigation-ready');
    }

    function restoreDesktopNavigation() {
      closeExistingMobileDrawer(toggle, layer);

      structuralPositions.forEach(function (position) {
        if (position.marker.parentNode) {
          position.marker.parentNode.insertBefore(position.node, position.marker.nextSibling);
        }
      });

      host.hidden = true;
      document.body.classList.remove('potts-unified-mobile-navigation-ready');
    }

    function refresh() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(function () {
        if (compactQuery.matches) {
          moveStructuralNavigation();
        } else {
          restoreDesktopNavigation();
        }
      }, 0);
    }

    function onPhoneBoundaryChange() {
      // The original 1.1 mobile drawer moves individual translated menu items
      // at 767.98px. Re-normalise immediately afterwards so one structural
      // webtrees user menu owns both phone and tablet widths.
      window.setTimeout(refresh, 0);
      window.setTimeout(refresh, 80);
    }

    if (typeof compactQuery.addEventListener === 'function') {
      compactQuery.addEventListener('change', refresh);
    } else {
      compactQuery.addListener(refresh);
    }

    if (typeof phoneQuery.addEventListener === 'function') {
      phoneQuery.addEventListener('change', onPhoneBoundaryChange);
    } else {
      phoneQuery.addListener(onPhoneBoundaryChange);
    }

    unifiedResponsiveNavigation = {
      refresh: refresh,
      restore: restoreDesktopNavigation
    };

    refresh();
    return true;
  }

  function scheduleResponsiveHeaderInstall() {
    [0, 40, 120, 300, 700].forEach(function (delay) {
      window.setTimeout(function () {
        installResponsiveHeader();
      }, delay);
    });
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
    installResponsiveHeaderStyles();
    makeTreeTitleClickable();
    scheduleResponsiveHeaderInstall();
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
