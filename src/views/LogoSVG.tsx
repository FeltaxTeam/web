import React from 'react';

export default function LogoSVG(props: { size: number, strokeWidth: number }) {
  return (
    <>
      <React.Fragment>
        <svg xmlns="http://www.w3.org/2000/svg"
          width={props.size} height={props.size} viewBox="0 0 2200.000000 2150.000000"
          preserveAspectRatio="xMidYMid meet" className='logo'>
          <g transform="translate(0.000000,2160.000000) scale(0.100000,-0.100000)"
            fill="none"
            stroke="white"
            style={{ strokeWidth: props.strokeWidth*100 }}>
            <path d="M10635 21564 c-115 -8 -398 -35 -405 -39 -4 -3 -32 -7 -61 -11 -76 -9 -293 -56 -431 -93 -384 -103 -795 -288 -1121 -503 -32 -21 -62 -38 -67 -38 -5 0 -10 -4 -12 -8 -1 -5 -25 -23 -53 -42 -27 -18 -52 -36 -55 -39 -3 -3 -21 -17 -40 -30 -41 -29 -246 -198 -288 -238 -224 -214 -317 -315 -487 -528 -16 -21 -34 -45 -39 -54 -5 -9 -12 -18 -16 -21 -8 -7 -180 -259 -180 -265 0 -3 -13 -26 -29 -52 -122 -200 -273 -525 -354 -763 -101 -299 -170 -631 -198 -950 -15 -172 -15 -515 0 -690 32 -375 115 -736 250 -1094 118 -312 346 -726 531 -965 196 -254 324 -393 532 -582 63 -58 246 -207 313 -257 19 -14 171 -117 190 -129 218 -136 396 -232 575 -312 89 -39 347 -134 440 -162 36 -10 88 -26 115 -34 124 -36 281 -68 510 -105 33 -5 170 -17 304 -27 232 -16 255 -16 492 0 136 10 274 22 306 27 241 39 385 69 508 105 28 8 79 24 115 34 93 28 351 123 440 162 179 80 357 176 575 312 198 123 445 323 652 526 91 89 195 206 287 321 42 52 80 100 86 107 38 45 168 241 238 358 169 283 315 614 396 900 10 33 22 71 26 85 23 63 83 356 109 525 45 300 45 797 0 1100 -49 327 -131 642 -231 895 -60 151 -72 178 -144 326 -101 206 -285 510 -378 625 -12 14 -32 40 -46 59 -55 73 -137 170 -221 261 -77 84 -129 136 -261 262 -42 40 -247 209 -288 238 -19 13 -37 27 -40 30 -3 3 -27 21 -55 39 -27 19 -51 37 -53 42 -2 4 -9 8 -15 8 -6 0 -18 6 -26 14 -67 59 -476 279 -666 358 -282 117 -698 235 -924 262 -29 4 -57 8 -61 11 -31 19 -594 48 -745 39z" />
            <path d="M 5800 11718 c -267 -12 -485 -47 -760 -122 c -82 -22 -158 -47 -312 -102 c -130 -47 -401 -183 -563 -283 c -273 -167 -557 -410 -775 -661 c -36 -41 -68 -77 -71 -80 c -19 -16 -259 -355 -259 -365 c 0 -2 -24 -44 -53 -92 c -201 -334 -367 -818 -427 -1243 c -50 -360 -34 -817 41 -1150 c 12 -52 25 -111 29 -130 c 18 -88 102 -349 150 -465 c 124 -306 316 -628 527 -885 c 84 -102 736 -759 2645 -2667 c 1393 -1392 2549 -2546 2570 -2565 c 188 -172 487 -373 748 -503 c 337 -169 743 -289 1135 -337 c 147 -18 635 -17 775 0 c 311 40 610 116 880 225 c 115 46 354 161 416 199 c 21 14 66 40 99 58 c 33 18 62 36 65 39 c 3 3 43 32 90 63 c 47 32 128 91 180 133 c 95 75 5271 5237 5375 5360 c 147 173 300 410 416 647 c 317 642 420 1318 313 2053 c -8 55 -19 118 -24 140 c -5 22 -19 81 -30 130 c -23 98 -22 95 -81 275 c -245 753 -769 1414 -1450 1831 c -224 137 -491 262 -719 335 c -41 13 -89 29 -106 34 c -96 31 -315 78 -505 109 c -227 37 -663 38 -917 1 c -160 -23 -396 -71 -479 -98 c -32 -11 -92 -29 -133 -42 c -273 -82 -685 -291 -935 -473 c -207 -151 -319 -259 -1559 -1497 l -1289 -1287 l -1247 1246 c -685 686 -1291 1285 -1346 1332 c -136 117 -319 255 -415 314 c -383 232 -794 396 -1169 465 c -144 27 -347 51 -474 56 c -78 3 -154 6 -171 7 c -16 2 -100 -1 -185 -5 z M 10807 8303 L 13208 5998 C 14702 4663 16584 4413 17912 5745" />
          </g>
        </svg>
      </React.Fragment>
    </>
  );
}