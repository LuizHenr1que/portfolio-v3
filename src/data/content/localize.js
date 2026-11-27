export function localize(node, lang) {
  if (Array.isArray(node)) {
    return node.map((item) => localize(item, lang));
  }

  if (node && typeof node === "object") {
    const keys = Object.keys(node);
    if (
      keys.length === 2 &&
      typeof node.pt === "string" &&
      typeof node.en === "string"
    ) {
      return node[lang] ?? node.pt;
    }

    return Object.fromEntries(
      keys.map((key) => [key, localize(node[key], lang)]),
    );
  }

  return node;
}
