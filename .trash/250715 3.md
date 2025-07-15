<%*
const newName = "DN_" + tp.date.now("YYMMDD");
if (tp.file.title !== newName) {
  await tp.file.rename(newName);
}
%>
# 📅 <% tp.date.now("YYMMDD") %> (<% tp.date.now("dddd") %>)

## ✅ 오늘 할 일
- [ ] 주요 업무 1
- [ ] 주요 업무 2

## 📝 메모
- 

## 🌙 하루 회고
- 
