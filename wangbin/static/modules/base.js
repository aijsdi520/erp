$(function () {
    /****** 注释{ ******/
    ;
    /****** 注释} ******/
});
var URL = {
    search: {
        type: 'post',
//        url: '../ajax/search.json'
        url: '/client/search_coach'
    },
    history: {
        type: 'post',
//        url: '../ajax/history.json'
        url: '/client/update_card'
    },
    stores: {
        type: 'post',
//        url: '../ajax/stores.json'
        url: '/client/get_store'
    },
    huanmendian: {
        type: 'post',
//        url: '../ajax/huanmendian.json'
        url: '/client/fix_store'
    }
};