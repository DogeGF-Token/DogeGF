import * as React from "react";
import Dialog from "@mui/material/Dialog";

export interface DialogProps {
  open: boolean;
  handleClose: (open: boolean) => void;
  children?: React.ReactNode;
  maxWidth?: any;
}

const BaseModal: React.FC<DialogProps> = ({
  open,
  handleClose,
  children,
  maxWidth,
}) => (
  <Dialog
    open={open}
    maxWidth={maxWidth ? maxWidth : "md"}
    onClose={handleClose}
    keepMounted
  >
    {children}
  </Dialog>
);

export default BaseModal;
