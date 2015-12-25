$(function () {
    /****** 统计{ ******/
    (function () {
        var search = $('#total_select');
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
            var store_id = item.data('store_id');
            var year = $('#total_year').html();
            var month = $('#total_month').html();
            go(store_id, year, month);
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
    $('#total_prev').click(function () {
        var store_id = $('#total_store').val();
        var year = $('#total_year').html();
        var month = $('#total_month').html();
        var date = new Date(year, month - 1);
        date.setMonth(date.getMonth() - 1);
        go(store_id, date.getFullYear(), date.getMonth() + 1);
    });
    $('#total_next').click(function () {
        var store_id = $('#total_store').val();
        var year = $('#total_year').html();
        var month = $('#total_month').html();
        var date = new Date(year, month - 1);
        date.setMonth(date.getMonth() + 1);
        go(store_id, date.getFullYear(), date.getMonth() + 1);
    });
    function go(store_id, year, month) {
        var url = location.href.replace(/^([^?]+)\??.*/g, '$1');
        url += '?store_id=' + store_id + '&year=' + year + '&month=' + month;
        location.href = url;
    };
    // 签到数
    $('.setting-table .icon-wrap').each(function () {
        var wrap = $(this);
        var alldays = wrap.data('alldays');
        var days = wrap.data('days');
        wrap.find('.icon').css({width: days / alldays * 100 + '%'});
    });
    /****** 统计} ******/

    /****** 会员管理{ ******/
    (function () {
        var search = $('#setting_select');
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
                // 转出门店
                var store_list = $('#pmendian .store_list');
                for (var i in stores) {
                    store_list.append('<option value="' + stores[i].store_id + '">' + stores[i].store_name + '</option>');
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
    // 表格提示
    $('.setting-table .tip').hover(
        function () {
            var tip = $(this);
            var text = tip.siblings('input').val();
            $('#tipbox').css({left: tip.offset().left - 10, top: tip.offset().top + 25}).html(text).show();
        },
        function () {
            $('#tipbox').hide();
        }
    );
    // 转出门店
    $('.huanmendian').click(function () {
        var tr = $(this).closest('tr');
        var pmendian = $('#pmendian');
        pmendian.find('.name').html(tr.find('.name').html());
        pmendian.find('.store_name').html(tr.find('td:eq(1)').html());
        $('#pmendian').data('callback', function (store_id, store_name) {
            var data = {
                user_id: tr.data('user_id'),
                store_id: store_id
            };
            $.ajax($.extend({data: data}, URL.huanmendian))
                .then(function (response) {
                    if (response.status != 200) {
                        alert(response.message);
                        return;
                    }
                    tr.find('td:eq(1)').html(store_name);
                });
        });
        $('#pmendian,#pmendian-bg').show();
    });
    $('#pmendian .btn-ok').click(function () {
        var pmendian = $('#pmendian');
        var option = pmendian.find('.store_list option:selected');
        pmendian.data('callback')(option.val(), option.text());
        pmendian.removeData('callback');
        $('#pmendian,#pmendian-bg').hide();
    });
    $('#pmendian-bg,#pmendian .btn-cancel').click(function () {
        $('#pmendian,#pmendian-bg').hide();
    });
    /****** 会员管理} ******/

    /****** 添加会员{ ******/
    (function () {
        var search = $('#add_select');
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
    /****** 添加会员} ******/

    /****** 修改会员{ ******/
    $('.title-icon').click(function () {
        var icon = $(this);
        var date = icon.closest('.setting-box').find('.text-date');
        if (icon.is('.empty')) {
            icon.removeClass('empty');
            date.prop('disabled', false);
        } else {
            icon.addClass('empty');
            date.prop('disabled', true);
        }
    });
    // 修改购课历史
    $('.yue .text-byte').int();
    $('.xiugai').click(function () {
        var li = $(this).closest('li');
        li.find('.text-date').prop('disabled', false);
        li.find('.update').addClass('focus');
        li.prev().find('.text-byte').prop('disabled', false);
    });
    $('.queding').click(function () {
        var li = $(this).closest('li');
        var data = {
            info_id: li.find('input[name=info_id]').val(),
            type: li.find('input[name=type]').val(),
            start_time: li.find('.text-date:eq(0)').val(),
            stop_time: li.find('.text-date:eq(1)').val(),
            num: li.prev().find('.text-byte').val()
        };
        $.ajax($.extend({data: data}, URL.history))
            .then(function (response) {
                if (response.status != 200) {
                    alert(response.message);
                    return;
                }
                $('.quxiao').click();
            });
    });
    $('.quxiao').click(function () {
        var li = $(this).closest('li');
        li.find('.text-date').prop('disabled', true);
        li.find('.update').removeClass('focus');
        li.prev().find('.text-byte').prop('disabled', true);
    });
    // 选择起始日期
    $('[data-action=dateboth]').each(function () {
        var date = $(this);
        var index = $('[data-action=dateboth]').index(date);
        date.prop('id', 'wdate' + index);
        date.click(function () {
            if (index % 2 == 0) {
                WdatePicker({dateFmt: 'yyyy-MM-dd', firstDayOfWeek: 1, maxDate: '#F{$dp.$D(\'wdate' + (index + 1) + '\')}'})
            } else {
                WdatePicker({dateFmt: 'yyyy-MM-dd', firstDayOfWeek: 1, minDate: '#F{$dp.$D(\'wdate' + (index - 1) + '\')}'})
            }
        });
    });
    /****** 修改会员} ******/

    /****** 买课{ ******/
        // 限制课程期整数输入
    $('.text-calc').int();
    (function () {
        $('#date1,#date3').val(new Date().format('yyyy-MM-dd'));
        // 按月初始1个月
        var one = new Date();
        one.setMonth(one.getMonth() + 1);
        $('#date2').val(one.format('yyyy-MM-dd'));
        // 按次初始3个月
        var three = new Date();
        three.setMonth(three.getMonth() + 3);
        $('#date4').val(three.format('yyyy-MM-dd'));
    })();
    // 按月课程期：改变数值重新计算日期
    $('#type1_count').blur(function () {
        var count = parseInt($(this).val());
        var date = new Date($('#date1').val().replace(/-/g, '/'));
        date.setMonth(date.getMonth() + count);
        $('#date2').val(date.format('yyyy-MM-dd'));
    });
    // 单选框
    $('#radio-kezhong1,#radio-kezhong2').click(function () {
        if ($('#radio-kezhong1').is(':checked')) {
            $('.type1').show();
            $('.type0').hide();
        } else {
            $('.type0').show();
            $('.type1').hide();
        }
    });
    $('.plus').click(function () {
        var input = $(this).closest('li').find('.text');
        var num = parseInt(input.val());
        num++;
        if (isNaN(num) || num > 999) {
            num = 999;
        }
        input.val(num);
        $('#type1_count').blur();
    });
    $('.minus').click(function () {
        var input = $(this).closest('li').find('.text');
        var num = parseInt(input.val());
        num--;
        if (isNaN(num) || num < 1) {
            num = 1;
        }
        input.val(num);
        $('#type1_count').blur();
    });
    $('#search-btn').click(function () {
        var $list = $('#search-list');
        var text = $('#search-text');
        var data = {
            store_id: text.closest('.container').find('input[name=store_id]').val(),
            keyword: text.val()
        };
        $.ajax($.extend({data: data}, URL.search))
            .then(function (response) {
                if (response.status != 200) {
                    alert(response.message);
                    return;
                }
                var list = response.data;
                $list.empty();
                for (var i in list) {
                    $list.append('<li data-coach_id="' + list[i].coach_id + '">' + list[i].coach_name + '</li>');
                }
                $list.show();
            });
    });
    $(document).on('click', '#search-list li', function () {
        var li = $(this);
        var text = $('#search-text');
        text.val(li.html());
        text.siblings('input[name=coach_id]').val(li.data('coach_id'));
        li.parent().hide();
    });
    /****** 买课} ******/
});

Date.prototype.format = function (fmt) {
    var date = this;
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

(function ($) {
    function Plugin() {
    }

    $.extend(Plugin.prototype, {
        _pluginName: 'int',
        _defaults: {
            min: 1,
            max: 999
        },
        _enableFn: function (target, options) {
            var $target = $(target), plugin = this;
            $target.data('_options', options);
            var defaults = $.extend({}, plugin._defaults, $target.data('_options'));
            $target.on('keydown', function (e) {
                var keyCode = e.keyCode;
                var val = $(this).val();
                if (48 <= keyCode && keyCode <= 57 || 96 <= keyCode && keyCode <= 105) {
                } else {
                    // 禁止除此之外的字符：delete、backspace、shift、←、→、home、end
                    switch (keyCode) {
                        case 46:
                        case 8:
                        case 16:
                        case 37:
                        case 39:
                        case 36:
                        case 35:
                            break;
                        default:
                            return false;
                    }
                }
            }).on('blur', function () {
                var num = parseInt($(this).val());
                if (isNaN(num) || num < defaults.min) {
                    num = defaults.min;
                } else if (num > defaults.max) {
                    num = defaults.max;
                }
                $(this).val(num);
            });
        },
        _disableFn: function (target) {
            var $target = $(target), plugin = this;
        }
    });

    var plugin = new Plugin();
    $.fn[plugin._pluginName] = function (options) {
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            if (typeof options == 'string') {
                var fn = plugin['_' + options + 'Fn'];
                if (!fn) {
                    throw '没有这个方法：' + options;
                }
                fn.apply(plugin, [this].concat(otherArgs));
            } else {
                plugin._enableFn(this, options || {});
            }
        });
    }
})(jQuery);