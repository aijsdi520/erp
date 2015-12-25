$(function () {
    /****** 教练统计{ ******/
    (function () {
        var search = $('#page_select');
        if (!search.length) {
            return;
        }
        var pstores = $('#pstores');
        $.ajax(URL.stores)
            .then(function (response) {
                if (response.status != 200) {
                    alert(response.message);
                    return;
                }
                var stores = response.data;
                var lis = pstores.find('li');
                var keys = {
                    A: 0, B: 0, C: 0, D: 0, E: 0, F: 0,
                    G: 1, H: 1, I: 1, J: 1, K: 1,
                    L: 2, M: 2, N: 2, O: 2, P: 2,
                    Q: 3, R: 3, S: 3, T: 3, U: 3,
                    V: 4, W: 4, X: 4, Y: 4, Z: 4
                };
                for (var i in stores) {
                    lis.eq(keys[pinyin.getCamelChars(stores[i].store_name.slice(0, 1))]).append('<div class="item" data-store_id="' + stores[i].store_id + '">' + stores[i].store_name + '</div>');
                }
            });
        $(document).on('click', '#pstores .item', function () {
            var item = $(this);
            search.siblings('input[name=idstore]').val(item.data('store_id'));
            search.html(item.html());
            pstores.hide();
        });
        $(document).click(function (e) {
            var target = $(e.target);
            if (!target.is(search) && !target.closest(pstores).length) {
                pstores.hide();
            }
        });
        search.click(function () {
            var dom = $(this);
            pstores.css({left: dom.offset().left - 1, top: dom.offset().top + dom.outerHeight()});
            pstores.toggle();
        });
    })();
    /****** 教练统计} ******/

    /****** 教练消课数{ ******/
    (function () {
        var search = $('#deletclass_select');
        if (!search.length) {
            return;
        }
        var pstores = $('#pstores');
        $.ajax(URL.stores)
            .then(function (response) {
                if (response.status != 200) {
                    alert(response.message);
                    return;
                }
                var stores = response.data;
                var lis = pstores.find('li');
                var keys = {
                    A: 0, B: 0, C: 0, D: 0, E: 0, F: 0,
                    G: 1, H: 1, I: 1, J: 1, K: 1,
                    L: 2, M: 2, N: 2, O: 2, P: 2,
                    Q: 3, R: 3, S: 3, T: 3, U: 3,
                    V: 4, W: 4, X: 4, Y: 4, Z: 4
                };
                for (var i in stores) {
                    lis.eq(keys[pinyin.getCamelChars(stores[i].store_name.slice(0, 1))]).append('<div class="item" data-store_id="' + stores[i].store_id + '">' + stores[i].store_name + '</div>');
                }
            });
        $(document).on('click', '#pstores .item', function () {
            var item = $(this);
            search.siblings('input[name=idstore]').val(item.data('store_id'));
            search.html(item.html());
            pstores.hide();
        });
        $(document).click(function (e) {
            var target = $(e.target);
            if (!target.is(search) && !target.closest(pstores).length) {
                pstores.hide();
            }
        });
        search.click(function () {
            var dom = $(this);
            pstores.css({left: dom.offset().left, top: dom.offset().top + dom.outerHeight() - 1});
            pstores.toggle();
        });
    })();
    /****** 教练消课数} ******/

    /****** 教练售课数{ ******/
    (function () {
        var search = $('#saleofclass_select');
        if (!search.length) {
            return;
        }
        var pstores = $('#pstores');
        $.ajax(URL.stores)
            .then(function (response) {
                if (response.status != 200) {
                    alert(response.message);
                    return;
                }
                var stores = response.data;
                var lis = pstores.find('li');
                var keys = {
                    A: 0, B: 0, C: 0, D: 0, E: 0, F: 0,
                    G: 1, H: 1, I: 1, J: 1, K: 1,
                    L: 2, M: 2, N: 2, O: 2, P: 2,
                    Q: 3, R: 3, S: 3, T: 3, U: 3,
                    V: 4, W: 4, X: 4, Y: 4, Z: 4
                };
                for (var i in stores) {
                    lis.eq(keys[pinyin.getCamelChars(stores[i].store_name.slice(0, 1))]).append('<div class="item" data-store_id="' + stores[i].store_id + '">' + stores[i].store_name + '</div>');
                }
            });
        $(document).on('click', '#pstores .item', function () {
            var item = $(this);
            search.siblings('input[name=idstore]').val(item.data('store_id'));
            search.html(item.html());
            pstores.hide();
        });
        $(document).click(function (e) {
            var target = $(e.target);
            if (!target.is(search) && !target.closest(pstores).length) {
                pstores.hide();
            }
        });
        search.click(function () {
            var dom = $(this);
            pstores.css({left: dom.offset().left, top: dom.offset().top + dom.outerHeight() - 1});
            pstores.toggle();
        });
    })();
    /****** 教练售课数} ******/

    /****** 添加教练{ ******/
    (function () {
        var search = $('#addinst_select');
        if (!search.length) {
            return;
        }
        var pstores = $('#pstores');
        $.ajax(URL.stores)
            .then(function (response) {
                if (response.status != 200) {
                    alert(response.message);
                    return;
                }
                var stores = response.data;
                var lis = pstores.find('li');
                var keys = {
                    A: 0, B: 0, C: 0, D: 0, E: 0, F: 0,
                    G: 1, H: 1, I: 1, J: 1, K: 1,
                    L: 2, M: 2, N: 2, O: 2, P: 2,
                    Q: 3, R: 3, S: 3, T: 3, U: 3,
                    V: 4, W: 4, X: 4, Y: 4, Z: 4
                };
                for (var i in stores) {
                    lis.eq(keys[pinyin.getCamelChars(stores[i].store_name.slice(0, 1))]).append('<div class="item" data-store_id="' + stores[i].store_id + '">' + stores[i].store_name + '</div>');
                }
                pstores.find('.item:eq(0)').click();
            });
        $(document).on('click', '#pstores .item', function () {
            var item = $(this);
            search.siblings('input[name=idstore]').val(item.data('store_id'));
            search.html(item.html());
            pstores.hide();
        });
        $(document).click(function (e) {
            var target = $(e.target);
            if (!target.is(search) && !target.closest(pstores).length) {
                pstores.hide();
            }
        });
        search.click(function () {
            var dom = $(this);
            pstores.css({left: dom.offset().left, top: dom.offset().top + dom.outerHeight() - 1});
            pstores.toggle();
        });
    })();
    /****** 添加教练} ******/

    /****** 编辑教练{ ******/
    (function () {
        var search = $('#editinst_select');
        if (!search.length) {
            return;
        }
        var pstores = $('#pstores');
        $.ajax(URL.stores)
            .then(function (response) {
                if (response.status != 200) {
                    alert(response.message);
                    return;
                }
                var stores = response.data;
                var lis = pstores.find('li');
                var keys = {
                    A: 0, B: 0, C: 0, D: 0, E: 0, F: 0,
                    G: 1, H: 1, I: 1, J: 1, K: 1,
                    L: 2, M: 2, N: 2, O: 2, P: 2,
                    Q: 3, R: 3, S: 3, T: 3, U: 3,
                    V: 4, W: 4, X: 4, Y: 4, Z: 4
                };
                for (var i in stores) {
                    lis.eq(keys[pinyin.getCamelChars(stores[i].store_name.slice(0, 1))]).append('<div class="item" data-store_id="' + stores[i].store_id + '">' + stores[i].store_name + '</div>');
                }
            });
        $(document).on('click', '#pstores .item', function () {
            var item = $(this);
            search.siblings('input[name=idstore]').val(item.data('store_id'));
            search.html(item.html());
            pstores.hide();
        });
        $(document).click(function (e) {
            var target = $(e.target);
            if (!target.is(search) && !target.closest(pstores).length) {
                pstores.hide();
            }
        });
        search.click(function () {
            var dom = $(this);
            pstores.css({left: dom.offset().left, top: dom.offset().top + dom.outerHeight() - 1});
            pstores.toggle();
        });
    })();
    /****** 编辑教练} ******/
});