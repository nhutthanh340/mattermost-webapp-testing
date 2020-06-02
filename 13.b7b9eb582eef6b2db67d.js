(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./components/common/back_button.tsx":
/*!*******************************************!*\
  !*** ./components/common/back_button.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackButton; });
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class BackButton extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "back_button",
      className: "signup-header"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      onClick: this.props.onClick,
      to: this.props.url
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "generic_icons.back",
      defaultMessage: "Back Icon"
    }, title => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      id: "back_button_icon",
      className: "fa fa-1x fa-angle-left",
      title: title.toString()
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "web.header.back",
      defaultMessage: "Back"
    })));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(BackButton, "propTypes", {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

_defineProperty(BackButton, "defaultProps", {
  url: '/'
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BackButton, "BackButton", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\common\\back_button.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/infinite_scroll.jsx":
/*!***********************************************!*\
  !*** ./components/common/infinite_scroll.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfiniteScroll; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




const SCROLL_BUFFER = 100;
const DEBOUNCE_WAIT_TIME = 200;
class InfiniteScroll extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "validateBuffer", buffer => {
      if (buffer < SCROLL_BUFFER) {
        return SCROLL_BUFFER;
      }

      return Math.abs(buffer);
    });

    _defineProperty(this, "getAmountOfPages", (total, freq) => {
      return Math.ceil(total / freq);
    });

    _defineProperty(this, "handleScroll", () => {
      const {
        isFetching,
        isEndofData
      } = this.state;
      const {
        callBack,
        bufferValue,
        totalItems,
        itemsPerPage,
        pageNumber
      } = this.props;
      const node = this.node.current;
      const validBuffer = this.validateBuffer(bufferValue);
      const toScroll = node.scrollHeight - node.clientHeight - validBuffer;
      const nearBottom = node.scrollTop > toScroll;

      if (nearBottom && !isEndofData && !isFetching) {
        this.setState({
          isFetching: true
        }, async () => {
          await callBack();
          this.setState({
            isFetching: false
          });

          if (totalItems === 0) {
            this.setState({
              isEndofData: true
            });
            return;
          }

          const amountOfPages = this.getAmountOfPages(totalItems, itemsPerPage);

          if (pageNumber === amountOfPages) {
            this.setState({
              isEndofData: true
            });
          }
        });
      }
    });

    _defineProperty(this, "debounceHandleScroll", lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.handleScroll, DEBOUNCE_WAIT_TIME));

    this.state = {
      isFetching: false,
      isEndofData: false
    };
    this.node = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  }

  componentDidMount() {
    this.node.current.addEventListener('scroll', this.debounceHandleScroll);
  }

  componentWillUnmount() {
    this.node.current.removeEventListener('scroll', this.debounceHandleScroll);
  }

  render() {
    const {
      children,
      endOfDataMessage,
      styleClass,
      loaderStyle
    } = this.props;
    const {
      isEndofData,
      isFetching
    } = this.state;
    const showLoader = !isEndofData && isFetching; // show loader if fetching and end of data is not reached.

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "infinite-scroll ".concat(styleClass),
      ref: this.node
    }, children, showLoader && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: loaderStyle,
      message: " "
    }), !showLoader && endOfDataMessage));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(InfiniteScroll, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,

  /**
   * Function that is called to load more items
   */
  callBack: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
   * Message to display when all the data has been scrolled through
   */
  endOfDataMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * A wrapper class to define styling of the infinite scroll
   */
  styleClass: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * A number that determines how far the scroll is near the bottom before
   * loading more items. The bigger this value the more items will be loaded
   * much earlier as you scroll to the bottom.
   */
  bufferValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,

  /**
   * The total number of items to be scrolled through
   */
  totalItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,

  /**
   * The number of items to load in a single fetch
   */
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,

  /**
   * The current page that has been scrolled to
   */
  pageNumber: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,

  /**
   * Optional style object that's passed on to the underlying loader
   * component
   */
  loaderStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
});

