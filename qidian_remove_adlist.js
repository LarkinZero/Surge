var resp = JSON.parse($response.body);
delete resp.Data.iosnewlastpage;
console.log(resp);
var body = JSON.stringify(resp);
$done({body});


/**********************************************************
[Script]
http-response https:\/\/magev6\.if\.qidian\.com\/argus\/api\/v1\/adv\/getadvlistbatch\?bookId=\d*&positions=.* script-path=https://raw.githubusercontent.com/LarkinZero/Surge/master/qidian_remove_adlist.js,requires-body=true
[MITM]
hostname = *.qidian.com
**********************************************************/