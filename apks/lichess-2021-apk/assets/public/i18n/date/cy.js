var a={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 funud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}};function e(a){return function(e){var n=e||{},t=n.width?String(n.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}}var n={date:e({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:e({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:e({formats:{full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},t={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"};function r(a){return function(e,n){var t,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,d=r.width?String(r.width):i;t=a.formattingValues[d]||a.formattingValues[i]}else{var o=a.defaultWidth,h=r.width?String(r.width):a.defaultWidth;t=a.values[h]||a.values[o]}return t[a.argumentCallback?a.argumentCallback(e):e]}}function i(a){return function(e,n){var t=String(e),r=n||{},i=r.width,d=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],o=t.match(d);if(!o)return null;var h,u=o[0],l=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth];return h="[object Array]"===Object.prototype.toString.call(l)?function(a,e){for(var n=0;n<a.length;n++)if(e(a[n]))return n}(l,(function(a){return a.test(u)})):function(a,e){for(var n in a)if(a.hasOwnProperty(n)&&e(a[n]))return n}(l,(function(a){return a.test(u)})),h=a.valueCallback?a.valueCallback(h):h,{value:h=r.valueCallback?r.valueCallback(h):h,rest:t.slice(u.length)}}}var d,o={code:"cy",formatDistance:function(e,n,t){var r;return t=t||{},r="string"==typeof a[e]?a[e]:1===n?a[e].one:2===n&&a[e].two?a[e].two:a[e].other.replace("{{count}}",n),t.addSuffix?t.comparison>0?"mewn "+r:r+" yn ôl":r},formatLong:n,formatRelative:function(a,e,n,r){return t[a]},localize:{ordinalNumber:function(a,e){var n=Number(a);if(n<20)switch(n){case 0:return n+"fed";case 1:return n+"af";case 2:return n+"ail";case 3:case 4:return n+"ydd";case 5:case 6:return n+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return n+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return n+"eg"}else if(n>=50&&n<=60||80===n||n>=100)return n+"fed";return n+"ain"},era:r({values:{narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},defaultWidth:"wide"}),quarter:r({values:{narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:r({values:{narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},defaultWidth:"wide"}),day:r({values:{narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},defaultWidth:"wide"}),dayPeriod:r({values:{narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},defaultWidth:"wide",formattingValues:{narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}},function(a,e){var n=String(a),t=e||{},r=n.match(d.matchPattern);if(!r)return null;var i=r[0],o=n.match(d.parsePattern);if(!o)return null;var h=d.valueCallback?d.valueCallback(o[0]):o[0];return{value:h=t.valueCallback?t.valueCallback(h):h,rest:n.slice(i.length)}}),era:i({matchPatterns:{narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},defaultParseWidth:"any"}),quarter:i({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:i({matchPatterns:{narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},defaultParseWidth:"any"}),day:i({matchPatterns:{narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:{narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};export default o;