_defineProperty(InfiniteScroll, "defaultProps", {
  bufferValue: SCROLL_BUFFER,
  endOfDataMessage: '',
  styleClass: '',
  loaderStyle: {}
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SCROLL_BUFFER, "SCROLL_BUFFER", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\common\\infinite_scroll.jsx");
  reactHotLoader.register(DEBOUNCE_WAIT_TIME, "DEBOUNCE_WAIT_TIME", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\common\\infinite_scroll.jsx");
  reactHotLoader.register(InfiniteScroll, "InfiniteScroll", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\common\\infinite_scroll.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/site_name_and_description.tsx":
/*!*********************************************************!*\
  !*** ./components/common/site_name_and_description.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteNameAndDescription; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class SiteNameAndDescription extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    const {
      customDescriptionText,
      siteName
    } = this.props;
    let description = null;

    if (customDescriptionText) {
      description = customDescriptionText;
    } else {
      description = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        id: "web.root.signup_info",
        defaultMessage: "All team communication in one place, searchable and accessible anywhere"
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      id: "site_name"
    }, siteName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      id: "site_description",
      className: "color--light"
    }, description));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(SiteNameAndDescription, "propTypes", {
  customDescriptionText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
});

_defineProperty(SiteNameAndDescription, "defaultProps", {
  siteName: 'Mattermost'
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SiteNameAndDescription, "SiteNameAndDescription", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\common\\site_name_and_description.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/select_team/components/select_team_item.jsx":
/*!****************************************************************!*\
  !*** ./components/select_team/components/select_team_item.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectTeamItem; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var components_localized_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/localized_icon */ "./components/localized_icon.tsx");
/* harmony import */ var components_overlay_trigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/overlay_trigger */ "./components/overlay_trigger.tsx");
/* harmony import */ var components_widgets_icons_team_info_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/widgets/icons/team_info_icon */ "./components/widgets/icons/team_info_icon.jsx");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.jsx");
/* harmony import */ var utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/utils.jsx */ "./utils/utils.jsx");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








class SelectTeamItem extends react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleTeamClick", e => {
      e.preventDefault();
      this.props.onTeamClick(this.props.team);
    });

    _defineProperty(this, "renderDescriptionTooltip", () => {
      const team = this.props.team;

      if (!team.description) {
        return null;
      }

      const descriptionTooltip = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
        id: "team-description__tooltip"
      }, team.description);
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_overlay_trigger__WEBPACK_IMPORTED_MODULE_6__["default"], {
        delayShow: 1000,
        placement: "top",
        overlay: descriptionTooltip,
        rootClose: true,
        container: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_widgets_icons_team_info_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "icon icon--info"
      }));
    });
  }

  render() {
    const {
      canJoinPublicTeams,
      canJoinPrivateTeams,
      loading,
      team
    } = this.props;
    let icon;

    if (loading) {
      icon = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "fa fa-refresh fa-spin right signup-team__icon",
        component: "span",
        title: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('generic_icons.loading'),
          defaultMessage: 'Loading Icon'
        }
      });
    } else {
      icon = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "fa fa-angle-right right signup-team__icon",
        component: "span",
        title: {
          id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('select_team.join.icon'),
          defaultMessage: 'Join Team Icon'
        }
      });
    }

    const canJoin = team.allow_open_invite && canJoinPublicTeams || !team.allow_open_invite && canJoinPrivateTeams;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "signup-team-dir"
    }, this.renderDescriptionTooltip(), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "#",
      id: utils_utils_jsx__WEBPACK_IMPORTED_MODULE_9__["createSafeId"](team.display_name),
      onClick: canJoin ? this.handleTeamClick : null,
      className: canJoin ? '' : 'disabled'
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "signup-team-dir__name"
    }, team.display_name), !team.allow_open_invite && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_localized_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "fa fa-lock light",
      title: {
        id: Object(utils_i18n__WEBPACK_IMPORTED_MODULE_8__["t"])('select_team.private.icon'),
        defaultMessage: 'Private team'
      }
    }), canJoin && icon));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(SelectTeamItem, "propTypes", {
  team: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onTeamClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  canJoinPublicTeams: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  canJoinPrivateTeams: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SelectTeamItem, "SelectTeamItem", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\select_team\\components\\select_team_item.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/select_team/index.js":
/*!*****************************************!*\
  !*** ./components/select_team/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mattermost-redux/actions/teams */ "./node_modules/mattermost-redux/actions/teams.js");
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mattermost_redux_actions_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mattermost-redux/actions/roles */ "./node_modules/mattermost-redux/actions/roles.js");
/* harmony import */ var mattermost_redux_actions_roles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_actions_roles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mattermost-redux/selectors/entities/general */ "./node_modules/mattermost-redux/selectors/entities/general.js");
/* harmony import */ var mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/selectors/entities/roles */ "./node_modules/mattermost-redux/selectors/entities/roles.js");
/* harmony import */ var mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mattermost-redux/selectors/entities/teams */ "./node_modules/mattermost-redux/selectors/entities/teams.js");
/* harmony import */ var mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mattermost-redux/selectors/entities/users */ "./node_modules/mattermost-redux/selectors/entities/users.js");
/* harmony import */ var mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var actions_team_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/team_actions */ "./actions/team_actions.jsx");
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/utils */ "./utils/utils.jsx");
/* harmony import */ var _select_team_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./select_team.jsx */ "./components/select_team/select_team.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.














