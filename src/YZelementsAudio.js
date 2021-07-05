import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

export const Z = ({ iref, animatedStyle }) => {
  return (
    <animated.polyline
      ref={iref}
      style={animatedStyle}
      points="193.923,447.303 193.923,243.142 493.996,243.142 493.996,164.457 351.475,215.072 193.923,215.072 193.923,152.255 606.077,5.88235 606.077,356.134 304.913,356.134 304.913,368.846 493.252,436.267 493.252,383.318 606.077,383.318 606.077,594.118 193.923,447.303 "
    />
  );
};
export const ZA = ({ iref, animatedStyle }) => {
  return (
    <animated.polyline
      ref={iref}
      style={animatedStyle}
      points="604.832,384.563 604.832,592.352 195.168,446.425 195.168,244.387 495.241,244.387 495.241,162.693 351.26,213.827 195.168,213.827 195.168,153.134 604.832,7.64576 604.832,354.889 303.668,354.889 303.668,369.723 494.497,438.036 494.497,384.563 604.832,384.563 "
    />
  );
};

export const SplitterBottom = ({ iref, animatedStyle }) => {
  return (
    <animated.polyline
      ref={iref}
      style={animatedStyle}
      points="792.157,248.224 778.61,261.515 764.613,274.33 750.183,286.655 735.336,298.476 720.091,309.777 704.465,320.546 688.477,330.77 672.146,340.437 655.491,349.535 638.533,358.053 621.291,365.982 603.785,373.311 586.038,380.032 568.069,386.138 549.901,391.62 531.554,396.473 513.051,400.69 494.414,404.267 475.664,407.199 456.825,409.483 437.917,411.116 418.965,412.096 399.99,412.422 381.016,412.094 362.064,411.111 343.157,409.476 324.317,407.19 305.568,404.256 286.931,400.677 268.428,396.457 250.082,391.603 231.914,386.118 213.947,380.011 196.2,373.287 178.696,365.956 161.455,358.025 144.497,349.505 127.844,340.405 111.514,330.737 95.5268,320.511 79.902,309.74 64.6579,298.437 49.8125,286.615 35.3836,274.288 21.3883,261.47 7.84314,248.178 177.967,187.578 177.967,187.578 191.129,196.178 204.625,204.246 218.431,211.769 232.527,218.735 246.889,225.133 261.495,230.954 276.322,236.187 291.345,240.824 306.542,244.858 321.887,248.283 337.357,251.092 352.927,253.283 368.572,254.85 384.267,255.792 399.986,256.107 415.706,255.795 431.401,254.856 447.046,253.291 462.616,251.104 478.087,248.297 493.433,244.875 508.63,240.844 523.655,236.209 538.483,230.979 553.09,225.161 567.453,218.766 581.55,211.802 595.358,204.282 608.855,196.216 622.019,187.619 792.157,248.224 "
    />
  );
};
export const SplitterBottomA = ({ iref, animatedStyle }) => {
  return (
    <animated.polyline
      ref={iref}
      style={animatedStyle}
      points="622.274,189.612 788.901,248.967 788.901,248.967 775.42,262.061 761.498,274.685 747.152,286.825 732.399,298.467 717.255,309.597 701.739,320.201 685.869,330.267 669.663,339.784 653.141,348.741 636.322,357.126 619.225,364.929 601.871,372.143 584.281,378.758 566.474,384.767 548.471,390.162 530.294,394.937 511.965,399.087 493.504,402.606 474.933,405.491 456.274,407.738 437.55,409.345 418.781,410.309 399.99,410.63 381.2,410.307 362.431,409.341 343.707,407.732 325.048,405.482 306.478,402.595 288.017,399.074 269.688,394.922 251.512,390.144 233.51,384.747 215.704,378.736 198.114,372.119 180.761,364.904 163.665,357.098 146.847,348.711 130.326,339.753 114.121,330.234 98.2522,320.165 82.7375,309.559 67.5952,298.428 52.8431,286.785 38.4985,274.643 24.5782,262.017 11.0986,248.921 177.711,189.571 177.711,189.571 191.363,198.434 205.367,206.728 219.701,214.439 234.339,221.555 249.258,228.062 264.431,233.951 279.834,239.211 295.44,243.833 311.223,247.81 327.156,251.134 343.213,253.801 359.365,255.806 375.586,257.144 391.848,257.815 408.125,257.816 424.387,257.149 440.608,255.813 456.761,253.812 472.818,251.148 488.751,247.826 504.535,243.852 520.142,239.233 535.546,233.976 550.72,228.09 565.64,221.585 580.28,214.472 594.615,206.764 608.621,198.472 622.274,189.612 "
    />
  );
};
export const SplitterTop = ({ iref, animatedStyle }) => {
  return (
    <animated.polyline
      ref={iref}
      style={animatedStyle}
      points="7.84314,351.378 21.416,338.137 35.4357,325.37 49.8857,313.092 64.7488,301.317 80.0076,290.06 95.6441,279.334 111.64,269.151 127.976,259.524 144.633,250.463 161.591,241.98 178.831,234.084 196.331,226.785 214.073,220.092 232.033,214.011 250.192,208.552 268.528,203.719 287.018,199.519 305.643,195.956 324.378,193.035 343.203,190.76 362.095,189.132 381.031,188.154 399.99,187.827 418.95,188.152 437.886,189.128 456.778,190.753 475.603,193.026 494.339,195.945 512.964,199.505 531.455,203.703 549.791,208.534 567.951,213.992 585.912,220.07 603.654,226.761 621.156,234.058 638.396,241.952 655.356,250.433 672.014,259.492 688.351,269.118 704.348,279.299 719.985,290.023 735.245,301.278 750.11,313.051 764.561,325.327 778.582,338.093 792.157,351.332 620.958,412.132 620.958,412.132 607.369,403.368 593.432,395.168 579.172,387.545 564.612,380.511 549.776,374.079 534.689,368.259 519.378,363.061 503.866,358.494 488.18,354.565 472.347,351.281 456.393,348.648 440.344,346.669 424.228,345.349 408.071,344.689 391.901,344.69 375.745,345.353 359.629,346.677 343.581,348.658 327.627,351.294 311.794,354.581 296.11,358.513 280.599,363.083 265.288,368.283 250.202,374.106 235.368,380.541 220.809,387.577 206.55,395.204 192.615,403.406 179.027,412.173 7.84314,351.378 "
    />
  );
};
export const SplitterTopA = ({ iref, animatedStyle }) => {
  return (
    <animated.polyline
      ref={iref}
      style={animatedStyle}
      points="178.775,410.176 192.392,401.434 206.353,393.254 220.636,385.65 235.217,378.634 250.071,372.218 265.175,366.413 280.503,361.228 296.03,356.672 311.729,352.753 327.575,349.476 343.541,346.848 359.601,344.873 375.728,343.554 391.896,342.893 408.077,342.891 424.245,343.549 440.372,344.865 456.432,346.838 472.399,349.463 488.246,352.736 503.946,356.653 519.473,361.206 534.802,366.388 549.907,372.191 564.763,378.604 579.345,385.617 593.629,393.219 607.592,401.396 621.21,410.136 788.88,350.589 788.88,350.589 775.372,337.546 761.427,324.972 747.061,312.882 732.291,301.288 717.134,290.205 701.607,279.646 685.729,269.623 669.518,260.148 652.994,251.231 636.174,242.883 619.08,235.114 601.73,227.933 584.146,221.348 566.347,215.367 548.355,209.997 530.189,205.244 511.872,201.114 493.425,197.611 474.869,194.739 456.226,192.503 437.517,190.904 418.765,189.944 399.99,189.624 381.216,189.946 362.464,190.908 343.755,192.509 325.112,194.748 306.557,197.622 288.11,201.127 269.793,205.259 251.629,210.015 233.637,215.387 215.838,221.37 198.255,227.957 180.906,235.14 163.813,242.911 146.994,251.261 130.471,260.179 114.261,269.657 98.3845,279.682 82.859,290.243 67.703,301.327 52.9341,312.922 38.5694,325.015 24.6257,337.591 11.1193,350.635 178.775,410.176 "
    />
  );
};


