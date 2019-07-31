/** @jsx h */
import { h, Component } from "preact";
import Helmet from "preact-helmet";
import * as timeago from "timeago.js";
import lozad from "lozad";
import { timeout, delay } from "q";


export default class Home extends Component {
  componentDidMount() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    const observer = lozad(".lazy", {
      loaded: function (el) {
        el.classList.add("is-loaded");
      },
      rootMargin: "10px 0px",
      threshold: 0.4
    });
    observer.observe();

    let isMobile = false;
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
      isMobile = true;
    } 
    //(navigator.connection.effectiveType === "2g")
    const imgSrc = document
      .querySelector("#intro__bg-video")
      .getAttribute("poster");

    // Remove video if connection is cellular
    if (isMobile) {
      // Remove src & replace with data-src attribute
      const elem = document.querySelector("#intro__bg-video");
      elem.parentNode && elem.parentNode.removeChild(elem);

      const elemImg = document.querySelector(".video-header");
      delay.elemImg.style.background = `black url(${imgSrc}) no-repeat center`;
      elemImg.style.backgroundSize = `cover`;
    } else {
      //document.querySelector("#intro__bg-video").play();
    }

    window.addEventListener("scroll", this.handleOpacity);
    window.addEventListener('scroll', this.handleParallax);
    
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleOpacity);
    window.removeEventListener('scroll', this.handleParallax);
  }

  handleParallax = () => {
    const target = document.querySelectorAll('[data-rate]');
    target.forEach(function (element) {
      let pos = window.pageYOffset * element.dataset.rate;
      element.style.transform = 'translate(0, ' + pos + 'px)';
    });
  }

  handleOpacity = () => {
    const target = document.querySelectorAll('[data-opacity]')
    target.forEach(function (element) {
      let pos = parseInt(element.dataset.opacity);
      element.style.opacity = 1 - Math.max(0, window.pageYOffset / pos);
    })
  };

  /*
document.body.style.background = "url('[INSERT HTTPS IMAGE URL HERE]')";
  */

  render() {
    return (
      <main>

        <Helmet title="My Title Hay James" />
        <header class="video-header">
          {/** Single pixel png, black..."data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" */} 
          <video id="intro__bg-video" src={require("../video/intro2.mp4")} autoplay loop playsinline muted poster={require("../img/TOT-blog-.jpg").src}></video>
          <div class="viewport-header">
            <div id="cta-wrapper">
              <div class="home-title">
                <h1>hello</h1>
              </div>
              
            </div>
            <div data-opacity="100" class="masthead-arrow"></div>
          </div>
        </header>
          <div>
          <h3>Exercise where you want, when you want. Get healthier, stronger and more confident.</h3>
          <p>Let’s face it, getting in shape can be hard.</p>
          <p>Our PTs will create and deliver personalized 1-2-1 workouts, we will show you what to do, and support you every step of the way!</p>
          </div>
      </main>
    );
  }
}
