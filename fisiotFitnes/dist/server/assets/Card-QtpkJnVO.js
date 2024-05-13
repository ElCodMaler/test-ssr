import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
function Card() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "card", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setCount((count2) => count2 + 1), children: [
      "count is ",
      count
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Edit ",
      /* @__PURE__ */ jsx("code", { children: "src/App.jsx" }),
      " and save to test HMR"
    ] })
  ] });
}
export {
  Card as default
};
