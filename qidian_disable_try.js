var resp = JSON.parse($response.body);
delete resp.Data.TryReadInfo;
delete resp.Data.BookCircleInfo;
delete resp.Data.RecommendList;
delete resp.Data.RelatedBookList;
delete resp.Data.AlsoReadList;
console.log(resp);
var body = JSON.stringify(resp);
$done({body});

/**********************************************************
[Script]
http-response https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v3\/bookLastPage\/get\?bookId=\d* script-path=https://raw.githubusercontent.com/LarkinZero/Surge/master/qidian_disable_try.js,requires-body=true
[MITM]
hostname = *.qidian.com
**********************************************************/