function mapStateToProps(state) {
  const config = Object(mattermost_redux_selectors_entities_general__WEBPACK_IMPORTED_MODULE_5__["getConfig"])(state);
  const currentUser = Object(mattermost_redux_selectors_entities_users__WEBPACK_IMPORTED_MODULE_9__["getCurrentUser"])(state);
  const myTeamMemberships = Object.values(Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_8__["getTeamMemberships"])(state));
  return {
    currentUserId: currentUser.id,
    currentUserRoles: currentUser.roles || '',
    currentUserIsGuest: Object(utils_utils__WEBPACK_IMPORTED_MODULE_11__["isGuest"])(currentUser),
    customDescriptionText: config.CustomDescriptionText,
    isMemberOfTeam: myTeamMemberships && myTeamMemberships.length > 0,
    listableTeams: Object(mattermost_redux_selectors_entities_teams__WEBPACK_IMPORTED_MODULE_8__["getSortedListableTeams"])(state, currentUser.locale),
    siteName: config.SiteName,
    canCreateTeams: Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__["haveISystemPermission"])(state, {
      permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_6__["Permissions"].CREATE_TEAM
    }),
    canManageSystem: Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__["haveISystemPermission"])(state, {
      permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_6__["Permissions"].MANAGE_SYSTEM
    }),
    canJoinPublicTeams: Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__["haveISystemPermission"])(state, {
      permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_6__["Permissions"].JOIN_PUBLIC_TEAMS
    }),
    canJoinPrivateTeams: Object(mattermost_redux_selectors_entities_roles__WEBPACK_IMPORTED_MODULE_7__["haveISystemPermission"])(state, {
      permission: mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_6__["Permissions"].JOIN_PRIVATE_TEAMS
    }),
    siteURL: config.SiteURL,
    totalTeamsCount: state.entities.teams.totalCount || 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
      getTeams: mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_3__["getTeams"],
      loadRolesIfNeeded: mattermost_redux_actions_roles__WEBPACK_IMPORTED_MODULE_4__["loadRolesIfNeeded"],
      addUserToTeam: actions_team_actions__WEBPACK_IMPORTED_MODULE_10__["addUserToTeam"]
    }, dispatch)
  };
}

const _default = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_select_team_jsx__WEBPACK_IMPORTED_MODULE_12__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\select_team\\index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\select_team\\index.js");
  reactHotLoader.register(_default, "default", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\select_team\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/select_team/select_team.jsx":
/*!************************************************!*\
  !*** ./components/select_team/select_team.jsx ***!
  \************************************************/
/*! exports provided: TEAMS_PER_PAGE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEAMS_PER_PAGE", function() { return TEAMS_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectTeam; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mattermost-redux/constants */ "./node_modules/mattermost-redux/constants/index.js");
/* harmony import */ var mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/global_actions.jsx */ "./actions/global_actions.jsx");
/* harmony import */ var actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/diagnostics_actions.jsx */ "./actions/diagnostics_actions.jsx");
/* harmony import */ var utils_user_agent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/user_agent */ "./utils/user_agent.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/constants */ "./utils/constants.jsx");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! images/logo.png */ "./images/logo.png");
/* harmony import */ var images_logo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(images_logo_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_announcement_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/announcement_bar */ "./components/announcement_bar/index.js");
/* harmony import */ var components_common_back_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/common/back_button */ "./components/common/back_button.tsx");
/* harmony import */ var components_loading_screen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/loading_screen */ "./components/loading_screen.tsx");
/* harmony import */ var components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/permissions_gates/system_permission_gate */ "./components/permissions_gates/system_permission_gate/index.js");
/* harmony import */ var components_common_site_name_and_description__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/common/site_name_and_description */ "./components/common/site_name_and_description.tsx");
/* harmony import */ var components_widgets_icons_fa_logout_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/widgets/icons/fa_logout_icon */ "./components/widgets/icons/fa_logout_icon.jsx");
/* harmony import */ var components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/formatted_markdown_message */ "./components/formatted_markdown_message.jsx");
/* harmony import */ var _common_infinite_scroll_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/infinite_scroll.jsx */ "./components/common/infinite_scroll.jsx");
/* harmony import */ var _components_select_team_item_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/select_team_item.jsx */ "./components/select_team/components/select_team_item.jsx");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



















