import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (pageHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress((scrollTop / pageHeight) * 100);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;
