{\rtf1\ansi\ansicpg950\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // App.jsx - \uc0\u28639 \u24030 \u23798 \u26997 \u31777 \u26053 \u31243 \u35215 \u21123 \u22120 \
\
// \uc0\u20351 \u29992  React Hook \u24341 \u20837  useState \u36914 \u34892 \u29376 \u24907 \u31649 \u29702 \
const \{ useState, useEffect \} = React;\
\
// \uc0\u21021 \u22987 \u30340 \u26053 \u31243 \u36039 \u26009 \
const initialItinerary = [\
  \{ id: 1, day: 1, location: "\uc0\u28639 \u24030 \u22283 \u38555 \u27231 \u22580  (Jeju International Airport)", notes: "\u31199 \u36554 \u65292 \u21069 \u24448 \u28639 \u24030 \u24066 \u21312 \u37202 \u24215 " \},\
  \{ id: 2, day: 1, location: "\uc0\u26481 \u38272 \u24066 \u22580 ", notes: "\u21697 \u22160 \u40657 \u35948 \u32905 \u20018 \u21644 \u30070 \u22320 \u23567 \u21507 " \},\
  \{ id: 3, day: 2, location: "\uc0\u22478 \u23665 \u26085 \u20986 \u23792  (Seongsan Ilchulbong)", notes: "\u28165 \u26216 \u29228 \u23665 \u35264 \u26085 \u20986 " \},\
  \{ id: 4, day: 2, location: "\uc0\u28041 \u22320 \u23724  (Seopjikoji)", notes: "\u28023 \u23736 \u25955 \u27493 \u33287 \u29128 \u22612 " \},\
  \{ id: 5, day: 3, location: "\uc0\u28450 \u25295 \u23665  (Hallasan National Park)", notes: "\u36984 \u25799 Eorimok\u25110 Seongpanak\u36335 \u32218 " \},\
  \{ id: 6, day: 3, location: "\uc0\u35199 \u27512 \u28006 \u27599 \u26085 \u20598 \u20358 \u24066 \u22580 ", notes: "\u26202 \u39184 \u21450 \u36092 \u29289 " \},\
];\
\
const App = () => \{\
  // \uc0\u20351 \u29992  useState \u20786 \u23384 \u26053 \u31243 \u36039 \u26009 \
  const [itinerary, setItinerary] = useState(initialItinerary);\
  const [newLocation, setNewLocation] = useState('');\
  const [newDay, setNewDay] = useState(1);\
  const [newNotes, setNewNotes] = useState('');\
  const [nextId, setNextId] = useState(initialItinerary.length + 1);\
\
  // \uc0\u34389 \u29702 \u26032 \u22686 \u34892 \u31243 \
  const handleAddItem = (e) => \{\
    e.preventDefault();\
    if (!newLocation.trim()) return;\
\
    const newItem = \{\
      id: nextId,\
      day: parseInt(newDay),\
      location: newLocation.trim(),\
      notes: newNotes.trim()\
    \};\
    \
    setItinerary([...itinerary, newItem].sort((a, b) => a.day - b.day));\
    setNextId(nextId + 1);\
    \
    // \uc0\u37325 \u35373 \u34920 \u21934 \
    setNewLocation('');\
    setNewNotes('');\
    setNewDay(1);\
  \};\
\
  // \uc0\u34389 \u29702 \u21034 \u38500 \u34892 \u31243 \
  const handleDeleteItem = (id) => \{\
    setItinerary(itinerary.filter(item => item.id !== id));\
  \};\
\
  // \uc0\u26681 \u25818 \u22825 \u25976 \u20998 \u32068 \u34892 \u31243 \
  const groupedItinerary = itinerary.reduce((acc, item) => \{\
    (acc[item.day] = acc[item.day] || []).push(item);\
    return acc;\
  \}, \{\});\
\
  // \uc0\u21462 \u24471 \u24050 \u35215 \u21123 \u30340 \u32317 \u22825 \u25976 \
  const days = Object.keys(groupedItinerary).map(Number).sort((a, b) => a - b);\
\
  return (\
    <div className="bg-white shadow-xl rounded-xl p-6 space-y-8">\
      <h1 className="text-4xl font-extrabold text-blue-800 border-b-4 border-blue-200 pb-3 mb-6">\
        \uc0\u55356 \u57140  \u28639 \u24030 \u23798 \u26997 \u31777 \u26053 \u31243 \u35215 \u21123 \
      </h1>\
      \
      \{/* 1. \uc0\u26032 \u22686 \u34892 \u31243 \u34920 \u21934  */\}\
      <div className="border border-gray-200 p-4 rounded-lg bg-blue-50">\
        <h2 className="text-xl font-semibold text-blue-700 mb-4">\uc0\u26032 \u22686 \u34892 \u31243 \u38917 \u30446 </h2>\
        <form onSubmit=\{handleAddItem\} className="space-y-4">\
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">\
            <input\
              type="number"\
              min="1"\
              value=\{newDay\}\
              onChange=\{(e) => setNewDay(e.target.value)\}\
              placeholder="\uc0\u22825 \u25976  (Day)"\
              required\
              className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"\
            />\
            <input\
              type="text"\
              value=\{newLocation\}\
              onChange=\{(e) => setNewLocation(e.target.value)\}\
              placeholder="\uc0\u22320 \u40670 \u21517 \u31281  (Location)"\
              required\
              className="col-span-1 sm:col-span-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"\
            />\
          </div>\
          <input\
            type="text"\
            value=\{newNotes\}\
            onChange=\{(e) => setNewNotes(e.target.value)\}\
            placeholder="\uc0\u20633 \u35387 /\u27963 \u21205  (Notes/Activity)"\
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"\
          />\
          <button\
            type="submit"\
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"\
          >\
            + \uc0\u21152 \u20837 \u34892 \u31243 \
          </button>\
        </form>\
      </div>\
\
      \{/* 2. \uc0\u34892 \u31243 \u39023 \u31034 \u21312 \u22495  */\}\
      <div className="space-y-6">\
        <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t-2 border-gray-100">\uc0\u25105 \u30340 \u23436 \u25972 \u34892 \u31243 </h2>\
        \
        \{days.length === 0 ? (\
          <p className="text-gray-500 italic p-4 bg-gray-100 rounded-lg text-center">\uc0\u30446 \u21069 \u27794 \u26377 \u20219 \u20309 \u34892 \u31243 \u65292 \u35531 \u26032 \u22686 \u31532 \u19968 \u31558 \u65281 </p>\
        ) : (\
          days.map(day => (\
            <div key=\{day\} className="bg-white border border-gray-300 rounded-xl shadow-lg">\
              \{/* \uc0\u22825 \u25976 \u27161 \u38988  */\}\
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-xl">\
                <h3 className="text-xl font-extrabold">\uc0\u31532  \{day\} \u22825  (Day \{day\}) \u9728 \u65039 </h3>\
              </div>\
              \
              \{/* \uc0\u34892 \u31243 \u21015 \u34920  */\}\
              <ul className="divide-y divide-gray-200">\
                \{groupedItinerary[day].map(item => (\
                  <li key=\{item.id\} className="p-4 flex justify-between items-start hover:bg-green-50 transition duration-150">\
                    <div className="flex-1 min-w-0 pr-4">\
                      <p className="text-lg font-semibold text-gray-800">\{item.location\}</p>\
                      \{item.notes && (\
                        <p className="text-sm text-gray-600 truncate italic">\uc0\u20633 \u35387 \u65306 \{item.notes\}</p>\
                      )\}\
                    </div>\
                    <button\
                      onClick=\{() => handleDeleteItem(item.id)\}\
                      className="flex-shrink-0 bg-red-100 text-red-600 hover:bg-red-200 text-sm font-medium py-1 px-3 rounded-full transition duration-150"\
                    >\
                      \uc0\u21034 \u38500 \
                    </button>\
                  </li>\
                ))\}\
              </ul>\
            </div>\
          ))\
        )\}\
      </div>\
    </div>\
  );\
\};\
\
// \uc0\u24517 \u38920 \u25918 \u22312 \u20840 \u22495 \u35722 \u25976 \u65292 \u20197 \u20415  main.js \u35370 \u21839 \
window.App = App;}