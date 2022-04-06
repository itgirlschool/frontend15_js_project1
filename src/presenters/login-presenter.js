import { LoginView } from "../views/login-view";
import { render, RenderPosition } from "../utils/render";

export class LoginPresenter {
    constructor() {
        this._loginView = new LoginView();


        this._handleLoginBtnClick = this._handleLoginBtnClick.bind(this);
    }

    init() {
        const element = this._loginView.getElement();
        render(element, RenderPosition.AFTERBEGIN);
        this._loginView.setLoginBtnClickHandler(this._handleLoginBtnClick)

    }

    _handleLoginBtnClick() {
        // 
    }
}