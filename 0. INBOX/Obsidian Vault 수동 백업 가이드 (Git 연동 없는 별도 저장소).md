# 🧷 Obsidian Vault 수동 백업 가이드 (Git 연동 없는 별도 저장소)

  

## ✅ 목적

- 평소 사용하는 Vault는 Git 연동되어 있으나,

- 원할 때 현재 상태를 수동으로 다른 GitHub 저장소(`Obsidian-Backup`)에 백업

- 각 백업본은 날짜별 브랜치로 저장해 스냅샷처럼 보존

  

---

  

## 📁 디렉토리 예시

  

```

D:/HSW/

├─ Obsidian/                    # 평소 사용하는 Vault

└─ Obsidian_Backup_2025-07-19/     # 이번 백업본

```

  

---

  

## 🪜 전체 백업 절차

  

### 1️⃣ Vault 복사

  

```bash

cd /d/HSW

cp -r Obsidian Obsidian_Backup_2025-07-19

```

  

---

  

### 2️⃣ 복사한 폴더로 이동

  

```bash

cd Obsidian_Backup_2025-07-19

```

  

---

  

### 3️⃣ Git 초기화 및 원격 레포 설정

  

```bash

git init

git remote add origin https://github.com/SWHAN983/Obsidian-Backup.git

```

  

> 💡 GitHub에서 `Obsidian-Backup`라는 빈 저장소를 먼저 생성해 둘 것

  

---

  

### 4️⃣ 날짜 기반 브랜치 생성

  

```bash

git checkout -b backup-2025-07-19

```

  

---

  

### 5️⃣ 전체 파일 커밋

  

```bash

git add .

git commit -m "📦 Vault 백업: 2025-07-19"

```

  

---

  

### 6️⃣ GitHub에 푸시

  

```bash

git push -u origin backup-2025-07-19

```

  

---

  

## 📌 결과

  

GitHub에는 이렇게 관리됨:

  

```

main                  # 기본 브랜치

backup-2025-07-19        # 오늘 백업

backup-YYYY-MM-DD     # 다음 백업일

...

```

  

---