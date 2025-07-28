---
created: 2025-07-18
tags:
  - CONCEPT
---
### 이 노트는 [[MOC_졸업논문]] 내 특정 챕터[[MOC_졸업논문#I. 서론]]와 연결되는 개념 정리용입니다.  
> 지침: 개념 간 연결은 단순 링크가 아닌, 의미 기반의 연결성을 명확히 드러내세요.  
---

## 🧩 개념 요약  

### 1. 대체 연료의 화재/폭발 위험성 및 평가 필요성 강조

#### 주요 대체 연료별 고유 위험성

- [[리뷰_The hazards and risks of hydrogen]]
    
    - 수소는 넓은 가연성 범위와 낮은 최소 점화 에너지로 인해 메탄, 휘발유보다 전반적으로 더 높은 리스크를 가집니다.
        
    - 화염이 눈에 보이지 않고, 고압 누출 시 온도가 상승하는 특성이 있습니다.
        
- [[Ha2007수소]]
    
    - 수소는 낮은 최소 점화 에너지(0.019mJ), 넓은 폭발 한계(4.0~75.0%), 빠른 화염 전파 속도(346 cm/s) 등 다른 연료에 비해 폭발 위험성이 높은 특성을 가집니다.
        
- [[Malik2021Ammonia]]
    
    - 수소는 저농도에서도 폭굉(DDT)이 발생하여 심각한 폭발 하중을 유발할 수 있습니다.
        
    - 수소, 암모니아, 메탄의 점화 에너지와 가연성 범위를 비교하며 연료별 위험 특성을 명확히 제시합니다.
        
- [[리뷰_EMSA_Potential of Ammonia as Fuel in Shipping]]
    
    - 암모니아는 인체에 치명적일 수 있는 심각한 독성 및 안전 문제를 가집니다.
        
- [[리뷰_Science and technology of ammonia combustion]]
    
    - 암모니아는 낮은 반응성, 높은 질소산화물(NOx) 배출 등의 연소 특성 한계를 가집니다.
        
- [[리뷰_Liquefied Natural Gas (LNG) Import Terminals Siting, Safety, and Regulation]]
    
    - LNG는 누출 시 풀 화재 및 밀폐 공간 폭발 위험이 있으며, 풀 화재가 가장 심각한 위험으로 간주됩니다.
        
- [[리뷰_Decarbonization in Shipping Industry A Review of Research, Technology Development, and Innovation Proposals]]
    
    - 수소의 누출 및 폭발 위험, 액화수소의 극저온 위험을 지적합니다.
        
    - 암모니아의 높은 독성과 부식성, 그리고 N₂O 배출이 탄소 감축 이점을 상쇄할 수 있는 잠재적 장벽임을 제시합니다.
        

#### 위험 평가 방법론의 필요성 및 적용

- [[리뷰_Overview of the DOE hydrogen safety, codes and standards program, part 3 Advances in research and development to enhance the scientific basis for hydrogen regulations, codes and standards]]
    
    - 수소 누출, 화염, 폭발 등 물리 현상을 정확히 예측하는 것이 안전 규정, 코드, 표준(RCS)의 핵심 근거임을 강조합니다.
        
    - 정량적 위험 평가(QRA)가 과학적이고 유연한 RCS 개발에 핵심적인 역할을 한다고 설명합니다.
        
- [[리뷰_PRS_SAFETY REQUIREMENTS FOR SHIPS USING LOW-FLASHPOINT GASES AS FUEL]]
    
    - 수소는 폭발 범위, 점화 에너지, 폭발 압력 및 속도 등 고유 위험성 때문에 "전반적인(Holistic) 위험 평가가 필수적"임을 명시합니다.
        
- [[리뷰_Quantitative risk assessment using a Japanese hydrogen refueling station model]]
    
    - QRA를 통해 수소충전소의 주요 위험이 "젯 화재"임을 밝히고, 개인 위험이 수용 기준을 초과함을 보여줍니다.
        
- [[리뷰_Risk assessment of hydrogen leakage in diesel hydrogenation process]]
    
    - 동적 베이즈 네트워크(DBN) 기반의 새로운 위험 평가 방법을 제안하며, 시간이 지남에 따라 누출 및 화재/폭발 확률이 크게 증가함을 분석합니다.
        

#### 기존 연료의 화재 위험 및 예측 (자연발화)

- [[리뷰_Experimental Study on the Hot Surface Ignition Characteristics and a Predictive Model of Marine Diesel in a Ship Engine Room]]
    
    - 해양 사고 화재/폭발의 약 63%가 엔진룸에서 발생하며, 주요 원인은 연료 누출과 고온 표면 접촉임을 지적합니다.
        
    - 고온 표면 온도가 778K 이상이 되면 해양 디젤유의 발화 확률이 100%임을 밝히며, 지능형 화재 예측 시스템 개발의 가능성을 제안합니다.
        

---

### 2. CFD 시뮬레이션의 적용 및 효과

#### CFD를 활용한 누출 확산 분석 및 안전 설계 검증

