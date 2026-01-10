import React, { useMemo, useRef, useCallback } from "react";

/**
 * ColorBrushText
 * - Splits text into characters
 * - On pointer move, the character under cursor (and optional neighbors) get painted
 * - On mouse leave, resets back to baseColor
 */
export default function ColorBrushText({
  text,
  palette = ["#37C6D9", "#007399", "#016389", "#0B2C73"],
  baseColor = "rgba(255,255,255,0.75)",
  className = "",
  neighbor = 1, // 0 = only hovered char, 1 = +/-1 neighbors, etc.
}) {
  const spansRef = useRef([]);

  const chars = useMemo(() => Array.from(text || ""), [text]);

  const paintIndex = useCallback(
    (i) => {
      const el = spansRef.current[i];
      if (!el) return;

      // paint
      const c = palette[i % palette.length];
      el.style.color = c;
      el.style.transition = "color 220ms cubic-bezier(.22,1,.36,1)";

      // mark as painted (so we can reset easily)
      el.dataset.painted = "1";
    },
    [palette]
  );

  const onPointerMove = useCallback(
    (e) => {
      const target = e.target?.closest?.("[data-char-idx]");
      if (!target) return;

      const idx = Number(target.getAttribute("data-char-idx"));
      if (Number.isNaN(idx)) return;

      // paint hovered + neighbors for a nicer “brush” feel
      for (let k = -neighbor; k <= neighbor; k++) {
        const j = idx + k;
        if (j >= 0 && j < chars.length) paintIndex(j);
      }
    },
    [chars.length, neighbor, paintIndex]
  );

  const resetAll = useCallback(() => {
    for (let i = 0; i < spansRef.current.length; i++) {
      const el = spansRef.current[i];
      if (!el) continue;
      if (el.dataset.painted === "1") {
        el.style.color = baseColor;
        el.dataset.painted = "0";
      }
    }
  }, [baseColor]);

  return (
    <span
      className={className}
      onPointerMove={onPointerMove}
      onMouseLeave={resetAll}
      onTouchEnd={resetAll}
      style={{ color: baseColor }}
    >
      {chars.map((ch, i) => {
        // keep spaces clickable without collapsing
        const safeChar = ch === " " ? "\u00A0" : ch;

        return (
          <span
            key={i}
            data-char-idx={i}
            ref={(el) => (spansRef.current[i] = el)}
            style={{
              display: "inline-block",
              willChange: "color",
            }}
          >
            {safeChar}
          </span>
        );
      })}
    </span>
  );
}
