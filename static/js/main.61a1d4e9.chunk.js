(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){},31:function(e,t,a){e.exports=a(52)},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),s=(a(24),a(9)),l=a(12),o=(a(36),a(7)),u=a(13),m=a(27),d=a(28),E=a(3),_={address:"",time:"",search:"",isMobileSearchVisible:!1,isMobileDeliveryVisible:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ADDRESS":return Object(E.a)({},e,{address:t.address});case"SET_TIME":return Object(E.a)({},e,{time:t.time});case"SET_SEARCH":return Object(E.a)({},e,{search:t.search});case"TOGGLE_SEARCH":return Object(E.a)({},e,{isMobileSearchVisible:!e.isMobileSearchVisible,isMobileDeliveryVisible:!1});case"TOGGLE_DELIVERY":return Object(E.a)({},e,{isMobileDeliveryVisible:!e.isMobileDeliveryVisible,isMobileSearchVisible:!1});case"CLOSE_MOBILE":return Object(E.a)({},e,{isMobileDeliveryVisible:!1,isMobileSearchVisible:!1});default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESTAURANTS_LIST":return t.restaurantsList;default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"START_LOADING":return!0;case"STOP_LOADING":return!1;default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_UUID":return t.currentUuid;default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESTAURANT":return t.restaurant;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MENU_ITEM":return t.menuItem;default:return e}},N=a(15),k={counter:1,currentPrice:0,addPrice:[],isChecked:!1,subtitle:"",customItem:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRICE_TOGGLE":return e.addPrice.find(function(e){return e[1].includes(t.addPrice[1])})?Object(E.a)({},e,{addPrice:[].concat(Object(N.a)(e.addPrice.filter(function(e){return e[1]!==t.addPrice[1]})),[t.addPrice]).filter(function(e){return e.length})}):Object(E.a)({},e,{addPrice:[].concat(Object(N.a)(e.addPrice),[t.addPrice])});case"ADD_PRICE_CHECKBOX":return e.addPrice.find(function(e){return e[2].includes(t.addPrice[2])})?Object(E.a)({},e,{addPrice:Object(N.a)(e.addPrice.filter(function(e){return e[2]!==t.addPrice[2]})).filter(function(e){return e.length})}):Object(E.a)({},e,{addPrice:[].concat(Object(N.a)(e.addPrice),[t.addPrice])});case"DECREASE_COUNTER":return e.counter>1?Object(E.a)({},e,{counter:--e.counter}):e;case"INCREASE_COUNTER":return Object(E.a)({},e,{counter:++e.counter});case"SET_CURRENT_PRICE":return Object(E.a)({},e,{currentPrice:t.currentPrice});default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HAS_ERROR":return t.hasError;default:return e}},S={locationList:null,location:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION_LIST":return Object(E.a)({},e,{locationList:t.locationList});case"SET_LOCATION":return Object(E.a)({},e,{location:t.location});default:return e}},L=Object(u.combineReducers)({restaurantsList:f,input:p,isloading:b,currentUuid:g,restaurant:v,menuItem:h,customization:y,hasError:O,location:T}),R=Object(u.createStore)(L,Object(m.composeWithDevTools)(Object(u.applyMiddleware)(d.a))),w=(a(41),a(20)),C=a.n(w),I=(a(42),function(e){var t=e.iconUrl,a=e.value,n=e.onChange,c=e.type,i=e.placeholder,s=e.name,l=e.isSmall,o=e.label,u=e.locationList,m=e.setLocation,d=C()("control__wrapper",{address:"address"===s}),E=C()("control__input",{"control__input--small":l});return r.a.createElement(r.a.Fragment,null,"address"===s&&r.a.createElement("label",{className:"control"},o&&r.a.createElement("p",{className:"control__label"},o),r.a.createElement("div",{className:d},!!t&&r.a.createElement("img",{src:t,alt:i,className:"control__icon"}),r.a.createElement("select",{onChange:function(e){return m(e.target.value)},value:a,name:s,className:E,placeholder:i},u&&u.locations.map(function(e){return r.a.createElement("option",{key:e,value:u.locationsMap[e].id},u.locationsMap[e].title)})))),"address"!==s&&r.a.createElement("label",{className:"control"},o&&r.a.createElement("p",{className:"control__label"},o),r.a.createElement("div",{className:d},!!t&&r.a.createElement("img",{src:t,alt:i,className:"control__icon"}),r.a.createElement("input",{type:c,value:a,onChange:n,name:s,className:E,placeholder:i}))))}),j=function(e){var t=e.restaurantsList;return t?t.feedItems.map(function(e){var a=e.uuid;return t.storesMap[a]}):void 0},A=function(e){return e.location.locationList},P=function(e){return e.location.location},U=function(e){return e.restaurant},M=function(e){return e.hasError},D=function(e){return e.isloading},x=function(e){return e.currentUuid},G=function(e){return e.menuItem},z=function(e){return e.input.isMobileSearchVisible},V=function(e){return e.input.isMobileDeliveryVisible},H=function(e){return e.customization.counter},B=function(e){return(e.customization.currentPrice+e.customization.addPrice.reduce(function(e,t){return e+t[0]},0))*e.customization.counter},F=function(e){return{type:"SET_LOCATION",location:e}},q=function(e){return{type:"SET_LOCATION_LIST",locationList:e}},J=function(e){return{type:"SET_RESTAURANT",restaurant:e}},K=function(e){return{type:"SET_MENU_ITEM",menuItem:e}},X=function(e){return{type:"SET_ADDRESS",address:e}},Y=function(e){return{type:"SET_TIME",time:e}},Q=function(e){return{type:"SET_SEARCH",search:e}},W=function(e){return{type:"SET_HAS_ERROR",hasError:e}},Z=function(e){return{type:"ADD_PRICE_CHECKBOX",addPrice:e}},$=Object(o.b)(function(e){return{locationList:A(e),locationId:P(e)}},function(e){return{setLocation:function(t){return e(F(t))}}})(I),ee=function(e){e.setAddress;var t=e.setTime,a=e.setSearch,c=e.toggleSearch,i=e.toggleDelivery,s=e.isSearchVisible,o=e.isDeliveryVisible,u=e.closeMobile,m=e.locationId,d=Object(l.k)(),E=Object(l.l)(),_=new URLSearchParams(E.search);Object(n.useEffect)(function(){d.push("/restaurants"+E.search)},[m,d,E.search]);var p=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];clearTimeout(a),a=setTimeout(function(){return e.apply(void 0,r)},t)}}(function(e,n){switch(n){case"time":return t(e);case"search":a(e),_.set("title",e.trim().toLowerCase()),!e.trim()&&_.delete("title"),d.push({search:"".concat(_.toString())});break;default:return}},1e3);return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("img",{src:"./images/logo.svg",alt:"Uber Eats",className:"header__logo"}),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement($,{name:"address",placeholder:"address",iconUrl:"./images/place.svg"}),r.a.createElement($,{name:"time",onChange:function(e){return p(e.target.value,"time")},placeholder:"Time",className:"header__time",type:"time"})),r.a.createElement("div",{className:"header__search"},r.a.createElement($,{name:"search",onChange:function(e){return p(e.target.value,"search")},placeholder:"Search",iconUrl:"./images/search.svg"})),r.a.createElement("div",{className:"header__toggle-buttons"},r.a.createElement("button",{onClick:i,className:"header__toggle-btn",type:"button"},r.a.createElement("img",{src:"./images/place.svg",alt:"place icon"})),r.a.createElement("button",{onClick:c,className:"header__toggle-btn",type:"button"},r.a.createElement("img",{src:"./images/search.svg",alt:"search icon"}))),r.a.createElement("a",{className:"header__link",href:"/"},"Sign in")),(s||o)&&r.a.createElement("div",{className:"header__mobile-controls mobile-controls"},s&&r.a.createElement($,{label:"search",name:"search",onChange:function(e){return p(e.target.value,"search")},placeholder:"Search",iconUrl:"./images/search.svg",isSmall:!1}),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement($,{label:"where",name:"address",placeholder:"address",iconUrl:"./images/place.svg",isSmall:!1}),r.a.createElement($,{label:"to",name:"time",onChange:function(e){return p(e.target.value,"time")},placeholder:"Time",className:"header__time",type:"time",isSmall:!1})),r.a.createElement("button",{onClick:u,className:"mobile-controls__close",type:"button"},r.a.createElement("img",{src:"./images/mdi_close.svg",alt:"close icon"})))))},te=Object(o.b)(function(e){return{isSearchVisible:z(e),isDeliveryVisible:V(e),locationId:P(e)}},function(e){return{setAddress:function(t){return e(X(t))},setTime:function(t){return e(Y(t))},setSearch:function(t){return e(Q(t))},toggleSearch:function(){return e({type:"TOGGLE_SEARCH"})},toggleDelivery:function(){return e({type:"TOGGLE_DELIVERY"})},closeMobile:function(){return e({type:"CLOSE_MOBILE"})}}})(ee),ae=(a(44),a(45),function(e){var t=e.name;return r.a.createElement("div",{role:"presentation",className:"select"},r.a.createElement("select",{name:t,className:"select__input"},r.a.createElement("option",null,"English"),r.a.createElement("option",null,"Ukrainian")),r.a.createElement("img",{className:"select__icon",src:"./images/world.svg",alt:"world"}),r.a.createElement("img",{className:"select__arrow",src:"./images/arrow-back.svg",alt:"arrow back"}))}),ne=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top-part"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-container"},r.a.createElement("img",{src:"./images/logo-white.svg",alt:"Uber Eats",className:"footer__logo"}),r.a.createElement(ae,{name:"language",options:[{value:"en",label:"Engilsh"}],iconUrl:"./images/world.svg"})),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{href:"/",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/apple.png",alt:"app store"})),r.a.createElement("a",{href:"/",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/google.png",alt:"google play",className:"footer_mobile-app"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{href:"/",className:"links__link links__link--intended"},"About UberEats"),r.a.createElement("a",{href:"/",className:"links__link"},"Read our blog"),r.a.createElement("a",{href:"/",className:"links__link"},"Sign up to deliver"),r.a.createElement("a",{href:"/",className:"links__link"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links"},r.a.createElement("a",{href:"/",className:"links__link links__link--intended"},"Get help"),r.a.createElement("a",{href:"/",className:"links__link"},"Read FAQs"),r.a.createElement("a",{href:"/",className:"links__link"},"View all cities"))),r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{href:"/",className:"links__link"},"Privacy policy"),r.a.createElement("a",{href:"/",className:"links__link"},"Terms to use"),r.a.createElement("a",{href:"/",className:"links__link"},"Pricing")),r.a.createElement("div",{className:"footer__social social"},r.a.createElement("a",{href:"/",className:"social__link"},r.a.createElement("img",{src:"./images/fb.svg",alt:"facebook"})),r.a.createElement("a",{href:"/",className:"social__link"},r.a.createElement("img",{src:"./images/twit.svg",alt:"twitter"})),r.a.createElement("a",{href:"/",className:"social__link"},r.a.createElement("img",{src:"./images/instagram.svg",alt:"instagram"})))))))},re=a(30),ce=(a(46),a(47),function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"lds-dual-ring"}))}),ie=function(e){var t=e.restaurant,a=e.isLoading,c=e.loadRestaurant,i=Object(l.m)().uuid,o=Object(l.k)(),u=Object(l.l)();return Object(n.useEffect)(function(){c(i),window.scrollTo(0,0)},[c,i,o]),Object(n.useEffect)(function(){""!==u.search&&o.push("/restaurants"+u.search)},[u.search,u,o]),a?r.a.createElement(ce,null):r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-block"},r.a.createElement("img",{src:t.heroImageUrls[4].url,className:"top-block__image",alt:"logo"}),r.a.createElement("div",{className:"top-block__info-block"},r.a.createElement("div",{className:"info-block__info"},r.a.createElement("h1",{className:"top-block__title"},t.title),r.a.createElement("div",{className:"top-block__categories"},t.categories.join(" \u2022 ")),r.a.createElement("div",{className:"top-block__address"},t.location.address,t.location.country,"  \u2022  ",r.a.createElement("span",{className:"top-block__address--details"},"More info"))))),r.a.createElement("div",{className:"sections-navlist"},t.sections.map(function(e){return r.a.createElement(re.HashLink,{key:e,to:"#".concat(t.sectionsMap[e].title),className:"sections-navlist__section-nav"},t.sectionsMap[e].title)})),r.a.createElement("div",{className:"sections"},r.a.createElement("div",{className:"sections__section"},t.sections.map(function(e){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement("div",{id:t.sectionsMap[e].title,className:"section__section-title"},t.sectionsMap[e].title),r.a.createElement("div",{className:"section__goods"},t.sectionsMap[e].itemUuids.map(function(e){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement(s.NavLink,{to:"/restaurants/".concat(i,"/").concat(e)},r.a.createElement("div",{className:"goods__good"},r.a.createElement("div",{className:"goods__good-description"},r.a.createElement("div",{className:"goods__good-description--info"},r.a.createElement("p",{className:"goods__good-description--name"},t.entitiesMap[e].title),r.a.createElement("p",{className:"goods__good-description--ingridients"},t.entitiesMap[e].description)),r.a.createElement("div",{className:"goods__good-description--price"},r.a.createElement("span",null,t.entitiesMap[e].price),r.a.createElement("span",null,t.priceBucket[0]))),t.entitiesMap[e].imageUrl?r.a.createElement("img",{className:"goods__good--image",alt:t.entitiesMap[e].title,src:t.entitiesMap[e].imageUrl}):r.a.createElement(r.a.Fragment,null))))})))})))))},se=a(2),le=a.n(se),oe="https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants",ue=function(){var e;return le.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le.a.awrap(fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/locations"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},me=function(e){var t,a;return le.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return n.next=3,le.a.awrap(fetch(oe+"?location="+e));case 3:return t=n.sent,n.abrupt("return",t.json());case 5:return n.next=7,le.a.awrap(fetch(oe));case 7:return a=n.sent,n.abrupt("return",a.json());case 9:case"end":return n.stop()}})},de=function(e){var t;return le.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,le.a.awrap(fetch("".concat("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/").concat(e)));case 2:return t=a.sent,a.abrupt("return",t.json());case 4:case"end":return a.stop()}})},Ee=function(e){var t;return le.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,le.a.awrap(fetch("".concat("https://mate-uber-eats-api.herokuapp.com/api/v1/menu-items/").concat(e)));case 3:if(!(t=a.sent).ok){a.next=6;break}return a.abrupt("return",t.json());case 6:throw new Error(t.statusText);case 9:return a.prev=9,a.t0=a.catch(0),a.abrupt("return","error");case 12:case"end":return a.stop()}},null,null,[[0,9]])},_e=Object(o.b)(function(e){return{restaurant:U(e),isLoading:D(e),currentUuid:x(e),locationId:P(e)}},function(e){return{loadRestaurant:function(t){return e(function(e){return function(t){var a;return le.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"START_LOADING"}),n.next=3,le.a.awrap(de(e));case 3:a=n.sent,t({type:"SET_UUID",currentUuid:e}),t(J(a.data)),t({type:"STOP_LOADING"});case 7:case"end":return n.stop()}})}}(t))}}})(ie),pe=(a(49),function(e){var t=e.imageUrl,a=e.title,n=e.categories,c=e.etaRange,i=e.uuid;return r.a.createElement("div",{className:"restaurant-card",role:"presentation"},r.a.createElement(s.NavLink,{to:"/restaurants/".concat(i)},r.a.createElement("img",{src:t,alt:a,className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},a),r.a.createElement("div",{className:"restaurant-card__categories"},n.map(function(e,t){return 0===t?e[0]:e}).join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},c)))}),fe=(a(50),function(e){var t=e.restaurantsList,a=void 0===t?[]:t,c=e.loadRestaurantsList,i=e.isLoading,s=e.locationId,o=Object(l.l)();Object(n.useEffect)(function(){c(s)},[c,s]);var u=new URLSearchParams(o.search),m=a.filter(function(e){return!u.get("title")||e.slug.includes(u.get("title"))});return i?r.a.createElement(ce,null):r.a.createElement("div",{className:"restaurants-list"},m&&m.map(function(e){return r.a.createElement(pe,{key:e.uuid,uuid:e.uuid,title:e.title,imageUrl:e.heroImageUrl,categories:e.categories,etaRange:e.etaRange.text})}))}),be=Object(o.b)(function(e){return{restaurantsList:j(e),isLoading:D(e),locationId:P(e)}},function(e){return{loadRestaurantsList:function(t){return e((a=t,function(e){var t,n,r;return le.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:return e({type:"START_LOADING"}),c.next=3,le.a.awrap(ue());case 3:return t=c.sent,n=t.data.locations[0],e(F(a||n)),e(q(t.data)),c.next=9,le.a.awrap(me(a));case 9:r=c.sent,e({type:"SET_RESTAURANTS_LIST",restaurantsList:r.data}),e({type:"STOP_LOADING"});case 12:case"end":return c.stop()}})}));var a}}})(fe),ge=(a(51),function(e){var t=e.menuItem,a=e.loadMenuItem,c=e.isLoading,i=e.restaurant,s=e.getCustomPrice,o=e.increaseCounter,u=e.decreaseCounter,m=e.fullPrice,d=e.hasError,E=e.counter,_=Object(l.n)(),p=Object(l.k)(),f=Object(n.useRef)(null),b=Object(n.useRef)(null);return Object(n.useEffect)(function(){return a(_.params.itemUuid),document.body.style.overflow="hidden",function(){document.body.style.overflow="auto"}},[a,_]),c?r.a.createElement(ce,null):d?r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"error-message"},r.a.createElement("span",null,"An error is occured"),r.a.createElement("button",{className:"error-message--button",onClick:p.goBack},"Go back"))):t&&r.a.createElement("div",{className:"popup",onClick:function(e){return f.current&&!f.current.contains(e.target)&&p.goBack()}},r.a.createElement("div",{className:"form",ref:f},r.a.createElement("div",{className:"menu-item"},r.a.createElement("div",{className:"menu-item__top-block"},t.imageUrl&&r.a.createElement("img",{className:"menu-item__photo",src:t.imageUrl,alt:"menu item"}),r.a.createElement("img",{src:"./images/close-button.svg",alt:"close button",onClick:p.goBack,className:"menu-item__close"})),r.a.createElement("div",{className:"menu-item__title-block"},r.a.createElement("h1",{className:"title-block__title"},t.title),r.a.createElement("p",{className:"title-block__description"},t.itemDescription)),r.a.createElement("div",{className:"menu-item__customization-block"},t.customizationsList.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.title},r.a.createElement("div",{className:"customization-block__title"},r.a.createElement("div",{className:"customization-block__title--title"},e.title),r.a.createElement("div",{className:"customization-block__title--permission"},"Choose up to ",e.maxPermitted)),1===e.maxPermitted&&r.a.createElement("form",{className:"customization-block__items"},e.options.map(function(t){return r.a.createElement("div",{key:t.title,className:"customization-block__items--item"},r.a.createElement("label",{className:"customization-block__items--lable"},r.a.createElement("input",{type:"radio",ref:b,name:e.title,value:t.price,className:"radio--default",onChange:function(){return s(t.price,e.title,"radio",t.title)}}),r.a.createElement("div",{className:"customization-block__items--name-price"},r.a.createElement("span",{className:"text-radio"},t.title),r.a.createElement("span",{className:"customization-block__items--price"},"+",i.priceBucket[0],t.price))))})),e.maxPermitted>1&&r.a.createElement("form",{className:"customization-block__items"},e.options.map(function(t){return r.a.createElement("div",{key:t.title,className:"customization-block__items--item"},r.a.createElement("label",{className:"customization-block__items--lable"},r.a.createElement("input",{type:"checkbox",className:"checkbox--default",name:e.title,value:t.price,onChange:function(){return s(t.price,e.title,"checkbox",t.title)}}),r.a.createElement("div",{className:"customization-block__items--name-price"},r.a.createElement("span",{className:"text-checkbox"},t.title),r.a.createElement("span",{className:"customization-block__items--price"},"+",i.priceBucket,t.price))))})))})),r.a.createElement("div",{className:"menu-item__submit-block"},r.a.createElement("div",{className:"submit-block__quantity"},r.a.createElement("span",{className:"submit-block__quantity--tag"},"\u041ai\u043b\u044c\u043ai\u0441\u0442\u044c:"),r.a.createElement("div",{className:"submit-block__quantity--buttons"},r.a.createElement("img",{className:"submit-block__quantity--buttons--plus",src:"./images/Group 18.svg",alt:"add item button",onClick:function(){return u()}}),r.a.createElement("div",{className:"submit-block__quantity--buttons--counter"},E),r.a.createElement("img",{className:"submit-block__quantity--buttons--minus",src:"./images/Group 20.svg",alt:"remove item button",onClick:function(){return o()}}))),r.a.createElement("div",{className:"submit-block__submit"},r.a.createElement("span",{className:"submit-block__submit--count"},"Add ",E," to order"),r.a.createElement("span",{className:"submit-block__submit--price"},m.toFixed(2)," UAH"))))))}),ve=Object(o.b)(function(e){return{menuItem:G(e),isLoading:D(e),restaurant:U(e),counter:H(e),fullPrice:B(e),hasError:M(e)}},function(e){return{setHasError:function(t){return e(W(t))},loadMenuItem:function(t){return e(function(e){return function(t){var a;return le.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"START_LOADING"}),n.next=3,le.a.awrap(Ee(e));case 3:"error"===(a=n.sent)?(t(W(!0)),t({type:"STOP_LOADING"})):(t(K(a.data)),t({type:"SET_CURRENT_PRICE",currentPrice:a.data.price}),t(W(!1)),t({type:"STOP_LOADING"}));case 5:case"end":return n.stop()}})}}(t))},increaseCounter:function(){return e({type:"INCREASE_COUNTER"})},decreaseCounter:function(){return e({type:"DECREASE_COUNTER"})},getCustomPrice:function(t,a,n,r){return e(function(e,t,a,n){return function(r){return le.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:"radio"===a&&r({type:"ADD_PRICE_TOGGLE",addPrice:[e,t,n]}),"checkbox"===a&&r(Z([e,t,n]));case 2:case"end":return c.stop()}})}}(t,a,n,r))}}})(ge),he=function(){return r.a.createElement("div",{className:"page"},r.a.createElement("main",{className:"content"},r.a.createElement(l.d,{exact:!0,path:"/restaurants"},r.a.createElement(be,null)),r.a.createElement(l.d,{path:"/restaurants/:uuid/:itemUuid?"},r.a.createElement(_e,null)),r.a.createElement(l.d,{path:"/restaurants/:uuid/:itemUuid"},r.a.createElement(ve,null)),r.a.createElement(l.c,{from:"/",to:"/restaurants"})))},Ne=function(){return r.a.createElement(s.HashRouter,null,r.a.createElement(l.g,null,r.a.createElement(o.a,{store:R},r.a.createElement(te,null),r.a.createElement(he,null),r.a.createElement(ne,null))))};i.a.render(r.a.createElement(Ne,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.61a1d4e9.chunk.js.map