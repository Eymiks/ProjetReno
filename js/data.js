// ===== TUTORIAL DATA =====
const TUTORIALS = [
  // ───── ÉLECTRICITÉ ─────
  {
    id: 'elec-01',
    category: 'electricite',
    title: 'Remplacer une prise électrique',
    difficulty: 'beginner',
    duration: '30 min',
    thumb: '🔌',
    thumbBg: '#fef9e7',
    desc: 'Apprenez à remplacer une prise murale défectueuse en toute sécurité, étape par étape.',
    tools: ['Tournevis cruciforme', 'Tournevis plat', 'Testeur de tension', 'Pince à dénuder'],
    warning: 'Coupez TOUJOURS le disjoncteur correspondant au circuit avant toute intervention. Vérifiez l\'absence de tension avec un testeur avant de toucher les fils.',
    tip: 'Photographiez le câblage existant avant de débrancher quoi que ce soit — c\'est une référence précieuse.',
    steps: [
      { title: 'Couper l\'alimentation', detail: 'Au tableau électrique, coupez le disjoncteur du circuit concerné. Collez un morceau d\'adhésif dessus pour éviter qu\'on le remette par inadvertance.' },
      { title: 'Vérifier l\'absence de tension', detail: 'Avec votre testeur de tension, confirmez qu\'il n\'y a plus de courant dans la prise. Testez chaque fil séparément.' },
      { title: 'Démonter l\'ancienne prise', detail: 'Dévissez la vis centrale du cache, retirez-le, puis dévissez les vis de fixation du boîtier. Tirez délicatement la prise vers vous.' },
      { title: 'Identifier les fils', detail: 'Phase (rouge ou marron), neutre (bleu), terre (vert/jaune). Notez sur quel bornier chaque fil est connecté.' },
      { title: 'Débrancher et rebrancher', detail: 'Dévissez les borniers de l\'ancienne prise, connectez les fils identiquement sur la nouvelle prise. Serrez bien les borniers.' },
      { title: 'Fixer et tester', detail: 'Remontez la prise dans la boîte, revissez le cache. Remettez le disjoncteur et vérifiez le bon fonctionnement avec un appareil.' }
    ]
  },
  {
    id: 'elec-02',
    category: 'electricite',
    title: 'Installer un interrupteur va-et-vient',
    difficulty: 'medium',
    duration: '1 h',
    thumb: '💡',
    thumbBg: '#fef9e7',
    desc: 'Commandez une lumière depuis deux endroits différents grâce aux interrupteurs va-et-vient.',
    tools: ['Tournevis', 'Testeur de tension', 'Pince à dénuder', 'Fil 3 conducteurs', 'Dominos électriques'],
    warning: 'Le va-et-vient nécessite un câble 3 conducteurs entre les deux interrupteurs (une phase de commande + 2 voies). Vérifiez votre installation existante avant d\'acheter le matériel.',
    tip: 'Étiquetez chaque fil dès le démontage avec du ruban adhésif et un marqueur. Le câblage d\'un va-et-vient peut vite devenir confus.',
    steps: [
      { title: 'Couper l\'alimentation', detail: 'Disjoncteur coupé, tension vérifiée au testeur.' },
      { title: 'Démonter les anciens interrupteurs', detail: 'Retirez les caches et sortez les interrupteurs. Identifiez les bornes A1 (alimentation), A2, B1, B2 (voies communes).' },
      { title: 'Vérifier le câblage existant', detail: 'Un câble 3G1,5 (3 conducteurs) doit relier les deux boîtes. Si vous avez seulement 2 fils, une gaine supplémentaire est nécessaire.' },
      { title: 'Connecter le premier interrupteur', detail: 'Phase principale sur borne commune, voies 1 et 2 sur les bornes correspondantes du va-et-vient.' },
      { title: 'Connecter le second interrupteur', detail: 'Les deux voies se connectent aux mêmes bornes que le premier (en correspondance), la sortie vers le luminaire part de la borne commune.' },
      { title: 'Tester les deux positions', detail: 'Remontez tout, rétablissez l\'alimentation, testez depuis chaque interrupteur que la lumière s\'allume et s\'éteint correctement.' }
    ]
  },
  {
    id: 'elec-03',
    category: 'electricite',
    title: 'Poser un luminaire au plafond',
    difficulty: 'beginner',
    duration: '45 min',
    thumb: '🔦',
    thumbBg: '#fef9e7',
    desc: 'Remplacez ou installez un plafonnier : connexions, fixation et câblage expliqués simplement.',
    tools: ['Tournevis', 'Testeur de tension', 'Pince à bec', 'Sac à vis'],
    warning: 'Ne jamais travailler sous tension. Si votre boîte de dérivation au plafond est inexistante, faites appel à un électricien pour l\'installation du câble.',
    tip: 'Pour les plafonniers lourds (> 2 kg), assurez-vous que la boîte d\'encastrement est fixée sur un fourreau ou une plaque de renfort solide.',
    steps: [
      { title: 'Couper le circuit', detail: 'Disjoncteur éclairage hors tension, vérification au testeur.' },
      { title: 'Retirer l\'ancien luminaire', detail: 'Dévissez la rosace ou le cache, sortez les dominos existants, débranchez les fils.' },
      { title: 'Identifier les fils plafond', detail: 'Phase, neutre et terre (si présente). Les fils anciens peuvent être noir/rouge/vert ou marron/bleu/vert-jaune.' },
      { title: 'Préparer le luminaire', detail: 'Passez les fils du plafond dans l\'œillet ou la rosace du nouveau luminaire selon les instructions fabricant.' },
      { title: 'Connecter les fils', detail: 'Phase sur phase, neutre sur neutre, terre sur terre. Utilisez des dominos ou les borniers fournis. Serrez bien.' },
      { title: 'Fixer la rosace et tester', detail: 'Remontez la rosace, assurez-vous qu\'aucun fil n\'est pincé. Rétablissez le courant et testez l\'interrupteur.' }
    ]
  },
  {
    id: 'elec-04',
    category: 'electricite',
    title: 'Installer un tableau électrique secondaire',
    difficulty: 'advanced',
    duration: '4 h',
    thumb: '⚡',
    thumbBg: '#fef9e7',
    desc: 'Créez un tableau divisionnaire pour un garage ou une dépendance : dimensionnement, câblage et protection.',
    tools: ['Tournevis isolés', 'Pince ampèremétrique', 'Niveau', 'Perceuse', 'Câble 3G6 ou 3G10', 'Disjoncteurs différentiels'],
    warning: 'L\'installation d\'un tableau secondaire doit respecter la norme NF C 15-100. La liaison entre le tableau principal et le secondaire doit être réalisée par un câble dimensionné selon la charge prévue. En cas de doute, consultez un électricien agréé CONSUEL.',
    tip: 'Prévoyez toujours 30 % de réserve en capacité disjoncteur pour les futurs besoins.',
    steps: [
      { title: 'Calcul de puissance', detail: 'Listez tous les appareils à alimenter (somme des puissances en W). Divisez par 230 V pour obtenir l\'intensité. Choisissez le calibre du disjoncteur de tête en conséquence.' },
      { title: 'Choix du câble d\'alimentation', detail: 'Pour < 32 A : câble 3G6 mm². Pour 32–63 A : câble 3G10 mm². Respectez la longueur maximale pour la chute de tension.' },
      { title: 'Fixer le tableau secondaire', detail: 'À hauteur réglementaire (axe entre 1 m et 1,80 m du sol). Percez et chevillez solidement.' },
      { title: 'Installer le disjoncteur de tête', detail: 'Calibre adapté au câble d\'alimentation. Câblez l\'arrivée sur les bornes d\'entrée, les départs sur les bornes de sortie.' },
      { title: 'Câbler les circuits', detail: 'Éclairage (1,5 mm²), prises (2,5 mm²), four/plaque (6 mm²). Chaque circuit a son propre disjoncteur différentiel 30 mA.' },
      { title: 'Test et mise en service', detail: 'Vérifiez l\'isolement de chaque circuit avec un contrôleur, testez les différentiels avec le bouton TEST, rétablissez l\'alimentation progressivement.' }
    ]
  },

  // ───── PLOMBERIE ─────
  {
    id: 'plomb-01',
    category: 'plomberie',
    title: 'Remplacer un robinet qui goutte',
    difficulty: 'beginner',
    duration: '1 h',
    thumb: '🚿',
    thumbBg: '#eff6ff',
    desc: 'Un robinet qui goutte peut gaspiller des centaines de litres par an. Réparez-le vous-même facilement.',
    tools: ['Clé à molette', 'Tournevis', 'Joint torique de rechange', 'Graisse silicone', 'Seau'],
    warning: 'Fermez le robinet d\'arrêt sous l\'évier ou à l\'entrée du logement avant toute intervention. Ouvrez le robinet pour vider la pression résiduelle.',
    tip: 'Apportez l\'ancien joint chez votre revendeur pour trouver le bon diamètre. Les joints sont standardisés mais pas universels.',
    steps: [
      { title: 'Couper l\'alimentation', detail: 'Fermez le robinet d\'arrêt sous l\'évier (quart de tour). Ouvrez le robinet pour évacuer l\'eau restante.' },
      { title: 'Démonter la tête de robinet', detail: 'Retirez le cache décoratif (souvent clipsé), dévissez la vis centrale, puis dévissez la tête de robinet à la clé.' },
      { title: 'Identifier le type de joint', detail: 'Clapet en caoutchouc (robinet classique), joint torique (mitigeur), cartouche céramique. Chaque type a sa propre réparation.' },
      { title: 'Remplacer le joint ou la cartouche', detail: 'Pour un clapet : dévissez, remplacez. Pour un joint torique : retirez à la pince, enduisez le neuf de graisse silicone. Pour une cartouche : extraction et remplacement à l\'identique.' },
      { title: 'Remonter et tester', detail: 'Remontez en ordre inverse, serrez sans forcer pour ne pas abîmer les joints. Ouvrez doucement le robinet d\'arrêt et vérifiez l\'étanchéité.' }
    ]
  },
  {
    id: 'plomb-02',
    category: 'plomberie',
    title: 'Déboucher un siphon de lavabo',
    difficulty: 'beginner',
    duration: '20 min',
    thumb: '🪠',
    thumbBg: '#eff6ff',
    desc: 'Vidange lente ? Écoulement bloqué ? Débouchez votre siphon en quelques minutes sans produit chimique.',
    tools: ['Seau ou bassine', 'Clé à sangle (optionnel)', 'Brosse à tuyaux', 'Gants'],
    warning: 'Évitez les déboucheurs chimiques agressifs qui attaquent les tuyaux en PVC et les joints. Privilégiez les méthodes mécaniques.',
    tip: 'Après le nettoyage, versez une poignée de bicarbonate puis du vinaigre blanc chaud chaque mois pour prévenir l\'accumulation de dépôts.',
    steps: [
      { title: 'Placer le seau', detail: 'Positionnez le seau sous le siphon pour recueillir l\'eau stagnante.' },
      { title: 'Dévisser le siphon', detail: 'Dévissez les deux écrous à la main (ou à la clé à sangle si trop serrés). Le siphon se détache en deux parties.' },
      { title: 'Nettoyer le siphon', detail: 'Videz le contenu dans le seau, nettoyez à la brosse et à l\'eau chaude. Retirez cheveux, savon et dépôts accumulés.' },
      { title: 'Inspecter le tuyau', detail: 'Avec une lampe, vérifiez l\'intérieur du tuyau mural. Un furet de plombier permet de dégager un bouchon plus profond.' },
      { title: 'Remonter le siphon', detail: 'Remontez en serrant les écrous à la main fermement. Ouvrez l\'eau et vérifiez qu\'il n\'y a pas de fuite aux raccords.' }
    ]
  },
  {
    id: 'plomb-03',
    category: 'plomberie',
    title: 'Installer un nouveau WC suspendu',
    difficulty: 'advanced',
    duration: '4 h',
    thumb: '🚽',
    thumbBg: '#eff6ff',
    desc: 'WC suspendu avec bâti-support : de la fixation murale au raccordement eau et évacuation.',
    tools: ['Perceuse à percussion', 'Niveau à bulle', 'Clé à molette', 'Clé Allen', 'Joint d\'étanchéité', 'Teflon'],
    warning: 'Le bâti-support doit impérativement être ancré dans le plancher béton ou une cloison porteuse. Ne jamais fixer uniquement sur du plâtre ou du BA13.',
    tip: 'Laissez la hauteur d\'abattant à 40–45 cm du sol pour un confort optimal (hauteur d\'assise standard). Vérifiez la hauteur avant de bétonner le bâti.',
    steps: [
      { title: 'Positionner le bâti-support', detail: 'Placez le bâti au niveau, à 5 cm du mur (pour l\'habillage futur). Réglez la hauteur de cuvette entre 38 et 46 cm selon votre préférence.' },
      { title: 'Fixer le bâti au sol', detail: 'Percez les trous de fixation au sol (béton). Chevilles et vis M10. Vérifiez horizontalité et verticalité au niveau.' },
      { title: 'Raccorder l\'arrivée d\'eau', detail: 'Tuyau d\'alimentation (flexible 1/2") sur la vanne d\'arrêt. Serrez avec joint neuf. Utilisez du teflon sur les filetages.' },
      { title: 'Raccorder l\'évacuation', detail: 'Le coude d\'évacuation du bâti se connecte au tuyau existant (diamètre 100 mm). Utilisez un manchon de réduction si nécessaire. Pente minimale : 2 cm/m.' },
      { title: 'Habiller le bâti', detail: 'Pose des rails de cloison sèche, BA13 hydrofuge ou carrelage. Ménagez l\'accès aux vannes et à la chasse.' },
      { title: 'Poser la cuvette et le bouton', detail: 'Accrochez la cuvette sur les boulons de bâti, serrez les vis avec les caoutchoucs fournis. Installez le mécanisme de commande de chasse.' }
    ]
  },
  {
    id: 'plomb-04',
    category: 'plomberie',
    title: 'Changer une vanne d\'arrêt',
    difficulty: 'medium',
    duration: '1 h 30',
    thumb: '🔧',
    thumbBg: '#eff6ff',
    desc: 'Une vanne qui ne coupe plus l\'eau doit être remplacée avant toute autre réparation plomberie.',
    tools: ['Clé à molette', 'Clé de compteur', 'Chiffons', 'Seau', 'Teflon', 'Nouvelle vanne'],
    warning: 'Cette opération nécessite de couper l\'eau au compteur général (clé compteur). Prévenez les voisins si vous êtes en copropriété.',
    tip: 'Optez pour une vanne à boisseau sphérique (quart de tour) plutôt qu\'une vanne classique : plus fiable et durée de vie bien supérieure.',
    steps: [
      { title: 'Couper l\'eau au compteur', detail: 'Utilisez la clé à compteur pour fermer l\'arrivée générale. Ouvrez un robinet pour purger la pression.' },
      { title: 'Démonter l\'ancienne vanne', detail: 'Placez le seau sous la vanne. Dévissez les deux raccords (amont et aval) à la clé molette. Retirez la vanne défectueuse.' },
      { title: 'Préparer les raccords', detail: 'Nettoyez les filetages. Enroulez 3 à 5 tours de teflon dans le sens des filets sur chaque filetage mâle.' },
      { title: 'Installer la nouvelle vanne', detail: 'Vissez les raccords à la main d\'abord, puis serrez à la clé (environ 1,5 tours de plus après contact). Ne forcez pas excessivement.' },
      { title: 'Ouvrir en position fermée', detail: 'Assurez-vous que la nouvelle vanne est en position fermée (quart de tour perpendiculaire au tuyau) avant de rétablir l\'eau.' },
      { title: 'Rétablir et contrôler', detail: 'Ouvrez l\'eau au compteur progressivement. Inspectez visuellement les raccords. Séchez et posez un papier absorbant pour détecter une micro-fuite.' }
    ]
  },

  // ───── PEINTURE ─────
  {
    id: 'peint-01',
    category: 'peinture',
    title: 'Préparer un mur avant de peindre',
    difficulty: 'beginner',
    duration: '2 h',
    thumb: '🖌️',
    thumbBg: '#fdf2f8',
    desc: 'La préparation est la clé d\'un résultat professionnel : rebouchage, ponçage, impression… rien ne doit être négligé.',
    tools: ['Enduit de rebouchage', 'Spalter', 'Papier abrasif 120 et 180', 'Ponceuse cale', 'Apprêt', 'Masque anti-poussière'],
    warning: 'Dans les logements construits avant 1997, le plomb est potentiellement présent dans les anciennes peintures. Ne poncez pas sans DDASS ou diagnostic plomb préalable.',
    tip: 'L\'apprêt est indispensable sur un mur neuf ou après rebouchage : il uniformise l\'absorption et améliore l\'adhérence de la peinture finale.',
    steps: [
      { title: 'Nettoyer le mur', detail: 'Dépoussiérez, éliminez les graisses avec un détergent neutre dilué. Laissez sécher complètement.' },
      { title: 'Gratter et décoller', detail: 'Retirez les parties de peinture décollées ou cloquées au racloir. Fraisez légèrement les fissures avec un couteau à enduire.' },
      { title: 'Reboucher', detail: 'Appliquez l\'enduit de rebouchage à la spatule. Pour les fissures de plus de 2 mm, posez une bande armée avant d\'enduire. Laissez sécher 4 à 6 h minimum.' },
      { title: 'Poncer', detail: 'Poncez les zones rebouchées au grain 120 pour aplanir, puis au 180 pour lisser. Dépoussiérez à l\'aspirateur et au chiffon humide.' },
      { title: 'Appliquer l\'apprêt', detail: 'Passez une couche d\'apprêt au rouleau ou au spalter. Respectez le temps de séchage indiqué (souvent 2 h). L\'apprêt peut être légèrement teinté dans la couleur finale pour réduire le nombre de couches.' },
      { title: 'Vérification finale', detail: 'Rasez le mur avec une lumière tangentielle (lampe torche). Tout défaut invisible de face apparaît. Poncez à nouveau si nécessaire.' }
    ]
  },
  {
    id: 'peint-02',
    category: 'peinture',
    title: 'Peindre un plafond sans traces',
    difficulty: 'medium',
    duration: '3 h',
    thumb: '🎨',
    thumbBg: '#fdf2f8',
    desc: 'Techniques pro pour éviter les auréoles, traces de rouleau et repises visibles sur vos plafonds.',
    tools: ['Rouleau grande poils (18 mm)', 'Perche télescopique', 'Pinceau de 6 cm', 'Bâche de protection', 'Ruban de masquage', 'Peinture plafond blanche'],
    warning: 'Portez des lunettes de protection et un chapeau. La peinture de plafond coule inévitablement. Protégez tous les sols et meubles avec des bâches.',
    tip: 'Commencez toujours la découpe (pinceau) avant le rouleau, et enchaînez immédiatement les deux pour travailler "bord à bord" avant séchage. Les reprises à sec créent les auréoles.',
    steps: [
      { title: 'Protéger et masquer', detail: 'Bâches au sol, ruban adhésif sur les murs (à 1 mm sous le plafond) et autour des luminaires.' },
      { title: 'Préparer la peinture', detail: 'Mélangez bien la peinture. Diluez au maximum 5 % la première couche pour une meilleure pénétration. Remplissez le bac à rouleau.' },
      { title: 'Découpe au pinceau', detail: 'Peignez un bord de 5 à 8 cm tout autour du plafond au pinceau. Travaillez sur 1 à 2 mètres à la fois.' },
      { title: 'Rouler dans la foulée', detail: 'Sans attendre le séchage de la découpe, passez le rouleau en W ou en N pour répartir la peinture, puis en parallèle à la lumière principale pour lisser. Évitez les aller-retours excessifs.' },
      { title: 'Laisser sécher et 2e couche', detail: 'Attendez le temps de séchage complet (2 à 4 h). La 2e couche est passée dans le sens perpendiculaire à la 1ère pour couvrir uniformément.' },
      { title: 'Retrait des protections', detail: 'Retirez le ruban de masquage à 45° pendant que la peinture est encore légèrement fraîche pour éviter les arrachements.' }
    ]
  },
  {
    id: 'peint-03',
    category: 'peinture',
    title: 'Appliquer un enduit de lissage',
    difficulty: 'advanced',
    duration: '1 jour',
    thumb: '🪣',
    thumbBg: '#fdf2f8',
    desc: 'Obtenez des murs parfaitement lisses grâce à l\'enduit de finition : gestes, matériaux et séchage.',
    tools: ['Spatule large (40 cm)', 'Taloche', 'Couteau à enduire 20 cm', 'Ponceuse à eau (grille)', 'Enduit de finition', 'Lumière rasante'],
    warning: 'L\'enduit de lissage ne comble pas les gros défauts. Les irrégularités de plus de 3 mm doivent être traitées avec un enduit de rebouchage épais avant le lissage.',
    tip: 'Préparez l\'enduit à consistance "mayonnaise légère". Trop épais : difficile à étaler. Trop fluide : il coule et sèche en relief.',
    steps: [
      { title: 'Préparer l\'enduit', detail: 'Versez l\'eau en premier, ajoutez la poudre en pluie, mélangez à la malaxeuse. Laissez reposer 5 min et re-mélangez.' },
      { title: '1re passe : garnissage', detail: 'Appliquez une couche généreuse à la spatule large, en croisant les passes. Objectif : combler les creux. Pas de finition à ce stade.' },
      { title: 'Séchage partiel', detail: 'Attendez que l\'enduit soit "tiré" (mat, plus brillant) mais pas complètement sec. Ce moment varie selon température et humidité : souvent 1 à 3 h.' },
      { title: '2e passe : finition', detail: 'Couche fine et régulière. Tenez la spatule à 30° du mur. Travaillez en bandes verticales, chacune en légère superposition.' },
      { title: 'Ponçage à l\'eau', detail: 'Après séchage complet (24 h), poncez avec la grille humide en mouvements circulaires. La lumière rasante révèle les défauts résiduels.' },
      { title: 'Apprêt et peinture', detail: 'Dépoussiérez soigneusement. Appliquez un apprêt avant la peinture finale pour éviter que l\'enduit n\'absorbe la peinture de façon inégale.' }
    ]
  },

  // ───── CARRELAGE ─────
  {
    id: 'carre-01',
    category: 'carrelage',
    title: 'Poser du carrelage au sol',
    difficulty: 'medium',
    duration: 'Journée',
    thumb: '🏠',
    thumbBg: '#d1fae5',
    desc: 'De la préparation du support à la pose des joints : toutes les étapes pour carréler une pièce.',
    tools: ['Carreaux', 'Colle à carrelage', 'Notched trowel (peigne)', 'Croisillons', 'Niveau', 'Scie à carrelage', 'Jointoiement'],
    warning: 'Le support doit être plan (tolérance 3 mm sous la règle de 2 m), propre, sec et stable. Un carreau posé sur un support creux se cassera rapidement.',
    tip: 'Calculez 10 % de carreaux supplémentaires pour les chutes et casses. Achetez toujours le même lot (numéro de teinte identique) pour éviter les variations de coloris.',
    steps: [
      { title: 'Tracer l\'axe de pose', detail: 'Mesurez la pièce et tracez les axes médiateurs. Posez des carreaux à sec pour visualiser les joints et ajuster la position de départ (évitez les petites chutes aux bords visibles).' },
      { title: 'Préparer la colle', detail: 'Gâchez la colle à la malaxeuse selon les proportions fabricant. Pour une pièce humide, utilisez une colle flexible (C2 S1).' },
      { title: 'Appliquer la colle', detail: 'Au peigne cranté, étalez la colle sur le sol ET au dos du carreau (double encollage). Cette technique évite les vides sous le carreau.' },
      { title: 'Poser les carreaux', detail: 'Posez en croix depuis le centre, insérez les croisillons. Frappez légèrement à la taloche en caoutchouc pour assurer le contact. Vérifiez le niveau constamment.' },
      { title: 'Couper les bords', detail: 'Mesurez chaque coupe individuellement. Utilisez une carrelette ou une scie à disque diamanté. Poncez les tranches à la pierre abrasive.' },
      { title: 'Jointoyer', detail: 'Après 24 h, retirez les croisillons. Appliquez le joint à la raclette caoutchouc en diagonale des joints. Essuyez les excédents à l\'éponge humide. Polissez à sec après 30 min.' }
    ]
  },
  {
    id: 'carre-02',
    category: 'carrelage',
    title: 'Carreler une douche à l\'italienne',
    difficulty: 'advanced',
    duration: '2 jours',
    thumb: '🚿',
    thumbBg: '#d1fae5',
    desc: 'Étanchéité, receveur, pentes et carrelage mural : le guide complet pour une douche sans fuite.',
    tools: ['Kit d\'étanchéité (bande + résine)', 'Carreaux antidérapants', 'Colle flexible C2 S2', 'Siphon de sol', 'Niveau laser', 'Niveau classique'],
    warning: 'L\'étanchéité est critique dans une douche. Appliquez impérativement une membrane d\'étanchéité (résine + bande aux angles) avant tout carrelage. Un manque d\'étanchéité entraîne des dégâts des eaux importants.',
    tip: 'Pour le receveur maçonné, la pente minimum vers le siphon est de 1 à 2 %. Vérifiez la pente dans les 4 directions avec votre niveau.',
    steps: [
      { title: 'Préparer le support', detail: 'Le sol et les murs doivent être en béton ou en béton cellulaire. Les plaques de plâtre standard sont interdites dans une douche (utilisez Aquapanel ou Wedi).' },
      { title: 'Installer le siphon', detail: 'Positionnez le siphon de sol à l\'emplacement prévu. Raccordez à l\'évacuation existante. Bloquez à la bonne hauteur (siphon affleurant le carrelage fini).' },
      { title: 'Créer la pente', detail: 'Réalisez une forme en béton maigre ou utilisez des plots de ragréage pour créer la pente vers le siphon. Vérifiez dans toutes les directions.' },
      { title: 'Étanchéité', detail: 'Appliquez la résine d\'étanchéité en deux couches au sol et aux murs (30 cm minimum). Noyez les bandes d\'étanchéité dans les angles sol/mur entre les deux couches. Temps de séchage : 6 h entre couches.' },
      { title: 'Carrelage mural', detail: 'Commencez par les murs avec une colle flexible. Posez de bas en haut avec des joints réguliers. Utilisez un profil de départ au sol pour maintenir l\'aplomb.' },
      { title: 'Carrelage sol et joints étanches', detail: 'Posez les carreaux antidérapants (R10 minimum) avec une colle flexible. Jointoyez avec un joint époxy dans toute la douche pour une étanchéité totale des joints.' }
    ]
  },

  // ───── ISOLATION ─────
  {
    id: 'isol-01',
    category: 'isolation',
    title: 'Isoler des combles perdus',
    difficulty: 'beginner',
    duration: '1 journée',
    thumb: '🏚️',
    thumbBg: '#e0e7ff',
    desc: 'L\'isolation des combles perdus est le meilleur rapport coût/efficacité : jusqu\'à 30 % d\'économies de chauffage.',
    tools: ['Laine soufflée ou rouleaux laine de verre', 'Combinaison', 'Masque FFP2', 'Lunettes', 'Gants', 'Planches de circulation'],
    warning: 'Portez impérativement un masque FFP2, des lunettes et une combinaison : les fibres minérales sont irritantes. Vérifiez la solidité des planchers avant de vous déplacer dans les combles.',
    tip: 'Les combles perdus doivent être ventilés. Ne bloquez pas les aérations de sous-face. Pour l\'épaisseur : 30 à 40 cm de laine de verre correspond à R ≥ 7 m².K/W (niveau recommandé).',
    steps: [
      { title: 'Repérer les points critiques', detail: 'Identifiez les trappes de visite, conduits de cheminée (garde-feu obligatoire), arrivées d\'air, câbles électriques.' },
      { title: 'Créer des allées de circulation', detail: 'Posez des planches de contreplaqué entre les chevrons pour circuler sans casser le plafond. Laissez-les en place après l\'isolation.' },
      { title: 'Première couche', detail: 'Déroulez les rouleaux entre les solives (perpendiculairement ou dans le sens des solives). La première couche remplit les espaces entre les solives.' },
      { title: 'Deuxième couche croisée', detail: 'Croisez la deuxième couche à 90° pour éliminer les ponts thermiques aux solives. L\'épaisseur totale visée : 35 cm minimum.' },
      { title: 'Isoler la trappe', detail: 'Collez un panneau de polystyrène ou de laine rigide sur la face supérieure de la trappe. Posez un joint mousse sur le cadre pour assurer l\'étanchéité à l\'air.' },
      { title: 'Protéger les conduits', detail: 'Maintenez un écart de sécurité autour des conduits de cheminée (brique réfractaire). Les gaines électriques doivent rester accessibles ou être en gaines ignifugées.' }
    ]
  },
  {
    id: 'isol-02',
    category: 'isolation',
    title: 'Poser une isolation thermique par l\'intérieur (ITI)',
    difficulty: 'medium',
    duration: '2 jours / pièce',
    thumb: '🧱',
    thumbBg: '#e0e7ff',
    desc: 'Isolation de mur extérieur côté intérieur avec doublage : rail métallique ou colle-vissage.',
    tools: ['Panneaux laine de roche ou polystyrène', 'Règle', 'Niveau', 'Visseuse', 'Rails métalliques', 'BA13', 'Enduit de finition'],
    warning: 'L\'ITI réduit la surface habitable et déplace le point de rosée dans le mur. Assurez une ventilation suffisante (VMC) pour éviter les problèmes de condensation et de moisissures.',
    tip: 'Traitez les ponts thermiques aux points d\'ancrage (sol, plafond, tableaux de fenêtre) avec un isolant en tableau. C\'est là que les fuites de chaleur sont les plus importantes.',
    steps: [
      { title: 'Préparer le mur support', detail: 'Le mur doit être sain, traité contre l\'humidité si nécessaire. Rebouchez les fissures. Assurez-vous qu\'il n\'y a pas d\'infiltrations actives.' },
      { title: 'Tracer les rails', detail: 'Tracez la position des rails au sol et au plafond au cordeau ou niveau laser. L\'épaisseur ajoutée doit être cohérente avec les fenêtres et prises existantes.' },
      { title: 'Fixer les rails', detail: 'Vissez les rails (ou les plots de colle) au sol et au plafond. Interposez une bande résiliente entre les rails et le sol/plafond pour la réduction acoustique.' },
      { title: 'Poser l\'isolant', detail: 'Glissez ou collez les panneaux isolants. Assurez une couverture continue sans vide ni pont thermique. Décalez les joints verticaux.' },
      { title: 'Plaquer le BA13', detail: 'Vissez le BA13 sur les montants. Bandes et enduit aux joints. Pour une pièce humide : BA13 hydrofuge (vert).' },
      { title: 'Finition et adaptation', detail: 'Rallongez les boîtes de prises électriques. Adaptez les tableaux de fenêtre. Finissez à l\'enduit ou à la peinture.' }
    ]
  },

  // ───── MENUISERIE ─────
  {
    id: 'menu-01',
    category: 'menuiserie',
    title: 'Poser une porte intérieure',
    difficulty: 'medium',
    duration: '3 h',
    thumb: '🚪',
    thumbBg: '#ffedd5',
    desc: 'Installation complète d\'une porte préfabriquée : pose du bâti, réglage et fixation des pentures.',
    tools: ['Niveau à bulle', 'Cales d\'épaisseur', 'Visseuse', 'Scie à bois', 'Mètre', 'Rabot (si nécessaire)', 'Mousse polyuréthane'],
    warning: 'Mesurez avec précision la hauteur sous plafond et la largeur du passage AVANT d\'acheter. Les dimensions standards (83 cm ou 93 cm) ne conviennent pas toujours aux bâtis anciens.',
    tip: 'Montez toujours le bâti avant de coller/visser définitivement. Un bâti bien d\'aplomb permet à la porte de se fermer seule par gravité (signe d\'une pose parfaite).',
    steps: [
      { title: 'Préparer l\'ouverture', detail: 'Vérifiez que l\'ouverture est d\'aplomb et de niveau. Dégagez l\'excédent de plâtre ou de mortier autour du dormant existant.' },
      { title: 'Assembler le bâti', detail: 'Assemblez les trois éléments du bâti (2 montants + traverse haute) selon les instructions. Fixez temporairement le vantail sur le bâti.' },
      { title: 'Mettre en place', detail: 'Introduisez le bâti assemblé dans l\'ouverture. Commencez par caler la traverse haute à niveau.' },
      { title: 'Régler l\'aplomb et la verticalité', detail: 'Calez les montants avec des cales plastiques. Vérifiez l\'aplomb côté pentures ET côté serrure. La porte doit être libre de se déplacer dans le bâti.' },
      { title: 'Fixer définitivement', detail: 'Percez et chevillez les montants dans les murs. Serrez progressivement en vérifiant à chaque vis que le bâti reste d\'aplomb.' },
      { title: 'Finir et contrôler', detail: 'Comblez les jours entre bâti et mur à la mousse polyuréthane (ne surchargez pas, elle gonfle). Posez les chambranles. Testez la fermeture et les pentures.' }
    ]
  },
  {
    id: 'menu-02',
    category: 'menuiserie',
    title: 'Installer un parquet flottant',
    difficulty: 'beginner',
    duration: '1 journée',
    thumb: '🪵',
    thumbBg: '#ffedd5',
    desc: 'Pose d\'un parquet flottant stratifié ou contrecollé, de la sous-couche à la finition des plinthes.',
    tools: ['Parquet flottant', 'Sous-couche acoustique', 'Scie sauteuse ou à onglets', 'Cales d\'espacement 8 mm', 'Marteau + cale de frappe', 'Équerre', 'Mètre'],
    warning: 'Le parquet flottant a besoin d\'un jeu de dilatation de 8 à 10 mm sur tout le pourtour. Ce jeu sera caché par les plinthes ou quarts de rond. Ne vissez et ne collez jamais un parquet flottant.',
    tip: 'Acclimatez le parquet dans la pièce 48 h avant la pose (emballages ouverts posés à plat). Cela réduit considérablement les risques de gonflement après installation.',
    steps: [
      { title: 'Préparer le sol', detail: 'Le sol doit être propre, sec et plan (tolérance 3 mm sous 2 m). Ragréagez les irrégularités. Humidité résiduelle < 2,5 % pour le béton.' },
      { title: 'Poser la sous-couche', detail: 'Déroulez la sous-couche acoustique, joints collés au ruban adhésif. Ne la faites pas remonter sur les murs (elle serait visible).' },
      { title: 'Tracer la première rangée', detail: 'Vérifiez que le premier mur est droit. Posez les cales de 8 mm contre le mur. La première rangée doit être parallèle à la source de lumière principale.' },
      { title: 'Emboîter les lames', detail: 'Cliquez les lames sur le côté long, puis faites basculer pour enclencher les joints courts. Utilisez la cale de frappe pour les serrages. Décalez les joints (> 30 cm).' },
      { title: 'Coupes de bord et obstacles', detail: 'Mesurez chaque coupe. Découpez à la scie sauteuse (lame fine bois, trait vers le bas pour éviter l\'arrachement). Utilisez le gabarit fourni pour les tuyaux.' },
      { title: 'Poser les plinthes', detail: 'Retirez les cales. Collez ou clipsez les plinthes contre le mur (pas sur le parquet). Le jeu de dilatation reste libre.' }
    ]
  }
];

