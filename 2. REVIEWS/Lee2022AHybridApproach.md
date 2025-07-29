---
title: A Hybrid Approach for Quantitative Analysis of Fire Hazards in Enclosed Vehicle Spaces on Ro-ro Passenger Ships
authors:
  - Sang-Soo Lee, Ho-Jun Park, Kyung-Bin Kim
year:
  - "2022"
journal: Fire Technology
APA Citation: Lee, S. S., Park, H. J., & Kim, K. B. (2022). A hybrid approach for quantitative analysis of fire hazards in enclosed vehicle spaces on ro-ro passenger ships. *Fire Technology, 58*, 325–348.
DOI: 10.1007/s10694-021-01151-4
원본 파일: "[[A Hybrid Approach for Quantitative Analysis of Fire Hazards in Enclosed Vehicle Spaces on Ro-ro Passenger Ships.pdf]]"
created: 2025-07-29
tags:
  - paper
  - toread
  - fire
  - risk
  - assessment
  - ro-ro
  - ship
  - maritime
  - safety
  - vehicle
  - deck
  - hybrid
  - model
  - quantitative
  - analysis
  - CFD
  - simulation
  - Bayesian
  - network
  - SOLAS
---

# 3줄요약
이 논문은 로로 여객선의 폐쇄형 차량 공간에서 발생할 수 있는 화재 위험을 정량적으로 평가하기 위한 하이브리드 접근법을 제안한다. CFD 시뮬레이션과 베이지안 네트워크 기반의 화재 전이 모델을 결합하여 화재 확산 및 피해 가능성을 효과적으로 분석하였다. 해당 방법론은 선박 안전 설계와 규정 개정에 유용한 실증적 기준을 제공한다.

# 연구 질문 및 가설
- 폐쇄된 차량 공간에서 발생할 수 있는 차량 화재 위험은 어떻게 정량적으로 평가할 수 있는가?
- CFD 기반 열전달 해석과 베이지안 네트워크 기반 불확실성 모델을 통합하면 기존 방식보다 정밀한 분석이 가능한가?
- 하이브리드 접근법은 Ro-Ro 여객선의 화재 안전 설계에 실질적으로 기여할 수 있는가?

# 상세 요약

### Introduction
- Ro-ro 여객선은 화재에 취약한 구조로, 최근 사고 증가에 따라 선박 화재 안전이 주요 이슈로 부상.
- 기존 규정(SOLAS)은 화재 위험을 정량적으로 다루지 못하며, 설계 기반이 부족함.
- 본 연구는 CFD와 베이지안 네트워크를 통합한 하이브리드 모델을 제시하여, 차량 공간에서의 화재 위험을 정량화함.

### Research Methodology
- 차량에서 발화된 화재가 인접 차량 및 구조물로 확산되는 시나리오 구성.
- CFD 시뮬레이션은 열전달, 가시거리, 온도, 열복사 강도 등을 평가.
- 베이지안 네트워크는 화재 시나리오의 발생 확률 및 상호 연계를 모델링.
- 두 접근법을 통합해 정량적 위험도 분석 및 확률 기반 피해 예측 수행.

### Case Study
- Ro-ro 여객선 차량 덱에 다양한 차량 유형(화물차, 승용차 등)을 배치한 시뮬레이션 수행.
- 차량 간 간격, 덱의 밀폐도, 통풍 조건 등에 따른 화재 확산 경향 분석.
- 화재 피해 면적, 시간, 치명도 등을 베이지안 네트워크로 평가.

### Results
- 차량 간 간격이 좁고, 환기 상태가 불량할수록 화재 확산 속도 및 범위가 증가함.
- CFD 시뮬레이션 결과는 베이지안 모델 입력값으로 정량화되어, 보다 현실적인 확률 예측 가능.
- 제안된 하이브리드 방법은 기존 규정 대비 명확하고 실용적인 기준 제공 가능성 입증.

