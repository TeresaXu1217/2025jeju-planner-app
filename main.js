{\rtf1\ansi\ansicpg950\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // main.js - \uc0\u36000 \u36012 \u23559  React \u20803 \u20214 \u28210 \u26579 \u21040  DOM \u20013 \
\
// \uc0\u30906 \u20445  React \u21644  ReactDOM \u24050 \u32147 \u36617 \u20837 \
if (typeof React === 'undefined' || typeof ReactDOM === 'undefined' || typeof App === 'undefined') \{\
    console.error("React, ReactDOM, or the App component is missing. Check your index.html script loading order.");\
\} else \{\
    // \uc0\u25214 \u21040  HTML \u20013 \u30340 \u26681 \u20803 \u32032 \
    const container = document.getElementById('root');\
    \
    if (container) \{\
        // \uc0\u20351 \u29992  createRoot \u21109 \u24314  React \u26681 \
        const root = ReactDOM.createRoot(container);\
        \
        // \uc0\u23559  App \u20803 \u20214 \u28210 \u26579 \u21040 \u26681 \u20803 \u32032 \u20013 \
        root.render(\
            // \uc0\u30001 \u26044  App \u20803 \u20214 \u24050 \u32147 \u26159 \u20989 \u25976 \u65292 \u25105 \u20497 \u30452 \u25509 \u20351 \u29992  JSX \u35486 \u27861  <App />\
            React.createElement(App, null) \
        );\
    \} else \{\
        console.error("Cannot find element with id 'root' in the document.");\
    \}\
\}}