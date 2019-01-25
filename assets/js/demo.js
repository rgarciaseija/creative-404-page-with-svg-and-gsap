/**
 * demo.js
 * https://coidea.website
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, COIDEA
 * https://coidea.website
 */

var flickerFire = 1;

function flicker() {
  
  if (!flickerFire) return false;
  TweenMax.to(".filtered, .coidea-error-demo", 2, {
    className: "+=glowing",
    opacity: 1,
    ease: RoughEase.ease.config({
      template: Power0.easeNone, // Power4.easeOut
      strength: 2,
      points: 20,
      taper: "none",
      randomize: true,
      clamp: true
    }),
    repeat: 1,
    yoyo: true,
    onComplete: flicker
  });
};

flicker();