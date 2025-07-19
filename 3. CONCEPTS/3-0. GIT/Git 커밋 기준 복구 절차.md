---
created: 2025-07-17
tags:
  - guide
  - Git
  - restore
  - reviewed
---
# 목적
- 자동 커밋 로그 중 **특정 시점(예: 2025-07-17 02:41:59)**으로 복구하고 싶음
- 복구 후에도 자동 커밋/다중 기기 연동 유지

# 1단계: 복구 대상 커밋 해시 찾기

```
git log --oneline --format="%h %an %ae %s"
```
-  여기서 원하는 커밋 해시(예: `1826f20`)를 복사해둠

# 2단계: 현재 작업 백업 (선택)
```
git stash push -m "🔒 현재 상태 백업"
```
- 현재 수정 중인 내용이 있다면 보존
- 복원 후 다시 적용 가능

# 3단계: 복구 실행 (reset 방식)
```
rm conflict-files-obsidian-git.md
git reset --hard <커밋해시>
```
- 현재 브랜치(main)의 HEAD를 해당 커밋으로 강제 이동
- Vault 전체가 그 시점으로 완전히 되돌아감

# 4단계: 상태 확인
```
git status
```
- `nothing to commit, working tree clean`이면 복원 완료

# 5단계: GitHub에도 상태 동기화 (선택)
```
git push --force origin main
```
- 원격도 현재 상태로 맞춤  
- ⚠️ 주의: 공유 중인 리포지토리면 **다른 사용자와 충돌 가능**

# 6단계: 백업해둔 내용 복원 (필요한 경우)
```
git stash list
git stash pop
```
- 백업된 내용 다시 적용됨
- 충돌 발생 시 수동 병합 필요