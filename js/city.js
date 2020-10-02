// Получаем json
$.ajax({
  url: 'http://api.ipstack.com/check?access_key=2dafc6b88a6d891cc05873955400654c&format=1',
  success: getDataIp
});

// Получаем ip и прочее
function getDataIp(data) {
  gettingJSON(data.city);
  // Просмотреть все что плучаем
  // console.log(data)
}

