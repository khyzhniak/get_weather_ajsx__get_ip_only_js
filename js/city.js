// Получаем json
const Api='';
$.ajax({
  url: `http://api.ipstack.com/check?access_key=${API}&format=1`,
  success: getDataIp
});

// Получаем ip и прочее
function getDataIp(data) {
  gettingJSON(data.city);
  // Просмотреть все что плучаем
  // console.log(data)
}

