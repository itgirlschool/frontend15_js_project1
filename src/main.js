// если пользователь залогинен, то показываем page presenter
// логин в данных условиях - сохраненная запись в local storage 
// если не залогинен, то показываем login presenter

import { render, RenderPosition } from "./utils/render";

import { LoginPresenter } from "./presenters/login-presenter";

const userData = localStorage.getItem('habit-tracker');

const loginPresenter = new LoginPresenter();

if (userData) {
    // render page presenter
} else {
    // render login presenter
    loginPresenter.init()
}