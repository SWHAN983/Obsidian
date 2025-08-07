---
created: 
aliases:
  - EBU
---
- [[연소 모델]] 중 하나
	- [[Reacting Species Transport]]
	- [[Complex Chemistry]]

---
- 연료와 산화제가 난류에 의해 섞이기만 하면 바로 연소가 일어난다는 가정
- 화학 반응을 '난류 혼합 속도'로 근사해서 계산하는 모델

$$r_F=-\frac{\rho}{M_{\omega F}}\left( \frac{1}{\tau _{turb}} \right)A_{ebu} \cdot min\left( Y_{F}, \frac{Y_{O}}{S_{O}} \right)$$

| 기호             | 의미                             |
| -------------- | ------------------------------ |
| $r_F$          | 연료 소모 속도                       |
| $\rho$         | 밀도                             |
| $M_{\omega F}$ | 연료의 몰질량                        |
| $\tau_{turb}$  | 난류 시간 척도                       |
| $Y_F, Y_O$     | 연료와 산화제의 질량분율                  |
| $S_O$          | 이론적 반응비 (stoichiometric ratio) |
| $A_{ebu}$      | 사용자 정의 가능한 반응 계수               |

