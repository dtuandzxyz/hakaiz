/***********************************************
> RevenueCat Unlocker for Locket Gold
> Tác giả & Bản quyền 100%: DinhTuan
> Support: Shadowrocket, Loon, Surge, Quantumult X
***********************************************/

(function () {
  const productId = "locket_1600_1y";
  const purchaseDate = "2024-01-01T00:00:00Z";
  const expiresDate = "2099-12-31T23:59:59Z";
  const nowIso = new Date().toISOString();
  const nowMs = Date.now();

  let obj = {};

  try {
    if (typeof $response !== "undefined" && $response && $response.body) {
      obj = JSON.parse($response.body);
    }
  } catch (e) {
    obj = {};
  }

  if (!obj || typeof obj !== "object") {
    obj = {};
  }

  obj.Attention = "Chúc mừng bạn! Bản quyền 100% thuộc về DinhTuan.";
  obj.request_date = obj.request_date || nowIso;
  obj.request_date_ms = obj.request_date_ms || nowMs;

  obj.subscriber = obj.subscriber || {};
  obj.subscriber.original_app_user_id = obj.subscriber.original_app_user_id || "$RCAnonymousID:locket_gold";
  obj.subscriber.original_application_version = obj.subscriber.original_application_version || "1.0";
  obj.subscriber.original_purchase_date = obj.subscriber.original_purchase_date || purchaseDate;
  obj.subscriber.management_url = obj.subscriber.management_url || "https://apps.apple.com/account/subscriptions";
  obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
  obj.subscriber.entitlements = obj.subscriber.entitlements || {};
  obj.subscriber.non_subscriptions = obj.subscriber.non_subscriptions || {};
  obj.subscriber.other_purchases = obj.subscriber.other_purchases || {};

  const subscriptionData = {
    auto_resume_date: null,
    billing_issues_detected_at: null,
    display_name: productId,
    expires_date: expiresDate,
    grace_period_expires_date: null,
    is_sandbox: false,
    management_url: "https://apps.apple.com/account/subscriptions",
    ownership_type: "PURCHASED",
    period_type: "normal",
    price: {
      amount: 399000.0,
      currency: "VND"
    },
    original_purchase_date: purchaseDate,
    purchase_date: purchaseDate,
    refunded_at: null,
    store: "app_store",
    store_transaction_id: "2000001108724193",
    unsubscribe_detected_at: null
  };

  const entitlementData = {
    expires_date: expiresDate,
    grace_period_expires_date: null,
    is_sandbox: false,
    original_purchase_date: purchaseDate,
    ownership_type: "PURCHASED",
    product_identifier: productId,
    purchase_date: purchaseDate,
    store: "app_store"
  };

  // Cấp toàn bộ subscription IDs phổ biến của Locket
  const productIds = [
    "locket_1600_1y",
    "locket_gold_yearly",
    "locket_gold_monthly",
    "com.locket.gold.annual",
    "com.locket.gold.monthly"
  ];
  for (let i = 0; i < productIds.length; i++) {
    obj.subscriber.subscriptions[productIds[i]] = Object.assign({}, subscriptionData, {
      display_name: productIds[i]
    });
  }

  // Cấp toàn bộ entitlement khả dĩ của Locket để tránh lệch biến qua các phiên bản
  const entitlementKeys = [
    "Gold",
    "gold",
    "locket_gold",
    "pro",
    "Pro",
    "premium",
    "Premium",
    "all_features"
  ];
  for (let i = 0; i < entitlementKeys.length; i++) {
    obj.subscriber.entitlements[entitlementKeys[i]] = entitlementData;
  }

  let respHeaders = (typeof $response !== "undefined" && $response && $response.headers) ? Object.assign({}, $response.headers) : {};
  delete respHeaders["Content-Encoding"];
  delete respHeaders["content-encoding"];
  delete respHeaders["Content-Length"];
  delete respHeaders["content-length"];
  delete respHeaders["Transfer-Encoding"];
  delete respHeaders["transfer-encoding"];
  delete respHeaders["x-revenuecat-etag"];
  delete respHeaders["X-RevenueCat-ETag"];
  delete respHeaders["etag"];
  delete respHeaders["ETag"];
  respHeaders["content-type"] = "application/json; charset=utf-8";

  // Tương thích tối đa cả Surge, Shadowrocket, Loon và Quantumult X
  const modifiedBody = JSON.stringify(obj);

  if (typeof $task !== "undefined") {
    // Quantumult X
    $done({ body: modifiedBody });
  } else {
    // Surge, Shadowrocket, Loon
    $done({
      status: 200,
      headers: respHeaders,
      body: modifiedBody
    });
  }
})();
