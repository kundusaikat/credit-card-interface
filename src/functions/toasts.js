import { toast } from "react-toastify";

export const popupSuccess = (msg) => {
  toast.success(msg, {
    closeOnClick: true,
    autoClose: 2000,
    draggable: true,
    position:"bottom-center"
  });
};

export const popupError = (msg) => {
  toast.error(msg, {
    closeOnClick: true,
    autoClose: 2000,
    draggable: true,
    position:"bottom-center"
  });
};

export const popupWarning = (msg) => {
  toast.warning(msg, {
    closeOnClick: true,
    autoClose: 2000,
    draggable: true,
    position:"bottom-center"
  });
};
