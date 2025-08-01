---
title: Numerical Study on Ammonia Dispersion and Explosion Characteristics in Confined Space of Marine Fuel Preparation Room
authors:
  - Phan Anh Duong
  - Jin-Woo Bae
  - Changmin Lee
  - Dong Hak Yang
  - Hokeun Kang
year:
  - "2025"
journal: Journal of Marine Science and Engineering
APA Citation: Duong, P. A., Bae, J.-W., Lee, C., Yang, D. H., & Kang, H. (2025). Numerical Study on Ammonia Dispersion and Explosion Characteristics in Confined Space of Marine Fuel Preparation Room. *Journal of Marine Science and Engineering, 13*(7), 1235. https://doi.org/10.3390/jmse13071235
DOI: 10.3390/jmse13071235
원본 파일: "[[Numerical Study on Ammonia Dispersion and Explosion Characteristics in Confined Space of Marine Fuel Preparation Room.pdf]]"
created: 2025-08-01
tags:
  - paper
  - toread
  - ammonia
  - marine
  - fuel
  - explosion
  - modeling
  - CFD
  - risk
  - assessment
  - ventilation
  - dispersion
  - analysis
  - safety
  - engineering
  - TNO
  - model
---

# 3줄요약
- 이 논문은 선박 연료 준비실과 같은 밀폐된 해양 공간에서 발생할 수 있는 암모니아 누출과 폭발 특성을 수치 해석적으로 분석하였다.  
- FLACS-CFD를 활용해 다양한 누출 방향과 조건에서의 확산 및 폭발 거동을 모델링하고, TNO ME 방법과 비교하여 폭발 강도를 평가하였다.  
- 연구 결과는 선박 내 암모니아 연료 시스템의 안전 설계와 긴급 대응 방안을 개선하는 데 중요한 기초 자료를 제공한다.  

# 연구 질문 및 가설
- 밀폐된 해양 연료 준비실 내에서 암모니아가 누출되었을 때, 어떤 확산 및 폭발 특성을 보이며, 누출 방향, 환기 조건, 구조물 배치 등이 이러한 거동에 미치는 영향은 무엇인가?
- TNO Multi-Energy 모델과 CFD 시뮬레이션 결과는 실제 폭발 영향 예측에 있어 얼마나 일치하며, 안전 거리 산정에 어떤 기준을 제공할 수 있는가?

# 상세 요약

### Introduction
- 해운 산업의 탈탄소화를 위한 암모니아 연료 도입은 높은 수소 밀도와 저장 안정성 측면에서 유리하나, 독성 및 폭발 위험성도 높음.
- 기존 연구는 확산이나 연소 거동에 국한되어 있으며, 해양 환경에 특화된 안전 분석은 부족.

### Physicochemical Properties of Ammonia
- 암모니아는 체적 수소 밀도가 높고, 비교적 낮은 인화성 범위를 가지며, 높은 착화 온도(651°C)를 가짐.
- 높은 독성과 부식성으로 인해 누출 시 인명 및 환경 피해 가능성이 큼.

### Simulation Setup
- FLACS-CFD V22.2를 사용하여 선박 연료 준비실(FPR)의 3D 모델을 구성하고, +X, -X, +Y, -Y, +Z 방향으로의 누출 시나리오를 설정.
- Realizable k-ε 난류 모델 채택, 0.1m 격자 크기로 수렴성 확보.

### Dispersion Analysis
- 누출 방향에 따라 확산 범위, 농도 분포, 센서 감지 시간 등이 크게 달라짐.
- −Y 방향은 환기 흐름과 반대이며, 장비 배치로 인해 가스가 정체되어 위험성이 가장 높음.

### Explosion Modeling
- 가연성 범위 내의 암모니아-공기 혼합 가스를 점화시켜 폭발 시나리오를 구성.
- TNO Multi-Energy 방법과 CFD를 비교하여, 폭발 강도 레벨 5가 실제 상황에 가장 근접한 결과를 제공함.

