var resp = JSON.parse($response.body);
resp.data = ""
body = JSON.stringify(resp);
$done({body});