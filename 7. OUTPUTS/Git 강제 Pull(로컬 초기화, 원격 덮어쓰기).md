---
created: 2025-07-17
tags:
  - guide
  - Git
  - Pull
  - reviewed
---
# 목적
- Git 충돌 상황에서 **로컬 변경사항을 무시하고 원격(remote)의 내용을 기준으로 로컬을 덮어쓰기(pull)**
- Obsidian Vault를 원격 리포지토리 기준으로 맞춤 (로컬 수정은 버림)

# 1. 변경사항 완전 삭제 (⚠️ 로컬 수정본 영구 손실됨)

```
git reset --hard HEAD          # 로컬 변경사항 초기화
git clean -fd                  # 추적되지 않은 파일도 삭제
```
-  `--hard`는 로컬 변경사항 모두 삭제  
 - `clean -fd`는 untracked 파일/폴더까지 삭제 (`.obsidian/`, 템플릿 등 포함 가능)

# 원격에서 강제 pull
```
git fetch origin
git reset --hard origin/main   # 또는 origin/master
```
- 이 단계에서 로컬이 원격과 **동일 상태**가 됨

# # 상태 확인
```
git status
```
- "nothing to commit, working tree clean"이면 완료

# 요약 명령어 (한 줄로)
```
git fetch origin && git reset --hard origin/main && git clean -fd
```

