import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";

const useTooltip = (title: string, elementId: string) => {
  const [tooltipTitle, setTitle] = useState(title);

  useEffect(() => {
    const tooltipContent = document.getElementById(elementId);

    if (tooltipContent) {
      const tooltipInstance = new bootstrap.Tooltip(tooltipContent, {
        title: tooltipTitle,
        placement: "top",
      });

      // Cleanup function to destroy tooltip when unmounting
      return () => {
        tooltipInstance.dispose();
      };
    }
  }, [tooltipTitle, elementId]);

  return [setTitle] as const;
};

export default useTooltip;
