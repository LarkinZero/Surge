var resp = JSON.parse($response.body);
// console.log(resp);
for (let index = 0; index < resp.replys.length; index++) {
    const element = resp.replys[index];
    if (element.title == "广告"){
        resp.replys.splice(index,1);
    }
}
// console.log(resp);
body = JSON.stringify(resp);
$done({body});

/**********************************************************
[Script]
http-response https:\/\/nmb\.fastmirror\.org\/Api\/thread.* requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/LarkinZero/Surge/master/nmb_no_ad.js,script-update-interval=0
[MITM]
hostname = nmb.fastmirror.org
**********************************************************/