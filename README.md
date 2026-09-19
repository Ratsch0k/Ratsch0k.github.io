# Personal Portfolio
Personal portfolio website that I use to show off myself, my projects, and my academic and professional history. Powered by [Next.js](https://jextjs.org/) and bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## How to develop
First, install all project dependencies with:
```bash
yarn install
```

Now you can run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit the source code to fix stuff or add features and the changes should be almost immediately visible in the development server.

### Guidelines
Follow the Git flow workflow to add features or fix issues. Use the following branch name prefixes to indicate what type of change is made:
 - `feature/` : Adding a new feature 
 - `improvement/` : Improving a feature or other things of the project
 - `fix/` : Fixing a bug or an issue

This projects uses [TypeScript](https://www.typescriptlang.org/) and [ESLint](https://eslint.org/) for a better development experience.
Please ensure that your code conforms to the ESLint rules.
You can do this with:
```bash
yarn eslint
```
Fix any issues before merging branches into develop or main.

### Translations
I use [i18next](https://www.i18next.com/) and specifially [react-i18next](https://react.i18next.com/) to provide a german and english translation for any text.
The locale files are located at `public/locales`.

If you add any text, use these libraries and provide translation for english and german.

### Dark mode
The webpage has a builtin dark mode that can be toggled with a button on the bottom right.
The dark mode is implemented using tailwindcss styling and some code detecting and handling mode changes.
Ensures that your styling looks good in both light and dark mode.
To change the style only in dark mode use the `dark:` prefix in your tailwindcss class names.
Read more about this [here](https://v2.tailwindcss.com/docs/dark-mode)

### Changes to the client side router
Due to how I implemented the custom page transitions I also had to implement a custom client-side router.
While pretty bare-bone, it handles this use case good.
Most of it is implemented in `index.tsx`.
The current state of Next.js could allow me to use the default client-side router but it would require a complete rewrite of routing logic.
Thus, this is not a high priority.

To add a page, create a `.tsx` file under `pages` and wrap your JSX code with the `PageContent` component.
Add your component to the list of components at the beginning of `index.tsx` (variable is named: `initialState`), provide a URL path and a translation key for its title.
Now you should be able to navigate to that page.

To keep the scroll position between pages you can look at `pages/cv.tsx` and how this can be achieved.

## How to  deploy
To deploy a commit, create a version on that commit and wait until the GitHub actions have succeeded. 

This version is automatically build and deployed to [simonkurz.de](simonkurz.de) using a continous integration pipeline built with GitHub workflows.

### Implementation
If a version is released, the GitHub workflow **release** is triggered.
This workflow will configure some variables and fetch secrets and will run a small script located at `scripts/release.sh`.

This script installs the project dependencies, build the project, generate a static site from it, and upload it to [simonkurz.de](simonkurz.de).