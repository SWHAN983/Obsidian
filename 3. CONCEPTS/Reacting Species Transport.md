---
created: 2025-08-06
tags:
  - CONCEPT
aliases:
---
Reacting Specices Transport 모델은 [[MOC_STAR-CCM+]]에서 
모든 반응종(Species)의 농도+ 이동+ 반응을 동시에 계산하는 모델

---
# 흐름
- [[Spieces Transport Equation]]을 푼다.
	- $$\partial \frac{\rho Y_{i}}{\partial t}+\nabla \cdot(\rho u Y_{i})=-\nabla  \cdot J_{i}+\dot{\omega_{i}}$$
	- $Y_{i}$ : 종 i의 질량분율
	- $J_{i}$ : 확산 플럭스
	- $\dot{\omega_{i}}$ : 생성 or 소명 속도
		- [[아레니우스 방정식]]이 사용됨
		- $$\dot{\omega_{i}}=M_{i}\sum^{N_{reac}}_{r=1}(\nu^{''}_{i,r}-\nu^{'}_{i,r})\cdot R_{r}$$
		- $\nu^{''}_{i,r}$ : 반응 r에서 생성물로 나오는 종 i의 계수
		- $\nu^{'}_{i,r}$ : 반응 r에서 반응물로 쓰이는 종 i의 계수
		- 여기서 $R_r$은 [[아레니우스 방정식]] 기반 [[Reaction Kinetics]](반응속도)
		- $$R_{r}=K_{r} \cdot \prod[C_{j}]^{\alpha_{j}}$$
		- 여기서, $K_{r}$은 ![[아레니우스 방정식#^9db397]]

- 즉, [[Reacting Species Transport]]모델은 [[아레니우스 방정식]]을 핵심 엔진으로 써서, 
  반응 속도 상수 -> 반응 속도 -> 종의 농도 변화를 계산한다.




---
- 다른 [[연소 모델]]로는 아래와 같은 모델들이 있다.
	- [[Eddy Breack Up]]
	- [[Complex Chemistry]]