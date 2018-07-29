// new_element=document.createElement("script");
// new_element.setAttribute("type","text/javascript");
// new_element.setAttribute("src","./assets/js/xlsx.full.min.js");
// new_element.setAttribute("src","./assets/js/bootstable.js");
// new_element.setAttribute("src","./assets/css/htmleaf-demo.min.css");
// new_element.setAttribute("src","./assets/css/bootstrap.min.css");
// new_element.setAttribute("src","./assets/js/tableexport.js");
// document.body.appendChild(new_element);

/*
    FileReader共有4种读取方法：
    1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
    2.readAsBinaryString(file)：将文件读取为二进制字符串
    3.readAsDataURL(file)：将文件读取为Data URL
    4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
                 */

var wb;//读取完成的数据
var rABS = false; //是否将文件读取为二进制字符串
var json_wb

function importExcel(obj) {//导入
  if(!obj.files) {
    return;
  }
  const IMPORTFILE_MAXSIZE = 1*1024;//这里可以自定义控制导入文件大小
  var suffix = obj.files[0].name.split(".")[1]
  if(suffix != 'xls' && suffix !='xlsx'){
    alert('导入的文件格式不正确!')
    return
  }
  if(obj.files[0].size/1024 > IMPORTFILE_MAXSIZE){
    alert('导入的表格文件不能大于1M')
    return
  }
  var f = obj.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var data = e.target.result;
    if(rABS) {
      wb = XLSX.read(btoa(fixdata(data)), {//手动转化
        type: 'base64'
      });
    } else {
      wb = XLSX.read(data, {
        type: 'binary'
      });
    }
    //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
    //wb.Sheets[Sheet名]获取第一个Sheet的数据
    json_wb = JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) );
    json = JSON.parse(json_wb);

    var html = '<table class="table table-bordered table-striped" id="mytable">';
    html += '<thead><tr>'
    for (var a in json[0]) {
      html += '<td>' + a + '</td>';
    }
    html += '<th name="buttons"></th>';
    html += '</tr></thead><tbody>'
    for (var j in json) {
      var obj = json[j];
      html += '<tr>'
      html += '<td>' + obj.district + '</td>';
      html += '<td>' + obj.company_name + '</td>';
      html += '<td>' + obj.number + '</td>';
      html += '<td name="buttons">' + '<div class="btn-group pull-right">'
        + '<button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);" style="display: block;">'+'<span class="glyphicon glyphicon-pencil"></span>'+'</button>'
        + '<button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);" style="display: block;">'+'<span class="glyphicon glyphicon-trash"></span>'+'</button>'
        + '<button id="bAcep" type="button" class="btn btn-sm btn-default" style="display: none;" onclick="rowAcep(this);">'+'<span class="glyphicon glyphicon-ok"> </span>'+'</button>'
        + '<button id="bCanc" type="button" class="btn btn-sm btn-default" style="display: none;" onclick="rowCancel(this);">'+'<span class="glyphicon glyphicon-remove"></span>'+'</button>'
        + '</div >'
        + '</td></tr>';
    }
    html += '</tbody></table>';
    document.getElementById("demo").innerHTML = html
    var button_show = document.getElementById("apply");
    button_show.style.display = "block";
  };



  if(rABS) {
    reader.readAsArrayBuffer(f);
  } else {
    reader.readAsBinaryString(f);
  }
}

function fixdata(data) { //文件流转BinaryString
  var o = "",
    l = 0,
    w = 10240;
  for(; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
  o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
  return o;
}
function apply_data(){
  var tb=document.getElementById("mytable");    //获取table对像
  var rows=tb.rows;
  for(var i=0;i<rows.length;i++){    //--循环所有的行
    var cells=rows[i].cells;
    for(var j=0;j<cells.length-1;j++){   //--循环所有的列
      console.log(cells[j].innerHTML);
    }
  }
  alert("上传成功!")
}



  $('#mytable').SetEditable({
    $addButton: $('#add'),
    onEdit: function() {
      alert("修改成功")
    },   //Called after edition
    showExport: true,//显示导出按钮
    exportDataType: "basic",//导出类型
  });
$('#tableActivity').bootstrapTable('destroy').bootstrapTable({
  cache: false,
  height: 550,
  showExport: true,//显示导出按钮
  exportDataType: "basic",//导出类型
  pagination: true,
  pageSize: 50,
  pageList: [10, 25, 50, 100],
  search: true,
  searchAlign:'left',
  showRefresh: true,
  showToggle: true,
  showColumns: true,
  toolbarAlign: 'right',//toolbar位置
  toolbar:"#toolbar",
  buttonsAlign:'left',//刷新按钮位置
  clickToSelect: true,
  idField:'activityRegistrationId',
  responseHandler:'dealData',
  columns:colums,
  data:data
});
