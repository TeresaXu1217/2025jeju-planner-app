{\rtf1\ansi\ansicpg950\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState, useEffect, useCallback, useRef \} from 'react';\
import \{ getFirestore, doc, collection, onSnapshot, setDoc, deleteDoc, query, orderBy \} from 'firebase/firestore';\
import \{ initializeApp \} from 'firebase/app';\
import \{ getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged \} from 'firebase/auth';\
import \{ Clock, Navigation, MapPin, Coffee, Utensils, ShoppingBag, TrendingUp, DollarSign, Phone, Plane, Home, User, Info, AlertTriangle, ChevronDown, Plus, Menu, X \} from 'lucide-react';\
\
// --- \uc0\u20840 \u23616 \u35722 \u25976 \u23450 \u32681  (Canvas \u29872 \u22659 \u25552 \u20379 \u25110 \u40664 \u35469 \u20540 ) ---\
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-jeju-planner';\
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;\
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;\
\
// --- \uc0\u21021 \u22987 \u34892 \u31243 \u25976 \u25818  (\u24050 \u26681 \u25818 \u29992 \u25142 \u35201 \u27714 \u20998 \u39006 \u21644 \u32080 \u27083 \u21270 ) ---\
const initialItinerary = [\
    \{ id: 'd1_1', day: 1, type: 'transport', name: '\uc0\u28639 \u24030 \u27231 \u22580 \u21462 \u36554 ', naverId: '', time: '07:00', details: '\u27138 \u22825 \u31199 \u36554 \u65292 \u20986 \u30332 \u21069 \u27880 \u24847 \u29926 \u26031 /\u38651 \u22120 \u12290 ' \},\
    \{ id: 'd1_2', day: 1, type: 'dining', name: '\uc0\u24052 \u40654 \u35997 \u29980  (\u27231 \u22580 \u38468 \u36817 )', naverId: '37792613', time: '08:00', details: '\u26089 \u39184 \u20633 \u36984 \u65292 \u22312 \u24066 \u21312 \u35036 \u32102 \u12290 ', tags: ['\u24517 \u21507 '] \},\
    \{ id: 'd1_3', day: 1, type: 'sightseeing', name: '\uc0\u25406 \u25165 \u28023 \u37002 ', naverId: '13495817', time: '11:00', details: '\u35199 \u28023 \u23736 \u32218 \u30693 \u21517 \u27801 \u28760 \u12290 ', tags: ['\u25915 \u30053 '] \},\
    \{ id: 'd1_4', day: 1, type: 'dining', name: '\uc0\u26149 \u26085 \u21654 \u21857 \u39208  BOMNAL', naverId: '33350325', time: '14:00', details: '\u28023 \u26223 \u21654 \u21857 \u39208 \u65292 \u27427 \u36062 \u28079 \u26376 \u28023 \u37002 \u12290 ', tags: ['\u24517 \u40670 \u33756 \u21934 '] \},\
    \{ id: 'd1_5', day: 1, type: 'dining', name: '\uc0\u29087 \u25104 \u21040  \u28079 \u26376 \u24215 ', naverId: '1692238473', time: '18:30', details: '\u28639 \u24030 \u40657 \u35948 \u32905 \u29138 \u28900 \u12290 ', tags: ['\u24517 \u21507 '] \},\
    \{ id: 'd2_1', day: 2, type: 'sightseeing', name: 'Osulloc \uc0\u33590 \u21338 \u29289 \u39208 ', naverId: '11839213', time: '09:00', details: '\u32160 \u33590 \u22290 \u33287 \u21338 \u29289 \u39208 \u65292 \u26089 \u40670 \u21435 \u36991 \u38283 \u20154 \u28526 \u12290 ' \},\
    \{ id: 'd2_2', day: 2, type: 'sightseeing', name: '\uc0\u28639 \u24030 9.81\u20844 \u22290 ', naverId: '1311026040', time: '13:00', details: '\u37325 \u21147 \u36093 \u36554 \u39636 \u39511 \u12290 ', tags: ['\u37325 \u35201 \u38928 \u32004 \u20195 \u34399 '] \},\
    \{ id: 'd2_3', day: 2, type: 'sightseeing', name: '\uc0\u22823 \u28006 \u26609 \u29376 \u31680 \u29702 \u24118 ', naverId: '12882298', time: '16:00', details: '\u22767 \u35264 \u30340 \u28023 \u34645 \u26609 \u22320 \u36074 \u26223 \u35264 \u12290 ', tags: ['\u25915 \u30053 '] \},\
    \{ id: 'd2_4', day: 2, type: 'transport', name: '\uc0\u35199 \u27512 \u28006 \u39151 \u24215  Check-in', naverId: '', time: '18:00', details: 'Heyy Seogwipo Hotel' \},\
    \{ id: 'd2_5', day: 2, type: 'sightseeing', name: '\uc0\u35199 \u27512 \u28006 \u27599 \u26085 \u20598 \u20358 \u24066 \u22580 ', naverId: '11617255', time: '19:30', details: '\u30070 \u22320 \u20659 \u32113 \u24066 \u22580 \u65292 \u36969 \u21512 \u25505 \u36023 \u23477 \u22812 \u12290 ', tags: ['\u24517 \u36023 \u20276 \u25163 \u31150 '] \},\
    \{ id: 'd3_1', day: 3, type: 'transport', name: '\uc0\u22478 \u23665 \u28006 \u28207 \u25645 \u33337 \u24448 \u29275 \u23798 ', naverId: '11543169', time: '09:00', details: '\u33337 \u29677 \u26131 \u21463 \u22825 \u27683 \u24433 \u38911 \u65292 \u38656 \u20633 \u26696 \u12290 ' \},\
    \{ id: 'd3_2', day: 3, type: 'sightseeing', name: 'Udo (\uc0\u29275 \u23798 )', naverId: '13506925', time: '10:00', details: '\u39438 \u21934 \u36554 \u25110 \u25645 \u20056 \u35264 \u20809 \u24052 \u22763 \u29872 \u23798 \u12290 ', tags: ['\u26223 \u40670 \u25925 \u20107 '] \},\
    \{ id: 'd3_3', day: 3, type: 'dining', name: '\uc0\u26376 \u27712 \u37324 \u37941 \u26495 \u25490 \u39592 \u24215 ', naverId: '1347077209', time: '18:30', details: '\u26202 \u39184 \u24460 \u31227 \u21205 \u33267 \u28639 \u24030 \u24066 \u21312 \u12290 ' \},\
    \{ id: 'd4_1', day: 4, type: 'sightseeing', name: '\uc0\u28450 \u25295 \u23665  Eorimok \u30331 \u23665 \u21475 ', naverId: '1347077209', time: '07:00', details: '\u24481 \u37324 \u29287 \u19978 \u65292 \u38728 \u23460 \u19979  (12.6KM, 6\u23567 \u26178 )\u12290 ', tags: ['\u25915 \u30053 ', '\u37325 \u35201 \u38928 \u32004 \u20195 \u34399 '] \},\
    \{ id: 'd4_2', day: 4, type: 'dining', name: '\uc0\u22992 \u22969 \u40629 \u26781  (\u28639 \u24030 \u32317 \u24215 )', naverId: '13346927', time: '19:30', details: '\u30693 \u21517 \u35948 \u32905 \u40629 \u24215 \u12290 ', tags: ['\u24517 \u21507 '] \},\
    \{ id: 'd5_1', day: 5, type: 'sightseeing', name: '\uc0\u19977 \u22995 \u31348 ', naverId: '13494794', time: '09:00', details: '\u28639 \u24030 \u23798 \u21109 \u19990 \u31070 \u35441 \u30340 \u27511 \u21490 \u22320 \u27161 \u12290 ', tags: ['\u26223 \u40670 \u25925 \u20107 '] \},\
    \{ id: 'd5_2', day: 5, type: 'dining', name: '\uc0\u26481 \u38272 \u20659 \u32113 \u24066 \u22580 ', naverId: '13346927', time: '11:00', details: '\u21320 \u39184 \u33287 \u26368 \u24460 \u20276 \u25163 \u31150 \u25505 \u36023 \u12290 ', tags: ['\u24517 \u36023 \u20276 \u25163 \u31150 '] \},\
    \{ id: 'd5_3', day: 5, type: 'dining', name: 'Umu (\uc0\u29980 \u21697 \u24215 )', naverId: '1796191771', time: '14:00', details: '\u30693 \u21517 \u35910 \u33104 \u24067 \u19969 \u29980 \u21697 \u12290 ', tags: ['\u24517 \u40670 \u33756 \u21934 '] \},\
    \{ id: 'd5_4', day: 5, type: 'transport', name: '\uc0\u27231 \u22580 \u36996 \u36554 ', naverId: '', time: '20:00', details: '\u27138 \u22825 \u31199 \u36554 \u36996 \u36554 \u12290 ' \},\
];\
\
// --- LLM \uc0\u23566 \u36938 \u20998 \u26512 \u25976 \u25818 \u27169 \u25836  ---\
const llmAnalysisData = \{\
    'd2_2': \{\
        story: '9.81 Park\uc0\u30340 \u21517 \u23383 \u20358 \u33258 \u26044 \u22320 \u24515 \u24341 \u21147 \u21152 \u36895 \u24230  9.81 m/s\'b2\u12290 \u22290 \u21312 \u30340 RACE 981\u36093 \u36554 \u38614 \u28982 \u26159 \u37325 \u21147 \u39493 \u21205 \u65292 \u20294 \u32080 \u21512 \u20102 \u23574 \u31471 \u31185 \u25216 \u65292 \u35731 \u39381 \u39387 \u39636 \u39511 \u26997 \u28858 \u27969 \u26274 \u65292 \u20006 \u19988 \u33021 \u22816 \u35352 \u37636 \u25976 \u25818 \u12289 \u30332 \u25582 \u31478 \u36093 \u31934 \u31070 \u12290 ',\
        tips: 'GR-X\uc0\u36554 \u22411 \u38656 \u35201 \u24180 \u28415 18\u27506 \u20006 \u29554 \u24471 \u29305 \u27530 \u39381 \u29031 \u12290 \u24314 \u35696 \u31359 \u33879 \u38263 \u35122 \u21644 \u36939 \u21205 \u38795 \u12290 \u22914 \u26524 \u22825 \u27683 \u19981 \u22909 \u65292 \u21487 \u20197 \u29609 Sport Lab\u31561 \u23460 \u20839 \u35373 \u26045 \u12290 ',\
        highlights: \{\
            '\uc0\u37325 \u35201 \u38928 \u32004 \u20195 \u34399 ': '\u38928 \u32004 \u20195 \u34399 \u26371 \u36879 \u36942  Email \u20659 \u36865 \u65292 \u20837 \u22580 \u26178 \u38656 \u20986 \u31034 \u12290 \u24314 \u35696 \u22312 \u21488 \u28771 \u20808 \u36879 \u36942  KLOOK/KKday \u36092 \u31080 \u12290 ',\
        \}\
    \},\
    'd4_1': \{\
        story: '\uc0\u28450 \u25295 \u23665 \u26159 \u38867 \u22283 \u26368 \u39640 \u23792 \u65292 \u34987 \u35222 \u28858 \u38867 \u22283 \u30340 \u32854 \u23665 \u20043 \u19968 \u12290 \u24481 \u37324 \u29287 \u36335 \u32218 \u22240 \u39080 \u26223 \u20778 \u32654 \u12289 \u33021 \u36960 \u30522 \u28450 \u25295 \u23665 \u20027 \u23792 \u32780 \u32862 \u21517 \u65292 \u38728 \u23460 \u19979 \u23665 \u21063 \u20197 \u20854 \u22855 \u29305 \u30340 \u23721 \u30707 \u26223 \u35264 \u33879 \u31281 \u12290 ',\
        tips: '\uc0\u20908 \u23395 \u20837 \u23665 \u38656 \u37197 \u20633 \u20912 \u29226 /\u30331 \u23665 \u26454 \u12290 \u35531 \u21209 \u24517 \u31359 \u33879 \u25490 \u27735 \u34915 \u65292 \u27969 \u27735 \u24460 \u26825 \u36074 \u34915 \u29289 \u26371 \u23566 \u33268 \u22833 \u28331 \u12290 \u24118 \u22816 \u27700 \u21644 \u39640 \u29105 \u37327 \u39135 \u29289 \u12290 ',\
        highlights: \{\
            '\uc0\u37325 \u35201 \u38928 \u32004 \u20195 \u34399 ': '\u20837 \u23665 \u38656 \u22312 \u23448 \u32178 \u38928 \u32004 \u65292 \u27794 \u26377 \u38928 \u32004 \u23559 \u28961 \u27861 \u36914 \u20837 \u31649 \u21046 \u21312 \u12290 ',\
            '\uc0\u25915 \u30053 ': '\u24478 \u24481 \u37324 \u29287 \u19978 \u65292 \u38728 \u23460 \u19979 \u23665 \u24460 \u65292 \u38656 \u22312 \u38728 \u23460 \u25645 \u20056 \u20844 \u36554 \u36820 \u22238 \u24481 \u37324 \u29287 \u21462 \u36554 \u12290 '\
        \}\
    \}\
