const rep_space = "";

$(function () {
    //ヘッダー名部分のHTMLデータ取得
    var get_header = $('#header').html();
    var str_get_header = String(get_header);

    //正規表現を用いてパス名だけ取得してHTMLに返す
    var pattern = /のインデックス/g;
    var res = str_get_header.replace(pattern, rep_space);
    $('#header').html(res);
});

$(function () {
    //親ディレクトリの部分のHTMLデータ取得
    var get_parent = $('#parentDirLinkBox').html();
    var str_get_parent = String(get_parent);

    //ボタン要素を追加
    var pattern = /\[親ディレクトリ\]/g;
    var rep = "return";
    var res = str_get_parent.replace(pattern, rep);
    var change_parent = "<button>" + res + "</button>";
    $('#parentDirLinkBox').html(change_parent);
});





