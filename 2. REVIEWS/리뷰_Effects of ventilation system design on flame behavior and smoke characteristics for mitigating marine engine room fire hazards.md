---
title: Effects of ventilation system design on flame behavior and smoke characteristics for mitigating marine engine room fire hazards
authors: Yanlong Liu, Xiaodong Fu, Kuo-Ching Tseng, Dongfang Zhou, Xinyu Xie
year: "2023"
journal: Journal of Loss Prevention in the Process Industries
APA Citation: Liu, Y., Fu, X., Tseng, K.-C., Zhou, D., & Xie, X. (2023). Effects of ventilation system design on flame behavior and smoke characteristics for mitigating marine engine room fire hazards. *Journal of Loss Prevention in the Process Industries, 83*, 105065.
DOI: 10.1016/j.jlp.2023.105065
원본 파일: "[[Effects of ventilation system design on flame behavior and smoke characteristics for mitigating marine engine room fire hazards.pdf]]"
created: 2025-07-29
tags:
  - paper
  - toread
  - ventilation
  - engine room
  - fire dynamics
  - smoke movement
  - CFD simulation
  - fire suppression
  - flame behavior
  - marine safety
---

# 3줄요약
- 해양 엔진룸에서의 화재 확산과 연기 움직임은 환기 설계에 크게 영향을 받는다.
- CFD 시뮬레이션을 통해 수평 급기 + 상단 배기가 화염 전파 억제 및 연기 희석에 가장 효과적임을 입증하였다.
- 환기 시스템 최적화는 화재 초기 대응력 및 선박 안전성 향상에 핵심적인 요소이다.

# 연구 질문 및 가설
- 해양 엔진룸 화재 상황에서 환기 시스템의 급기 방향 및 배기 위치가 화염 전파 및 연기 특성에 어떤 영향을 미치는가?

# 상세 요약

### Introduction
- 해양 엔진룸은 밀폐된 공간으로, 화재 발생 시 화염 확산과 유해 연기 축적 문제가 심각함.
- 현재 SOLAS는 환기와 관련된 구체적 설계 지침이 미흡함.
- 이 연구는 환기 설계의 화재 안전 효과를 CFD로 규명하고자 함.

### Methodology
- OpenFOAM 기반 LES 시뮬레이션 사용.
- 4가지 환기 시나리오 비교:
  1) 상단 급기 + 상단 배기
  2) 상단 급기 + 하단 배기
  3) 하단 급기 + 상단 배기
  4) 하단 급기 + 하단 배기
- 초기 점화 위치, 연료 스프레이 방향 동일하게 설정.

### Results
- 수평 방향의 하단 급기 + 상단 배기 조합이 가장 효과적.
- 상단 배기 구조는 연기 상승을 원활하게 하여 가시거리 확보 및 유해가스 제거 효과 우수.
- 수직 급기는 불완전 연소 확률 증가시킴.
- 화염은 공기 흐름을 따라 확산되므로, 잘못된 급기 위치는 위험 확대 가능.

### Discussion
- 연기 온도 분포와 흐름 속도, 농도 분석을 통해 환기 설계 효과 정량화.
- 실험 결과와 정합성이 높은 시뮬레이션 결과 확보.

# 연구 방법론
- 해양 엔진룸 축소 모델을 기반으로 한 CFD(LES) 시뮬레이션 수행.
- 4가지 환기 설계(급기/배기 위치 조합)에 따른 화염 전파, 연기 확산, 농도 변화를 비교 분석.
- 온도, 가시거리, 연기 밀도, 유해 가스 농도 등의 물리 변수 측정.

# 주요 그림 및 표 분석
![[Pasted image 20250729153937.png]]

![[Pasted image 20250729153926.png]]



## Fig. 3: 환기 구성 시나리오 다이어그램
- 각 조합의 급기/배기 위치 명확히 구분됨.
- 하단 급기 + 상단 배기 구성에서 공기 흐름의 안정성 우수.

## Fig. 6: 화염 전파 시뮬레이션 결과 (시간대별)
- 상단 급기일수록 화염이 공기 흐름 따라 빠르게 상승함.
- 하단 급기 조합은 비교적 수평 확산을 억제함.

## Fig. 10: 연기 온도 및 농도 분포도
- 상단 배기일수록 고온 연기 제거 효과 높음.
- 하단 배기는 연기 축적을 유도하여 가시성 및 안전성 저하.

# 한계점 및 향후 연구 제언

- 한계점:
  - 실제 엔진룸과는 구조 차이가 있는 축소 모델 기반.
  - 연료 종류, 점화 위치 등 변수는 제한적임.

- 향후 제언:
  - 다양한 엔진룸 구조 및 선박 유형에 대한 환기 시뮬레이션 확대 필요.
  - 연료 종류, 누유량에 따른 복합적 영향 분석이 요구됨.
  - 화재 감지기 및 소화기와 환기 설계의 통합적 최적화 방안 연구 필요.

# 핵심 개념
- [[Ventilation Design]]
- [[Flame Behavior]]
- [[Smoke Movement]]
- [[CFD Simulation]]
- [[LES Model]]
- [[Hot Gas Layer]]
- [[Horizontal Air Supply]]
- [[Upper-level Exhaust]]
- [[Visibility during Fire]]
- [[Marine Fire Safety]]

# 인용 예시
- 엔진룸 화재 시 연기 및 화염의 이동 경로는 환기 시스템의 설계에 결정적으로 좌우된다 (Liu et al., 2023).
- 상단 배기와 하단 급기의 조합은 연기 제거와 화염 억제 측면에서 가장 효과적이었다 (Liu et al., 2023).
- CFD 시뮬레이션은 실제 화재 실험과 유사한 연기 확산 경향을 보여주었다 (Liu et al., 2023).
- 수직 방향 급기는 불완전 연소를 유도하여 연기 및 유해가스 농도가 높아졌다 (Liu et al., 2023).
- 수평형 환기 흐름은 화염을 한정된 영역에 고정시키는 데 유리하였다 (Liu et al., 2023).
- 상단 배기 시스템은 고온 연기를 신속하게 제거하여 선원의 대피 시간을 확보해준다 (Liu et al., 2023).
- 환기 설계는 단순한 통풍 목적이 아니라 화재 진압과 직접 연결된 핵심 안전 설계 요소이다 (Liu et al., 2023).
- 시뮬레이션에 사용된 LES 모델은 복잡한 난류 특성을 정밀하게 반영할 수 있었다 (Liu et al., 2023).
- 적절한 급기 위치는 화염의 수평 전파를 방지하고 연소 구역 국소화를 유도하였다 (Liu et al., 2023).
- 향후 연구는 엔진룸 형상과 연료 특성을 반영한 다변량 시뮬레이션이 필요하다 (Liu et al., 2023).

# 나의 생각 및 비평
