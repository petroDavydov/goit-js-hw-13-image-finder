import * as PNotifyMobile from "@pnotify/mobile/";
import { defaultModules } from "@pnotify/core";
import * as PNotifyAnimate from "@pnotify/animate";
defaultModules.set(PNotifyMobile, {});

export default {
  errorWrong: {
    type: "error",
    title: "Error",
    text: "Something go wrong!",
    delay: 2000,
    destroy: true,
    animateSpeed: "slow",
    modules: new Map([
      ...defaultModules,
      [
        PNotifyAnimate,
        {
          inClass: "flipInX",
          outClass: "flipOutX",
        },
      ],
    ]),
  },

  infoSymbol: {
    type: "info",
    tytle: "Info for You",
    text: "Enter more symbols...",
    delay: 2000,
    destroy: true,
    animateSpeed: "slow",
    modules: new Map([
      ...defaultModules,
      [
        PNotifyAnimate,
        {
          inClass: "flipInX",
          outClass: "flipOutX",
        },
      ],
    ]),
  },

  alertNothingFind: {
    type: "notice",
    title: "Nothing Find",
    text: "We can't find enithing",
    delay: 2000,
    destroy: true,
    animateSpeed: "slow",
    modules: new Map([
      ...defaultModules,
      [
        PNotifyAnimate,
        {
          inClass: "flipInX",
          outClass: "flipOutX",
        },
      ],
    ]),
  },

  successWatch: {
    type: "success",
    tytle: "Very Good!",
    text: "Lets watch...",
    delay: 2000,
    destroy: true,
    animateSpeed: "slow",
    modules: new Map([
      ...defaultModules,
      [
        PNotifyAnimate,
        {
          inClass: "flipInX",
          outClass: "flipOutX",
        },
      ],
    ]),
  },
};
