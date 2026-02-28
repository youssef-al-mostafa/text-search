import type { Article } from '../types';

export const articles: Article[] = [
  {
    id: 1,
    title: 'Understanding the difference between grid-template and grid-auto',
    date: 'Oct 09, 2018',
    content: 'With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to do with explicit and implicit grid tracks, I could never quite remember which was which.'
  },
  {
    id: 2,
    title: 'CSS Grid Layout: A Practical Introduction',
    date: 'Sep 15, 2018',
    content: 'CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. Unlike flexbox which is primarily one-dimensional, grid allows you to control both rows and columns simultaneously. The grid container establishes a grid formatting context for its contents, and you can define grid tracks using the grid-template properties.'
  },
  {
    id: 3,
    title: 'Flexbox vs Grid: When to Use Which',
    date: 'Aug 22, 2018',
    content: 'Both Flexbox and Grid are powerful CSS layout systems, but they excel in different scenarios. Flexbox is ideal for one-dimensional layouts - either a row or column. Grid shines when you need to control layout in two dimensions simultaneously. Use flexbox for navigation bars, card layouts, and centering content. Choose grid for page layouts, complex designs, and when you need precise control over rows and columns.'
  },
  {
    id: 4,
    title: 'Modern CSS: Custom Properties and Variables',
    date: 'Jul 30, 2018',
    content: 'CSS custom properties, also known as CSS variables, bring dynamic values to CSS. Unlike preprocessor variables in Sass or Less, CSS variables are live and can be updated via JavaScript. They follow the cascade and inheritance, making them incredibly powerful for theming. Define them with -- prefix and access with var() function. This makes maintaining consistent colors, spacing, and other design tokens much easier.'
  },
  {
    id: 5,
    title: 'Responsive Design Patterns in 2018',
    date: 'Jun 18, 2018',
    content: 'Responsive web design has evolved significantly. Modern patterns include using CSS Grid for layout switching at different breakpoints, container queries for component-level responsiveness, and fluid typography using clamp(). The mobile-first approach remains best practice, starting with the smallest screen and progressively enhancing. Media queries should focus on content breakpoints rather than device-specific sizes.'
  },
  {
    id: 6,
    title: 'CSS Animation Performance Tips',
    date: 'May 25, 2018',
    content: 'Not all CSS properties are equal when it comes to animation performance. Animating transform and opacity is highly performant because they can be handled by the GPU compositor. Avoid animating properties that trigger layout like width, height, or margin. Use will-change sparingly to hint at upcoming animations. Request animation frame for JavaScript animations, and consider using CSS transitions for simple state changes.'
  },
  {
    id: 7,
    title: 'Understanding CSS Specificity',
    date: 'Apr 12, 2018',
    content: 'CSS specificity determines which styles are applied when multiple rules target the same element. Inline styles have the highest specificity, followed by IDs, classes/attributes/pseudo-classes, and finally element selectors. Understanding specificity helps avoid using !important as a crutch. The cascade is predictable when you understand how specificity is calculated. Keep selectors simple and avoid over-qualifying rules.'
  },
  {
    id: 8,
    title: 'CSS Grid: Naming Grid Lines and Areas',
    date: 'Mar 08, 2018',
    content: 'While you can reference grid lines by number, naming them makes your code more maintainable. Use square brackets in grid-template-rows and grid-template-columns to name lines. Grid template areas provide an even more visual way to define layouts using ASCII art. Named areas automatically create named lines, and you can use these names in grid-row and grid-column properties for positioning items.'
  },
  {
    id: 9,
    title: 'The Box Model Explained',
    date: 'Feb 14, 2018',
    content: 'The CSS box model is fundamental to understanding layout. Every element is a rectangular box with content, padding, border, and margin. The box-sizing property controls how width and height are calculated. Border-box includes padding and border in the element width, making layouts more predictable. Understanding margin collapse between adjacent elements helps prevent unexpected spacing issues.'
  },
  {
    id: 10,
    title: 'CSS Position Property Deep Dive',
    date: 'Jan 20, 2018',
    content: 'The position property controls how elements are positioned in the document flow. Static is the default, relative creates a positioning context while maintaining flow, absolute removes from flow and positions relative to nearest positioned ancestor, fixed positions relative to viewport, and sticky is a hybrid that switches between relative and fixed. Understanding positioning contexts is key to managing z-index and layout behavior.'
  }
];
