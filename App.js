/**ABOUR PARCEL
 * parcel is HMR, HMR: Hot Module Reload (live chizein change hona)
 * File Watcher algorithm - C++
 * does bundling
 * does minifying of the code
 * cleaning our code
 * does Dev and Production build
 * Super fast build algo
 * Image optimization
 * Caching while development (cache memory me save krleta h and builds quickly)
 * performs compression for quicker results
 * compatilble with older version of browsers
 * it manages port number
 * we should put in Parcel-cache in gitignore
 * Note that : Anything which is auto generated or generated on server is to be put inside gitignore
 */


import React from "react" ;
import ReactDOM from "react-dom/client";


const heading=React.createElement(
    "h1",
    {
        id:"title",
    },
    "Heading 1"
);

const heading2=React.createElement(
    "h2",
    {
        id:"title",
    },
    "Heading 2"

);
const container=React.createElement(
    "div",
    {
        id:"container",
    },
    [heading,heading2]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container)