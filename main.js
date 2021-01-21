let exclude_ids;
document.addEventListener('DOMContentLoaded', function () {
    class webConnector extends XMLHttpRequest{
        constructor(){
            super();
            this.addEventListener('load', function () {
                exclude_ids = this.responseText.split("\n"); // 配列として読み込む
            }, false); //通信成功時処理
        }
    }
    let xhr = new webConnector();
    let url = "exclude_ids.txt";
    xhr.open("GET", url);
    xhr.url = url;
    xhr.send(null);
}, false);

$('.cardgame-deck').on('click', function(){
    const cid_min = 4007;  // cidの（おそらく）最小値。青眼の白龍のcid。
    const cid_max = 16041;  // 2021/1/21時点でのcidの（おそらく）最大値。福悲喜のcid。
    
    let cid_random;
    do{
        // ランダムなcidを生成。
        cid_random =  Math.floor( Math.random() * ((cid_max + 1) - cid_min)) + cid_min;
    }while(exclude_ids.some( num => num === cid_random));   // 情報がないcidだった場合は再算出。
    
    const base_url = "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid="
    let window_A = window.open(base_url + cid_random);
});
