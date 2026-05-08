import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translateText } from "./translations";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (value) => value,
});

const storageKey = "portfolio-language";
const ignoredTags = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "TEXTAREA",
  "INPUT",
  "CODE",
  "PRE",
]);

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";

  return window.localStorage.getItem(storageKey) || "en";
}

function translateNodeTree(root, language) {
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (
        !parent ||
        ignoredTags.has(parent.tagName) ||
        parent.closest("[data-no-translate]")
      ) {
        return NodeFilter.FILTER_REJECT;
      }

      return node.nodeValue.trim()
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const translated = translateText(node.nodeValue, language);

    if (translated !== node.nodeValue) {
      node.nodeValue = translated;
    }
  });
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(storageKey, nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((currentLanguage) => {
      const nextLanguage = currentLanguage === "en" ? "pt" : "en";
      window.localStorage.setItem(storageKey, nextLanguage);
      return nextLanguage;
    });
  }, []);

  const t = useCallback(
    (value) => translateText(value, language),
    [language]
  );

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.body.dataset.language = language;

    const translatePage = () => translateNodeTree(document.body, language);
    const frame = window.requestAnimationFrame(translatePage);
    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(translatePage);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
    }),
    [language, setLanguage, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
