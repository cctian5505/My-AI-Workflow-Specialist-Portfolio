"use client";

import { useEffect, useState, type ReactNode } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CalendlyPopup({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  const [scriptError, setScriptError] = useState(false);

  // Calendly's official popup CSS — loaded once, only when this button exists.
  useEffect(() => {
    if (document.getElementById("calendly-widget-css")) return;
    const link = document.createElement("link");
    link.id = "calendly-widget-css";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }, []);

  function handleClick() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      setScriptError(true);
    }
  }

  return (
    <div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onError={() => setScriptError(true)}
      />
      <button type="button" onClick={handleClick} className={className}>
        {children}
      </button>
      {scriptError && (
        <p className="mt-2 text-xs text-text-faint">
          Having trouble opening the scheduler? Contact me directly.
        </p>
      )}
    </div>
  );
}
