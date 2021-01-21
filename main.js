$('.cardgame-deck').on('click', function(){
    const cid_min = 4007;  // cidの（おそらく）最小値。青眼の白龍のcid。
    const cid_max = 16041;  // 2021/1/21時点でのcidの（おそらく）最大値。福悲喜のcid。
    const cid_random =  Math.floor( Math.random() * ((cid_max + 1) - cid_min)) + cid_min;
    const base_url = "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid="
    let window_A = window.open(base_url + cid_random);
});
