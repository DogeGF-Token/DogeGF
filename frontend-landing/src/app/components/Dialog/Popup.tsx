import { useState } from "react";
import BaseModal from ".";
import Box from "@mui/material/Box";
import PopupImage from "../../../assets/images/pop-up.jpg";
import CloseIcon from "@mui/icons-material/Close";

const Popup = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  return (
    <BaseModal
      maxWidth="sm"
      handleClose={() => setModalOpen(false)}
      open={modalOpen}
    >
      <Box
        onClick={() => setModalOpen(false)}
        sx={{ position: "absolute", top: 0, right: 0 }}
      >
        <CloseIcon sx={{ color: "white", cursor: "pointer" }} />
      </Box>
      <img src={PopupImage} alt="popup" />
      <Box
        sx={{
          px: 4,
          py: 2,
          background: "#F5F7FE",
          color: "#375D83",
          fontFamily: "Lato",
        }}
      >
        <p>
          $DOGEGF is now available for trading on the Polygon network where
          there are lower transactions fees. For purchasing on the Polygon
          network follow the steps from this{" "}
          <a
            href="https://dogegf.medium.com/we-are-happy-to-announce-that-dogegf-is-now-available-to-trade-on-polygon-network-c853c394a72a"
            target="_blank"
            rel="noreferrer"
          >
            article
          </a>
          . For purchasing on the Ethereum network go to the how to buy section
          on our website.
        </p>
      </Box>
    </BaseModal>
  );
};

export default Popup;
