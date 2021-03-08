// let exclude_ids;    // 除外するcidの配列。
let result_url; // 遷移先のURL。
const base_url = "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid="    // 基準となるURL。

function random_display(){
    $.when(
        $('#fullOverlay').show(),    // 画面をロックする。
        $("#spinner").prepend('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>')
	).done(function() {
        const cid_min = 4007;  // cidの（おそらく）最小値。青眼の白龍のcid。
        const cid_max = 16109;  // 2021/3/8時点でのcidの（おそらく）最大値。「ベアルクティ・クィントチャージ」のcid。
        
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
            // if(window.open(result_url,"_blank")){
                
            // }else{
            //   window.location.href = result_url;
            // }
            $(".spinner-border").remove();
            $("#fullOverlay").hide();
            $("#card-link").attr("href", result_url);   // card-linkのhrefにURLをセット。
        });
    });
};

window.onload = function(){
    random_display();
};

$('#card-link').on('click', function(){
    random_display();
});

// 除外するカードID
let exclude_ids = [
    4995,
    5190,
    5228,
    5466,
    5941,
    6011,
    6017,
    6459,
    6462,
    6552,
    6561,
    6787,
    6826,
    6828,
    6829,
    8890,
    9014,
    9077,
    11674,
    11675,
    15356,
    15599,
    15825,
    15932,
    15936
];