const TEAMS_PER_PAGE = 30;
const TEAM_MEMBERSHIP_DENIAL_ERROR_ID = 'api.team.add_members.user_denied';
class SelectTeam extends react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "fetchMoreTeams", async () => {
      const {
        currentPage
      } = this.state;
      const {
        actions
      } = this.props;
      const response = await actions.getTeams(currentPage, TEAMS_PER_PAGE, true); // We don't want to increase the page number if no data came back previously

      if (!response.error && !(response.error instanceof Error)) {
        this.setState(prevState => ({
          currentPage: prevState.currentPage + 1
        }));
      }
    });

    _defineProperty(this, "handleTeamClick", async team => {
      const {
        siteURL,
        currentUserRoles
      } = this.props;
      this.setState({
        loadingTeamId: team.id
      });
      const {
        data,
        error
      } = await this.props.actions.addUserToTeam(team.id, this.props.currentUserId);

      if (data) {
        this.props.history.push("/".concat(team.name, "/channels/").concat(utils_constants__WEBPACK_IMPORTED_MODULE_11__["default"].DEFAULT_CHANNEL));
      } else if (error) {
        let errorMsg = error.message;

        if (error.server_error_id === TEAM_MEMBERSHIP_DENIAL_ERROR_ID) {
          if (currentUserRoles.includes(utils_constants__WEBPACK_IMPORTED_MODULE_11__["default"].PERMISSIONS_SYSTEM_ADMIN)) {
            errorMsg = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_19__["default"], {
              id: "join_team_group_constrained_denied_admin",
              defaultMessage: "You need to be a member of a linked group to join this team. You can add a group to this team [here](".concat(siteURL, "/admin_console/user_management/groups)."),
              values: {
                siteURL
              }
            });
          } else {
            errorMsg = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_formatted_markdown_message__WEBPACK_IMPORTED_MODULE_19__["default"], {
              id: "join_team_group_constrained_denied",
              defaultMessage: "You need to be a member of a linked group to join this team."
            });
          }
        }

        this.setState({
          error: errorMsg,
          loadingTeamId: ''
        });
      }
    });

    _defineProperty(this, "handleLogoutClick", e => {
      e.preventDefault();
      Object(actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_9__["trackEvent"])('select_team', 'click_logout');
      Object(actions_global_actions_jsx__WEBPACK_IMPORTED_MODULE_8__["emitUserLoggedOutEvent"])('/login');
    });

    _defineProperty(this, "clearError", e => {
      e.preventDefault();
      this.setState({
        error: null
      });
    });

    this.state = {
      loadingTeamId: '',
      error: null,
      endofTeamsData: false,
      currentPage: 0,
      currentListableTeams: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.listableTeams.length !== state.currentListableTeams.length) {
      return {
        currentListableTeams: props.listableTeams.slice(0, TEAMS_PER_PAGE * state.currentPage)
      };
    }

    return null;
  }

  componentDidMount() {
    Object(actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_9__["trackEvent"])('signup', 'signup_select_team', {
      userId: this.props.currentUserId
    });
    this.fetchMoreTeams();
    this.props.actions.loadRolesIfNeeded(this.props.currentUserRoles.split(' '));
  }

  render() {
    const {
      currentPage,
      currentListableTeams
    } = this.state;
    const {
      currentUserIsGuest,
      canManageSystem,
      customDescriptionText,
      isMemberOfTeam,
      siteName,
      canCreateTeams,
      canJoinPublicTeams,
      canJoinPrivateTeams,
      totalTeamsCount
    } = this.props;
    let openContent;

    if (this.state.loadingTeamId) {
      openContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_loading_screen__WEBPACK_IMPORTED_MODULE_15__["default"], null);
    } else if (this.state.error) {
      openContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "signup__content"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: 'form-group has-error'
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        className: "control-label"
      }, this.state.error)));
    } else if (currentUserIsGuest) {
      openContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "signup__content"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: 'form-group has-error'
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
        className: "control-label"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "signup_team.guest_without_channels",
        defaultMessage: "Your guest account has no channels assigned. Please contact an administrator."
      }))));
    } else {
      let joinableTeamContents = [];
      currentListableTeams.forEach(listableTeam => {
        if (listableTeam.allow_open_invite && canJoinPublicTeams || !listableTeam.allow_open_invite && canJoinPrivateTeams) {
          joinableTeamContents.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_select_team_item_jsx__WEBPACK_IMPORTED_MODULE_21__["default"], {
            key: 'team_' + listableTeam.name,
            team: listableTeam,
            onTeamClick: this.handleTeamClick,
            loading: this.state.loadingTeamId === listableTeam.id,
            canJoinPublicTeams: canJoinPublicTeams,
            canJoinPrivateTeams: canJoinPrivateTeams
          }));
        }
      });

      if (joinableTeamContents.length === 0 && (canCreateTeams || canManageSystem)) {
        joinableTeamContents = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "signup-team-dir-err"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "signup_team.no_open_teams_canCreate",
          defaultMessage: "No teams are available to join. Please create a new team or ask your administrator for an invite."
        })));
      } else if (joinableTeamContents.length === 0) {
        joinableTeamContents = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          className: "signup-team-dir-err"
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_16__["default"], {
          permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__["Permissions"].CREATE_TEAM]
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "signup_team.no_open_teams_canCreate",
          defaultMessage: "No teams are available to join. Please create a new team or ask your administrator for an invite."
        })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_16__["default"], {
          permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__["Permissions"].CREATE_TEAM],
          invert: true
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "signup_team.no_open_teams",
          defaultMessage: "No teams are available to join. Please ask your administrator for an invite."
        }))));
      }

      openContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        id: "teamsYouCanJoinContent",
        className: "signup__content"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "signup_team.join_open",
        defaultMessage: "Teams you can join: "
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_common_infinite_scroll_jsx__WEBPACK_IMPORTED_MODULE_20__["default"], {
        callBack: this.fetchMoreTeams,
        styleClass: "signup-team-all",
        totalItems: totalTeamsCount,
        itemsPerPage: TEAMS_PER_PAGE,
        bufferValue: 280,
        pageNumber: currentPage,
        loaderStyle: {
          padding: '0px',
          height: '40px'
        }
      }, joinableTeamContents));
    }

    const teamSignUp = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_16__["default"], {
      permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__["Permissions"].CREATE_TEAM]
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "margin--extra",
      style: {
        marginTop: '0.5em'
      }
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      id: "createNewTeamLink",
      to: "/create_team",
      onClick: () => Object(actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_9__["trackEvent"])('select_team', 'click_create_team'),
      className: "signup-team-login"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "login.createTeam",
      defaultMessage: "Create a team"
    }))));
    let adminConsoleLink;

    if (!utils_user_agent__WEBPACK_IMPORTED_MODULE_10__["isMobileApp"]()) {
      adminConsoleLink = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_permissions_gates_system_permission_gate__WEBPACK_IMPORTED_MODULE_16__["default"], {
        permissions: [mattermost_redux_constants__WEBPACK_IMPORTED_MODULE_7__["Permissions"].MANAGE_SYSTEM]
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "mt-8 hidden-xs"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/admin_console",
        className: "signup-team-login",
        onClick: () => Object(actions_diagnostics_actions_jsx__WEBPACK_IMPORTED_MODULE_9__["trackEvent"])('select_team', 'click_system_console')
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "signup_team_system_console",
        defaultMessage: "Go to System Console"
      }))));
    }

    let headerButton;

    if (this.state.error) {
      headerButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_common_back_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onClick: this.clearError
      });
    } else if (isMemberOfTeam) {
      headerButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_common_back_button__WEBPACK_IMPORTED_MODULE_14__["default"], null);
    } else {
      headerButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "signup-header"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "#",
        id: "logout",
        onClick: this.handleLogoutClick
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_widgets_icons_fa_logout_icon__WEBPACK_IMPORTED_MODULE_18__["default"], null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "web.header.logout",
        defaultMessage: "Logout"
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_announcement_bar__WEBPACK_IMPORTED_MODULE_13__["default"], null), headerButton, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "col-sm-12"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: 'signup-team__container'
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
      alt: 'signup team logo',
      className: "signup-team-logo",
      src: images_logo_png__WEBPACK_IMPORTED_MODULE_12___default.a
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_common_site_name_and_description__WEBPACK_IMPORTED_MODULE_17__["default"], {
      customDescriptionText: customDescriptionText,
      siteName: siteName
    }), openContent, teamSignUp, adminConsoleLink)));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

