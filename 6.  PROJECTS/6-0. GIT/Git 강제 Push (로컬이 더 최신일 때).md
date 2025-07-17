---
created: 2025-07-17
tags:
  - guide
  - Git
  - Push
  - conflict
  - reviewed
---

# ✅ Git 강제 Push (`--force-with-lease`) 가이드

## 📌 목적
- **로컬 변경사항을 원격(origin)에 강제로 반영**하고자 할 때  
- 충돌 발생 시 또는 **로컬이 더 최신**일 경우  
- 무분별한 덮어쓰기를 피하고 **안전하게 강제 Push** 수행

---

## 🔐 1. `--force-with-lease` 방식이란?

| 명령어                        | 설명                                                                    |
|-------------------------------|-------------------------------------------------------------------------|
| `git push`                    | 기본 푸시. 충돌 발생 시 실패                                           |
| `git push --force`            | 무조건 덮어쓰기 (⚠️ 다른 사람 작업 삭제 위험)                            |
| `git push --force-with-lease` | 원격 HEAD가 로컬이 마지막으로 pull한 시점과 **같을 때만** 강제 Push 가능   |

- 협업 또는 다중 기기 환경에서 **안전한 강제 푸시** 방법  
- 원격 브랜치가 예기치 않게 바뀌면 푸시가 실패 → **다른 작업 덮어쓰기 방지**

---

## 💡 2. 사용 예시: 충돌 후 강제 Push

```bash
# 1) 로컬 변경사항 커밋
git add .
git commit -m "fix: 내용 반영"

# 2) 기본 푸시 시도 (충돌 발생 시 실패)
git push origin main

# 3) 실패 시 안전한 강제 푸시
git push --force-with-lease origin main
```

---

## ❌ 3. `--force-with-lease` 실패 상황 및 해결

### 실패 원인
- 원격의 HEAD가 **로컬이 마지막으로 pull한 시점**과 다르면 푸시 실패  
- 주로 다른 기기 또는 동료가 이미 Push한 경우

---

### 대응 A: 충돌 해결하며 재정렬 (기존 커밋 유지)

```bash
git pull --rebase origin main    # 원격 및 내 커밋 순서 정리
# 충돌 해결 후
git push origin main             # 다시 푸시
```

---

## 🧾 4. 전체 명령어 흐름 요약

```bash
# [1] 커밋
git add .
git commit -m "fix: 내용 반영"

# [2] 기본 푸시
git push origin main

# [3] 충돌 발생 시 안전한 강제 푸시
git push --force-with-lease origin main

# [4] 그래도 실패하면
git pull --rebase origin main           # → 충돌 해결 후 푸시
# 또는
git fetch origin
git push --force-with-lease origin main # → 다시 강제 푸시
```

---
