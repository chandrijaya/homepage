/* Career keyboard: roving-tabindex tabs, arrow-key navigable.
   Everything still reads without JS — panels are plain sections and the
   keys degrade to buttons that do nothing. */
(function () {
  'use strict';

  var board = document.querySelector('.keyboard');
  if (!board) return;

  var keys = Array.prototype.slice.call(board.querySelectorAll('.key'));
  if (!keys.length) return;

  function panelFor(key) {
    return document.getElementById(key.getAttribute('aria-controls'));
  }

  function select(key, moveFocus) {
    keys.forEach(function (k) {
      var on = k === key;
      k.setAttribute('aria-selected', on ? 'true' : 'false');
      k.tabIndex = on ? 0 : -1;
      var panel = panelFor(k);
      if (panel) panel.hidden = !on;
    });
    if (moveFocus) key.focus();
  }

  board.addEventListener('click', function (e) {
    var key = e.target.closest('.key');
    if (key) select(key, false);
  });

  board.addEventListener('keydown', function (e) {
    var i = keys.indexOf(document.activeElement);
    if (i === -1) return;

    var next = null;
    if (e.key === 'ArrowRight') next = keys[(i + 1) % keys.length];
    else if (e.key === 'ArrowLeft') next = keys[(i - 1 + keys.length) % keys.length];
    else if (e.key === 'Home') next = keys[0];
    else if (e.key === 'End') next = keys[keys.length - 1];

    if (next) {
      e.preventDefault();
      select(next, true);
    }
  });

  /* Page-load sequence: lid, then name, then the line of text. */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    [
      ['.hero .eyebrow', 'lift-1'],
      ['.hero__name', 'lift-2'],
      ['.hero__line', 'lift-3']
    ].forEach(function (pair) {
      var el = document.querySelector(pair[0]);
      if (el) el.classList.add('lift', pair[1]);
    });
  }
})();
