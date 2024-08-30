/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let convertedNoun = noun.map(domainHackNoun);
// let extension = [".com", ".net", ".us", ".io"];
let extension = noun.map(domainHackExtension);

function domainHackExtension(noun) {
  return "." + noun.slice(noun.length - 3);
}

function domainHackNoun(noun) {
  return noun.slice(0, -3);
}

window.onload = function() {
  //write your code here
  let domainNames = "";
  // for (let e = 0; e < extension.length; e++) {
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < convertedNoun.length; n++) {
        // for (let n = 0; n < noun.length; n++) {
        // domainNames +="<li>" + pronoun[p] + adj[a] + noun[n] + extension[e] + "</li>";
        domainNames +=
          "<li>" +
          pronoun[p] +
          adj[a] +
          convertedNoun[n] +
          extension[n] +
          "</li>";
      }
    }
    // }
  }
  console.log(domainNames);

  document.getElementById("domain-names").innerHTML = domainNames;
};