export const Y = ({ iref, animatedStyle }) => {
  return (
    <animated.polyline
      ref={iref}
      style={animatedStyle}
      points="194.409,355.41 194.409,5.88235 347.148,60.1261 347.148,179.371 306.061,163.425 306.061,242.471 494.896,242.471 494.896,230.293 453.489,216.622 453.489,97.8922 605.733,151.96 605.733,447.548 194.267,594.118 194.267,435.541 305.088,394.86 305.088,436.415 494.896,366.738 494.896,355.41 194.409,355.41 "
    />
  );
};

export const YA = ({ iref, animatedStyle }) => {
  return (
    <animated.polyline
      ref={iref}
      style={animatedStyle}
      points="496.143,367.609 496.143,354.162 195.656,354.162 195.656,7.64899 345.901,61.0068 345.901,177.549 304.814,161.603 304.814,243.718 496.143,243.718 496.143,229.392 454.737,215.72 454.737,99.6589 604.485,152.841 604.485,446.668 195.515,592.349 195.515,436.412 303.841,396.646 303.841,438.201 496.143,367.609 "
    />
  );
};
export const YZelementsAudio = ({toggleB = false, audio}) => {
  const [lengthY, setLengthY] = useState(null);
  const [lengthZ, setLengthZ] = useState(null);
  const [lengthTop, setLengthTop] = useState(null);
  const [lengthBottom, setLengthBottom] = useState(null);
  
  const [toggle, setToggle] = useState(false);
  const [audioState, setAudioState] = useState(30);
  // const color = "url(#gradient) var(--sub-bg-color)";
  

  const animatedYStyle = useSpring({
    strokeDasharray: lengthY,
    strokeDashoffset: lengthY,
    strokeWidth: 2,
  });
  const animatedZStyle = useSpring({
    strokeDasharray: lengthZ,
    strokeDashoffset: lengthZ,
    strokeWidth: 2,
  });
  const animatedTopStyle = useSpring({
    strokeDasharray: lengthTop,
    strokeDashoffset: lengthTop,
    strokeWidth: 2,
  });
  const animatedBottomStyle = useSpring({
    strokeDasharray: lengthBottom,
    strokeDashoffset: lengthBottom,
    strokeWidth: 2,
    // delay: 200
  });




  const animatedFillStyle = useSpring({
    // we do *not* animating this property, we just set it up
    fill: "url(#gradient) var(--sub-bg-color)",
    opacity: 1,
    strokeDasharray: 0,
    strokeDashoffset: 0,
    strokeWidth: 2,
    // delay: 3000,
    // mass: 200,
  });
  const animatedRingFillStyle = useSpring({
    // we do *not* animating this property, we just set it up
    fill: "url(#gradient2) var(--sub-bg-color)",
    strokeDasharray: 0,
    strokeDashoffset: 0,
    strokeWidth: 2,
    // delay: 3000,
    // mass: 200,
  });
  


  useEffect(() => {

    if (((audio.reduce((a, b) => a + b, 0)/audio.length)/2.55) !== audioState && typeof (audio.reduce((a, b) => a + b, 0)/audio.length) === 'number') {
      setAudioState(((audio.reduce((a, b) => a + b, 0)/audio.length)/2.55 - 50)*30 + 60)
    }
    
  }, [(audio.reduce((a, b) => a + b, 0)/audio.length)]);

  useEffect(() => {
    // console.log(toggle, lengthY);
    setImmediate(() => {
      if (!toggle) {
        setToggle(true);
      }
    });

    // console.log(toggle, lengthY);
  }, [lengthY, toggle]);

  return (
    <svg
      viewBox="370 79 500 805"
      width="600"
      height="500"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      fillRule="evenodd"
    >
      <defs>
        <clipPath id="clipId0">
          <path d="M0,600 800,600 800,0 0,0 z" />
        </clipPath>
        <linearGradient id="gradient" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-stop)" />
          <stop offset={`${parseInt(audioState)}%`} stopColor="var(--color-stop)" />
          <stop offset="100%" stopColor="var(--color-bot)" />
        </linearGradient>
        <linearGradient id="gradient2" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-bot)" />
          <stop offset={`${50 - parseInt(audioState)}%`} stopColor="var(--color-stop)" />
          <stop offset={`${50 + parseInt(audioState)}%`} stopColor="var(--color-stop)" />
          <stop offset="100%" stopColor="var(--color-bot)" />
        </linearGradient>
      </defs>
      <g
        // className={"gradient-bg"}
        transform="translate(0,180)"
        delay={2000}
        clipPath="url(#clipId0)"
        fill="none"
        stroke="#fff"
        strokeWidth="0.25"
      >
        <Y
          animatedStyle={animatedYStyle}
          iref={(ref) => {
            if (ref) {
              setLengthY(ref.getTotalLength());
            }
          }}
        />
        <YA
          animatedStyle={animatedFillStyle}
          iref={(ref) => {
            if (ref) {
              // setLengthY(ref.getTotalLength());
            }
          }}
        />
      </g>
      <g
        transform="translate(290,-70), scale(0.8,0.8)"
        delay={2000}
        clipPath="url(#clipId0)"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
      >
        <SplitterTop
          animatedStyle={animatedTopStyle}
          iref={(ref) => {
            if (ref) {
              setLengthTop(ref.getTotalLength());
            }
          }}
        />
        <SplitterTopA
          animatedStyle={animatedRingFillStyle}
          iref={(ref) => {
            if (ref) {
              // setLengthY(ref.getTotalLength());
            }
          }}
        />
      </g>
      <g
        // className={"gradient-bg"}
        transform="translate(425,180)"
        delay={2000}
        clipPath="url(#clipId0)"
        fill="none"
        stroke="#fff"
        strokeWidth="0.25"
      >
        <Z
          animatedStyle={animatedZStyle}
          iref={(ref) => {
            if (ref) {
              setLengthZ(ref.getTotalLength());
            }
          }}
        />
        <ZA
          animatedStyle={animatedFillStyle}
          iref={(ref) => {
            if (ref) {
              setLengthY(ref.getTotalLength());
            }
          }}
        />
      </g>
      <g
        transform="translate(295,550), scale(0.8,0.8)"
        clipPath="url(#clipId0)"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
      >
      <SplitterBottom
        animatedStyle={animatedBottomStyle}
        iref={(ref) => {
          if (ref) {
            setLengthBottom(ref.getTotalLength());
          }
        }}
      />
        <SplitterBottomA
          animatedStyle={animatedRingFillStyle}
          iref={(ref) => {
            if (ref) {
              // setLengthY(ref.getTotalLength());
            }
          }}
        />
      </g>
    </svg>
  );
};
