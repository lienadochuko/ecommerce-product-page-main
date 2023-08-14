# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [ecommerce-product-page-main](https://github.com/lienadochuko/ecommerce-product-page-main)
- Live Site URL: [ecommerce-product-page-main-sepia](https://ecommerce-product-page-main-sepia.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
 const [isclose, setClose] = useState(false);
  const [isCartclose, setCartClose] = useState(false);
  const [ProductTotal, setProductTotal] = useState(0);
  const [ProductButton, setProductButton] = useState(0);

  var total = ProductButton * 125.00;
  const toggle = () => {
    setClose(!isclose);
    // console.log(isclose);
  }

  const handleButton = () => {
    setProductButton(ProductTotal);
  }

  const handleReset = () => {
    setProductButton(0);
    setProductTotal(0);
  }

  const handleCartView = () => {
    // console.log(isCartclose);
    setCartClose(!isCartclose);
  }

  // eslint-disable-next-line no-unused-vars
  const [disable, setdisable] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [disableSub, setdisableSub] = useState(false);

  const addition = () => {
    if (ProductTotal <= 20) {
      setProductTotal(ProductTotal + 1);
    } else {
      setdisable(true);
    }
  }

  const Subtract = () => {
    if (ProductTotal >= 0) {
      setProductTotal(ProductTotal - 1);
      // console.log(ProductTotal);
    } else {
      setdisableSub(true);
    }
    }
```

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

React redux.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [React-hooks](https://www.w3schools.com/REACT/react_usecallback.asp)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Daniel Erhisohwode](https://erhisdaniel.netlify.app/)
- Frontend Mentor - [@lienadochuko](https://www.frontendmentor.io/profile/lienadochuko)
- Twitter - [@ErhisO](https://www.twitter.com/@ErhisO)


**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks is to God.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
