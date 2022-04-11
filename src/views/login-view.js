const renderLoginView = () => {
    return `<section class="login-page" id="login-page">
            <form class="login-page__form">
            <p class="login-page__form-title">Sign up to save your progress</p>

            <input type="email" class="login-page__form-input-email" id="login-page__form-input-email" name="email"
            placeholder="Email Address" pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            required>

            <input type="password" class="login-page__form-input-passwoord" id="login-page__form-input-passwoord"
                name="password" placeholder="Password" minlength="8" required>
            <label for="password" class="input-password__label">8+ characters, 1 upercase and 1 number</label>

            <button type="submit" class="login-page__form-button">Continue</button>
        </form>
        </section>`
}

export class LoginView {
    constructor() {

    }

    getElement() {
        return renderLoginView()
    }


    setLoginBtnClickHandler(callback) {
        document.querySelector(`.login-page__form-button`).addEventListener(`click`, callback);
    }
}