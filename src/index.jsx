/** @jsx h */
import { h, Component, render } from "preact";
import { Router } from "preact-router";
import { Link } from "preact-router/match";
import AsyncRoute from "preact-async-route";

import "./global.css";
import "./base.css";
import "./header.css";
import "./cta.css";

import Home from "./pages/home";

const NODE = document.body.querySelector("#root");
let new_scroll_position = 0;

class Navbar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document
      .querySelector(".branding__logo")
      .classList.add("branding__logo-alt");
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const NAV_NODE = document.querySelector("#masthead");
    let last_scroll_position = window.scrollY;
    if (
      new_scroll_position < last_scroll_position &&
      last_scroll_position > 50
    ) {
      NAV_NODE.classList.remove("isvisible");
      new_scroll_position = window.scrollY;
    } else if (new_scroll_position > last_scroll_position) {
      NAV_NODE.classList.add("isvisible");
    }
    new_scroll_position = last_scroll_position;
  };

  vibrateOnClick() {
    return navigator.vibrate(100);
  }

  render() {
    return (
      <div>
        <div id="masthead">
          <a aria-label="tel 2345" onClick={this.vibrateOnClick} href="tel:2345">
            <svg class="phone__logo" viewBox="0 0 26 32">
              <path d="M14.157 3.123c2.227 0 4.301 0.87 5.888 2.432 1.562 1.562 2.432 3.686 2.432 5.862 0 0.64 0.512 1.152 1.152 1.152 0 0 0 0 0 0 0.64 0 1.152-0.512 1.152-1.152 0.026-2.79-1.101-5.53-3.098-7.526-2.022-1.946-4.685-3.072-7.526-3.072-0.64 0-1.152 0.512-1.152 1.152s0.512 1.152 1.152 1.152z" />
              <path d="M14.157 7.552c1.050 0 2.022 0.41 2.765 1.152s1.152 1.715 1.152 2.765c0 0.64 0.512 1.152 1.152 1.152s1.152-0.512 1.152-1.152c0-1.664-0.64-3.226-1.818-4.403s-2.739-1.818-4.403-1.818c-0.64 0-1.152 0.512-1.152 1.152s0.512 1.152 1.152 1.152z" />
              <path d="M24.064 18.304l-4.966-2.56c-0.691-0.358-1.562-0.179-2.048 0.435l-1.818 2.33c-1.766-0.947-3.123-1.869-4.685-3.43-1.664-1.664-2.56-3.046-3.482-4.762l2.304-1.792c0.614-0.486 0.819-1.357 0.435-2.048l-2.534-4.941c-0.461-0.87-1.562-1.152-2.355-0.614l-3.174 2.099c-0.717 0.486-1.126 1.331-1.075 2.202 0.051 0.896 0.179 2.022 0.384 2.816 0.922 3.533 3.123 7.194 6.221 10.291 3.098 3.123 6.758 5.325 10.291 6.246 0.794 0.205 1.92 0.307 2.842 0.384 0.896 0.051 1.741-0.384 2.227-1.126l2.048-3.2c0.538-0.819 0.23-1.894-0.614-2.33z" />
            </svg>
          </a>

          <svg class="branding__logo" viewBox="0 0 112 32">
            <path
              transform="matrix(.65,0,0,.65,35,10.5)"
              d="M58.81 24.734v-8.806l-1.145-0.133c-0.15-0.034-0.269-0.085-0.358-0.153-0.089-0.075-0.133-0.181-0.133-0.317v-0.747h1.636v-0.573c0-0.634 0.099-1.214 0.297-1.739 0.198-0.532 0.494-0.989 0.89-1.37s0.886-0.678 1.473-0.89c0.593-0.211 1.278-0.317 2.056-0.317 0.259 0 0.525 0.017 0.798 0.051s0.508 0.085 0.706 0.153l-0.072 0.951c-0.007 0.068-0.034 0.116-0.082 0.143-0.041 0.027-0.099 0.044-0.174 0.051s-0.17 0.010-0.286 0.010c-0.109-0.007-0.235-0.010-0.378-0.010-1.214 0-2.093 0.252-2.639 0.757-0.545 0.498-0.818 1.251-0.818 2.26v0.522h6.259v10.156h-1.831v-8.836h-4.377v8.836h-1.82zM71.977 24.898c-0.818 0-1.449-0.228-1.892-0.685-0.436-0.457-0.654-1.115-0.654-1.974v-6.341h-1.248c-0.109 0-0.201-0.031-0.276-0.092-0.075-0.068-0.112-0.17-0.112-0.307v-0.726l1.698-0.215 0.419-3.201c0.020-0.102 0.065-0.184 0.133-0.245 0.075-0.068 0.17-0.102 0.286-0.102h0.92v3.569h2.997v1.319h-2.997v6.218c0 0.436 0.106 0.76 0.317 0.972s0.484 0.317 0.818 0.317c0.191 0 0.355-0.024 0.491-0.072 0.143-0.055 0.266-0.113 0.368-0.174s0.188-0.116 0.256-0.164c0.075-0.055 0.14-0.082 0.194-0.082 0.095 0 0.181 0.058 0.256 0.174l0.532 0.869c-0.314 0.293-0.692 0.525-1.135 0.695-0.443 0.164-0.9 0.246-1.37 0.246zM75.105 24.734v-10.36h1.094c0.259 0 0.419 0.126 0.481 0.378l0.143 1.125c0.45-0.498 0.955-0.9 1.514-1.207s1.203-0.46 1.933-0.46c0.566 0 1.064 0.095 1.493 0.286 0.436 0.184 0.798 0.45 1.084 0.798 0.293 0.341 0.515 0.753 0.665 1.238s0.225 1.019 0.225 1.606v6.596h-1.831v-6.596c0-0.784-0.181-1.391-0.542-1.82-0.355-0.436-0.897-0.655-1.626-0.655-0.545 0-1.053 0.13-1.524 0.389-0.464 0.259-0.89 0.61-1.278 1.053v7.629h-1.831zM89.732 14.211c0.621 0 1.193 0.106 1.718 0.317 0.532 0.204 0.989 0.505 1.371 0.9 0.388 0.389 0.692 0.873 0.91 1.452 0.218 0.573 0.327 1.227 0.327 1.964 0 0.286-0.031 0.477-0.092 0.573s-0.178 0.143-0.347 0.143h-6.924c0.014 0.655 0.102 1.224 0.266 1.708s0.389 0.89 0.675 1.217c0.286 0.32 0.627 0.563 1.023 0.726 0.395 0.157 0.839 0.235 1.329 0.235 0.457 0 0.849-0.051 1.176-0.153 0.334-0.109 0.621-0.225 0.86-0.348s0.436-0.235 0.593-0.337c0.164-0.109 0.304-0.164 0.419-0.164 0.15 0 0.266 0.058 0.348 0.174l0.511 0.665c-0.224 0.273-0.494 0.511-0.808 0.716-0.314 0.198-0.651 0.361-1.012 0.491-0.355 0.13-0.723 0.225-1.105 0.286-0.382 0.068-0.76 0.102-1.135 0.102-0.716 0-1.377-0.119-1.984-0.358-0.6-0.245-1.122-0.6-1.565-1.064-0.436-0.47-0.777-1.050-1.023-1.739s-0.368-1.479-0.368-2.373c0-0.723 0.109-1.398 0.327-2.025 0.225-0.627 0.545-1.169 0.961-1.626 0.416-0.464 0.924-0.825 1.524-1.084 0.6-0.266 1.275-0.399 2.025-0.399zM89.773 15.55c-0.879 0-1.572 0.256-2.076 0.767-0.505 0.505-0.818 1.207-0.941 2.107h5.666c0-0.423-0.061-0.808-0.184-1.156-0.116-0.354-0.29-0.658-0.521-0.91-0.225-0.259-0.501-0.457-0.828-0.593-0.327-0.143-0.699-0.215-1.115-0.215zM101.305 16.082c-0.081 0.15-0.208 0.225-0.378 0.225-0.102 0-0.218-0.038-0.347-0.113s-0.29-0.157-0.48-0.246c-0.184-0.095-0.406-0.181-0.666-0.256-0.259-0.082-0.565-0.123-0.92-0.123-0.307 0-0.583 0.041-0.829 0.123-0.245 0.075-0.457 0.181-0.634 0.317-0.17 0.136-0.304 0.297-0.399 0.481-0.088 0.177-0.133 0.372-0.133 0.583 0 0.266 0.076 0.487 0.225 0.665 0.157 0.177 0.362 0.331 0.614 0.46s0.539 0.245 0.86 0.348c0.32 0.095 0.647 0.201 0.981 0.317 0.341 0.109 0.672 0.232 0.993 0.368s0.606 0.307 0.859 0.511c0.253 0.204 0.453 0.457 0.604 0.757 0.157 0.293 0.235 0.648 0.235 1.064 0 0.477-0.086 0.92-0.256 1.33-0.17 0.402-0.422 0.753-0.757 1.053-0.334 0.293-0.743 0.525-1.227 0.695s-1.043 0.256-1.677 0.256c-0.722 0-1.377-0.116-1.964-0.348-0.586-0.239-1.084-0.542-1.492-0.91l0.429-0.696c0.055-0.089 0.119-0.157 0.194-0.204s0.17-0.072 0.286-0.072c0.123 0 0.253 0.048 0.388 0.143s0.3 0.201 0.491 0.317c0.198 0.116 0.436 0.222 0.716 0.317s0.627 0.143 1.043 0.143c0.355 0 0.665-0.044 0.931-0.133 0.266-0.095 0.488-0.222 0.665-0.378s0.307-0.337 0.389-0.542c0.088-0.204 0.132-0.423 0.132-0.654 0-0.286-0.078-0.522-0.235-0.706-0.15-0.191-0.351-0.351-0.604-0.481-0.252-0.136-0.542-0.252-0.869-0.348-0.321-0.102-0.651-0.208-0.992-0.317-0.335-0.109-0.665-0.232-0.992-0.368-0.321-0.143-0.607-0.32-0.86-0.532s-0.457-0.47-0.614-0.777c-0.15-0.314-0.224-0.692-0.224-1.135 0-0.395 0.081-0.774 0.245-1.135 0.163-0.368 0.402-0.689 0.716-0.961 0.314-0.28 0.699-0.501 1.156-0.665s0.978-0.245 1.564-0.245c0.682 0 1.292 0.109 1.831 0.327 0.545 0.211 1.016 0.505 1.411 0.88l-0.409 0.665zM109.132 16.082c-0.082 0.15-0.209 0.225-0.378 0.225-0.103 0-0.219-0.038-0.348-0.113s-0.29-0.157-0.48-0.246c-0.184-0.095-0.406-0.181-0.665-0.256-0.259-0.082-0.566-0.123-0.921-0.123-0.306 0-0.583 0.041-0.829 0.123-0.245 0.075-0.457 0.181-0.634 0.317-0.17 0.136-0.304 0.297-0.399 0.481-0.088 0.177-0.132 0.372-0.132 0.583 0 0.266 0.075 0.487 0.224 0.665 0.157 0.177 0.362 0.331 0.614 0.46s0.538 0.245 0.859 0.348c0.32 0.095 0.647 0.201 0.982 0.317 0.341 0.109 0.671 0.232 0.992 0.368s0.606 0.307 0.859 0.511c0.253 0.204 0.453 0.457 0.604 0.757 0.157 0.293 0.235 0.648 0.235 1.064 0 0.477-0.085 0.92-0.255 1.33-0.17 0.402-0.423 0.753-0.758 1.053-0.334 0.293-0.743 0.525-1.227 0.695s-1.043 0.256-1.677 0.256c-0.723 0-1.378-0.116-1.964-0.348-0.586-0.239-1.084-0.542-1.493-0.91l0.429-0.696c0.055-0.089 0.119-0.157 0.194-0.204s0.17-0.072 0.286-0.072c0.123 0 0.253 0.048 0.389 0.143s0.3 0.201 0.49 0.317c0.198 0.116 0.437 0.222 0.716 0.317s0.627 0.143 1.044 0.143c0.354 0 0.665-0.044 0.93-0.133 0.266-0.095 0.488-0.222 0.666-0.378s0.306-0.337 0.388-0.542c0.088-0.204 0.133-0.423 0.133-0.654 0-0.286-0.078-0.522-0.235-0.706-0.15-0.191-0.352-0.351-0.604-0.481-0.253-0.136-0.542-0.252-0.87-0.348-0.32-0.102-0.651-0.208-0.992-0.317-0.334-0.109-0.665-0.232-0.992-0.368-0.321-0.143-0.607-0.32-0.859-0.532s-0.457-0.47-0.614-0.777c-0.15-0.314-0.225-0.692-0.225-1.135 0-0.395 0.082-0.774 0.245-1.135 0.164-0.368 0.402-0.689 0.716-0.961 0.314-0.28 0.699-0.501 1.156-0.665s0.978-0.245 1.564-0.245c0.682 0 1.292 0.109 1.831 0.327 0.546 0.211 1.017 0.505 1.411 0.88l-0.408 0.665z"
            />
            <path
              transform="matrix(.62,0,0,.62,72,0)"
              d="M11.382 21.818c0.428 0 0.782 0.14 1.062 0.42 0.296 0.263 0.444 0.609 0.444 1.037 0 0.412-0.148 0.757-0.444 1.037-0.28 0.263-0.634 0.395-1.062 0.395h-8.024c-0.428 0-0.79-0.14-1.086-0.42-0.28-0.296-0.42-0.658-0.42-1.086v-14.271c0-0.428 0.148-0.782 0.444-1.062 0.296-0.296 0.675-0.444 1.136-0.444 0.411 0 0.765 0.148 1.062 0.444 0.296 0.28 0.444 0.634 0.444 1.062v12.889h6.444zM18.185 7.423c1.547 0 2.872 0.387 3.975 1.16 1.119 0.757 1.967 1.794 2.543 3.111 0.593 1.3 0.889 2.757 0.889 4.37s-0.296 3.078-0.889 4.395c-0.576 1.3-1.424 2.337-2.543 3.111-1.103 0.757-2.428 1.136-3.975 1.136h-5.901c-0.428 0-0.79-0.14-1.086-0.42-0.28-0.296-0.42-0.658-0.42-1.086v-14.271c0-0.428 0.14-0.782 0.42-1.062 0.296-0.296 0.658-0.444 1.086-0.444h5.901zM17.938 21.867c1.481 0 2.593-0.543 3.333-1.63 0.741-1.103 1.111-2.494 1.111-4.173s-0.379-3.062-1.136-4.148c-0.741-1.103-1.844-1.654-3.309-1.654h-4.074v11.605h4.074zM36.601 7.423c0.395 0 0.716 0.132 0.963 0.395s0.37 0.593 0.37 0.988v14.395c0 0.428-0.148 0.79-0.444 1.086-0.28 0.28-0.634 0.42-1.062 0.42-0.23 0-0.461-0.033-0.691-0.099-0.214-0.082-0.37-0.189-0.469-0.321l-9.061-11.506v10.543c0 0.395-0.132 0.724-0.395 0.988-0.247 0.263-0.576 0.395-0.988 0.395-0.395 0-0.716-0.132-0.963-0.395s-0.37-0.593-0.37-0.988v-14.395c0-0.428 0.14-0.782 0.42-1.062 0.296-0.296 0.658-0.444 1.086-0.444 0.247 0 0.486 0.049 0.716 0.148 0.247 0.099 0.428 0.23 0.543 0.395l8.987 11.457v-10.617c0-0.395 0.123-0.724 0.37-0.988 0.263-0.263 0.593-0.395 0.988-0.395z"
            />
            <path
              transform="matrix(.62,0,0,.62,72,0)"
              d="M53.952 24.751h-3.171l-3.171-2.718-3.171 2.718h-3.171c-0.453 0-0.906-0.181-1.178-0.453-0.362-0.362-0.453-0.725-0.453-1.178v-7.157c0-0.453 0.181-0.906 0.453-1.178l0.091-0.091 7.519-6.342 7.61 6.342c0.272 0.272 0.453 0.725 0.453 1.178v7.157c0 0.453-0.181 0.906-0.453 1.178-0.453 0.362-0.906 0.544-1.359 0.544zM51.506 22.849h2.265v-6.795l-6.16-5.164-6.16 5.164v6.795h2.174l3.896-3.261 3.986 3.261z"
            />
          </svg>
        </div>
        <nav className="navigation">
          <Link activeClassName="active" href="/" aria-label="link home">
            <span>
              <svg viewBox="0 0 27 32">
                <path d="M7.68 26.252h0.768v4.224h-0.768v-1.871h-1.835v1.871h-0.768v-4.224h0.768v1.688h1.835v-1.688zM10.086 28.361c0 0.232 0.028 0.443 0.085 0.634 0.057 0.187 0.138 0.347 0.244 0.482 0.11 0.13 0.242 0.232 0.396 0.305s0.329 0.11 0.524 0.11c0.191 0 0.364-0.037 0.518-0.11s0.284-0.175 0.39-0.305c0.11-0.134 0.193-0.295 0.25-0.482 0.057-0.191 0.085-0.402 0.085-0.634s-0.028-0.441-0.085-0.628c-0.057-0.191-0.14-0.351-0.25-0.482-0.106-0.134-0.236-0.238-0.39-0.311s-0.327-0.11-0.518-0.11c-0.195 0-0.37 0.037-0.524 0.11s-0.286 0.177-0.396 0.311c-0.106 0.134-0.187 0.295-0.244 0.482s-0.085 0.396-0.085 0.628zM13.384 28.361c0 0.362-0.055 0.681-0.165 0.957-0.106 0.276-0.252 0.508-0.439 0.695-0.183 0.183-0.398 0.321-0.646 0.414s-0.512 0.14-0.792 0.14c-0.28 0-0.546-0.047-0.798-0.14-0.248-0.093-0.465-0.232-0.652-0.414-0.183-0.187-0.329-0.419-0.439-0.695s-0.165-0.595-0.165-0.957c0-0.362 0.055-0.679 0.165-0.951 0.11-0.276 0.258-0.508 0.445-0.695 0.191-0.187 0.41-0.327 0.658-0.421s0.51-0.14 0.786-0.14c0.276 0 0.538 0.047 0.786 0.14s0.463 0.234 0.646 0.421c0.187 0.187 0.335 0.419 0.445 0.695 0.11 0.272 0.165 0.589 0.165 0.951zM15.146 26.252c0.089 0.154 0.189 0.343 0.299 0.567s0.222 0.459 0.335 0.707c0.114 0.244 0.226 0.494 0.335 0.75 0.114 0.252 0.217 0.486 0.311 0.701 0.093-0.215 0.195-0.449 0.305-0.701 0.11-0.256 0.221-0.506 0.335-0.75 0.114-0.248 0.226-0.484 0.335-0.707s0.209-0.412 0.299-0.567h0.695c0.037 0.309 0.071 0.638 0.104 0.987 0.033 0.345 0.061 0.701 0.085 1.067 0.028 0.362 0.053 0.727 0.073 1.097 0.024 0.366 0.045 0.723 0.061 1.073h-0.756c-0.016-0.492-0.037-0.998-0.061-1.518-0.020-0.52-0.053-1.024-0.098-1.512-0.045 0.093-0.098 0.205-0.158 0.335s-0.126 0.272-0.195 0.427c-0.069 0.15-0.14 0.307-0.213 0.469-0.069 0.163-0.138 0.321-0.207 0.475-0.065 0.15-0.126 0.293-0.183 0.427-0.057 0.13-0.106 0.242-0.146 0.335h-0.573c-0.041-0.093-0.089-0.207-0.146-0.341s-0.12-0.276-0.189-0.427c-0.065-0.154-0.134-0.313-0.207-0.475-0.069-0.163-0.138-0.319-0.207-0.469s-0.134-0.291-0.195-0.421c-0.061-0.134-0.114-0.246-0.158-0.335-0.045 0.488-0.079 0.991-0.104 1.512-0.020 0.52-0.039 1.026-0.055 1.518h-0.756c0.016-0.349 0.034-0.711 0.055-1.085 0.024-0.374 0.049-0.744 0.073-1.109 0.028-0.37 0.059-0.727 0.091-1.073s0.067-0.664 0.104-0.957h0.713zM19.613 30.476v-4.224h2.712v0.652h-1.944v1.042h1.731v0.64h-1.731v1.237h2.091v0.652h-2.859z" />
                <path d="M23.167 24.381h-4.794l-4.794-4.041-4.794 4.041h-4.794c-0.685 0-1.37-0.269-1.781-0.674-0.547-0.538-0.685-1.078-0.685-1.751v-10.641c0-0.673 0.274-1.347 0.685-1.751l0.138-0.135 11.368-9.429 11.506 9.429c0.411 0.404 0.685 1.078 0.685 1.751v10.641c0 0.674-0.274 1.347-0.685 1.751-0.685 0.538-1.37 0.809-2.055 0.809h0.002zM19.469 21.553h3.424v-10.102l-9.313-7.678-9.313 7.678v10.102h3.287l5.89-4.848 6.025 4.848z" />
              </svg>
            </span>
            <span />
          </Link>
          <Link activeClassName="active" href="/about" aria-label="link about">
            <svg viewBox="0 0 27 32">
              <path d="M13.714 3.252c-1.308 0-2.571 0.22-3.755 0.654-1.112 0.408-2.103 0.985-2.943 1.714-1.576 1.367-2.445 3.125-2.445 4.95 0 1.024 0.267 2.017 0.792 2.951 0.542 0.963 1.357 1.844 2.357 2.547 0.723 0.508 1.209 1.32 1.337 2.234 0.043 0.305 0.069 0.612 0.080 0.918 0.178-0.158 0.351-0.326 0.521-0.507 0.575-0.614 1.352-0.953 2.155-0.953 0.128 0 0.256 0.009 0.385 0.026 0.499 0.067 1.010 0.102 1.516 0.102 1.308 0 2.571-0.22 3.755-0.654 1.112-0.408 2.103-0.985 2.943-1.714 1.576-1.367 2.445-3.125 2.445-4.95s-0.869-3.583-2.445-4.95c-0.841-0.729-1.832-1.306-2.943-1.714-1.183-0.434-2.446-0.654-3.755-0.654l0.001-0.001zM13.714 0c6.733 0 12.19 4.732 12.19 10.57s-5.458 10.57-12.19 10.57c-0.647 0-1.282-0.044-1.901-0.128-2.619 2.794-5.744 3.295-8.766 3.369v-0.684c1.632-0.853 3.048-2.408 3.048-4.183 0-0.248-0.018-0.491-0.052-0.729-2.757-1.938-4.52-4.898-4.52-8.215 0-5.838 5.458-10.57 12.19-10.57v0z" />
              <path d="M6.357 30.476c-0.057-0.167-0.116-0.331-0.177-0.494s-0.12-0.329-0.177-0.5h-1.78c-0.057 0.171-0.116 0.339-0.177 0.506-0.057 0.163-0.114 0.325-0.171 0.488h-0.798c0.158-0.451 0.309-0.868 0.451-1.25s0.28-0.744 0.414-1.085c0.138-0.341 0.274-0.666 0.408-0.975s0.272-0.614 0.414-0.914h0.725c0.142 0.301 0.28 0.605 0.414 0.914s0.268 0.634 0.402 0.975c0.138 0.341 0.278 0.703 0.421 1.085 0.146 0.382 0.299 0.798 0.457 1.25h-0.829zM5.114 27.069c-0.093 0.215-0.201 0.477-0.323 0.786-0.118 0.309-0.242 0.644-0.372 1.006h1.39c-0.13-0.362-0.256-0.699-0.378-1.012s-0.228-0.573-0.317-0.78zM8.994 30.525c-0.223 0-0.449-0.008-0.677-0.024-0.228-0.012-0.427-0.041-0.597-0.085v-4.102c0.089-0.016 0.185-0.030 0.286-0.043 0.102-0.016 0.205-0.028 0.311-0.037s0.209-0.014 0.311-0.018c0.106-0.004 0.205-0.006 0.299-0.006 0.256 0 0.494 0.020 0.713 0.061 0.219 0.037 0.408 0.1 0.567 0.189 0.162 0.089 0.288 0.207 0.378 0.354s0.134 0.327 0.134 0.542c0 0.199-0.049 0.37-0.146 0.512-0.093 0.142-0.225 0.256-0.396 0.341 0.256 0.085 0.445 0.211 0.567 0.378s0.183 0.378 0.183 0.634c0 0.435-0.158 0.762-0.475 0.981-0.317 0.215-0.803 0.323-1.457 0.323zM8.476 28.574v1.286c0.085 0.008 0.177 0.014 0.274 0.018s0.187 0.006 0.268 0.006c0.159 0 0.305-0.010 0.439-0.030 0.138-0.020 0.256-0.055 0.354-0.104 0.102-0.053 0.181-0.122 0.238-0.207 0.061-0.085 0.091-0.195 0.091-0.329 0-0.24-0.087-0.406-0.262-0.5s-0.417-0.14-0.725-0.14h-0.677zM8.476 27.971h0.542c0.293 0 0.522-0.041 0.689-0.122 0.167-0.085 0.25-0.236 0.25-0.451 0-0.203-0.087-0.347-0.262-0.433-0.171-0.085-0.394-0.128-0.671-0.128-0.118 0-0.223 0.002-0.317 0.006-0.089 0.004-0.167 0.010-0.232 0.018v1.109zM12.354 28.361c0 0.232 0.028 0.443 0.085 0.634 0.057 0.187 0.138 0.347 0.244 0.482 0.11 0.13 0.242 0.232 0.396 0.305s0.329 0.11 0.524 0.11c0.191 0 0.364-0.037 0.518-0.11s0.284-0.175 0.39-0.305c0.11-0.134 0.193-0.295 0.25-0.482 0.057-0.191 0.085-0.402 0.085-0.634s-0.028-0.441-0.085-0.628c-0.057-0.191-0.14-0.351-0.25-0.482-0.106-0.134-0.236-0.238-0.39-0.311s-0.327-0.11-0.518-0.11c-0.195 0-0.37 0.037-0.524 0.11s-0.286 0.177-0.396 0.311c-0.106 0.134-0.187 0.295-0.244 0.482s-0.085 0.396-0.085 0.628zM15.652 28.361c0 0.362-0.055 0.681-0.165 0.957-0.106 0.276-0.252 0.508-0.439 0.695-0.183 0.183-0.398 0.321-0.646 0.414s-0.512 0.14-0.792 0.14-0.547-0.047-0.798-0.14c-0.248-0.093-0.465-0.232-0.652-0.414-0.183-0.187-0.329-0.419-0.439-0.695s-0.165-0.595-0.165-0.957c0-0.362 0.055-0.679 0.165-0.951 0.11-0.276 0.258-0.508 0.445-0.695 0.191-0.187 0.41-0.327 0.658-0.421s0.51-0.14 0.786-0.14c0.276 0 0.538 0.047 0.786 0.14s0.463 0.234 0.646 0.421c0.187 0.187 0.335 0.419 0.445 0.695 0.11 0.272 0.165 0.589 0.165 0.951zM18.121 30.568c-0.289 0-0.536-0.041-0.744-0.122-0.207-0.085-0.38-0.203-0.518-0.354-0.134-0.15-0.234-0.327-0.299-0.53s-0.098-0.427-0.098-0.67v-2.639h0.774v2.566c0 0.191 0.020 0.356 0.061 0.494 0.045 0.134 0.106 0.244 0.183 0.329 0.081 0.085 0.175 0.148 0.28 0.189 0.11 0.041 0.232 0.061 0.366 0.061s0.256-0.020 0.366-0.061c0.11-0.041 0.203-0.104 0.28-0.189 0.081-0.085 0.142-0.195 0.183-0.329 0.045-0.138 0.067-0.303 0.067-0.494v-2.566h0.774v2.639c0 0.244-0.035 0.467-0.104 0.67-0.065 0.203-0.167 0.38-0.305 0.53-0.134 0.15-0.307 0.268-0.518 0.354-0.211 0.081-0.461 0.122-0.75 0.122zM23.724 26.252v0.664h-1.298v3.56h-0.774v-3.56h-1.298v-0.664h3.371z" />
            </svg>
          </Link>
          <Link activeClassName="active"href="/contact"aria-label="link contact">
            <svg viewBox="0 0 27 32">
              <path d="M20.284 10.69c0 0.456 0.37 0.826 0.826 0.826s0.826-0.37 0.826-0.826c0-3.462-2.817-6.28-6.279-6.28-0.456 0-0.826 0.37-0.826 0.826s0.37 0.826 0.826 0.826c2.551 0 4.627 2.076 4.627 4.628v0z" />
              <path d="M15.657 0c-0.456 0-0.826 0.37-0.826 0.826s0.37 0.826 0.826 0.826c4.983 0 9.038 4.055 9.038 9.038 0 0.456 0.37 0.826 0.826 0.826s0.826-0.37 0.826-0.826c0-5.895-4.795-10.69-10.689-10.69h-0.001z" />
              <path d="M7.903 3.57c-0.156-0.156-0.366-0.242-0.584-0.242-0.037 0-0.075 0.002-0.111 0.008-0.256 0.035-0.481 0.187-0.607 0.412-2.582 4.571-1.79 10.359 1.925 14.075 2.217 2.218 5.165 3.439 8.301 3.439h0.001c2.023 0 4.019-0.523 5.771-1.514 0.225-0.127 0.377-0.351 0.412-0.607s-0.052-0.513-0.234-0.696l-14.874-14.875z" />
              <path d="M17.262 9.072c-0.738-0.738-1.784-0.983-2.728-0.738l3.465 3.466c0.245-0.944 0.001-1.99-0.738-2.728z" />
              <path d="M6.84 17.939l-2.623 5.247c-0.128 0.256-0.114 0.56 0.037 0.804s0.416 0.392 0.702 0.392h10.915c0.456 0 0.826-0.37 0.826-0.826v-0.973c-3.44-0.034-6.67-1.388-9.106-3.825-0.264-0.264-0.514-0.537-0.751-0.818v-0.001z" />
              <path d="M2.383 30.568c-0.317 0-0.601-0.049-0.853-0.146s-0.465-0.24-0.64-0.427c-0.175-0.191-0.309-0.423-0.402-0.695s-0.14-0.585-0.14-0.939c0-0.354 0.053-0.666 0.158-0.939 0.11-0.272 0.258-0.502 0.445-0.689 0.187-0.191 0.406-0.335 0.658-0.433s0.522-0.146 0.811-0.146c0.175 0 0.333 0.014 0.475 0.043 0.142 0.024 0.266 0.053 0.372 0.085s0.193 0.067 0.262 0.104c0.069 0.037 0.118 0.063 0.146 0.079l-0.226 0.628c-0.098-0.061-0.238-0.118-0.421-0.171-0.179-0.057-0.374-0.085-0.585-0.085-0.183 0-0.354 0.033-0.512 0.098-0.158 0.061-0.297 0.154-0.414 0.28-0.114 0.126-0.203 0.284-0.268 0.475s-0.098 0.412-0.098 0.664c0 0.223 0.024 0.429 0.073 0.616 0.053 0.187 0.132 0.349 0.238 0.488 0.106 0.134 0.24 0.24 0.402 0.317 0.163 0.073 0.358 0.11 0.585 0.11 0.272 0 0.494-0.026 0.664-0.079 0.171-0.057 0.303-0.11 0.396-0.158l0.207 0.628c-0.049 0.033-0.116 0.065-0.201 0.098-0.081 0.033-0.179 0.065-0.293 0.098-0.114 0.028-0.242 0.051-0.384 0.067-0.142 0.020-0.295 0.030-0.457 0.030zM4.792 28.361c0 0.232 0.028 0.443 0.085 0.634 0.057 0.187 0.138 0.347 0.244 0.482 0.11 0.13 0.242 0.232 0.396 0.305s0.329 0.11 0.524 0.11c0.191 0 0.364-0.037 0.518-0.11s0.284-0.175 0.39-0.305c0.11-0.134 0.193-0.295 0.25-0.482 0.057-0.191 0.085-0.402 0.085-0.634s-0.028-0.441-0.085-0.628c-0.057-0.191-0.14-0.351-0.25-0.482-0.106-0.134-0.236-0.238-0.39-0.311s-0.327-0.11-0.518-0.11c-0.195 0-0.37 0.037-0.524 0.11s-0.286 0.177-0.396 0.311c-0.106 0.134-0.187 0.295-0.244 0.482s-0.085 0.396-0.085 0.628zM8.089 28.361c0 0.362-0.055 0.681-0.165 0.957-0.106 0.276-0.252 0.508-0.439 0.695-0.183 0.183-0.398 0.321-0.646 0.414s-0.512 0.14-0.792 0.14c-0.28 0-0.547-0.047-0.798-0.14-0.248-0.093-0.465-0.232-0.652-0.414-0.183-0.187-0.329-0.419-0.439-0.695s-0.165-0.595-0.165-0.957c0-0.362 0.055-0.679 0.165-0.951 0.11-0.276 0.258-0.508 0.445-0.695 0.191-0.187 0.41-0.327 0.658-0.421s0.51-0.14 0.786-0.14c0.276 0 0.538 0.047 0.786 0.14s0.463 0.234 0.646 0.421c0.187 0.187 0.335 0.419 0.445 0.695 0.11 0.272 0.165 0.589 0.165 0.951zM11.656 30.476c-0.138-0.232-0.293-0.479-0.463-0.744-0.171-0.268-0.347-0.536-0.53-0.805-0.183-0.272-0.37-0.534-0.561-0.786-0.187-0.256-0.366-0.486-0.536-0.689v3.023h-0.756v-4.224h0.628c0.162 0.171 0.337 0.374 0.524 0.61 0.187 0.232 0.374 0.473 0.561 0.725 0.191 0.252 0.374 0.506 0.549 0.762 0.179 0.252 0.337 0.488 0.475 0.707v-2.804h0.762v4.224h-0.652zM16.144 26.252v0.664h-1.298v3.56h-0.774v-3.56h-1.298v-0.664h3.371zM19.066 30.476c-0.057-0.167-0.116-0.331-0.177-0.494s-0.12-0.329-0.177-0.5h-1.78c-0.057 0.171-0.116 0.339-0.177 0.506-0.057 0.163-0.114 0.325-0.171 0.488h-0.798c0.158-0.451 0.309-0.868 0.451-1.25s0.28-0.744 0.414-1.085c0.138-0.341 0.274-0.666 0.408-0.975s0.272-0.614 0.414-0.914h0.725c0.142 0.301 0.28 0.605 0.414 0.914s0.268 0.634 0.402 0.975c0.138 0.341 0.278 0.703 0.421 1.085 0.146 0.382 0.299 0.798 0.457 1.25h-0.829zM17.823 27.069c-0.093 0.215-0.201 0.477-0.323 0.786-0.118 0.309-0.242 0.644-0.372 1.006h1.39c-0.13-0.362-0.256-0.699-0.378-1.012s-0.228-0.573-0.317-0.78zM22.083 30.568c-0.317 0-0.601-0.049-0.853-0.146s-0.465-0.24-0.64-0.427c-0.175-0.191-0.309-0.423-0.402-0.695s-0.14-0.585-0.14-0.939 0.053-0.666 0.158-0.939c0.11-0.272 0.258-0.502 0.445-0.689 0.187-0.191 0.406-0.335 0.658-0.433s0.522-0.146 0.811-0.146c0.175 0 0.333 0.014 0.475 0.043 0.142 0.024 0.266 0.053 0.372 0.085s0.193 0.067 0.262 0.104c0.069 0.037 0.118 0.063 0.146 0.079l-0.226 0.628c-0.098-0.061-0.238-0.118-0.421-0.171-0.179-0.057-0.374-0.085-0.585-0.085-0.183 0-0.354 0.033-0.512 0.098-0.158 0.061-0.297 0.154-0.414 0.28-0.114 0.126-0.203 0.284-0.268 0.475s-0.098 0.412-0.098 0.664c0 0.223 0.024 0.429 0.073 0.616 0.053 0.187 0.132 0.349 0.238 0.488 0.106 0.134 0.24 0.24 0.402 0.317 0.163 0.073 0.358 0.11 0.585 0.11 0.272 0 0.494-0.026 0.664-0.079 0.171-0.057 0.303-0.11 0.396-0.158l0.207 0.628c-0.049 0.033-0.116 0.065-0.201 0.098-0.081 0.033-0.179 0.065-0.293 0.098-0.114 0.028-0.242 0.051-0.384 0.067-0.142 0.020-0.295 0.030-0.457 0.030zM27.004 26.252v0.664h-1.298v3.56h-0.774v-3.56h-1.298v-0.664h3.371z" />
            </svg>
          </Link>
          <Link activeClassName="active" href="/more" aria-label="link more">
            <svg viewBox="0 0 27 32">
              <path d="M6.4 15.086c-1.347 0-2.438-1.125-2.438-2.514s1.091-2.514 2.438-2.514 2.438 1.125 2.438 2.514c0 1.389-1.091 2.514-2.438 2.514zM13.714 15.086c-1.347 0-2.438-1.125-2.438-2.514s1.091-2.514 2.438-2.514 2.438 1.125 2.438 2.514c0 1.389-1.091 2.514-2.438 2.514zM21.029 15.086c-1.347 0-2.438-1.125-2.438-2.514s1.091-2.514 2.438-2.514 2.438 1.125 2.438 2.514c0 1.389-1.091 2.514-2.438 2.514z" />
              <path d="M5.998 26.252c0.089 0.154 0.189 0.343 0.299 0.567s0.221 0.459 0.335 0.707c0.114 0.244 0.226 0.494 0.335 0.75 0.114 0.252 0.217 0.486 0.311 0.701 0.093-0.215 0.195-0.449 0.305-0.701 0.11-0.256 0.221-0.506 0.335-0.75 0.114-0.248 0.226-0.484 0.335-0.707s0.209-0.412 0.299-0.567h0.695c0.037 0.309 0.071 0.638 0.104 0.987 0.033 0.345 0.061 0.701 0.085 1.067 0.028 0.362 0.053 0.727 0.073 1.097 0.024 0.366 0.045 0.723 0.061 1.073h-0.756c-0.016-0.492-0.037-0.998-0.061-1.518-0.020-0.52-0.053-1.024-0.098-1.512-0.045 0.093-0.098 0.205-0.158 0.335s-0.126 0.272-0.195 0.427c-0.069 0.15-0.14 0.307-0.213 0.469-0.069 0.163-0.138 0.321-0.207 0.475-0.065 0.15-0.126 0.293-0.183 0.427-0.057 0.13-0.106 0.242-0.146 0.335h-0.573c-0.041-0.093-0.089-0.207-0.146-0.341s-0.12-0.276-0.189-0.427c-0.065-0.154-0.134-0.313-0.207-0.475-0.069-0.163-0.138-0.319-0.207-0.469s-0.134-0.291-0.195-0.421c-0.061-0.134-0.114-0.246-0.158-0.335-0.045 0.488-0.079 0.991-0.104 1.512-0.020 0.52-0.039 1.026-0.055 1.518h-0.756c0.016-0.349 0.035-0.711 0.055-1.085 0.024-0.374 0.049-0.744 0.073-1.109 0.028-0.37 0.059-0.727 0.091-1.073s0.067-0.664 0.104-0.957h0.713zM11.092 28.361c0 0.232 0.028 0.443 0.085 0.634 0.057 0.187 0.138 0.347 0.244 0.482 0.11 0.13 0.242 0.232 0.396 0.305s0.329 0.11 0.524 0.11c0.191 0 0.364-0.037 0.518-0.11s0.284-0.175 0.39-0.305c0.11-0.134 0.193-0.295 0.25-0.482 0.057-0.191 0.085-0.402 0.085-0.634s-0.028-0.441-0.085-0.628c-0.057-0.191-0.14-0.351-0.25-0.482-0.106-0.134-0.236-0.238-0.39-0.311s-0.327-0.11-0.518-0.11c-0.195 0-0.37 0.037-0.524 0.11s-0.286 0.177-0.396 0.311c-0.106 0.134-0.187 0.295-0.244 0.482s-0.085 0.396-0.085 0.628zM14.39 28.361c0 0.362-0.055 0.681-0.165 0.957-0.106 0.276-0.252 0.508-0.439 0.695-0.183 0.183-0.398 0.321-0.646 0.414s-0.512 0.14-0.792 0.14c-0.28 0-0.546-0.047-0.798-0.14-0.248-0.093-0.465-0.232-0.652-0.414-0.183-0.187-0.329-0.419-0.439-0.695s-0.165-0.595-0.165-0.957c0-0.362 0.055-0.679 0.165-0.951 0.11-0.276 0.258-0.508 0.445-0.695 0.191-0.187 0.41-0.327 0.658-0.421s0.51-0.14 0.786-0.14c0.276 0 0.538 0.047 0.786 0.14s0.463 0.234 0.646 0.421c0.187 0.187 0.335 0.419 0.445 0.695 0.11 0.272 0.165 0.589 0.165 0.951zM16.396 26.21c0.61 0 1.075 0.112 1.396 0.335 0.325 0.223 0.488 0.565 0.488 1.024 0 0.573-0.282 0.961-0.847 1.164 0.077 0.093 0.165 0.207 0.262 0.341s0.197 0.28 0.299 0.439c0.102 0.154 0.199 0.315 0.293 0.482 0.093 0.163 0.177 0.323 0.25 0.482h-0.859c-0.077-0.146-0.16-0.293-0.25-0.439-0.089-0.15-0.181-0.295-0.274-0.433-0.089-0.142-0.179-0.274-0.268-0.396-0.089-0.126-0.173-0.238-0.25-0.335-0.057 0.004-0.106 0.006-0.146 0.006s-0.079 0-0.116 0h-0.372v1.597h-0.768v-4.163c0.187-0.041 0.386-0.067 0.597-0.079 0.211-0.016 0.4-0.024 0.567-0.024zM16.451 26.874c-0.163 0-0.313 0.006-0.451 0.018v1.365h0.335c0.187 0 0.352-0.010 0.494-0.030s0.26-0.057 0.354-0.11c0.098-0.053 0.171-0.124 0.219-0.213s0.073-0.203 0.073-0.341c0-0.13-0.024-0.24-0.073-0.329s-0.12-0.161-0.213-0.213c-0.089-0.053-0.197-0.089-0.323-0.11-0.126-0.024-0.264-0.037-0.414-0.037zM19.131 30.476v-4.224h2.712v0.652h-1.944v1.042h1.731v0.64h-1.731v1.237h2.091v0.652h-2.859z" />
            </svg>
          </Link>
        </nav>
      </div>
    );
  }
}

const App = () => (
  <div id="root">
    <Navbar />
    <Router>
      <Home path="/" />
      <AsyncRoute
        path="/about"
        getComponent={() =>
          import("./pages/about").then(module => module.default)
        }
      />
      <AsyncRoute
        path="/profile/:optional?/:params?"
        getComponent={() =>
          import("./pages/profile").then(module => module.default)
        }
      />
      <AsyncRoute
        path="/contact"
        getComponent={() =>
          import("./pages/contact").then(module => module.default)
        }
      />

      <Error type="404" default />
    </Router>
  </div>
);

/** fall-back route (handles unroutable URLs) */
const Error = ({ type, url }) => (
  <main className="error">
    <h2>Error {type}</h2>
    <p>It looks like we hit a snag.</p>
    <pre>{url}</pre>
  </main>
);

render(<App />, document.body, NODE);
