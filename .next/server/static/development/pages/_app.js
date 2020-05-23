module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./components/with-redux.js":
/*!**********************************!*\
  !*** ./components/with-redux.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nconst isServer = true;\nconst __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';\n\nfunction getOrCreateStore(initialState) {\n  if (isServer) {\n    return Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(initialState);\n  }\n\n  if (!window[__NEXT_REDUX_STORE__]) {\n    window[__NEXT_REDUX_STORE__] = Object(_store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(initialState);\n  }\n\n  return window[__NEXT_REDUX_STORE__];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comp => {\n  class WithReduxApp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props) {\n      super(props);\n      this.reduxStore = getOrCreateStore(props.initialReduxState);\n    }\n\n    render() {\n      const _this$props = this.props,\n            {\n        Component,\n        pageProps\n      } = _this$props,\n            rest = _objectWithoutProperties(_this$props, [\"Component\", \"pageProps\"]);\n\n      console.log(Component, pageProps);\n\n      if (pageProps) {\n        pageProps.test = \"123\";\n      }\n\n      return __jsx(Comp, _extends({\n        Component: Component,\n        pageProps: pageProps\n      }, rest, {\n        reduxStore: this.reduxStore\n      }));\n    }\n\n  }\n\n  WithReduxApp.getInitialProps = async ctx => {\n    const reduxStore = getOrCreateStore();\n    ctx.reduxStore = reduxStore;\n    let appProps = {};\n\n    if (typeof Comp.getInitialProps === 'function') {\n      appProps = await Comp.getInitialProps(ctx);\n    } // 前端会保存该对象序列化的js对象\n\n\n    return _objectSpread(_objectSpread({}, appProps), {}, {\n      initialReduxState: reduxStore.getState()\n    });\n  };\n\n  return WithReduxApp;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dpdGgtcmVkdXguanM/ZTYzOCJdLCJuYW1lcyI6WyJpc1NlcnZlciIsIl9fTkVYVF9SRURVWF9TVE9SRV9fIiwiZ2V0T3JDcmVhdGVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwid2luZG93IiwiQ29tcCIsIldpdGhSZWR1eEFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlZHV4U3RvcmUiLCJpbml0aWFsUmVkdXhTdGF0ZSIsInJlbmRlciIsInBhZ2VQcm9wcyIsInJlc3QiLCJjb25zb2xlIiwibG9nIiwidGVzdCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImFwcFByb3BzIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxNQUFNQSxRQUFRLE9BQWQ7QUFDQSxNQUFNQyxvQkFBb0IsR0FBQyxzQkFBM0I7O0FBRUEsU0FBU0MsZ0JBQVQsQ0FBMEJDLFlBQTFCLEVBQXVDO0FBQ3RDLE1BQUlILFFBQUosRUFBYztBQUNiLFdBQU9JLDREQUFXLENBQUNELFlBQUQsQ0FBbEI7QUFDQTs7QUFDRCxNQUFHLENBQUNFLE1BQU0sQ0FBQ0osb0JBQUQsQ0FBVixFQUFpQztBQUNoQ0ksVUFBTSxDQUFDSixvQkFBRCxDQUFOLEdBQStCRyw0REFBVyxDQUFDRCxZQUFELENBQTFDO0FBQ0E7O0FBQ0QsU0FBT0UsTUFBTSxDQUFDSixvQkFBRCxDQUFiO0FBQ0E7O0FBQ2NLLG1FQUFJLElBQUU7QUFDcEIsUUFBTUMsWUFBTixTQUEyQkMsNENBQUssQ0FBQ0MsU0FBakMsQ0FBMEM7QUFDekNDLGVBQVcsQ0FBQ0MsS0FBRCxFQUFPO0FBQ2pCLFlBQU1BLEtBQU47QUFDQSxXQUFLQyxVQUFMLEdBQWtCVixnQkFBZ0IsQ0FBQ1MsS0FBSyxDQUFDRSxpQkFBUCxDQUFsQztBQUNBOztBQUNEQyxVQUFNLEdBQUU7QUFDUCwwQkFBc0MsS0FBS0gsS0FBM0M7QUFBQSxZQUFNO0FBQUNGLGlCQUFEO0FBQVdNO0FBQVgsT0FBTjtBQUFBLFlBQThCQyxJQUE5Qjs7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlULFNBQVosRUFBc0JNLFNBQXRCOztBQUNBLFVBQUdBLFNBQUgsRUFBYTtBQUNaQSxpQkFBUyxDQUFDSSxJQUFWLEdBQWUsS0FBZjtBQUNBOztBQUNELGFBQU8sTUFBQyxJQUFEO0FBQU0saUJBQVMsRUFBRVYsU0FBakI7QUFBNEIsaUJBQVMsRUFBRU07QUFBdkMsU0FBc0RDLElBQXREO0FBQTRELGtCQUFVLEVBQUUsS0FBS0o7QUFBN0UsU0FBUDtBQUNBOztBQVp3Qzs7QUFjMUNMLGNBQVksQ0FBQ2EsZUFBYixHQUErQixNQUFPQyxHQUFQLElBQWE7QUFDM0MsVUFBTVQsVUFBVSxHQUFHVixnQkFBZ0IsRUFBbkM7QUFDQW1CLE9BQUcsQ0FBQ1QsVUFBSixHQUFpQkEsVUFBakI7QUFDQSxRQUFJVSxRQUFRLEdBQUcsRUFBZjs7QUFDQSxRQUFHLE9BQU9oQixJQUFJLENBQUNjLGVBQVosS0FBOEIsVUFBakMsRUFBNEM7QUFDM0NFLGNBQVEsR0FBRyxNQUFNaEIsSUFBSSxDQUFDYyxlQUFMLENBQXFCQyxHQUFyQixDQUFqQjtBQUNBLEtBTjBDLENBTzNDOzs7QUFDQSwyQ0FDSUMsUUFESjtBQUVDVCx1QkFBaUIsRUFBRUQsVUFBVSxDQUFDVyxRQUFYO0FBRnBCO0FBS0EsR0FiRDs7QUFjQSxTQUFPaEIsWUFBUDtBQUNBLENBOUJEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93aXRoLXJlZHV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuY29uc3QgX19ORVhUX1JFRFVYX1NUT1JFX189J19fTkVYVF9SRURVWF9TVE9SRV9fJ1xuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSl7XG5cdGlmIChpc1NlcnZlcikge1xuXHRcdHJldHVybiBjcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpXG5cdH1cblx0aWYoIXdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10pe1xuXHRcdHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10gPSBjcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpXG5cdH1cblx0cmV0dXJuIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX11cbn1cbmV4cG9ydCBkZWZhdWx0IENvbXA9Pntcblx0Y2xhc3MgV2l0aFJlZHV4QXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRcdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRcdHN1cGVyKHByb3BzKVxuXHRcdFx0dGhpcy5yZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSlcblx0XHR9XG5cdFx0cmVuZGVyKCl7XG5cdFx0XHRjb25zdCB7Q29tcG9uZW50LHBhZ2VQcm9wcywuLi5yZXN0fSA9IHRoaXMucHJvcHNcblx0XHRcdGNvbnNvbGUubG9nKENvbXBvbmVudCxwYWdlUHJvcHMpXG5cdFx0XHRpZihwYWdlUHJvcHMpe1xuXHRcdFx0XHRwYWdlUHJvcHMudGVzdD1cIjEyM1wiXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gPENvbXAgQ29tcG9uZW50PXtDb21wb25lbnR9IHBhZ2VQcm9wcz17cGFnZVByb3BzfSB7Li4ucmVzdH0gcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfS8+XG5cdFx0fVxuXHR9XG5cdFdpdGhSZWR1eEFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KT0+e1xuXHRcdGNvbnN0IHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKClcblx0XHRjdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmVcblx0XHRsZXQgYXBwUHJvcHMgPSB7fVxuXHRcdGlmKHR5cGVvZiBDb21wLmdldEluaXRpYWxQcm9wcz09PSdmdW5jdGlvbicpe1xuXHRcdFx0YXBwUHJvcHMgPSBhd2FpdCBDb21wLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cdFx0fVxuXHRcdC8vIOWJjeerr+S8muS/neWtmOivpeWvueixoeW6j+WIl+WMlueahGpz5a+56LGhXG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLmFwcFByb3BzLFxuXHRcdFx0aW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKVxuXG5cdFx0fVxuXHR9XG5cdHJldHVybiBXaXRoUmVkdXhBcHBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/with-redux.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.less":
/*!******************************************!*\
  !*** ./node_modules/antd/dist/antd.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5sZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.less\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7OztBQWVBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWlCLG9CQUE0QztBQUMzRDtBQUdGQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFxRCxLQUEzRDtBQUdBLHdCQUNFLHFFQUdJO0FBQ0E7QUFDSSxNQUFFQyxPQUFPLElBQVQsV0FBd0I7QUFBRUMsU0FBRyxFQUFFQyxTQUFTLENBQXhDLE1BQXdDO0FBQWhCLEtBQXhCLEdBTlYsRUFDRSxFQURGO0FBZkY7O0FBQUE7OztBQUhtQkMsRyxDQUlaQyxtQkFKWUQsR0FJVUUsa0JBSlZGO0FBQUFBLEcsQ0FLWkcsZUFMWUgsR0FLTUUsa0JBTE5GO0FBK0JyQjtBQUNBOztBQUVBLFVBQTJDO0FBQ3pDSSxlQUFhLEdBQUcscUJBQVMsTUFBTTtBQUM3QkMsV0FBTyxDQUFQQTtBQURGRCxHQUFnQixDQUFoQkE7QUFNQUUsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkJELFdBQU8sQ0FBUEE7QUFERkMsR0FBVSxDQUFWQTtBQU9GLEMsQ0FBQTs7O0FBQ08sc0JBQTJCO0FBQ2hDLFlBQTJDRixhQUFhO0FBQ3hELFNBQU9HLENBQUMsQ0FBUjtBQUdLOztBQUFBLDJCQUFtQztBQUN4QztBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBTztBQUNMLGdCQUFZO0FBQ1YsZ0JBQTJDRCxPQUFPO0FBQ2xEO0FBSEc7O0FBS0wsbUJBQWU7QUFDYixnQkFBMkNBLE9BQU87QUFDbEQ7QUFQRzs7QUFTTCxpQkFBYTtBQUNYLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVhHOztBQWFMRSxRQUFJLEVBQUUsTUFBTTtBQUNWLGdCQUEyQ0YsT0FBTztBQUNsREcsWUFBTSxDQUFOQTtBQWZHO0FBaUJMQyxRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSixPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMRSxVQUFNLEVBQUUsY0FBK0I7QUFDckMsZ0JBQTJDTCxPQUFPO0FBQ2xELFlBQU1NLFNBQVMsR0FBR0MsRUFBRSxVQUFwQjtBQUNBLFlBQU1DLE9BQU8sR0FBR0QsRUFBRSxJQUFsQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTE0sV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQ1QsT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLGFBQVAsRUFBT0EsQ0FBUDtBQTlCRztBQWdDTE8sYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1YsT0FBTztBQUNsRCxZQUFNVyxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPSixNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.less */ \"./node_modules/antd/dist/antd.less\");\n/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_with_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/with-redux */ \"./components/with-redux.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  static async getInitialProps(ctx) {\n    const {\n      Component\n    } = ctx;\n    let pageProps = {};\n\n    if (Component.getInitialProps) {\n      pageProps = await Component.getInitialProps(ctx);\n    }\n\n    return {\n      pageProps\n    };\n  }\n\n  render() {\n    console.log(\"my app init\");\n    const {\n      Component,\n      pageProps,\n      reduxStore\n    } = this.props;\n    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n      store: reduxStore\n    }, __jsx(Component, pageProps));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_with_redux__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwicmVkdXhTdG9yZSIsInByb3BzIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBTixTQUFvQkMsK0NBQXBCLENBQXVCO0FBQ3RCLGVBQWFDLGVBQWIsQ0FBNkJDLEdBQTdCLEVBQWlDO0FBQ2hDLFVBQU07QUFBQ0M7QUFBRCxRQUFjRCxHQUFwQjtBQUNBLFFBQUlFLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxRQUFHRCxTQUFTLENBQUNGLGVBQWIsRUFBNkI7QUFDNUJHLGVBQVMsR0FBRyxNQUFNRCxTQUFTLENBQUNGLGVBQVYsQ0FBMEJDLEdBQTFCLENBQWxCO0FBQ0E7O0FBQ0QsV0FBTztBQUNORTtBQURNLEtBQVA7QUFHQTs7QUFDREMsUUFBTSxHQUFHO0FBQ1JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQSxVQUFNO0FBQUNKLGVBQUQ7QUFBV0MsZUFBWDtBQUFxQkk7QUFBckIsUUFBaUMsS0FBS0MsS0FBNUM7QUFDQSxXQUNDLE1BQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUVEO0FBQWpCLE9BQ0MsTUFBQyxTQUFELEVBQWVKLFNBQWYsQ0FERCxDQUREO0FBS0E7O0FBbkJxQjs7QUFxQlJNLHFJQUFTLENBQUNYLEtBQUQsQ0FBeEIiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5sZXNzJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICcuLi9jb21wb25lbnRzL3dpdGgtcmVkdXgnXG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwe1xuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCl7XG5cdFx0Y29uc3Qge0NvbXBvbmVudH0gPSBjdHhcblx0XHRsZXQgcGFnZVByb3BzID0ge31cblx0XHRpZihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcblx0XHRcdHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0cGFnZVByb3BzXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZyhcIm15IGFwcCBpbml0XCIpXG5cdFx0Y29uc3Qge0NvbXBvbmVudCxwYWdlUHJvcHMscmVkdXhTdG9yZX09dGhpcy5wcm9wc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cblx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KE15QXBwKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: add, addAsync, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAsync\", function() { return addAsync; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initiallizeStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst initialState = {\n  count: 0\n};\nconst userInitialState = {\n  username: 'majy',\n  age: 30\n};\nconst ADD = 'add';\nconst UPDATE_USER = \"UPDATE_USER\"; // 纯函数，没有副作用\n// 有任何更新都要返回新的对象\n// 可以通过 combineReducers合并\n\nfunction countReducer(state = initialState, action) {\n  console.log(state, action);\n\n  switch (action.type) {\n    case ADD:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        count: state.count + (action.num || 1)\n      });\n\n    default:\n      return state;\n  }\n}\n\nfunction userReducer(state = userInitialState, action) {\n  console.log(state, action);\n\n  switch (action.type) {\n    case UPDATE_USER:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        username: action.user\n      });\n\n    default:\n      return state;\n  }\n}\n\nconst reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  counter: countReducer,\n  user: userReducer\n}); // action creater\n\nfunction add(num) {\n  return {\n    type: ADD,\n    num\n  };\n} // async action creater\n\nfunction addAsync(num) {\n  return (dispatch, getState) => {\n    setTimeout(() => {\n      dispatch(add(num));\n    }, 1000);\n  };\n} // store.subscribe(()=>{\n// \tconsole.log('changed',store.getState())\n// })\n// store.dispatch(add(3))\n// store.dispatch(addAsync(4))\n// store.dispatch({type:'add'})\n// store.dispatch({type:'UPDATE_USER',user:'ghge'})\n// 这种方式store有重用的风险\n// export default store\n\nfunction initiallizeStore(state) {\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object.assign({}, {\n    counter: initialState,\n    user: userInitialState\n  }, state), Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9zdG9yZS5qcz80MmEyIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImNvdW50IiwidXNlckluaXRpYWxTdGF0ZSIsInVzZXJuYW1lIiwiYWdlIiwiQUREIiwiVVBEQVRFX1VTRVIiLCJjb3VudFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwibnVtIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNvdW50ZXIiLCJhZGQiLCJhZGRBc3luYyIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiaW5pdGlhbGxpemVTdG9yZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiUmVkdXhUaHVuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNwQkMsT0FBSyxFQUFFO0FBRGEsQ0FBckI7QUFHQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUN4QkMsVUFBUSxFQUFDLE1BRGU7QUFFeEJDLEtBQUcsRUFBRTtBQUZtQixDQUF6QjtBQUlBLE1BQU1DLEdBQUcsR0FBRyxLQUFaO0FBQ0EsTUFBTUMsV0FBVyxHQUFDLGFBQWxCLEMsQ0FDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MsWUFBVCxDQUFzQkMsS0FBSyxHQUFDUixZQUE1QixFQUF5Q1MsTUFBekMsRUFBZ0Q7QUFDL0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaLEVBQWtCQyxNQUFsQjs7QUFDQSxVQUFPQSxNQUFNLENBQUNHLElBQWQ7QUFDQyxTQUFLUCxHQUFMO0FBQ0MsNkNBQVdHLEtBQVg7QUFBa0JQLGFBQUssRUFBQ08sS0FBSyxDQUFDUCxLQUFOLElBQWFRLE1BQU0sQ0FBQ0ksR0FBUCxJQUFZLENBQXpCO0FBQXhCOztBQUNEO0FBQ0MsYUFBT0wsS0FBUDtBQUpGO0FBTUE7O0FBQ0QsU0FBU00sV0FBVCxDQUFxQk4sS0FBSyxHQUFDTixnQkFBM0IsRUFBNENPLE1BQTVDLEVBQW1EO0FBQ2xEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixFQUFrQkMsTUFBbEI7O0FBQ0EsVUFBT0EsTUFBTSxDQUFDRyxJQUFkO0FBQ0MsU0FBS04sV0FBTDtBQUNDLDZDQUFXRSxLQUFYO0FBQWtCTCxnQkFBUSxFQUFDTSxNQUFNLENBQUNNO0FBQWxDOztBQUNEO0FBQ0MsYUFBT1AsS0FBUDtBQUpGO0FBTUE7O0FBRUQsTUFBTVEsT0FBTyxHQUFHQyw2REFBZSxDQUFDO0FBQy9CQyxTQUFPLEVBQUVYLFlBRHNCO0FBRS9CUSxNQUFJLEVBQUVEO0FBRnlCLENBQUQsQ0FBL0IsQyxDQU9BOztBQUNPLFNBQVNLLEdBQVQsQ0FBYU4sR0FBYixFQUFpQjtBQUN2QixTQUFPO0FBQ05ELFFBQUksRUFBQ1AsR0FEQztBQUVOUTtBQUZNLEdBQVA7QUFJQSxDLENBQ0Q7O0FBQ08sU0FBU08sUUFBVCxDQUFrQlAsR0FBbEIsRUFBc0I7QUFDNUIsU0FBTyxDQUFDUSxRQUFELEVBQVVDLFFBQVYsS0FBcUI7QUFDM0JDLGNBQVUsQ0FBQyxNQUFJO0FBQ2RGLGNBQVEsQ0FBQ0YsR0FBRyxDQUFDTixHQUFELENBQUosQ0FBUjtBQUNBLEtBRlMsRUFFUixJQUZRLENBQVY7QUFHQSxHQUpEO0FBS0EsQyxDQUdEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTVyxnQkFBVCxDQUEwQmhCLEtBQTFCLEVBQWdDO0FBQzlDLFFBQU1pQixLQUFLLEdBQUdDLHlEQUFXLENBQ3hCVixPQUR3QixFQUV4QlcsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFpQjtBQUNoQlYsV0FBTyxFQUFFbEIsWUFETztBQUVoQmUsUUFBSSxFQUFFYjtBQUZVLEdBQWpCLEVBR0VNLEtBSEYsQ0FGd0IsRUFNeEJxQixvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBaEIsQ0FOSyxDQUF6QjtBQVFBLFNBQU9OLEtBQVA7QUFDQSIsImZpbGUiOiIuL3N0b3JlL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSxjb21iaW5lUmVkdWNlcnMsYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcbmltcG9ydCBSZWR1eFRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0Y291bnQ6IDBcbn1cbmNvbnN0IHVzZXJJbml0aWFsU3RhdGUgPSB7XG5cdHVzZXJuYW1lOidtYWp5Jyxcblx0YWdlOiAzMFxufVxuY29uc3QgQUREID0gJ2FkZCdcbmNvbnN0IFVQREFURV9VU0VSPVwiVVBEQVRFX1VTRVJcIlxuLy8g57qv5Ye95pWw77yM5rKh5pyJ5Ymv5L2c55SoXG4vLyDmnInku7vkvZXmm7TmlrDpg73opoHov5Tlm57mlrDnmoTlr7nosaFcbi8vIOWPr+S7pemAmui/hyBjb21iaW5lUmVkdWNlcnPlkIjlubZcbmZ1bmN0aW9uIGNvdW50UmVkdWNlcihzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKXtcblx0Y29uc29sZS5sb2coc3RhdGUsYWN0aW9uKVxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xuXHRcdGNhc2UgQUREOlxuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgY291bnQ6c3RhdGUuY291bnQrKGFjdGlvbi5udW18fDEpfVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxufVxuZnVuY3Rpb24gdXNlclJlZHVjZXIoc3RhdGU9dXNlckluaXRpYWxTdGF0ZSxhY3Rpb24pe1xuXHRjb25zb2xlLmxvZyhzdGF0ZSxhY3Rpb24pXG5cdHN3aXRjaChhY3Rpb24udHlwZSl7XG5cdFx0Y2FzZSBVUERBVEVfVVNFUjpcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIHVzZXJuYW1lOmFjdGlvbi51c2VyfVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxufVxuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcblx0Y291bnRlcjogY291bnRSZWR1Y2VyLFxuXHR1c2VyOiB1c2VyUmVkdWNlclxufSlcblxuXG5cbi8vIGFjdGlvbiBjcmVhdGVyXG5leHBvcnQgZnVuY3Rpb24gYWRkKG51bSl7XG5cdHJldHVybiB7XG5cdFx0dHlwZTpBREQsXG5cdFx0bnVtXG5cdH1cbn1cbi8vIGFzeW5jIGFjdGlvbiBjcmVhdGVyXG5leHBvcnQgZnVuY3Rpb24gYWRkQXN5bmMobnVtKXtcblx0cmV0dXJuIChkaXNwYXRjaCxnZXRTdGF0ZSk9Pntcblx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRkaXNwYXRjaChhZGQobnVtKSlcblx0XHR9LDEwMDApXG5cdH1cbn1cblxuXG4vLyBzdG9yZS5zdWJzY3JpYmUoKCk9Pntcbi8vIFx0Y29uc29sZS5sb2coJ2NoYW5nZWQnLHN0b3JlLmdldFN0YXRlKCkpXG4vLyB9KVxuXG4vLyBzdG9yZS5kaXNwYXRjaChhZGQoMykpXG4vLyBzdG9yZS5kaXNwYXRjaChhZGRBc3luYyg0KSlcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOidhZGQnfSlcbi8vIHN0b3JlLmRpc3BhdGNoKHt0eXBlOidVUERBVEVfVVNFUicsdXNlcjonZ2hnZSd9KVxuLy8g6L+Z56eN5pa55byPc3RvcmXmnInph43nlKjnmoTpo47pmalcbi8vIGV4cG9ydCBkZWZhdWx0IHN0b3JlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsbGl6ZVN0b3JlKHN0YXRlKXtcblx0Y29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcblx0XHRyZWR1Y2VyLFxuXHRcdE9iamVjdC5hc3NpZ24oe30se1xuXHRcdFx0Y291bnRlcjogaW5pdGlhbFN0YXRlLFxuXHRcdFx0dXNlcjogdXNlckluaXRpYWxTdGF0ZVxuXHRcdH0sc3RhdGUpLFxuXHRcdGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKFJlZHV4VGh1bmspKVxuXHQpXG5cdHJldHVybiBzdG9yZVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });