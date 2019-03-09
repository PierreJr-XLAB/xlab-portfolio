const toysList = {
  toys: [
    {
      id: 'jiinio',
      title: 'Pierre Chahwan',
      subtitle: 'Lead Software Engineer',
      description: 'Lead Software Engineer',
      url: '',
      date: '2018',
      link: 'View website',
      url: 'http://www.celialopez.fr',
      role: '<div>Creative Developer</div>',
      technologies: '<div>WebGL</div><div>ThreeJS</div>',
      clients: 'Célia Lopez',
      awards: '<div><a href="https://www.awwwards.com/sites/celia-lopez" target="_blank">Awwwards - SOTD</a></div><div><a href="https://thefwa.com/cases/portfolio-of-celia-lopez" target="_blank">FWA - SOTD</a></div><div><a href="https://www.cssdesignawards.com/sites/celia-lopez-portfolio/32742/" target="_blank">CSSDesignAwards - SOTD</a></div>',
      medias: [
        { type: 'image', url: 'images/projects/celia/1.jpg' },
        { type: 'image', url: 'images/projects/celia/2.jpg' },
        { type: 'video', url: 'videos/projects/celia/1.mp4' },
        { type: 'video', url: 'videos/projects/celia/2.mp4' },
      ],
    },
    {
      id: 'oliver',
      title: 'Oliver Chlala',
      subtitle: 'Head Electronics Engineer',
      description: 'Head Electronics Engineer',
      url: '',
      date: '2018',
      link: 'View website',
      url: 'http://www.celialopez.fr',
      role: '<div>Creative Developer</div>',
      technologies: '<div>WebGL</div><div>ThreeJS</div>',
      clients: 'Célia Lopez',
      awards: '<div><a href="https://www.awwwards.com/sites/celia-lopez" target="_blank">Awwwards - SOTD</a></div><div><a href="https://thefwa.com/cases/portfolio-of-celia-lopez" target="_blank">FWA - SOTD</a></div><div><a href="https://www.cssdesignawards.com/sites/celia-lopez-portfolio/32742/" target="_blank">CSSDesignAwards - SOTD</a></div>',
      medias: [
        { type: 'image', url: 'images/projects/celia/1.jpg' },
        { type: 'image', url: 'images/projects/celia/2.jpg' },
        { type: 'video', url: 'videos/projects/celia/1.mp4' },
        { type: 'video', url: 'videos/projects/celia/2.mp4' },
      ],
    },
    {
      id: 'naji',
      title: 'Naji Ibrahim',
      subtitle: 'Finance & Accounting',
      description: 'Finance & Accounting',
      url: '',
      date: '2018',
      link: 'View website',
      url: 'http://www.celialopez.fr',
      role: '<div>Creative Developer</div>',
      technologies: '<div>WebGL</div><div>ThreeJS</div>',
      clients: 'Célia Lopez',
      awards: '<div><a href="https://www.awwwards.com/sites/celia-lopez" target="_blank">Awwwards - SOTD</a></div><div><a href="https://thefwa.com/cases/portfolio-of-celia-lopez" target="_blank">FWA - SOTD</a></div><div><a href="https://www.cssdesignawards.com/sites/celia-lopez-portfolio/32742/" target="_blank">CSSDesignAwards - SOTD</a></div>',
      medias: [
        { type: 'image', url: 'images/projects/celia/1.jpg' },
        { type: 'image', url: 'images/projects/celia/2.jpg' },
        { type: 'video', url: 'videos/projects/celia/1.mp4' },
        { type: 'video', url: 'videos/projects/celia/2.mp4' },
      ],
    },
    {
      id: 'anthony',
      title: 'Anthony Abdel Karim',
      subtitle: 'Events & On-Ground',
      description: 'Events & On-Ground',
      url: '',
      date: '2018',
      link: 'View website',
      url: 'http://www.celialopez.fr',
      role: '<div>Creative Developer</div>',
      technologies: '<div>WebGL</div><div>ThreeJS</div>',
      clients: 'Célia Lopez',
      awards: '<div><a href="https://www.awwwards.com/sites/celia-lopez" target="_blank">Awwwards - SOTD</a></div><div><a href="https://thefwa.com/cases/portfolio-of-celia-lopez" target="_blank">FWA - SOTD</a></div><div><a href="https://www.cssdesignawards.com/sites/celia-lopez-portfolio/32742/" target="_blank">CSSDesignAwards - SOTD</a></div>',
      medias: [
        { type: 'image', url: 'images/projects/celia/1.jpg' },
        { type: 'image', url: 'images/projects/celia/2.jpg' },
        { type: 'video', url: 'videos/projects/celia/1.mp4' },
        { type: 'video', url: 'videos/projects/celia/2.mp4' },
      ],
    }
  ],

  getProject(id) {
    return toysList.toys.find(toy => toy.id === id);
  },

};

module.exports = toysList;
