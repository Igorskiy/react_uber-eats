(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){},35:function(e,t,a){e.exports=a(60)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),i=a(20),o=a(16),l=a(9),u=a(13),m=a(28),d=a(30),E=a(32),b=a(1),_={address:"",time:"",search:"",isMobileSearchVisible:!1,isMobileDeliveryVisible:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ADDRESS":return Object(b.a)({},e,{address:t.address});case"SET_TIME":return Object(b.a)({},e,{time:t.time});case"SET_SEARCH":return Object(b.a)({},e,{search:t.search});case"TOGGLE_SEARCH":return Object(b.a)({},e,{isMobileSearchVisible:!e.isMobileSearchVisible,isMobileDeliveryVisible:!1});case"TOGGLE_DELIVERY":return Object(b.a)({},e,{isMobileDeliveryVisible:!e.isMobileDeliveryVisible,isMobileSearchVisible:!1});case"CLOSE_MOBILE":return Object(b.a)({},e,{isMobileDeliveryVisible:!1,isMobileSearchVisible:!1});default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESTAURANTS_LIST":return t.restaurantsList;default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"START_LOADING":return!0;case"STOP_LOADING":return!1;default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_UUID":return t.currentUuid;default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESTAURANT":return t.restaurant;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MENU_ITEM":return t.menuItem;default:return e}},N=a(15),I={counter:1,currentPrice:0,addPrice:[],isChecked:!1,isEditable:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRICE_TOGGLE":return e.addPrice.find(function(e){return e.subtitle.includes(t.addPrice.subtitle)})?Object(b.a)({},e,{addPrice:[].concat(Object(N.a)(e.addPrice.filter(function(e){return e.subtitle!==t.addPrice.subtitle})),[t.addPrice])}):Object(b.a)({},e,{addPrice:[].concat(Object(N.a)(e.addPrice),[t.addPrice])});case"ADD_PRICE_CHECKBOX":return e.addPrice.find(function(e){return e.customItem.includes(t.addPrice.customItem)})?Object(b.a)({},e,{addPrice:Object(N.a)(e.addPrice.filter(function(e){return e.customItem!==t.addPrice.customItem})).filter(function(e){return e.length})}):Object(b.a)({},e,{addPrice:[].concat(Object(N.a)(e.addPrice),[t.addPrice])});case"DECREASE_COUNTER":return e.counter>1?Object(b.a)({},e,{counter:--e.counter}):e;case"INCREASE_COUNTER":return Object(b.a)({},e,{counter:++e.counter});case"SET_CURRENT_PRICE":return Object(b.a)({},e,{currentPrice:t.currentPrice});case"SET_COUNTER":return Object(b.a)({},e,{counter:t.counter});case"SET_ADD_PRICE":return Object(b.a)({},e,{addPrice:t.addPrice});case"SET_IS_EDITABLE":return Object(b.a)({},e,{isEditable:t.isEditable});case"RESET_ADD_PRICE":return Object(b.a)({},e,{addPrice:[]});default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HAS_ERROR":return t.hasError;default:return e}},O={locationList:null,location:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOCATION_LIST":return Object(b.a)({},e,{locationList:t.locationList});case"SET_LOCATION":return Object(b.a)({},e,{location:t.location});default:return e}},C={basket:[],isBasketShown:!1,basketItemTitle:"",basketItemId:0,isUtensilsRequested:!1,basketItemCount:"",restaurantNotes:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM_IN_BASKET":return Object(b.a)({},e,{basket:[].concat(Object(N.a)(e.basket),[t.basket])});case"SHOW_BASKET":return Object(b.a)({},e,{isBasketShown:!0});case"HIDE_BASKET":return Object(b.a)({},e,{isBasketShown:!1});case"SET_UTENSILS":return Object(b.a)({},e,{basket:e.basket.map(function(e){return e.id===t.basketItemId?Object(b.a)({},e,{utensils:!e.utensils}):e})});case"INCREASE_COUNTER_BASKET":return Object(b.a)({},e,{basket:e.basket.map(function(e){return e.id===t.basketItemId?Object(b.a)({},e,{count:++e.count}):e})});case"DECREASE_COUNTER_BASKET":return Object(b.a)({},e,{basket:e.basket.map(function(e){return e.id===t.basketItemId?Object(b.a)({},e,{count:--e.count}):e})});case"SET_BASKET_ITEM_COUNT":return Object(b.a)({},e,{basket:e.basket.map(function(e){return e.id===t.basketItemId?Object(b.a)({},e,{count:+t.basketItemCount}):e})});case"SET_BASKET_ITEM_ID":return Object(b.a)({},e,{basketItemId:t.basketItemId});case"SET_BASKET_ITEM_TITLE":return Object(b.a)({},e,{basketItemTitle:t.basketItemTitle});case"REMOVE_ITEM":return Object(b.a)({},e,{basket:e.basket.filter(function(e){return e.id!==t.basketItemId})});case"EDIT_ITEM":return Object(b.a)({},e,{basket:e.basket.map(function(a){return a.id===e.basketItemId?Object(b.a)({},t.basket,{id:a.id}):a})});case"SET_RESTAURANT_NOTES":return Object(b.a)({},e,{basket:e.basket.map(function(a){return a.id===e.basketItemId?Object(b.a)({},a,{restaurantNotes:t.restaurantNotes}):a})});case"RESET_BASKET":return Object(b.a)({},e,{basket:[]});default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HAS_WARNING":return t.hasWarning;default:return e}},A=Object(l.a)(),w=function(e){return Object(u.combineReducers)({router:Object(o.b)(e),restaurantsList:p,input:f,isloading:k,currentUuid:g,restaurant:v,menuItem:h,customization:T,hasError:S,location:y,basket:R,hasWarning:j})};Object(u.combineReducers)({router:Object(o.b)(A),restaurantsList:p,input:f,isloading:k,currentUuid:g,restaurant:v,menuItem:h,customization:T,hasError:S,location:y,basket:R,hasWarning:j});var U,L=[E.a,Object(i.save)({debounce:500})],P=(a(29),a(7)),D=a(11),M=(a(48),a(5)),B=(a(49),a(25)),x=a.n(B),G=(a(50),function(e){var t=e.iconUrl,a=e.locationId,n=e.value,c=e.onChange,s=e.type,i=e.placeholder,o=e.name,l=e.isSmall,u=e.label,m=e.locationList,d=e.setLocation,E=x()("control__wrapper",{address:"address"===o}),b=x()("control__input",{"control__input--small":l});return r.a.createElement(r.a.Fragment,null,"address"===o&&r.a.createElement("label",{className:"control"},u&&r.a.createElement("p",{className:"control__label"},u),r.a.createElement("div",{className:E},!!t&&r.a.createElement("img",{src:t,alt:i,className:"control__icon"}),r.a.createElement("select",{onChange:function(e){return d(e.target.value)},value:n,defaultValue:a,name:o,className:b,placeholder:i},m&&m.locations.map(function(e){return r.a.createElement("option",{key:e,value:m.locationsMap[e].id},m.locationsMap[e].title)})))),"address"!==o&&r.a.createElement("label",{className:"control"},u&&r.a.createElement("p",{className:"control__label"},u),r.a.createElement("div",{className:E},!!t&&r.a.createElement("img",{src:t,alt:i,className:"control__icon"}),r.a.createElement("input",{type:s,value:n,onChange:c,name:o,className:b,placeholder:i}))))}),H=function(e){var t=e.restaurantsList;return t?t.feedItems.map(function(e){var a=e.uuid;return t.storesMap[a]}):void 0},z=function(e){return e.location.locationList},V=function(e){return e.location.location},K=function(e){return e.restaurant},F=function(e){return e.basket.basket},W=function(e){return e.customization.isEditable},q=function(e){return 1===e.basket.basket.length?e.basket.basket[0].count:e.basket.basket.reduce(function(e,t){return e+t.count},0)},Y=function(e){return e.basket.basket.length>1?e.basket.basket.reduce(function(e,t){return"number"===typeof e?e+t.price*t.count:e.price*e.count+t.price*t.count}):+e.basket.basket.map(function(e){return e.price*e.count}).join("")},J=function(e){return e.router.location.hash},X=function(e){return e.basket.isBasketShown},Q=function(e){return e.basket.isUtensilsRequested},Z=function(e){return e.hasError},$=function(e){return e.hasWarning},ee=function(e){return e.isloading},te=function(e){return e.currentUuid},ae=function(e){return e.menuItem},ne=function(e){return e.input.isMobileSearchVisible},re=function(e){return e.input.isMobileDeliveryVisible},ce=function(e){return e.basket.basketItemId},se=function(e){return e.customization.counter},ie=function(e){return e.customization.addPrice},oe=function(e){return e.customization.currentPrice+e.customization.addPrice.reduce(function(e,t){return e+t.price},0)},le=function(e){return{type:"SET_UTENSILS",basketItemId:e}},ue=function(e){return{type:"SET_BASKET_ITEM_ID",basketItemId:e}},me=function(e){return{type:"SET_IS_EDITABLE",isEditable:e}},de=function(e){return{type:"REMOVE_ITEM",basketItemId:e}},Ee=function(e){return{type:"INCREASE_COUNTER_BASKET",basketItemId:e}},be=function(e){return{type:"DECREASE_COUNTER_BASKET",basketItemId:e}},_e=function(e){return{type:"SET_LOCATION",location:e}},fe=function(e){return{type:"SET_LOCATION_LIST",locationList:e}},pe=function(e){return{type:"SET_RESTAURANT",restaurant:e}},ke=function(e){return{type:"SET_MENU_ITEM",menuItem:e}},ge=function(e){return{type:"SET_TIME",time:e}},ve=function(e){return{type:"SET_SEARCH",search:e}},he=function(e){return{type:"SET_HAS_WARNING",hasWarning:e}},Ne=function(e){return{type:"SET_HAS_ERROR",hasError:e}},Ie=function(e){return{type:"ADD_PRICE_CHECKBOX",addPrice:e}},Te=Object(M.c)(function(e){return{locationList:z(e),locationId:V(e)}},function(e){return{setLocation:function(t){return e(_e(t))}}})(G),Se=(a(51),function(e){var t=e.basket,a=e.fullPrice,c=e.increaseItem,s=e.decreaseItem,i=e.hideBasket,o=e.removeItem,l=e.setIsEditable,u=e.setBasketItemId,m=e.setRestaurantNotes,d=e.setUtensils,E=Object(n.useRef)(null);return r.a.createElement("div",{className:"popup-basket",onClick:function(e){return E.current&&!E.current.contains(e.target)&&i()}},r.a.createElement("div",{className:"form-basket",ref:E},r.a.createElement("div",{className:"uberEats__basket"},r.a.createElement("img",{src:"./images/close.svg",alt:"close button",className:"basket__close",onClick:function(){return i()}}),r.a.createElement("div",{className:"basket__title"},"Your order"),r.a.createElement("div",null,r.a.createElement("div",{className:"basket__address"},"From",r.a.createElement(P.NavLink,{className:"basket__address--address",to:"/restaurants/".concat(t[0].restaurantUuid)}," ".concat(t[0].restaurantTitle))),r.a.createElement("div",{className:"basket__basket-items-list"},t&&t.map(function(e){var a;return r.a.createElement("div",{key:e.id,className:"basket-items-list__basket-item"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"basket-item__counter"},r.a.createElement("img",{className:"basket-item__counter--button",src:"./images/Group 18.svg",alt:"remove item button",onClick:function(){return s(e.id,e.count)}}),r.a.createElement("span",{className:"basket-item__counter--counter"},e.count),r.a.createElement("img",{className:"basket-item__counter--button",src:"./images/Group 20.svg",alt:"add item button",onClick:function(){return c(e.id)}}),r.a.createElement("button",{onClick:function(){return function(e,t){o(e),1===t.length&&i()}(e.id,t)},className:"basket-item__remove-button"},"remove item")),r.a.createElement("div",{className:"basket-item__item"},r.a.createElement(P.NavLink,{to:"".concat(e.restaurantUuid,"/").concat(e.itemUuid),className:"basket-item__item--name",onClick:function(){return t=!0,a=e.id,l(t),u(a),void i();var t,a}},e.itemTitle),r.a.createElement("div",{className:"basket-item__item--additional-info"},e.customInfo.map(function(e){return r.a.createElement("div",{key:e.customItem},e.customItem.split("-")[0])}))),r.a.createElement("div",{className:"basket-item__item--price"},"UAH ",e.price*e.count)),r.a.createElement("div",{className:"basket__items--item"},r.a.createElement("label",{className:"basket__items--lable"},r.a.createElement("input",{type:"checkbox",className:"checkbox--default",checked:null===(a=t.find(function(t){return t.id===e.id}))||void 0===a?void 0:a.utensils,onChange:function(){return d(e.id)}}),r.a.createElement("div",{className:"basket__items--name-price"},r.a.createElement("span",{className:"text-checkbox--basket"}),r.a.createElement("span",{className:"basket__items--price"},"Add utensils, straws, etc.")))),r.a.createElement("div",{className:"basket__items--note"},r.a.createElement("input",{type:"text",defaultValue:e.restaurantNotes||"",onChange:function(t){return m(t.target.value,e.id)},onFocus:function(){return u(e.id)},placeholder:"note for restaurant"})),r.a.createElement("hr",{className:"basket__items--break"}))})),r.a.createElement("div",{className:"submit-block__submit submit--basket",onClick:function(){return i()}},r.a.createElement("span",{className:"submit-block__submit--count"},1===t.length?t[0].count:t.reduce(function(e,t){return e+t.count},0)),r.a.createElement("span",null,"Total Price"),r.a.createElement("span",{className:"submit-block__submit--price"},a&&a.toFixed(2)," UAH"))))))}),Oe=a(4),ye=a.n(Oe),Ce="https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants",Re=function(){var e;return ye.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ye.a.awrap(fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/locations"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},je=function(e){var t,a;return ye.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return n.next=3,ye.a.awrap(fetch(Ce+"?location="+e));case 3:return t=n.sent,n.abrupt("return",t.json());case 5:return n.next=7,ye.a.awrap(fetch(Ce));case 7:return a=n.sent,n.abrupt("return",a.json());case 9:case"end":return n.stop()}})},Ae=function(e){var t;return ye.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ye.a.awrap(fetch("".concat("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/").concat(e)));case 2:return t=a.sent,a.abrupt("return",t.json());case 4:case"end":return a.stop()}})},we=function(e){var t;return ye.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ye.a.awrap(fetch("".concat("https://mate-uber-eats-api.herokuapp.com/api/v1/menu-items/").concat(e)));case 3:if(!(t=a.sent).ok){a.next=6;break}return a.abrupt("return",t.json());case 6:throw new Error(t.statusText);case 9:return a.prev=9,a.t0=a.catch(0),a.abrupt("return","error");case 12:case"end":return a.stop()}},null,null,[[0,9]])},Ue=Object(M.c)(function(e){return{basket:F(e),fullPrice:Y(e),isUtensilsRequested:Q(e)}},function(e){return{setUtensils:function(t){return e(function(e){return function(t){return ye.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:t(ue(e)),t(le(e));case 2:case"end":return a.stop()}})}}(t))},increaseItem:function(t){return e(function(e){return function(t){return ye.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:t(ue(e)),t(Ee(e));case 2:case"end":return a.stop()}})}}(t))},decreaseItem:function(t,a){return e(function(e,t){return function(a){return ye.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:t>1&&(a(ue(e)),a(be(e)));case 1:case"end":return n.stop()}})}}(t,a))},hideBasket:function(){return e({type:"HIDE_BASKET"})},removeItem:function(t){return e(de(t))},setIsEditable:function(t){return e(me(t))},setBasketItemId:function(t){return e(ue(t))},setRestaurantNotes:function(t,a){return e(function(e,t){return{type:"SET_RESTAURANT_NOTES",restaurantNotes:e,basketItemId:t}}(t,a))}}})(Se),Le=function(e){var t=e.setTime,a=e.setSearch,c=e.toggleSearch,s=e.toggleDelivery,i=e.isSearchVisible,o=e.isDeliveryVisible,l=e.showBasket,u=e.isBasketShown,m=e.closeMobile,d=e.locationId,E=e.basket,b=e.totalCount,_=Object(D.k)(),f=Object(D.l)(),p=new URLSearchParams(f.search);Object(n.useEffect)(function(){_.push("/restaurants"+f.search)},[d,_]);var k=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];clearTimeout(a),a=setTimeout(function(){return e.apply(void 0,r)},t)}}(function(e,n){switch(n){case"time":return t(e);case"search":a(e),p.set("title",e.trim().toLowerCase()),!e.trim()&&p.delete("title"),_.push({search:"".concat(p.toString())});break;default:return}},1e3);return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("img",{onClick:function(){return _.push("/restaurants")},src:"./images/logo.svg",alt:"Uber Eats",className:"header__logo"}),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement(Te,{name:"address",placeholder:"address",iconUrl:"./images/place.svg"}),r.a.createElement(Te,{name:"time",onChange:function(e){return k(e.target.value,"time")},placeholder:"Time",className:"header__time",type:"time"})),r.a.createElement("div",{className:"header__search"},r.a.createElement(Te,{name:"search",onChange:function(e){return k(e.target.value,"search")},placeholder:"Search",iconUrl:"./images/search.svg"})),r.a.createElement("div",{className:"header__toggle-buttons"},r.a.createElement("button",{onClick:s,className:"header__toggle-btn",type:"button"},r.a.createElement("img",{src:"./images/place.svg",alt:"place icon"})),r.a.createElement("button",{onClick:c,className:"header__toggle-btn",type:"button"},r.a.createElement("img",{src:"./images/search.svg",alt:"search icon"}))),0===E.length?r.a.createElement("a",{className:"header__link",href:"/"},"Sign in"):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"./images/basket.svg",className:"header__link",alt:"basket",onClick:function(){return l()}}),r.a.createElement("span",{className:"header__total-count"},b)),u&&r.a.createElement(Ue,null)),(i||o)&&r.a.createElement("div",{className:"header__mobile-controls mobile-controls"},i&&r.a.createElement(Te,{label:"search",name:"search",onChange:function(e){return k(e.target.value,"search")},placeholder:"Search",iconUrl:"./images/search.svg",isSmall:!1}),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,{label:"where",name:"address",placeholder:"address",iconUrl:"./images/place.svg",isSmall:!1}),r.a.createElement(Te,{label:"to",name:"time",onChange:function(e){return k(e.target.value,"time")},placeholder:"Time",className:"header__time",type:"time",isSmall:!1})),r.a.createElement("button",{onClick:m,className:"mobile-controls__close",type:"button"},r.a.createElement("img",{src:"./images/mdi_close.svg",alt:"close icon"})))))},Pe=Object(M.c)(function(e){return{isSearchVisible:ne(e),isDeliveryVisible:re(e),locationId:V(e),basket:F(e),isBasketShown:X(e),totalCount:q(e)}},function(e){return{setTime:function(t){return e(ge(t))},setSearch:function(t){return e(ve(t))},toggleSearch:function(){return e({type:"TOGGLE_SEARCH"})},toggleDelivery:function(){return e({type:"TOGGLE_DELIVERY"})},closeMobile:function(){return e({type:"CLOSE_MOBILE"})},showBasket:function(){return e({type:"SHOW_BASKET"})}}})(Le),De=(a(53),a(54),function(e){var t=e.name;return r.a.createElement("div",{role:"presentation",className:"select"},r.a.createElement("select",{name:t,className:"select__input"},r.a.createElement("option",null,"English"),r.a.createElement("option",null,"Ukrainian")),r.a.createElement("img",{className:"select__icon",src:"./images/world.svg",alt:"world"}),r.a.createElement("img",{className:"select__arrow",src:"./images/arrow-back.svg",alt:"arrow back"}))}),Me=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top-part"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-container"},r.a.createElement("img",{src:"./images/logo-white.svg",alt:"Uber Eats",className:"footer__logo"}),r.a.createElement(De,{name:"language",options:[{value:"en",label:"Engilsh"}],iconUrl:"./images/world.svg"})),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{href:"/",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/apple.png",alt:"app store"})),r.a.createElement("a",{href:"/",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/google.png",alt:"google play",className:"footer_mobile-app"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{href:"/",className:"links__link links__link--intended"},"About UberEats"),r.a.createElement("a",{href:"/",className:"links__link"},"Read our blog"),r.a.createElement("a",{href:"/",className:"links__link"},"Sign up to deliver"),r.a.createElement("a",{href:"/",className:"links__link"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links"},r.a.createElement("a",{href:"/",className:"links__link links__link--intended"},"Get help"),r.a.createElement("a",{href:"/",className:"links__link"},"Read FAQs"),r.a.createElement("a",{href:"/",className:"links__link"},"View all cities"))),r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{href:"/",className:"links__link"},"Privacy policy"),r.a.createElement("a",{href:"/",className:"links__link"},"Terms to use"),r.a.createElement("a",{href:"/",className:"links__link"},"Pricing")),r.a.createElement("div",{className:"footer__social social"},r.a.createElement("a",{href:"/",className:"social__link"},r.a.createElement("img",{src:"./images/fb.svg",alt:"facebook"})),r.a.createElement("a",{href:"/",className:"social__link"},r.a.createElement("img",{src:"./images/twit.svg",alt:"twitter"})),r.a.createElement("a",{href:"/",className:"social__link"},r.a.createElement("img",{src:"./images/instagram.svg",alt:"instagram"})))))))},Be=a(34),xe=(a(55),a(56),function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"lds-dual-ring"}))}),Ge=function(e){var t=e.restaurant,a=e.isLoading,c=e.loadRestaurant,s=Object(D.m)().uuid,i=Object(D.k)(),o=Object(D.l)();return Object(n.useEffect)(function(){c(s),window.scrollTo(0,0)},[c,s,i]),Object(n.useEffect)(function(){""!==o.search&&i.push("/restaurants"+o.search)},[o.search,o,i]),a?r.a.createElement(xe,null):r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-block"},r.a.createElement("img",{src:t.heroImageUrls[4].url,className:"top-block__image",alt:"logo"}),r.a.createElement("div",{className:"top-block__info-block"},r.a.createElement("div",{className:"info-block__info"},r.a.createElement("h1",{className:"top-block__title"},t.title),r.a.createElement("div",{className:"top-block__categories"},t.categories.join(" \u2022 ")),r.a.createElement("div",{className:"top-block__address"},t.location.address,t.location.country,"  \u2022  ",r.a.createElement("span",{className:"top-block__address--details"},"More info"))))),r.a.createElement("div",{className:"sections-navlist"},t.sections.map(function(e){return r.a.createElement(Be.HashLink,{key:e,to:"#".concat(t.sectionsMap[e].title),className:"sections-navlist__section-nav"},t.sectionsMap[e].title)})),r.a.createElement("div",{className:"sections"},r.a.createElement("div",{className:"sections__section"},t.sections.map(function(e){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement("div",{id:t.sectionsMap[e].title,className:"section__section-title"},t.sectionsMap[e].title),r.a.createElement("div",{className:"section__goods"},t.sectionsMap[e].itemUuids.map(function(e){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement(P.NavLink,{to:"/restaurants/".concat(s,"/").concat(e)},r.a.createElement("div",{className:"goods__good"},r.a.createElement("div",{className:"goods__good-description"},r.a.createElement("div",{className:"goods__good-description--info"},r.a.createElement("p",{className:"goods__good-description--name"},t.entitiesMap[e].title),r.a.createElement("p",{className:"goods__good-description--ingridients"},t.entitiesMap[e].description)),r.a.createElement("div",{className:"goods__good-description--price"},r.a.createElement("span",null,t.entitiesMap[e].price),r.a.createElement("span",null,t.priceBucket[0]))),t.entitiesMap[e].imageUrl?r.a.createElement("img",{className:"goods__good--image",alt:t.entitiesMap[e].title,src:t.entitiesMap[e].imageUrl}):r.a.createElement(r.a.Fragment,null))))})))})))))},He=Object(M.c)(function(e){return{restaurant:K(e),isLoading:ee(e),currentUuid:te(e),locationId:V(e)}},function(e){return{loadRestaurant:function(t){return e(function(e){return function(t){var a;return ye.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"START_LOADING"}),n.next=3,ye.a.awrap(Ae(e));case 3:a=n.sent,t({type:"SET_UUID",currentUuid:e}),t(pe(a.data)),t({type:"STOP_LOADING"});case 7:case"end":return n.stop()}})}}(t))}}})(Ge),ze=(a(57),function(e){var t=e.imageUrl,a=e.title,n=e.categories,c=e.etaRange,s=e.uuid;return r.a.createElement("div",{className:"restaurant-card",role:"presentation"},r.a.createElement(P.NavLink,{to:"/restaurants/".concat(s)},r.a.createElement("img",{src:t,alt:a,className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},a),r.a.createElement("div",{className:"restaurant-card__categories"},n.map(function(e,t){return 0===t?e[0]:e}).join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},c)))}),Ve=(a(58),function(e){var t=e.restaurantsList,a=void 0===t?[]:t,c=e.loadRestaurantsList,s=e.isLoading,i=e.locationId,o=e.currentHash,l=Object(D.k)(),u=Object(D.l)();Object(n.useEffect)(function(){c(i)},[c,i]),Object(n.useEffect)(function(){l.push("/restaurants"+o.replace("#/restaurants",""))},[]);var m=new URLSearchParams(u.search),d=a.filter(function(e){return!m.get("title")||e.slug.includes(m.get("title"))});return s?r.a.createElement(xe,null):r.a.createElement("div",{className:"restaurants-list"},d&&d.map(function(e){return r.a.createElement(ze,{key:e.uuid,uuid:e.uuid,title:e.title,imageUrl:e.heroImageUrl,categories:e.categories,etaRange:e.etaRange.text})}))}),Ke=Object(M.c)(function(e){return{restaurantsList:H(e),isLoading:ee(e),locationId:V(e),currentHash:J(e)}},function(e){return{loadRestaurantsList:function(t){return e((a=t,function(e){var t,n,r;return ye.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:return e({type:"START_LOADING"}),c.next=3,ye.a.awrap(Re());case 3:return t=c.sent,n=t.data.locations[0],e(_e(a||n)),e(fe(t.data)),c.next=9,ye.a.awrap(je(a));case 9:r=c.sent,e({type:"SET_RESTAURANTS_LIST",restaurantsList:r.data}),e({type:"STOP_LOADING"});case 12:case"end":return c.stop()}})}));var a}}})(Ve),Fe=(a(59),function(e){var t=e.menuItem,a=e.loadMenuItem,c=e.isEditable,s=e.setIsEditable,i=e.isLoading,o=e.restaurant,l=e.setCustomPrice,u=e.increaseCounter,m=e.decreaseCounter,d=e.fullPrice,E=e.hasError,b=e.counter,_=e.setHasWarning,f=e.hasWarning,p=e.setaddPrice,k=e.setCounter,g=e.removeItem,v=e.basketItemId,h=e.addItemToBasket,N=e.editItemInBasket,I=e.customInfo,T=e.basket,S=e.resetaddPrice,O=Object(D.n)(),y=Object(D.k)(),C=Object(n.useRef)(null),R=Object(n.useRef)(null),j=function(e,t,a,n,r,c,s){s[0]&&!s[0].restaurantTitle.includes(n.title)&&_(!0),(s[0]&&s[0].restaurantTitle===n.title||0===s.length||e)&&(h(e,t,a,n,r,c,I,s),y.goBack())};return Object(n.useEffect)(function(){return a(O.params.itemUuid),c&&(k(T&&T.find(function(e){return e.itemUuid===t.uuid}).count),p(T&&T.find(function(e){return e.id===v}).customInfo)),document.body.style.overflow="hidden",function(){document.body.style.overflow="auto",p([]),k(1),s(!1)}},[a,O]),i?r.a.createElement(xe,null):E?r.a.createElement("div",{className:"popup",onClick:function(e){return C.current&&!C.current.contains(e.target)&&y.goBack()}},r.a.createElement("div",{className:"error-message",ref:C},r.a.createElement("span",null,"An error is occured"),r.a.createElement("button",{className:"error-message--button",onClick:y.goBack},"Go back"))):f?r.a.createElement("div",{className:"popup",onClick:function(e){return C.current&&!C.current.contains(e.target)&&y.goBack()}},r.a.createElement("div",{className:"error-message",ref:C},r.a.createElement("span",null,"Your order contains items from",r.a.createElement("span",{className:"error-message--name"}," ",T[0].restaurantTitle)),r.a.createElement("span",null,"Create a new order to add items from",r.a.createElement("span",{className:"error-message--name"}," ",o.title)),r.a.createElement("button",{className:"error-message--button",onClick:function(){return j(f,t.uuid,t.title,o,b,d,T)}},"create new order"))):t&&r.a.createElement("div",{className:"popup",onClick:function(e){return C.current&&!C.current.contains(e.target)&&y.goBack()}},r.a.createElement("div",{className:"form",ref:C},r.a.createElement("div",{className:"menu-item"},r.a.createElement("div",{className:"menu-item__top-block"},t.imageUrl&&r.a.createElement("img",{className:"menu-item__photo",src:t.imageUrl,alt:"menu item"}),r.a.createElement("img",{src:"./images/close.svg",alt:"close button",onClick:y.goBack,className:"menu-item__close"})),r.a.createElement("div",{className:"menu-item__title-block"},r.a.createElement("h1",{className:"title-block__title"},t.title),r.a.createElement("p",{className:"title-block__description"},t.itemDescription)),r.a.createElement("div",{className:"menu-item__customization-block"},t.customizationsList.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.title},r.a.createElement("div",{className:"customization-block__title"},r.a.createElement("div",{className:"customization-block__title--title"},e.title.split("-")[0]),r.a.createElement("div",{className:"customization-block__title--permission"},"Choose up to ",e.maxPermitted)),1===e.maxPermitted&&r.a.createElement("form",{className:"customization-block__items"},e.options.map(function(t){return r.a.createElement("div",{key:t.title,className:"customization-block__items--item"},r.a.createElement("label",{className:"customization-block__items--lable"},r.a.createElement("input",{type:"radio",ref:R,name:e.title,value:t.price,className:"radio--default",defaultChecked:c&&T.some(function(e){return e.customInfo.some(function(a){return a.customItem===t.title&&e.id===v})}),onChange:function(){return l(t.price,e.title,"radio",t.title,t.uuid)}}),r.a.createElement("div",{className:"customization-block__items--name-price"},r.a.createElement("span",{className:"text-radio"},t.title.split("-")[0]),r.a.createElement("span",{className:"customization-block__items--price"},"+",o.priceBucket[0],t.price))))})),e.maxPermitted>1&&r.a.createElement("form",{className:"customization-block__items"},e.options.map(function(t){return r.a.createElement("div",{key:t.title.split("-")[0],className:"customization-block__items--item"},r.a.createElement("label",{className:"customization-block__items--lable"},r.a.createElement("input",{type:"checkbox",className:"checkbox--default",name:e.title,value:t.price,defaultChecked:c&&T.some(function(e){return e.customInfo.some(function(a){return a.customItem===t.title&&e.id===v})}),onChange:function(){return l(t.price,e.title,"checkbox",t.title,t.uuid)}}),r.a.createElement("div",{className:"customization-block__items--name-price"},r.a.createElement("span",{className:"text-checkbox"},t.title.split("-")[0]),r.a.createElement("span",{className:"customization-block__items--price"},"+",o.priceBucket,t.price))))})))})),c&&r.a.createElement("div",{className:"menu-item__delete-item",onClick:function(){return function(e){g(e),y.goBack()}(v)}},"Remove item"),r.a.createElement("div",{className:"menu-item__submit-block"},r.a.createElement("div",{className:"submit-block__quantity"},r.a.createElement("span",{className:"submit-block__quantity--tag"},"\u041ai\u043b\u044c\u043ai\u0441\u0442\u044c:"),r.a.createElement("div",{className:"submit-block__quantity--buttons"},r.a.createElement("img",{className:"submit-block__quantity--buttons--plus",src:"./images/Group 18.svg",alt:"add item button",onClick:function(){return m()}}),r.a.createElement("div",{className:"submit-block__quantity--buttons--counter"},b),r.a.createElement("img",{className:"submit-block__quantity--buttons--minus",src:"./images/Group 20.svg",alt:"remove item button",onClick:function(){return u()}}))),c?r.a.createElement("div",{className:"submit-block__submit",onClick:function(){return function(e,t,a,n,r){S(),N(e,t,a,n,r,I),y.goBack()}(t.uuid,t.title,o,b,d)}},r.a.createElement("span",{className:"submit-block__submit--count"},"Add ",b," to order"),r.a.createElement("span",{className:"submit-block__submit--price"},(d*b).toFixed(2)," UAH")):r.a.createElement("div",{className:"submit-block__submit",onClick:function(){return j(f,t.uuid,t.title,o,b,d,T)}},r.a.createElement("span",{className:"submit-block__submit--count"},"Add ",b," to order"),r.a.createElement("span",{className:"submit-block__submit--price"},(d*b).toFixed(2)," UAH"))))))}),We=Object(M.c)(function(e){return{menuItem:ae(e),isLoading:ee(e),restaurant:K(e),counter:se(e),fullPrice:oe(e),hasError:Z(e),hasWarning:$(e),isEditable:W(e),customInfo:ie(e),basket:F(e),basketItemId:ce(e)}},function(e){return{resetaddPrice:function(){return e({type:"RESET_ADD_PRICE"})},setHasError:function(t){return e(Ne(t))},setHasWarning:function(t){return e(he(t))},loadMenuItem:function(t){return e(function(e){return function(t){var a;return ye.a.async(function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"START_LOADING"}),n.next=3,ye.a.awrap(we(e));case 3:"error"===(a=n.sent)?(t(Ne(!0)),t({type:"STOP_LOADING"})):(a=Object(b.a)({},a,{data:Object(b.a)({},a.data,{customizationsList:a.data.customizationsList.map(function(e,t,a){return t!==a.indexOf(e.title)||t!==a.lastIndexOf(e)?Object(b.a)({},e,{title:"".concat(e.title,"-").concat(t+1),options:e.options.map(function(e){return Object(b.a)({},e,{title:"".concat(e.title,"-").concat(t+1)})})}):e})})}),t(ke(a.data)),t({type:"SET_CURRENT_PRICE",currentPrice:a.data.price}),t(Ne(!1)),t({type:"STOP_LOADING"}));case 5:case"end":return n.stop()}})}}(t))},setCounter:function(t){return e({type:"SET_COUNTER",counter:t})},setaddPrice:function(t){return e({type:"SET_ADD_PRICE",addPrice:t})},increaseCounter:function(){return e({type:"INCREASE_COUNTER"})},decreaseCounter:function(){return e({type:"DECREASE_COUNTER"})},setIsEditable:function(t){return e(me(t))},removeItem:function(t){return e(de(t))},editItemInBasket:function(t,a,n,r,c,s){return e(function(e,t,a,n,r,c){return function(s){var i;return ye.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:i={price:r,count:n,restaurantTitle:a.title,restaurantUuid:a.uuid,itemTitle:t,itemUuid:e,customInfo:c},s({type:"EDIT_ITEM",basket:i});case 2:case"end":return o.stop()}})}}(t,a,n,r,c,s))},setCustomPrice:function(t,a,n,r){return e(function(e,t,a,n){return function(r){return ye.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:"radio"===a&&r({type:"ADD_PRICE_TOGGLE",addPrice:{price:e,subtitle:t,customItem:n}}),"checkbox"===a&&r(Ie({price:e,subtitle:t,customItem:n}));case 4:case"end":return c.stop()}})}}(t,a,n,r))},addItemToBasket:function(t,a,n,r,c,s,i){return e(function(e,t,a,n,r,c,s){return function(i){var o,l;return ye.a.async(function(u){for(;;)switch(u.prev=u.next){case 0:o=+new Date,l={price:c,count:r,restaurantTitle:n.title,restaurantUuid:n.uuid,itemTitle:a,itemUuid:t,customInfo:s,id:o},e&&i({type:"RESET_BASKET"}),i({type:"ADD_ITEM_IN_BASKET",basket:l}),i(he(!1));case 5:case"end":return u.stop()}})}}(t,a,n,r,c,s,i))}}})(Fe),qe=function(){return r.a.createElement("div",{className:"page"},r.a.createElement("main",{className:"content"},r.a.createElement(D.d,{exact:!0,path:"/restaurants"},r.a.createElement(Ke,null)),r.a.createElement(D.d,{path:"/restaurants/:uuid/:itemUuid?"},r.a.createElement(He,null)),r.a.createElement(D.d,{path:"/restaurants/:uuid/:itemUuid"},r.a.createElement(We,null)),r.a.createElement(D.d,{path:"/restaurants/:uuid?:itemUuid?/basket"},r.a.createElement(Se,null)),r.a.createElement(D.c,{from:"/",to:"/restaurants"})))},Ye=(U=Object(i.load)(),Object(u.createStore)(w(A),U,Object(u.compose)(Object(d.composeWithDevTools)(u.applyMiddleware.apply(void 0,L.concat([Object(m.a)(A)])))))),Je=function(){return r.a.createElement(M.a,{store:Ye},r.a.createElement(o.a,{history:A},r.a.createElement(r.a.Fragment,null," ",r.a.createElement(P.HashRouter,null,r.a.createElement(D.g,null,r.a.createElement(M.a,{store:Ye},r.a.createElement(Pe,null),r.a.createElement(qe,null),r.a.createElement(Me,null)))),r.a.createElement(D.g,null,r.a.createElement(D.d,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,"Match")}}),r.a.createElement(D.d,{render:function(){return r.a.createElement("div",null,"Miss")}})))))};s.a.render(r.a.createElement(Je,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.34c34bba.chunk.js.map