# 연구 방법론
- 실제 선박 구조를 기반으로 한 3D 공간 모델링 및 CFD 시뮬레이션.
- 다중 감지점(Monitoring Points)을 통한 농도 및 압력 시간 추적.
- 폭발 영향 분석을 위한 TNO ME 모델과 비교 실험.
- 폭발 영향 범위: 20kPa, 30kPa, 50kPa, 100kPa 기준으로 인명 및 구조물 피해 분석.

# 주요 그림 및 표 분석

## Figure 5: Ammonia dispersion in FPR according to time release
- 누출 방향과 시간에 따른 가스 확산 형태를 시각화.
- 초기에는 우산형, 이후에는 원뿔형으로 확산됨. 구조물에 의해 정체되는 경향 확인.

## Table 5: Changing of mole fuel fraction of ammonia release
- 다양한 누출 방향에 따른 농도 변화 및 감지 시간 정리.
- −Y 방향의 확산이 가장 느리고 오래 지속됨.

## Figure 7: 3D Mole fraction of ammonia with leak rate
- 누출 속도(0.1~10.0 kg/s)에 따른 농도 분포 시각화.
- 누출 속도가 높을수록 FPR 전체에 고농도 가스 분포가 확대됨.

## Figure 9: Explosion rate of ammonia according to time release
- 점화 후 시간에 따른 온도 및 폭발 파동 분포.
- 1.675초 내 최대 충격 영역은 폭발점에서 반경 10m 이내에 집중됨.

# 한계점 및 향후 연구 제언
- 저자 언급 한계점:
  - 단일 반응 단계 모델 사용으로 실제 화학 반응 복잡성 반영 한계
  - 균일 혼합물 및 이상적 점화 조건 가정
  - 장비 및 구조물의 세부 모델링 미포함
- 향후 연구 방향:
  - NOx 생성 포함한 다단 반응 모델 통합
  - 실험적 검증 통한 시뮬레이션 보완
  - 이중점화/지연 점화 상황에 대한 분석

# 핵심 개념
- [[Ammonia Fuel]]
- [[FLACS-CFD]]
- [[TNO Multi-Energy Method]]
- [[Vapor Cloud Explosion (VCE)]]
- [[Fuel Gas Supply System (FGSS)]]
- [[Overpressure Threshold]]
- [[Realizable k-ε Turbulence Model]]
- [[Boiling Liquid Expanding Vapor Explosion (BLEVE)]]
- [[Laminar Burning Velocity]]
- [[Explosion Risk Assessment]]

# 인용 예시
- 암모니아는 선박 탈탄소화를 위한 유망한 연료이지만, 높은 독성과 폭발 가능성으로 인해 엄격한 위험 관리가 필요하다 (Duong et al., 2025).
- 밀폐된 공간 내에서는 환기 흐름과 구조물 배치가 암모니아 확산과 축적에 큰 영향을 미친다 (Duong et al., 2025).
- 시뮬레이션 결과, 누출 방향이 환기 흐름 반대일 경우 정체 및 고농도 영역이 형성된다 (Duong et al., 2025).
- FLACS-CFD를 이용한 수치 해석은 해양 연료 준비 공간에서의 폭발 영향을 정확히 예측할 수 있다 (Duong et al., 2025).
- TNO ME 모델은 보수적 경향이 있으나, 폭발 레벨 5 적용 시 CFD 결과와 유사한 정확도를 보여준다 (Duong et al., 2025).
- 폭발 후 1.675초 내 치명적 영향 범위는 10m 이내로 제한되나, 경상 해역은 전체 실 공간으로 확대된다 (Duong et al., 2025).
- 구조물 인접 영역은 압력 증폭 효과로 인해 폭발 시 더욱 위험하다 (Duong et al., 2025).
- 암모니아 확산은 장비 뒤편, 모서리, 환기 사각지대에 정체되기 쉬워 조기 탐지와 설계가 중요하다 (Duong et al., 2025).
- 누출량이 증가할수록 가스 확산 범위 및 인체 위해 범위가 급격히 확장된다 (Duong et al., 2025).
- 실제 적용을 위해서는 시뮬레이션 결과에 기반한 안전 구역 설정 및 구조 강화 방안이 병행되어야 한다 (Duong et al., 2025).

# 나의 생각 및 비평

![[Excalidraw/Drawing 2025-08-01 19.10.39.excalidraw]]




