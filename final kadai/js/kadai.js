
// 例題
function kesu(){
  $('#messi').hide();
}
// 選択式クイズ１
function quiz1 (answer){
    var message = "";
    if(answer==4){
        message = "正解！さすがだね";
    }
    else{
        message="不正解！！さてはにわかファンか？";
    }
    alert(message)
}
// 選択型クイズ（答え表示）
function quiz2 (answer){
    var message2 = "";
    var player=["パトリック","宇佐美貴史","矢島慎也","小野瀬康介"]
    if(answer==2){
        message2 = "やるじゃん！";
    }
    else{
          message2="にわかファン?笑";
    }
    $('#answershow').text("あなたの回答は"+player[answer]+'です。正解は矢島慎也です。'+message2);
}

function quiz3 (answer){
    var message3 = "";
    if(answer==2){
        message3 = "正解！さすがだね";
    }
    else{
        message3="不正解！！さてはにわかファンか？";
    }
    alert(message3)
}

// 記述式クイズ
function check() {
    var answer = $('input[name="answer"]').val();
    if(answer == '2012'||answer=="２０１２"||answer=="２０１２年"||answer=="2012年") {
        alert('正解です')
    }
    else{
        alert("不正解")
    }
    console.log(answer);
}

// データ回収
function form_action() {
    var sex = $('[name="sex"]:checked').val();
    console.log(sex);
    var telphone =$('input[name="telphone"]').val();
    console.log(telphone);
}

// グラフ作成
var data = {
    labels: [
      '得点力',
      '守備力',
      'ファンの熱狂さ',
      'タイトル数',
      'スタジアムの規模',
      '選手層',
      '勝負強さ'
    ],
    datasets: [{
      label: 'GAMBA OSAKA',
      data: [40, 88, 100, 80, 75, 90, 90],
      fill: true,
      backgroundColor: 'rgba(0, 128, 255,0.3)',
      borderColor: "rgb(20,50,235)",
      pointBackgroundColor: 'rgb(20, 50, 235)',
      pointBorderColor: 'rgb(0,0,0)',
      pointHoverBackgroundColor: 'rgb(0,0,0)',
      pointHoverBorderColor: 'rgb(20, 50, 235)',
      pointHoverRadius: 8,
      lnetension: 900,
    }, {
      label: 'CEREZO OSAKA',
      data: [55, 80, 10, 20, 66, 40, 20],
      fill: true,
      backgroundColor:'rgba(255, 182, 193,0.3)',
      borderColor: 'rgb(255,0,255)',
      pointBackgroundColor: 'rgb(199, 21, 133)',
      pointBorderColor: 'rgb(255,0, 255)',
      pointHoverBackgroundColor: 'rgb(255, 0, 255)',
      pointHoverBorderColor: 'rgb(199, 21, 133);',
      pointHoverRadius: 8,
    }]
  };

  var config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

  var linechart = new Chart(
    // document.getElementById("linechart"),
    $("#compare"),
    config,
);




