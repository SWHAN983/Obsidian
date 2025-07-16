<%*
const fileName = tp.date.now("YYYYMMDD_HHmmss") + " - " + tp.file.title;
tR = "";
%>
<% tp.file.move("0. INBOX/" + fileName) %>

---
title: {{content}}
from: [[{{fromTitle}}]]
date: {{date:YYYY-MM-DD}}
tags: [인용]
---

## 🔹 요약
> 

---

## 🔸 원문 정보
- **출처 노트**: [[{{fromTitle}}]]
- **추출 일시**: {{date:YYYY-MM-DD}}
- **생성 제목**: {{content}}

---

## 🧩 연결 메모
- [ ] 연결할 개념/모델: 
- [ ] 관련된 참고자료:
- [ ] 적용할 프로젝트/보고서:

---

## 💬 내 메모
> 
