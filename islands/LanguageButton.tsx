import { Japanese, LanguageParameter } from "../components/translations.ts";

export default function LanguageButton() {
  const isJapanese = new URLSearchParams(window.location?.search).get(
    LanguageParameter,
  ) === Japanese;

  const handleClick = () => {
    const newUrl = new URL(window?.location?.href);

    if (isJapanese) {
      newUrl.searchParams.delete(LanguageParameter);
    } else {
      newUrl.searchParams.set(LanguageParameter, Japanese);
    }

    window.location.href = newUrl.href;
  };

  return (
    <button
      class="language-button"
      type="button"
      id="toggle"
      role="switch"
      aria-checked="true"
      onClick={handleClick}
    >
      {isJapanese ? "EN" : "JP"}
    </button>
  );
}