_defineProperty(SelectTeam, "propTypes", {
  currentUserId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  currentUserRoles: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  currentUserIsGuest: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  customDescriptionText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  isMemberOfTeam: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  listableTeams: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  siteName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  canCreateTeams: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  canManageSystem: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  canJoinPublicTeams: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  canJoinPrivateTeams: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  siteURL: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    getTeams: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    loadRolesIfNeeded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
    addUserToTeam: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }).isRequired,
  totalTeamsCount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TEAMS_PER_PAGE, "TEAMS_PER_PAGE", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\select_team\\select_team.jsx");
  reactHotLoader.register(TEAM_MEMBERSHIP_DENIAL_ERROR_ID, "TEAM_MEMBERSHIP_DENIAL_ERROR_ID", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\select_team\\select_team.jsx");
  reactHotLoader.register(SelectTeam, "SelectTeam", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\select_team\\select_team.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/widgets/icons/fa_logout_icon.jsx":
/*!*****************************************************!*\
  !*** ./components/widgets/icons/fa_logout_icon.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogoutIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class LogoutIcon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "generic_icons.logout",
      defaultMessage: "Logout Icon"
    }, title => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-1x fa-angle-left",
      title: title
    }));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LogoutIcon, "LogoutIcon", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\widgets\\icons\\fa_logout_icon.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/widgets/icons/team_info_icon.jsx":
/*!*****************************************************!*\
  !*** ./components/widgets/icons/team_info_icon.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamInfoIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class TeamInfoIcon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", this.props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "generic_icons.info",
      defaultMessage: "Info Icon"
    }, ariaLabel => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "100%",
      height: "100%",
      viewBox: "0 0 20 20",
      style: style,
      role: "img",
      "aria-label": ariaLabel
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      transform: "matrix(1.17647,0,0,1.17647,-1.55431e-15,-1.00573e-14)"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M8.5,0C3.797,0 0,3.797 0,8.5C0,13.203 3.797,17 8.5,17C13.203,17 17,13.203 17,8.5C17,3.797 13.203,0 8.5,0ZM10,8.5C10,7.672 9.328,7 8.5,7C7.672,7 7,7.672 7,8.5L7,12.45C7,13.278 7.672,13.95 8.5,13.95C9.328,13.95 10,13.278 10,12.45L10,8.5ZM8.5,3C9.328,3 10,3.672 10,4.5C10,5.328 9.328,6 8.5,6C7.672,6 7,5.328 7,4.5C7,3.672 7.672,3 8.5,3Z"
    })))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
const style = {
  fillRule: 'evenodd',
  clipRule: 'evenodd',
  strokeLinejoin: 'round',
  strokeMiterlimit: 1.41421
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TeamInfoIcon, "TeamInfoIcon", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\widgets\\icons\\team_info_icon.jsx");
  reactHotLoader.register(style, "style", "F:\\HKVIII\\C\xE1c Ch\u1EE7 \u0111\u1EC1 N\xE2ng cao trong C\xF4ng ngh\u1EC7 ph\u1EA7n m\u1EC1m\\mattermost-webapp-master\\components\\widgets\\icons\\team_info_icon.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "files/6ff072d843f837505f68ad89158fd0b0.png";

/***/ })

}]);
//# sourceMappingURL=13.b7b9eb582eef6b2db67d.js.map