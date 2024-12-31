// QA
const QA_info = [
  {
    title: "どのように摂取すればよいですか？",
    content:
      "粉末のため、そのまま摂取していただいても、150ccの水に溶かしてお飲みいただいても大丈夫です。",
  },
  {
    title: "1日のうちでいつ摂るのが効果的ですか？",
    content:
      "いつお摂りいただいても問題ありません。<br>運動時などに摂取していただくことをおすすめしています。",
  },
  {
    title: "どのくらいの期間摂取するとよいですか？",
    content:
      "個人差がありますが、健康を実感していただくため、継続して摂取することをおすすめしております。",
  },
  {
    title: "女性が摂取しても大丈夫ですか?",
    content:
      "大丈夫です。女性もマカを摂取することで、毎日の健康を支えることが可能です。",
  },
  {
    title: "どのような場所で保管すればよいですか?",
    content:
      "直射日光の当たる場所を避け、なるべく涼しい場所で保管してください。また、開封後は賞味期限に関わらず早めにお摂りください。",
  },
  {
    title: "粉の中に固まりがあります。<br>湿気によるものでしょうか？",
    content:
      "湿気によるものではありません。粉状のマカは固まりやすい特性があるため、軽く砕いてお飲みいただければ大丈夫です。",
  },
];

$(QA_info).each(function (i, info) {
  $("#QA").append(`
    <div class="QA_box">
      <h3 class="QA_title">
        <span class="icon">Q</span>
        <span>${info.title}</span>
        <span class="toggle">＋</span>
      </h3>
      <p class="QA_content">${info.content}</p>
    </div>  
  `);
});

$(".QA_content").hide();
$(".QA_title").each(function (i, title) {
  $(title).on("click", function () {
    $(this).next().slideToggle();
    let toggle = $(this).find("span").eq(-1);
    if (toggle.text() == "＋") {
      toggle.text("－");
    } else {
      toggle.text("＋");
    }
  });
});
