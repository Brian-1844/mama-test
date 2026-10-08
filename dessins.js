/* Māmā — petits dessins d'articles, dans le style de l'app.
   Dans promos.json, le champ "dessin" d'une promo désigne l'un de ces noms. */
(function () {
  'use strict';

  function dessin(contenu) {
    return '<svg width="58" height="58" viewBox="0 0 64 64" aria-hidden="true">' +
      '<g stroke="#1B1B3A" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" fill="none">' + contenu + '</g></svg>';
  }

  window.Dessins = {
    mayonnaise: dessin(
      '<rect x="18" y="16" width="28" height="42" rx="8" fill="#FFF3D6"></rect>' +
      '<rect x="20" y="6" width="24" height="12" rx="4" fill="#FF5C8A"></rect>' +
      '<rect x="22" y="30" width="20" height="16" rx="3" fill="#FFD23F"></rect>' +
      '<path d="M26 38h12"></path>'),

    chocolat: dessin(
      '<rect x="10" y="18" width="44" height="30" rx="4" fill="#B5763A"></rect>' +
      '<path d="M24 18v30M40 18v30M10 33h44"></path>' +
      '<path d="M44 14l6-6 6 6-6 6z" fill="#FFD23F"></path>'),

    glace: dessin(
      '<path d="M18 26h28v26a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6z" fill="#FF9DB8"></path>' +
      '<rect x="14" y="20" width="36" height="8" rx="3" fill="#1FD6C4"></rect>' +
      '<path d="M22 14c0-8 20-8 20 0" fill="#FFF3D6"></path>' +
      '<circle cx="32" cy="42" r="5" fill="#FFFFFF"></circle>'),
    aspirateur: dessin(
      '<path d="M40 22C52 10 60 22 54 34C50 42 54 50 58 54" />' +
      '<rect x="14" y="26" width="30" height="26" rx="5" fill="#FFD23F"></rect>' +
      '<rect x="11" y="18" width="36" height="10" rx="4" fill="#5B5B7A"></rect>' +
      '<path d="M22 18v-5h14v5"></path>' +
      '<circle cx="19" cy="55" r="4" fill="#FFFFFF"></circle><circle cx="39" cy="55" r="4" fill="#FFFFFF"></circle>' +
      '<path d="M22 38h14"></path>'),

    biscuits: dessin(
      '<ellipse cx="26" cy="44" rx="18" ry="9" fill="#B5763A"></ellipse>' +
      '<path d="M8 38v6M44 38v6"></path>' +
      '<ellipse cx="26" cy="38" rx="18" ry="9" fill="#FFF3D6"></ellipse>' +
      '<ellipse cx="26" cy="33" rx="18" ry="9" fill="#B5763A"></ellipse>' +
      '<circle cx="46" cy="18" r="11" fill="#B5763A"></circle>' +
      '<circle cx="43" cy="16" r="1.500" fill="#1B1B3A" stroke="none"></circle><circle cx="50" cy="17" r="1.500" fill="#1B1B3A" stroke="none"></circle><circle cx="46" cy="23" r="1.500" fill="#1B1B3A" stroke="none"></circle>' +
      '<circle cx="20" cy="31" r="1.500" fill="#1B1B3A" stroke="none"></circle><circle cx="30" cy="34" r="1.500" fill="#1B1B3A" stroke="none"></circle>'),

    airfryer: dessin(
      '<rect x="14" y="8" width="36" height="48" rx="12" fill="#5B5B7A"></rect>' +
      '<circle cx="32" cy="19" r="5" fill="#FFD23F"></circle>' +
      '<rect x="19" y="30" width="26" height="20" rx="4" fill="#C9C3F2"></rect>' +
      '<rect x="28" y="35" width="8" height="12" rx="3" fill="#1B1B3A"></rect>'),

    'machine-a-laver': dessin(
      '<rect x="10" y="8" width="44" height="50" rx="5" fill="#FFFFFF"></rect>' +
      '<path d="M10 20h44"></path>' +
      '<circle cx="18" cy="14" r="2" fill="#FF5C8A"></circle><path d="M36 14h12"></path>' +
      '<circle cx="32" cy="39" r="13" fill="#6FE7DA"></circle>' +
      '<path d="M23 41c4-4 8 3 12-1s5 0 6 1" stroke="#FFFFFF"></path>'),

    'four-pizza': dessin(
      '<path d="M8 46A24 24 0 0 1 56 46Z" fill="#FF9F1C"></path>' +
      '<path d="M22 46A10 12 0 0 1 42 46Z" fill="#1B1B3A"></path>' +
      '<path d="M27 46c1-5 3-4 5-9 2 5 4 4 5 9z" fill="#FFD23F"></path>' +
      '<rect x="5" y="46" width="54" height="8" rx="2" fill="#C9C3F2"></rect>' +
      '<path d="M44 20v-10h6v14"></path>'),

    gourde: dessin(
      '<rect x="22" y="18" width="20" height="40" rx="7" fill="#1FD6C4"></rect>' +
      '<rect x="25" y="8" width="14" height="10" rx="3" fill="#5B5B7A"></rect>' +
      '<path d="M22 32h20M22 44h20"></path>' +
      '<path d="M39 10c8 0 8 12 3 14"></path>'),

    trampoline: dessin(
      '<path d="M12 34v20M52 34v20M24 40v16M40 40v16"></path>' +
      '<ellipse cx="32" cy="32" rx="26" ry="9" fill="#1FD6C4"></ellipse>' +
      '<ellipse cx="32" cy="32" rx="17" ry="5" fill="#5B5B7A"></ellipse>' +
      '<circle cx="32" cy="12" r="5" fill="#FFD23F"></circle>' +
      '<path d="M24 6l-3-3M40 6l3-3"></path>'),

    table: dessin(
      '<path d="M14 30L9 56M50 30l5 26M26 30v20M38 30v20"></path>' +
      '<rect x="5" y="22" width="54" height="8" rx="3" fill="#C9C3F2"></rect>' +
      '<path d="M32 22v8"></path>'),

    chaise: dessin(
      '<path d="M20 8v26M44 8v26"></path>' +
      '<rect x="18" y="8" width="28" height="12" rx="3" fill="#5B5B7A"></rect>' +
      '<rect x="14" y="32" width="36" height="7" rx="3" fill="#5B5B7A"></rect>' +
      '<path d="M18 39l28 18M46 39L18 57"></path>'),

    salon: dessin(
      '<rect x="6" y="18" width="52" height="22" rx="6" fill="#FF9DB8"></rect>' +
      '<rect x="4" y="30" width="12" height="20" rx="5" fill="#FF5C8A"></rect>' +
      '<rect x="48" y="30" width="12" height="20" rx="5" fill="#FF5C8A"></rect>' +
      '<rect x="14" y="36" width="36" height="12" rx="4" fill="#FFFFFF"></rect>' +
      '<path d="M32 36v12M12 50v6M52 50v6"></path>'),

    extracteur: dessin(
      '<rect x="10" y="30" width="26" height="26" rx="5" fill="#FF9F1C"></rect>' +
      '<rect x="15" y="8" width="16" height="22" rx="3" fill="#FFFFFF"></rect>' +
      '<circle cx="23" cy="43" r="5" fill="#FFFFFF"></circle>' +
      '<path d="M36 38h8v6"></path>' +
      '<path d="M40 44h16l-2 12H42z" fill="#FFD23F"></path>')
  };
})();
