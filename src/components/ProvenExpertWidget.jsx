import { useEffect } from "react";

const ProvenExpertWidget = () => {
  useEffect(() => {
    const loadProSeal = () => {
      window.provenExpert?.proSeal({
        widgetId: "76510760-02a4-40d5-b211-290460297b22",
        language: "de-DE",
        usePageLanguage: false,
        bannerColor: "#0DB1CD",
        textColor: "#FFFFFF",
        showBackPage: true,
        showReviews: true,
        hideDate: true,
        hideName: false,
        googleStars: true,
        displayReviewerLastName: false,
        embeddedSelector: "#proSealWidget",
      });
    };

    const script = document.createElement("script");
    script.src = "https://s.provenexpert.net/seals/proseal-v2.js";
    script.async = true;
    script.onload = loadProSeal;
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <noscript>
        <a
          href="https://www.provenexpert.com/confias-ai-solutions-gmbh/?utm_source=seals&utm_campaign=embedded-proseal&utm_medium=profile&utm_content=76510760-02a4-40d5-b211-290460297b22"
          target="_blank"
          rel="noopener noreferrer"
          className="pe-pro-seal-more-infos"
        >
          More info
        </a>
      </noscript>
      <div id="proSealWidget" />
    </div>
  );
};

export default ProvenExpertWidget;
