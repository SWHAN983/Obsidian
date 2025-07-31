  

# 🧷 Obsidian Vault 수동 백업 & 복귀 자동화 메뉴얼 (날짜 자동)

  

> Vault를 `Obsidian` 저장소와 연동하다가, 수동 백업 시 자동으로 날짜가 붙은 브랜치로 `Obsidian-Backup`에 푸시하고, 다시 원래 저장소로 복귀하는 절차

  

---

  

## ✅ 목적

  

- **주 저장소:** `https://github.com/SWHAN983/Obsidian.git`

- **백업 저장소:** `https://github.com/SWHAN983/Obsidian-Backup.git`

- **기능 확장:** 날짜·시간 기반 브랜치명 자동 생성 (`backup-YYYY-MM-DD-HHMM`)

  

---

  

## 🪜 전체 절차

  

### 📍 A. 평소 Vault → 백업 저장소로 전환하고 푸시

  

```bash

cd /d/HSW/Obsidian

  

# 현재 시각을 변수로 저장 (예: 2025-07-19-2218)

export NOW=$(date +%Y-%m-%d-%H%M)

  

# 1. 원격 저장소를 백업용으로 전환

git remote set-url origin https://github.com/SWHAN983/Obsidian-Backup.git

  

# 2. 날짜 기반 브랜치 생성

git checkout -b backup-$NOW

  

# 3. 전체 파일 커밋 (변경 있을 경우)

git add .

git commit -m "📦 Vault 백업: $NOW"

  

# 4. GitHub에 푸시

git push -u origin backup-$NOW

```

  

---

  

### 📍 B. 백업 완료 후 → 원래 Vault 저장소로 복귀

  

```bash

cd /d/HSW/Obsidian

  

# 원격 저장소를 원래 주소로 복귀

git remote set-url origin https://github.com/SWHAN983/Obsidian.git

  

# 메인 브랜치 복귀 (필요 시)

git checkout main



# 최신 상태로 동기화

git pull origin main

```

  

---

  

## 📁 디렉토리 구조 예시

  

```

D:/HSW/

├─ Obsidian/                      # 작업용 Vault

└─ Obsidian_Backup_YYYY-MM-DD/   # 수동 복사 백업 (선택)

```

  

---

  

## 📌 GitHub 저장소 구조 예시

  

```

SWHAN983/

├─ Obsidian/                     # 평상시 main 브랜치로 사용

└─ Obsidian-Backup/              # 백업 저장소

    ├─ backup-2025-07-19-1030

    ├─ backup-2025-07-26-2100

    └─ ...

```

  

---

  

## 🛠 자동화 스크립트 (선택)

  

```bash

#!/bin/bash

cd /d/HSW/Obsidian

NOW=$(date +%Y-%m-%d-%H%M)

  

git remote set-url origin https://github.com/SWHAN983/Obsidian-Backup.git

git checkout -b backup-$NOW

git add .

git commit -m "📦 Vault 백업: $NOW"

git push -u origin backup-$NOW

  

git remote set-url origin https://github.com/SWHAN983/Obsidian.git

git checkout main

git pull origin main

```

  

> 🟢 `backup.sh`로 저장 후 Git Bash에서 실행 가능