## Changelog

### Version 1.3 (Released April 26, 2021)

- Added full multilingual support! 👋 🇦🇺🇪🇸🇫🇷
- Added multilingual demo content, I chose French, please excuse the poor translations.
- Added multilingual menus
- Added language selector dropdown in menu
- As part of the multilingual implementation, lots of configuration options have been moved from the `config.toml` to the individual markdown files. For example instead of configuring the services page from the config.toml, you now configure it in the service pages front-matter. 
- Added support for image, video, figure shortcodes in markdown content
- Added nested menus
- Added dark mode
- Improved demo content
- Updated from Bootstrap 4.3 => 4.6
- Updated and test with Hugo v0.80.0
- Removed jQuery

### Version 1.2 - (Released Jul 15, 2019)

- Updated documentation [theme documentation](/docs/hugo-advance-pro/install-theme)
- Add global config option: `enableGitInfo = true` - When sorting content by it’s last modified date it will use the git timestamp of when the file was modified. No longer need to manually update the `lastmod` front matter in markdown files.
- Ability to import and configure Google fonts from the `config.toml`
- Improve homepage slider functionality on mobile
- Configure all aspects of the services section on the homepage from the `config.toml`
- Configure all aspects of the work section on the homepage from the `config.toml`
- Change the "We Help Business Grow" section on the homepage to be easier to change the image
- Partners logos on the homepage now contain links
- Update font from “Palaquin Dark” to “Palaquin” - It’s the same font (Google fonts) but this version has a larger version of font weights available.
- hero image text color can now be configured in front-matter
- hero image can now be hidden on a per page basis from the front-matter
- Added hero-image partial to services page
- Added an additional overview section to services page
- Improved design and functionality of service summaries. Summaries can now have thumbnails using the frontmatter `thumbnail` in a services markdown file.
- Ability to configure the default gradient colours for the hero-image partial in the `config.toml` see `hero_gradient_start` and `hero_gradient_end`
- Add filters and filtering by taxonomy to the work grid
- Work grid now uses pure CSS masonry. Removed `masonry.pkgd.min.js` and `imagesloaded.pkgd.min.js`
- Design changes to work list page
- Improvements to work single page
- Single work pages can now have a gallery at the bottom
- Can now specify the sort order of the work grid in config.toml - options: “shuffle”, “lastmod”, “weight”
- Add sequenced fade-in animation to work grid using AOS
- Configure headers transparancy in a pages frontmatter

### Version 1.1 (Released Feb 27, 2019)

- Added online [theme documentation](/docs/hugo-advance-pro/install-theme)
- Update SCSS files to Bootstrap 4.3.
- All sections of the homepage are now configurable via the config.toml.
- All sections of the services page are now configurable via the config.toml.
- Configure global theme colors and fonts from the config.toml or style.scss. Hugo site params passed into the style.scss file.
- Added contact-cta partial which displays a call to action and can link to the contact page, signup etc. Heading, subheading and button can be configured globally in the config.toml.
- Refactor animated header classes to be cleaner and more intuitive. Can inject header classes on a per template .basis. Useful if you have a page with a hero image and you want the header to be transparent over the top.
- Simplify hamburger icon, remove hamburger.css library.
- Enlarge the hitzone of the logo and hamburger menu in mobile view.
- Refactor hero-image partial parameters. Is now set height by default (with default height of 600px). Optionally control the height (ie 360px) or set to fullscreen from a markdown files frontmatter.
- Redesign Team page. People are now in circles, where they belong. Added additional team member social media icons: dribble, behance, twitter. Easy to add more icons using font awesome 5.
- Add author profile to blog posts, list and single.
- Add author taxonomy for viewing blog posts by author.
- Add hero-image partial to blog posts.
- Improve document formatting of blog post content, adding styles for most semantic elements.
- Footer menus are now hugo menus and are configured in config.toml.
- Show hide footer menus from config.toml.
- Enlarge hit zone of footer menu links on mobile.
- Removed unused image and font assets from slick slider library.
- Improved stacking of partner logos on mobile.
- Adjust color and contrast of headings so that only links should appear in the primary link color.
- Improve design of contact page, and make all text read from the markdown file.
- Add meta tags and go meta tags to homepage configured via config.toml
- Override meta tags on a per page basis
- achieve 100/100 Google speed and SEO scores
- Google analytics now uses Netlify environment variable if found, otherwise uses params found in config.toml. Google Analytics does not load on local development to avoid junk data.

### Version 1.0 (Released Nov 27, 2018)

- Initial release.
