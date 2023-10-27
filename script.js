window.onload = function (){
    render()
}


//创建列车
class newTrain {
    constructor(id,from,to,timeStart,timeFinish,price) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.timeStart = timeStart;
        this.timeFinish = timeFinish;
        this.price = price
    }

}

let list = ["<input type='checkbox' id='check_box' onclick='checkall()'>",
            "列车号","出发地","目的地","发车时间","抵达时间","票价","操作"];
let times = 0;
let cityTimes = 0;
//初始化列车
let tra1 = new newTrain("A62", "北京", "天津", "09:07", "15:05",100);
let tra2 = new newTrain("B53", "上海", "北京", "09:15", "15:42",200);
let tra3 = new newTrain("D34", "天津", "上海", "09:31", "15:41",200);
let tra4 = new newTrain("C74", "南昌", "天津", "09:49", "15:32",500);
let tra5 = new newTrain("D85", "贵州", "株洲","15:50", "15:55",400);
let tra6 = new newTrain("D76", "天津", "贵州", "15:30", "15:45",100);
let tra7 = new newTrain("S67", "株洲", "天津", "10:33", "15:51",300);
let tra8 = new newTrain("G68", "上海", "贵州", "10:46", "15:32",400);
let tra9 = new newTrain("D79", "天津", "贵州", "15:34", "15:44",400);
let tra10 = new newTrain("S13", "株洲", "上海", "11:17", "15:14",300);
let tra11 = new newTrain("A14", "天津", "贵州", "11:31", "15:41",200);
let tra12 = new newTrain("C12", "贵州", "株洲", "15:47", "15:51",300);
let trains =[tra1, tra2, tra3, tra4, tra5, tra6, tra7, tra8, tra9, tra10, tra11, tra12];

//初始化城市
let cities = ['北京','天津','上海','南昌','株洲','贵州']
//初始化页脚数据            
let checkData = document.getElementsByClassName("checkinfo");
let page = 1;
let cityPage = 1;

//列车界面渲染
function render() {
    //列车时刻表界面
    let table = document.getElementById("form");
    let listData = document.createElement("tr");
    table.innerHTML = "";

    //设置宽度
    for (let i = 0; i<list.length; i++){
        let listStyle = document.createElement("td");
        if (i === 0){
            listStyle.style.width = "50px";
        } else if (i !== 7) {
            listStyle.style.width = "100px";
        }else {
            listStyle.style.width = "150px";
        }
        
        listStyle.innerHTML = list[i];
        listStyle.style.textAlign = "center";
        listData.appendChild(listStyle);
    }

    //设置样式
    listData.style.fontSize = "bold";
    listData.style.backgroundColor = "#e8e4ed";
    listData.style.height = "50px";
    table.appendChild(listData);
   

    //设置页脚
    let footer = document.querySelector(".foot");
    footer.innerHTML = `第${page}页，共${trains.length}条，（每页显示10条）`;
    
    //绘制数据
    for (let i = (page-1) * 10 ; i < trains.length && i<(page*10);i++){
        let checkData = document.createElement("tr");
        checkData.style.textAlign = "center";
        checkData.style.height = "45px";

        //设置颜色
        if (i % 2 == 0) {
            checkData.style.backgroundColor = "#ffffff";
        } else {
            checkData.style.backgroundColor = "#e8e4ed";
        }
        
        //写入数据
        for (let j = 0; j < 10; j++) {
              checkData.insertCell(j);
        }
        checkData.childNodes[0].innerHTML = "<input type='checkbox' class='checkboxes' name='boxsituation'/>";
        checkData.childNodes[1].innerHTML = trains[i].id;
        checkData.childNodes[2].innerHTML = trains[i].from;
        checkData.childNodes[3].innerHTML = trains[i].to;
        checkData.childNodes[4].innerHTML = trains[i].timeStart;
        checkData.childNodes[5].innerHTML = trains[i].timeFinish;
        checkData.childNodes[6].innerHTML = trains[i].price;
        checkData.childNodes[7].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;<a text-decoration:none href='javaScript:watch("+ i +")' style='text-decoration: none; color: red'>查看</a>" + "        " + "<a href='javaScript:change("+ i +")' style='text-decoration: none; color: red'>修改</a>&nbsp;&nbsp;&nbsp;&nbsp;";

        table.appendChild(checkData);
    }




    //城市界面
    let cityTable = document.getElementById("cityForm");
    let cityData = document.createElement("tr");
    cityTable.innerHTML = "";

    //设置宽度
    let listStyle1 = document.createElement("td");
    listStyle1.style.width = "80px";
    listStyle1.style.textAlign = "center";
    listStyle1.innerHTML="<input type='checkbox' class='cityBoxes' onclick='cityCheckall()'/>"
    cityData.appendChild(listStyle1);
    let listStyle2 = document.createElement("td");
    listStyle2.style.width = "300px";
    listStyle2.style.textAlign = "center";
    listStyle2.innerHTML="城市"
    cityData.appendChild(listStyle2);

    //设置样式
    cityData.style.fontSize = "bold";
    cityData.style.backgroundColor = "#e8e4ed";
    cityData.style.height = "50px";
    cityTable.appendChild(cityData);
   

    //设置页脚
    let cityFooter = document.querySelector(".cityFooter");
    cityFooter.innerHTML = `第${cityPage}页，共${cities.length}条`;
    
    //绘制数据
    for (let i = (cityPage-1) * 10 ; i < cities.length && i<(cityPage * 10);i++){
        let checkData = document.createElement("tr");
        checkData.style.textAlign = "center";
        checkData.style.height = "45px";

        //设置颜色
        if (i % 2 == 0) {
            checkData.style.backgroundColor = "#ffffff";
        } else {
            checkData.style.backgroundColor = "#e8e4ed";
        }
        
        //写入数据
        for (let j = 0; j < 10; j++) {
              checkData.insertCell(j);
        }
        checkData.childNodes[0].innerHTML = "<input type='checkbox' class='cityCheckboxes' name='boxsituation'/>";
        checkData.childNodes[1].innerHTML = cities[i];

        cityTable.appendChild(checkData);
    }
}

