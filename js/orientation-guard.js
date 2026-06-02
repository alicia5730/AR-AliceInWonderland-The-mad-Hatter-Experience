(function () {
  const OVERLAY_ID = "orientation-guard-overlay";
  const STYLE_ID = "orientation-guard-style";

  function isProbablyPhoneOrTablet() {
    const ua = navigator.userAgent.toLowerCase();
    const mobileUA = /android|iphone|ipad|ipod|mobile|tablet/.test(ua);

    const touch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    const smallScreen = Math.min(window.innerWidth, window.innerHeight) <= 950;

    return mobileUA || (touch && smallScreen) || smallScreen;
  }

  function isPortrait() {
    return window.innerHeight > window.innerWidth;
  }

  function shouldBlockGame() {
    return isProbablyPhoneOrTablet() && isPortrait();
  }

  function addStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      #${OVERLAY_ID} {
        position: fixed;
        inset: 0;
        z-index: 2147483647;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 28px;
        background:
          radial-gradient(circle at center, rgba(79,31,122,0.98), rgba(18,13,18,0.99)),
          #120d12;
        color: #fff6e8;
        font-family: Georgia, "Times New Roman", serif;
        text-align: center;
        pointer-events: auto;
      }

      #${OVERLAY_ID}.show {
        display: flex;
      }

      #${OVERLAY_ID} .orientation-card {
        width: min(430px, 92vw);
        padding: 34px 26px;
        border-radius: 28px;
        background: rgba(255,255,255,0.12);
        border: 1px solid rgba(255,255,255,0.22);
        box-shadow: 0 24px 90px rgba(0,0,0,0.45);
        backdrop-filter: blur(14px);
      }

      #${OVERLAY_ID} .phone-icon {
        width: 88px;
        height: 136px;
        margin: 0 auto 24px;
        border: 5px solid #ffd56a;
        border-radius: 24px;
        position: relative;
        box-shadow:
          0 0 24px rgba(255,213,106,0.8),
          inset 0 0 16px rgba(255,213,106,0.2);
        animation: rotatePhoneHint 1.9s ease-in-out infinite;
      }

      #${OVERLAY_ID} .phone-icon::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 10px;
        width: 12px;
        height: 12px;
        transform: translateX(-50%);
        border-radius: 50%;
        background: #ffd56a;
      }

      #${OVERLAY_ID} h1 {
        margin: 0 0 12px;
        font-size: clamp(2rem, 8vw, 3rem);
        font-weight: 400;
      }

      #${OVERLAY_ID} p {
        margin: 0;
        font-size: clamp(1rem, 4vw, 1.25rem);
        line-height: 1.45;
        color: rgba(255,246,232,0.92);
      }

      @keyframes rotatePhoneHint {
        0%, 100% {
          transform: rotate(0deg);
        }
        45%, 65% {
          transform: rotate(90deg);
        }
      }
    `;
    document.head.appendChild(style);
  }

  function addOverlay() {
    let overlay = document.getElementById(OVERLAY_ID);
    if (overlay) return overlay;

    overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    overlay.innerHTML = `
      <div class="orientation-card">
        <div class="phone-icon" aria-hidden="true"></div>
        <h1>Rotate your device</h1>
        <p>Please turn your phone or tablet sideways to start the game.</p>
      </div>
    `;

    document.body.appendChild(overlay);
    return overlay;
  }

  function updateOrientationGuard() {
    addStyle();
    const overlay = addOverlay();

    if (shouldBlockGame()) {
      overlay.classList.add("show");
    } else {
      overlay.classList.remove("show");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateOrientationGuard);
  } else {
    updateOrientationGuard();
  }

  window.addEventListener("resize", updateOrientationGuard);
  window.addEventListener("orientationchange", function () {
    setTimeout(updateOrientationGuard, 250);
  });
})();