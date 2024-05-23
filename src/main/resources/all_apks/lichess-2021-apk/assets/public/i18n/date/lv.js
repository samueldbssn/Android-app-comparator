function e(e){return function(t,a){if(1===t)return a.addSuffix?e.one[0].replace("{{time}}",e.one[2]):e.one[0].replace("{{time}}",e.one[1]);var n=t%10==1&&t%100!=11;return a.addSuffix?e.other[0].replace("{{time}}",n?e.other[3]:e.other[4]).replace("{{count}}",t):e.other[0].replace("{{time}}",n?e.other[1]:e.other[2]).replace("{{count}}",t)}}var t={lessThanXSeconds:e({one:["mazāk par {{time}}","sekundi","sekundi"],other:["mazāk nekā {{count}} {{time}}","sekunde","sekundes","sekundes","sekundēm"]}),xSeconds:e({one:["1 {{time}}","sekunde","sekundes"],other:["{{count}} {{time}}","sekunde","sekundes","sekundes","sekundēm"]}),halfAMinute:function(e,t){return t.addSuffix?"pusminūtes":"pusminūte"},lessThanXMinutes:e({one:["mazāk par {{time}}","minūti","minūti"],other:["mazāk nekā {{count}} {{time}}","minūte","minūtes","minūtes","minūtēm"]}),xMinutes:e({one:["1 {{time}}","minūte","minūtes"],other:["{{count}} {{time}}","minūte","minūtes","minūtes","minūtēm"]}),aboutXHours:e({one:["apmēram 1 {{time}}","stunda","stundas"],other:["apmēram {{count}} {{time}}","stunda","stundas","stundas","stundām"]}),xHours:e({one:["1 {{time}}","stunda","stundas"],other:["{{count}} {{time}}","stunda","stundas","stundas","stundām"]}),xDays:e({one:["1 {{time}}","diena","dienas"],other:["{{count}} {{time}}","diena","dienas","dienas","dienām"]}),aboutXWeeks:e({one:["apmēram 1 {{time}}","nedēļa","nedēļas"],other:["apmēram {{count}} {{time}}","nedēļa","nedēļu","nedēļas","nedēļām"]}),xWeeks:e({one:["1 {{time}}","nedēļa","nedēļas"],other:["{{count}} {{time}}","nedēļa","nedēļu","nedēļas","nedēļām"]}),aboutXMonths:e({one:["apmēram 1 {{time}}","mēnesis","mēneša"],other:["apmēram {{count}} {{time}}","mēnesis","mēneši","mēneša","mēnešiem"]}),xMonths:e({one:["1 {{time}}","mēnesis","mēneša"],other:["{{count}} {{time}}","mēnesis","mēneši","mēneša","mēnešiem"]}),aboutXYears:e({one:["apmēram 1 {{time}}","gads","gada"],other:["apmēram {{count}} {{time}}","gads","gadi","gada","gadiem"]}),xYears:e({one:["1 {{time}}","gads","gada"],other:["{{count}} {{time}}","gads","gadi","gada","gadiem"]}),overXYears:e({one:["ilgāk par 1 {{time}}","gadu","gadu"],other:["vairāk nekā {{count}} {{time}}","gads","gadi","gada","gadiem"]}),almostXYears:e({one:["gandrīz 1 {{time}}","gads","gada"],other:["vairāk nekā {{count}} {{time}}","gads","gadi","gada","gadiem"]})};function a(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var n={date:a({formats:{full:"y. 'gada' M. MMMM., EEEE",long:"y. 'gada' M. MMMM",medium:"dd.MM.y.",short:"dd.MM.y."},defaultWidth:"full"}),time:a({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'plkst.' {{time}}",long:"{{date}} 'plkst.' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function s(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(e,t){r(1,arguments);var a=t||{},n=a.locale,d=n&&n.options&&n.options.weekStartsOn,o=null==d?0:i(d),u=null==a.weekStartsOn?o:i(a.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=s(e),l=m.getUTCDay(),p=(l<u?7:0)+l-u;return m.setUTCDate(m.getUTCDate()-p),m.setUTCHours(0,0,0,0),m}function o(e,t,a){r(2,arguments);var n=d(e,a),i=d(t,a);return n.getTime()===i.getTime()}var u=["svētdienā","pirmdienā","otrdienā","trešdienā","ceturtdienā","piektdienā","sestdienā"],m={lastWeek:function(e,t,a){return o(e,t,a)?"eeee 'plkst.' p":"'Pagājušā "+u[e.getUTCDay()]+" plkst.' p"},yesterday:"'Vakar plkst.' p",today:"'Šodien plkst.' p",tomorrow:"'Rīt plkst.' p",nextWeek:function(e,t,a){return o(e,t,a)?"eeee 'plkst.' p":"'Nākamajā "+u[e.getUTCDay()]+" plkst.' p"},other:"P"};function l(e){return function(t,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,s=i.width?String(i.width):r;n=e.formattingValues[s]||e.formattingValues[r]}else{var d=e.defaultWidth,o=i.width?String(i.width):e.defaultWidth;n=e.values[o]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(t):t]}}function p(e){return function(t,a){var n=String(t),i=a||{},r=i.width,s=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],d=n.match(s);if(!d)return null;var o,u=d[0],m=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return o="[object Array]"===Object.prototype.toString.call(m)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(m,(function(e){return e.test(u)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(m,(function(e){return e.test(u)})),o=e.valueCallback?e.valueCallback(o):o,{value:o=i.valueCallback?i.valueCallback(o):o,rest:n.slice(u.length)}}}var c,f={code:"lv",formatDistance:function(e,a,n){n=n||{};var i=t[e](a,n);return n.addSuffix?n.comparison>0?"pēc "+i:"pirms "+i:i},formatLong:n,formatRelative:function(e,t,a,n){var i=m[e];return"function"==typeof i?i(t,a,n):i},localize:{ordinalNumber:function(e,t){return e+"."},era:l({values:{narrow:["p.m.ē","m.ē"],abbreviated:["p. m. ē.","m. ē."],wide:["pirms mūsu ēras","mūsu ērā"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmais ceturksnis","otrais ceturksnis","trešais ceturksnis","ceturtais ceturksnis"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmajā ceturksnī","otrajā ceturksnī","trešajā ceturksnī","ceturtajā ceturksnī"]},defaultFormattingWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","marts","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec."],wide:["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris"]},defaultWidth:"wide",formattingValues:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","martā","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec."],wide:["janvārī","februārī","martā","aprīlī","maijā","jūnijā","jūlijā","augustā","septembrī","oktobrī","novembrī","decembrī"]},defaultFormattingWidth:"wide"}),day:l({values:{narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["svētd.","pirmd.","otrd.","trešd.","ceturtd.","piektd.","sestd."],wide:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"]},defaultWidth:"wide",formattingValues:{narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["svētd.","pirmd.","otrd.","trešd.","ceturtd.","piektd.","sestd."],wide:["svētdienā","pirmdienā","otrdienā","trešdienā","ceturtdienā","piektdienā","sestdienā"]},defaultFormattingWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rīts",afternoon:"diena",evening:"vakars",night:"nakts"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rīts",afternoon:"pēcpusd.",evening:"vakars",night:"nakts"},wide:{am:"am",pm:"pm",midnight:"pusnakts",noon:"pusdienlaiks",morning:"rīts",afternoon:"pēcpusdiena",evening:"vakars",night:"nakts"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rītā",afternoon:"dienā",evening:"vakarā",night:"naktī"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rītā",afternoon:"pēcpusd.",evening:"vakarā",night:"naktī"},wide:{am:"am",pm:"pm",midnight:"pusnaktī",noon:"pusdienlaikā",morning:"rītā",afternoon:"pēcpusdienā",evening:"vakarā",night:"naktī"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(c={matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var a=String(e),n=t||{},i=a.match(c.matchPattern);if(!i)return null;var r=i[0],s=a.match(c.parsePattern);if(!s)return null;var d=c.valueCallback?c.valueCallback(s[0]):s[0];return{value:d=n.valueCallback?n.valueCallback(d):d,rest:a.slice(r.length)}}),era:p({matchPatterns:{narrow:/^(p\.m\.ē|m\.ē)/i,abbreviated:/^(p\. m\. ē\.|m\. ē\.)/i,wide:/^(pirms mūsu ēras|mūsu ērā)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^m/i]},defaultParseWidth:"any"}),quarter:p({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](\. cet\.)/i,wide:/^(pirma(is|jā)|otra(is|jā)|treša(is|jā)|ceturta(is|jā)) ceturksn(is|ī)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1/i,/^2/i,/^3/i,/^4/i],abbreviated:[/^1/i,/^2/i,/^3/i,/^4/i],wide:[/^p/i,/^o/i,/^t/i,/^c/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:p({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv\.|febr\.|marts|apr\.|maijs|jūn\.|jūl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,wide:/^(janvār(is|ī)|februār(is|ī)|mart[sā]|aprīl(is|ī)|maij[sā]|jūnij[sā]|jūlij[sā]|august[sā]|septembr(is|ī)|oktobr(is|ī)|novembr(is|ī)|decembr(is|ī))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jūn/i,/^jūl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:p({matchPatterns:{narrow:/^[spotc]/i,short:/^(sv|pi|o|t|c|pk|s)/i,abbreviated:/^(svētd\.|pirmd\.|otrd.\|trešd\.|ceturtd\.|piektd\.|sestd\.)/i,wide:/^(svētdien(a|ā)|pirmdien(a|ā)|otrdien(a|ā)|trešdien(a|ā)|ceturtdien(a|ā)|piektdien(a|ā)|sestdien(a|ā))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^p/i,/^o/i,/^t/i,/^c/i,/^p/i,/^s/i],any:[/^sv/i,/^pi/i,/^o/i,/^t/i,/^c/i,/^p/i,/^se/i]},defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:{narrow:/^(am|pm|pusn\.|pusd\.|rīt(s|ā)|dien(a|ā)|vakar(s|ā)|nakt(s|ī))/,abbreviated:/^(am|pm|pusn\.|pusd\.|rīt(s|ā)|pēcpusd\.|vakar(s|ā)|nakt(s|ī))/,wide:/^(am|pm|pusnakt(s|ī)|pusdienlaik(s|ā)|rīt(s|ā)|pēcpusdien(a|ā)|vakar(s|ā)|nakt(s|ī))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^pusn/i,noon:/^pusd/i,morning:/^r/i,afternoon:/^(d|pēc)/i,evening:/^v/i,night:/^n/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};export default f;