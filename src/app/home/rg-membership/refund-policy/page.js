"use client";

import { useMobileDetect } from "@/components/util";
import { useEffect, useRef } from "react";

export default function Page() {
  const isMobile = useMobileDetect();
  const iframeRef = useRef();

  useEffect(() => {
    const adjustIframeHeight = () => {
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.style.height =
          iframe.contentWindow.document.body.scrollHeight + "px";
      }
    };
    iframeRef.current.addEventListener("load", adjustIframeHeight);
  }, []);

  return (
    <div>
      <iframe
        width={"100%"}
        frameBorder="0"
        scrolling="no"
        ref={iframeRef}
        src={
          isMobile
            ? "/src/html/page-contents/mobile/rg-membership/membership_03_refund_policy.html"
            : "/src/html/page-contents/pc/rg-membership/membership_03_refund_policy.html"
        }
        style={{
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