- [[리뷰_Hydrogen Dispersion and Ventilation Effects in Enclosures under Different Release Conditions]]
    
    - CFD 시뮬레이션을 통해 밀폐 공간 내 수소 방출 방식이 가스 분산에 미치는 영향을 검증합니다.
        
    - 적절히 설계된 기계식 환기 시스템이 수소 축적 위험을 효과적으로 완화할 수 있음을 제시합니다.
        
- [[리뷰_Safe Design of a Hydrogen-Powered Ship CFD Simulation on Hydrogen Leakage in the Fuel Cell Room]]
    
    - CFD 분석을 통해 누출 파이프 직경이 작을수록(3mm 이하) 폭발 위험이 없음을 확인하고, 직경 제한의 중요성을 강조합니다.
        
    - 환기 시스템의 '에어 트랩' 발생 가능성을 지적하고, 감지기 위치 최적화 방안을 권고합니다.
        
- [[리뷰_Safety investigation of hydrogen charging platform package with CFD simulation]]
    
    - CFD 시뮬레이션으로 밀집 공간 내 내부 누출이 외부 누출보다 위험하며, 자연 환기가 대규모 누출 시에는 한계가 있음을 보여줍니다.
        
- [[리뷰_Safety Design and Engineering Solution of Fuel Cell Powered Ship in Inland Waterway of China]]
    
    - 정량적 위험 평가와 최적화 설계를 통해 연료전지 공간을 '비위험 구역'으로 재분류하는 공학적 해결책을 제시합니다.
        
    - 이 과정에서 강화된 환기 시스템(시간당 90회) 등 CFD로 검증 가능한 설계가 핵심적인 역할을 합니다.
        

---

### 3. 안전 규제 및 설계 지침의 중요성

#### 탈탄소화 목표와 대체 연료 도입의 불가피성

- [[2023 IMO 온실가스 감축 전략]]
    
    - 2050년경 순 제로 GHG 배출량 달성을 목표로 하며, 이를 위해 제로 또는 거의 제로 GHG 배출 기술 및 연료의 도입이 필수적임을 명시합니다.
        
- [[리뷰_DNV_Maritime Forecast to 2050]]
    
    - IMO의 목표를 달성하기 위해 탄소 중립 연료로의 대규모 전환이 필수적이며, 신규 발주 선박의 약 49.5%가 대체 연료 능력을 갖추고 있음을 보여줍니다.
        
- [[리뷰_Greenhouse gas emissions from global shipping, 2013–2015]]
    
    - 에너지 효율 개선만으로는 배출량 감축에 불충분하며, 대체 연료 및 새로운 추진 개념의 개발과 배치가 필요함을 강조합니다.
        

#### 연료별 특성을 반영한 구체적인 안전 지침

- [[리뷰_KR_암모니아 연료선박에 대한 지침서]]
    
    - 암모니아의 치명적인 독성 때문에 기관실은 단일 고장으로 누출이 발생하지 않는 "'가스 안전 기관구역' 개념만 허용"됨을 강조합니다.
        
    - 위험 구역에 높은 수준의 환기(시간당 최소 30회)와 저농도(25 ppm) 가스 경보 및 자동 차단 시스템을 요구합니다.
        
- [[리뷰_KR_저인화점연료선박에 대한 지침서 (메탄올)]]
    
    - "단일 고장으로 인해 기관 구역으로 연료가 방출되어서는 안 된다"는 원칙을 강조하며, 시간당 최소 30회의 환기와 LEL 기반의 경보/작동 시스템을 요구합니다.
        
- [[리뷰_PRS_SAFETY REQUIREMENTS FOR SHIPS USING LOW-FLASHPOINT GASES AS FUEL]]
    
    - 수소의 환기 및 벤트 마스트 설계 시 CFD 분석을 통해 위치와 높이를 검증하여 안전한 확산을 보장해야 함을 언급합니다.
        

---

### 4. 연구의 한계 및 추가 논의 필요성

#### 모델링 및 분석의 불확실성과 한계

- [[리뷰_Liquefied Natural Gas (LNG) Import Terminals Siting, Safety, and Regulation]]
    
    - LNG 사고 분석 컴퓨터 모델이 대규모 실제 실험 데이터 부족으로 본질적인 불확실성을 가지며, 추가적인 대규모 안전 연구의 필요성을 제기합니다.
        
- [[리뷰_The hazards and risks of hydrogen]]
    
    - 해당 연구가 수소의 강한 부력 효과를 정량적으로 평가하지 못했음을 한계로 지적하며, 이는 CFD와 같은 상세 분석의 필요성을 간접적으로 시사합니다.

---

## 🔗 연결된 노트의 의미  
> 이 개념과 의미상 연결되는 다른 노트 연결

---

## 🗂 관련 개념  
> 유사하거나 비교 가능한 개념 노트를 나열하세요. 필요 시 `[[ ]]` 링크로 연결합니다.

- [[ ]]
- [[ ]]

---

## 💬 메모 및 생각  
> 지침: 정리하며 떠오른 의문, 통합 아이디어, 추후 조사 필요 사항 등을 자유롭게 적으세요.

