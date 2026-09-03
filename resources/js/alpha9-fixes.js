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
