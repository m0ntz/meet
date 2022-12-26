import React from "react";
import "./WelcomeScreen.css";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <div className="log-in">
        <h1 id="welcome-headline">Welcome to Meet App</h1>
        <h4 id="welcome-text">
          Log in to see upcoming events around the world for full-stack
          developers
        </h4>
        <div className="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button
              onClick={() => {
                props.getAccessToken();
              }}
              rel="nofollow noopener"
              class="btn-text"
            >
              <b>Sign in with Google</b>
            </button>
          </div>
        </div>
        <a
          href="https://m0ntz.github.io/meet/privacy.html"
          rel="nofollow noopener"
          className="policy-link"
        >
          Privacy policy
        </a>
      </div>
    </div>
  ) : null;
}
export default WelcomeScreen;