\};\
\
// --- Firebase Context and Initialization ---\
let db;\
let auth;\
let app;\
\
// \uc0\u30001 \u26044 \u37096 \u32626 \u22312 \u22806 \u37096 \u29872 \u22659 \u65292 \u38656 \u35201 \u30906 \u20445  firebaseConfig \u23384 \u22312 \u19988 \u26377 \u25928 \
if (firebaseConfig && firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY") \{\
    app = initializeApp(firebaseConfig);\
    db = getFirestore(app);\
    auth = getAuth(app);\
\} else \{\
    // \uc0\u37096 \u32626 \u26178 \u35531 \u21209 \u24517 \u22312  main.js \u20013 \u26367 \u25563  YOUR_FIREBASE_API_KEY\
    console.warn("Firebase config is missing or using placeholder. Budget tracking will not be active outside of Canvas.");\
\}\
\
const TagColors = \{\
    '\uc0\u24517 \u21507 ': 'bg-pink-100 text-pink-700 ring-pink-500',\
    '\uc0\u24517 \u40670 \u33756 \u21934 ': 'bg-blue-100 text-blue-700 ring-blue-500',\
    '\uc0\u24517 \u36023 \u20276 \u25163 \u31150 ': 'bg-green-100 text-green-700 ring-green-500',\
    '\uc0\u25915 \u30053 ': 'bg-yellow-100 text-yellow-700 ring-yellow-500',\
    '\uc0\u26223 \u40670 \u25925 \u20107 ': 'bg-purple-100 text-purple-700 ring-purple-500',\
    '\uc0\u37325 \u35201 \u38928 \u32004 \u20195 \u34399 ': 'bg-red-100 text-red-700 ring-red-500 font-bold',\
\};\
\
const CardStyles = \{\
    sightseeing: \{ icon: MapPin, color: 'text-indigo-600', ring: 'ring-indigo-300' \},\
    dining: \{ icon: Utensils, color: 'text-rose-600', ring: 'ring-rose-300' \},\
    transport: \{ icon: Navigation, color: 'text-gray-500', ring: 'ring-gray-300' \},\
\};\
\
// ---------------------------------------------------------------------\
// --- COMPONENTS ---\
// ---------------------------------------------------------------------\
\
const CurrentTimeWeather = (\{ date, weather \}) => \{\
    const [currentTime, setCurrentTime] = useState(new Date());\
\
    useEffect(() => \{\
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);\
        return () => clearInterval(timer);\
    \}, []);\
\
    const dateOptions = \{ month: 'long', day: 'numeric', weekday: 'short' \};\
    const timeOptions = \{ hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false \};\
\
    return (\
        <div className="flex items-center justify-between text-xs text-gray-500 p-4 border-b border-gray-100 bg-white sticky top-0 z-10 shadow-sm">\
            <div className="flex flex-col">\
                <span className="font-sans font-semibold text-lg text-gray-800">\
                    \{currentTime.toLocaleDateString('zh-TW', dateOptions)\}\
                </span>\
                <span className="text-sm font-light tracking-wider">\
                    \{currentTime.toLocaleTimeString('zh-TW', timeOptions)\} (\uc0\u28639 \u24030 \u26178 \u38291 )\
                </span>\
            </div>\
            <div className="flex items-center space-x-2">\
                \{/* \uc0\u30001 \u26044 \u27794 \u26377 \u22825 \u27683  API\u65292 \u20351 \u29992  Lucide \u27169 \u25836 \u22825 \u27683 \u22294 \u31034  */\}\
                <Cloud className="w-5 h-5 text-blue-500" /> \
                <div className="flex flex-col items-end">\
                    <span className="text-lg font-semibold text-gray-800">\{weather.temp\}\'b0C</span>\
                    <span className="text-xs text-gray-500">\{weather.condition\}</span>\
                </div>\
            </div>\
        </div>\
    );\
\};\
\
// \uc0\u28858 \u20102 \u37096 \u32626 \u38918 \u21033 \u65292 \u23559  Cloud \u24341 \u20837 \
const Cloud = (\{ className = "w-6 h-6" \}) => (\
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=\{className\}>\
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h.79a4.5 4.5 0 1 1 0 9Z"/>\
    </svg>\
);\
\
\
const ItineraryCard = React.memo((\{ item, index, handleDragStart, handleSelectCard \}) => \{\
    const \{ type, name, time, details, naverId, tags = [] \} = item;\
    const \{ icon: Icon, color, ring \} = CardStyles[type];\
    const hasAnalysis = !!llmAnalysisData[item.id];\
\
    const handleNaverMapClick = (e) => \{\
        e.stopPropagation(); // Prevent card selection when clicking nav button\
        if (naverId) \{\
            // Naver Map \uc0\u23566 \u33322  URL \u26684 \u24335  (\u20351 \u29992  naver.me \u32302 \u30701 \u36899 \u32080 \u65292 Naver ID \u26356 \u21487 \u38752 )\
            const naverUrl = `https://m.map.naver.com/place/detail.naver?infoId=$\{naverId\}`;\
            window.open(naverUrl, '_blank');\
        \} else \{\
            // \uc0\u20351 \u29992 \u21517 \u31281 \u25628 \u32034 \u20316 \u28858 \u20633 \u29992 \
            const naverSearchUrl = `https://m.search.naver.com/search.naver?query=$\{encodeURIComponent('\uc0\u28639 \u24030 \u23798  ' + name)\}`;\
            window.open(naverSearchUrl, '_blank');\
        \}\
    \};\
\
    return (\
        <div\
            className=\{`p-4 bg-white rounded-xl shadow-lg ring-1 $\{ring\} transition-all duration-300 transform active:scale-[1.01]`\}\
            onPointerDown=\{(e) => handleDragStart(e, item.id, index)\}\
            onClick=\{() => handleSelectCard(item.id)\}\
            style=\{\{ cursor: 'pointer' \}\}\
        >\
            <div className="flex justify-between items-start">\
                \{/* Time & Icon */\}\
                <div className="flex flex-col items-center justify-center space-y-1 w-16 flex-shrink-0 mr-4">\
                    <span className="text-xl font-bold text-gray-800">\{time\}</span>\
                    <Icon className=\{`w-6 h-6 $\{color\}`\} />\
                    <span className=\{`text-xs font-medium uppercase rounded-full px-2 py-0.5 $\{color.replace('text-', 'bg-').replace('-600', '-100')\} $\{color\}`\}>\{type === 'sightseeing' ? '\uc0\u26223 \u40670 ' : type === 'dining' ? '\u39184 \u24307 ' : '\u20132 \u36890 '\}</span>\
                </div>\
\
                \{/* Content */\}\
                <div className="flex-1 min-w-0">\
                    <h3 className="text-lg font-semibold text-gray-900 truncate">\{name\}</h3>\
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">\{details\}</p>\
\
                    \{/* Tags & LLM Analysis Indicator */\}\
                    <div className="mt-2 flex flex-wrap gap-2 items-center">\
                        \{tags.map((tag, i) => (\
                            <span key=\{i\} className=\{`text-xs px-2 py-0.5 rounded-full ring-1 $\{TagColors[tag] || 'bg-gray-100 text-gray-500 ring-gray-300'\}`\}>\
                                \{tag\}\
                            </span>\
                        ))\}\
                        \{hasAnalysis && (\
                            <span className="text-xs px-2 py-0.5 rounded-full ring-1 bg-teal-100 text-teal-700 ring-teal-500">\
                                \uc0\u23566 \u36938 \u20998 \u26512 \
                            </span>\
                        )\}\
                    </div>\
                </div>\
\
                \{/* Navigation Button */\}\
                \{(naverId || type !== 'transport') && ( // \uc0\u20132 \u36890 \u19981 \u19968 \u23450 \u26377  naverId, \u20294 \u20854 \u20182 \u20841 \u39006 \u24314 \u35696 \u26377 \u23566 \u33322 \
                    <button\
                        className="ml-3 p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-600 transition duration-150 shadow-sm flex-shrink-0"\
                        onClick=\{handleNaverMapClick\}\
                        aria-label="\uc0\u23566 \u33322 \u33267 \u27492 \u22320 \u40670 "\
                    >\
                        <Navigation className="w-5 h-5" />\
                    </button>\
                )\}\
            </div>\
        </div>\
    );\
\});\
\
const BudgetTracker = (\{ userId, db \}) => \{\
    const [entries, setEntries] = useState([]);\
    const [amount, setAmount] = useState('');\
    const [description, setDescription] = useState('');\
    const [category, setCategory] = useState('dining');\
    const [loading, setLoading] = useState(true);\
    const [error, setError] = useState(null);\
\
    // \uc0\u27298 \u26597 \u36039 \u26009 \u24235 \u26159 \u21542 \u21487 \u29992 \
    const isDbAvailable = !!db;\
\
    const collectionPath = `artifacts/$\{appId\}/users/$\{userId\}/budgets`;\
\
    // Fetch data using onSnapshot (Real-time sync)\
    useEffect(() => \{\
        if (!userId || !isDbAvailable) \{\
            setLoading(false);\
            return;\
        \}\
\
        const budgetsRef = collection(db, collectionPath);\
        const q = query(budgetsRef, orderBy('timestamp', 'desc'));\
\
        const unsubscribe = onSnapshot(q, (snapshot) => \{\
            const budgetList = snapshot.docs.map(doc => (\{\
                id: doc.id,\
                ...doc.data(),\
                timestamp: doc.data().timestamp ? doc.data().timestamp.toDate().toLocaleString('zh-TW') : 'N/A'\
            \}));\
            setEntries(budgetList);\
            setLoading(false);\
        \}, (err) => \{\
            console.error("Firestore listen failed:", err);\
            setError("\uc0\u28961 \u27861 \u36617 \u20837 \u35352 \u24115 \u36039 \u26009 \u65292 \u35531 \u27298 \u26597 \u32178 \u36335 \u36899 \u32218 \u25110  Firebase \u35373 \u23450 \u12290 ");\
            setLoading(false);\
        \});\
\
        return () => unsubscribe();\
    \}, [userId, isDbAvailable, collectionPath]);\
\
    const addEntry = async (e) => \{\
        e.preventDefault();\
        if (!amount || !description || !userId) return;\
\
        const parsedAmount = parseFloat(amount);\
        if (isNaN(parsedAmount) || parsedAmount <= 0) \{\
            setError("\uc0\u35531 \u36664 \u20837 \u26377 \u25928 \u37329 \u38989 \u12290 ");\
            return;\
        \}\
\
        const newEntry = \{\
            amount: parsedAmount,\
            description,\
            category,\
            timestamp: new Date(),\
            userId,\
        \};\
\
        if (!isDbAvailable) \{\
            setError("Firebase \uc0\u36039 \u26009 \u24235 \u26410 \u27491 \u30906 \u35373 \u23450 \u65292 \u28961 \u27861 \u21516 \u27493 \u36039 \u26009 \u12290 ");\
            return;\
        \}\
\
        try \{\
            const budgetRef = doc(collection(db, collectionPath));\
            await setDoc(budgetRef, newEntry);\
            setAmount('');\
            setDescription('');\
            setCategory('dining');\
            setError(null);\
        \} catch (e) \{\
            console.error("Error adding document: ", e);\
            setError("\uc0\u20786 \u23384 \u22833 \u25943 \u65292 \u35531 \u37325 \u35430 \u12290 ");\
        \}\
    \};\
\
    const deleteEntry = async (id) => \{\
        if (!userId || !isDbAvailable) return;\
        try \{\
            await deleteDoc(doc(db, collectionPath, id));\
        \} catch (e) \{\
            console.error("Error deleting document: ", e);\
            setError("\uc0\u21034 \u38500 \u22833 \u25943 \u65292 \u35531 \u37325 \u35430 \u12290 ");\
        \}\
    \};\
\
    const totalExpense = entries.reduce((sum, entry) => sum + entry.amount, 0);\
\
    const categoryIcons = \{\
        dining: Utensils,\
        transport: Navigation,\
        shopping: ShoppingBag,\
        misc: Plus\
    \};\
\
    if (!isDbAvailable) \{\
        return <div className="p-4 text-center text-red-500 font-semibold">\uc0\u35352 \u24115 \u21151 \u33021 \u26410 \u21855 \u29992 \u65306 \u35531 \u22312  main.js \u20013 \u22635 \u20837 \u24744 \u30340  Firebase \u35373 \u23450 \u12290 </div>;\
    \}\
    if (loading) return <div className="p-4 text-center text-gray-500">\uc0\u36617 \u20837 \u20013 ...</div>;\
    if (error) return <div className="p-4 text-center text-red-500 font-semibold">\{error\}</div>;\
\
    return (\
        <div className="p-4 space-y-6">\
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2 flex items-center"><DollarSign className="w-5 h-5 mr-2 text-green-600"/>\uc0\u38928 \u31639 \u32317 \u35261 </h2>\
\
            \{/* Total Display */\}\
            <div className="p-4 bg-green-50 rounded-xl shadow-inner border border-green-200">\
                <p className="text-sm text-green-700">\uc0\u32317 \u25903 \u20986  (KRW):</p>\
                <p className="text-3xl font-extrabold text-green-800 mt-1">\uc0\u8361  \{totalExpense.toLocaleString('zh-TW')\}</p>\
                <p className="text-xs text-green-600 mt-2">\uc0\u36039 \u26009 \u24050 \u21516 \u27493 \u33267  Firestore \u36039 \u26009 \u24235 </p>\
            </div>\
\
            \{/* Add New Entry Form */\}\
            <form onSubmit=\{addEntry\} className="space-y-3 p-4 bg-white rounded-xl shadow-lg border border-gray-100">\
                <h3 className="text-lg font-semibold text-gray-800">\uc0\u26032 \u22686 \u25903 \u20986 </h3>\
                <div className="flex space-x-2">\
                    <select\
                        value=\{category\}\
                        onChange=\{(e) => setCategory(e.target.value)\}\
                        className="w-1/3 p-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500"\
                    >\
                        <option value="dining">\uc0\u39184 \u39154 </option>\
                        <option value="transport">\uc0\u20132 \u36890 </option>\
                        <option value="shopping">\uc0\u36092 \u29289 </option>\
                        <option value="misc">\uc0\u38620 \u38917 </option>\
                    </select>\
                    <input\
                        type="number"\
                        placeholder="\uc0\u37329 \u38989  (KRW)"\
                        value=\{amount\}\
                        onChange=\{(e) => setAmount(e.target.value)\}\
                        required\
                        className="w-2/3 p-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500"\
                    />\
                </div>\
                <input\
                    type="text"\
                    placeholder="\uc0\u25903 \u20986 \u25551 \u36848  (Ex: \u26202 \u39184 \u28900 \u32905 )"\
                    value=\{description\}\
                    onChange=\{(e) => setDescription(e.target.value)\}\
                    required\
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500"\
                />\
                <button type="submit" className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150">\
                    \uc0\u35352 \u37636 \
                </button>\
            </form>\
\
            \{/* Expense List */\}\
            <h3 className="text-lg font-bold text-gray-800 pt-2">\uc0\u25903 \u20986 \u32000 \u37636 </h3>\
            <div className="space-y-2">\
                \{entries.length === 0 ? (\
                    <p className="text-center text-gray-500 py-4">\uc0\u23578 \u28961 \u25903 \u20986 \u32000 \u37636 \u12290 </p>\
                ) : (\
                    entries.map(entry => \{\
                        const Icon = categoryIcons[entry.category] || Plus;\
                        return (\
                            <div key=\{entry.id\} className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">\
                                <div className="flex items-center space-x-3 min-w-0">\
                                    <div className=\{`p-2 rounded-full $\{CardStyles[entry.category] ? CardStyles[entry.category].ring.replace('ring-', 'bg-') : 'bg-gray-100'\}`\}>\
                                        <Icon className="w-4 h-4 text-gray-600" />\
                                    </div>\
                                    <div className="min-w-0">\
                                        <p className="font-medium text-gray-800 truncate">\{entry.description\}</p>\
                                        <p className="text-xs text-gray-500">\{entry.timestamp\}</p>\
                                    </div>\
                                </div>\
                                <div className="flex items-center space-x-3">\
                                    <p className="font-bold text-lg text-red-600 flex-shrink-0">\
                                        -\uc0\u8361 \{entry.amount.toLocaleString('zh-TW')\}\
                                    </p>\
                                    <button\
                                        onClick=\{() => deleteEntry(entry.id)\}\
                                        className="text-gray-400 hover:text-red-500 transition"\
                                        aria-label="\uc0\u21034 \u38500 "\
                                    >\
                                        <X className="w-4 h-4" />\
                                    </button>\
                                </div>\
                            </div>\
                        )\
                    \})\
                )\}\
            </div>\
        </div>\
    );\
\};\
\
const StaticInfo = () => (\
    <div className="p-4 space-y-6">\
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2 flex items-center"><Info className="w-5 h-5 mr-2 text-indigo-600"/>\uc0\u37325 \u35201 \u36039 \u35338 </h2>\
\
        \{/* \uc0\u33322 \u29677 \u36039 \u35338  */\}\
        <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 space-y-2">\
            <h3 className="text-lg font-semibold text-gray-800 flex items-center"><Plane className="w-4 h-4 mr-2"/>\uc0\u33322 \u29677 \u36039 \u35338 </h3>\
            <p className="text-sm text-gray-600"><span className="font-medium">\uc0\u21435 \u31243 \u65306 </span>12/3 \u26202  22:15</p>\
            <p className="text-sm text-gray-600"><span className="font-medium">\uc0\u22238 \u31243 \u65306 </span>12/8 \u26202  22:15</p>\
            <p className="text-sm text-gray-600"><span className="font-medium">\uc0\u20633 \u35387 \u65306 </span>\u38928 \u35336  9:50 \u19968 \u27155 \u38598 \u21512 \u65292 \u35351 \u36939  15kg / \u38568 \u36523  10kg\u12290 </p>\
        </div>\
\
        \{/* \uc0\u20303 \u23487 \u36039 \u35338  */\}\
        <div className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 space-y-2">\
            <h3 className="text-lg font-semibold text-gray-800 flex items-center"><Home className="w-4 h-4 mr-2"/>\uc0\u20303 \u23487 \u36039 \u35338 </h3>\
            <p className="text-sm text-gray-600"><span className="font-medium">12/4\uc0\u65306 </span>Aewol Quiet Month (\u35199 \u37096 )</p>\
            <p className="text-sm text-gray-600"><span className="font-medium">12/5\uc0\u65306 </span>Heyy Seogwipo Hotel (\u21335 \u37096 )</p>\
            <p className="text-sm text-gray-600"><span className="font-medium">12/6-7\uc0\u65306 </span>Urbanstay (\u21271 \u37096 /\u24066 \u21312 )</p>\
        </div>\
\
        \{/* \uc0\u32202 \u24613 \u32879 \u32097 \u38651 \u35441  */\}\
        <div className="p-4 bg-red-50 rounded-xl shadow-lg border border-red-200 space-y-2">\
            <h3 className="text-lg font-semibold text-red-700 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/>\uc0\u32202 \u24613 \u32879 \u32097 </h3>\
            <p className="text-sm text-gray-800"><span className="font-medium">\uc0\u38867 \u22283 \u22577 \u35686 \u65306 </span>112</p>\
            <p className="text-sm text-gray-800"><span className="font-medium">\uc0\u38867 \u22283 \u24613 \u25937 \u65306 </span>119</p>\
            <p className="text-sm text-gray-800"><span className="font-medium">\uc0\u21488 \u28771 \u39376 \u38867 \u22283 \u20195 \u34920 \u34389 \u65306 </span>+82-2-399-2767</p>\
            <p className="text-sm text-gray-800"><span className="font-medium">\uc0\u31199 \u36554 \u20844 \u21496  (\u27138 \u22825 )\u65306 </span>[\u35531 \u22635 \u23531 \u30070 \u22320 \u38651 \u35441 ]</p>\
        </div>\
    </div>\
);\
\
\
const DaySchedule = (\{ day, items, currentDay, setCurrentDay, handleDragStart, handleSelectCard \}) => \{\
    const isCurrent = day === currentDay;\
    const [isOpen, setIsOpen] = useState(isCurrent);\
\
    return (\
        <div className="border-b border-gray-200">\
            <button\
                className=\{`w-full p-4 flex justify-between items-center transition duration-200 $\{isCurrent ? 'bg-indigo-50 text-indigo-700 font-bold' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'\}`\}\
                onClick=\{() => \{\
                    setIsOpen(!isOpen);\
                    setCurrentDay(day);\
                \}\}\
            >\
                <span className="text-xl">Day \{day\} - \{day === 1 ? '\uc0\u35199 \u37096 \u28079 \u26376 ' : day === 2 ? '\u21335 \u37096 \u35199 \u27512 \u28006 ' : day === 3 ? '\u26481 \u37096 \u29275 \u23798 ' : day === 4 ? '\u28450 \u25295 \u23665 /\u24066 \u21312 ' : '\u24066 \u21312 \u36092 \u29289 '\}</span>\
                <ChevronDown className=\{`w-5 h-5 transition-transform $\{isOpen ? 'transform rotate-180' : ''\}`\} />\
            </button>\
            <div className=\{`overflow-hidden transition-max-height duration-500 ease-in-out $\{isOpen ? 'max-h-[2000px]' : 'max-h-0'\}`\}>\
                <div className="p-4 space-y-4">\
                    \{items.map((item, index) => (\
                        <ItineraryCard\
                            key=\{item.id\}\
                            item=\{item\}\
                            index=\{index\}\
                            handleDragStart=\{handleDragStart\}\
                            handleSelectCard=\{handleSelectCard\}\
                        />\
                    ))\}\
                </div>\
            </div>\
        </div>\
    );\
\};\
\
// --- Main App Component ---\
const App = () => \{\
    const [itinerary, setItinerary] = useState(initialItinerary);\
    const [currentDay, setCurrentDay] = useState(1);\
    const [activeTab, setActiveTab] = useState('itinerary');\
    const [currentUser, setCurrentUser] = useState(null);\
    const [dragState, setDragState] = useState(null); // \{ id, startY, originalIndex, currentY, draggingElement \}\
    const [draggedItem, setDraggedItem] = useState(null);\
    const [isDetailOpen, setIsDetailOpen] = useState(false);\
    const [selectedItem, setSelectedItem] = useState(null);\
    const itineraryRef = useRef(null);\
\
    // Mock Weather Data (Using Google Search info for general feel)\
    const mockWeather = \{ temp: 10, condition: '\uc0\u22810 \u38642 \u26377 \u39080 ', icon: 'wi-day-cloudy-windy' \};\
\
    // --- Firebase/Auth Setup ---\
    useEffect(() => \{\
        if (!auth) \{\
            console.error("Firebase Auth not initialized. Budget feature disabled.");\
            return;\
        \}\
\
        // Sign In logic\
        const signIn = async () => \{\
            try \{\
                if (initialAuthToken) \{\
                    await signInWithCustomToken(auth, initialAuthToken);\
                \} else \{\
                    await signInAnonymously(auth);\
                \}\
            \} catch (error) \{\
                console.error("Firebase Sign-in failed:", error);\
            \}\
        \};\
\
        // Listen for auth state change\
        const unsubscribe = onAuthStateChanged(auth, (user) => \{\
            if (user) \{\
                setCurrentUser(user);\
                // console.log("Authenticated user ID:", user.uid);\
            \} else \{\
                signIn(); // Re-attempt sign-in if not signed in\
            \}\
        \});\
\
        return () => unsubscribe();\
    \}, []);\
\
\
    // --- Custom Drag & Drop Handlers ---\
    const handleDragStart = useCallback((e, itemId, originalIndex) => \{\
        // Only allow drag within the itinerary tab\
        if (activeTab !== 'itinerary') return;\
        \
        e.preventDefault();\
        const target = e.currentTarget;\
        const rect = target.getBoundingClientRect();\
        const startY = e.clientY || (e.touches && e.touches[0].clientY);\
        if (!startY) return;\
\
        const item = itinerary.find(i => i.id === itemId);\
        \
        // Only allow drag within the currently opened day\
        if (item.day !== currentDay) return;\
\
        setDragState(\{\
            id: itemId,\
            startY: startY,\
            originalIndex: originalIndex,\
            yOffset: startY - rect.top,\
            height: rect.height + 16, // item height + gap\
            draggingElement: target,\
            originalTop: rect.top + window.scrollY,\
        \});\
\
        setDraggedItem(\{ ...item, style: \{ transform: 'translateY(0)', position: 'fixed', top: rect.top, left: rect.left, width: rect.width, zIndex: 50, transition: 'none' \} \});\
\
        target.style.opacity = '0.01'; // Hide original item\
        document.body.style.userSelect = 'none';\
\
        const handleMove = (moveEvent) => \{\
            const currentY = moveEvent.clientY || (moveEvent.touches && moveEvent.touches[0].clientY);\
            if (!currentY) return;\
            \
            const diffY = currentY - startY;\
\
            // Update dragged item position\
            setDraggedItem(prev => (\{\
                ...prev,\
                style: \{\
                    ...prev.style,\
                    transform: `translateY($\{diffY\}px)`,\
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',\
                \}\
            \}));\
\
            // Get the list of items for the current day\
            const itemsInCurrentDay = itinerary.filter(i => i.day === currentDay);\
            const itemsBeforeDay = itinerary.filter(i => i.day < currentDay);\
            const currentDayStartIndex = itemsBeforeDay.length;\
\
            const draggedElementTop = dragState.originalTop + diffY;\
\
            let newIndexInDay = itemsInCurrentDay.findIndex((_, i) => \{\
                const globalIndex = currentDayStartIndex + i;\
                const targetElement = itineraryRef.current.children[globalIndex];\
                if (targetElement) \{\
                    // Check if the dragged item center is past the target item's center\
                    return targetElement.offsetTop + targetElement.offsetHeight / 2 > draggedElementTop;\
                \}\
                return false;\
            \});\
\
            // If newIndexInDay is -1, it means it's dragged to the very end of the day list\
            if (newIndexInDay === -1) \{\
                newIndexInDay = itemsInCurrentDay.length;\
            \}\
\
            const currentGlobalIndex = itinerary.findIndex(i => i.id === itemId);\
            const currentItemInDayIndex = currentGlobalIndex - currentDayStartIndex;\
\
            if (newIndexInDay !== currentItemInDayIndex) \{\
                const newItinerary = [...itinerary];\
                const [movedItem] = newItinerary.splice(currentGlobalIndex, 1);\
                newItinerary.splice(currentDayStartIndex + newIndexInDay, 0, movedItem);\
                setItinerary(newItinerary);\
            \}\
        \};\
\
        const handleEnd = () => \{\
            if (dragState && dragState.draggingElement) \{\
                dragState.draggingElement.style.opacity = '1';\
            \}\
            setDragState(null);\
            setDraggedItem(null);\
            document.body.style.userSelect = 'auto';\
            document.removeEventListener('pointermove', handleMove);\
            document.removeEventListener('pointerup', handleEnd);\
            document.removeEventListener('touchmove', handleMove);\
            document.removeEventListener('touchend', handleEnd);\
        \};\
\
        document.addEventListener('pointermove', handleMove);\
        document.addEventListener('pointerup', handleEnd);\
        document.addEventListener('touchmove', handleMove);\
        document.addEventListener('touchend', handleEnd);\
    \}, [itinerary, dragState, currentDay, activeTab]);\
\
    // --- Detail Modal Handler ---\
    const handleSelectCard = (itemId) => \{\
        const item = itinerary.find(i => i.id === itemId);\
        const analysis = llmAnalysisData[itemId] || null;\
        setSelectedItem(\{ ...item, analysis \});\
        setIsDetailOpen(true);\
    \};\
    \
    // --- Edit and Delete Handlers for Detail Modal (Placeholder for full CRUD) ---\
    const handleDeleteItem = () => \{\
        if (!selectedItem) return;\
        \
        // In a full app, you'd use a custom modal for confirmation. Here we use an internal state.\
        if (window.confirm(`\uc0\u30906 \u23450 \u35201 \u21034 \u38500 \u34892 \u31243  "$\{selectedItem.name\}" \u21966 \u65311 `)) \{\
            setItinerary(prev => prev.filter(item => item.id !== selectedItem.id));\
            setIsDetailOpen(false);\
            setSelectedItem(null);\
        \}\
    \};\
\
    const handleAddItem = () => \{\
        const newId = `new_$\{Date.now()\}`;\
        const newItem = \{\
            id: newId,\
            day: currentDay,\
            type: 'sightseeing',\
            name: '\uc0\u26032 \u22686 \u34892 \u31243 \u21517 \u31281 ',\
            naverId: '',\
            time: '12:00', // Default time\
            details: '\uc0\u40670 \u25802 \u21345 \u29255 \u32232 \u36655 \u35443 \u32048 \u36039 \u35338 ',\
            tags: ['\uc0\u25915 \u30053 '],\
        \};\
        // Add new item and maintain sort order (by day, then by time)\
        const newItinerary = [...itinerary, newItem];\
        newItinerary.sort((a, b) => \{\
            if (a.day !== b.day) return a.day - b.day;\
            return a.time.localeCompare(b.time);\
        \});\
        \
        setItinerary(newItinerary);\
        \
        // Show detail modal for the new item immediately (where user can edit)\
        setSelectedItem(\{ ...newItem, analysis: null \});\
        setIsDetailOpen(true);\
    \};\
\
    // Group itinerary by day\
    const groupedItinerary = itinerary.reduce((acc, item) => \{\
        const dayKey = item.day;\
        if (!acc[dayKey]) acc[dayKey] = [];\
        acc[dayKey].push(item);\
        return acc;\
    \}, \{\});\
\
    // Ensure items within each day are sorted by time (for stable display)\
    Object.keys(groupedItinerary).forEach(day => \{\
        groupedItinerary[day].sort((a, b) => a.time.localeCompare(b.time));\
    \});\
    \
    // Convert grouped itinerary back to a flat array for correct drag index calculation\
    const flatItineraryForDrag = Object.keys(groupedItinerary).flatMap(day => groupedItinerary[day]);\
\
\
    return (\
        <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">\
            \{/* Header / Tab Navigation */\}\
            <div className="sticky top-0 z-20 bg-white shadow-md border-b border-gray-100">\
                <div className="p-4 flex justify-between items-center">\
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">\
                        \uc0\u28639 \u24030 \u23798 \u26997 \u31777 \u26053 \u31243 \
                    </h1>\
                    <User className="w-5 h-5 text-gray-500" />\
                </div>\
                <div className="flex justify-around border-t border-gray-100">\
                    <button\
                        className=\{`py-3 flex-1 text-center font-medium transition-all duration-300 $\{activeTab === 'itinerary' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'\}`\}\
                        onClick=\{() => setActiveTab('itinerary')\}\
                    >\
                        <Navigation className="w-4 h-4 inline mr-2 align-text-bottom" /> \uc0\u34892 \u31243 \
                    </button>\
                    <button\
                        className=\{`py-3 flex-1 text-center font-medium transition-all duration-300 $\{activeTab === 'tools' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'\}`\}\
                        onClick=\{() => setActiveTab('tools')\}\
                    >\
                        <Menu className="w-4 h-4 inline mr-2 align-text-bottom" /> \uc0\u24037 \u20855 \
                    </button>\
                    <button\
                        className=\{`py-3 flex-1 text-center font-medium transition-all duration-300 $\{activeTab === 'budget' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'\}`\}\
                        onClick=\{() => setActiveTab('budget')\}\
                    >\
                        <DollarSign className="w-4 h-4 inline mr-2 align-text-bottom" /> \uc0\u35352 \u24115 \
                    </button>\
                </div>\
            </div>\
\
            \{/* Main Content Area */\}\
            <div className="pb-20">\
                \{activeTab === 'itinerary' && (\
                    <>\
                        \{/* Current Time/Weather Bar */\}\
                        <CurrentTimeWeather date=\{currentDay\} weather=\{mockWeather\} />\
\
                        \{/* Itinerary List */\}\
                        <div className="p-2 space-y-2" ref=\{itineraryRef\}>\
                            \{Object.keys(groupedItinerary).map(day => (\
                                <DaySchedule\
                                    key=\{day\}\
                                    day=\{Number(day)\}\
                                    items=\{groupedItinerary[day]\}\
                                    currentDay=\{currentDay\}\
                                    setCurrentDay=\{setCurrentDay\}\
                                    handleDragStart=\{(e, itemId, indexInDay) => handleDragStart(e, itemId, flatItineraryForDrag.findIndex(i => i.id === itemId))\}\
                                    handleSelectCard=\{handleSelectCard\}\
                                />\
                            ))\}\
                        </div>\
                    </>\
                )\}\
\
                \{activeTab === 'tools' && <StaticInfo />\}\
                \{activeTab === 'budget' && (\
                    <BudgetTracker userId=\{currentUser?.uid\} db=\{db\} />\
                )\}\
            </div>\
\
            \{/* Floating Dragged Item (Appears only while dragging) */\}\
            \{draggedItem && (\
                <div\
                    style=\{draggedItem.style\}\
                    className="absolute rounded-xl z-50 pointer-events-none"\
                >\
                    <ItineraryCard item=\{draggedItem\} index=\{0\} handleDragStart=\{() => \{\}\} handleSelectCard=\{() => \{\}\} />\
                </div>\
            )\}\
\
            \{/* FAB (Floating Action Button) for adding new item */\}\
            \{activeTab === 'itinerary' && (\
                <button\
                    className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-xl hover:bg-indigo-700 transition duration-150 transform hover:scale-105"\
                    onClick=\{handleAddItem\}\
                    aria-label="\uc0\u26032 \u22686 \u34892 \u31243 "\
                >\
                    <Plus className="w-7 h-7 mx-auto" />\
                </button>\
            )\}\
\
            \{/* Detail/Analysis Modal */\}\
            \{isDetailOpen && selectedItem && (\
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-4">\
                    <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300">\
                        \{/* Modal Header */\}\
                        <div className="sticky top-0 bg-white p-4 border-b border-gray-100 flex justify-between items-center">\
                            <h2 className="text-xl font-bold text-gray-800">\{selectedItem.name\}</h2>\
                            <button onClick=\{() => setIsDetailOpen(false)\} className="p-2 text-gray-500 hover:text-gray-800 transition">\
                                <X className="w-5 h-5" />\
                            </button>\
                        </div>\
                        \{/* Modal Content */\}\
                        <div className="p-4 space-y-4">\
                            <div className="flex flex-wrap gap-2 mb-4">\
                                \{selectedItem.tags.map((tag, i) => (\
                                    <span key=\{i\} className=\{`text-xs px-3 py-1 rounded-full ring-1 $\{TagColors[tag] || 'bg-gray-100 text-gray-500 ring-gray-300'\}`\}>\
                                        \{tag\}\
                                    </span>\
                                ))\}\
                            </div>\
\
                            <p className="text-sm text-gray-600">\
                                <span className="font-semibold text-gray-800">\uc0\u26178 \u38291 \u65306 </span> \{selectedItem.time\} (Day \{selectedItem.day\})\
                            </p>\
                            <p className="text-sm text-gray-600">\
                                <span className="font-semibold text-gray-800">\uc0\u39006 \u22411 \u65306 </span> \{selectedItem.type === 'sightseeing' ? '\u26223 \u40670 ' : selectedItem.type === 'dining' ? '\u39184 \u24307 ' : '\u20132 \u36890 '\}\
                            </p>\
                            <p className="text-sm text-gray-600">\
                                <span className="font-semibold text-gray-800">\uc0\u20633 \u35387 \u65306 </span> \{selectedItem.details\}\
                            </p>\
\
                            \{/* LLM Analysis Section */\}\
                            \{selectedItem.analysis && (\
                                <div className="mt-6 p-4 bg-teal-50 rounded-xl border border-teal-200 space-y-3">\
                                    <h3 className="text-lg font-bold text-teal-800 flex items-center"><User className="w-5 h-5 mr-2" /> \uc0\u23566 \u36938 \u28145 \u24230 \u20998 \u26512 </h3>\
                                    \{selectedItem.analysis.story && (\
                                        <div>\
                                            <p className="font-semibold text-teal-700">\uc0\u26223 \u40670 \u25925 \u20107 /\u32972 \u26223 \u65306 </p>\
                                            <p className="text-sm text-gray-700">\{selectedItem.analysis.story\}</p>\
                                        </div>\
                                    )\}\
                                    \{selectedItem.analysis.tips && (\
                                        <div>\
                                            <p className="font-semibold text-teal-700">\uc0\u26053 \u36938 \u25915 \u30053 /\u25552 \u37266 \u65306 </p>\
                                            <p className="text-sm text-gray-700">\{selectedItem.analysis.tips\}</p>\
                                        </div>\
                                    )\}\
                                    \{Object.entries(selectedItem.analysis.highlights || \{\}).map(([key, value]) => (\
                                        <div key=\{key\}>\
                                            <p className=\{`font-semibold text-sm $\{TagColors[key].split(' ')[1].replace('text-', 'text-')\}`\}>\{key\} (\uc0\u20142 \u40670 ):</p>\
                                            <p className="text-sm text-gray-700">\{value\}</p>\
                                        </div>\
                                    ))\}\
                                </div>\
                            )\}\
\
                             \{/* Action Button - Edit and Delete placeholder */\}\
                            <div className='pt-4 flex justify-between space-x-2'>\
                                <button \
                                    className='flex-1 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition font-medium'\
                                    onClick=\{handleDeleteItem\}\
                                >\
                                    \uc0\u21034 \u38500 \u34892 \u31243 \
                                </button>\
                                <button className='flex-1 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition font-medium'>\
                                    \uc0\u32232 \u36655 \u34892 \u31243  (\u21151 \u33021 \u26410 \u23526 \u20316 )\
                                </button>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            )\}\
        </div>\
    );\
\};\
\
export default App;}