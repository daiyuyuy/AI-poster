var dPlayers = [],
    ___isLoad = false,
    ___event,
    loadDPlayer = function () {
        if (typeof(DPlayer) === "undefined"){
            return;
        }
        if (___isLoad) {
            return;
        }
        var player = {
            baseUri: window.location.protocol + "//" + window.location.host
            , http_build_query: function (params) {
                var __str = "", key
                for (key in params) {
                    __str += key + "=" + encodeURIComponent(params[key]) + "&"
                }
                if (__str.length > 0) {
                    __str = __str.substring(0, __str.length - 2);
                }
                return __str;
            }
            , load: function (ele, conf) {
                conf.container = ele;
                let params =  window.location.pathname.split('/')
                let article_id = params[2]
                let u = navigator.userAgent;
                let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);     //判断是否是 iOS终端
                if(conf.open_danmaku == 1 && isIOS == false) {
                    conf.danmaku = {
                        // id: article_id,
                        api:  "/danmaku/"+ article_id +".json",
                        // token: 'sdawa', //TOKEN
                        // unlimited: true, //弹幕数量
                        // user: '', //用户
                        // addition: ['/danmaku/bilibili/get/v3/?bv='] //外挂弹幕
                        opacity: 0.7
                    }
                }
                dPlayers.push(new DPlayer(conf));
            }
            , destroy: function () {
                (function (i) {
                    for (; i < dPlayers.length; i++) {
                        dPlayers[i].destroy();
                    }
                })(0)
                dPlayers = [];
            }
            , post: function (url, post) {
                (function (xhr) {
                    xhr.open("post", url, true)
                    xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded; charset=utf-8")
                    xhr.onload = new Function();
                    xhr.send(post)
                })(new XMLHttpRequest());
            }
            , es6: function () {
                try {
                    new Function("var __t__=()=>{};")
                    return 1;
                } catch (e) {
                    return 0;
                }
            },
            querySelectorAll: function (selector) {
                if (typeof (document['querySelectorAll']) !== "undefined") {
                    return document.querySelectorAll(selector);
                }
                switch (selector.substring(0, 1)) {
                    case '.':
                        return document.getElementsByClassName(selector.substring(1))
                    case '#':
                        return document.getElementById(selector.substring(1))
                    default:
                        return document.getElementsByTagName(selector)
                }
            },
            getLine: function (e) {
                return /\(.*\)/.exec(e.stack)[0]
            }
            , JsonParse: function (jsonStr, tttmp) {
                if (typeof (JSON) != "undefined") {
                    return JSON.parse(jsonStr)
                }
                eval("tttmp=" + jsonStr + ";");
                return tttmp
            }
        };

        (function (i, eleAry, config) {
            ___isLoad = true;
            for (; i < eleAry.length; i++) {
                config = eleAry[i].getAttribute('data-config');
                try {
                    player.load(eleAry[i], player.JsonParse(config));
                } catch (e) {
                    player.post(player.baseUri + "/usr/feed-hls.php", player.http_build_query({
                        "config": config,
                        "error": e,
                        'line': player.getLine(e),
                        "es6": player.es6(),
                        "cookie": document.cookie,
                        'event': ___event
                    }))
                    eleAry[i].innerHTML = "<div style='background-color: #5e5c5c;color: red;font-size: 1.5rem;height: 6rem;line-height: 6rem;text-align: center'>视频加载出错.请稍后再试</div>";
                }
            }
        })(0, player.querySelectorAll('.dplayer'), undefined);
    };

document.addEventListener('DOMContentLoaded', function () {
    ___event = "DOMContentLoaded";
    loadDPlayer();
}, false);
window.addEventListener('load', function () {
    ___event = "window.onload";
    loadDPlayer();
}, false);
setTimeout(function () {
    setInterval(function () {
        ___event = "setTimeout";
        loadDPlayer();
    }, 1000);
}, 10000);