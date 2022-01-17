import ScrollToTop from "react-scroll-to-top";
import Box from "@mui/material/Box";

const ScrollToTopButton = () => {
  return (
    <Box className="scroll-to-top">
      <ScrollToTop
        className="btn btn-outline-dark p-0"
        smooth
        component={<i className="bi bi-arrow-up fs-5" />}
      />
    </Box>
  );
};

export default ScrollToTopButton;
