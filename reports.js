"use strict";
(function(){
function payload(s){try{return typeof s.payload==="string"?JSON.parse(s.payload||"{}"):(s.payload||{});}catch(e){return {};}}
function topics(){var o={};(window.COURSE&&window.COURSE.sections||[]).forEach(function(s){(s.topics||[]).forEach(function(t){o[String(t.id)]=(t.code?t.code+" ":"")+(t.title||t.id);});});return o;}
function desc(k,t){var m=/^(prac|self|writing)_([^_]+)_\d+$/.exec(k);if(m)return{topic:t[m[2]]||m[2],type:m[1]==="prac"?"Практика":m[1]==="self"?"Самостоятельная":"Письменная"};if(k==="__final__"+window.state.activeCourseId)return{topic:"Итоговый экзамен",type:"Экзамен"};if(k.indexOf("final_")===0)return{topic:"Итоговый экзамен (вариант)",type:"Экзамен"};if(k.indexOf("custom_")===0)return{topic:k.slice(7),type:"Авторский тест"};return{topic:t[k]||k,type:k.indexOf("_sem")>-1?"Семестровая работа":"Тест / задание"};}
function belongsToCourse(k,t){if(k==="__final__"+window.state.activeCourseId)return true;if(Object.prototype.hasOwnProperty.call(t,k))return true;var m=/^(?:prac|self|writing)_([^_]+)_\d+$/.exec(k);if(m)return Object.prototype.hasOwnProperty.call(t,m[1]);var semester=window.SEMESTER_TESTS&&window.SEMESTER_TESTS[window.state.activeCourseId]||[];if(semester.some(x=>x.id===k))return true;var finals=window.FINAL_EXAMS&&window.FINAL_EXAMS[window.state.activeCourseId]||[];if(finals.some(x=>k.indexOf(x.id)===0))return true;return false;}
function grade(x){if(!x||typeof x!=="object")return null;var g=Number(x.grade);if(Number.isFinite(g)&&g>=2&&g<=5)return g;var n=Number(x.total),m=Number(x.max);if(Number.isFinite(n)&&Number.isFinite(m)&&m>0){var p=n/m*100;return p>=90?5:p>=75?4:p>=60?3:2;}return null;}
function esc(x){return window.escapeHtml(x==null?"":String(x));}
function xml(v){return String(v==null?"":v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");}
function col(n){var x="";for(n++;n>0;n=Math.floor((n-1)/26))x=String.fromCharCode(65+(n-1)%26)+x;return x;}
function crc32(bytes){var c=-1;for(var i=0;i<bytes.length;i++){c^=bytes[i];for(var j=0;j<8;j++)c=(c>>>1)^((c&1)?0xEDB88320:0);}return(c^(-1))>>>0;}
function join(parts){var size=parts.reduce((n,p)=>n+p.length,0),out=new Uint8Array(size),at=0;parts.forEach(p=>{out.set(p,at);at+=p.length;});return out;}
function zipStore(files){
 var enc=new TextEncoder(),local=[],central=[],offset=0;
 files.forEach(function(file){
  var name=enc.encode(file.name),data=enc.encode(file.data),crc=crc32(data);
  var h=new Uint8Array(30+name.length),v=new DataView(h.buffer);
  v.setUint32(0,0x04034b50,true);v.setUint16(4,20,true);v.setUint16(6,0x0800,true);v.setUint16(8,0,true);
  v.setUint16(10,0,true);v.setUint16(12,0x21,true);v.setUint32(14,crc,true);v.setUint32(18,data.length,true);v.setUint32(22,data.length,true);v.setUint16(26,name.length,true);v.setUint16(28,0,true);h.set(name,30);
  local.push(h,data);
  var c=new Uint8Array(46+name.length),cv=new DataView(c.buffer);
  cv.setUint32(0,0x02014b50,true);cv.setUint16(4,20,true);cv.setUint16(6,20,true);cv.setUint16(8,0x0800,true);cv.setUint16(10,0,true);
  cv.setUint16(12,0,true);cv.setUint16(14,0x21,true);cv.setUint32(16,crc,true);cv.setUint32(20,data.length,true);cv.setUint32(24,data.length,true);
  cv.setUint16(28,name.length,true);cv.setUint16(30,0,true);cv.setUint16(32,0,true);cv.setUint16(34,0,true);cv.setUint16(36,0,true);cv.setUint32(38,0,true);cv.setUint32(42,offset,true);c.set(name,46);central.push(c);
  offset+=h.length+data.length;
 });
 var centralBytes=join(central),localBytes=join(local),end=new Uint8Array(22),ev=new DataView(end.buffer);
 ev.setUint32(0,0x06054b50,true);ev.setUint16(4,0,true);ev.setUint16(6,0,true);ev.setUint16(8,files.length,true);ev.setUint16(10,files.length,true);ev.setUint32(12,centralBytes.length,true);ev.setUint32(16,localBytes.length,true);ev.setUint16(20,0,true);
 return join([localBytes,centralBytes,end]);
}
function xlsx(rows){
 var sheet='<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>';
 rows.forEach(function(row,ri){sheet+='<row r="'+(ri+1)+'">';row.forEach(function(value,ci){var ref=col(ci)+(ri+1);if(typeof value==="number"&&Number.isFinite(value))sheet+='<c r="'+ref+'"><v>'+value+'</v></c>';else sheet+='<c r="'+ref+'" t="inlineStr"><is><t xml:space="preserve">'+xml(value)+'</t></is></c>';});sheet+='</row>';});sheet+='</sheetData></worksheet>';
 var files=[
  {name:"[Content_Types].xml",data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>'},
  {name:"_rels/.rels",data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'},
  {name:"xl/workbook.xml",data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Результаты" sheetId="1" r:id="rId1"/></sheets></workbook>'},
  {name:"xl/_rels/workbook.xml.rels",data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>'},
  {name:"xl/worksheets/sheet1.xml",data:sheet}
 ];
 var bytes=zipStore(files),blob=new Blob([bytes],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download="english-results-"+new Date().toISOString().slice(0,10)+".xlsx";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
window.renderCourseReportsPage=function(){
var app=document.getElementById("app");if(!app)return;app.innerHTML="";var cr=document.getElementById("crumbs");if(cr)cr.textContent="Аналитика преподавателя";
app.appendChild(window.el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));
if(!window.hasStaffRole()){app.appendChild(window.el('<div class="module">⛔ Доступ только преподавателю и администратору.</div>'));return;}
app.appendChild(window.el('<section class="hero"><h1>📊 Аналитика преподавателя</h1><p>Успеваемость по группам, темам и видам работ</p></section>'));
app.appendChild(window.el('<section class="module"><label>Группа <select id="analyticsGroup" class="self-input"><option value="">Все группы</option></select></label><button class="btn" id="refreshAnalytics">Обновить</button> <button class="btn" id="exportAnalytics">📥 Экспорт для Excel</button><p id="analyticsMeta" style="color:var(--muted);font-size:12px;">Загрузка журнала…</p></section>'));
var wrap=window.el('<div id="analyticsContent"></div>');app.appendChild(wrap);var students=[];
function render(){
var group=document.getElementById("analyticsGroup").value, list=students.filter(s=>!group||String(s.group||"")===group), map=topics(), agg={},sum=0,count=0,done=0;
list.forEach(s=>{var rs=payload(s).results||{};Object.keys(rs).forEach(k=>{if(!belongsToCourse(k,map))return;var g=grade(rs[k]);if(g==null)return;var d=desc(k,map),a=agg[d.topic]||(agg[d.topic]={topic:d.topic,type:d.type,sum:0,count:0,students:{}});a.sum+=g;a.count++;a.students[s.name+"|"+s.group]=1;sum+=g;count++;done++;});});
var rows=Object.values(agg).map(a=>({topic:a.topic,type:a.type,avg:a.sum/a.count,count:a.count,students:Object.keys(a.students).length})).sort((a,b)=>a.avg-b.avg),low=rows.filter(x=>x.avg<3.5);
var html='<section class="module"><div style="display:flex;gap:14px;flex-wrap:wrap;"><b>Студентов: '+list.length+'</b><b>Оценок: '+done+'</b><b>Средний балл: '+(count?(sum/count).toFixed(2):"—")+'</b><b style="color:var(--err)">Темы внимания: '+low.length+'</b></div></section>';
html+='<section class="module"><h3>Темы, которые группа усвоила хуже</h3>';
html+=low.length?low.map(x=>'<p style="border-bottom:1px solid var(--border);padding:8px 0;"><b>'+esc(x.topic)+'</b><span style="float:right;color:var(--err)">'+x.avg.toFixed(2)+'/5</span><br><small>'+x.count+' оценок · '+x.students+' студентов</small></p>').join(""):'<p style="color:var(--ok)">Тем со средним баллом ниже 3,5 не выявлено.</p>';
html+='</section><section class="module"><h3>Результаты по темам</h3><div style="overflow-x:auto"><table class="journal-table"><thead><tr><th>Тема</th><th>Вид работы</th><th>Средний балл</th><th>Оценок</th><th>Студентов</th></tr></thead><tbody>';
html+=rows.map(x=>'<tr><td>'+esc(x.topic)+'</td><td>'+esc(x.type)+'</td><td><b>'+x.avg.toFixed(2)+'</b></td><td>'+x.count+'</td><td>'+x.students+'</td></tr>').join("")||'<tr><td colspan="5">Оценок пока нет</td></tr>';
html+='</tbody></table></div></section><section class="module"><h3>Журнал группы</h3><div style="overflow-x:auto"><table class="journal-table"><thead><tr><th>ФИО</th><th>Группа</th><th>XP</th><th>Средний балл</th><th>Работ</th></tr></thead><tbody>';
list.forEach(s=>{var p=payload(s),rs=p.results||{},gs=Object.keys(rs).filter(k=>belongsToCourse(k,map)).map(k=>grade(rs[k])).filter(x=>x!=null);html+='<tr><td>'+esc(s.name)+'</td><td>'+esc(s.group)+'</td><td>'+(Number(p.xp)||0)+'</td><td>'+(gs.length?(gs.reduce((a,b)=>a+b,0)/gs.length).toFixed(2):"—")+'</td><td>'+gs.length+'</td></tr>';});
html+='</tbody></table></div></section>';wrap.innerHTML=html;
document.getElementById("analyticsMeta").textContent="Курс: "+(window.COURSE&&window.COURSE.title||window.state.activeCourseId)+" · "+new Date().toLocaleString("ru-RU");
}
function load(){wrap.innerHTML='<div class="module">Загружаю данные…</div>';window.API.getStudents().then(d=>{if(!d||!d.ok||!Array.isArray(d.students))throw Error("Журнал не вернул список студентов");students=d.students.filter(s=>!["ТЕСТ","TEST"].includes(String(s.group||"").toUpperCase()));var sel=document.getElementById("analyticsGroup"),old=sel.value,gs=[...new Set(students.map(s=>s.group).filter(Boolean))].sort();sel.innerHTML='<option value="">Все группы</option>'+gs.map(g=>'<option value="'+esc(g)+'">'+esc(g)+'</option>').join("");if(gs.includes(old))sel.value=old;render();}).catch(e=>wrap.innerHTML='<div class="module" style="color:var(--err)">Не удалось загрузить журнал: '+esc(e.message)+'. Проверьте Google Apps Script.</div>');}
document.getElementById("refreshAnalytics").onclick=load;document.getElementById("analyticsGroup").onchange=render;
document.getElementById("exportAnalytics").onclick=function(){if(!students.length)return window.showToast("Нет данных","err");var map=topics(),rows=[["ФИО","Группа","Курс","Тема","Тип","Оценка","Баллы","Максимум","XP","Дата"]],g=document.getElementById("analyticsGroup").value;students.filter(s=>!g||String(s.group||"")===g).forEach(s=>{var p=payload(s),rs=p.results||{};Object.keys(rs).forEach(k=>{if(!belongsToCourse(k,map))return;var x=rs[k]||{},d=desc(k,map);rows.push([s.name,s.group,window.COURSE&&window.COURSE.title||window.state.activeCourseId,d.topic,d.type,x.grade||"",x.total==null?(x.score==null?"":x.score):x.total,x.max==null?(x.maxScore==null?"":x.maxScore):x.max,p.xp||0,x.date||x.completedAt||""]);});});xlsx(rows);window.showToast("Книга Excel (.xlsx) выгружена","ok");};
load();
};
window.teacherGradeWriting=function(studentKey,resultKey){if(!window.hasStaffRole())return window.showToast("Недостаточно прав","err");var g=prompt("Оценка за письменную работу (2–5):");if(!g||isNaN(g)||g<2||g>5)return;window.API.getStudents().then(d=>{var s=(d.students||[]).find(x=>(x.name.trim().toLowerCase()+"|"+x.group.trim().toLowerCase())===studentKey);if(!s)return;var p=payload(s);if(!p.results||!p.results[resultKey])return;p.results[resultKey].grade=Number(g);p.results[resultKey].status="graded";if(g>=4)p.xp=(p.xp||0)+20;return window.API.saveStudent(studentKey,s.name,s.group,JSON.stringify(p)).then(r=>{if(r.ok){window.showToast("Оценка выставлена","ok");window.renderCourseReportsPage();}else window.showToast("Ошибка сохранения","err");});}).catch(()=>window.showToast("Ошибка связи с журналом","err"));};
window.grantXP=function(key){if(!window.hasStaffRole())return window.showToast("Недостаточно прав","err");var n=prompt("Сколько XP начислить?","50");if(!n||isNaN(n))return;window.API.grantXP(key,parseInt(n,10)).then(()=>{window.showToast("Начислено +"+n+" XP","ok");window.renderCourseReportsPage();}).catch(()=>window.showToast("Ошибка","err"));};
window.deleteStudent=function(key,name){if(!window.isAdmin())return window.showToast("Удалять студентов может только администратор","err");if(!confirm("Удалить студента "+name+"?"))return;window.API.deleteStudent(key).then(r=>{if(r&&r.ok){window.showToast("Студент удалён","ok");window.renderCourseReportsPage();}else window.showToast("Ошибка удаления","err");}).catch(()=>window.showToast("Ошибка сети","err"));};
})();