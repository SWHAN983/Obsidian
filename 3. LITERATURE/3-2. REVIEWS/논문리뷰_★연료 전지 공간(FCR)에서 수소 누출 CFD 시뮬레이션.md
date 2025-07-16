---
title: "Safe Design of a Hydrogen-Powered Ship: CFD Simulation on Hydrogen Leakage in the Fuel Cell Room"
authors: Wenfeng Guan, Ju Chen
year: "2023"
journal: Journal of Marine Science and Engineering
tags:
  - 논문리뷰
  - 수소
  - 누출
  - CFD
created: 2025-07-16
---
#  PDF 파일  

[[★Safe Design of a Hydrogen-Powered Ship CFD Simulation on Hydrogen Leakage in the Fuel Cell Room.pdf]]

---

# 1. 왜 이 논문을 읽었는가?
> - 내 연구와의 연관성
> - 참고 목적 (개념/방법/결과 등)

- 수소 누출이라는 점과 CFD 활용이 내 논문과 결이 맞다고 생각해서 논문의 방향성의 힌트를 얻기 위해 
- 어디에서 수소가 누출되는가?
- 어떤 조건에서 수소가 누출되는가?
- 수소가 누출될 때 어떤 파라매터를 고려했는가?
- 어떤 값을 모니터링 했는가?
- 어떤 값을 가지고 결론을 도출하였는가?

---

# 2. 핵심 요약

## 방법

### 연료전지실 치수 및 환경 조건

| 항목          | 값                                          |
| ----------- | ------------------------------------------ |
| 길이 (Length) | 6,500 mm                                   |
| 너비 (Width)  | 3,200 mm                                   |
| 높이 (Height) | 2,000 mm                                   |
| 환경 온도       | 15 °C                                      |
| 대기압         | 101,325 Pa                                 |
| 열복사 고려 여부   | 0 W                                        |
| 환기 시스템      | Natural inlet + 기계식 배기 (5000 m³/h, 390 Pa) |
| CFD 그리드 해상도 | 0.1 m (고정 격자)                              |

- **누출 직경**: 1mm, 3mm, 5mm, 10mm
- **누출 방향**: 5가지 시나리오
- **평가 지표**:
    - 수소 농도 0.8%, 1.6% 도달 시간
    - 가연성 가스 구름의 형성 및 확산
    - 모니터링 지점에서의 알람 트리거 시점

## 결과
- - **파이프 직경이 작을수록 안전성 향상**:
    - **내경 ≤ 3mm**인 경우: **가연성 가스 폭발 위험 없음**
    - **내경 = 10mm**인 경우: **누출 6초 이내에 대부분 위치에서 농도 4.0% 초과**
- **경보 시스템 영향 요소**:
    - 누출 **직경**은 **경보 발생 위치**에 영향 없음
    - 그러나 **누출 방향**과 **장애물 위치**는 영향 가능

- 따라서, **감지기 위치 최적화** 및 **파이프 직경 제한**이 안전 설계에 핵심적임


---

# 3. 그림/표 요약 (중요 페이지만)
`![[<논문파일.pdf>#page=페이지번호]]`

![[Pasted image 20250716141529.png]]
- 수소 누출 ETA 


---

# 4. 참고할 개념/기법
>  [[★Safe Design of a Hydrogen-Powered Ship CFD Simulation on Hydrogen Leakage in the Fuel Cell Room.pdf#page=2&selection=34,0,36,37|수소 FGC 폭발 위험은 기관실 또는 연료전지실(FCR)에 위치한 수소 가스 공급 시스템(HGSS)을 포함한 밀폐되거나 제한된 공간에서 크게 증가할 것으로 예상]]
- 

---

# 5. 내 연구에 적용할 점
> - 실제 사용할 것
- 

> - 응용 계획
- 

> - 추가로 필요한 검토사항
- 


---
# 6. 비판/한계/의심점
> - 불분명한 점
- 

>- 설계상의 한계
- 

> - 나와 다른 조건
- 

---

# 7. 후속 작업 메모
- [ ] 
- [ ] 
- [ ] 

---