function cityPrevPage(){
    if (cityPage === 1){
        alert("当前已是第一页！")
    }  else{
        cityPage--;
        render();
    }
}

function cityNextPage(){
    if (cityPage * 10 > cities.length){
        alert("当前已是最后一页！")
    } else {
        cityPage++;
        render();
    }
}

function cityInformAdd(){
    let addCity = document.getElementsByClassName('addCity')[0]
    addCity.style.display='block'
}

function cityInformDel(){
    let cityCheckboxes = document.querySelectorAll(".cityCheckboxes");
    let n = cityPage
alert("是否删除")
        //删除选中数据
        for (let i = 0, k = 0; i < cityCheckboxes.length; i++) {
            if (cityCheckboxes[i].checked){
                    for (let j = 0, p = 0; j < trains.length; j++){
                        if (trains[j - p].to === cities[(cityPage - 1) * 10 + i - k] || trains[j - p].from === cities[(cityPage - 1) * 10 + i - k]){
                            trains.splice(j - p,1);
                            console.log(1)
                            p++;
                        }
                    }
                    cities.splice((cityPage - 1) * 10 + i - k,1);
                    k++;
            }
        }

        if (n - 1 === (cityCheckboxes.length - 1) / 10 + 1){
            cityPage--;
        }

        render();
}

//弹窗标题
function checkHeader(i) {
    let headTitle = document.querySelector(".headtitle");
    if (i==0){
        headTitle.innerHTML = "新增列车信息";
    }
    else if (i==1){
        headTitle.innerHTML = "查看列车信息";
    }
    else if (i==2){
        headTitle.innerHTML = "修改列车信息";
    }
}

