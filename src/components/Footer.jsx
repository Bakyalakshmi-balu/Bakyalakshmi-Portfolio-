import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Designed &amp; developed by Bakyalakshmi B</p>
          <p className="footer-stack">React · JavaScript · ASP.NET Core · Electron</p>
        </div>
      </footer>

      <button
        className={`back-to-top ${show ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FiArrowUp size={18} />
      </button>
    </>
  );
}
