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

## 명령어 분석

1. `git fetch origin`
    
    - 원격 저장소(`origin`)의 최신 상태를 가져오되, **로컬 작업 디렉터리엔 적용하지 않음**
        
    - 안전하게 원격 상태를 먼저 동기화함
        
2. `git reset --hard origin/main`
    
    - **로컬 브랜치(main)** 를 원격 브랜치(`origin/main`) 상태로 **완전히 덮어씀**
        
    - Staging 및 Working Directory 모두 강제 초기화됨
        
3. `git clean -fd`
    
    - Git이 **관리하지 않는 파일들(untracked files & directories)** 삭제
        
    - 예: 새로 생성했지만 `git add`하지 않은 `.md`, `.json` 파일도 삭제됨

## 주의:  
이 명령어를 실행하면 다음 파일은 모두 **삭제/초기화**됨:

- 변경했지만 커밋 안 한 `.md`, `.json` 파일
    
- `gitignore`에 있어도 Git이 추적하지 않던 새 파일
    
→ **중요한 파일은 백업**하고 실행할 것.

