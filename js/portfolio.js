const projects = [{
  title: "Arcade Game",
  description: `A clone of classic arcade games such as Asteroids, Frogger and more, developed using front end technologies such as
  HTML Canvas, Css and Javascript.
  The Idea is to hone the latest approaches in object oriented JS, Syntax changes that led to ES5/6 and to incorporate the entire game on an HTML 5 Canvas element.
  Challenges include abstracting collition detection, dynamic enemy instantiation and more`,
  coverImg: {
    src: "./bundle/responsive-assets/pngs/arcade-game",
    format: "png",
    caption: "Picture of a classic arcade game"
  },
  featured: true,
  meta: {
    skills: ['ES5/6', 'Css', 'HTML'],
    beginDate: "January '18'",
    endDate: "February'18",
    liveAt: "",
    github: "https://www.github.com/udacity"
  }
}, {
  title: "The 50 cent Portfolio",
  description: `A Professional Portfolio generator, that gathers various skills used, project timelines, and product details, to generate a portfolio such as the one this webpage essays.
  Initially conceptualized as "Just another porfolio", The new challenge is to monetize these efforts that went into building this webpage.
  The product once hosted, should gather all required information, and spew out an archive of the bleeding edge code used, so the user / consumer, can
  without any technical ability, be able to download and self host their portfolios`,
  coverImg: {
    src: "./bundle/responsive-assets/pngs/portfolio",
    format: "png",
    caption: ""
  },
  featured: false,
  meta: {
    skills: ['ES5/6', 'Css', 'HTML', 'PolymerJS', 'Webcomponents'],
    beginDate: "December '17'",
    endDate: "February'18",
    liveAt: "",
    github: "https://www.github.com/udacity"
  }
}, {
  title: "Neighborhood Map",
  description: `A Web Application, that channels the power of google maps and the algorithms behind it, to display a map.
  The Map, has to have features to enable a user, to pin their favorite locations in a specific area, preferrably local to their neighborhood.
  The map should also on hover, display information about any location, the user may choose to pin `,
  coverImg: {
    src: "./bundle/responsive-assets/pngs/map",
    format: "png",
    caption: ""
  },
  featured: false,
  meta: {
    skills: ['ES5/6', 'Css', 'HTML', 'polymerJS'],
    beginDate: "February '18'",
    endDate: "March'18",
    liveAt: "",
    github: "https://www.github.com/udacity"
  }
}, {
  title: "Web Optimization",
  description: `A Product that simplifies various optimizations, that enable a user to quicken load times.
  Challenges include deploying service-workers,caching, and critical path styling`,
  coverImg: {
    src: "./bundle/responsive-assets/jpegs/webopt",
    format: "jpg",
    caption: ""
  },
  featured: false,
  meta: {
    skills: ['ES5/6'],
    beginDate: "March '18'",
    endDate: "March'18",
    liveAt: "",
    github: "https://www.github.com/udacity"
  }
}];

document.addEventListener('DOMContentLoaded', (event) => {
  let articleGrid = document.querySelector('.article-grid');
  window.addEventListener('WebComponentsReady', () => {
    for (const project of projects) {
      const article = document.createElement('Article');
      // let html = `<article-card unresolved="unresolved"></article-card>`;
      // article.innerHTML = html;
      article.classList.add("project-card");
      let aCard = new articleCard(project);
      article.appendChild(aCard);
      articleGrid.appendChild(article);
    }
  });
});