import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";

const useTooltip = (title: string) => {
  const [tooltipTitle, setTitle] = useState(title);

  useEffect(() => {
    const tooltipContent = document.getElementById("tooltipContent");

    if (tooltipContent) {
      new bootstrap.Tooltip(tooltipContent, {
        title: tooltipTitle,
        placement: "top",
      });
    }
  }, [tooltipTitle]);

  return [setTitle] as const;
};

export default useTooltip;
