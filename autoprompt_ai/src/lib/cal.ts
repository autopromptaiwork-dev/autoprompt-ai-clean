declare global {
  interface Window {
    Cal: any;
  }
}

export const initCalEmbed = () => {
  if (typeof window === "undefined") return;

  (function (C: any, A: string, L: string) {
    let p = function (a: any, ar: any) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          let script = d.createElement("script");
          script.src = A;
          d.head.appendChild(script);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, [L, namespace, ar[2]]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  window.Cal("init", "website-booking", { origin: "https://cal.com" });
  window.Cal.ns["website-booking"]("ui", {
    styles: { branding: { brandColor: "#00E5FF" } },
    hideEventTypeDetails: false,
    layout: "month_view",
    theme: "dark",
  });
};
