import { useEffect } from "react";

const ElfsightReviews = () => {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    // Script nur einmal einbinden
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-8">
      <div
        className="elfsight-app-163355e7-5eb0-401e-98b1-4b08d0be52c4"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default ElfsightReviews;