//弹窗按钮
function checkButton(i,index) {
    let submitButton = document.querySelector(".checksubmit");
    if (i==0){
        //新增列车
        submitButton.innerHTML = "提交";
        submitButton.onclick = submit;
    }
    else if (i==1){
        //查看列车
        submitButton.innerHTML = "确定";
        submitButton.style.display = "inline-block";
        submitButton.disabled = false;
        submitButton.onclick = function () {
            hide();
            render();
        }
    }
    else if(i==2){ 
        //修改列车
        submitButton.innerHTML = "保存";
        submitButton.style.display = "inline-block";
        submitButton.disabled = false;
       
        submitButton.onclick = function () {
            if (isCorrect(new newTrain(checkData[0].value,checkData[1].value,checkData[2].value,checkData[3].value,checkData[4].value,checkData[5].value))){
                trains[index].id = checkData[0].value;
                trains[index].from = checkData[1].value;
                trains[index].to = checkData[2].value;
                trains[index].timeStart = checkData[3].value ;
                trains[index].timeFinish = checkData[4].value;
                trains[index].price = parseInt(checkData[5].value);
                hide();
                render();
            }

        }

    }
}

//添加列车
function add() {
    //使数据可以修改
    for (let j = 0; j < checkData.length; j++) {
        checkData[j].disabled = false;
    }
    show();
    checkHeader(0);
    checkButton(0);

}

//展示弹窗
function show() {
    document.querySelector(".inputbox").style.display = "block";
    document.querySelector(".check").style.display = "block";
}

//隐藏弹窗
function hide() {
    document.querySelector(".inputbox").style.display = "none";
    document.querySelector(".check").style.display = "none";
}

//清空弹窗
function clear() {
    for (let i = 0; i < checkData.length; i++) {
        checkData[i].value = "";
    }
}

//退出弹窗
function cancel() {
    hide();
    clear();
    for (let i = 0; i < checkData.length; i++) {
        checkData[i].disabled = false;
    }
}

function isCorrect(train){
    let flag1 = false
    let flag2 = false
    for (let i = 0; i < cities.length; i++){
        if (train.from === cities[i]){
            flag1 = true
        }
        if (train.to === cities[i]){
            flag2 = true
        }
    }

    if (flag1 === true && flag2 === true){
        return true
    } else {
        alert('城市不存在！')
        return false
    }
}

//新增列车
function submit() {
    console.log(checkData)
    let train = new newTrain(checkData[0].value,checkData[1].value,checkData[2].value,checkData[3].value,checkData[4].value,checkData[5].value);
    if (isCorrect(train)){
        trains.push(train);
        let input = document.querySelectorAll(".checkinfo");

        for(let i = 0;i < input.length;i++){
            input[i].style.backgroundColor = "#efebe9";
        }
        hide();
        render();
        clear();
    }
}


//上一页
function prevPage() {
    if (page <=1){
        alert("当前已经是第一页！");
    }else{
        page--;
        render();
    }
}

//下一页
function nextPage() {
    if(page >= Math.ceil(trains.length/10)){
        alert("当前已经是最后一页！");
    }
    else {
        page++;
        render();
    }
}

//列车全选
function checkall(){
    let checkBoxs = document.querySelectorAll(".checkboxes");
    if(times % 2 == 0){
        for (let i = 0; i < checkBoxs.length; i++) {
                checkBoxs[i].checked = true;
        }
    }else{
        for (let i = 0; i < checkBoxs.length; i++) {
            checkBoxs[i].checked = false;
        }
    }
    times++;
}

//城市全选
function cityCheckall(){
    let cityCheckboxes = document.querySelectorAll(".cityCheckboxes");
    if(cityTimes % 2 == 0){
        for (let i = 0; i < cityCheckboxes.length; i++) {
            cityCheckboxes[i].checked = true;
        }
    }else{
        for (let i = 0; i < cityCheckboxes.length; i++) {
            cityCheckboxes[i].checked = false;
        }
    }
    cityTimes++;
}

//删除
function remove() {
    let checkBoxs = document.querySelectorAll(".checkboxes");
    let n = page
    alert("是否删除")
        //删除选中数据
        for (let i = 0, k = 0; i < checkBoxs.length; i++) {
            if (checkBoxs[i].checked){
                    trains.splice((page - 1) * 10 + i - k,1);
                    k++;
            }
        }
        
        if (n - 1 === (checkBoxs.length - 1) / 10 + 1){
            page--;
        }

        render();
        

}

