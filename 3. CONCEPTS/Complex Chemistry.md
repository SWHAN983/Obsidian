---
created: 
aliases:
---
- [[연소 모델]] 중 하나
	- [[Reacting Species Transport]]
	- [[Eddy Breack Up]]

---

- 모든 종에 대한 mass fraction 방정식 포함
- 에너지 방정식 포함
- 화학 반응에 의한 생성/소멸 항 포함
- [[CHEMKIN]] 포맷의 reaction mechanism, thermo data, transport data 필요

---

화학종 \( i \)의 생성/소멸 속도는 다음과 같이 계산됨:

$$\dot{\omega}_i = \sum_{r=1}^{N_{\text{reac}}} (\nu''_{i,r} - \nu'_{i,r}) \cdot R_r$$

- \( $\dot{\omega}_i$ \): 화학종 \( i \)의 생성 또는 소멸 속도 [kg/m³·s]
- \($ \nu''_{i,r}$ \): 반응 \( r \)에서 종 \( i \)의 생성물 계수
- \( $\nu'_{i,r}$ \): 반응 \( r \)에서 종 \( i \)의 반응물 계수
- \( $R_r$ \): 반응 \( r \)의 반응 속도

	- $$\dot{\omega_{i}}=\sum^{N_{reac}}_{r=1}(\nu^{''}_{i,r}-\nu^{'}_{i,r})\cdot R_{r}$$
		- $\nu^{''}_{i,r}$ : 반응 r에서 생성물로 나오는 종 i의 계수
		- $\nu^{'}_{i,r}$ : 반응 r에서 반응물로 쓰이는 종 i의 계수
		- 여기서 $R_r$은 [[아레니우스 방정식]] 기반 [[Reaction Kinetics]](반응속도)
		- $$R_{r}=K_{r} \cdot \prod[C_{j}]^{\alpha_{j}}$$
	- 여기서, $K_{r}$은 ![[아레니우스 방정식#^9db397]]