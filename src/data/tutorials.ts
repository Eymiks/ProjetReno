import { Tutorial } from '@/types'

export const tutorials: Tutorial[] = [
  {
    id: '1',
    slug: 'changer-joint-robinet',
    title: 'Changer un joint de robinet',
    category: 'Plomberie',
    categorySlug: 'plomberie',
    difficulty: 'Débutant',
    duration: '30 min',
    description: 'Votre robinet goutte sans arrêt ? Un simple joint usé en est souvent la cause. Apprenez à le remplacer vous-même en 30 minutes.',
    introduction: 'Un robinet qui fuit est non seulement agaçant, mais il peut aussi faire grimper votre facture d\'eau. Dans la plupart des cas, la cause est un joint usé ou détérioré. Ce tutoriel vous guide pas à pas pour remplacer ce joint sans faire appel à un plombier.',
    materials: ['Joint neuf adapté à votre robinet (vérifiez la taille avant)', 'Graisse silicone (optionnel)'],
    tools: ['Clé à molette ou clé plate', 'Tournevis plat et cruciforme', 'Chiffon ou serviette', 'Seau ou bassine'],
    safetyWarnings: [
      'TOUJOURS couper l\'arrivée d\'eau avant de commencer. Le robinet d\'arrêt se trouve généralement sous l\'évier ou dans le tableau de bord.',
      'Ouvrez le robinet après avoir coupé l\'eau pour vider la pression résiduelle.',
      'Ne forcez jamais sur les raccords : si vous sentez une résistance anormale, arrêtez et consultez un professionnel.',
    ],
    steps: [
      { number: 1, title: 'Couper l\'eau', content: 'Localisez le robinet d\'arrêt sous l\'évier et tournez-le dans le sens des aiguilles d\'une montre pour couper l\'arrivée d\'eau. Ouvrez ensuite votre robinet pour vider l\'eau restante dans les tuyaux.', tip: 'Placez un chiffon sous le robinet pour récupérer les dernières gouttes.' },
      { number: 2, title: 'Démonter la tête de robinet', content: 'Retirez le cache décoratif (souvent clipsé ou vissé) pour accéder à la vis centrale. Dévissez cette vis puis tirez délicatement la poignée vers le haut.' },
      { number: 3, title: 'Accéder au joint', content: 'Avec une clé à molette, dévissez le chapeau de presse-étoupe (la pièce hexagonale en haut du corps du robinet). Sortez la tige de soupape pour accéder au joint en caoutchouc situé à son extrémité.' },
      { number: 4, title: 'Remplacer le joint', content: 'Retirez l\'ancien joint (il peut être tenu par une vis ou simplement emboîté). Comparez-le avec le nouveau joint pour vérifier qu\'il est de même taille. Mettez en place le nouveau joint.', tip: 'Appliquez un peu de graisse silicone sur le nouveau joint pour faciliter le montage et prolonger sa durée de vie.' },
      { number: 5, title: 'Remonter et tester', content: 'Remontez tous les éléments dans l\'ordre inverse du démontage. Rouvrez le robinet d\'arrêt progressivement, puis vérifiez qu\'il n\'y a plus de fuite. Testez le robinet plusieurs fois.' },
    ],
    tips: [
      'Photographiez les étapes du démontage pour faciliter le remontage.',
      'Emportez l\'ancien joint chez le quincaillier pour trouver le bon remplacement.',
      'Si le robinet est ancien, profitez-en pour vérifier l\'état général des joints annexes.',
    ],
    commonMistakes: [
      'Oublier de couper l\'eau avant de démonter le robinet.',
      'Forcer sur une pièce bloquée par le calcaire — préférez un produit détartrant.',
      'Monter le mauvais type ou la mauvaise taille de joint.',
    ],
    whenToCallPro: [
      'Si le corps du robinet est fissuré ou corrodé.',
      'Si la fuite provient d\'un raccord fileté dans le mur.',
      'Si vous constatez une baisse de pression anormale dans toute l\'installation.',
    ],
    conclusion: 'Changer un joint de robinet est l\'une des réparations les plus accessibles aux débutants. Avec les bons outils et en suivant ces étapes, vous pouvez résoudre le problème en moins d\'une heure et économiser l\'intervention d\'un plombier.',
    popular: true,
  },
  {
    id: '2',
    slug: 'reboucher-trou-mur',
    title: 'Reboucher un trou dans un mur',
    category: 'Murs & Plafonds',
    categorySlug: 'murs-plafonds',
    difficulty: 'Débutant',
    duration: '1h (+ séchage)',
    description: 'Trou de cheville, impact ou dommage accidentel ? Apprenez à reboucher un trou dans un mur en plâtre ou béton pour un résultat impeccable.',
    introduction: 'Que ce soit après avoir retiré une étagère ou suite à un accident, les trous dans les murs sont inévitables. Reboucher un trou correctement évite l\'humidité et prépare une surface parfaite pour peindre. Ce tutoriel couvre les petits trous jusqu\'à 5 cm de diamètre.',
    materials: ['Enduit de rebouchage (tube ou pot)', 'Papier de verre grain 120 et 220'],
    tools: ['Couteau à enduire (spatule)', 'Ponceau ou cale à poncer', 'Chiffon humide', 'Pinceau (pour l\'impression)'],
    safetyWarnings: [
      'Portez un masque anti-poussières lors du ponçage.',
      'Attention aux câbles électriques cachés dans les murs avant de creuser ou d\'élargir le trou. Utilisez un détecteur de câbles si nécessaire.',
    ],
    steps: [
      { number: 1, title: 'Préparer le trou', content: 'Nettoyez les bords du trou en retirant les débris, les morceaux de plâtre décollés et la poussière. Pour un trou de cheville, retirez complètement la cheville avec une pince ou un tournevis.' },
      { number: 2, title: 'Humecter la surface', content: 'Passez un chiffon humide autour du trou. Cela empêche le mur d\'absorber trop rapidement l\'humidité de l\'enduit, ce qui provoquerait des fissures.', tip: 'Pour les murs très poreux, vous pouvez appliquer une couche d\'impression diluée.' },
      { number: 3, title: 'Appliquer l\'enduit', content: 'Avec la spatule, appliquez l\'enduit en appuyant fermement pour bien remplir le trou. Lissez en passant la spatule en croix, en légère pression. Laissez légèrement bomber pour compenser le retrait au séchage.' },
      { number: 4, title: 'Laisser sécher', content: 'Respectez le temps de séchage indiqué sur le produit (en général 2 à 4 heures). L\'enduit change de couleur (du gris foncé au gris clair) quand il est sec.' },
      { number: 5, title: 'Poncer et finir', content: 'Poncez avec le grain 120 pour enlever le surplus, puis finissez avec le grain 220 pour une surface lisse. Si un retrait est visible, appliquez une deuxième couche fine et recommencez.', tip: 'Passez votre main à plat sur la surface pour sentir les irrégularités — votre main est plus précise que vos yeux.' },
    ],
    tips: [
      'Plusieurs fines couches valent mieux qu\'une épaisse qui fissure.',
      'Attendez toujours que l\'enduit soit totalement sec avant de peindre.',
      'Pour les grands trous, utilisez un filet de renfort à intégrer dans l\'enduit.',
    ],
    commonMistakes: [
      'Appliquer une couche trop épaisse en une seule fois.',
      'Ne pas laisser sécher suffisamment entre deux couches.',
      'Peindre sur un enduit encore humide.',
    ],
    whenToCallPro: [
      'Si le trou est supérieur à 10-15 cm de diamètre.',
      'Si vous constatez des fissures structurelles (qui traversent le mur de part en part).',
      'Si la cause est liée à un problème d\'humidité ou de fondation.',
    ],
    conclusion: 'Reboucher un trou est un geste simple qui peut transformer l\'aspect d\'une pièce. Avec de la patience pour respecter les temps de séchage, le résultat sera invisible.',
    popular: true,
  },
  {
    id: '3',
    slug: 'poser-etagere-murale',
    title: 'Poser une étagère murale',
    category: 'Menuiserie',
    categorySlug: 'menuiserie',
    difficulty: 'Débutant',
    duration: '45 min',
    description: 'Fixez une étagère murale solide et bien droite, même si vous débutez. Guide complet pour percer, cheviller et visser en toute confiance.',
    introduction: 'Poser une étagère est l\'un des premiers travaux qu\'on réalise chez soi. Bien faite, une étagère peut supporter des charges conséquentes en toute sécurité. Ce tutoriel vous guide de la prise de mesures jusqu\'à la pose finale.',
    materials: ['Étagère avec supports muraux', 'Chevilles adaptées au type de mur (béton, placo, brique)', 'Vis fournies ou achetées séparément'],
    tools: ['Perceuse-visseuse', 'Foret adapté au mur', 'Niveau à bulle', 'Crayon', 'Mètre ruban', 'Détecteur de câbles et canalisations'],
    safetyWarnings: [
      'OBLIGATOIRE : utilisez un détecteur de câbles et canalisations avant de percer. Percer un câble électrique est dangereux et percer un tuyau peut causer des dégâts des eaux importants.',
      'Portez des lunettes de protection lors du perçage.',
      'Vérifiez que la charge prévue est compatible avec le type de fixation et le mur.',
    ],
    steps: [
      { number: 1, title: 'Repérer l\'emplacement et détecter les réseaux', content: 'Passez le détecteur de câbles sur toute la zone où vous allez percer. Marquez les zones à éviter. Choisissez votre emplacement en tenant compte de ces contraintes.' },
      { number: 2, title: 'Marquer les trous', content: 'Positionnez les supports de l\'étagère contre le mur. Avec un niveau à bulle, assurez-vous qu\'ils sont parfaitement alignés horizontalement. Marquez les points de perçage au crayon.', tip: 'Vérifiez deux fois le niveau avant de percer — il est plus facile de déplacer un trait de crayon qu\'un trou.' },
      { number: 3, title: 'Percer les trous', content: 'Choisissez le bon foret selon votre mur (béton, brique, placo). Percez à la profondeur de la cheville. Soufflez pour enlever la poussière du trou.' },
      { number: 4, title: 'Poser les chevilles', content: 'Enfoncez les chevilles dans les trous en les tapant légèrement avec un marteau. Elles doivent être affleurantes ou légèrement rentrées dans le mur.' },
      { number: 5, title: 'Fixer et vérifier', content: 'Vissez les supports en commençant par un seul côté. Posez le niveau, ajustez si besoin, puis serrez toutes les vis. Posez l\'étagère et vérifiez la solidité en exerçant une légère pression vers le bas.', tip: 'Ne serrez pas à fond dès le début — attendez d\'avoir toutes les vis en place pour faire les ajustements.' },
    ],
    tips: [
      'Pour les murs en placo sans ossature derrière, utilisez des chevilles à expansion spécifiques "placo".',
      'Une étagère de 80 cm ou plus nécessite 3 supports pour éviter le fléchissement.',
      'Laissez 2-3 mm de jeu entre le mur et le support pour les éventuels irrégularités.',
    ],
    commonMistakes: [
      'Ne pas vérifier le niveau après fixation du premier support.',
      'Utiliser des chevilles inadaptées au type de mur.',
      'Négliger la détection des câbles avant de percer.',
    ],
    whenToCallPro: [
      'Si vous devez fixer des charges lourdes (bibliothèque complète, plan de travail) dans du placo sans trouver les montants.',
      'Si vous n\'êtes pas sûr du type de mur ou de la solidité de la fixation.',
    ],
    conclusion: 'Avec un détecteur de câbles, un niveau et les bonnes chevilles, poser une étagère est à la portée de tous. Prenez le temps de bien mesurer et vous obtiendrez un résultat solide et esthétique.',
    popular: true,
  },
  {
    id: '4',
    slug: 'peindre-mur-proprement',
    title: 'Peindre un mur proprement',
    category: 'Peinture',
    categorySlug: 'peinture',
    difficulty: 'Débutant',
    duration: '1 journée',
    description: 'Obtenez un résultat digne d\'un professionnel en suivant les bonnes étapes de préparation, d\'application et de finition.',
    introduction: 'Peindre un mur semble simple, mais c\'est la préparation qui fait la différence entre un résultat amateur et un résultat professionnel. Ce guide vous explique chaque étape pour un mur lisse, uniforme et durable.',
    materials: ['Peinture (calculez : surface en m² × 2 couches ÷ rendement du pot)', 'Sous-couche si nécessaire (mur neuf, changement de couleur radical)', 'Ruban de masquage', 'Bâche de protection'],
    tools: ['Rouleau à peinture (manchon adapté à votre peinture)', 'Pinceau pour les angles', 'Bac à peinture', 'Perche télescopique'],
    safetyWarnings: [
      'Aérez bien la pièce pendant et après la peinture — les solvants sont nocifs.',
      'Portez des vêtements de travail et des gants. Certaines peintures sont irritantes.',
      'Protégez bien le sol et les meubles : la peinture est difficile à enlever une fois sèche.',
    ],
    steps: [
      { number: 1, title: 'Préparer la surface', content: 'Nettoyez le mur (dégraissez si nécessaire), rebouchez les trous et fissures, poncez les aspérités. Un mur propre et lisse est indispensable pour un bon résultat.' },
      { number: 2, title: 'Protéger et masquer', content: 'Posez des bâches sur le sol et les meubles. Collez le ruban de masquage sur les plinthes, cadres de porte, interrupteurs et tout ce que vous ne voulez pas peindre.', tip: 'Appuyez bien le ruban avec un ongle ou une spatule pour éviter les coulures sous le bord.' },
      { number: 3, title: 'Appliquer la sous-couche', content: 'Si le mur est neuf, très poreux ou si vous changez radicalement de couleur, appliquez une sous-couche. Laissez sécher complètement avant de continuer.' },
      { number: 4, title: 'Peindre les angles au pinceau', content: 'Commencez par les angles, bords et zones inaccessibles au rouleau. Le pinceau vous permet de travailler proprement près des plinthes, du plafond et des encadrements.' },
      { number: 5, title: 'Peindre au rouleau', content: 'Chargez le rouleau sans excès. Appliquez en "W" ou "M" sur environ 1 m², puis lissez avec des passes verticales régulières. Gardez un bord humide pour éviter les raccords visibles.', tip: 'Travaillez toujours dans la même direction pour la passe de finition.' },
      { number: 6, title: 'Deuxième couche', content: 'Attendez le temps de séchage recommandé (en général 4h). Appliquez une deuxième couche en croisant légèrement la direction du rouleau par rapport à la première. Retirez le ruban de masquage avant que la peinture soit totalement sèche.' },
    ],
    tips: [
      'Commencez toujours par les angles au pinceau avant le rouleau.',
      'N\'hésitez pas à diluer légèrement la première couche pour favoriser la pénétration.',
      'Travaillez lumière rasante pour repérer les défauts.',
    ],
    commonMistakes: [
      'Négliger la préparation du mur — les défauts se voient encore plus après la peinture.',
      'Charger trop le rouleau, ce qui provoque des coulures.',
      'Peindre une deuxième couche sur une peinture encore humide.',
    ],
    whenToCallPro: [
      'Si le mur présente des moisissures ou des traces d\'humidité importantes — traitez le problème à la source d\'abord.',
      'Pour des peintures techniques spéciales (anti-humidité, anti-feu, etc.).',
    ],
    conclusion: 'La peinture est un travail de patience. Avec une bonne préparation et deux couches bien appliquées, vous obtiendrez un mur impeccable qui transformera votre pièce.',
    popular: true,
  },
  {
    id: '5',
    slug: 'installer-tringle-rideaux',
    title: 'Installer une tringle à rideaux',
    category: 'Menuiserie',
    categorySlug: 'menuiserie',
    difficulty: 'Débutant',
    duration: '30 min',
    description: 'Fixez une tringle à rideaux droite et solide, au-dessus d\'une fenêtre, avec ou sans chevilles selon le type de mur.',
    introduction: 'Installer une tringle à rideaux est un petit travail qui change beaucoup l\'ambiance d\'une pièce. Ce tutoriel vous guide pour une pose droite et solide, quel que soit votre niveau.',
    materials: ['Tringle avec supports et fixations (généralement fournies)', 'Chevilles si nécessaire'],
    tools: ['Perceuse', 'Niveau à bulle', 'Crayon', 'Mètre ruban', 'Tournevis', 'Détecteur de câbles'],
    safetyWarnings: [
      'Toujours détecter les câbles avant de percer au-dessus d\'une fenêtre — des câbles d\'interrupteur ou de volets passent souvent dans cette zone.',
      'Portez des lunettes lors du perçage.',
    ],
    steps: [
      { number: 1, title: 'Mesurer et positionner', content: 'La tringle doit dépasser la fenêtre de 15 à 20 cm de chaque côté pour permettre aux rideaux de s\'ouvrir complètement. En hauteur, placez-la 10 à 15 cm au-dessus de l\'encadrement de fenêtre.' },
      { number: 2, title: 'Détecter les câbles', content: 'Passez le détecteur sur la zone au-dessus de la fenêtre. Évitez de percer dans les zones signalées.' },
      { number: 3, title: 'Marquer les supports', content: 'Positionnez le premier support, marquez les trous. Utilisez le niveau pour positionner le second support à la même hauteur, puis marquez.' },
      { number: 4, title: 'Percer et cheviller', content: 'Percez les trous, insérez les chevilles adaptées au mur. Si vous êtes dans du placo et que vous trouvez un montant métallique, vissez directement dedans sans cheville.' },
      { number: 5, title: 'Fixer et monter la tringle', content: 'Fixez les supports, insérez la tringle avec vos rideaux déjà enfilés, puis bloquez les embouts. Tirez légèrement la tringle pour vérifier la solidité.' },
    ],
    tips: [
      'Enfilez les rideaux sur la tringle avant de la fixer — c\'est beaucoup plus simple.',
      'Pour une fenêtre de plus d\'1,5 m, prévoyez un support central.',
    ],
    commonMistakes: [
      'Placer la tringle trop basse, ce qui donne une impression d\'espace réduit.',
      'Ne pas vérifier le niveau entre les deux supports.',
    ],
    whenToCallPro: [
      'Pas nécessaire pour ce type de travail, sauf configuration très particulière.',
    ],
    conclusion: 'Une tringle bien posée transforme visuellement une fenêtre. L\'essentiel est de bien mesurer et de vérifier le niveau avant de percer.',
    popular: false,
  },
  {
    id: '6',
    slug: 'remplacer-prise-electrique',
    title: 'Remplacer une prise électrique',
    category: 'Électricité',
    categorySlug: 'electricite',
    difficulty: 'Intermédiaire',
    duration: '45 min',
    description: 'Une prise cassée ou mal fixée ? Apprenez à la remplacer en toute sécurité, en respectant les normes électriques en vigueur.',
    introduction: 'Remplacer une prise électrique défectueuse est une réparation courante. Réalisée en suivant les règles de sécurité — et notamment en coupant le courant — elle reste accessible. Ce tutoriel concerne le remplacement d\'une prise sur une installation existante et en bon état.',
    materials: ['Prise de remplacement (même norme, avec terre si l\'ancienne en avait une)', 'Dominos de connexion (si nécessaire)'],
    tools: ['Tournevis plat et cruciforme', 'Pince à dénuder', 'Testeur de tension ou vérificateur sans contact', 'Disjoncteur identifié'],
    safetyWarnings: [
      '⚠️ COUPEZ LE COURANT AU TABLEAU ÉLECTRIQUE avant toute intervention. Ce n\'est pas optionnel.',
      'Vérifiez l\'absence de tension avec un testeur AVANT de toucher les fils — ne faites jamais confiance au seul disjoncteur.',
      'Ne travaillez jamais seul sur une installation électrique — ayez quelqu\'un à portée de voix.',
      'En France, les travaux électriques doivent respecter la norme NF C 15-100. Certains travaux nécessitent une déclaration ou un contrôle Consuel.',
      'Si vous avez le moindre doute sur l\'état de l\'installation, faites appel à un électricien.',
    ],
    steps: [
      { number: 1, title: 'Couper le courant et vérifier', content: 'Allez au tableau électrique et coupez le disjoncteur correspondant au circuit de la prise. Utilisez ensuite un testeur de tension pour confirmer l\'absence de courant dans la prise. Ne continuez qu\'une fois cette vérification faite.' },
      { number: 2, title: 'Démonter l\'ancienne prise', content: 'Retirez le cache de la prise (clipsé ou vissé). Dévissez la vis centrale qui maintient le mécanisme dans le boîtier. Tirez doucement le mécanisme vers vous.' },
      { number: 3, title: 'Identifier et noter les fils', content: 'Photographiez le câblage avant de toucher quoi que ce soit. En général : fil marron ou rouge = phase, fil bleu = neutre, fil jaune/vert = terre. Notez où chaque fil est connecté.' },
      { number: 4, title: 'Déconnecter et reconnecter', content: 'Dévissez les bornes pour libérer les fils. Connectez les fils sur la nouvelle prise dans le même ordre. Assurez-vous que le fil de terre (jaune/vert) est bien connecté si la prise en a une.', tip: 'Vérifiez que chaque fil est bien serré dans sa borne — un fil mal serré peut provoquer une surchauffe.' },
      { number: 5, title: 'Remontage et test', content: 'Repliez délicatement les fils dans le boîtier, fixez le mécanisme, remettez le cache. Rétablissez le courant au tableau et testez la prise avec un appareil ou un testeur.' },
    ],
    tips: [
      'Toujours photographier le câblage avant de déconnecter quoi que ce soit.',
      'Si les fils sont courts ou fragilisés, ne les coupez pas davantage — appelez un électricien.',
      'Une prise avec terre (3 trous) doit être remplacée par une prise avec terre.',
    ],
    commonMistakes: [
      'Travailler sans avoir vérifié l\'absence de tension avec un testeur.',
      'Intervertir le neutre et la phase.',
      'Mal serrer les connexions, provoquant des risques de surchauffe.',
    ],
    whenToCallPro: [
      'Si les fils sont trop courts, abîmés ou si vous voyez des traces de brûlure.',
      'Si vous souhaitez ajouter une prise là où il n\'y en a pas (nécessite de tirer un câble).',
      'Si votre installation n\'a pas de terre — cela indique une installation ancienne à remettre aux normes.',
      'En cas de doute quelconque : l\'électricité ne tolère pas les erreurs.',
    ],
    conclusion: 'Remplacer une prise est faisable pour un bricoleur organisé, à condition de respecter scrupuleusement les règles de sécurité électrique. Coupez toujours le courant, vérifiez avec un testeur, et n\'hésitez pas à faire appel à un professionnel pour tout ce qui dépasse ce cadre.',
    popular: true,
  },
  {
    id: '7',
    slug: 'purger-radiateur',
    title: 'Purger un radiateur',
    category: 'Plomberie',
    categorySlug: 'plomberie',
    difficulty: 'Débutant',
    duration: '15 min',
    description: 'Votre radiateur chauffe mal ou fait du bruit ? Il a probablement besoin d\'être purgé. Une opération simple qui prend moins de 15 minutes.',
    introduction: 'Quand de l\'air s\'accumule dans un radiateur, il chauffe moins bien et peut faire des bruits de claquement. La purge consiste à évacuer cet air. C\'est l\'un des gestes d\'entretien les plus simples de l\'habitat.',
    materials: ['Chiffon ou petite serviette', 'Récipient (verre ou bol)'],
    tools: ['Clé de purge (fournie avec le radiateur ou vendue en quincaillerie pour quelques centimes)', 'Tournevis plat (selon le modèle)'],
    safetyWarnings: [
      'Attendez que le radiateur soit froid avant de purger — l\'eau chaude sous pression peut causer des brûlures.',
      'Ne dévissez pas complètement la vis de purge — quelques tours suffisent.',
      'Après la purge, vérifiez la pression du circuit de chauffage au manomètre (généralement situé sur la chaudière). Elle doit être entre 1 et 1,5 bar.',
    ],
    steps: [
      { number: 1, title: 'Éteindre le chauffage et attendre', content: 'Coupez le chauffage et laissez les radiateurs refroidir complètement. La purge se fait toujours sur un radiateur froid.' },
      { number: 2, title: 'Préparer', content: 'Placez un chiffon et un récipient sous la vis de purge, généralement située en haut d\'un côté du radiateur.' },
      { number: 3, title: 'Ouvrir la vis de purge', content: 'Insérez la clé de purge et tournez d\'un quart de tour dans le sens anti-horaire. Vous entendrez un sifflement : c\'est l\'air qui s\'échappe. Attendez que ce sifflement cesse et qu\'un filet d\'eau apparaisse.', tip: 'Dès que l\'eau coule de façon continue, refermez immédiatement.' },
      { number: 4, title: 'Refermer et vérifier la pression', content: 'Resserrez la vis de purge (ne forcez pas). Essuyez les traces d\'eau. Allez vérifier la pression au manomètre de la chaudière. Si elle est en dessous de 1 bar, ajoutez de l\'eau via le robinet de remplissage.' },
    ],
    tips: [
      'Purgez tous vos radiateurs en début de saison de chauffe.',
      'Commencez par les radiateurs du bas, puis montez vers les étages.',
      'Si un radiateur nécessite des purges fréquentes, il peut y avoir une fuite dans le circuit.',
    ],
    commonMistakes: [
      'Purger un radiateur encore chaud.',
      'Dévisser complètement la vis de purge — l\'eau jaillit alors sous pression.',
      'Oublier de vérifier la pression après la purge.',
    ],
    whenToCallPro: [
      'Si la pression chute régulièrement — il y a probablement une fuite dans l\'installation.',
      'Si plusieurs purges ne règlent pas le problème de chauffage.',
      'Si vous constatez des traces de rouille ou de fuite autour du radiateur.',
    ],
    conclusion: 'Purger ses radiateurs est un geste d\'entretien simple qui peut considérablement améliorer l\'efficacité de votre chauffage et réduire votre facture énergétique.',
    popular: false,
  },
  {
    id: '8',
    slug: 'poser-sol-vinyle-clipsable',
    title: 'Poser un sol vinyle clipsable',
    category: 'Sols',
    categorySlug: 'sols',
    difficulty: 'Intermédiaire',
    duration: '1 journée',
    description: 'Le sol vinyle clipsable est l\'un des revêtements les plus faciles à poser soi-même. Suivez ce guide pour un résultat propre et durable.',
    introduction: 'Le sol vinyle clipsable (LVT ou SPC) est résistant, imperméable, facile à entretenir et abordable. Sa pose flottante sans colle en fait un revêtement idéal pour les bricoleurs débutants. Ce tutoriel vous guide pour une pièce rectangulaire standard.',
    materials: ['Lames vinyle clipsables (prévoir 10% de marge pour les chutes)', 'Film de sous-couche acoustique (si non intégrée aux lames)', 'Cales d\'espacement (5-8 mm)'],
    tools: ['Cutter ou scie sauteuse', 'Règle et équerre', 'Maillet en caoutchouc', 'Pied de biche ou tire-lame', 'Mètre ruban', 'Crayon'],
    safetyWarnings: [
      'Portez des genouillères lors du travail au sol.',
      'Utilisez des lunettes de protection lors de la découpe.',
      'Assurez-vous que le subjectile (sol existant) est propre, sec et plan — un écart de plus de 3 mm sur 2 m doit être ragréé.',
    ],
    steps: [
      { number: 1, title: 'Préparer le support', content: 'Le sol existant doit être propre, sec, plan et solide. Retirez les plinthes. Vérifiez la planéité avec un niveau. Comblez les irrégularités avec du ragréage si nécessaire.' },
      { number: 2, title: 'Acclimatation des lames', content: 'Laissez les lames dans leur emballage dans la pièce pendant 48h avant la pose. Elles doivent s\'adapter à la température et au taux d\'humidité ambiant.', tip: 'Ne posez jamais dans une pièce en dessous de 15°C ou au-dessus de 30°C.' },
      { number: 3, title: 'Planifier la pose', content: 'Calculez le sens de pose (généralement dans le sens de la lumière). Mesurez la largeur de la pièce pour éviter d\'avoir une première et dernière rangée trop étroites (moins de 5 cm). Au besoin, coupez la première rangée.' },
      { number: 4, title: 'Poser la première rangée', content: 'Placez les cales (5-8 mm) contre le mur pour le joint de dilatation. Posez la première lame, côté rainure vers le mur. Clipper les lames suivantes bout à bout. Coupez la dernière au bon format.' },
      { number: 5, title: 'Poser les rangées suivantes', content: 'Emboîtez chaque nouvelle rangée en l\'inclinant à environ 30°, puis en l\'abaissant pour l\'encliqueter. Décalez les joints d\'au moins 30 cm entre les rangées. Utilisez un maillet pour bien clipser les extrémités.', tip: 'Commencez chaque rangée avec la chute de la rangée précédente pour réduire les déchets.' },
      { number: 6, title: 'Finitions', content: 'Retirez toutes les cales. Reposez ou posez de nouvelles plinthes pour couvrir le joint de dilatation. Ne vissez pas les plinthes dans le sol vinyle — fixez-les dans le mur uniquement.' },
    ],
    tips: [
      'Le joint de dilatation (5-8 mm) est indispensable sur tous les bords — ne le supprimez pas.',
      'Pour les découpes autour des obstacles (tuyaux, embrasures), faites un gabarit en carton.',
      'Sur une grande surface, posez depuis le centre vers les bords pour un résultat équilibré.',
    ],
    commonMistakes: [
      'Oublier les cales de dilatation, ce qui fait gondoler le sol par la suite.',
      'Ne pas vérifier la planéité du support avant la pose.',
      'Ne pas laisser les lames s\'acclimater suffisamment.',
    ],
    whenToCallPro: [
      'Si le sol existant est très dégradé ou présente des traces d\'humidité.',
      'Pour les pièces d\'eau (pose avec joints waterproof spécifiques).',
      'Si la surface dépasse 50 m² et présente de nombreux obstacles.',
    ],
    conclusion: 'Le sol vinyle clipsable est l\'un des travaux les plus gratifiants pour un débutant : rapide, propre et le résultat est immédiatement visible. Avec de la patience pour les découpes, vous obtiendrez un sol impeccable.',
    popular: true,
  },
]

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find(t => t.slug === slug)
}

export function getTutorialsByCategory(categorySlug: string): Tutorial[] {
  return tutorials.filter(t => t.categorySlug === categorySlug)
}

export function getPopularTutorials(): Tutorial[] {
  return tutorials.filter(t => t.popular)
}

export function searchTutorials(query: string): Tutorial[] {
  const q = query.toLowerCase()
  return tutorials.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q)
  )
}
