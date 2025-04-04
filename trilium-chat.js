(window.__triliumChatVersion = "0.4.5"),
  (() => {
    "use strict";
    var t,
      e,
      n,
      s,
      i = {
        175: (t, e, n) => {
          n.d(e, { Z: () => o });
          var s = n(81),
            i = n.n(s),
            a = n(645),
            r = n.n(a)()(i());
          r.push([
            t.id,
            ".chat-wrapper .chat_modal {\n  position: fixed;\n  z-index: 1000;\n  display: none;\n  inset: 0;\n}\n.chat-wrapper .chat_modal.show {\n  display: block;\n}\n.chat-wrapper .chat_modal .modal_mask {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: auto;\n  transition: all 0.3s;\n}\n.chat-wrapper .chat_modal .modal_mask.fadein {\n  background: rgba(0, 0, 0, 0.45);\n}\n.chat-wrapper .chat_modal .content_wrapper {\n  position: absolute;\n  z-index: 1000;\n  background: var(--main-background-color);\n  transition: all 0.3s;\n  will-change: transform, opacity;\n}\n.chat-wrapper .chat_modal .content_wrapper_popup {\n  bottom: 0;\n  width: 100%;\n  height: 70%;\n  border-radius: 8px 8px 0 0;\n  transform: translateY(100%);\n}\n.chat-wrapper .chat_modal .content_wrapper_popup.fadein {\n  transform: translateY(0);\n}\n.chat-wrapper .chat_modal .content_wrapper_dialog {\n  width: calc(100% - 40px);\n  border-radius: 8px;\n  opacity: 0;\n  transform: scale(0.1);\n}\n.chat-wrapper .chat_modal .content_wrapper_dialog.fadein {\n  top: 30% !important;\n  left: 20px !important;\n  opacity: 1;\n  transform: scale(1);\n}\n.chat-wrapper .chat_popover {\n  position: absolute;\n  opacity: 0;\n  will-change: transform, opacity, top, left, right, top;\n}\n.chat-wrapper .chat_popover .tooltip-text {\n  padding: 6px;\n  border: 1px solid var(--main-border-color);\n  background: var(--main-background-color);\n  border-radius: 4px;\n}\n.chat-wrapper .chat_popover.fadein {\n  opacity: 1;\n  transform: scale(1) !important;\n}\n.chat-wrapper .form_wrapper {\n  padding: 10px 16px;\n}\n.chat-wrapper .form_wrapper .wapper_title {\n  font-size: 120%;\n}\n.chat-wrapper .form_wrapper .wrapper_op {\n  margin-top: 3px;\n  text-align: right;\n}\n.chat-wrapper .form_wrapper .chat_button {\n  display: inline-block;\n  width: 70px;\n  border-color: var(--main-text-color);\n}\n.chat-wrapper .form_wrapper .wrapper_btn_save {\n  border: none;\n  background: var(--trilium-green);\n  color: var(--main-background-color);\n}\n.chat-wrapper .form_wrapper .wrapper_btn_save:hover {\n  opacity: 0.8;\n}\n.chat-wrapper .form_wrapper .wrapper_btn_cancel {\n  border: 1px solid var(--main-border-color);\n  color: var(--main-border-color);\n}\n.chat-wrapper .form_wrapper .wrapper_btn_cancel:hover {\n  border: 1px solid var(--trilium-green);\n  color: var(--trilium-green);\n}\n.chat-wrapper .thread {\n  position: relative;\n  height: calc(100% - 247px);\n  flex: 1;\n  border-bottom: 1px solid var(--main-border-color);\n  background: var(--left-pane-background-color);\n  transition: height 0.3s;\n}\n.chat-wrapper .thread .thread-messages {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  padding: 10px;\n  padding-bottom: 50px;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n}\n.chat-wrapper .thread .thread-messages .message {\n  position: relative;\n  display: flex;\n  max-width: 80%;\n  flex-direction: column;\n  padding: 8px 10px;\n  margin-bottom: 10px;\n  background-color: var(--main-background-color);\n}\n.chat-wrapper .thread .thread-messages .message .message-text {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.chat-wrapper .thread .thread-messages .message .dot {\n  position: absolute;\n  top: 50%;\n  right: -10px;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  background-color: var(--main-background-color);\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n  font-size: 1em;\n  line-height: 18px;\n  opacity: 0;\n  pointer-events: none;\n  text-align: center;\n  transform: translateY(-50%);\n  transition: opacity 0.1s;\n}\n.chat-wrapper .thread .thread-messages .message:hover .dot {\n  opacity: 1;\n  pointer-events: auto;\n}\n.chat-wrapper .thread .thread-messages .received {\n  align-self: flex-start;\n  border-radius: 2px 12px 12px;\n}\n.chat-wrapper .thread .thread-messages .sent {\n  align-self: flex-end;\n  border: 1px solid var(--trilium-green);\n  border-radius: 12px 2px 12px 12px;\n}\n.chat-wrapper .thread .thread-messages .sent .dot {\n  right: initial;\n  left: -10px;\n}\n.chat-wrapper .thread .thread_op {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  display: none;\n  padding: 4px 8px;\n  border: 1px solid var(--button-border-color);\n  background: var(--main-background-color);\n  border-radius: 8px;\n  color: var(--main-text-color);\n  transform: translateX(-50%);\n  transition: all 0.3s;\n  white-space: nowrap;\n}\n.chat-wrapper .thread .thread_op:hover {\n  border-color: var(--trilium-green);\n}\n.chat-wrapper .thread .thread_op.show {\n  display: block;\n}\n.chat-wrapper .operate {\n  display: flex;\n  height: 210px;\n  flex-direction: column;\n  padding: 0 16px;\n}\n.chat-wrapper .operate .operate_top {\n  height: 44px;\n}\n.chat-wrapper .operate .operate_top .operate_btn {\n  margin-right: 2px;\n  color: var(--main-text-color);\n}\n.chat-wrapper .operate .operate_top .operate_btn_new:hover {\n  border-color: var(--trilium-green);\n  color: var(--trilium-green) !important;\n}\n.chat-wrapper .operate .operate_input {\n  position: relative;\n  flex: 1;\n}\n.chat-wrapper .operate .operate_input .input-area {\n  width: 100%;\n  height: 100%;\n  padding: 6px 8px;\n  background-color: var(--main-background-color) !important;\n  border-radius: 8px;\n  outline: none;\n  resize: none;\n  transition: border 0.2s;\n  /*  &::placeholder {\n                color: #ddd;\n            } */\n}\n.chat-wrapper .operate .operate_input .input-area:focus {\n  border: 1px solid var(--trilium-green);\n}\n.chat-wrapper .operate .operate_input .operate_send {\n  position: absolute;\n  right: 6px;\n  bottom: 6px;\n  color: var(--trilium-green);\n}\n.chat-wrapper .operate .operate_input .operate_send.freezed {\n  color: var(--main-border-color);\n}\n.chat-wrapper .operate .operate_bottom {\n  height: 30px;\n  font-size: 13px;\n}\n.chat-wrapper .content_select {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  user-select: none;\n}\n.chat-wrapper .content_select .select_top {\n  height: 44px;\n  padding-right: 4px;\n  padding-left: 16px;\n  border-bottom: 1px solid var(--main-border-color);\n}\n.chat-wrapper .content_select .select_search {\n  height: 40px;\n  padding: 0 10px;\n  margin: 10px 16px;\n  border-radius: 8px;\n}\n.chat-wrapper .content_select .bx-search {\n  font-size: 120%;\n}\n.chat-wrapper .content_select .select_search_input {\n  flex: 1;\n  margin-left: 4px;\n}\n.chat-wrapper .content_select .select_list {\n  flex: 1;\n  padding: 0 16px;\n  padding-bottom: 20px;\n  overflow-y: auto;\n}\n.chat-wrapper .content_select .select_item {\n  position: relative;\n  padding: 8px;\n  border-radius: 8px;\n  color: var(--inactive-tab-text-color);\n  cursor: pointer;\n  font-size: 90%;\n}\n.chat-wrapper .content_select .select_item::after {\n  position: absolute;\n  bottom: 0;\n  width: calc(100% - 16px);\n  border-bottom: 1px solid var(--left-pane-background-color);\n  content: '';\n}\n.chat-wrapper .content_select .select_item:hover,\n.chat-wrapper .content_select .select_item:focus {\n  background: var(--left-pane-background-color);\n}\n.chat-wrapper .content_select .select_item .favor {\n  position: absolute;\n  top: 2px;\n  right: 8px;\n  border: 8px solid transparent;\n  border-top-color: var(--trilium-green);\n}\n.chat-wrapper .content_select .select_item .item_title {\n  color: var(--main-text-color);\n  font-weight: 700;\n}\n.chat-wrapper .content_select .select_item .item_stamp {\n  font-size: 80%;\n}\n.chat-wrapper .content_select .select_item .item_top,\n.chat-wrapper .content_select .select_item .item_down {\n  position: relative;\n}\n.chat-wrapper .content_select .select_item .item_op {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  display: none;\n  height: 24px;\n  transform: translateY(-50%);\n}\n.chat-wrapper .content_select .select_item .item_op .icon-action {\n  width: 24px;\n  height: 24px;\n  padding: 0;\n}\n.chat-wrapper .content_select .select_item:hover .item_preview {\n  padding-right: 30px;\n}\n.chat-wrapper .content_select .select_item:hover .item_op {\n  display: block;\n}\n.chat-wrapper .popover_prompt {\n  width: 100%;\n  height: 300px;\n  min-height: 300px;\n  background: var(--main-background-color);\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n}\n.chat-wrapper .content_select_prompt .item_title {\n  padding-right: 60px;\n}\n.chat-wrapper {\n  position: fixed;\n  z-index: 1000;\n  top: 40px;\n  right: 0;\n  display: flex;\n  overflow: hidden;\n  width: 420px;\n  min-width: 420px;\n  max-width: calc(100% - 40px);\n  height: calc(100% - 40px);\n  flex-direction: column;\n  border-right: none;\n  border-bottom: none;\n  background: var(--main-background-color);\n  border-radius: 8px 0 0 8px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n  transform: translate3d(120%, 0, 0);\n  transition: transform 0.3s;\n  visibility: visible !important;\n  will-change: width;\n  --trilium-green: #50a52c;\n}\n.chat-wrapper .bd-main,\n.chat-wrapper {\n  border: 1px solid var(--main-border-color);\n}\n.chat-wrapper *::-webkit-scrollbar {\n  width: 6px;\n}\n.chat-wrapper input {\n  border: none;\n  outline: none;\n}\n.chat-wrapper * {\n  box-sizing: border-box;\n}\n.chat-wrapper.show {\n  transform: translateZ(0);\n}\n.chat-wrapper .flex-center {\n  display: flex;\n  align-items: center;\n}\n.chat-wrapper .flex-center-between {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.chat-wrapper .flex-row-reverse {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.chat-wrapper .no-shrink {\n  flex-shrink: 0;\n}\n.chat-wrapper .one-line {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.chat-wrapper .link,\n.chat-wrapper .link:visited,\n.chat-wrapper .link:hover {\n  color: inherit;\n  text-decoration: none;\n}\n.chat-wrapper .icon-view {\n  font-size: 180%;\n}\n.chat-wrapper .icon-action {\n  width: 36px;\n  height: 36px;\n}\n.chat-wrapper .chat_button {\n  padding: 5px 8px;\n  border: 1px solid var(--button-border-color);\n  background: var(--button-background-color);\n  border-radius: 8px;\n  color: var(--main-text-color);\n  cursor: pointer;\n  text-align: center;\n  transition: all 0.2s;\n  user-select: none;\n}\n.chat-wrapper .chat_button:hover {\n  text-decoration: none;\n}\n.chat-wrapper .chat_button:disabled {\n  cursor: not-allowed;\n}\n.chat-wrapper .resizer {\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  width: 8px;\n  height: 100%;\n  cursor: e-resize;\n}\n.chat-wrapper .header {\n  display: flex;\n  height: 37px;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 10px;\n  border-bottom: 1px solid var(--main-border-color);\n}\n.chat-wrapper .header .dot {\n  position: relative;\n}\n.chat-wrapper .header .dot::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 6px;\n  height: 6px;\n  background: #e37a28;\n  border-radius: 3px;\n  content: '';\n}\n.chat-wrapper .header .header_hide {\n  border-radius: 0;\n}\n.chat-wrapper .header .header_hide:hover {\n  border: 1px solid transparent;\n  background: var(--left-pane-background-color);\n}\n.chat-wrapper .prompt_content {\n  overflow: hidden;\n  height: 0;\n  flex-shrink: 0;\n  background: var(--main-background-color);\n  transition: height 0.3s;\n}\n.chat-wrapper .prompt_content.show {\n  max-height: 200px;\n  border-bottom: 1px solid var(--main-border-color);\n}\n.chat-wrapper .prompt_content .prompt_content_close {\n  height: 40px;\n  padding-right: 4px;\n  border-bottom: 1px solid var(--main-border-color);\n}\n.chat-wrapper .prompt_content .prompt_content_text {\n  max-height: 160px;\n  padding: 10px;\n  overflow-y: auto;\n}\n.chat-wrapper .content_command,\n.chat-wrapper .msg-command {\n  overflow: hidden;\n  background: var(--main-background-color);\n  border-radius: 8px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n  user-select: none;\n}\n.chat-wrapper .content_command .command_title,\n.chat-wrapper .msg-command .command_title {\n  padding-left: 10px;\n  border-bottom: 1px solid var(--main-border-color);\n  line-height: 36px;\n}\n.chat-wrapper .content_command .command_item,\n.chat-wrapper .msg-command .command_item {\n  padding: 4px 8px;\n  cursor: pointer;\n}\n.chat-wrapper .content_command .command_item:hover,\n.chat-wrapper .msg-command .command_item:hover,\n.chat-wrapper .content_command .command_item:focus,\n.chat-wrapper .msg-command .command_item:focus {\n  background: var(--left-pane-background-color);\n}\n.chat-wrapper .content_prompt_form label {\n  display: block;\n}\n.chat-wrapper .content_prompt_form .prompt_input {\n  width: 100%;\n  padding-left: 8px;\n  border-radius: 8px;\n  line-height: 30px;\n  transition: all 0.3s;\n}\n.chat-wrapper .content_prompt_form .prompt_input:focus {\n  border-color: var(--trilium-green);\n}\n.chat-wrapper .content_prompt_form .prompt_input_content {\n  min-height: 170px;\n  outline: none;\n  resize: none;\n}\n",
            "",
          ]);
          const o = r;
        },
        447: (t, e, n) => {
          n.d(e, { Z: () => o });
          var s = n(81),
            i = n.n(s),
            a = n(645),
            r = n.n(a)()(i());
          r.push([
            t.id,
            ".chat-toggle-wrapper {\n  display: flex;\n  height: 100%;\n}\n.chat-toggle-wrapper .button-widget {\n  font-size: 1.5em !important;\n  line-height: 1 !important;\n}\n",
            "",
          ]);
          const o = r;
        },
        645: (t) => {
          t.exports = function (t) {
            var e = [];
            return (
              (e.toString = function () {
                return this.map(function (e) {
                  var n = "",
                    s = void 0 !== e[5];
                  return (
                    e[4] && (n += "@supports (".concat(e[4], ") {")),
                    e[2] && (n += "@media ".concat(e[2], " {")),
                    s &&
                      (n += "@layer".concat(
                        e[5].length > 0 ? " ".concat(e[5]) : "",
                        " {",
                      )),
                    (n += t(e)),
                    s && (n += "}"),
                    e[2] && (n += "}"),
                    e[4] && (n += "}"),
                    n
                  );
                }).join("");
              }),
              (e.i = function (t, n, s, i, a) {
                "string" == typeof t && (t = [[null, t, void 0]]);
                var r = {};
                if (s)
                  for (var o = 0; o < this.length; o++) {
                    var c = this[o][0];
                    null != c && (r[c] = !0);
                  }
                for (var h = 0; h < t.length; h++) {
                  var d = [].concat(t[h]);
                  (s && r[d[0]]) ||
                    (void 0 !== a &&
                      (void 0 === d[5] ||
                        (d[1] = "@layer"
                          .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                          .concat(d[1], "}")),
                      (d[5] = a)),
                    n &&
                      (d[2]
                        ? ((d[1] = "@media "
                            .concat(d[2], " {")
                            .concat(d[1], "}")),
                          (d[2] = n))
                        : (d[2] = n)),
                    i &&
                      (d[4]
                        ? ((d[1] = "@supports ("
                            .concat(d[4], ") {")
                            .concat(d[1], "}")),
                          (d[4] = i))
                        : (d[4] = "".concat(i))),
                    e.push(d));
                }
              }),
              e
            );
          };
        },
        81: (t) => {
          t.exports = function (t) {
            return t[1];
          };
        },
        379: (t) => {
          var e = [];
          function n(t) {
            for (var n = -1, s = 0; s < e.length; s++)
              if (e[s].identifier === t) {
                n = s;
                break;
              }
            return n;
          }
          function s(t, s) {
            for (var a = {}, r = [], o = 0; o < t.length; o++) {
              var c = t[o],
                h = s.base ? c[0] + s.base : c[0],
                d = a[h] || 0,
                p = "".concat(h, " ").concat(d);
              a[h] = d + 1;
              var l = n(p),
                m = {
                  css: c[1],
                  media: c[2],
                  sourceMap: c[3],
                  supports: c[4],
                  layer: c[5],
                };
              if (-1 !== l) e[l].references++, e[l].updater(m);
              else {
                var u = i(m, s);
                (s.byIndex = o),
                  e.splice(o, 0, { identifier: p, updater: u, references: 1 });
              }
              r.push(p);
            }
            return r;
          }
          function i(t, e) {
            var n = e.domAPI(e);
            return (
              n.update(t),
              function (e) {
                if (e) {
                  if (
                    e.css === t.css &&
                    e.media === t.media &&
                    e.sourceMap === t.sourceMap &&
                    e.supports === t.supports &&
                    e.layer === t.layer
                  )
                    return;
                  n.update((t = e));
                } else n.remove();
              }
            );
          }
          t.exports = function (t, i) {
            var a = s((t = t || []), (i = i || {}));
            return function (t) {
              t = t || [];
              for (var r = 0; r < a.length; r++) {
                var o = n(a[r]);
                e[o].references--;
              }
              for (var c = s(t, i), h = 0; h < a.length; h++) {
                var d = n(a[h]);
                0 === e[d].references && (e[d].updater(), e.splice(d, 1));
              }
              a = c;
            };
          };
        },
        569: (t) => {
          var e = {};
          t.exports = function (t, n) {
            var s = (function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (t) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            })(t);
            if (!s)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              );
            s.appendChild(n);
          };
        },
        216: (t) => {
          t.exports = function (t) {
            var e = document.createElement("style");
            return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
          };
        },
        565: (t, e, n) => {
          t.exports = function (t) {
            var e = n.nc;
            e && t.setAttribute("nonce", e);
          };
        },
        795: (t) => {
          t.exports = function (t) {
            if ("undefined" == typeof document)
              return { update: function () {}, remove: function () {} };
            var e = t.insertStyleElement(t);
            return {
              update: function (n) {
                !(function (t, e, n) {
                  var s = "";
                  n.supports && (s += "@supports (".concat(n.supports, ") {")),
                    n.media && (s += "@media ".concat(n.media, " {"));
                  var i = void 0 !== n.layer;
                  i &&
                    (s += "@layer".concat(
                      n.layer.length > 0 ? " ".concat(n.layer) : "",
                      " {",
                    )),
                    (s += n.css),
                    i && (s += "}"),
                    n.media && (s += "}"),
                    n.supports && (s += "}");
                  var a = n.sourceMap;
                  a &&
                    "undefined" != typeof btoa &&
                    (s +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        " */",
                      )),
                    e.styleTagTransform(s, t, e.options);
                })(e, t, n);
              },
              remove: function () {
                !(function (t) {
                  if (null === t.parentNode) return !1;
                  t.parentNode.removeChild(t);
                })(e);
              },
            };
          };
        },
        589: (t) => {
          t.exports = function (t, e) {
            if (e.styleSheet) e.styleSheet.cssText = t;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(t));
            }
          };
        },
        605: (t, e, n) => {
          n.d(e, { Z: () => s });
          class s {
            constructor() {
              this.listeners = {};
            }
            addEventListener(t, e) {
              this.listeners[t] || (this.listeners[t] = []),
                -1 === this.listeners[t].indexOf(e) &&
                  this.listeners[t].push(e);
            }
            on(t, e) {
              Array.isArray(t)
                ? t.forEach((t) => {
                    this.addEventListener(t, e);
                  })
                : this.addEventListener(t, e);
            }
            removeEventListener(t, e) {
              if (!this.listeners[t]) return;
              const n = [];
              for (let s = 0; s < this.listeners[t].length; s += 1)
                this.listeners[t][s] !== e && n.push(this.listeners[t][s]);
              0 === this.listeners[t].length
                ? delete this.listeners[t]
                : (this.listeners[t] = n);
            }
            off(t, e) {
              return this.removeEventListener(t, e);
            }
            dispatchEvent(t) {
              if (!t) return !0;
              t.source = this;
              const e = `on${t.type}`;
              return (
                (!Object.hasOwnProperty.call(this, e) ||
                  (this[e].call(this, t), !t.defaultPrevented)) &&
                (!this.listeners[t.type] ||
                  this.listeners[t.type].every(
                    (e) => (e(t), !t.defaultPrevented),
                  ))
              );
            }
            emit(t, ...e) {
              this.listeners[t] &&
                this.listeners[t].forEach((t) => {
                  t(...e);
                });
            }
          }
        },
        471: (t, e, n) => {
          n.d(e, { Z: () => r });
          var s = n(257),
            i = n(655),
            a = n(605);
          class r extends a.Z {
            async initOptions() {
              const t = await this.getOptions();
              if (!t) return this.setDefaultOptions();
              if (!(0, i.tY)(s.WN, t)) return t;
              const e = (0, i.Yo)(t, s.WN);
              return this.setOptions(e);
            }
            async initPrompts() {
              if (!(await this.getPrompts())) return this.setDefaultPrompts();
            }
            async getOptions() {
              (0, i.de)();
            }
            async setOption(t, e) {
              this.emit(s.bs.setStatus, {
                status: s.f5.optionSyncing,
                key: t,
                value: e,
              });
              const n = await this.getOptions();
              (n[t] = e),
                await this.setOptions(n),
                this.emit(s.bs.setStatus, {
                  status: s.f5.success,
                  key: t,
                  value: e,
                });
            }
            async setOptions() {
              (0, i.de)();
            }
            async setDefaultOptions() {
              (0, i.de)();
            }
            async getOption(t) {
              return (await this.getOptions())[t];
            }
            async getPrompts() {
              (0, i.de)();
            }
            async setPrompts() {
              (0, i.de)();
            }
            async setDefaultPrompts() {
              (0, i.de)();
            }
            async createPrompt(t) {
              const e = await this.getPrompts(),
                n = { ...t, order: e.length };
              e.push(n), await this.setPrompts(e);
            }
            async updatePrompt(t, e) {
              const n = await this.getPrompts(),
                s = n.findIndex((e) => e.id === t.id);
              if (-1 === s) throw new Error("can't find target prompt");
              e ? n.splice(s, 1) : n.splice(s, 1, t), await this.setPrompts(n);
            }
            async deletePrompt(t) {
              await this.updatePrompt(t, !0);
            }
            getActiveNoteContent() {
              (0, i.de)();
            }
            async getClip() {
              try {
                return await navigator.clipboard.readText();
              } catch (t) {
                return s.O2;
              }
            }
            async handleCommand(t, e) {
              (0, i.fF)(t, e);
              const n = {
                copy: this.handleCopy.bind(this),
                favor: this.handleFavor.bind(this),
                unfavor: this.handleUnfavor.bind(this),
                set: this.handleSetNote.bind(this),
                append: this.handleAppend.bind(this),
                child: this.handleSaveChild.bind(this),
                history: this.handleSaveHistory.bind(this),
              };
              n[t] && (await n[t](e));
            }
            handleCopy(t) {
              const e = (0, i.qT)(t.thread);
              (0, i.JG)(e);
            }
            async handleFavor(t) {
              await this.toggleFavor(t, !0);
            }
            async handleUnfavor(t) {
              await this.toggleFavor(t, !1);
            }
            async toggleFavor(t, e) {
              const n = await this.getRecord(t.threadId);
              n || (0, i._y)(s.t$), (n.favor = e), await this.saveRecord(n);
            }
            async handleSetNote(t) {
              await this.setNoteWith(t.thread);
            }
            setNoteWith() {
              (0, i.de)();
            }
            async handleAppend(t) {
              await this.appendToNote(t.thread);
            }
            appendToNote() {
              (0, i.de)();
            }
            async handleSaveChild(t) {
              const e = (0, i.qT)(t.thread, !0),
                n = (0, i.$k)(t);
              await this.saveToChild(n, e);
            }
            saveToChild() {
              (0, i.de)();
            }
            async handleMsgCommand(t, e, n) {
              (0, i.fF)(t, e);
              const s = {
                copy: this.msgCopy.bind(this),
                insert: this.insertContent.bind(this),
                append: this.msgAppend.bind(this),
                set: this.msgSet.bind(this),
                child: this.msgChild.bind(this),
              };
              s[t] && (await s[t](e, n));
            }
            msgCopy(t) {
              (0, i.fF)(t), (0, i.JG)(t);
            }
            insertContent() {
              (0, i.de)();
            }
            async msgAppend(t) {
              await this.appendToNote(t);
            }
            async msgSet(t) {
              await this.setNoteWith(t, !0);
            }
            async msgChild(t, e) {
              const n = (0, i.$k)(e);
              await this.saveToChild(n, (0, i.IO)(t));
            }
            async handleSaveHistory(t) {
              await this.saveRecordFromEngine(t);
            }
            async getRecords() {
              (0, i.de)();
            }
            async saveRecord() {
              (0, i.de)();
            }
            async handleMsgStatus(t, e) {
              if (!e.thread.length) return;
              const n = (0, i.qr)(t),
                a = e.lastMessage.role === s.HB.assistant;
              n && a && this.saveRecordFromEngine(e);
            }
            async saveRecordFromEngine(t) {
              const e = (0, i.Xg)((0, i.$k)(t)),
                n = {
                  id: t.threadId,
                  originTitle: e,
                  list: t.thread.map((t) => {
                    const e = { ...t };
                    return delete e.status, e;
                  }),
                };
              await this.saveRecord(n);
            }
            goHistorys() {
              (0, i.de)();
            }
            goHistory() {
              (0, i.de)();
            }
            goOptions() {
              (0, i.de)();
            }
          }
        },
        300: (t, e, n) => {
          n(655), n(257), n(471);
        },
        0: (t, e, n) => {
          n.d(e, { Z: () => p });
          var s = n(257),
            i = n(655),
            a = n(471);
          const r = ["text", "code"];
          function o() {
            const t = api.getActiveContextNote();
            return (
              t || (0, i._y)("no active note"),
              r.includes(t.type) || (0, i._y)(s.GD),
              t
            );
          }
          function c(t, e, n) {
            t = e ? (0, i.qT)(t, !0) : (0, i.RV)(t);
            const s = n.data.processor.toView(t);
            return n.data.toModel(s);
          }
          async function h(t) {
            const e = Array.isArray(t),
              n = o();
            await glob.appContext.initialized;
            const s = glob.appContext.tabManager.children.find(
              (t) => t.noteId === n.noteId,
            );
            let a;
            if (
              ((await s.isReadOnly()) && (0, i._y)("note is readOnly"),
              "text" === n.type)
            )
              return (
                (a = await api.getActiveContextTextEditor()),
                {
                  insert() {
                    a.model.change((e) => {
                      const n = a.model.document.selection.getLastPosition();
                      e.insertText(t, n);
                    });
                  },
                  set() {
                    const n = a.model.createRangeIn(a.model.document.getRoot());
                    a.model.insertContent(c(t, e, a), n);
                  },
                  append() {
                    a.model.change((n) => {
                      n.append(c(t, e, a), a.model.document.getRoot());
                    });
                  },
                }
              );
            if ("code" === n.type) {
              a = await api.getActiveContextCodeEditor();
              const n = a.getDoc();
              return {
                insert() {
                  const e = n.getCursor();
                  n.replaceRange(t, e);
                },
                set() {
                  e && (t = (0, i.qT)(t)), n.setValue(t);
                },
                append() {
                  a.replaceRange(t, { line: 1 / 0 });
                },
              };
            }
          }
          async function d(t) {
            const e =
              /<section\s+class="include-note"\s+data-note-id="([\w-]+)"[^>]+>.*<\/section>/gi;
            let n;
            for (; null !== (n = e.exec(t)); ) {
              const e = n[1],
                { title: s } = await api.getNote(e);
              t = t.replace(
                n[0],
                `<a class="reference-link" data-note-path="${e}"<span class="bx bx-note"></span>${s}</a>`,
              );
            }
            return t;
          }
          class p extends a.Z {
            async getOptions() {
              return api.runOnBackend(
                (t) => {
                  const e = api.getNoteWithLabel(t);
                  if (!e) return null;
                  return e.getJsonContent() || null;
                },
                [s.cT.CHAT_OPTIONS],
              );
            }
            async setOptions(t) {
              return (
                (await api.runOnBackend(
                  (t, e) => {
                    const n = JSON.stringify(e, null, "\t"),
                      s = api.getNoteWithLabel(t);
                    return (
                      s
                        ? s.setContent(n)
                        : api
                            .createNewNote({
                              parentNoteId: api.currentNote.noteId,
                              title: "CHAT_OPTIONS: reload to take effect",
                              content: n,
                              type: "code",
                              mime: "application/json",
                            })
                            .note.setLabel(t),
                      s
                    );
                  },
                  [s.cT.CHAT_OPTIONS, t],
                )) || this.goOptions(),
                { ...t }
              );
            }
            async setDefaultOptions() {
              return this.setOptions(s.WN);
            }
            async getPrompts() {
              return api.runOnBackend(
                (t) => {
                  const e = api.getNoteWithLabel(t);
                  if (!e) return null;
                  return e.getJsonContent() || null;
                },
                [s.cT.CHAT_PROMPTS],
              );
            }
            async setPrompts(t) {
              return (
                await api.runOnBackend(
                  (t, e) => {
                    const n = JSON.stringify(e, null, "\t"),
                      s = api.getNoteWithLabel(t);
                    s
                      ? s.setContent(n)
                      : api
                          .createNewNote({
                            parentNoteId: api.currentNote.noteId,
                            title: "CHAT_PROMPTS",
                            content: n,
                            type: "code",
                            mime: "application/json",
                          })
                          .note.setLabel(t);
                  },
                  [s.cT.CHAT_PROMPTS, t],
                ),
                { ...t }
              );
            }
            async setDefaultPrompts() {
              return this.setPrompts(s.HT);
            }
            async getActiveNoteContent() {
              try {
                const t = o(),
                  { content: e } = await t.getNoteComplement();
                return {
                  engine: e,
                  view: "text" === t.type ? await d(e) : (0, i.YU)(e),
                };
              } catch (t) {
                this.emit(s.bs.setStatus, {
                  status: s.f5.failed,
                  key: "activeNote",
                  value: t.message,
                }),
                  (0, i._y)(t.message);
              }
            }
            async getRecords() {
              return api.runOnBackend(
                (t) =>
                  (api.getNotesWithLabel(t) || []).map((t) => ({
                    ...t.getJsonContent(),
                    title: t.title,
                  })),
                [s.cT.HISTORY_LABEL],
              );
            }
            async getRecord(t) {
              return api.runOnBackend(
                (t, e) => {
                  const n = api.getNoteWithLabel(t, e);
                  return n ? { ...n.getJsonContent(), title: n.title } : null;
                },
                [s.cT.HISTORY_LABEL, t],
              );
            }
            async saveRecord(t) {
              return (
                await api.runOnBackend(
                  (t, e, n) => {
                    const s = api.getNoteWithLabel(e, `${n.id}`),
                      i = JSON.stringify(n, null, "\t");
                    if (s) s.setContent(i);
                    else {
                      const s = api.getNoteWithLabel(t) || api.currentNote;
                      api
                        .createNewNote({
                          parentNoteId: s.noteId,
                          title: n.originTitle,
                          content: i,
                          type: "code",
                          mime: "application/json",
                        })
                        .note.setLabel(e, n.id);
                    }
                  },
                  [s.cT.HISTORY_HOME_LABEL, s.cT.HISTORY_LABEL, t],
                ),
                { ...t }
              );
            }
            async goHistorys() {
              const t = await api.runOnBackend(
                (t) => api.getNoteWithLabel(t) || api.currentNote,
                [s.cT.HISTORY_HOME_LABEL],
              );
              api.activateNote(t.noteId);
            }
            async goHistory(t) {
              const e = await api.runOnBackend(
                (t, e) => api.getNoteWithLabel(t, e),
                [s.cT.HISTORY_LABEL, t],
              );
              api.activateNote(e.noteId);
            }
            async setNoteWith(t) {
              (await h(t)).set();
            }
            async appendToNote(t) {
              (await h(t)).append();
            }
            async saveToChild(t, e) {
              const n = api.getActiveContextNote();
              await api.runOnBackend(
                (t, e, n) =>
                  api.createNewNote({
                    parentNoteId: t,
                    title: e,
                    content: n,
                    type: "text",
                  }).note,
                [n.noteId, t, e],
              );
            }
            async insertContent(t) {
              (await h(t)).insert();
            }
            async goOptions() {
              const t = await api.runOnBackend(
                (t) => api.getNoteWithLabel(t),
                [s.cT.CHAT_OPTIONS],
              );
              api.activateNote(t.noteId);
            }
          }
        },
        926: (t, e, n) => {
          n.d(e, { Z: () => c });
          var s = n(257),
            i = n(655),
            a = n(605);
          class r extends a.Z {
            constructor(t, e = {}) {
              super(),
                (this.url = t),
                (this.method = e.method || "GET"),
                (this.headers = e.headers || {}),
                (this.payload = e.payload || null),
                (this.withCredentials = e.withCredentials || !1),
                (this.readyState = this.CONNECTING),
                (this.progress = 0),
                (this.chunk = ""),
                (this.xhr = null),
                (this.FIELD_SEPARATOR = ":"),
                (this.INITIALIZING = -1),
                (this.CONNECTING = 0),
                (this.OPEN = 1),
                (this.CLOSED = 2);
            }
            _setReadyState(t) {
              const e = new CustomEvent("readyStateChange");
              (e.readyState = t), (this.readyState = t), this.dispatchEvent(e);
            }
            _onStreamFailure(t) {
              const e = new CustomEvent("error");
              (e.data = t.currentTarget.response),
                this.dispatchEvent(e),
                this.close();
            }
            _onStreamAbort() {
              this.close();
            }
            _onStreamProgress(t) {
              if (!this.xhr) return;
              if (200 !== this.xhr.status) return void this._onStreamFailure(t);
              this.readyState === this.CONNECTING &&
                (this.dispatchEvent(new CustomEvent("open")),
                this._setReadyState(this.OPEN));
              const e = this.xhr.responseText.substring(this.progress);
              (this.progress += e.length),
                e.split(/(\r\n|\r|\n){2}/g).forEach((t) => {
                  0 === t.trim().length
                    ? (this.dispatchEvent(
                        this._parseEventChunk(this.chunk.trim()),
                      ),
                      (this.chunk = ""))
                    : (this.chunk += t);
                });
            }
            _onStreamLoaded(t) {
              this._onStreamProgress(t),
                this.dispatchEvent(this._parseEventChunk(this.chunk)),
                (this.chunk = "");
            }
            _parseEventChunk(t) {
              if (!t || 0 === t.length) return null;
              const e = { id: null, retry: null, data: "", event: "message" };
              t.split(/(\r\n|\r|\n)/).forEach((t) => {
                const n = t.trimRight(),
                  s = n.indexOf(this.FIELD_SEPARATOR);
                if (s <= 0) return;
                const i = n.substring(0, s);
                if (!(i in e)) return;
                const a = n.substring(s + 1).trimLeft();
                "data" === i ? (e[i] += a) : (e[i] = a);
              });
              const n = new CustomEvent(e.event);
              return (n.data = e.data), (n.id = e.id), n;
            }
            _checkStreamClosed() {
              this.xhr &&
                this.xhr.readyState === XMLHttpRequest.DONE &&
                this._setReadyState(this.CLOSED);
            }
            stream() {
              this._setReadyState(this.CONNECTING),
                (this.xhr = new XMLHttpRequest()),
                this.xhr.addEventListener(
                  "progress",
                  this._onStreamProgress.bind(this),
                ),
                this.xhr.addEventListener(
                  "load",
                  this._onStreamLoaded.bind(this),
                ),
                this.xhr.addEventListener(
                  "readystatechange",
                  this._checkStreamClosed.bind(this),
                ),
                this.xhr.addEventListener(
                  "error",
                  this._onStreamFailure.bind(this),
                ),
                this.xhr.addEventListener(
                  "abort",
                  this._onStreamAbort.bind(this),
                ),
                this.xhr.open(this.method, this.url),
                Object.keys(this.headers).forEach((t) => {
                  this.xhr.setRequestHeader(t, this.headers[t]);
                }),
                (this.xhr.withCredentials = this.withCredentials),
                this.xhr.send(this.payload);
            }
            close() {
              this.readyState !== this.CLOSED &&
                (this.xhr.abort(),
                (this.xhr = null),
                this._setReadyState(this.CLOSED));
            }
          }
          const o = "...";
          class c extends a.Z {
            constructor({
              apiKey: t,
              engineOptions: e,
              systemPrompt: n,
              requestUrls: s,
            }) {
              super(),
                (this.urls = s),
                (this.apiKey = t),
                (this.defaultOptions = e),
                (this.systemPrompt = n);
            }
            get lastMessage() {
              return this.thread.length
                ? this.thread[this.thread.length - 1]
                : null;
            }
            set lastMessage(t) {
              if (!this.thread[this.thread.length - 1])
                throw new Error("lastMessage not exist");
              this.thread[this.thread.length - 1] = t;
            }
            newChat() {
              const t = [];
              this.systemPrompt &&
                t.push({
                  role: s.HB.system,
                  content: this.systemPrompt,
                  status: s.S2.success,
                }),
                this.loadThread({ id: Date.now().toString(), list: t }),
                this.emit(s.TH.setStatus, s.S2.none);
            }
            loadThread(t) {
              this.endStream(),
                (this.threadId = t.id),
                (this.thread = t.list.map((t) => ({
                  ...t,
                  status: s.S2.success,
                }))),
                this.emit(s.TH.load, this.thread);
            }
            isAvailable() {
              return !this.lastMessage || (0, i.qr)(this.lastMessage.status);
            }
            setLastMessageStatus(t) {
              this.lastMessage.status !== t &&
                ((this.lastMessage.status = t),
                (0, i.qr)(t) && (this.lastMessage.stamp = Date.now()),
                this.emit(s.TH.setStatus, t));
            }
            createMessage(t, e = s.HB.user) {
              const n = { role: e, content: t, stamp: Date.now() };
              this.thread.push(n);
              const i = e === s.HB.user ? s.S2.success : s.S2.fetching;
              this.setLastMessageStatus(i),
                this.emit(s.TH.create, { ...this.lastMessage });
            }
            replaceMessage(t, e, n) {
              if (!t) throw new Error("content required");
              (this.lastMessage.content = t),
                (this.lastMessage.role = n || this.lastMessage.role),
                this.setLastMessageStatus(e || this.lastMessage.status),
                this.emit(s.TH.replace, { ...this.lastMessage });
            }
            appendMessageWords(t) {
              this.lastMessage &&
                ((this.lastMessage.content += t),
                this.emit(s.TH.append, { word: t, ...this.lastMessage }));
            }
            requestCompletion({ userInput: t, overrideOptions: e = {} }) {
              const n = "string" == typeof t && "" === t.trim();
              if (t && !n)
                return (
                  this.createMessage(t),
                  this.createMessage(o, s.HB.assistant),
                  this.sendRequest(e)
                );
            }
            async sendRequest(t = {}) {
              const e = {
                messages: this.thread.reduce(
                  (t, e) => (
                    (0, i.qr)(e.status) &&
                      t.push({ role: e.role, content: e.content }),
                    t
                  ),
                  [],
                ),
                ...this.defaultOptions,
                ...t,
              };
              if (this.apiKey)
                try {
                  e.stream
                    ? await this.requestChatStream(e)
                    : await this.requestChatBatch(e);
                } catch (t) {
                  t.data
                    ? this.replaceMessage(
                        `The API returned the following error:\n ${t.data}`,
                        s.S2.failed,
                        s.HB.error,
                      )
                    : (console.error(t),
                      this.replaceMessage(
                        "API Error. See console logs for details. (ctrl + shift + i)",
                        s.S2.failed,
                        s.HB.error,
                      ));
                }
              else
                this.replaceMessage(
                  'Please verify your API Key is correct in the note titled "CHAT_OPTIONS", and then reload via (F5) or (Ctrl + R), or use the Trilium menu: Advanced > Reload Frontend',
                  s.S2.failed,
                  s.HB.error,
                );
            }
            regenerate(t) {
              if (this.lastMessage.role === s.HB.user)
                throw new Error("error detected!");
              this.replaceMessage(o, s.S2.fetching, s.HB.assistant),
                this.sendRequest(t);
            }
            async requestChatStream(t) {
              await new Promise((e, n) => {
                try {
                  this.activeStream = new r(this.urls.completion, {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${this.apiKey}`,
                    },
                    method: "POST",
                    payload: JSON.stringify(t),
                  });
                  let a = "";
                  this.activeStream.addEventListener("message", (t) => {
                    if (((0, i.fF)(t.data), "[DONE]" !== t.data)) {
                      const e = JSON.parse(t.data).choices[0].delta.content;
                      if (!e) return;
                      (a += e),
                        this.lastMessage.content === o
                          ? this.replaceMessage(e, s.S2.generating)
                          : this.appendMessageWords(e);
                    } else
                      this.endStream(),
                        this.setLastMessageStatus(s.S2.success),
                        e(a);
                  }),
                    this.activeStream.addEventListener(
                      "readystatechange",
                      (t) => {
                        (0, i.fF)(t),
                          t.readyState >= 2 &&
                            (0, i.fF)(`ReadyState: ${t.readyState}`);
                      },
                    ),
                    this.activeStream.addEventListener("error", (t) => {
                      this.endStream(), n(t);
                    }),
                    this.emit("beforeStream", { role: s.HB.assistant }),
                    this.activeStream.stream();
                } catch (t) {
                  this.endStream(), n(t);
                }
              });
            }
            cancelGenerating() {
              this.setLastMessageStatus(s.S2.cancel),
                this.emit(s.TH.cancel, { ...this.lastMessage }),
                this.endStream();
            }
            endStream() {
              this.activeStream &&
                (this.activeStream.close(), (this.activeStream = null));
            }
            async requestChatBatch(t) {
              const e = await this.requestCompletionBatch(t);
              this.replaceMessage(e, s.S2.success);
            }
            async requestCompletionBatch(t) {
              const e = await fetch(this.urls.completion, {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(t),
                }),
                n = await e.json(),
                { content: s } = n.choices ? n.choices[0].message : n.message;
              return s;
            }
          }
        },
        40: (t, e, n) => {
          n.d(e, { Z: () => B });
          var s = n(379),
            i = n.n(s),
            a = n(795),
            r = n.n(a),
            o = n(569),
            c = n.n(o),
            h = n(565),
            d = n.n(h),
            p = n(216),
            l = n.n(p),
            m = n(589),
            u = n.n(m),
            g = n(175),
            w = {};
          (w.styleTagTransform = u()),
            (w.setAttributes = d()),
            (w.insert = c().bind(null, "head")),
            (w.domAPI = r()),
            (w.insertStyleElement = l()),
            i()(g.Z, w),
            g.Z && g.Z.locals && g.Z.locals;
          var v = n(605),
            f = n(257),
            b = n(655);
          const _ = {};
          class x {
            constructor({
              useTransition: t = !0,
              placement: e,
              offset: n,
              contentSelector: s,
              $edgeEle: i,
              $triggerEle: a,
              text: r,
              hideDelay: o,
              popoverClass: c,
            }) {
              if (
                ((this.placement = e),
                (this.useTransition = t),
                (this.offset = n),
                (this.hideDelay = o),
                (this.popoverClass = c),
                (this.$triggerEle = a),
                (this.$edgeEle = i),
                r)
              ) {
                const t = document.createElement("div");
                t.classList.add("tooltip-text"),
                  (t.innerHTML = r),
                  (this.$content = t);
              } else
                (_[s] = _[s] || (0, b.hX)(i.$qs(s))),
                  (this.$content = _[s].cloneNode(!0));
              (this.$popover = null), (this.isShow = !1);
            }
            async show(t) {
              if (this.isShow) return;
              b.x0.stack.push(this),
                this.$popover || this.initPopover(),
                this.$edgeEle.appendChild(this.$popover),
                this.$popover.appendChild(this.$content),
                this.setPopoverStyle(this.$popover),
                await (0, b.j1)();
              const e = () => {
                t && t(), this.$popover.removeEventListener("transitionend", e);
              };
              this.$popover.addEventListener("transitionend", e),
                (0, b.Yl)(this.$popover, !0),
                (this.OutsideUnbind = (0, b.xD)(this.$popover, () => {
                  (b.x0.currentModal &&
                    b.x0.currentModal > this.$popover.style.zIndex) ||
                    (this.hide(), this.OutsideUnbind());
                })),
                (this.isShow = !0),
                this.hideDelay &&
                  setTimeout(() => {
                    this.hide();
                  }, this.hideDelay);
            }
            async setPopoverStyle(t) {
              const e = this.$edgeEle.getBoundingClientRect(),
                n = this.$triggerEle.getBoundingClientRect(),
                {
                  top: s,
                  left: i,
                  placement: a,
                } = (0, b.Au)(
                  e,
                  n,
                  t.offsetWidth,
                  t.offsetHeight,
                  this.offset,
                  this.placement,
                );
              ([t.style.transformOrigin, t.style.transform] = {
                top: ["bottom", "scaleY(0.01)"],
                bottom: ["top", "scaleY(0.01)"],
                left: ["right", "scaleX(0.01)"],
                right: ["left", "scaleX(0.01)"],
              }[a]),
                (t.style.top = `${s}px`),
                (t.style.left = `${i}px`),
                (t.style.zIndex = b.x0.global),
                (b.x0.global += 1),
                await (0, b.j1)(),
                this.useTransition &&
                  (t.style.transition = "all .25s,opacity .2s");
            }
            initPopover() {
              const t = document.createElement("div");
              t.classList.add("chat_popover"),
                this.popoverClass && t.classList.add(this.popoverClass),
                (this.$popover = t);
            }
            async hide() {
              if (!this.isShow) return;
              const t = () => {
                (0, b.hX)(this.$content),
                  (0, b.hX)(this.$popover),
                  b._c.emit(f.kZ.poperHide),
                  this.OutsideUnbind(),
                  this.$popover.removeEventListener("transitionend", t),
                  (this.isShow = !1);
              };
              (0, b.Ab)(b.x0.stack, this),
                this.$popover.addEventListener("transitionend", t),
                (0, b.Yl)(this.$popover, !1);
            }
          }
          class y {
            constructor(t) {
              (this.chatView = t),
                (this.$thread = t.$chatView.$qs(".thread")),
                (this.$threadMsgs = this.$thread.$qs(".thread-messages")),
                (this.isHovering = !1),
                (this.Popover = new x({
                  contentSelector: ".msg-command",
                  $edgeEle: this.$thread,
                })),
                (this.clickedMsg = ""),
                this.wrapFunction(),
                this.bindMsgEvents(),
                this.bindThreadHover(),
                this.bindPromptToggle(),
                this.bindDotClick(),
                this.bindThreadScroll();
            }
            wrapFunction() {
              this.scrollToBottom = (0, b.P2)(this.scrollToBottom, 300);
            }
            bindMsgEvents() {
              const { chatEngine: t, eleInput: e } = this.chatView;
              e.on(f.ng.send, (t) => {
                this.appendElByMessage({ content: t, role: f.HB.user });
              }),
                t.on(f.TH.load, (t) => {
                  this.renderThread(t);
                }),
                t.on(f.TH.create, (t) => {
                  t.role !== f.HB.user && this.appendElByMessage(t);
                }),
                t.on(f.TH.append, (t) => {
                  this.replaceCurrentElContent(t);
                }),
                t.on(f.TH.replace, (t) => {
                  this.replaceCurrentElContent(t);
                });
            }
            bindThreadHover() {
              this.$thread.addEventListener("mouseenter", () => {
                this.isHovering = !0;
              }),
                this.$thread.addEventListener("mouseleave", () => {
                  this.isHovering = !1;
                });
            }
            bindPromptToggle() {
              this.chatView.elePrompt.on(f.ng.promptToggle, (t) => {
                this.$thread.style.height = `calc(100% - ${247 + t}px)`;
              });
            }
            bindDotClick() {
              this.$threadMsgs.addEventListener("click", (t) => {
                t.target.classList.contains("dot") &&
                  ((this.clickedMsg = t.target.previousSibling.textContent),
                  this.showMsgCommand(t.target));
              });
            }
            showMsgCommand(t) {
              const e = (0, b.oq)(".message", t).classList.contains("sent")
                ? "left"
                : "right";
              (this.Popover = new x({
                placement: e,
                contentSelector: ".msg-command",
                $edgeEle: this.$thread,
                $triggerEle: t,
                offset: 0,
              })),
                this.Popover.show(),
                this.bindCommand();
            }
            bindCommand() {
              this.Popover.$content.addEventListener("click", async (t) => {
                const e = t.target.getAttribute("command"),
                  { chatData: n } = this.chatView;
                try {
                  await n.handleMsgCommand(
                    e,
                    this.clickedMsg,
                    this.chatView.chatEngine,
                  ),
                    (0, b.hJ)("success");
                } catch (t) {
                  (0, b.hJ)(`${e}:${t.message}`, !0);
                }
              });
            }
            bindThreadScroll() {
              let t = !1;
              this.$threadMsgs.addEventListener("scroll", () => {
                this.Popover.isShow &&
                  !1 === t &&
                  ((t = !0),
                  setTimeout(() => {
                    this.Popover.hide(), (t = !1);
                  }, 100));
              });
            }
            renderThread(t) {
              (this.$threadMsgs.innerHTML = ""),
                t.forEach((t) => {
                  this.appendElByMessage(t);
                });
            }
            appendElByMessage(t) {
              if (t.role === f.HB.system) return;
              const e = `<div class='message ${"user" === t.role ? "sent" : "received"}'><div class='message-text'>${t.content}</div><button  class='bx bx-dots-vertical-rounded dot icon-action'></button></div>`,
                n = (0, b.yh)(e);
              return this.$threadMsgs.appendChild(n), this.scrollToBottom(), n;
            }
            scrollToBottom() {
              this.$threadMsgs.scrollTop = 1e11;
            }
            getCurrentMsgDom() {
              const { children: t } = this.$threadMsgs;
              return t[t.length - 1];
            }
            replaceCurrentElContent(t) {
              (this.getCurrentMsgDom().children[0].textContent = t.content),
                this.isHovering || this.scrollToBottom();
            }
            removeCurrentEl() {
              const t = this.getCurrentMsgDom();
              (0, b.hX)(t);
            }
          }
          class $ extends v.Z {
            constructor(t) {
              super(),
                (this.view = t),
                (this.$chatView = t.$chatView),
                (this.$resizer = this.$chatView.$qs(".resizer")),
                this.bindResize();
            }
            bindResize() {
              let t = -1,
                e = -1,
                n = -1;
              const s = (s) => {
                  s.stopPropagation(),
                    (0, b.rs)(() => {
                      (n = e + (t - s.x)),
                        (this.$chatView.style.width = `${n}px`);
                    }, "handleMousemove");
                },
                i = (t) => {
                  t.stopPropagation(),
                    (document.body.style.cursor = null),
                    this.view.chatData.setOption(f.PV.viewWidth, n),
                    document.removeEventListener("mousemove", s, !0),
                    document.removeEventListener("mouseup", i);
                };
              this.$resizer.addEventListener(
                "mousedown",
                (n) => {
                  n.preventDefault(),
                    n.stopPropagation(),
                    (document.body.style.cursor = "e-resize"),
                    (t = n.x),
                    (e = Number(
                      window
                        .getComputedStyle(this.$chatView)
                        .width.replace("px", ""),
                    )),
                    document.addEventListener("mousemove", s, !0),
                    document.addEventListener("mouseup", i);
                },
                !0,
              );
            }
          }
          class S extends v.Z {
            constructor(t) {
              super(),
                (this.chatView = t),
                (this.$stop = t.$chatView.$qs(".thread_op_stop")),
                this.$stop.addEventListener("click", () => {
                  t.chatEngine.cancelGenerating();
                }),
                (this.$regenerate = t.$chatView.$qs(".thread_op_regenerate")),
                this.$regenerate.addEventListener("click", () => {
                  t.chatEngine.regenerate();
                }),
                this.bindEngineEvents();
            }
            bindEngineEvents() {
              this.chatView.chatEngine.on(f.TH.setStatus, (t) => {
                this.toggleStopGenerating(
                  [f.S2.generating, f.S2.fetching].includes(t),
                ),
                  this.toggleRegenerate([f.S2.cancel, f.S2.failed].includes(t));
              });
            }
            toggleStopGenerating(t) {
              (0, b.WB)(this.$stop, t);
            }
            toggleRegenerate(t) {
              (0, b.WB)(this.$regenerate, t);
            }
          }
          class E extends v.Z {
            constructor(t) {
              super(),
                (this.chatView = t),
                (this.$userInput = t.$chatView.$qs(".input-area")),
                (this.$sendBtn = t.$chatView.$qs(".operate_send")),
                (this.engineStatus = f.S2.none),
                this.bindInput(),
                this.bindSendMessage(),
                this.bindDependEvents();
            }
            bindInput() {
              this.$userInput.addEventListener("input", () => {
                this.setBtnStyle();
              });
            }
            bindDependEvents() {
              b._c.on(f.kZ.poperHide, () => {
                this.$userInput.focus();
              }),
                this.chatView.chatEngine.on(f.TH.setStatus, (t) => {
                  this.enableUserInput(t !== f.S2.failed),
                    this.handleMsgStatus(t);
                }),
                this.chatView.elePrompt.on(f.ng.promptToggle, () => {
                  this.setBtnStyle();
                }),
                this.chatView.on([f.ng.viewShow], () => {
                  this.$userInput.focus();
                });
            }
            handleMsgStatus(t) {
              (this.engineStatus = t), this.setBtnStyle();
            }
            async setBtnStyle() {
              const t =
                (0, b.qr)(this.engineStatus) || this.engineStatus === f.S2.none;
              let e = "";
              if ((this.$userInput.focus(), t)) {
                const { msgEngine: t } = await this.getParsedMsg();
                if (!t)
                  return (
                    this.$sendBtn.classList.add("freezed"),
                    void this.$sendBtn.setAttribute("title", "Type a message")
                  );
                this.$sendBtn.classList.remove("freezed"),
                  (e = "Send(Enter to send, Shift+Enter to break line)");
              } else
                this.$sendBtn.classList.add("freezed"),
                  (e =
                    this.engineStatus === f.S2.failed
                      ? "Regenerating is worth a try"
                      : "Wait a moment");
              this.$sendBtn.setAttribute("title", e);
            }
            bindSendMessage() {
              const t = async () => {
                if (this.checkShortcut()) return;
                const { msgView: t, msgEngine: e } = await this.getParsedMsg();
                (0, b.fF)(t, e),
                  e &&
                    this.chatView.chatEngine.isAvailable() &&
                    (this.emit(f.ng.send, t),
                    this.chatView.chatEngine.requestCompletion({
                      userInput: e,
                    }),
                    this.clearInput());
              };
              this.$sendBtn.addEventListener("click", t.bind(this)),
                this.$userInput.addEventListener("keydown", (e) => {
                  "Enter" !== e.key ||
                    e.shiftKey ||
                    (e.preventDefault(), t.call(this));
                });
            }
            checkShortcut() {
              const t = this.$userInput.value.trim(),
                e = { "/p": f.ng.p, "/c": f.ng.c, "/h": f.ng.h }[t];
              if (e) return this.clearInput(), this.chatView.emit(e), !0;
            }
            async getParsedMsg() {
              const t = this.chatView.elePrompt.$getParsedPromt(),
                e = this.$userInput.value,
                n = (0, b.YU)(e);
              if (((0, b.fF)(t, e, n), !t))
                return { msgEngine: e.trim(), msgView: n.trim() };
              let s = t,
                i = t;
              const a = /{{message}}/g,
                r = /{{activeNote}}/g;
              if (r.test(t))
                try {
                  const { engine: t, view: e } =
                    await this.chatView.chatData.getActiveNoteContent();
                  (s = s.replace(r, t)), (i = i.replace(r, e)), (0, b.fF)(s, i);
                } catch (t) {
                  console.error(t);
                }
              return (
                a.test(t) && ((s = s.replace(a, e)), (i = i.replace(a, n))),
                { msgEngine: s.trim(), msgView: i.trim() }
              );
            }
            enableUserInput(t) {
              this.$userInput.disabled = !t;
            }
            clearInput() {
              this.$userInput.value = "";
            }
          }
          const C = {
            [f.S2.none]: "Ready",
            [f.S2.fetching]: "Thinking...",
            [f.S2.generating]: "Typing...",
            [f.S2.success]: "On standby",
            [f.S2.failed]: f.S2.failed,
            [f.S2.cancel]: f.S2.cancel,
          };
          class k {
            constructor(t) {
              (this.chatView = t),
                (this.$status = t.$chatView.$qs(".operate_status")),
                t.chatEngine.on(f.TH.setStatus, (t) => {
                  this.handleMsgStatus(t);
                });
            }
            handleMsgStatus(t) {
              const e = C[t];
              this.$status.textContent = e;
            }
            handleDataStatus(t) {
              const { status: e, key: n, value: s } = t;
              e === f.f5.success
                ? (this.$status.textContent = "")
                : (this.$status.textContent = `${e}: ${n} - ${s}`);
            }
          }
          class T {
            constructor(t) {
              this.view = t;
              const e = t.$chatView.$qs(".header_face");
              t.on(f.ng.viewShow, () => {
                this.refreshFace(e, t.options);
              }),
                this.handleCheckUpdates(e, t.options);
            }
            async handleCheckUpdates(t, e) {
              if (e.checkUpdates)
                try {
                  const e =
                      "https://api.github.com/repos/soulsands/trilium-chat/releases/latest",
                    n = await fetch(e),
                    s = await n.json(),
                    i = s?.tag_name;
                  i > (window.__triliumChatVersion || "1.1.1") &&
                    (t.classList.add("dot"),
                    t.setAttribute(
                      "title",
                      "New version found, click to download",
                    ),
                    t.addEventListener(
                      "click",
                      async (t) => {
                        t.preventDefault();
                        try {
                          const t = s.assets[0].browser_download_url;
                          window.open(t);
                        } catch (t) {
                          console.error(t);
                        }
                      },
                      !0,
                    ));
                } catch (t) {
                  console.error(t);
                }
            }
            refreshFace(t, e) {
              const n = e[f.PV.faces],
                s = e[f.PV.colors],
                i = (0, b.MX)(n),
                a = (0, b.MX)(s);
              t.classList.forEach((e) => {
                /bx.+/.test(e) && t.classList.remove(e);
              }),
                (t.style.color = a),
                t.classList.add(i);
            }
          }
          class L {
            constructor(t) {
              (this.chatView = t),
                (this.$collapse = t.$chatView.$qs(".header_hide")),
                this.bindCollapse();
            }
            bindCollapse() {
              this.$collapse.addEventListener("click", () => {
                this.chatView.hideView();
              });
            }
          }
          class P {
            constructor({ type: t = "dialog", $content: e, $chatView: n }) {
              (this.type = t),
                (this.wrapperClassName = {
                  popup: "content_wrapper_popup",
                  dialog: "content_wrapper_dialog",
                }[t]),
                (this.$content = (0, b.hX)(e)),
                (this.$chatView = n),
                (this.$modal = null),
                (this.isShow = !1);
            }
            async show(t) {
              if (!this.isShow) {
                if (
                  (this.$modal || this.initModal(),
                  (b.x0.global += 1),
                  (this.$modal.style.zIndex = b.x0.global),
                  (b.x0.currentModal = b.x0.global),
                  this.$chatView.appendChild(this.$modal),
                  (0, b.WB)(this.$modal, !0),
                  this.$contentWrapper.classList.add(this.wrapperClassName),
                  "popup" !== this.type)
                ) {
                  const { offsetWidth: e, offsetHeight: n } =
                      this.$contentWrapper,
                    { offsetLeft: s, offsetTop: i } = this.$chatView,
                    {
                      left: a,
                      width: r,
                      top: o,
                      height: c,
                    } = t.target.getBoundingClientRect();
                  (this.$contentWrapper.style.left =
                    a + r / 2 - s - e / 2 + "px"),
                    (this.$contentWrapper.style.top =
                      o + c / 2 - i - n / 2 + "px");
                }
                await (0, b.j1)(),
                  (0, b.Yl)(this.$mask, !0),
                  (0, b.Yl)(this.$contentWrapper, !0),
                  (this.isShow = !0),
                  b.x0.stack.push(this);
              }
            }
            initModal() {
              (this.$modal = (0, b.yh)(
                '<div class="chat_modal">\n<div class="modal_mask"></div>\n<div class="content_wrapper"></div>\n</div>',
              )),
                (this.$mask = this.$modal.$qs(".modal_mask")),
                (this.$contentWrapper = this.$modal.$qs(".content_wrapper")),
                this.$contentWrapper.appendChild(this.$content),
                this.bindClick();
            }
            bindClick() {
              this.$mask.addEventListener("click", () => {
                this.hide();
              }),
                this.$contentWrapper.addEventListener("click", () => {});
            }
            async hide() {
              if (!this.isShow) return;
              const t = () => {
                (0, b.WB)(this.$modal, !1),
                  (this.$contentWrapper.style.left = "initial"),
                  (this.$contentWrapper.style.top = "initial"),
                  b._c.emit(f.kZ.poperHide),
                  this.$contentWrapper.classList.remove(this.wrapperClassName),
                  (0, b.hX)(this.$modal),
                  (this.isShow = !1),
                  (b.x0.currentModal = null),
                  this.$mask.removeEventListener("transitionend", t);
              };
              (0, b.Ab)(b.x0.stack, this),
                this.$mask.addEventListener("transitionend", t),
                (0, b.Yl)(this.$mask, !1),
                (0, b.Yl)(this.$contentWrapper, !1);
            }
          }
          class M extends v.Z {
            constructor(t) {
              super(),
                (this.chatView = t),
                (this.$content = t.$chatView.$qs(".content_select_history")),
                (this.Modal = new P({
                  type: "popup",
                  $content: this.$content,
                  $chatView: t.$chatView,
                })),
                (this.$showBtn = t.$chatView.$qs(".operate_btn_history")),
                (this.$historyLabel = this.$content.$qs(".select_count")),
                (this.$num = this.$content.$qs(".select_num")),
                (this.$closeBtn = this.$content.$qs(".select_close")),
                (this.$search = this.$content.$qs(".select_search_input")),
                (this.$list = this.$content.$qs(".select_list")),
                (this.$recordTpl = (0, b.hX)(
                  this.$content.$qs(".select_item"),
                )),
                (this.records = []),
                this.bindEvents();
            }
            hide() {
              this.Modal.hide();
            }
            bindEvents() {
              this.chatView.on(f.ng.h, async () => {
                this.show();
              }),
                this.$showBtn.addEventListener("click", async () => {
                  this.show();
                }),
                this.$closeBtn.addEventListener("click", () => {
                  this.hide();
                }),
                this.$historyLabel.addEventListener("click", () => {
                  this.chatView.chatData.goHistorys();
                }),
                this.$search.addEventListener("input", (t) => {
                  this.renderSearch(t.target.value);
                }),
                this.$list.addEventListener("click", (t) => {
                  const e = (0, b.oq)("[data-id]", t.target);
                  if (e) {
                    const n = this.records.find((t) => t.id === e.dataset.id);
                    if (t.target.classList.contains("bx-edit-alt"))
                      return void this.chatView.chatData.goHistory(
                        e.dataset.id,
                      );
                    this.hide(), this.chatView.chatEngine.loadThread(n);
                  }
                });
            }
            async show() {
              this.Modal.show(),
                this.loadHistory(),
                await (0, b._v)(300),
                this.$search.focus();
            }
            async loadHistory() {
              const t = await this.chatView.chatData.getRecords();
              this.records = Object.keys(t).map((e) => ({ id: e, ...t[e] }));
              const e = [
                ...this.records.filter((t) => t.favor).sort(this.sortByStamp),
                ...this.records.filter((t) => !t.favor).sort(this.sortByStamp),
              ];
              this.renderCount(this.records.length), this.renderList(e);
            }
            sortByStamp(t, e) {
              const n = t.list[t.list.length - 1];
              return e.list[e.list.length - 1].stamp - n.stamp;
            }
            renderCount(t) {
              this.$num.textContent = t;
            }
            renderList(t) {
              this.$list.innerHTML = "";
              const e = document.createDocumentFragment();
              t.forEach((t) => {
                const n = t.list.find((t) => t.role === f.HB.assistant),
                  s = t.list[t.list.length - 1],
                  i = this.$recordTpl.cloneNode(!0);
                if (
                  ((0, b.Rh)(i, () => {
                    this.hide(), this.chatView.chatEngine.loadThread(t);
                  }),
                  t.favor)
                ) {
                  const t = document.createElement("div");
                  t.classList.add("favor"), i.appendChild(t);
                }
                i.setAttribute("data-id", t.id),
                  (i.$qs(".item_title").textContent = t.title || t.originTitle),
                  (i.$qs(".item_stamp").textContent = (0, b.Sy)(s.stamp));
                const a = i.$qs(".item_preview");
                a.setAttribute("title", n.content),
                  (a.textContent = n.content),
                  e.appendChild(i);
              }),
                this.$list.appendChild(e);
            }
            renderSearch(t) {
              const e = this.records.filter((e) =>
                e.list.some((e) => (0, b.UR)(e.content).includes((0, b.UR)(t))),
              );
              this.renderList(e);
            }
          }
          class O extends v.Z {
            constructor(t) {
              super(),
                (this.$newBtn = t.$chatView.$qs(".operate_btn_new")),
                this.$newBtn.addEventListener("click", () => {
                  t.chatEngine.newChat();
                });
            }
          }
          class N extends v.Z {
            constructor(t) {
              super(),
                (this.chatView = t),
                (this.$showBtn = t.$chatView.$qs(".operate_btn_command")),
                (this.popover = new x({
                  placement: "top",
                  contentSelector: ".content_command",
                  $edgeEle: t.$chatView,
                  $triggerEle: this.$showBtn,
                  offset: 6,
                })),
                (this.$content = this.popover.$content),
                t.on(f.ng.c, () => {
                  this.show();
                }),
                this.bindShowClick(),
                this.bindCommand(),
                this.checkAutoSave();
            }
            checkAutoSave() {
              this.chatView.options.autoSave &&
                (this.$content.$qs("[command=history]").style.display = "none");
            }
            bindShowClick() {
              this.$showBtn.addEventListener("click", () => {
                this.show();
              });
            }
            async show() {
              this.popover.show(() => {
                this.$content.$qs(".command_item").focus();
              });
            }
            bindCommand() {
              this.$content.querySelectorAll(".command_item").forEach((t) => {
                const e = () => {
                  const e = t.getAttribute("command");
                  this.excuteCommand(e);
                };
                t.addEventListener("click", () => {
                  e();
                }),
                  (0, b.Rh)(t, () => {
                    e();
                  });
              });
            }
            async hide() {
              this.popover.hide();
            }
            async excuteCommand(t) {
              const { chatEngine: e, chatData: n } = this.chatView;
              try {
                (0, b.$k)(e), await n.handleCommand(t, e), (0, b.hJ)("success");
              } catch (e) {
                (0, b.hJ)(`${t}:${e.message}`, !0);
              }
            }
          }
          class V extends v.Z {
            constructor({
              $content: t,
              $chatView: e,
              title: n,
              saveText: s = "Save",
              cancelText: i = "Cancel",
            }) {
              super(),
                (this.$wrapper = document.createElement("div")),
                (this.$wrapper.innerHTML = `<div class="form_wrapper">\n        <div class="form_wrapper_top flex-center-between">\n            <div class="wapper_title">${n}</div>\n            <div class="wapper_close bx bx-x icon-action"></div>\n        </div>\n        <div class="wrapper_content"></div>\n        <div class="wrapper_op">\n            <button class="chat_button wrapper_btn_cancel">${i}</button>\n            <button class="chat_button wrapper_btn_save ml-1">${s}</button>\n        </div>\n    </div>`),
                (this.$content = t),
                (this.$chatView = e),
                (this.$save = this.$wrapper.$qs(".wrapper_btn_save")),
                this.$wrapper.$qs(".wrapper_content").appendChild(t),
                e.appendChild(this.$wrapper),
                (this.$inputs = Array.from(
                  this.$content.querySelectorAll("[name]"),
                )),
                (this.modal = new P({
                  type: "dialog",
                  $content: this.$wrapper,
                  $chatView: e,
                })),
                (this.flagObj = null),
                this.bindEvents();
            }
            bindEvents() {
              this.$wrapper
                .$qs(".wapper_close")
                .addEventListener("click", () => {
                  this.emit(f.ng.formCancel);
                }),
                this.$save.addEventListener("click", () => {
                  const t = Array.from(
                    this.$content.querySelectorAll("[name]"),
                  );
                  try {
                    const e = t.reduce((t, e) => {
                      if (((t[e.name] = e.value), !e.value))
                        throw (
                          (((t, e, n, s = "right") => {
                            new x({
                              placement: s,
                              text: t,
                              $edgeEle: n,
                              $triggerEle: e,
                              offset: 0,
                              hideDelay: 1e3,
                            }).show();
                          })("no empty", this.$save, this.$chatView, "top"),
                          new Error())
                        );
                      return t;
                    }, {});
                    this.emit(f.ng.formSave, e, this.flagObj);
                  } catch (t) {
                    console.error(t);
                  }
                }),
                this.$wrapper
                  .$qs(".wrapper_btn_cancel")
                  .addEventListener("click", () => {
                    this.emit(f.ng.formCancel);
                  });
            }
            show(t, { title: e, formData: n = {}, flagObj: s } = {}) {
              e && (this.$wrapper.$qs(".wapper_title").textContent = e),
                this.$inputs.forEach((t, e) => {
                  0 === e &&
                    setTimeout(() => {
                      t.focus();
                    }, 200),
                    (t.value = n[t.name] || "");
                }),
                (this.flagObj = s),
                this.modal.show(t);
            }
            hide() {
              this.enable(!0), this.modal.hide();
            }
            enable(t) {
              (this.$wrapper.$qs(".wrapper_btn_save").disabled = !t),
                (this.$wrapper.$qs(".wrapper_btn_cancel").disabled = !t);
            }
          }
          class H extends v.Z {
            constructor(t) {
              super(),
                (this.chatView = t),
                (this.$promptContent = t.$chatView.$qs(".prompt_content")),
                (this.$showBtn = t.$chatView.$qs(".operate_btn_prompt")),
                (this.Popover = new x({
                  placement: "top",
                  contentSelector: ".content_select_prompt",
                  $edgeEle: t.$chatView,
                  $triggerEle: this.$showBtn,
                  offset: 6,
                  popoverClass: "popover_prompt",
                })),
                (this.$content = this.Popover.$content),
                (this.$count = this.$content.$qs(".select_count")),
                (this.$countNum = this.$count.$qs(".select_num")),
                (this.$addBtn = this.$content.$qs(".select_add")),
                (this.$closeBtn = this.$content.$qs(".select_close")),
                (this.$search = this.$content.$qs(".select_search_input")),
                (this.$list = this.$content.$qs(".select_list")),
                (this.$promptTpl = (0, b.hX)(
                  this.$content.$qs(".select_item"),
                )),
                (this.$contentForm = t.$chatView.$qs(".content_prompt_form")),
                (this.ModalForm = new V({
                  $content: this.$contentForm,
                  $chatView: t.$chatView,
                  title: "Add prompt template",
                })),
                (this.prompts = []),
                this.bindEvents(),
                (this.currentPrompt = null);
            }
            async hide() {
              this.Popover.hide();
            }
            bindEvents() {
              this.chatView.on(f.ng.p, () => {
                this.show();
              }),
                this.$showBtn.addEventListener("click", async () => {
                  this.show();
                }),
                this.bindContentEvents(),
                this.bindListEvents(),
                this.bindFormEvents();
            }
            show() {
              this.Popover.show(() => {
                this.$search.focus();
              }),
                this.loadPrompts();
            }
            bindContentEvents() {
              this.$promptContent
                .$qs(".prompt_content_close")
                .addEventListener("click", () => {
                  (this.$promptContent.style.height = "0px"),
                    (0, b.WB)(this.$promptContent, !1),
                    this.clearContent(),
                    this.emit(f.ng.promptToggle, 0);
                });
            }
            clearContent() {
              (this.currentPrompt = null), (this.$text.innerHTML = "");
            }
            bindListEvents() {
              this.$count.addEventListener("click", () => {
                window.open("https://prompts.chat/#using-promptschat");
              }),
                this.$addBtn.addEventListener("click", async (t) => {
                  this.ModalForm.show(t, { title: "Add prompt template" });
                }),
                this.$closeBtn.addEventListener("click", () => {
                  this.hide();
                }),
                this.$search.addEventListener("input", (t) => {
                  this.renderSearch(t.target.value);
                }),
                this.$list.addEventListener("click", async (t) => {
                  const e = (0, b.oq)("[data-id]", t.target);
                  if (e) {
                    const n = this.prompts.find((t) => t.id === e.dataset.id);
                    let s = "select";
                    if (
                      (t.target.classList.contains("bx-edit-alt")
                        ? (s = "edit")
                        : t.target.classList.contains("bx-trash") &&
                          (s = "delete"),
                      "edit" === s)
                    )
                      return void this.ModalForm.show(t, {
                        title: "Edit prompt template",
                        formData: {
                          "prompt-name": n.name,
                          "prompt-content": n.content,
                        },
                        flagObj: n,
                      });
                    if ("delete" === s)
                      return (
                        await this.chatView.chatData.deletePrompt(n),
                        void this.loadPrompts()
                      );
                    (0, b.fF)(n), this.handlePromptContent(n), this.hide();
                  }
                });
            }
            async handlePromptContent(t) {
              (this.currentPrompt = t),
                (0, b.WB)(this.$promptContent, !0),
                this.renderContent(t);
            }
            async renderContent(t) {
              (this.$text = this.$promptContent.$qs(".prompt_content_text")),
                (this.$text.innerHTML = (0, b.Xj)(t.content)),
                await (0, b.j1)(),
                (this.$promptContent.style.height = `${this.$text.offsetHeight + 40}px`),
                this.emit(f.ng.promptToggle, this.$text.offsetHeight + 40);
            }
            bindFormEvents() {
              this.ModalForm.on(f.ng.formSave, async (t, e) => {
                if (((0, b.fF)(e), this.ModalForm.enable(!1), e)) {
                  const n = {
                    ...e,
                    name: t["prompt-name"],
                    content: t["prompt-content"],
                  };
                  await this.chatView.chatData.updatePrompt(n),
                    e.id === this.currentPrompt.id &&
                      ((this.currentPrompt = n), this.renderContent(n));
                } else {
                  const e = {
                    name: t["prompt-name"],
                    content: t["prompt-content"],
                    id: Date.now().toString(),
                  };
                  await this.chatView.chatData.createPrompt(e);
                }
                this.ModalForm.hide(), this.loadPrompts();
              }),
                this.ModalForm.on(f.ng.formCancel, () => {
                  this.ModalForm.hide();
                });
            }
            async loadPrompts() {
              (this.prompts = (
                (await this.chatView.chatData.getPrompts()) || []
              ).sort((t, e) => e.order - t.order)),
                this.renderCount(this.prompts.length),
                this.renderList(this.prompts);
            }
            renderCount(t) {
              this.$countNum.textContent = t;
            }
            renderList(t) {
              this.$list.innerHTML = "";
              const e = document.createDocumentFragment();
              t.forEach((t) => {
                const n = this.$promptTpl.cloneNode(!0);
                (0, b.Rh)(n, () => {
                  this.handlePromptContent(t), this.hide();
                }),
                  n.setAttribute("data-id", t.id),
                  n.setAttribute("title", t.content),
                  (n.$qs(".item_title").textContent = t.name),
                  e.appendChild(n);
              }),
                this.$list.appendChild(e);
            }
            renderSearch(t) {
              const e = this.prompts.filter(
                (e) =>
                  (0, b.UR)(e.name).includes((0, b.UR)(t)) ||
                  (0, b.UR)(e.content).includes((0, b.UR)(t)),
              );
              this.renderList(e);
            }
            $getParsedPromt() {
              return this.currentPrompt
                ? (0, b.jN)(this.$promptContent, this.currentPrompt.content)
                : "";
            }
          }
          class q {
            constructor(t) {
              t.$chatView
                .$qs(".operate_btn_option")
                .addEventListener("click", () => {
                  t.chatData.goOptions();
                });
            }
          }
          class B extends v.Z {
            constructor({ options: t, chatData: e, chatEngine: n }) {
              super(),
                (this.options = t),
                (this.chatData = e),
                (this.chatEngine = n),
                this.appendEleToHost(),
                (this.$chatView = null),
                this.initSkeleton(),
                this.activateElements(),
                this.initViewWidth(),
                this.bindListeners();
            }
            initSkeleton(t = "body") {
              const e = document.$qs(t);
              (this.$chatView = (0, b.yh)(
                '<div class="chat-wrapper"><div class="resizer"></div><div class="header"><div class="header_left flex-center"><a class="link flex-center no-arrow" href="https://github.com/soulsands/trilium-chat" target="_blank"><i class="header_face bx icon-view" title="home"></i></a></div><div class="header_right"><button title="hide" class="header_hide bx bx-minus icon-action"></button></div></div><div class="thread"><div class="thread-messages"></div><button class="thread_op thread_op_stop">Stop generating</button> <button class="thread_op thread_op_regenerate">Retry/Regenerate Output</button><div class="msg-command"><div class="command_item" command="copy" title="Copy">Copy</div><div class="command_item" command="insert" title="Insert to caret">Insert</div><div class="command_item" command="append" title="Append to active notet">Append</div><div class="command_item" command="set" title="Set to active note">Set</div><div class="command_item" command="child" title="Save to new child">Child</div></div></div><div class="prompt_content"><div class="prompt_content_close flex-row-reverse"><i class="bx bx-x icon-action"></i></div><div class="prompt_content_text"></div></div><div class="operate no-shrink"><div class="operate_top flex-center-between"><div class="operate_top_left flex-center"><button class="operate_btn operate_btn_new chat_button">New Chat</button> <button class="operate_btn operate_btn_prompt bx bx-book-bookmark icon-action" title="Prompt"></button> <button class="operate_btn operate_btn_command bx bx-terminal icon-action" title="Command"></button><div class="operate_btn operate_btn_history bx bx-history icon-action" title="History"></div></div><div class="operate_top_right"><button class="operate_btn operate_btn_option bx bx-cog icon-action" title="Options"></button></div></div><div class="operate_input"><textarea class="input-area bd-main" placeholder="Send a message..."></textarea> <i title="Send(Enter to send, Shift+Enter to break line)" class="operate_send bx bx-paper-plane icon-action"></i></div><div class="operate_bottom flex-row-reverse"><div class="operate_status"></div></div></div><div class="content_select content_select_prompt"><div class="select_top flex-center-between"><div class="flex-center"><div class="select_count pointer">Prompt(<span class="select_num">0</span>)</div><button class="ml-2 select_add bx bx-plus icon-action"></button></div><button class="select_close bx bx-chevron-down icon-action"></button></div><div class="select_search bd-main flex-center"><i class="bx bx-search"></i> <input class="select_search_input" placeholder="Search"/></div><div class="select_list"><div class="select_item" tabindex="0"><div class="item_top"><div class="item_title one-line"></div><div class="item_op no-shrink"><i class="bx bx-edit-alt icon-action"></i> <i class="bx bx-trash icon-action"></i></div></div>\x3c!-- <div class="item_preview one-line"></div> --\x3e</div></div></div><form class="content_prompt_form"><label>Prompt Name:</label> <input class="prompt_input bd-main" placeholder="Name your prompt" name="prompt-name"/> <label class="mt-1">Prompt Content:</label> <textarea class="prompt_input bd-main prompt_input_content" placeholder="Paste or input content here" type="tex" name="prompt-content"></textarea></form><div class="content_select content_select_history"><div class="select_top flex-center-between"><div class="select_count pointer">History(<span class="select_num"></span>)</div><div class="select_close bx bx-chevron-down icon-action"></div></div><div class="select_search bd-main flex-center"><i class="bx bx-search"></i> <input class="select_search_input" placeholder="Search"/></div><div class="select_list"><div class="select_item" tabindex="0"><div class="flex-center-between item_top"><div class="item_title one-line"></div><div class="item_stamp no-shrink"></div></div><div class="flex-center-between item_down"><div class="item_preview one-line"></div><div class="item_op no-shrink"><i class="bx bx-edit-alt icon-action"></i></div></div></div></div></div><div class="content_command"><div class="command_title">Commands</div><div class="command_list"><div class="command_item" command="copy" tabindex="0">Copy thread</div><div class="command_item" command="history" tabindex="0">Save to history</div><div class="command_item" command="favor" tabindex="0">Favor in history</div><div class="command_item" command="unfavor" tabindex="0">Unfavor in history</div><div class="command_item" command="set" tabindex="0">Set to active note</div><div class="command_item" command="append" tabindex="0">Append to active note</div><div class="command_item" command="child" tabindex="0">Save to new child</div></div></div></div>',
              )),
                e.appendChild(this.$chatView);
            }
            appendEleToHost() {
              this.appendToggleBtn();
            }
            appendToggleBtn() {
              (0, b.de)();
            }
            activateElements() {
              (this.elePrompt = new H(this)),
                (this.eleInput = new E(this)),
                (this.eleResizer = new $(this)),
                (this.eleThread = new y(this)),
                (this.eleGenerate = new S(this)),
                (this.eleStatus = new k(this)),
                (this.eleFace = new T(this)),
                (this.eleCollapse = new L(this)),
                (this.eleHistory = new M(this)),
                (this.eleNewChat = new O(this)),
                (this.eleCommand = new N(this)),
                new q(this);
            }
            initViewWidth() {
              this.$chatView.style.width = `${this.options[f.PV.viewWidth]}px`;
            }
            bindListeners() {
              this.$chatView.addEventListener("keydown", b.$O),
                this.bindShortcut();
            }
            bindShortcut() {
              (0, b.de)();
            }
            showView() {
              this.emit(f.ng.viewShow), this.$chatView.classList.add(f.f1);
            }
            hideView() {
              this.emit(f.ng.viewHide), this.$chatView.classList.remove(f.f1);
            }
            isViewShow() {
              return this.$chatView.classList.contains(f.f1);
            }
            toggleView() {
              this.isViewShow() ? this.hideView() : this.showView();
            }
          }
        },
        302: (t, e, n) => {
          n(257), n(40);
        },
        323: (t, e, n) => {
          n.d(e, { Z: () => f });
          var s = n(379),
            i = n.n(s),
            a = n(795),
            r = n.n(a),
            o = n(569),
            c = n.n(o),
            h = n(565),
            d = n.n(h),
            p = n(216),
            l = n.n(p),
            m = n(589),
            u = n.n(m),
            g = n(447),
            w = {};
          (w.styleTagTransform = u()),
            (w.setAttributes = d()),
            (w.insert = c().bind(null, "head")),
            (w.domAPI = r()),
            (w.insertStyleElement = l()),
            i()(g.Z, w),
            g.Z && g.Z.locals && g.Z.locals;
          var v = n(40);
          class f extends v.Z {
            appendToggleBtn() {
              const t = class extends api.NoteContextAwareWidget {
                  isEnabled() {
                    return !0;
                  }
                  constructor(t) {
                    super(), (this.options = t);
                  }
                  doRender() {
                    this.$widget = $(
                      '<div class="chat-toggle-wrapper flex-row-reverse"><button class="button-widget bx icon-action"\n      data-toggle="tooltip"\n      title=""></button></div>',
                    );
                    const t = this.$widget.find(".button-widget");
                    t.attr("data-placement", "bottom"),
                      t.tooltip({ html: !0, title: "Chat", trigger: "hover" }),
                      t.addClass("bx-message-square-dots"),
                      t.on("click", this.options.onClick),
                      (this.$btn = t),
                      super.doRender();
                  }
                },
                e = new t({
                  onClick: () => {
                    e.$btn.tooltip("hide"), this.toggleView();
                  },
                }),
                n = $(".title-bar-buttons");
              n.length
                ? n.prepend(e.render())
                : $(".tab-row-filler").prepend(e.render());
            }
            bindShortcut() {
              const { toggle: t, hide: e } = this.options.shortcut;
              api.bindGlobalShortcut(t, () => {
                this.toggleView();
              }),
                api.bindGlobalShortcut(e, () => {
                  this.hideView();
                });
            }
          }
        },
        257: (t, e, n) => {
          n.d(e, {
            GD: () => v,
            HB: () => s,
            HT: () => g,
            O2: () => w,
            PV: () => l,
            S2: () => h,
            TH: () => r,
            WN: () => u,
            bs: () => o,
            cQ: () => p,
            cT: () => m,
            f1: () => d,
            f5: () => c,
            kZ: () => a,
            ng: () => i,
            t$: () => f,
          });
          const s = {
              system: "system",
              user: "user",
              assistant: "assistant",
              error: "error",
            },
            i = {
              viewShow: "viewShow",
              viewHide: "viewHide",
              formSave: "formSave",
              formCancel: "formCancel",
              promptToggle: "promptToggle",
              send: "send",
              p: "p",
              c: "c",
              h: "h",
            },
            a = { poperHide: "ph" },
            r = {
              create: "create",
              append: "append",
              replace: "replace",
              cancel: "cancel",
              setStatus: "setStatus",
              load: "load",
            },
            o = { setStatus: "setStatus" },
            c = {
              optionSyncing: "optionSyncing",
              success: "success",
              failed: "failed",
            },
            h = {
              none: "none",
              fetching: "Fetching information for task.",
              generating: "Generating information for task.",
              success: "Successfully completed task.",
              failed:
                "Failed, view the console for more information. (ctrl + shift + i)",
              cancel: "Canceled task.",
            },
            d = "show",
            p = "fadein",
            l = { viewWidth: "viewWidth", faces: "faces", colors: "colors" },
            m = {
              CHAT_OPTIONS: "CHAT_OPTIONS",
              CHAT_PROMPTS: "CHAT_PROMPTS",
              HISTORY_LABEL: "CHAT_HISTORY_ID",
              HISTORY_HOME_LABEL: "CHAT_HISTORY_HOME",
            },
            u = {
              viewWidth: 400,
              engine: "ChatGpt",
              apiKey: "",
              requestUrls: {
                completion: "https://api.openai.com/v1/chat/completions",
              },
              engineOptions: {
                model: "gpt-3.5-turbo-16k",
                max_tokens: 2500,
                temperature: 0.3,
                top_p: 1,
                presence_penalty: 0.5,
                frequency_penalty: 0.5,
                stream: !0,
                n: 1,
              },
              shortcut: { toggle: "Alt+Q", hide: "Esc" },
              faces: [
                "bx-smile",
                "bx-wink-smile",
                "bx-face",
                "bx-happy-alt",
                "bx-cool",
                "bx-laugh",
                "bx-upside-down",
              ],
              colors: ["var(--muted-text-color)"],
              autoSave: !0,
              systemPrompt: "",
              checkUpdates: !0,
            },
            g = [
              {
                id: "official-0",
                name: "translate",
                content:
                  "Translate the following content to {{language:English|Chinese|Czech}} language: \n{{message}}",
                order: 0,
              },
              {
                id: "official-1",
                name: "translateNote",
                content:
                  "Translate the following content to {{language:English|Chinese|Czech}} language: \n{{activeNote}}",
                order: 1,
              },
              {
                id: "official-2",
                name: "summarizeNote",
                content: "Summarize the following content: \n{{activeNote}}",
                order: 2,
              },
            ],
            w = "NOT SUPPORTED",
            v = "Only support text/code",
            f = "No thread";
        },
        225: (t, e, n) => {
          n.a(
            t,
            async (t, e) => {
              try {
                var s = n(926),
                  i = (n(302), n(323)),
                  a = (n(300), n(0)),
                  r = n(257),
                  o = n(655);
                class t {
                  constructor() {
                    this.init();
                  }
                  async init() {
                    const t = this.setChatData(),
                      e = await t.initOptions();
                    await t.initPrompts();
                    const n = this.getEngine(e);
                    this.setView({ chatData: t, options: e, chatEngine: n }),
                      n.newChat();
                  }
                  setChatData() {
                    return (
                      (this.chatData = new a.Z()),
                      this.chatData.on(r.bs.setStatus, (t) => {
                        this.chatView.eleStatus.handleDataStatus(t);
                      }),
                      this.chatData
                    );
                  }
                  getEngine(t) {
                    let e;
                    return (
                      "chatgpt" === t.engine.toLowerCase() && (e = new s.Z(t)),
                      e.on(r.TH.setStatus, (n) => {
                        t.autoSave && this.chatData.handleMsgStatus(n, e);
                      }),
                      e
                    );
                  }
                  async setView(t) {
                    const e = i.Z;
                    this.chatView = new e(t);
                  }
                }
                (Element.prototype.$qs = Element.prototype.querySelector),
                  (Document.prototype.$qs = Document.prototype.querySelector),
                  await (0, o.j1)(),
                  (window._triliumChat = new t()),
                  e();
              } catch (t) {
                e(t);
              }
            },
            1,
          );
        },
        655: (t, e, n) => {
          n.d(e, {
            rs: () => $,
            Ab: () => N,
            Rh: () => b,
            Au: () => X,
            tY: () => V,
            xD: () => g,
            oq: () => h,
            RV: () => A,
            JG: () => G,
            fF: () => O,
            YU: () => j,
            $k: () => B,
            jN: () => l,
            _c: () => Y,
            yh: () => m,
            qr: () => q,
            $O: () => x,
            Yo: () => H,
            j1: () => T,
            Xj: () => p,
            MX: () => L,
            hX: () => c,
            hJ: () => I,
            _v: () => k,
            Xg: () => D,
            qT: () => R,
            P2: () => S,
            _y: () => E,
            de: () => C,
            Sy: () => U,
            UR: () => M,
            Yl: () => o,
            WB: () => r,
            IO: () => P,
            x0: () => v,
          });
          var s = n(605),
            i = n(257);
          function a(t, e, n) {
            t.classList.toggle(n, e);
          }
          function r(t, e) {
            a(t, e, i.f1);
          }
          function o(t, e) {
            a(t, e, i.cQ);
          }
          function c(t) {
            if (t.parentElement) return t.parentElement.removeChild(t);
          }
          function h(t, e) {
            return e?.matches ? (e.matches(t) ? e : h(t, e.parentNode)) : null;
          }
          const d = /{{([^}]+):([^}]+)}}/g,
            p = (t) => {
              let e,
                n = t;
              for (; null !== (e = d.exec(n)); ) {
                const t = e[0],
                  s = `<select name="${e[1].trim()}">${e[2]
                    .split("|")
                    .map((t) => t.trim())
                    .map((t) => `<option value="${t}">${t}</option>`)
                    .join("")}<select>`;
                n = n.replace(t, s);
              }
              return (d.lastIndex = 0), n;
            },
            l = (t, e) => {
              let n = e;
              return (
                Array.from(t.querySelectorAll("select")).forEach((t) => {
                  const e = d.exec(n)[0];
                  n = n.replace(e, t.value);
                }),
                (d.lastIndex = 0),
                n
              );
            },
            m = (t) => {
              const e = document.createElement("template");
              return (e.innerHTML = t), e.content.lastChild;
            },
            u = new Map();
          function g(t, e) {
            return (
              u.set(t, e),
              function () {
                u.delete(t);
              }
            );
          }
          function w(t) {
            u.forEach((e, n) => {
              n.contains(t.target) || e.call(n, t);
            });
          }
          (g.globalClick = w), document.addEventListener("click", w);
          const v = { global: 0, currentModal: null, stack: [] },
            f = new WeakSet(),
            b = (t, e) => {
              f.add(t), t.addEventListener("enter", e);
            },
            _ = new WeakSet(),
            x = (t) => {
              if ("Enter" === t.key) {
                if (!f.has(t.target)) return;
                return (
                  t.stopImmediatePropagation(),
                  void t.target.dispatchEvent(new CustomEvent("enter"))
                );
              }
              if ("Escape" === t.key) {
                const e = v.stack.pop();
                if (e) return t.stopImmediatePropagation(), void e.hide();
                _.has(t.target) &&
                  (t.stopImmediatePropagation(),
                  t.target.dispatchEvent(new CustomEvent("esc")));
              }
            },
            y = {};
          function $(t, e = "default") {
            return (
              !y[e] &&
              ((y[e] = !0),
              window.requestAnimationFrame((n) => {
                (y[e] = !1), t(n);
              }),
              !0)
            );
          }
          function S(t, e) {
            let n = 0;
            return function (...s) {
              const i = new Date().getTime();
              i - n >= e && (t.apply(this, s), (n = i));
            };
          }
          function E(t) {
            throw new Error(t);
          }
          function C(t) {
            t || E("should implement in child classes");
          }
          async function k(t) {
            await new Promise((e) => {
              setTimeout(e, t);
            });
          }
          async function T() {
            await k(10);
          }
          const L = (t) => t[Math.floor(Math.random() * t.length)];
          function P(t) {
            return `<p>${t}</p>`;
          }
          function M(t) {
            return t.toLowerCase();
          }
          function O(...t) {}
          const N = (t, e) => {
            const n = t.findIndex((t) => t === e);
            -1 !== n && t.splice(n, 1);
          };
          function V(t, e) {
            let n = !1;
            return (
              Object.keys(t).forEach((t) => {
                t in e || (n = !0);
              }),
              n
            );
          }
          function H(t, e) {
            const n = { ...e };
            return (
              Object.keys(t).forEach((s) => {
                s in e && (n[s] = t[s]);
              }),
              n
            );
          }
          const q = (t) => [i.S2.cancel, i.S2.success].includes(t),
            B = (t) => {
              const e = t.thread.find((t) => t.role === i.HB.user);
              return e || E(i.t$), e.content;
            },
            I = (t, e) => {
              e ? api.showError(t, 3e3) : api.showMessage(t);
            };
          function A(t) {
            if ("string" != typeof t) throw new TypeError("should be string");
            return t
              .match(/[^\n]+\n?/g)
              .reduce(
                (t, e, n, s) => (
                  /```/.test(e)
                    ? ((t.inCode = !t.inCode),
                      t.codeStr &&
                        (t.strs.push(`<pre><code>${t.codeStr}</code></pre>`),
                        (t.codeStr = "")))
                    : t.inCode
                      ? (t.codeStr += e)
                      : t.strs.push(`<p>${e.replace("\n", "")}</p>`),
                  n === s.length - 1 &&
                    t.inCode &&
                    t.strs.push(`<pre><code>${t.codeStr}</code></pre>`),
                  t
                ),
                { inCode: !1, strs: [], codeStr: "" },
              )
              .strs.join("");
          }
          function R(t, e) {
            let n = t.map((t) => `role: ${t.role}\n${t.content}`).join("\n");
            return (
              e &&
                (n = t
                  .map((t) => `<p>role: ${t.role}</p>${A(t.content)}`)
                  .join("")),
              n || E("no content"),
              n
            );
          }
          const D = (t) => t.slice(0, 50),
            { replace: W } = "",
            F = /[&<>'"]/g,
            z = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              "'": "&#39;",
              '"': "&quot;",
            },
            Z = (t) => z[t],
            j = (t) => W.call(t, F, Z),
            Y = new s.Z();
          function U(t) {
            const e = (t) => Math.floor(t),
              n = e((new Date() - new Date(t)) / 1e3);
            let s = e(n / 31536e3);
            return s >= 1
              ? `${s} year${1 === s ? "" : "s"} ago`
              : ((s = e(n / 2592e3)),
                s >= 1
                  ? `${s} month${1 === s ? "" : "s"} ago`
                  : ((s = e(n / 86400)),
                    s >= 1
                      ? `${s} day${1 === s ? "" : "s"} ago`
                      : ((s = e(n / 3600)),
                        s >= 1
                          ? `${s} hour${1 === s ? "" : "s"} ago`
                          : ((s = e(n / 60)),
                            s >= 1
                              ? `${s} minute${1 === s ? "" : "s"} ago`
                              : 0 === n
                                ? "just now"
                                : `${e(n)} second${1 === e(n) ? "" : "s"} ago`))));
          }
          function X(t, e, n, s, i, a) {
            let r, o;
            switch (a) {
              case "top":
              default:
                (r = e.left + e.width / 2 - n / 2), (o = e.top - s - i);
                break;
              case "left":
                (r = e.left - n - i), (o = e.top + e.height / 2 - s / 2);
                break;
              case "right":
                (r = e.left + e.width + i), (o = e.top + e.height / 2 - s / 2);
                break;
              case "bottom":
                (r = e.left + e.width / 2 - n / 2), (o = e.top + e.height + i);
            }
            (r -= t.left), (o -= t.top);
            const c = t.width,
              h = t.height;
            if (r < 0) {
              if (((r = 0), "left" === a)) return X(t, e, n, s, i, "right");
            } else if (r + n > c && ((r = c - n), "right" === a))
              return X(t, e, n, s, i, "left");
            return (
              o < 0 ? (o = 0) : o + s > h && (o = h - s),
              { left: r, top: o, placement: a }
            );
          }
          const G = (t) => {
            navigator.clipboard.writeText(t);
          };
        },
      },
      a = {};
    function r(t) {
      var e = a[t];
      if (void 0 !== e) return e.exports;
      var n = (a[t] = { id: t, exports: {} });
      return i[t](n, n.exports, r), n.exports;
    }
    (t =
      "function" == typeof Symbol
        ? Symbol("webpack queues")
        : "__webpack_queues__"),
      (e =
        "function" == typeof Symbol
          ? Symbol("webpack exports")
          : "__webpack_exports__"),
      (n =
        "function" == typeof Symbol
          ? Symbol("webpack error")
          : "__webpack_error__"),
      (s = (t) => {
        t &&
          !t.d &&
          ((t.d = 1),
          t.forEach((t) => t.r--),
          t.forEach((t) => (t.r-- ? t.r++ : t())));
      }),
      (r.a = (i, a, r) => {
        var o;
        r && ((o = []).d = 1);
        var c,
          h,
          d,
          p = new Set(),
          l = i.exports,
          m = new Promise((t, e) => {
            (d = e), (h = t);
          });
        (m[e] = l),
          (m[t] = (t) => (o && t(o), p.forEach(t), m.catch((t) => {}))),
          (i.exports = m),
          a(
            (i) => {
              var a;
              c = ((i) =>
                i.map((i) => {
                  if (null !== i && "object" == typeof i) {
                    if (i[t]) return i;
                    if (i.then) {
                      var a = [];
                      (a.d = 0),
                        i.then(
                          (t) => {
                            (r[e] = t), s(a);
                          },
                          (t) => {
                            (r[n] = t), s(a);
                          },
                        );
                      var r = {};
                      return (r[t] = (t) => t(a)), r;
                    }
                  }
                  var o = {};
                  return (o[t] = (t) => {}), (o[e] = i), o;
                }))(i);
              var r = () =>
                  c.map((t) => {
                    if (t[n]) throw t[n];
                    return t[e];
                  }),
                h = new Promise((e) => {
                  (a = () => e(r)).r = 0;
                  var n = (t) =>
                    t !== o &&
                    !p.has(t) &&
                    (p.add(t), t && !t.d && (a.r++, t.push(a)));
                  c.map((e) => e[t](n));
                });
              return a.r ? h : r();
            },
            (t) => (t ? d((m[n] = t)) : h(l), s(o)),
          ),
          o && (o.d = 0);
      }),
      (r.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, { a: e }), e;
      }),
      (r.d = (t, e) => {
        for (var n in e)
          r.o(e, n) &&
            !r.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      }),
      (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (r.nc = void 0),
      r(225);
  })();
