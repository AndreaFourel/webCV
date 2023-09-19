const projects = [
  {
    id: 1,
    title: 'Djenkafo Art',
    description: 'Création et réalisation d\'un site vitrine pour une association cuturelle de ma région. C\'est ma toute première réalisation, mon premier site en ligne. J\'ai utilisé HTML, CSS, Bootstrap et un peu de JavaScript pour améliorer l\'expérience des utilisateurs. J\'ai utilisé Figma pour le design qui est différent selon le format des écrans. J\'ai acompagné l\'association pour l\'achat de son nom de domaine et j\'ai déployée l\'application sur Netlify.',
    image: '/appImg/djenkafoArt.jpg',
    appUrl: 'https://www.djenkafoart.com/',
    gitUrl: 'https://github.com/AndreaFourel/evaluationStudiHtmlCss',
  },
  {
    id: 2,
    title: 'Massage Ayurvedique Haïdopoulo Marlène',
    description: 'Création et réalisation d\'un site vitrine pour une maie masseuse. Après avoir réalisé mon premier site, j\'ai eu envie de renouveller l\'expérience en utilisant les mêmes outils. Forte de ma première expérience, j&pos;ai travaillé plus le responsive et j\'ai gagné en aisance dans l\'utilisation de HTML, CSS, Bootstrap et Javascript. J\'ai acompagné Marlène pour l\'achat de son nom de domaine et j\'ai déployée l\'application sur Netlify.',
    image: '/appImg/mahm1.webp',
    appUrl: 'https://www.mahm.fr/',
    gitUrl: 'https://github.com/AndreaFourel/site-marlene',
  },
  {
    id: 3,
    title: 'Dice Battle',
    description: 'Mini jeux de dés réalisé dans le cadre d\'une évaluation scolaire. Pour répondre au requis de cet exercice, j\'ai utilisé HTML, CSS et Bootstrap pour la création de la page web. Pour l\'algorithme j\'ai utilisé JavaScript que j\'ai intégré dans la page précédemment créée en utilisant le DOM et la programmation événementielle. Pour le déployement, j\'ai utilisé GitHub Pages.',
    image: '/appImg/dice.png',
    appUrl: 'https://andreafourel.github.io/evaluationStudiJsDOM/',
    gitUrl: 'https://github.com/AndreaFourel/evaluationStudiJsDOM',
  },
  {
    id: 4,
    title: 'La Bouche des Goûts',
    description: 'Dans le cadre de ma formation, j\'ai eu l\'opportunité de développer une application web complète pour un restaurant fictif avec une surface administrable et la possibilité de réserver une table en ligne. J\'ai utilisé le framework PHP Symfony, l\'ORM Dctrine, EasyAdmin, MariaDB et UML pour la conception de la base de données, HTML, CSS, Bootstrap, le moteur de template Twig et JavaScript pour la gestion de la réservation d\'une table en ligne. Pour le maquettage j\'ai utilisé Figma et pour la mise en ligne je suis passée par OVH.',
    image: '/appImg/lbdg1.jpg',
    appUrl: '',
    gitUrl: 'https://github.com/AndreaFourel/ecf-restaurant-webapp',
  },
  {
    id: 5,
    title: 'Les Pizzas de Charlotte - Le Front-end',
    description: 'Pendant ma formation j\'ai eu l\'opportunité d\'effectuer un stage pendant lequel j\'ai eu pour mission la réalisation d\'une application complète pour une franchise de pizzerias. J\'ai travaillé sur une maquette existente. Pour la réalisation du front j\'ai utilisé le framework Next.js de la librairie React de JavaScript. Cette expérience m\'a donnée l\'oppotunité d\'utiliser quelques uns des nombreux avantages offerts par Next.js. J\'ai égalemant utilisé React et ses hook pour la constructions des composants et la "revalidation à la demande" de Next.',
    image: '/appImg/charlotte2.webp',
    appUrl: 'https://www.lespizzasdecharlotte.com/',
    gitUrl: '',
  },
  {
    id: 6,
    title: 'Les Pizzas de Charlotte - Le Back-end',
    description: 'Pour la partie back de ma mission de stage j\'ai utilisé le framework PHP Symfony, l\'ORM Doctrine, EasyAdmin, MariaDB, l\'ensemble de logiciels XAMPP, l\'éditeur de code PhpStorm et le logiciel Postman. Pour la conception de la base de données, j\'ai utilisé le language de modélisation graphique orienté objet, UML et le logiciel de dessin Drawio. Pour le déployement des deux applications des Pizzas de Charlotte, j\'ai configuré un serveur Debian 11 vierge et la mise en lige c\'est faite sur OVH.',
    image : '/appImg/charlotte.jpeg',
    appUrl: 'https://app.lespizzasdecharlotte.com/',
    gitUrl: '',
  }, 
  {
    id: 7,
    title: 'CV en ligne',
    description: 'Après avoir utilisé Next.js pendant mon projet de stage j\'ai eu très envie de renouveller l\'expérience. J\'avais envie de tester l\'App Router - en version bêta lors de mon stage. Je voulais également utiliser TypeScript afin d\'avoir une première expérence avec ce language. Etant donnée que pandant ma formation j\'ai était souvant amenée à utiliser Bootstrap, j\'ai profité de cette occasion pour me familiariser au framework CSS Tailwind.',
    image : '/appImg/cv1.png',
    appUrl: 'https://andreafourel.fr/',
    gitUrl: 'https://github.com/AndreaFourel/webCV',
  }
]

export function getProjects() {
  return projects;
}