"use client";

import { Button, Margin, Modal } from "@/components/common/common-components";
import { useMobileDetect } from "@/components/util";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const isMobile = useMobileDetect();

  const [viewModal, _viewModal] = useState(false);
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
            ? "/src/html/page-contents/mobile/rg-membership/membership_01_info.html"
            : "/src/html/page-contents/pc/rg-membership/membership_01_info.html"
        }
        style={{
          backgroundColor: "transparent",
          overflow: "hidden",
        }}
      />
      <Margin height={20} />
      <div style={{ width: isMobile ? "100%" : "300px", margin: "auto" }}>
        <Button
          shadow
          onClick={() => {
            viewModal ? _viewModal(false) : _viewModal(true);
          }}
        >
          자세히 보기
        </Button>
      </div>
      {isMobile ? <></> : <Margin height={50} />}
      {viewModal && (
        <Modal
          header={true}
          title={""}
          compact={false}
          onClickDelete={() => {
            _viewModal(false);
          }}
          onClickLightbox={() => {
            _viewModal(false);
          }}
        >
          <iframe
            width={"100%"}
            frameBorder="0"
            scrolling="no"
            src={
              isMobile
                ? "/src/html/page-contents/mobile/rg-membership/membership_pop01.html"
                : "/src/html/page-contents/pc/rg-membership/membership_pop01.html"
            }
            style={{
              borderRadius: 15,
              backgroundColor: "transparent",
              overflow: "hidden",
              height: "73vh",
            }}
          />
          <Margin height={20} />
          <div style={{ width: "300px", margin: "auto" }}>
            <Button
              shadow
              onClick={() => {
                window.open(
                  "https://www.readinggate.com/Payment/Price",
                  "_blank"
                );
              }}
            >
              구매하러 가기
            </Button>
          </div>
          <Margin height={30} />
        </Modal>
      )}
    </div>
  );
}
