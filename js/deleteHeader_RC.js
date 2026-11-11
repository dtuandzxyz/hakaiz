/***********************************************
> deleteHeader - Bản quyền 100%: DinhTuan
> Support: Shadowrocket, Loon, Surge, Quantumult X
***********************************************/

(function () {
  const headersToStrip = [
    'x-revenuecat-etag',
    'if-none-match',
    'if-modified-since',
    'x-goog-if-none-match',
    'etag'
  ];

  if (typeof $request !== "undefined" && $request && $request.headers) {
    let modifiedHeaders = Object.assign({}, $request.headers);
    for (let key of Object.keys(modifiedHeaders)) {
      if (headersToStrip.includes(key.trim().toLowerCase())) {
        delete modifiedHeaders[key];
      }
    }
    $done({ headers: modifiedHeaders });
  } else {
    $done({});
  }
})();
