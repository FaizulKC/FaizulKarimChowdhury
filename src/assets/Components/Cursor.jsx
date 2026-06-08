import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      }
    };
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate(${pos.current.x}px,${pos.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", move);
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const expand = () => ring.current?.classList.add("cursor-ring--hover");
  const shrink = () => ring.current?.classList.remove("cursor-ring--hover");

  useEffect(() => {
    const els = document.querySelectorAll("a,button,.project-card,.skill-tag");
    els.forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });
    return () =>
      els.forEach((el) => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", shrink);
      });
  });

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}
