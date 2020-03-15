// each執行每一個陣列的內容
// attr取得屬性 
$("*").each(function(){
    var number=$(this).attr("data-ct-number");
    var duration = $(this).attr("data-ct-duration");

    console.log(number);
    console.log(duration);
})