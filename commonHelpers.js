import"./assets/slick-e4875221.js";import{$ as l}from"./assets/vendor-965ca48a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();l(".yachts-slider").slick({variableWidth:!0,slidesToShow:3,dots:!0,arrows:!1,responsive:[{breakpoint:1280,settings:{slidesToShow:2,centerMode:!1}},{breakpoint:768,settings:{slidesToShow:1,centerMode:!1,fade:!0,variableWidth:!1}}]});document.addEventListener("DOMContentLoaded",function(){const i=document.querySelectorAll('a[href^="#"]');for(let o of i)o.addEventListener("click",function(n){n.preventDefault();const r=this.getAttribute("href").substring(1);document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})})});const c=document.getElementById("menuBtn"),d=document.getElementById("mobMenu");c.addEventListener("click",()=>{c.classList.toggle("is-active"),d.classList.toggle("is-open")});
//# sourceMappingURL=commonHelpers.js.map
