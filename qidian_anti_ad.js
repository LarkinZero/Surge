var resp = {};
resp.Message = "";
resp.Result = 0;
body = JSON.stringify(resp);
console.log(body);
$done({body});