//显示数据
function showData(i) {
    checkData[0].value = trains[i].id;
    checkData[1].value = trains[i].from;
    checkData[2].value = trains[i].to;
    checkData[3].value = trains[i].timeStart;
    checkData[4].value = trains[i].timeFinish;
    checkData[5].value = trains[i].price;
}

//查看数据
function watch(i) {
    //使数据无法被修改
    for (let j = 0; j < checkData.length; j++) {
        checkData[j].disabled = true;
    }

    let input = document.querySelectorAll(".checkinfo");

    for(let i = 0;i < input.length;i++){
        input[i].style.backgroundColor = "#ffffff";
    }
    
    show();
    checkHeader(1);
    showData(i);
    checkButton(1,i);
    
}

//修改数据
function change(i) {
    //使数据可以修改
    for (let j = 0; j < checkData.length; j++) {
        checkData[j].disabled = false;
    }

    let input = document.querySelectorAll(".checkinfo");

    for(let i = 0;i < input.length;i++){
        input[i].style.backgroundColor = "#efebe9";
    }
    show();
    checkHeader(2);
    showData(i);
    checkButton(2,i);
}


function citySubmit(){
    let addCity = document.getElementsByClassName('addCity')[0]
    let cityInput = document.getElementById('cityInput')
    let flag = true
    for (let i = 0; i < cities.length; i++){
        if (cities[i] === cityInput.value){
            flag = false
        }
    }

    if (flag === false){
        alert('城市已存在！')
    } else {
        cities[cities.length] = cityInput.value
        addCity.style.display='none'
        render()
    }

    cityInput.value=' '
}


function cityCancel(){
    let addCity = document.getElementsByClassName('addCity')[0]
    let cityInput = document.getElementById('cityInput')
    cityInput.value=' '
    addCity.style.display='none'
}

//计算时间
function calculateTime(str1,str2){
    let h1 = str1.slice(0,2)
    let m1 = str1.slice(3,5)

    let h2 = str2.slice(0,2)
    let m2 = str2.slice(3,5)

    let time = 60 * (parseInt(h2) - parseInt(h1)) + parseInt(m2) - parseInt(m1)

    return time;
}

class Result {
    constructor(){
        this.weight = 0
        this.route = []
    }
}

function searchTime(from,to,currentTime){
    let result = new Result()
    if (from === to){
        return new Result()
    }

    for (let i = 0; i < trains.length; i++){

        if (calculateTime(currentTime,trains[i].timeStart) >= 0){//时间允许
            if (trains[i].from === from){

                let temResult = searchTime(trains[i].to,to,trains[i].timeFinish)

                if (temResult.weight === 0){//最后一班车
                    if (result.weight === 0){

                        result.route[0] = i
                        result.weight = calculateTime(trains[i].timeStart,trains[i].timeFinish)

                    } else if (calculateTime(trains[result.route[0]].timeFinish,trains[i].timeFinish) < 0){

                        result.route[0] = i
                        result.weight = calculateTime(trains[i].timeStart,trains[i].timeFinish)

                    }
                } else if (result.weight === 0){ //本轮检索第一个符合条件的列车

                    temResult.route[temResult.route.length] = i
                    temResult.weight = calculateTime(trains[i].timeStart,trains[temResult.route[0]].timeFinish)
                    result = temResult

                }else if (calculateTime(trains[i].timeStart,trains[temResult.route[0]].timeFinish) < result.weight){
                    
                    temResult.route[temResult.route.length] = i
                    temResult.weight = calculateTime(trains[i].timeStart,trains[result.route[0]].timeFinish)
                    result = temResult

                }
            }
        }
    }

    return result
}

