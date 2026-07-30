import { useEffect, useState } from "react";

export default function useScrollSpy(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] || "");

  useEffect(() => {
    let observer;
    let timeoutId;

    const observeSections = () => {
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      if (!sections.length) {
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (!visible.length) return;
          visible.sort((a, b) => ids.indexOf(a.target.id) - ids.indexOf(b.target.id));
          setActiveId(visible[0].target.id);
        },
        {
          rootMargin: "-20% 0px -55% 0px",
          threshold: 0.25,
        }
      );

      sections.forEach((section) => observer.observe(section));
    };

    timeoutId = window.setTimeout(observeSections, 120);

    return () => {
      window.clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, [ids]);

  return activeId;
}
