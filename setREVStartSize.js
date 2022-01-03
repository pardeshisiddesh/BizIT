function setREVStartSize(a) {
  try {
    var b,
      c = document.getElementById(a.c).parentNode.offsetWidth;
    if (
      ((c = 0 === c || isNaN(c) ? window.innerWidth : c),
      (a.tabw = void 0 === a.tabw ? 0 : parseInt(a.tabw)),
      (a.thumbw = void 0 === a.thumbw ? 0 : parseInt(a.thumbw)),
      (a.tabh = void 0 === a.tabh ? 0 : parseInt(a.tabh)),
      (a.thumbh = void 0 === a.thumbh ? 0 : parseInt(a.thumbh)),
      (a.tabhide = void 0 === a.tabhide ? 0 : parseInt(a.tabhide)),
      (a.thumbhide = void 0 === a.thumbhide ? 0 : parseInt(a.thumbhide)),
      (a.mh = void 0 === a.mh || "" == a.mh ? 0 : a.mh),
      "fullscreen" === a.layout || "fullscreen" === a.l)
    )
      b = Math.max(a.mh, window.innerHeight);
    else {
      for (var d in ((a.gw = Array.isArray(a.gw) ? a.gw : [a.gw]), a.rl))
        (void 0 === a.gw[d] || 0 === a.gw[d]) && (a.gw[d] = a.gw[d - 1]);
      for (var d in ((a.gh =
        void 0 === a.el ||
        "" === a.el ||
        (Array.isArray(a.el) && 0 == a.el.length)
          ? a.gh
          : a.el),
      (a.gh = Array.isArray(a.gh) ? a.gh : [a.gh]),
      a.rl))
        (void 0 === a.gh[d] || 0 === a.gh[d]) && (a.gh[d] = a.gh[d - 1]);
      var e,
        f = Array(a.rl.length),
        g = 0;
      for (var d in ((a.tabw = a.tabhide >= c ? 0 : a.tabw),
      (a.thumbw = a.thumbhide >= c ? 0 : a.thumbw),
      (a.tabh = a.tabhide >= c ? 0 : a.tabh),
      (a.thumbh = a.thumbhide >= c ? 0 : a.thumbh),
      a.rl))
        f[d] = a.rl[d] < window.innerWidth ? 0 : a.rl[d];
      for (var d in ((e = f[0]), f))
        e > f[d] && 0 < f[d] && ((e = f[d]), (g = d));
      var h =
        c > a.gw[g] + a.tabw + a.thumbw
          ? 1
          : (c - (a.tabw + a.thumbw)) / a.gw[g];
      b = a.gh[g] * h + (a.tabh + a.thumbh);
    }
    void 0 === window.rs_init_css &&
      (window.rs_init_css = document.head.appendChild(
        document.createElement("style")
      )),
      (document.getElementById(a.c).height = b),
      (window.rs_init_css.innerHTML +=
        "#" + a.c + "_wrapper { height: " + b + "px }");
  } catch (a) {
    console.log("Failure at Presize of Slider:" + a);
  }
}
