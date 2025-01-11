import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(
  ({ theme, width, backgroundColor, color, border }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
      backgroundColor: backgroundColor || "rgba(0, 0, 0, 0.6)",
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
      backgroundColor: backgroundColor || "rgba(0, 0, 0, 0.6)",
    },
    "& .MuiPaper-root": {
      backgroundColor: backgroundColor || "rgba(0, 0, 0, 0.6)",
      color: color || "#ffffff",
      width: width || "100%",
      maxWidth: "900px",
      height: "auto",
      borderRadius: "10px",
      border: border,
    },
  })
);

export default function CustomizedDialogs({
  open,
  onClose,
  title,
  children,
  width,
  backgroundColor,
  color,
  border,
  fontSize,
}) {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={onClose}
        open={open}
        width={width}
        backgroundColor={backgroundColor}
        color={color}
        border={border}
        fontSize={fontSize}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 8,
            textAlign: "center",
            fontSize: fontSize || "36px",
            fontWeight: "bold",
          }}
          id="customized-dialog-title"
        >
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>{children}</DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
