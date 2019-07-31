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


    const elem = document.querySelector(".masthead-video")

      // Set necessary styles to position video "center center"
      elem.style.width = "100%";
      elem.style.height = "100%";
      elem.style.objectFit = "cover";
      elem.style.objectPosition = "center";

      // Get image defined on poster attribute of video
      const posterImage = elem.getAttribute("poster");

      // Remove poster to disable
      elem.removeAttribute("poster");

      // Set poster image as a background cover image on parent element
      elem.parentNode.style.background = `black url(${posterImage}) no-repeat center`;
      elem.parentNode.style.backgroundSize = "cover";

      // Check for video support
      let supportsVideo = typeof elem.canPlayType != "undefined" ? true : false;

      // Check if mobile
      let isMobile = false;
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        isMobile = true;
      }

      // Remove video if not supported or mobile
      if (!supportsVideo || isMobile) {
        elem && elem.parentNode && elem.parentNode.removeChild(elem);
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
        <section class="video-header">
          <video class="masthead-video" autoplay loop muted poster={require("../img/TOT-blog-.jpg").src}>
            <source src={require("../video/intro2.mp4")} type="video/mp4"></source>
          </video>
          <div class="viewport-header">
            <div id="cta-wrapper">
              <div class="home-title">
                <h1>hello</h1>
              </div>

            </div>
            <div data-opacity="100" class="masthead-arrow"></div>
          </div>
        </section>
          <div>
          <h3>Exercise where you want, when you want. Get healthier, stronger and more confident.</h3>
          <p>Let’s face it, getting in shape can be hard.</p>
          <p>Our PTs will create and deliver personalized 1-2-1 workouts, we will show you what to do, and support you every step of the way!</p>
          </div>
      </main>
    );
  }
}
