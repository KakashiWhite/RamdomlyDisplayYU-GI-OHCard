let exclude_ids;    // 除外するcidの配列。
let result_url;
const base_url = "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid="    // 基準となるURL。

document.addEventListener('DOMContentLoaded', function () {
    class webConnector extends XMLHttpRequest{
        constructor(){
            super();
            this.addEventListener('load', function () {
                exclude_ids = this.responseText.split("\n"); // 配列として読み込む。
            }, false); //通信成功時処理。
        }
    }
    let xhr = new webConnector();
    let url = "exclude_ids.txt";
    xhr.open("GET", url);
    xhr.url = url;
    xhr.send(null);
}, false);

$('.cardgame-deck').on('click', function(){
    $.when(
        $('#fullOverlay').show(),    // 画面をロックする。
        $("#spinner").prepend('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>')
	).done(function() {
        const cid_min = 4007;  // cidの（おそらく）最小値。青眼の白龍のcid。
        const cid_max = 16041;  // 2021/1/21時点でのcidの（おそらく）最大値。福悲喜のcid。
        
        let cid_random;
        let counter=0;  // do-while文の実行回数。
        const counter_max=10; // do-while文の最大実行回数。膨大なループを防ぐ。
        do{
            cid_random =  Math.floor( Math.random() * ((cid_max + 1) - cid_min)) + cid_min; // ランダムなcidを生成。
            counter ++;
        }while(exclude_ids.some( num => num === cid_random) || counter < counter_max);   // 情報がないcidだった場合は再算出。
        
        result_url = base_url + cid_random;
        
        function sleep(ms, func) {
            setTimeout(func, ms);
        };

        let sleep_time = 2*1000;    // 待機時間
        sleep(sleep_time, function() {
            $(".spinner-border").remove();
            $('#fullOverlay').hide();
            let window_A = window.open(result_url);
        });
    });
});
