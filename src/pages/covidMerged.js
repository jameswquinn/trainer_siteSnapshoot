
coverVid = (elem) => {
 
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
};

coverVid(document.querySelector(".masthead-video"));

/*

    //(navigator.connection.effectiveType === "2g")
    const elem = document.querySelector("#intro__bg-video");
    const imgSrc = elem.getAttribute("poster");

    // Remove video if connection is cellular
    if (isMobile) {
      // Remove src & replace with data-src attribute
      
      elem.parentNode && elem.parentNode.removeChild(elem);

      const elemImg = document.querySelector(".video-header");
      delay.elemImg.style.background = `black url(${imgSrc}) no-repeat center`;
      elemImg.style.backgroundSize = `cover`;
    } else {
      //document.querySelector("#intro__bg-video").play();
    }

    */