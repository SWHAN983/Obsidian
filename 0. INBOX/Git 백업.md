# 🧷 Obsidian Vault 수동 백업 가이드 (연동되지 않은 다른 레포지토리로)

## 📌 목적

- 평소 사용하는 Obsidian Vault는 Git과 연동되어 있음 (`메인 레포지토리`)
- 하지만 원할 때 수동으로 별도 GitHub 레포 (`Obsidian-Backup` 등)에 백업하고 싶음
- 이 백업은 **현재 시점의 전체 Vault 상태를 보존**하는 데 목적이 있음

---

## 🪜 단계별 절차

### 1️⃣ Vault 폴더 전체 복사 (예: 날짜 붙이기)

```bash
cp -r ./ ./../Obsidian_Backup_2025-07-19
```


### 2️⃣ 복사한 폴더로 이동 후 Git 초기화

```
cd ../Obsidian_Backup_2025-07-19
git init
git remote add origin https://github.com/SWHAN983/Obsidian-Backup.git
git add .
git commit -m "📦 Vault 백업: 2025-07-19"
git push -u origin main
```

> GitHub에 `Obsidian-Backup`라는 빈 저장소를 **미리 만들어둡니다**


---

## 🔁 날짜별로 백업하고 싶다면?
```
git checkout -b backup-2025-07-20 git add . git commit -m "🕒 2025-07-20 백업" git push -u origin backup-2025-07-20
```

> 브랜치를 `backup-날짜`로 따로 만들면, GitHub에서 날짜별 버전 관리가 쉬워짐

---

## 💬 주의사항

- 이 방식은 **정기 백업이나 수동 스냅샷에 적합**
    
- Git을 따로 연동하지 않고 백업만 하고 싶을 때 매우 안전한 방법
    
- `.gitignore` 주의: `.obsidian/` 폴더도 백업하려면 `.gitignore` 확인