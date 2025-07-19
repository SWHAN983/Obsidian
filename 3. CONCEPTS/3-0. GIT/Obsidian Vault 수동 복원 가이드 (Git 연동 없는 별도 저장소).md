  

# 🔁 Obsidian Vault 백업 브랜치 복원 매뉴얼 (GitHub → 로컬)

  

> `Obsidian-Backup` 저장소의 특정 백업 브랜치를 로컬 Vault로 복원하는 간단 절차

  

---

  

## ✅ 전제 조건

  

- 백업 저장소: `https://github.com/SWHAN983/Obsidian-Backup.git`

- 복원할 브랜치명: `backup-YYYY-MM-DD-HHMM`

- 현재 로컬 Vault의 변경사항은 `stash` 또는 `commit`으로 보존할 것

  

---

  

## 🪜 복원 절차

  

```bash

# 1. Vault 디렉토리 이동

cd /d/HSW/Obsidian

  

# 2. 로컬 변경사항 저장 (선택)

git stash push -m "🛑 복원 전 상태 저장"

  

# 3. 원격 저장소를 백업 저장소로 전환

git remote set-url origin https://github.com/SWHAN983/Obsidian-Backup.git

  

# 4. 백업 브랜치 목록 가져오기

git fetch origin

  

# 5. 복원 브랜치로 체크아웃 (로컬에 새 브랜치 생성)

git checkout -b restore-from-backup origin/backup-YYYY-MM-DD-HHMM

  

# 6. 해당 백업 상태로 강제 초기화

git reset --hard

```

  

---

  

## 🔄 원래 저장소로 복귀 (선택)

  

```bash

git remote set-url origin https://github.com/SWHAN983/Obsidian.git

git checkout main

git pull origin main

```

  

---

  

## 📝 참고

  

- 복원된 상태를 그대로 유지할 수도 있고, main 브랜치에 병합 가능

- `git stash pop`으로 복원 이전 상태의 변경 내용 적용 가능

- 상태 확인: `git status`, 로그 확인: `git log --oneline`