// ===== CATEGORIES DEFINITION =====
const CATEGORIES = [
  { id: 'electricite', name: 'Électricité',   icon: '⚡', bg: '#fef9e7', cssClass: 'cat-electric', desc: 'Prises, interrupteurs, luminaires, tableau électrique...' },
  { id: 'plomberie',   name: 'Plomberie',     icon: '🚿', bg: '#eff6ff', cssClass: 'cat-plumbing', desc: 'Robinets, siphons, WC, tuyauterie...' },
  { id: 'peinture',    name: 'Peinture',      icon: '🖌️', bg: '#fdf2f8', cssClass: 'cat-paint',   desc: 'Préparation, enduit, peinture murale et plafond...' },
  { id: 'carrelage',   name: 'Carrelage',     icon: '🏠', bg: '#d1fae5', cssClass: 'cat-tile',    desc: 'Sol, mural, salle de bain, douche...' },
  { id: 'isolation',   name: 'Isolation',     icon: '🧱', bg: '#e0e7ff', cssClass: 'cat-insul',   desc: 'Combles, murs, fenêtres, économies d\'énergie...' },
  { id: 'menuiserie',  name: 'Menuiserie',    icon: '🚪', bg: '#ffedd5', cssClass: 'cat-wood',    desc: 'Portes, parquet, fenêtres, placards...' }
];

const DIFFICULTY_LABELS = {
  beginner: 'Débutant',
  medium:   'Intermédiaire',
  advanced: 'Avancé'
};
