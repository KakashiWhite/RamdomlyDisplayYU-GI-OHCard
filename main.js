// let exclude_ids;    // 除外するcidの配列。
let result_url; // 遷移先のURL。
const base_url = "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid="    // 基準となるURL。

function random_display(){
    $.when(
        $('#fullOverlay').show(),    // 画面をロックする。
        $("#spinner").prepend('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>')
	).done(function() {
        const cid_min = 4007;  // cidの（おそらく）最小値。青眼の白龍のcid。
        const cid_max = 17482;  // 2022/5/6時点でのcidの（おそらく）最大値。「砂塵の大ハリケーン」のcid。
        
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
    15897,
    15898,
    15899,
    15900,
    15901,
    15902,
    15903,
    15904,
    15905,
    15906,
    15907,
    15908,
    15909,
    15910,
    15911,
    15912,
    15913,
    15914,
    15915,
    15916,
    15917,
    15918,
    15919,
    15920,
    15921,
    15922,
    15923,
    15924,
    15925,
    15926,
    15927,
    15928,
    15929,
    15930,
    15931,
    15932,
    15933,
    15934,
    15935,
    15936,
    15937,
    15938,
    15939,
    15940,
    15941,
    15942,
    15943,
    15944,
    15945,
    15946,
    15947,
    15948,
    15949,
    15950,
    15951,
    15952,
    15953,
    15954,
    15955,
    15956,
    15957,
    15958,
    15959,
    15960,
    15961
];