# 연구 방법론
- 열전달 해석: Fire Dynamics Simulator(FDS) 활용, 차량 화재 온도/가시거리/복사열 측정.
- 불확실성 모델링: 베이지안 네트워크를 통한 원인-결과 연계 및 시나리오 기반 확률 분석.
- 시뮬레이션 조건: 실제 Ro-ro 여객선 크기, 구조 기반의 실험 설계.
- 통합 분석: CFD 결과를 베이지안 네트워크로 전환하여 전반적 피해 확률 도출.

# 주요 그림 및 표 분석

## Figure 1: Ro-ro 여객선 차량 덱 레이아웃
- 시뮬레이션 모델로 사용된 실제 덱 구조를 시각화함.
- 차량 간 간격, 벽체 및 통풍 시스템 위치 명시.

## Figure 3: CFD 시뮬레이션 결과(온도 및 가시거리 분포)
- 화재 중심에서 주변으로의 온도 및 시계 변화 시각화.
- 특정 조건에서 3분 이내 치명적 가시거리 도달.

## Table 2: 화재 시나리오별 확산 시간 비교
- 차량 간 거리 및 통풍 유무에 따라 최대 4배까지 화재 확산 속도 차이 발생.

## Figure 5: 베이지안 네트워크 모델
- 차량 화재 발생 확률, 연쇄 확산 경로, 구조물 피해 가능성 등을 포함한 확률 모델.

## Table 4: 위험도 정량 평가 결과
- 시나리오별 피해 면적, 인명 피해 확률 등 수치 제공.

# 한계점 및 향후 연구 제언
- **한계점**:
  - CFD 및 베이지안 네트워크의 정확도는 입력 데이터에 의존하므로, 실선(real ship) 자료 부족이 오차 원인이 될 수 있음.
  - 동적 변수(예: 바람, 기울기 등)의 반영이 미흡.
- **향후 연구**:
  - 실제 Ro-ro 선박 데이터 기반 보정 및 실시간 시뮬레이션 가능성 검토.
  - 선박 설계 시 자동 리스크 평가 시스템으로의 통합 가능성 탐색.
  - 대규모 사고 분석을 위한 다중 덱 및 다양한 차량 배열 실험 확대.

# 핵심 개념
- [[fire risk assessment]]
- [[CFD simulation]]
- [[Bayesian network]]
- [[ro-ro passenger ship]]
- [[vehicle deck fire safety]]
- [[FDS]]
- [[SOLAS]]
- [[probabilistic modeling]]
- [[hazard quantification]]
- [[maritime accident prevention]]

# 인용 예시
- 본 논문은 CFD와 베이지안 네트워크를 결합한 하이브리드 모델을 통해 Ro-ro 선박 차량 공간의 화재 위험을 정량적으로 평가하였다 (Lee et al., 2022).
- 차량 간 간격과 환기 조건은 화재 확산 속도에 결정적인 영향을 미친다 (Lee et al., 2022).
- CFD 시뮬레이션 결과는 베이지안 모델의 입력값으로 활용되어 예측 정밀도를 향상시켰다 (Lee et al., 2022).
- 기존 SOLAS 규정은 정량적 기준이 부족하여 설계 시 해석적 판단이 어렵다는 한계를 지닌다 (Lee et al., 2022).
- 제안된 방법은 차량 화재에 의한 구조물 피해 면적을 시나리오별로 수치화할 수 있다 (Lee et al., 2022).
- 본 연구는 선박 설계 단계에서의 위험도 기반 설계(Performance-based Design)를 가능하게 한다 (Lee et al., 2022).
- 베이지안 네트워크는 화재 시나리오 간 상호작용 및 연계 가능성을 명확히 보여준다 (Lee et al., 2022).
- 시뮬레이션 결과는 향후 SOLAS 개정 시 정량적 근거로 활용 가능하다 (Lee et al., 2022).
- CFD 모델링은 차량 내부 열축적 및 복사열 분포를 정밀하게 분석할 수 있는 도구임을 입증하였다 (Lee et al., 2022).

# 나의 생각 및 비평
