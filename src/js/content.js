//ローカルストレージから背景色の色を読み取る
chrome.storage.local.get("background_color", function (result) {
    var res = result.background_color;
    $('html').css('background-color', res);
});
//カレントディレクトリのフォントサイズのpx値を読み取る
chrome.storage.local.get("all_fontsize_val", function (result) {
    var res = result.all_fontsize_val;
    $('#tbody').css('font-size', res);
});
//カレントディレクトリのフォントサイズのpx値を読み取る
chrome.storage.local.get("cd_fontsize_val", function (result) {
    var res = result.cd_fontsize_val;
    $('#header').css('font-size', res);
});

$(function () {
    //ヘッダー名部分のHTMLデータ取得
    var get_header = $('#header').html();
    var str_get_header = String(get_header);

    //正規表現を用いてパス名だけ取得してHTMLに返す
    var pattern = /のインデックス/g;
    var rep = "";
    var res = str_get_header.replace(pattern, rep);
    $('#header').html(res);
});

$(function () {
    //親ディレクトリのaタグ取得
    var get_a_tag = $('#parentDirLinkBox').html();
    var str_get_a_tag = String(get_a_tag);

    //親ディレクトリ->return
    var rep = "return";
    $('#parentDirText').html(rep);

    //ボタン要素を追加
    var get_span_txt = $('#parentDirLink').html();
    var add_button = "<button>" + get_span_txt + "</button>";

    //aタグにボタン要素を組み込む
    var pattern_a_before = /^  <a id=.*>$/m;
    var a_tag_before = str_get_a_tag.match(pattern_a_before);
    var a_tag_after = "</a>";
    var mix_tag = a_tag_before + add_button + a_tag_after;

    $('#parentDirLinkBox').html(mix_tag);
});