function searchPrice(from,to,currentTime){
    let result = new Result()
    if (from === to){
        return new Result()
    }

    for (let i = 0; i < trains.length; i++){

        if (calculateTime(currentTime,trains[i].timeStart) >= 0){//时间允许
            if (trains[i].from === from){

                let temResult = searchPrice(trains[i].to,to,trains[i].timeFinish)

                if (temResult.weight === 0){//最后一班车
                    if (result.weight === 0){

                        result.route[0] = i
                        result.weight = trains[i].price

                    } else if (trains[i].price < result.weight){

                        result.route[0] = i
                        result.weight = trains[i].price

                    }
                } else if (result.weight === 0){ //本轮检索第一个符合条件的列车

                    temResult.route[temResult.route.length] = i
                    temResult.weight = temResult.weight + trains[i].price
                    result = temResult

                }else if (trains[i].price + temResult.weight < result.weight){
                    
                    temResult.route[temResult.route.length] = i
                    temResult.weight = temResult.weight + trains[i].price
                    result = temResult

                }
            }
        }
    }

    return result
}

function searchChange(from,to,currentTime){
    let result = new Result()
    if (from === to){
        return new Result()
    }

    for (let i = 0; i < trains.length; i++){

        if (calculateTime(currentTime,trains[i].timeStart) >= 0){//时间允许
            if (trains[i].from === from){

                let temResult = searchChange(trains[i].to,to,trains[i].timeFinish)

                if (temResult.weight === 0){//最后一班车

                        result.route[0] = i
                        result.weight = 1

                } else if (result.weight === 0){ //本轮检索第一个符合条件的列车

                    temResult.route[temResult.route.length] = i
                    temResult.weight = temResult.weight + 1
                    result = temResult

                }else if (temResult.weight + 1 < result.weight){
                    
                    temResult.route[temResult.route.length] = i
                    temResult.weight = temResult.weight + 1
                    result = temResult

                }
            }
        }
    }

    return result
}

function search(){
    let searchSelect = document.getElementById('searchSelect').value
    let from = document.getElementById('searchInput1').value
    let to = document.getElementById('searchInput2').value
    
    if (searchSelect === '1'){
        let result = searchTime(from,to,"00:00")
        showResult(result)
    } else if (searchSelect === '2'){
        let result = searchPrice(from,to,"00:00")
        showResult(result)
    } else if (searchSelect === "3"){
        let result = searchChange(from,to,"00:00")
        showResult(result)
    }
}


function showResult(result){
    let showResult = document.getElementById('result')
    showResult.style.display='block'
    let title = document.createElement('span')
    let titleBr = document.createElement('br')
    let time = calculateTime(trains[result.route[result.route.length - 1]].timeStart,trains[result.route[0]].timeFinish)
    let change = result.route.length - 1
    let price = 0
    title.innerHTML="顺序" + "&nbsp;&nbsp列车号&nbsp;&nbsp;出发时间&nbsp;&nbsp;抵达时间&nbsp;&nbsp价格"
    showResult.appendChild(title)
    showResult.appendChild(titleBr)
    for (let i = result.route.length - 1; i >= 0; i--){
        let span = document.createElement('span')
        let br = document.createElement('br')
        span.innerHTML = "&nbsp;&nbsp;" + (result.route.length - i) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + trains[result.route[i]].id + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + trains[result.route[i]].timeStart + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + trains[result.route[i]].timeFinish + " &nbsp;&nbsp;&nbsp;&nbsp;" + trains[result.route[i]].price 
        showResult.appendChild(span)
        showResult.appendChild(br)
        price = price + trains[result.route[i]].price
    }
    let changeSpan = document.createElement('span')
    let changesBr = document.createElement('br')
    changeSpan.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;换乘次数:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + change + "&nbsp;&nbsp;&nbsp;次"
    showResult.appendChild(changeSpan)
    showResult.appendChild(changesBr)

    let timeSpan = document.createElement('span')
    let timeBr = document.createElement('br')
    timeSpan.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;花费时间:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + time + "&nbsp;&nbsp;&nbsp;分钟"
    showResult.appendChild(timeSpan)
    showResult.appendChild(timeBr)

    let priceSpan = document.createElement('span')
    let priceBr = document.createElement('br')
    priceSpan.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格:&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + price + "&nbsp;&nbsp;&nbsp;元"
    showResult.appendChild(priceSpan)
    showResult.appendChild(priceBr)
}

