# Summary of Changes

This document outlines the recent improvements and enhancements made to the repository.

## 1. Internationalization (i18n)

-   **Implemented i18n support for Brazilian Portuguese and English.**
    -   Installed and configured `react-i18next` and `i18next`.
    -   Created language files in `public/locales` for both `en` and `pt`.
    -   Extracted hard-coded text from the `Header`, `Greeting`, `SocialMedia`, and `Skills` components into the language files.
    -   Added a UI toggle button in the `Header` to allow users to switch between the two languages.
-   **Files Added:**
    -   `src/i18n.js`: Configuration file for `i18next`.
    -   `public/locales/en/translation.json`: English translation file.
    -   `public/locales/pt/translation.json`: Brazilian Portuguese translation file.

## 2. Dependencies Audit

-   **Removed Unused Dependencies:**
    -   `@apollo/react-hooks`
    -   `apollo-boost`
    -   `graphql`
    -   `fs`
    -   `node-fetch`
-   **Updated Outdated Packages:**
    -   Updated all outdated dependencies to their latest stable versions, including `react`, `react-dom`, `react-scripts`, and many others.

## 3. Dead Code Detection

-   **Removed Unused Files:**
    -   `src/logo.svg`: Unused SVG file.
    -   `src/containers/skills/FullStackImg.js`: Unused React component.
    -   `src/containers/skills/DesignImg.js`: Unused React component.
-   **Refactored `src/containers/skills/SkillSection.js`:**
    -   Removed imports and references to the deleted `FullStackImg` and `DesignImg` components.
