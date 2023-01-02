### Links

-   Live Site URL: [Click here to see webpage](https://your-live-site-url.com)

# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Open a lightbox gallery by clicking on the large product image
-   Switch the large product image by clicking on the small thumbnail images
-   Add items to the cart
-   View the cart and remove items from it

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Next.js](https://nextjs.org/) - React framework
-   TailwindCSS
-   React Modal
-   React Burger Menu

### What I learned

-   This is my first project using TailwindCSS and it made the whole process development process faster, in my opinion. A bit of a learning curve in the beginning but now it feels quite intuitive.
-   How to implement react-burger-menu and how to use it's classes to style it better
-   How to use react-modal as a fast and efficient way to implement a modal. I've also learned how to add an animation to it.

-   I've learned how to add key event listeners to change the image of the modal

```js
useEffect(() => {
	function nextHandler({ key }) {
		{
			if (key == "d" || key == "ArrowRight") {
				nextImage();
			} else if (key == "a" || key == "ArrowLeft") {
				previousImage();
			}
		}
	}

	if (modalIsOpen) {
		window.addEventListener("keydown", nextHandler);
	}

	return () => {
		window.removeEventListener("keydown", nextHandler);
	};
}, [modalIsOpen]);
```

### Continued development

-   Further projects with TailwindCSS.
-   Learn TypeScript to make my projects more resilient and less bug prone.
-   Multi-page react projects.
-   Native ways to fetch data from APIs, other than `useEffect`.

### Useful resources

-   [TailwindCSS](https://tailwindcss.com/docs) - This helped me implement and learn Tailwind.
-   [React Modal](https://www.npmjs.com/package/react-modal) - Quite easy to use React Modal, way faster to implement than creating my own.
-   [React Burger Menu](https://www.npmjs.com/package/react-burger-menu) - It took a bit to learn how to use it, but I'm glad I did, because it's quite handy.
-   [useRef](https://beta.reactjs.org/learn/manipulating-the-dom-with-refs) - Nice way to grab DOM nodes in order to get data from them.

## Author

-   Website - [EduardIonescu](https://ionescueduard.netlify.app)
-   Frontend Mentor - [@EduardIonescu](https://www.frontendmentor.io/profile/EduardIonescu)
