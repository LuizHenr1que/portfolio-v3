import { cases } from "./cases";
import { localize } from "./localize";
import { stack } from "./site";
import { ui } from "./ui";

export const content = { ...ui, cases, stack };

export function translate(lang) {
  return localize(content, lang);
}
