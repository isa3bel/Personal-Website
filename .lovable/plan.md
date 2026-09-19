## Plan: Replace the site with the uploaded HTML and CSS

Rebuild the current one-page site to match `logan.html` and `logan.css`, while adapting the static markup and script into the existing React application.

### Changes
- Replace the current page with the uploaded navigation, introduction, Microsoft experience, selected work, about, contact, and footer content.
- Preserve the two expandable project case studies and recreate their open/close behavior in React.
- Preserve the section reveal animation, sticky navigation, mobile layout, accessibility labels, skip link, and reduced-motion behavior.
- Replace the current visual theme with the uploaded neutral Inter Tight design.
- Use the project images already available for the two work previews, since the uploaded HTML references image files that were not included.
- Update the page title and social description to the metadata supplied in the HTML.

### Technical details
- Convert the HTML into JSX in `src/routes/index.tsx`; no raw script tag will be added.
- Fold the uploaded CSS into `src/styles.css` without changing the application framework or routing.
- Update the root font link to Inter Tight.
- Keep all external links, email address, résumé URL, project copy, and experience details exactly as provided.
- Verify the finished page at desktop and mobile sizes, including both expandable project sections.
