// BÀI 1: TÍNH TIỀN ĐIỆN
function calculateKw(){
    /*B1: DOM tới input để lấy giá trị */
    var price = 0;
    var inputKw = +document.getElementById("kw").value;
    /*B2: If else check điều kiện tính tiền điện */
    if (inputKw <= 50) {
        price += inputKw * 500;
      } else if (inputKw <= 100) {
        price += 50 * 500 + (inputKw - 50) * 650;
      } else if (inputKw <= 200) {
        price += 50 * 500 + 50 * 650 + (inputKw - 100) * 850;
      } else if (inputKw <= 350) {
        price += 50 * 500 + 50 * 650 + 100 * 850 + (inputKw - 200) * 1100;
      } else {
        price += 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (inputKw - 350) * 1300;
      }
    /*B3: Hiển thị lên giá tiền điện */
      document.getElementById("pay").style.display = "block";
      document.getElementById("amount").innerHTML = price.toLocaleString()
    }

// BÀI 2: TÍNH TỔNG ĐIỂM TỐT NGHIỆP VÀ XÉT ĐẬU RỚT
function calculateScore(){
      /*B1: DOM tới input/select để lấy giá trị */
    var inputStandardScore = +document.getElementById("standardScore").value;
    var inputMScore = +document.getElementById("mScore").value;
    var inputEScore = +document.getElementById("eScore").value;
    var inputLScore = +document.getElementById("lScore").value;

    var selectArea = document.getElementById("area").value;
    var selectObject = document.getElementById("object").value;
    
    var areaScore = getAreaScore(selectArea)
    var objectScore = getObjectScore(selectObject)
      /*B2: Dùng function trả về số điểm ưu tiên khu vực/đối tượng 
      khi người dùng chọn loại khu vực/đối tượng     
      Khi gặp từ khoá return lập tức kết thúc hàm và trả ra kết quả */
  function getAreaScore(selectArea){
    switch (selectArea){
    case 'A':
      return 2
    case 'B':
      return 1
    case 'C':
      return 0.5
    case 'X':
      return 0
  }}
  function getObjectScore(selectObject){
    switch (selectObject){
    case '1':
      return 2.5
    case '2':
      return 1.5
    case '3':
      return 1
    case '0':
      return 0
  }}
  var totalScore = inputMScore + inputEScore + inputLScore + areaScore + objectScore
        /*B3: If else check điều kiện điểm khi đậu/rót
        và cho hiển thị tổng số điểm + đậu/rớt */
  if (totalScore < inputStandardScore){
        document.getElementById("total").innerHTML = "Tổng số điểm đạt được là: " + totalScore + ". Bạn đã rớt kỳ thi tuyển này do không đạt điểm chuẩn."
    } else if (totalScore >= inputStandardScore){
      if (inputEScore === 0 || inputMScore === 0 || inputLScore === 0){
        document.getElementById("total").innerHTML = "Tổng số điểm đạt được là: " + totalScore + ". Bạn đã rớt kỳ thi tuyển này do bạn có một môn điểm 0."
      }  else {
      document.getElementById("total").innerHTML = "Tổng số điểm đạt được là: " + totalScore + ". Bạn đã đậu kỳ thi tuyển này."
    }
    }
}


