/** @format */

import { Store } from "react-notifications-component";

export const ShowMsg = ({ title = "", message = "", type = "" }) => {
  Store.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};
