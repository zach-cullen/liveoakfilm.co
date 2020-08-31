# liveoakfilm.co

See Deployed Site:
[Live Oak Films](https://liveoakfilm-co.vercel.app/)

This is the newest version of a static website I built for my previous business, Live Oak Films. It features responsive styles, css animation, and server side data fetching to the CMS. Videos are provided by the Vimeo player API, and images are hosted on AWS S3. 

## Top Features: 

### Responsive Nav with Animations 
[./components/Nav.js](https://github.com/zach-cullen/liveoakfilm.co/blob/master/components/Nav.js)

### Parallax Hero Video
[./components/Hero.js](https://github.com/zach-cullen/liveoakfilm.co/blob/master/components/Hero.js)

### Full Screen Video Player w/ Animation
[./components/VideoFullScreen.js](https://github.com/zach-cullen/liveoakfilm.co/blob/master/components/VideoFullScreen.js)

## Running Locally

```bash
git clone https://github.com/zach-cullen/liveoakfilm.co
cd liveoakfilm.co
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Built Using:

### NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Styled Components

This project makes heavy use of [Styled Components](https://styled-components.com/docs/basics#motivation), a form of 'CSS in JS' that enables developers to write code for a component in only one file, quickly scaffold simple presentational elements, and use props to dynamically set styles. 

This projects also uses styled's ThemeProvider to programmatically set colors and effects for use by CSS styles.

### React Transition Group

React Transition Group ([docs](https://reactcommunity.org/react-transition-group/]) enables animations to be triggered on mount and unmounting of components creating a wedge in the component lifecycle where css classes can be added and removed. 

See './components/NavMobileExpanded' in this project for an example of its use. 

### Front end deployed on Vercel

[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Data-fetching - Strapi Headless CMS

This website loads static content from [Strapi](https://strapi.io/documentation/v3.x/getting-started/introduction.html), an open source Node content management system. Page content is pre-loaded and rendered by each page at build time using Next's '[getStaticProps](https://nextjs.org/docs/)' function. 

Strapi is deployed to Heroku, with AWS S3 as upload provider for images. [Strapi Heroku Deployment Guide](https://strapi.io/documentation/3.0.0-beta.x/deployment/heroku.html)

### Code Style

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

