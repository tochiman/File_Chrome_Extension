var back_col;
var all_fontsize_val;
var cd_fontsize_val;

//ローカルストレージから背景色の色を読み取る
chrome.storage.local.get("background_color", function (result) {
    var res = result.background_color;
    $('#select-color').text(res);
    $('.form-select').val(String(res));
});
//全体のフォントサイズのpx値を読み取る
chrome.storage.local.get("all_fontsize_val", function (result) {
    var res = result.all_fontsize_val;
    var shape_res = /\d{2}/g;
    shape_res = String(res).match(shape_res);
    $('.all-font').val(shape_res);
    $('.all-font-p').html(res);
});
//カレントディレクトリのフォントサイズのpx値を読み取る
chrome.storage.local.get("cd_fontsize_val", function (result) {
    var res = result.cd_fontsize_val;
    var shape_res = /\d{2}/g;
    shape_res = String(res).match(shape_res);
    $('.slider').val(shape_res);
    $('.cd_size').html(res);
});

//設定
$("#color-list").on("change", function () {
    back_col = $(this).val();
    $('#select-color').text(back_col);
})
$('.all-font').on('input', function () {
    all_fontsize_val = $(this).val() + "px";
    $('.all-font-p').html(all_fontsize_val);
});
$('.slider').on('input', function () {
    cd_fontsize_val = $(this).val() + "px";
    $('.cd_size').html(cd_fontsize_val);
});


$('#save-btn').on('click', function () {
    alert('変更を保存しました');

    //ローカルストレージに背景色の色を保存
    chrome.storage.local.set({ "background_color": back_col }, function () { });
    //全体のフォントサイズのpx値を保存
    chrome.storage.local.set({ "all_fontsize_val": all_fontsize_val }, function () { });
    //カレントディレクトリのフォントサイズのpx値を保存
    chrome.storage.local.set({ "cd_fontsize_val": cd_fontsize_val }, function () { });
});

$('#reset-btn').on('click', function () {
    alert('設定をリセットしました');

    //以下初期化処理
    chrome.storage.local.set({ "background_color": '#ffffff' }, function () { });
    chrome.storage.local.set({ "all_fontsize_val": "16px" }, function () { });
    chrome.storage.local.set({ "cd_fontsize_val": "32px" }, function () { });
});

