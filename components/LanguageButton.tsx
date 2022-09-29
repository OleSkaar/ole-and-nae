export default function LanguageSelector() {
    /* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role */
    /* https://www.erikkroes.nl/blog/accessible-html-toggle-button-switch/ */
  return (
    <label for="toggle">
      {/* Language */}
      <button type="button" id="toggle" role="switch" aria-checked="true">
        <span>EN</span>/
        <span>JP</span>
      </button>
    </label>
  );
}
