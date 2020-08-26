var app = new Vue({
  el: "#vue-app",
  data: {
    message: "hello vue!!",
    title: "犬の門蓋（いんのじょうふた）メガネ岩",
    description: "鹿児島県の「屋久島」よりも南に位置し、沖縄よりも北にある奄美群島のひとつ「徳之島」の観光名所をフリー素材で紹介します。",
    image_url: "/img/tokunoshima0I9A3969_TP_V.jpg"
  }
});

var listApp = new Vue({
  el: "#vue-list-app",
  data: {
    items: [
      {message: "", title:"", description:"", image_url:"/img/outline-error_outline-24px.svg"},
      {message: "", title:"", description:"", image_url:"/img/outline-error_outline-24px.svg"},
      {message: "", title:"", description:"", image_url:"/img/outline-error_outline-24px.svg"}
    ]
  }
});

console.log("init vue app");
