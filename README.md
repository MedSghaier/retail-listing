# Retail items list

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) [![NPM license](https://img.shields.io/badge/license-mit-red.svg?style=for-the-badge)](LICENSE.md)

## Introduction

This application is used to display 20K retail products. It fetches the data from a local `products.cvs` file (found in the public folder [here](https://github.com/MedSghaier/retail-listing/blob/main/public/products.csv)), parse the data and renders the products. It offers the possibility to filter through the product list by keyword, gender or if the product is on sales.

#### [Demo](https://medsghaier.github.io/retail-listing/)

## Librairies used

- **_Styling_**: [Tailwind](https://tailwindcss.com/docs/installation), a utility\*first CSS framework.
- **_Components_**: [HeadlessUI](), a completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.

* **_Virtualization_**: [React window](https://react-window.vercel.app/), to optimize the rendering of the large dataset.

- **_CSV Parser_**: [Papaparse](https://www.papaparse.com/docs#config), CSV parser.
- **_Testing_**:
  - [jest](https://jestjs.io/)
  - [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

## Available Scripts

In the project directory, you can run:

```shell
npm start
```

<p style="font-size:12px">Runs the app in the development mode.
Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in your browser.
The page will reload when you make changes.</p>

```shell
npm test
```

<p style="font-size:12px">Launches the test runner in the interactive watch mode.</p>

```shell
npm run build
```

<p style="font-size:12px">Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.</p>
