/* BÀI 1:  TÍNH THUẾ THU NHẬP CÁ NHÂN*/

function calculateTax(){
    // BƯỚC 1: Tạo biến và get giá trị khi user nhập tổng thu nhập và số người phụ thuộc
    var inputIncome = +document.getElementById('income').value
    var inputDependent = +document.getElementById('dependent').value
    // BƯỚC 2: tạo và gắn công thức cho biến Thu nhập chịu thuế
    taxableIncome = inputIncome - 4 - inputDependent * 1.6
    var tax = 0
    // BƯỚC 3: if else các trường hợp khi tính toán
    if(taxableIncome <= 60){
        tax += taxableIncome * 0.05
    }
    else if(taxableIncome <= 120){
        tax += taxableIncome * 0.1
    }
    else if(taxableIncome <= 210){
        tax += taxableIncome * 0.15
    }    
    else if(taxableIncome <= 384){
        tax += taxableIncome * 0.2
    }
    else if(taxableIncome <= 624){
        tax += taxableIncome * 0.25
    }
    else if(taxableIncome <= 960){
        tax += taxableIncome * 0.3
    }
    else {
        tax += taxableIncome * 0.35
    }
    // Cho hiện div kết quả tính
    document.getElementById('displayResult').style.display = "block"
    document.getElementById('displayResult').innerHTML = `Thuế thu nhập cá nhân phải trả là ${tax} triệu`
}

/* BÀI 2:  TÍNH TIỀN CÁP*/
// BƯỚC 1: Làm function khi chọn loại khách hàng
function swapCusType(selectCusType){
    var selectCusType = document.getElementById('cusType').value
    var showConnect = document.getElementById('showConnect')
    var showResult = document.getElementById('showResult')
    // Khi chọn loại khách hàng là Nhà dân (ND), cho ẩn div showConnect*/
    if (selectCusType === "ND"){    
            showConnect.style.display = 'none'
    // Đồng thời, cho ẩn div showResult
            showResult.style.display = 'none'
            return "ND"
    // Khi chọn loại khách hàng là Doanh nghiệp (DN), cho hiện div showConnect
        }else {
            showConnect.style.display= 'block'
    // Đồng thời, cho ẩn div showResult
            showResult.style.display = 'none'
            return "DN"
    }   
}
// BƯỚC 2: Làm function sau khi xác định được loại khách hàng, và gắn vào công thức tương ứng
function calculateMoney(selectCusType, cusType){
// Tạo biến hứng kết quả return của hàm swapCusType(selectCusType)
    var cusType = swapCusType(selectCusType)
    var inputCusId = document.getElementById('cusId').value
    var inputChannel = +document.getElementById('inputChannel').value
// if else các trường hợp khi tính toán
        switch (cusType){
        case "ND":
            moneyAmount = 4.5 + 20.5 + 7.5 * inputChannel
// Cho hiện lại div showResult + gắn công thức tính
            showResult.style.display= 'block'
            showResult.innerHTML = `Số tiền cáp của Nhà Dân ${inputCusId} là: $${moneyAmount}`
            break;
        case "DN":
            var inputConnect = +document.getElementById('inputConnect').value
            var moneyAmount
           if (inputConnect <= 10){
                moneyAmount = 4.5 + 20.5 + 75 + 50 * inputChannel
            }else{
                moneyAmount = 15 + 75 + 5 * (inputConnect - 10) + 50 * inputChannel
            }
// Cho hiện lại div showResult + gắn công thức tính
            showResult.style.display= 'block'
            showResult.innerHTML = `Số tiền cáp của Doanh Nghiệp ${inputCusId} là: $${moneyAmount}`
        
    }}

    
