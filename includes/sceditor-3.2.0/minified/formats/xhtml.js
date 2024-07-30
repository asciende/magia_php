/* SCEditor v3.2.0 | (C) 2017, Sam Clarke | sceditor.com/license */
!function(E){"use strict"; var S = E.dom, t = E.utils, T = S.css, i = S.attr, C = S.is, A = S.removeAttr, n = S.convertElement, r = t.extend, a = t.each, N = t.isEmptyObject, l = E.command.get, e = {bold:{txtExec:["<strong>", "</strong>"]}, italic:{txtExec:["<em>", "</em>"]}, underline:{txtExec:['<span style="text-decoration:underline;">', "</span>"]}, strike:{txtExec:['<span style="text-decoration:line-through;">', "</span>"]}, subscript:{txtExec:["<sub>", "</sub>"]}, superscript:{txtExec:["<sup>", "</sup>"]}, left:{txtExec:['<div style="text-align:left;">', "</div>"]}, center:{txtExec:['<div style="text-align:center;">', "</div>"]}, right:{txtExec:['<div style="text-align:right;">', "</div>"]}, justify:{txtExec:['<div style="text-align:justify;">', "</div>"]}, font:{txtExec:function(t){var e = this; l("font")._dropDown(e, t, function(t){e.insertText('<span style="font-family:' + t + ';">', "</span>")})}}, size:{txtExec:function(t){var e = this; l("size")._dropDown(e, t, function(t){e.insertText('<span style="font-size:' + t + ';">', "</span>")})}}, color:{txtExec:function(t){var e = this; l("color")._dropDown(e, t, function(t){e.insertText('<span style="color:' + t + ';">', "</span>")})}}, bulletlist:{txtExec:["<ul><li>", "</li></ul>"]}, orderedlist:{txtExec:["<ol><li>", "</li></ol>"]}, table:{txtExec:["<table><tr><td>", "</td></tr></table>"]}, horizontalrule:{txtExec:["<hr />"]}, code:{txtExec:["<code>", "</code>"]}, image:{txtExec:function(t, e){var o = this; l("image")._dropDown(o, t, e, function(t, e, n){var i = ""; e && (i += ' width="' + e + '"'), n && (i += ' height="' + n + '"'), o.insertText("<img" + i + ' src="' + t + '" />')})}}, email:{txtExec:function(t, n){var i = this; l("email")._dropDown(i, t, function(t, e){i.insertText('<a href="mailto:' + t + '">' + (e || n || t) + "</a>")})}}, link:{txtExec:function(t, n){var i = this; l("link")._dropDown(i, t, function(t, e){i.insertText('<a href="' + t + '">' + (e || n || t) + "</a>")})}}, quote:{txtExec:["<blockquote>", "</blockquote>"]}, youtube:{txtExec:function(t){var n = this; l("youtube")._dropDown(n, t, function(t, e){n.insertText('<iframe width="560" height="315" src="https://www.youtube.com/embed/{id}?wmode=opaque&start=' + e + '" data-youtube-id="' + t + '" frameborder="0" allowfullscreen></iframe>')})}}, rtl:{txtExec:['<div stlye="direction:rtl;">', "</div>"]}, ltr:{txtExec:['<div stlye="direction:ltr;">', "</div>"]}}; function z(){var o = this, n = {}, b = {}; function t(t, e, n){var g, i, o, r, a, l, s, c, u, d, f, v = n.createElement("div"); if (v.innerHTML = e, T(v, "visibility", "hidden"), n.body.appendChild(v), S.traverse(v, function(t){var e = t.nodeName.toLowerCase(); w("*", t), w(e, t)}, !0), g = v, S.traverse(g, function(t){var e, n = t.nodeName.toLowerCase(), i = t.parentNode, o = t.nodeType, r = !S.isInline(t), a = t.previousSibling, l = t.nextSibling, s = "iframe" !== n && function t(e, n){var i = e.childNodes, o = e.nodeName.toLowerCase(), r = e.nodeValue, a = i.length, l = z.allowedEmptyTags || []; if (n && "br" === o)return!0; if (C(e, ".sceditor-ignore"))return!0; if ( - 1 < l.indexOf(o) || "td" === o || !S.canHaveChildren(e))return!1; if (r && /\S|\u00A0/.test(r))return!1; for (; a--; )if (!t(i[a], n && !e.previousSibling && !e.nextSibling))return!1; if (e.getBoundingClientRect && (e.className || e.hasAttributes("style")))return!(l = e.getBoundingClientRect()).width || !l.height; return!0}(t, i === g && (!a && !l) && "br" !== n), c = t.ownerDocument, u = z.allowedTags, d = t.firstChild, f = z.disallowedTags; if (3 !== o && (4 === o?n = "!cdata":"!" !== n && 8 !== o || (n = "!comment"), 1 === o && C(t, ".sceditor-nlf") && (!d || 1 === t.childNodes.length && /br/i.test(d.nodeName)?s = !0:(t.classList.remove("sceditor-nlf"), t.className || A(t, "class"))), s?e = !0:u && u.length?e = u.indexOf(n) < 0:f && f.length && (e = - 1 < f.indexOf(n)), e)){if (!s){for (r && a && S.isInline(a) && i.insertBefore(c.createTextNode(" "), t); t.firstChild; )i.insertBefore(t.firstChild, l); r && l && S.isInline(l) && i.insertBefore(c.createTextNode(" "), l)}i.removeChild(t)}}, !0), e = v, u = (c = z.allowedAttribs) && !N(c), f = (d = z.disallowedAttribs) && !N(d), b = {}, S.traverse(e, function(t){if (t.attributes && (i = t.nodeName.toLowerCase(), a = t.attributes.length))for (b[i] || (b[i] = u?y(c["*"], c[i]):y(d["*"], d[i])); a--; )o = t.attributes[a], r = o.name, l = b[i][r], s = !1, u?s = null !== l && (!Array.isArray(l) || l.indexOf(o.value) < 0):f && (s = null === l || Array.isArray(l) && - 1 < l.indexOf(o.value)), s && t.removeAttribute(r)}), !t){var h = v; S.removeWhiteSpace(h); for (var x, p, m = h.firstChild; m; )p = m.nextSibling, S.isInline(m) && !C(m, ".sceditor-ignore")?(x || (x = h.ownerDocument.createElement("p"), m.parentNode.insertBefore(x, m)), x.appendChild(m)):x = null, m = p}return e = (new E.XHTMLSerializer).serialize(v, !0), n.body.removeChild(v), e}function w(t, i){n[t] && n[t].forEach(function(n){n.tags[t]?a(n.tags[t], function(t, e){!i.getAttributeNode || !(t = i.getAttributeNode(t)) || e && e.indexOf(t.value) < 0 || n.conv.call(o, i)}):n.conv && n.conv.call(o, i)})}function y(t, e){var n = {}; return t && (n = r({}, n, t)), e && a(e, function(t, e){Array.isArray(e)?n[t] = (n[t] || []).concat(e):n[t] || (n[t] = null)}), n}o.init = function(){N(z.converters || {}) || a(z.converters, function(t, e){a(e.tags, function(t){n[t] || (n[t] = []), n[t].push(e)})}), this.commands = r(!0, {}, e, this.commands)}, o.toSource = t.bind(null, !1), o.fragmentToSource = t.bind(null, !0)}E.XHTMLSerializer = function(){var i = {indentStr:"\t"}, o = [], v = 0; function h(t){var e = {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", " ":"&nbsp;"}; return t?t.replace(/[&<>"\xa0]/g, function(t){return e[t] || t}):""}function x(t, e){switch (t.nodeType){case 1:var n, i, o, r = t, a = e, l = r.nodeName.toLowerCase(), s = "iframe" === l, c = r.attributes.length, u = r.firstChild, d = a || /pre(?:\-wrap)?$/i.test(T(r, "whiteSpace")), f = !r.firstChild && !S.canHaveChildren(r) && !s; if (!C(r, ".sceditor-ignore")){for (p("<" + l, !a && m(r)); c--; )i = r.attributes[c], o = i.value, p(" " + i.name.toLowerCase() + '="' + h(o) + '"', !1); for (p(f?" />":">", !1), s || (n = u); n; )v++, x(n, d), n = n.nextSibling, v--; f || p("</" + l + ">", !d && !s && m(r) && u && m(u))}break; case 3:a = t, f = e, l = a.nodeValue; (l = f?l:l.replace(/[^\S\u00A0]+/g, " ")) && p(h(l), !f && m(a)); break; case 4:p("<![CDATA[" + h(t.nodeValue) + "]]>"); break; case 8:p("\x3c!-- " + h(t.nodeValue) + " --\x3e"); break; case 9:case 11:for (var g = t.firstChild; g; )x(g), g = g.nextSibling}}function p(t, e){var n = v; if (!1 !== e)for (o.length && o.push("\n"); n--; )o.push(i.indentStr); o.push(t)}function m(t){var e = t.previousSibling; return 1 !== t.nodeType && e?!S.isInline(e):!e && !S.isInline(t.parentNode) || !S.isInline(t)}this.serialize = function(t, e){if (o = [], e)for (t = t.firstChild; t; )x(t), t = t.nextSibling; else x(t); return o.join("")}}, z.converters = [{tags:{"*":{width:null}}, conv:function(t){T(t, "width", i(t, "width")), A(t, "width")}}, {tags:{"*":{height:null}}, conv:function(t){T(t, "height", i(t, "height")), A(t, "height")}}, {tags:{li:{value:null}}, conv:function(t){A(t, "value")}}, {tags:{"*":{text:null}}, conv:function(t){T(t, "color", i(t, "text")), A(t, "text")}}, {tags:{"*":{color:null}}, conv:function(t){T(t, "color", i(t, "color")), A(t, "color")}}, {tags:{"*":{face:null}}, conv:function(t){T(t, "fontFamily", i(t, "face")), A(t, "face")}}, {tags:{"*":{align:null}}, conv:function(t){T(t, "textAlign", i(t, "align")), A(t, "align")}}, {tags:{"*":{border:null}}, conv:function(t){T(t, "borderWidth", i(t, "border")), A(t, "border")}}, {tags:{applet:{name:null}, img:{name:null}, layer:{name:null}, map:{name:null}, object:{name:null}, param:{name:null}}, conv:function(t){i(t, "id") || i(t, "id", i(t, "name")), A(t, "name")}}, {tags:{"*":{vspace:null}}, conv:function(t){T(t, "marginTop", + i(t, "vspace")), T(t, "marginBottom", + i(t, "vspace")), A(t, "vspace")}}, {tags:{"*":{hspace:null}}, conv:function(t){T(t, "marginLeft", + i(t, "hspace")), T(t, "marginRight", + i(t, "hspace")), A(t, "hspace")}}, {tags:{hr:{noshade:null}}, conv:function(t){T(t, "borderStyle", "solid"), A(t, "noshade")}}, {tags:{"*":{nowrap:null}}, conv:function(t){T(t, "whiteSpace", "nowrap"), A(t, "nowrap")}}, {tags:{big:null}, conv:function(t){T(n(t, "span"), "fontSize", "larger")}}, {tags:{small:null}, conv:function(t){T(n(t, "span"), "fontSize", "smaller")}}, {tags:{b:null}, conv:function(t){n(t, "strong")}}, {tags:{u:null}, conv:function(t){T(n(t, "span"), "textDecoration", "underline")}}, {tags:{s:null, strike:null}, conv:function(t){T(n(t, "span"), "textDecoration", "line-through")}}, {tags:{dir:null}, conv:function(t){n(t, "ul")}}, {tags:{center:null}, conv:function(t){T(n(t, "div"), "textAlign", "center")}}, {tags:{font:{size:null}}, conv:function(t){T(t, "fontSize", T(t, "fontSize")), A(t, "size")}}, {tags:{font:null}, conv:function(t){n(t, "span")}}, {tags:{"*":{type:["_moz"]}}, conv:function(t){A(t, "type")}}, {tags:{"*":{_moz_dirty:null}}, conv:function(t){A(t, "_moz_dirty")}}, {tags:{"*":{_moz_editor_bogus_node:null}}, conv:function(t){t.parentNode.removeChild(t)}}, {tags:{"*":{"data-sce-target":null}}, conv:function(t){var e = i(t, "rel") || "", n = i(t, "data-sce-target"); "_blank" === n && C(t, "a") && (/(^|\s)noopener(\s|$)/.test(e) || i(t, "rel", "noopener" + (e?" " + e:"")), i(t, "target", n)), A(t, "data-sce-target")}}, {tags:{code:null}, conv:function(t){for (var e = t.getElementsByTagName("div"); t = e[0]; )t.style.display = "block", n(t, "span")}}], z.allowedAttribs = {}, z.disallowedAttribs = {}, z.allowedTags = [], z.disallowedTags = [], z.allowedEmptyTags = [], E.formats.xhtml = z}(sceditor);