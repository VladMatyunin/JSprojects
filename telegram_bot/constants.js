module.exports = Object.freeze({
  ABOUT_KEY: "About us",
  HOW_TO_FIND_KEY: "How to find us",
  SALES_KEY: "Sales",
  SUB_MENU_KEY: "Menu",

  MY_ACCOUNT_KEY: "my account",
  WANT_DELIVERY_KEY: "want delivery",
  QUESTIONS_KEY: "questions",
  BACK_TO_MAIN_MENU_KEY: "< back",

  ACCOUNT_MY_BONUS_KEY: "my bonus",
  ACCOUNT_QUESTION_KEY: "question",
  ACCOUNT_BACK_TO_SUBMENU_KEY: "< back to menu",

  /*
 *::::::::::::::::::::::::::::::::::::::::::::::::::::
 *  ROUTES
 *::::::::::::::::::::::::::::::::::::::::::::::::::::
 */
  ABOUT_ROUTE: "/main/about",
  HOW_TO_FIND_ROUTE: "/main/find",
  SALES_ROUTE: "/main/sales",
  SUB_MENU_ROUTE: "/main/menu",

  MY_ACCOUNT_ROUTE: "/menu/account",
  WANT_DELIVERY_ROUTE: "/menu/delivery",
  QUESTIONS_ROUTE: "/menu/questions",
  BACK_TO_MAIN_MENU_ROUTE: "/menu/back",

  ACCOUNT_MY_BONUS_ROUTE: "/account/bonus",
  ACCOUNT_QUESTION_ROUTE: "/account/question",
  ACCOUNT_BACK_TO_SUBMENU_ROUTE: "/account/back",


/*
 *::::::::::::::::::::::::::::::::::::::::::::::::::::
 *  KEYBOARDS
 *::::::::::::::::::::::::::::::::::::::::::::::::::::
 */

MAIN_KEYBOARD : {
  reply_markup: JSON.stringify({
    keyboard: [["About us"], ["How to find us"], ["Sales"], ["Menu"]]
  })
},

MENU_KEYBOARD : {
  reply_markup: JSON.stringify({
    keyboard: [["my account"], ["want delivery"], ["questions"], ["< back"]]
  })
},

ACCOUNT_KEYBOARD : {
  reply_markup: JSON.stringify({
    keyboard: [["my bonus"], ["question"], ["< back to menu"]]
  })
}
});