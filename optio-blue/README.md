# Allenhurst Cleaners v2

## Changelog

### [0.5.0] - 2024-10-XX

- `Pull Request` :
  - Removed excess logging
  - Refactor App.css to remove unused CSS files
  - Refactor Gdetails component to improve rendering of opening hours
  - Refactor About and Home pages UI layout and content
  - Refactor ServiceSquare component to update hover effect
  - Added Reviews page and Greviews component
  - Refactor GoogleMaps components and update UI layout
  - Refactor ServiceSquare component, Services and About pages
  - Refactor ThemeSwitcher button text to toggle between light and dark mode
  - Version Bump
- Update Meta Description in `index.html`

### [0.4.0] - 2024-09-23

- `Pull Request` : Comprehensive UI Refactor and Dependency Updates
  - Misc refactor for UI
  - Update Readme ChangeLog
  - Refactor SidePanel component to use MUI Components and SidePanelContext hook
  - Refactor Footer component to use MUI Components and add author link
  - Remove unused code
  - Refactor ThemeSwitcher to use MUI Button component and ThemeContext hook
  - Refactor entire project to use MUI Components
  - Add dependencies for @emotion/react, @emotion/styled, @mui/icons-material, and @mui/material
  - Refactor CSS files and remove unused styles
  - Update Readme ChangeLog
  - Refactor Gdetails to use usePlaceDetails hook, updated Gmap with place marker
  - Refactor Contact and Home pages, add usePlaceDetails hook
  - Refactor Gmap.css and Gmap.js, and remove ErrorBoundary.js
  - Refactor Gmap to use newly added @react-google-maps/api dependency
  - Update Readme ChangeLog
  - WIP Refactor Gmap, added useGoogleMapsApi hook
  - Refactor Header and SidePanel components, Add useIsMobile hook for responsive design
  - Refactor ThemeSwitcher component and ImportImages utility
  - Add ServiceSquare component to About page
  - Split up App.CSS styles per respective components & pages
  - Update package version to 0.4.0 in package-lock

### [0.3.0] - 2024-09-12

- Update package version to 0.3.0 in package-lock
- `Pull Request` : Refactor Allenhurst Cleaners website
  - Refactor CSS and add Google Maps component
  - Update Readme to include PR #3's commit message
  - Version Bump & Readme
  - Refactor package dependencies and add image import utility for carousel on home page
  - Refactor About, Contact, and Services pages
  - Refactor App.js, Routes.js, and components: wrapped in fragments
    - Remove Sidebar component from App.js
    - Remove ul element and replace it with NavMenu component in Sidebar.js
  - Refactor index.js and add Google Tag loading utility, update ignore .env(s)
  - Refactor meta tags and manifest.json for Allenhurst Cleaners

### [0.2.0] - 2024-09-11

- `Pull Request` : Refactor Header, Sidebar, and Footer components and add ThemeSwitcher
  - Refactor SidePanel and Sidebar components, add ThemeSwitcher
  - Refactor styles to use CSS variables for colors
  - Refactor footer component and add tooltip for author information
  - Refactor Header and SidePanel components
  - Refactored Header with collapsible SidePanel
  - Version Bump
  - Update readme

### [0.1.0] - 2024-09-10

- Fixed routes on deployed gh page
- basename
- `Pull Request` : Refactor project structure and add basic layout components
  - Basic structure with a navigation header, collapsible sidebar, dynamic content area, footer, react-router-dom
  - Refactored project and added folder structure
  - Gutted default app js + css
- Install gh-pages package for deployment
- npx create-react-app optio-blue
