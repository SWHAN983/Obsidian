[![jmse-logo](https://pub.mdpi-res.com/img/journals/jmse-logo.png?7a9fe15cd28a3a0d "Journal of Marine Science and Engineering")](https://www.mdpi.com/journal/jmse)

## Article Menu

Font Type:

_Arial_ _Georgia_ _Verdana_

Open AccessArticle

by

Wenfeng Guan

1[](mailto:wfguan@ccs.org.cn)[![](https://pub.mdpi-res.com/img/design/orcid.png?0465bc3812adeb52?1752569836 "ORCID")](https://orcid.org/0009-0006-1739-6058),

Ju Chen

2[](mailto:chenjuship@163.com),

Lijian Chen

1[](mailto:ljchen@ccs.org.cn)[![](https://pub.mdpi-res.com/img/design/orcid.png?0465bc3812adeb52?1752569836 "ORCID")](https://orcid.org/0000-0002-1664-8894),

Jiaolong Cao

1[](mailto:jlcao@ccs.org.cn) and

Hongjun Fan

3,*[](mailto:hongjun.fan@utas.edu.au)[![](https://pub.mdpi-res.com/img/design/orcid.png?0465bc3812adeb52?1752569836 "ORCID")](https://orcid.org/0000-0002-2808-3624)

1

Wuhan Rules and Research Institute, China Classification Society, Wuhan 430022, China

2

Changjiang Ship Design Institute, Wuhan 430062, China

3

Australian Maritime College (AMC), College of Sciences and Engineering, University of Tasmania, Launceston, TAS 7248, Australia

*

Author to whom correspondence should be addressed.

Submission received: 2 March 2023 / Revised: 16 March 2023 / Accepted: 17 March 2023 / Published: 20 March 2023

## Abstract

Adopting proton exchange membrane fuel cells fuelled by hydrogen presents a promising solution for the shipping industry’s deep decarbonisation. However, the potential safety risks associated with hydrogen leakage pose a significant challenge to the development of hydrogen-powered ships. This study examines the safe design principles and leakage risks of the hydrogen gas supply system of China’s first newbuilt hydrogen-powered ship. This study utilises the computational fluid dynamics tool FLACS to analyse the hydrogen dispersion behaviour and concentration distributions in the hydrogen fuel cell room based on the ship’s parameters. This study predicts the flammable gas cloud and time points when gas monitoring points first reach the hydrogen volume concentrations of 0.8% and 1.6% in various leakage scenarios, including four different diameters (1, 3, 5, and 10 mm) and five different directions. This study’s findings indicate that smaller hydrogen pipeline diameters contribute to increased hydrogen safety. Specifically, in the hydrogen fuel cell room, a single-point leakage in a hydrogen pipeline with an inner diameter not exceeding 3 mm eliminates the possibility of flammable gas cloud explosions. Following a 10 mm leakage diameter, the hydrogen concentration in nearly all room positions reaches 4.0% within 6 s of leakage. While the leakage diameter does not impact the location of the monitoring point that first activates the hydrogen leak alarm and triggers an emergency hydrogen supply shutdown, the presence of obstructions near hydrogen detectors and the leakage direction can affect it. These insights provide guidance on the optimal locations for hydrogen detectors in the fuel cell room and the pipeline diameters on hydrogen gas supply systems, which can facilitate the safe design of hydrogen-powered ships.

## 1. Introduction

The International Maritime Organization (IMO) has set a decarbonisation strategy aimed at reducing the carbon intensity of all ships by at least 40% by 2030 and cutting total GHG emissions from global shipping by 50% (compared to 2008 levels) by 2050 [[1](#B1-jmse-11-00651),[2](#B2-jmse-11-00651)]. To this end, various actions based on clean energy technologies should be implemented [[3](#B3-jmse-11-00651),[4](#B4-jmse-11-00651),[5](#B5-jmse-11-00651)]. Hydrogen’s emission-free properties make it a promising alternative fuel for the shipping industry [[6](#B6-jmse-11-00651),[7](#B7-jmse-11-00651)]. Among various hydrogen energy technologies, proton exchange membrane fuel cells (PEMFC) are promising due to their high energy efficiency and zero emissions [[8](#B8-jmse-11-00651),[9](#B9-jmse-11-00651),[10](#B10-jmse-11-00651),[11](#B11-jmse-11-00651),[12](#B12-jmse-11-00651),[13](#B13-jmse-11-00651)].

Numerous research projects across Europe, North America, and Asia have yielded significant results in the marine fuel cell (FC) field, including developing industrialised marine FCs and practical demonstration projects [[14](#B14-jmse-11-00651),[15](#B15-jmse-11-00651)]. Recent research efforts have focused on assessing the feasibility and reliability of ship power systems utilising FCs [[16](#B16-jmse-11-00651),[17](#B17-jmse-11-00651),[18](#B18-jmse-11-00651),[19](#B19-jmse-11-00651)], energy management for FC-powered ships [[20](#B20-jmse-11-00651),[21](#B21-jmse-11-00651)], and optimising ship power system design related to FCs, including hybrid systems [[22](#B22-jmse-11-00651),[23](#B23-jmse-11-00651),[24](#B24-jmse-11-00651),[25](#B25-jmse-11-00651),[26](#B26-jmse-11-00651)]. These studies have examined various aspects of FC technology for use on ships, providing valuable insights for developing hydrogen-FC-powered ships. However, relatively little research has focused on hydrogen safety for FC ships. Hydrogen is highly hazardous due to its extreme flammability and explosiveness [[27](#B27-jmse-11-00651),[28](#B28-jmse-11-00651),[29](#B29-jmse-11-00651),[30](#B30-jmse-11-00651)]. Previous research has identified several factors that impede the development and use of hydrogen FCs on ships, including inadequate risk management to mitigate the risks of leakage and the formation of flammable gas clouds (FGC) [[31](#B31-jmse-11-00651),[32](#B32-jmse-11-00651)], as well as insufficient international regulations and standards for hydrogen supply chains [[33](#B33-jmse-11-00651)]. The risk of hydrogen FGC explosions is anticipated to rise significantly in enclosed or confined spaces, including hydrogen gas supply systems (HGSS) located in the engine room or fuel cell room (FCR) [[34](#B34-jmse-11-00651),[35](#B35-jmse-11-00651),[36](#B36-jmse-11-00651)].

[Figure 1](#fig_body_display_jmse-11-00651-f001) presents the hydrogen leakage event tree in enclosed or confined spaces. Leakage, detection, ignition sources, and cloud formation are the initiating events in the development of hydrogen accidents. Therefore, investigating the evolution characteristics of these events is crucial for controlling hydrogen safety and is a key focus of research on hydrogen-powered ships [[37](#B37-jmse-11-00651)]. For example, L.E. Klebanoff et al. analysed the safety properties of liquid hydrogen using the “SF-BREEZE” high-speed FC ferry as a case study. They emphasised preventing hydrogen fuel leaks [[38](#B38-jmse-11-00651)]. Meanwhile, F. Li et al. conducted computational fluid dynamics (CFD) simulations on hydrogen leakage in cabins of the “SF-BREEZE”, and the findings offered guidance for the general arrangement of FC ships [[39](#B39-jmse-11-00651)]. Similarly, Mao, X et al. predicted overpressure and high temperature after hydrogen explosions caused by FGC in different rooms of the “SF-BREEZE” ferry using ANSYS fluent software. They found that the hydrogen FCR was most affected [[40](#B40-jmse-11-00651)]. Park, S et al. compared the explosion overpressure caused by hydrogen and hydrocarbon-based gases in ship ventilation pipes. They found that hydrogen caused higher overpressure [[41](#B41-jmse-11-00651)]. Yuan, Y et al. investigated the effectiveness of a fine water mist in suppressing the temperature of hydrogen jet fires on FC ships using the CFD software FDS. They found that while the mist could reduce the fire field temperature, it did not extinguish the fires [[42](#B42-jmse-11-00651)]. The IMO issued the Interim Guidelines for the Safety of Ships Using Fuel Cell Power Installations in 2022 to meet the growing demand for FC ships [[43](#B43-jmse-11-00651)]. The guidelines provided safety design requirements for ships using FC installations but not for hydrogen storage and supply on ships. Chen, L. et al. calculated the minimum ventilation capacity for the hydrogen FCR on a ship under normal operating conditions based on IMO guidelines and IEC 60079-10-1:2020. Safe design measures were proposed to reduce the level of the hazardous area in the FCR [[44](#B44-jmse-11-00651)]. Feng, Y. et al. used the CFD software FLACS to predict the dispersion distance of hydrogen FGC in a bunkering station on a cargo ship. The safety recommendations for the hydrogen bunkering operation were proposed based on the prediction [[45](#B45-jmse-11-00651)].

**Figure 1.** Hydrogen leakage event tree in enclosed space or confined space.

Overall, previous studies have yet to provide detailed information about hydrogen piping systems and equipment in the FCR on ships powered by large-capacity hydrogen PEMFCs. Current studies have not accounted for various leakage diameters and directions, leading to incomplete leakage scenarios. Additionally, the dispersion and concentration of hydrogen in the FCR require more detailed investigation, including the detection time of hydrogen detectors at different locations. To address these gaps, this study uses the CFD software FLACS to investigate hydrogen safety in the FCR of a 560 kW hydrogen-PEMFC-powered ship. The following aspects regarding hydrogen leakage in the FCR were investigated:

- The effect of leakage diameter on hydrogen concentration.
    
- The optimal location for hydrogen detectors.
    
- Safety design recommendations for future engineering applications of hydrogen-powered ships.
    

In this paper, [Section 2](#sec2-jmse-11-00651) outlines the methodology. [Section 3](#sec3-jmse-11-00651) presents the mathematical model and its validation. [Section 4](#sec4-jmse-11-00651) discusses the results. Finally, [Section 5](#sec5-jmse-11-00651) presents the conclusions.

## 2. Methodology

The study framework, presented in [Figure 2](#fig_body_display_jmse-11-00651-f002), involves three stages. Firstly, the design philosophy of HGSS was analysed based on the function structure of the hydrogen fuel system and the safety requirements of IMO guidelines. This analysis helped to determine the hydrogen leakage scenarios and calculation parameters. Secondly, this study focused on the analysis of the theory of hydrogen leakage and dispersion, including the mathematical model of numerical calculation. The previous study results were used to validate the CFD simulation model, and the input parameters were established in the CFD model. Thirdly, the simulation results were used to analyse the impacts of various factors on hydrogen dispersion and concentration in the FCR. Based on the findings, safety design recommendations for the ships were proposed.

**Figure 2.** Framework of this study.

#### 2.1. Research Object

The “San Xia Qing Zhou 1 (Three Gorges Hydrogen Boat 1)” is a catamaran passenger ship that is currently being constructed [[14](#B14-jmse-11-00651)]. The ship uses hydrogen FCs as its primary power source and lithium batteries for energy storage. This study focuses on the safety analysis of FCR and HGSS, as their design directly impacts the safety of ships. [Table 1](#table_body_display_jmse-11-00651-t001) displays the main parameters of the ship. [Figure 3](#fig_body_display_jmse-11-00651-f003) shows the general arrangement of the vessel, and [Figure 4](#fig_body_display_jmse-11-00651-f004) illustrates the arrangement of the FCR.

**Figure 3.** General arrangement of the “San Xia Qing Zhou 1”.

**Figure 4.** Top view of arrangement in fuel cell room.

**Table 1.** General arrangement of “San Xia Qing Zhou 1”.

#### 2.1.1. Hydrogen Fuel System and Leakage Risk

The ship’s HGSS consists of four functional modules, namely hydrogen bunkering, storage, fuel supply, and hydrogen FCs, as depicted in [Figure 5](#fig_body_display_jmse-11-00651-f005). During bunkering, compressed hydrogen gas is injected into cylinders with a pressure of 35 MPa. Control valves are installed on the pipelines to prevent hydrogen from entering the cylinders in case of an emergency. The storage system consists of 32 hydrogen cylinders with a pressure of 35 MPa, fixed with a metal frame and with a capacity of 240 kg. Before entering the PEMFCs, the hydrogen gas is reduced to 0.8 MPa from 35 MPa to meet the demand of the FCs [[46](#B46-jmse-11-00651)]. The FCR contains eight FC modules of 70 kW each, enclosed in a box with an independent ventilation system.

**Figure 5.** Hydrogen gas supply system.

Hydrogen leakage in the FCR may occur from the FC modules, valves, and pipe joints such as threaded or jacketed joints. [Table 2](#table_body_display_jmse-11-00651-t002) lists various reasons for the possible leakage of valve fittings and pipe components in the hydrogen piping systems [[47](#B47-jmse-11-00651)].

**Table 2.** Reasons for hydrogen leakage in hydrogen gas supply system.

Under normal operations, valves and pipe joints do not release hydrogen but may leak hydrogen gas during accidents, as indicated in [Table 2](#table_body_display_jmse-11-00651-t002). Compared to other alternative fuel supply systems, the HGSS has a higher probability of leakage due to high permeability, hydrogen embrittlement effects, and high pressure [[48](#B48-jmse-11-00651)]. Furthermore, using more valves in the hydrogen supply system increases the likelihood of hydrogen leakage.

#### 2.1.2. Design of Fuel Cell Room

The IMO guidelines proposed design concepts for FCR and piping arrangement for FC power systems. However, these concepts are based on the amount of fuel leakage under normal operating conditions and do not consider accidental hydrogen leakage, as shown in [Table 2](#table_body_display_jmse-11-00651-t002).

According to the IMO guidelines, the design scheme of the hydrogen-fuelled ship should assess the degree of hazardous areas in the FCR following IEC 60079-10-1:2020. The FC modules should be designed to be airtight, and the mechanical exhaust vents of the cabinets should be arranged in safe areas [[44](#B44-jmse-11-00651)]. The FCRs in “San Xia Qing Zhou 1” were designed to be non-hazardous areas based on the IMO guidelines and the IEC standard. For this purpose, a minimum ventilation rate of 90 air changes per h is required [[44](#B44-jmse-11-00651)]. Increasing the ventilation rate further, in relation to the potential release rates, can lower the probability of an explosive gas atmosphere. However, this comes at the cost of increased electricity consumption and noise levels. Ventilation systems of natural intake and mechanical extraction (5000 m3/h) were used in each FCR. The working pressure of the hydrogen system was described in [Section 2.1.1](#sec2dot1dot1-jmse-11-00651), and the pipeline diameter is 10 mm.

Considering the high risk of hydrogen leakage [[47](#B47-jmse-11-00651)], the double-wall piping type was used to reduce the probability of hydrogen leakage in the FCR. The probability of hydrogen leakage was not studied because this work focuses on the consequences of hydrogen leakage.

#### 2.2. Parameters and Leakage Scenarios

#### 2.2.1. Parameters of Hydrogen Fuel Cell Room

The simulation object selected for this study was one of the FCRs on the port side. The boundary conditions for hydrogen leakage scenarios in the FCR are presented in [Table 3](#table_body_display_jmse-11-00651-t003). The dimensions of the selected FCR are 6500 mm in length, 3200 mm in width, and 2000 mm in height. The equipment size parameters provided by the shipyard were used for the simulation. The equipment, which had a roughly cuboid shape, was modelled as a cuboid in the simulation. The dimensions and positions of the equipment in the FCR are displayed in [Table 4](#table_body_display_jmse-11-00651-t004).

**Table 3.** Environmental parameters and ventilation parameters of fuel cell room.

**Table 4.** Dimensions and locations of the equipment in the fuel cell room.

#### 2.2.2. Hydrogen Leakage Scenarios

Various factors impact the hydrogen dispersion behaviour in an enclosed space, such as release pressure, leakage flow rate [[49](#B49-jmse-11-00651)], leakage diameter [[50](#B50-jmse-11-00651)], ventilation conditions, direction of leakage, and obstacles in the space [[51](#B51-jmse-11-00651),[52](#B52-jmse-11-00651)]. To achieve the research objective, different leakage diameters and directions were included in the scenarios. The following hypotheses were established for this study: (1) the leaked hydrogen was not ignited, (2) the hydrogen was released with a constant pressure of 0.8MPa for 100 s, which was longer than the time required for the concentration to exceed 1.6%, (3) circular leakage holes with diameters of 10%, 30%, 50%, and 100% of the hydrogen pipeline diameter (10 mm) were considered, (4) the scenario of vertical downward leakage was excluded due to the presence of a valves module with a fixed base plank at the bottom of the FCR, and (5) five directions of leakage were considered, resulting in twenty-four hydrogen leakage scenarios, as presented in [Table 5](#table_body_display_jmse-11-00651-t005).

**Table 5.** Leakage scenarios and parameters.

## 3. Mathematical Model and Model Validation

FLACS-Hydrogen (v10.6), a specialised computational fluid dynamics (CFD) tool for hydrogen safety engineering, was used for numerical simulations. It can be used for simulating hydrogen dispersion and assessing the potential FGC risk in various leakage scenarios. FLACS utilises the porosity distributed resistance theory to model complex geometrical features, such as porosities for a control volume on relatively coarse meshes, which is a unique feature distinguishing it from other CFD software. The compressible Navier–Stokes equations are solved on a three-dimensional grid using a finite volume method in FLACS. The standard k-Ɛ model for turbulence is utilised with some modifications, which are turbulence generation behind sub-grid objects and turbulent wall functions [[53](#B53-jmse-11-00651)]. The steps performed during the modelling phase are summarised as follows:

- A computational geometry model was built using the equipment dimensions and locations in the FCR.
    
- Grid sizes of the FCR were selected for computational geometry model.
    
- The simulation was performed using scenarios that involved a combination of leakage parameters and computational geometry models.
    

#### 3.1. Mathematical Model

The mathematical model utilised in this study includes the continuity, motion, energy, concentration transfer, and ideal gas state equations. These equations have been discussed in detail in previous studies [[54](#B54-jmse-11-00651),[55](#B55-jmse-11-00651)]. The main governing equations are briefly outlined.

The mass conservation equation:

where βv is the volume porosity; βj is the area porosities; ρ is the gas density; and xj and uj denote the spatial coordinate variable and velocity component in j-th direction, respectively.

The transportation equations for the momentum, enthalpy, and mass fraction of the fuel and mixture fraction are described as follows:

∂∂t(βvρui)+∂∂xj(βjρuiuj)=−βv∂p∂xi+∂∂xj(βjσij)+Fo,i+βvFw,i+βv(ρ−ρ0)gi

(2)

∂∂t(βvρh)+∂∂xj(βjρujh)=∂∂xj(βjμeffσh∂h∂xj)+βvDpDt+Q˙V

(3)

∂∂t(βvρYfuel)+∂∂xj(βjρujYfuel)=∂∂xj(βjμeffσfuel∂Yfuel∂xj)+Rfuel

(4)

where βv is the volume porosity, ρ is the gas density, p is the pressure, h is the enthalpy, Q˙ is the heat flow rate, V is the volume, xj is the j-coordinate spatial variable, βj is the area porosity, and ui and uj are the velocity components in the i and j directions, respectively. σij is the stress tensor, σfuel and σh are the Prandtl–Schmidt numbers of fuel and enthalpy, respectively, both at 0.7, μeff is the effective viscosity of fuel, Fo,i is the flow resistance due to sub-grid obstructions, Fw,i is the flow resistance produced by friction of the wall, Yfuel is the fuel mass fraction, and Rfuel is the fuel reaction rate.

The gas turbulence in FLACS-Hydrogen was modelled according to the standard k-ε model to obtain the turbulent kinetic energy and its dissipation. The Reynolds stress tensor was modelled using the eddy viscosity based on the eddy viscosity assumption.

Classical k-ε model is used to deal with turbulence, which involves two transport equations: one for turbulent kinetic energy and one for dissipation of turbulent kinetic energy:

∂∂t(βvρk)+∂∂xj(βjρujk)=∂∂xj(βjμeffσh∂k∂xj)+βvPk−βvρε

(5)

∂∂t(βvρε)+∂∂xj(βjρujε)=∂∂xj(βjμeffσε∂ε∂xj)+βv(C1εεkPk(1+C3εRf))−C2εβvρε2k 

(7)

−ρui″uj″˜=μeff(∂ui˜∂xj+∂uj˜∂xi)−ρ23kδij 

(8)

where k is the turbulent kinetic energy, ε is the dissipation of turbulent kinetic energy, Pk is the overpressure, Gs is the flow shear stress, Gw is the wall shear stress, Gb is the buoyancy, Go represent the sub grid objects, σh and σε are the Prandtl numbers of turbulence for k and ε, given as 1.0 and 1.3, respectively, C1ε, C2ε, and C3ε are constants, taken as 1.44, 1.92, and 0.8, respectively, Rf is the model for the buoyancy term, ui″uj″˜ is the mean velocity in the i and j directions, and δij is the Kronecker delta function (δij=1 if i=j, otherwise δij=0).

#### 3.2. Model Validation

The accuracy and validity of hydrogen dispersion prediction by the CFD tool FLACS-Hydrogen were demonstrated through various validation techniques, including comparisons between experimental and numerically simulated concentrations. Additionally, some of the simulations were performed as blind predictions. The validation tests include experiments involving free jets of hydrogen [[56](#B56-jmse-11-00651)], gas leak dispersion and subsequent explosions [[53](#B53-jmse-11-00651)], and hydrogen gas leakage in confined spaces [[37](#B37-jmse-11-00651)]. These simulations showed good agreement with experimental results for various scenarios of hydrogen release and dispersion. Sandia National Laboratories performed experiments to validate FLACS simulations of hydrogen release at a scaled warehouse facility, and good agreement was found between the simulation and experimental results [[57](#B57-jmse-11-00651),[58](#B58-jmse-11-00651)]. Moen et al. summarised that the Standard k-ε turbulence model performed best in validating gas dispersion after accidental releases, particularly for hydrogen jet dispersion scenarios [[59](#B59-jmse-11-00651)]. An analytical model was also established to predict gas flow behaviours in different hydrogen leakage scenarios, providing high accuracy compared to numerical simulations [[60](#B60-jmse-11-00651),[61](#B61-jmse-11-00651)].

This study used the experimental work by Ji, H.W et al. to verify the accuracy of the hydrogen leakage simulation model. In their study, a volume of 11.484 m3 of enclosed spaces was built to test hydrogen leakage in the FC rooms [[62](#B62-jmse-11-00651)]. Simulation of case 27 showed similar results to the experiment ([Figure 6](#fig_body_display_jmse-11-00651-f006)), with hydrogen concentration peaks of 10% and 3% in agreement. However, there were some differences in the time to reach the concentration, likely due to lag time of the hydrogen detectors. Overall, the agreement between predictions and experiments was considered sufficient to verify the model’s accuracy.

**Figure 6.** Comparison of the simulation results and the experimental results.

#### 3.3. Grid Size

A numerical study of hydrogen leakage and dispersion demonstrated grid independence verification for core domain grid sizes of 0.1 m, 0.2 m, and 0.4 m for a 5 mm diameter release [[63](#B63-jmse-11-00651)]. The study found that grid sizes of 0.1 m and 0.2 m were appropriate for the simulation, and in this study, a grid size of 0.1 m was chosen for achieving higher accuracy. The pseudo-source model (also known as notional nozzle) is used for simulating hydrogen releases from small orifices, to bypass the compute-intensive Mach disk zone next to the nozzle exit. The concept of the notional nozzle and sub-grid models in FLACS was validated by the experimental campaign for the second blind prediction study in the HySEA, supported by the European Union’s Horizon 2020 research and innovation programme [[64](#B64-jmse-11-00651)]. The 3D model, grid sizes of the FCR, and the internal equipment are shown in [Figure 7](#fig_body_display_jmse-11-00651-f007).

**Figure 7.** Three-dimensional view of the grid sizes, gas monitoring points on the YZ plane (X = 0.1 m), and internal equipment in the fuel cell room.

## 4. Results and Discussion

This section discusses the dispersion behaviour of hydrogen gas in scenarios 1 to 4, as presented in [Table 5](#table_body_display_jmse-11-00651-t005). [Section 4.1](#sec4dot1-jmse-11-00651) analyses the phenomenon of hydrogen gas dispersion within the FCR. [Section 4.2](#sec4dot2-jmse-11-00651) examines the impact of different leakage hole sizes on hydrogen gas concentration within the FCR. [Section 4.3](#sec4dot3-jmse-11-00651) analyses the arrangement of hydrogen detectors in scenarios 5 to 24, as presented in [Table 5](#table_body_display_jmse-11-00651-t005).

According to the IMO guidelines, this section considers the distribution of flammable hydrogen gas at the following three volume concentration values [[43](#B43-jmse-11-00651)]:

- 20% lower flammable limit (LFL) (volume concentration: 0.8%).
    
- 40% LFL (volume concentration: 1.6%).
    
- 100% LFL (volume concentration: 4.0%).
    

There are 32 gas monitoring points in the CFD model. These monitoring points are located at the ventilation inlet and outlet, equipment vertices, endpoints, and midpoints of each side of the room, and the centre positions of the wall surfaces except the bottom surface. [Table 6](#table_body_display_jmse-11-00651-t006) shows the coordinates of these monitoring points.

**Table 6.** Coordinates of the gas monitoring points.

#### 4.1. Hydrogen Gas Dispersion within the Fuel Cell Room

This section analyses the impact of different leakage hole sizes on hydrogen gas concentration within the FCR, focusing on scenarios 1 to 4 (with specific parameters outlined in [Section 2.2.2](#sec2dot2dot2-jmse-11-00651)). Taking scenario 4 as an example, [Figure 8](#fig_body_display_jmse-11-00651-f008) shows a 3D view of hydrogen gas dispersion, while [Figure 9](#fig_body_display_jmse-11-00651-f009) presents 2D slice views of the XZ and XY planes. In the calculations, hydrogen gas leakage begins from the 20th second to ensure sufficient time to establish a stable negative pressure airflow within the FCR.

**Figure 8.** Three-dimensional views of hydrogen gas dispersion in the fuel cell room at different times from 1 s to 6 s. (the times represent the seconds after the start of hydrogen leakage).

**Figure 9.** Two-dimensional slice views of hydrogen gas dispersion in the fuel cell room (on the XZ and XY plane) at different times from 1 s to 6 s (the times represent the seconds after the start of hydrogen leakage).

From the above figures, it can be seen that when hydrogen leaks upward, a large amount of flammable hydrogen cloud accumulates in the space below the roof of the FCR in a very short time. In less than 1 s, the hydrogen reaches the roof, and then it spreads and flows along the roof. At around the third second, the hydrogen starts to disperse on the rear bulkhead (XZ section), and at this time the hydrogen cloud still has considerable momentum. A clear eddy is formed (XZ section at third second) when the cloud encounters the corner of the bottom of the room. This is consistent with the finding of [[65](#B65-jmse-11-00651)]. According to the XY slice views in [Figure 9](#fig_body_display_jmse-11-00651-f009), after 3 s, the thickness of the hydrogen cloud on the top of the room rapidly increases. At the fifth second, the flammable gas cloud is about to fill the area near the top of the FCR. After 6 s, the concentration of the gas cloud tends to be stable. At this time, except for the ventilation inlet and outlet, the hydrogen concentration in almost all positions in the room reaches 4.0% (LFL). At this time, lighting bulbs and water and thermal management equipment inside the room are within the FGC and may become potential ignition sources. Therefore, it is recommended to avoid arranging the equipment, including non-explosion-proof equipment, equipment that is prone to high temperature, and equipment that is prone to generating sparks, which might be ignition sources inside the FCR, as much as possible.

In the time interval between the second and sixth second, the concentration of hydrogen in the area between the room roof ventilation inlet and outlet is consistently higher than that in other locations. This phenomenon is due to the formation of an air trap between the downward extension of the ventilation inlet duct (approximately 400 mm in height, as shown in [Figure 7](#fig_body_display_jmse-11-00651-f007)) and the outlet, which impedes hydrogen discharge from the FCR. This phenomenon should be taken into consideration in the design of ventilation systems.

#### 4.2. Influence of Different Leakage Diameters on Hydrogen Concentration

Taking scenarios 1, 2, 3, and 4 as examples, the maximum hydrogen concentrations (Volume %, m3/m3) achieved after continuous leakage are 0.3%, 2.8%, 7.5%, and 24.8%, respectively, with the earliest detection times at 83s, 83s, 88s, and 94s. MP4, MP11, and MP20 firstly detect hydrogen concentrations of 0.8%, 1.6%, and 4.0%. [Figure 10](#fig_body_display_jmse-11-00651-f010) shows the hydrogen concentration for the four scenarios, with MP11 used to show concentration changes in [Figure 11](#fig_body_display_jmse-11-00651-f011).

**Figure 10.** Changes in hydrogen concentration at MP4, MP11, and MP20 in scenarios 1, 2, 3, and 4. (**a**) Scenario 1 (leakage diameter = 1 mm); (**b**) Scenario 2 (leakage diameter = 3 mm); (**c**) Scenario 3 (leakage diameter = 5 mm); (**d**) Scenario 4 (leakage diameter = 10 mm).

**Figure 11.** Hydrogen concentration at MP11 for different leak diameters.

The hydrogen concentration trend in the FCR is consistent regardless of the leakage diameter, as shown in [Figure 10](#fig_body_display_jmse-11-00651-f010). The maximum hydrogen concentration in the FCR decreased with decreasing leakage diameter, as seen in [Figure 11](#fig_body_display_jmse-11-00651-f011). MP4 and MP20 show fluctuating hydrogen concentrations due to their proximity to the air inlet, which is affected by wind speed (the speed of the air inlet on this vessel is about 6.9 m/s).

The maximum hydrogen concentration of scenarios 1 and 2 is below the hydrogen LFL (4.0%), indicating that FGC explosion accidents will not occur if leaking hydrogen is not immediately ignited. FGC explosion is impossible in the FCR when there is single-point leakage in the hydrogen pipeline with an inner diameter not exceeding 3 mm. Effective mechanical ventilation systems of the extraction type and choosing a small enough inner diameter of the hydrogen pipelines can prevent FGC explosion in the FCR, but they are limited by engineering practicality.

According to [Figure 11](#fig_body_display_jmse-11-00651-f011), in scenarios 3 and 4, the maximum hydrogen concentration exceeds 4.0%, and FGC explosion is possible. The hydrogen concentration increases linearly during the initial leakage stage, indicating the significant impact of the leakage diameter on hydrogen concentration. For example, in scenario 4, reducing the leakage diameter delayed the alarm time (alarm signal at 0.8%), shutdown time (shutdown signal at 1.6%), and the formation of FGC. Reducing the diameter of the hydrogen pipeline can provide more time for emergency rescue during the leakage event.

Despite a high ventilation rate of 5000 m3/h (approximately 90 air changes per h) in the FCR, the hydrogen concentration in the enclosed space remained constant due to continuous hydrogen leakage. However, appropriate mechanical ventilation can effectively control the increase in hydrogen concentration. These findings align with previous research by Lee et al. [[62](#B62-jmse-11-00651),[66](#B66-jmse-11-00651)]. Apparently, a combination of mechanical ventilation and leak source closure is necessary to reduce hydrogen concentration in enclosed spaces.

#### 4.3. Detection Time at Monitoring Points

To determine the locations of the hydrogen detectors inside the FCR, the time points and corresponding monitoring points when the hydrogen concentration first reached 0.8% and 1.6% were identified from 32 monitoring points in the 20 scenarios above ([Table 7](#table_body_display_jmse-11-00651-t007)). When the diameter of the leakage hole is 1 mm, the maximum hydrogen concentration is 0.3%, which is lower than the LFL. Thus, the effect of this leakage situation on the arrangement of monitoring points is ignored. [Figure 12](#fig_body_display_jmse-11-00651-f012) shows the monitoring points identified for different leakage directions. The monitoring points corresponding to scenarios 6–20 are located on the bottom (XY plane), while those corresponding to scenarios 22–24 are located on the portside wall (XZ plane).

**Figure 12.** Monitoring points identified for different leakage directions.

**Table 7.** Time points and corresponding monitoring points when the hydrogen concentration first reached 0.8% and 1.6% in scenarios 5–24.

In scenarios 6–20, the same monitoring point was identified for the first time when the hydrogen concentration reached 0.8% and 1.6% for the same leakage direction, regardless of the diameters of leakage holes. The identified monitoring points were located near the leakage points’ projection points on the plane facing the leakage direction. This finding provides a basis for the arrangement of hydrogen detectors. It should be noted that the monitoring points in scenarios 10, 11, and 12 were inconsistent with the above finding. The reason is that two air filters ([Figure 7](#fig_body_display_jmse-11-00651-f007)) were installed near the point MP21 closest to the leakage source, which hindered the free dispersion of the hydrogen cloud to monitoring point MP21. Therefore, devices that hinder gas dispersion should be avoided when designing the hydrogen detector positions in detailed ship design. In addition, the monitoring points obtained in scenarios 23 and 24 were slightly different from the overall finding mentioned above, but the time difference was less than 0.5 s. From an engineering design perspective, this does not violate the principle of the hydrogen detector arrangement obtained above.

#### 4.4. Safety Design Recommendations

Based on the above analysis, the following design recommendations are proposed:

**Hydrogen fuel cell room**

- Potential ignition sources, including non-explosion-proof electrical equipment, equipment prone to generating high temperatures, and equipment that may produce sparks, should be avoided as much as possible inside the room. If unavoidable, it should be placed as far away as possible from the possible hydrogen leak sources.
    
- The lowest position of the ventilation duct inside the room should be kept as close to the top plane as possible to avoid forming an air trap.
    

**Hydrogen Gas Supply System**

- The inner diameter of the hydrogen supply pipeline inside the fuel cell room should be reduced as much as possible without affecting the performance of the fuel cell to reduce the diameters of the potential leak holes.
    
- The smaller inner diameter of the HGSS in the fuel cell room can significantly decrease the likelihood of FGC, enhancing the overall hydrogen safety of the FCR. Furthermore, if there is a single point of leakage in the hydrogen pipeline with an inner diameter of less than 3 mm, FGC cannot occur within the FCR.
    

**Layout of Hydrogen Detectors**

- Hydrogen detectors should be installed close to potential leak sources such as valves, pipeline joints, and seals. As an alternative, they could be located near the leakage points’ projection points on the plane facing the leakage direction.
    
- No obstructions should be present near the hydrogen detectors.
    

## 5. Conclusions

This study utilised CFD software to analyse the dispersion behaviour of hydrogen gas after leakage in the FCR of a hydrogen-fuel-cell-powered ship. Based on the findings, safety design recommendations for the ship were proposed, emphasising the importance of paying extra attention to the safe design of the FCR and hydrogen supply system. The safety of the FCR was influenced by factors such as hydrogen pipeline diameter, ventilation, and the presence of hydrogen detectors.

This study found that a smaller leakage diameter can effectively prevent FGC explosions in the FCR. When a hydrogen leak with a diameter of 10 mm occurred, the flammable gas cloud rapidly filled the room, taking only 6 s in this study. It is worth noting that the location of the monitoring point that triggers the hydrogen leak alarm and emergency shutdown of the hydrogen supply is not impacted by the leakage diameter. However, the location is affected by the direction of the leak and the presence of obstructions near the hydrogen detectors.

This study provides quantitative data that can be used to optimise hydrogen safety in hydrogen-fuel-cell-powered ships. However, the investigation did not include the risk associated with high-pressure hydrogen systems with a pressure of 35 MPa; future work will focus on this aspect. Overall, this study provides a reference for the safety design of hydrogen-fuel-cell-powered ships, which is especially relevant given the current early stages of demonstrations for such ships.

## Author Contributions

Conceptualization, W.G. and H.F.; methodology, W.G.; validation, W.G., L.C. and J.C. (Jiaolong Cao); formal analysis, W.G., L.C. and H.F.; resources, H.F. and L.C.; data and drawing, W.G., L.C. and J.C. (Ju Chen); writing—original draft preparation, W.G., H.F. and L.C.; writing—review and editing, H.F. and J.C. (Ju Chen); project administration, H.F. and W.G. All authors have read and agreed to the published version of the manuscript.

## Funding

This research received no external funding.

## Institutional Review Board Statement

Not applicable.

## Informed Consent Statement

Not applicable.

## Data Availability Statement

The data that support the findings of this study are available from the corresponding author upon reasonable request.

## Acknowledgments

The authors would like to express their gratitude to the Wuhan Institute of Marine Electric Propulsion and Jianglong Shipbuilding Co., Ltd. for their assistance.

## Conflicts of Interest

The authors declare no conflict of interest.

## Abbreviations

|   |   |
|---|---|
|CFD|Computational fluid dynamics|
|FC|Fuel cell|
|FCR|Fuel cell room|
|FGC|Flammable gas cloud|
|FLACS|Flame acceleration simulator|
|HGSS|Hydrogen gas supply system|
|HTV|Hydrogen tank valve|
|IMO|International Maritime Organization|
|LFL|Lower flammable limit|
|MP|Monitoring point|
|PEMFC|Proton exchange membrane fuel cell|
|PRD|Pressure Relief Device|
|**Units**|   |
|kW|Kilowatt|
|mm|Millimetre|
|s|Second|
|**Nomenclature**|   |
|Fo,i|Flow resistance due to sub-grid obstructions|
|Fw,i|Flow resistance due to walls|
|g|Gravity acceleration|
|Gb|Buoyancy|
|Go|Sub grid objects|
|Gs|Flow shear stress|
|Gw|Wall shear stress|
|h|Enthalpy|
|p|Pressure|
|Q˙|Heat flow rate|
|Rfuel|Fuel reaction rate|
|u|Velocity|
|V|Volume|
|x|Spatial coordinate|
|y|Spatial coordinate|
|z|Spatial coordinate|
|Yfuel|Fuel mass fraction|
|**Greek symbols**|   |
|β|Transformation factor in the model|
|βj|Area porosity in j-direction|
|βv|Volume porosity|
|k|Turbulent kinetic energy|
|ε|Dissipation of turbulent kinetic energy|
|μeff|Effective viscosity|
|ρ|Density|
|σij|Stress tensor|
|σfuel|Prandtl–Schmidt number of fuel|
|**Subscripts**|   |
|i|i-direction|
|j|j-direction|

## References

1. Lagouvardou, S.; Psaraftis, H.N.; Zis, T. A Literature Survey on Market-Based Measures for the Decarbonization of Shipping. Sustainability **2020**, 12, 3953. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=A+Literature+Survey+on+Market-Based+Measures+for+the+Decarbonization+of+Shipping&author=Lagouvardou,+S.&author=Psaraftis,+H.N.&author=Zis,+T.&publication_year=2020&journal=Sustainability&volume=12&pages=3953&doi=10.3390/su12103953)] [[CrossRef](http://doi.org/10.3390/su12103953)]
2. Fan, H.; Enshaei, H.; Jayasinghe, S.G. Formation of Dataset for Fuzzy Quantitative Risk Assessment of LNG Bunkering SIMOPs. Data **2022**, 7, 60. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Formation+of+Dataset+for+Fuzzy+Quantitative+Risk+Assessment+of+LNG+Bunkering+SIMOPs&author=Fan,+H.&author=Enshaei,+H.&author=Jayasinghe,+S.G.&publication_year=2022&journal=Data&volume=7&pages=60&doi=10.3390/data7050060)] [[CrossRef](http://doi.org/10.3390/data7050060)]
3. Reusser, C.A.; Pérez Osses, J.R. Challenges for Zero-Emissions Ship. J. Mar. Sci. Eng. **2021**, 9, 1042. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Challenges+for+Zero-Emissions+Ship&author=Reusser,+C.A.&author=P%C3%A9rez+Osses,+J.R.&publication_year=2021&journal=J.+Mar.+Sci.+Eng.&volume=9&pages=1042&doi=10.3390/jmse9101042)] [[CrossRef](http://doi.org/10.3390/jmse9101042)]
4. Xuan, H.; Liu, Q.; Wang, L.; Yang, L. Decision-Making on the Selection of Clean Energy Technology for Green Ships Based on the Rough Set and TOPSIS Method. J. Mar. Sci. Eng. **2022**, 10, 579. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Decision-Making+on+the+Selection+of+Clean+Energy+Technology+for+Green+Ships+Based+on+the+Rough+Set+and+TOPSIS+Method&author=Xuan,+H.&author=Liu,+Q.&author=Wang,+L.&author=Yang,+L.&publication_year=2022&journal=J.+Mar.+Sci.+Eng.&volume=10&pages=579&doi=10.3390/jmse10050579)] [[CrossRef](http://doi.org/10.3390/jmse10050579)]
5. Huang, J.; Fan, H.; Xu, X.; Liu, Z. Life Cycle Greenhouse Gas Emission Assessment for Using Alternative Marine Fuels: A Very Large Crude Carrier (VLCC) Case Study. J. Mar. Sci. Eng. **2022**, 10, 1969. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Life+Cycle+Greenhouse+Gas+Emission+Assessment+for+Using+Alternative+Marine+Fuels:+A+Very+Large+Crude+Carrier+\(VLCC\)+Case+Study&author=Huang,+J.&author=Fan,+H.&author=Xu,+X.&author=Liu,+Z.&publication_year=2022&journal=J.+Mar.+Sci.+Eng.&volume=10&pages=1969&doi=10.3390/jmse10121969)] [[CrossRef](http://doi.org/10.3390/jmse10121969)]
6. Mallouppas, G.; Yfantis, E.A. Decarbonization in Shipping Industry: A Review of Research, Technology Development, and Innovation Proposals. J. Mar. Sci. Eng. **2021**, 9, 415. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Decarbonization+in+Shipping+Industry:+A+Review+of+Research,+Technology+Development,+and+Innovation+Proposals&author=Mallouppas,+G.&author=Yfantis,+E.A.&publication_year=2021&journal=J.+Mar.+Sci.+Eng.&volume=9&pages=415&doi=10.3390/jmse9040415)] [[CrossRef](http://doi.org/10.3390/jmse9040415)]
7. Kumar, S.; Baalisampang, T.; Arzaghi, E.; Garaniya, V.; Abbassi, R.; Salehi, F. Synergy of green hydrogen sector with offshore industries: Opportunities and challenges for a safe and sustainable hydrogen economy. J. Clean. Prod. **2023**, 384, 135545. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Synergy+of+green+hydrogen+sector+with+offshore+industries:+Opportunities+and+challenges+for+a+safe+and+sustainable+hydrogen+economy&author=Kumar,+S.&author=Baalisampang,+T.&author=Arzaghi,+E.&author=Garaniya,+V.&author=Abbassi,+R.&author=Salehi,+F.&publication_year=2023&journal=J.+Clean.+Prod.&volume=384&pages=135545&doi=10.1016/j.jclepro.2022.135545)] [[CrossRef](http://doi.org/10.1016/j.jclepro.2022.135545)]
8. Sohani, A.; Naderi, S.; Torabi, F. Comprehensive comparative evaluation of different possible optimization scenarios for a polymer electrolyte membrane fuel cell. Energy Convers. Manag. **2019**, 191, 247–260. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Comprehensive+comparative+evaluation+of+different+possible+optimization+scenarios+for+a+polymer+electrolyte+membrane+fuel+cell&author=Sohani,+A.&author=Naderi,+S.&author=Torabi,+F.&publication_year=2019&journal=Energy+Convers.+Manag.&volume=191&pages=247%E2%80%93260&doi=10.1016/j.enconman.2019.04.005)] [[CrossRef](http://doi.org/10.1016/j.enconman.2019.04.005)]
9. Sohani, A.; Naderi, S.; Torabi, F.; Sayyaadi, H.; Golizadeh Akhlaghi, Y.; Zhao, X.; Talukdar, K.; Said, Z. Application based multi-objective performance optimization of a proton exchange membrane fuel cell. J. Clean. Prod. **2020**, 252, 119567. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Application+based+multi-objective+performance+optimization+of+a+proton+exchange+membrane+fuel+cell&author=Sohani,+A.&author=Naderi,+S.&author=Torabi,+F.&author=Sayyaadi,+H.&author=Golizadeh+Akhlaghi,+Y.&author=Zhao,+X.&author=Talukdar,+K.&author=Said,+Z.&publication_year=2020&journal=J.+Clean.+Prod.&volume=252&pages=119567&doi=10.1016/j.jclepro.2019.119567)] [[CrossRef](http://doi.org/10.1016/j.jclepro.2019.119567)]
10. de-Troya, J.J.; Álvarez, C.; Fernández-Garrido, C.; Carral, L. Analysing the possibilities of using fuel cells in ships. Int. J. Hydrogen Energy **2016**, 41, 2853–2866. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Analysing+the+possibilities+of+using+fuel+cells+in+ships&author=de-Troya,+J.J.&author=%C3%81lvarez,+C.&author=Fern%C3%A1ndez-Garrido,+C.&author=Carral,+L.&publication_year=2016&journal=Int.+J.+Hydrogen+Energy&volume=41&pages=2853%E2%80%932866&doi=10.1016/j.ijhydene.2015.11.145)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2015.11.145)]
11. Micoli, L.; Coppola, T.; Turco, M. A Case Study of a Solid Oxide Fuel Cell Plant on Board a Cruise Ship. J. Mar. Sci. Appl. **2021**, 20, 524–533. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=A+Case+Study+of+a+Solid+Oxide+Fuel+Cell+Plant+on+Board+a+Cruise+Ship&author=Micoli,+L.&author=Coppola,+T.&author=Turco,+M.&publication_year=2021&journal=J.+Mar.+Sci.+Appl.&volume=20&pages=524%E2%80%93533&doi=10.1007/s11804-021-00217-y)] [[CrossRef](http://doi.org/10.1007/s11804-021-00217-y)]
12. van Biert, L.; Godjevac, M.; Visser, K.; Aravind, P.V. A review of fuel cell systems for maritime applications. J. Power Sources **2016**, 327, 345–364. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=A+review+of+fuel+cell+systems+for+maritime+applications&author=van+Biert,+L.&author=Godjevac,+M.&author=Visser,+K.&author=Aravind,+P.V.&publication_year=2016&journal=J.+Power+Sources&volume=327&pages=345%E2%80%93364&doi=10.1016/j.jpowsour.2016.07.007)] [[CrossRef](http://doi.org/10.1016/j.jpowsour.2016.07.007)] [[Green Version](https://core.ac.uk/download/pdf/81217617.pdf)]
13. Inal, O.B.; Deniz, C. Assessment of fuel cell types for ships: Based on multi-criteria decision analysis. J. Clean. Prod. **2020**, 265, 121734. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Assessment+of+fuel+cell+types+for+ships:+Based+on+multi-criteria+decision+analysis&author=Inal,+O.B.&author=Deniz,+C.&publication_year=2020&journal=J.+Clean.+Prod.&volume=265&pages=121734&doi=10.1016/j.jclepro.2020.121734)] [[CrossRef](http://doi.org/10.1016/j.jclepro.2020.121734)]
14. Wang, X.; Zhu, J.; Han, M. Industrial Development Status and Prospects of the Marine Fuel Cell: A Review. J. Mar. Sci. Eng. **2023**, 11, 238. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Industrial+Development+Status+and+Prospects+of+the+Marine+Fuel+Cell:+A+Review&author=Wang,+X.&author=Zhu,+J.&author=Han,+M.&publication_year=2023&journal=J.+Mar.+Sci.+Eng.&volume=11&pages=238&doi=10.3390/jmse11020238)] [[CrossRef](http://doi.org/10.3390/jmse11020238)]
15. Shakeri, N.; Zadeh, M.; Bremnes Nielsen, J. Hydrogen Fuel Cells for Ship Electric Propulsion: Moving Toward Greener Ships. IEEE Electrif. Mag. **2020**, 8, 27–43. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Hydrogen+Fuel+Cells+for+Ship+Electric+Propulsion:+Moving+Toward+Greener+Ships&author=Shakeri,+N.&author=Zadeh,+M.&author=Bremnes+Nielsen,+J.&publication_year=2020&journal=IEEE+Electrif.+Mag.&volume=8&pages=27%E2%80%9343&doi=10.1109/MELE.2020.2985484)] [[CrossRef](http://doi.org/10.1109/MELE.2020.2985484)]
16. Jeon, H.; Park, K.; Kim, J. Comparison and Verification of Reliability Assessment Techniques for Fuel Cell-Based Hybrid Power System for Ships. J. Mar. Sci. Eng. **2020**, 8, 74. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Comparison+and+Verification+of+Reliability+Assessment+Techniques+for+Fuel+Cell-Based+Hybrid+Power+System+for+Ships&author=Jeon,+H.&author=Park,+K.&author=Kim,+J.&publication_year=2020&journal=J.+Mar.+Sci.+Eng.&volume=8&pages=74&doi=10.3390/jmse8020074)] [[CrossRef](http://doi.org/10.3390/jmse8020074)] [[Green Version](https://www.mdpi.com/2077-1312/8/2/74/pdf)]
17. Ghenai, C.; Bettayeb, M.; Brdjanin, B.; Hamid, A.K. Hybrid solar PV/PEM fuel Cell/Diesel Generator power system for cruise ship: A case study in Stockholm, Sweden. Case Stud. Therm. Eng. **2019**, 14, 100497. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Hybrid+solar+PV/PEM+fuel+Cell/Diesel+Generator+power+system+for+cruise+ship:+A+case+study+in+Stockholm,+Sweden&author=Ghenai,+C.&author=Bettayeb,+M.&author=Brdjanin,+B.&author=Hamid,+A.K.&publication_year=2019&journal=Case+Stud.+Therm.+Eng.&volume=14&pages=100497&doi=10.1016/j.csite.2019.100497)] [[CrossRef](http://doi.org/10.1016/j.csite.2019.100497)]
18. Stark, C.; Xu, Y.; Zhang, M.; Yuan, Z.; Tao, L.; Shi, W. Study on Applicability of Energy-Saving Devices to Hydrogen Fuel Cell-Powered Ships. J. Mar. Sci. Eng. **2022**, 10, 388. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Study+on+Applicability+of+Energy-Saving+Devices+to+Hydrogen+Fuel+Cell-Powered+Ships&author=Stark,+C.&author=Xu,+Y.&author=Zhang,+M.&author=Yuan,+Z.&author=Tao,+L.&author=Shi,+W.&publication_year=2022&journal=J.+Mar.+Sci.+Eng.&volume=10&pages=388&doi=10.3390/jmse10030388)] [[CrossRef](http://doi.org/10.3390/jmse10030388)]
19. Jeon, H.; Kim, S.; Yoon, K. Fuel Cell Application for Investigating the Quality of Electricity from Ship Hybrid Power Sources. J. Mar. Sci. Eng. **2019**, 7, 241. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Fuel+Cell+Application+for+Investigating+the+Quality+of+Electricity+from+Ship+Hybrid+Power+Sources&author=Jeon,+H.&author=Kim,+S.&author=Yoon,+K.&publication_year=2019&journal=J.+Mar.+Sci.+Eng.&volume=7&pages=241&doi=10.3390/jmse7080241)] [[CrossRef](http://doi.org/10.3390/jmse7080241)] [[Green Version](https://www.mdpi.com/2077-1312/7/8/241/pdf)]
20. Wu, P.; Partridge, J.; Bucknall, R. Cost-effective reinforcement learning energy management for plug-in hybrid fuel cell and battery ships. Appl. Energy **2020**, 275, 115258. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Cost-effective+reinforcement+learning+energy+management+for+plug-in+hybrid+fuel+cell+and+battery+ships&author=Wu,+P.&author=Partridge,+J.&author=Bucknall,+R.&publication_year=2020&journal=Appl.+Energy&volume=275&pages=115258&doi=10.1016/j.apenergy.2020.115258)] [[CrossRef](http://doi.org/10.1016/j.apenergy.2020.115258)]
21. Baldi, F.; Moret, S.; Tammi, K.; Maréchal, F. The role of solid oxide fuel cells in future ship energy systems. Energy **2020**, 194, 116811. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=The+role+of+solid+oxide+fuel+cells+in+future+ship+energy+systems&author=Baldi,+F.&author=Moret,+S.&author=Tammi,+K.&author=Mar%C3%A9chal,+F.&publication_year=2020&journal=Energy&volume=194&pages=116811&doi=10.1016/j.energy.2019.116811)] [[CrossRef](http://doi.org/10.1016/j.energy.2019.116811)]
22. Kistner, L.; Bensmann, A.; Hanke-Rauschenbach, R. Optimal Design of a Distributed Ship Power System with Solid Oxide Fuel Cells under the Consideration of Component Malfunctions. Appl. Energy **2022**, 316, 119052. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Optimal+Design+of+a+Distributed+Ship+Power+System+with+Solid+Oxide+Fuel+Cells+under+the+Consideration+of+Component+Malfunctions&author=Kistner,+L.&author=Bensmann,+A.&author=Hanke-Rauschenbach,+R.&publication_year=2022&journal=Appl.+Energy&volume=316&pages=119052&doi=10.1016/j.apenergy.2022.119052)] [[CrossRef](http://doi.org/10.1016/j.apenergy.2022.119052)]
23. Seyam, S.; Dincer, I.; Agelin-Chaab, M. An innovative study on a hybridized ship powering system with fuel cells using hydrogen and clean fuel blends. Appl. Therm. Eng. **2023**, 221, 119893. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=An+innovative+study+on+a+hybridized+ship+powering+system+with+fuel+cells+using+hydrogen+and+clean+fuel+blends&author=Seyam,+S.&author=Dincer,+I.&author=Agelin-Chaab,+M.&publication_year=2023&journal=Appl.+Therm.+Eng.&volume=221&pages=119893&doi=10.1016/j.applthermaleng.2022.119893)] [[CrossRef](http://doi.org/10.1016/j.applthermaleng.2022.119893)]
24. Wang, X.; Mi, X.; Lv, X.; Weng, Y. Fast and stable operation approach of ship solid oxide fuel cell-gas turbine hybrid system under uncertain factors. Int. J. Hydrogen Energy **2022**, 47, 21472–21491. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Fast+and+stable+operation+approach+of+ship+solid+oxide+fuel+cell-gas+turbine+hybrid+system+under+uncertain+factors&author=Wang,+X.&author=Mi,+X.&author=Lv,+X.&author=Weng,+Y.&publication_year=2022&journal=Int.+J.+Hydrogen+Energy&volume=47&pages=21472%E2%80%9321491&doi=10.1016/j.ijhydene.2022.04.284)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2022.04.284)]
25. Oh, D.; Cho, D.-S.; Kim, T.-W. Design and evaluation of hybrid propulsion ship powered by fuel cell and bottoming cycle. Int. J. Hydrogen Energy **2023**, 48, 8273–8285. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Design+and+evaluation+of+hybrid+propulsion+ship+powered+by+fuel+cell+and+bottoming+cycle&author=Oh,+D.&author=Cho,+D.-S.&author=Kim,+T.-W.&publication_year=2023&journal=Int.+J.+Hydrogen+Energy&volume=48&pages=8273%E2%80%938285&doi=10.1016/j.ijhydene.2022.11.157)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2022.11.157)]
26. Chen, H.; Zhang, Z.; Guan, C.; Gao, H. Optimization of sizing and frequency control in battery/supercapacitor hybrid energy storage system for fuel cell ship. Energy **2020**, 197, 117285. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Optimization+of+sizing+and+frequency+control+in+battery/supercapacitor+hybrid+energy+storage+system+for+fuel+cell+ship&author=Chen,+H.&author=Zhang,+Z.&author=Guan,+C.&author=Gao,+H.&publication_year=2020&journal=Energy&volume=197&pages=117285&doi=10.1016/j.energy.2020.117285)] [[CrossRef](http://doi.org/10.1016/j.energy.2020.117285)]
27. Royle, M.; Willoughby, D. The safety of the future hydrogen economy. Process Saf. Environ. Prot. **2011**, 89, 452–462. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=The+safety+of+the+future+hydrogen+economy&author=Royle,+M.&author=Willoughby,+D.&publication_year=2011&journal=Process+Saf.+Environ.+Prot.&volume=89&pages=452%E2%80%93462&doi=10.1016/j.psep.2011.09.003)] [[CrossRef](http://doi.org/10.1016/j.psep.2011.09.003)]
28. Crowl, D.A.; Jo, Y.-D. The hazards and risks of hydrogen. J. Loss Prev. Process Ind. **2007**, 20, 158–164. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=The+hazards+and+risks+of+hydrogen&author=Crowl,+D.A.&author=Jo,+Y.-D.&publication_year=2007&journal=J.+Loss+Prev.+Process+Ind.&volume=20&pages=158%E2%80%93164&doi=10.1016/j.jlp.2007.02.002)] [[CrossRef](http://doi.org/10.1016/j.jlp.2007.02.002)]
29. Mazloomi, K.; Gomes, C. Hydrogen as an energy carrier: Prospects and challenges. Renew. Sustain. Energy Rev. **2012**, 16, 3024–3033. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Hydrogen+as+an+energy+carrier:+Prospects+and+challenges&author=Mazloomi,+K.&author=Gomes,+C.&publication_year=2012&journal=Renew.+Sustain.+Energy+Rev.&volume=16&pages=3024%E2%80%933033&doi=10.1016/j.rser.2012.02.028)] [[CrossRef](http://doi.org/10.1016/j.rser.2012.02.028)]
30. San Marchi, C.; Hecht, E.S.; Ekoto, I.W.; Groth, K.M.; LaFleur, C.; Somerday, B.P.; Mukundan, R.; Rockward, T.; Keller, J.; James, C.W. Overview of the DOE hydrogen safety, codes and standards program, part 3: Advances in research and development to enhance the scientific basis for hydrogen regulations, codes and standards. Int. J. Hydrogen Energy **2017**, 42, 7263–7274. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Overview+of+the+DOE+hydrogen+safety,+codes+and+standards+program,+part+3:+Advances+in+research+and+development+to+enhance+the+scientific+basis+for+hydrogen+regulations,+codes+and+standards&author=San+Marchi,+C.&author=Hecht,+E.S.&author=Ekoto,+I.W.&author=Groth,+K.M.&author=LaFleur,+C.&author=Somerday,+B.P.&author=Mukundan,+R.&author=Rockward,+T.&author=Keller,+J.&author=James,+C.W.&publication_year=2017&journal=Int.+J.+Hydrogen+Energy&volume=42&pages=7263%E2%80%937274&doi=10.1016/j.ijhydene.2016.07.014)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2016.07.014)] [[Green Version](https://manuscript.elsevier.com/S0360319916320225/pdf/S0360319916320225.pdf)]
31. Lacome, J.M.; Jamois, D.; Perrette, L.; Proust, C.H. Large-scale hydrogen release in an isothermal confined area. Int. J. Hydrogen Energy **2011**, 36, 2302–2312. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Large-scale+hydrogen+release+in+an+isothermal+confined+area&author=Lacome,+J.M.&author=Jamois,+D.&author=Perrette,+L.&author=Proust,+C.H.&publication_year=2011&journal=Int.+J.+Hydrogen+Energy&volume=36&pages=2302%E2%80%932312&doi=10.1016/j.ijhydene.2010.10.080)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2010.10.080)] [[Green Version](http://hal.archives-ouvertes.fr/docs/00/97/32/69/PDF/2007-235_hal.pdf)]
32. Khalil, Y.F. A probabilistic visual-flowcharting-based model for consequence assessment of fire and explosion events involving leaks of flammable gases. J. Loss Prev. Process Ind. **2017**, 50, 190–204. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=A+probabilistic+visual-flowcharting-based+model+for+consequence+assessment+of+fire+and+explosion+events+involving+leaks+of+flammable+gases&author=Khalil,+Y.F.&publication_year=2017&journal=J.+Loss+Prev.+Process+Ind.&volume=50&pages=190%E2%80%93204&doi=10.1016/j.jlp.2017.09.016)] [[CrossRef](http://doi.org/10.1016/j.jlp.2017.09.016)]
33. Chen, P.S.-L.; Fan, H.; Enshaei, H.; Zhang, W.; Shi, W.; Abdussamie, N.; Miwa, T.; Qu, Z.; Yang, Z. A review on ports’ readiness to facilitate international hydrogen trade. Int. J. Hydrogen Energy **2023**. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=A+review+on+ports%E2%80%99+readiness+to+facilitate+international+hydrogen+trade&author=Chen,+P.S.-L.&author=Fan,+H.&author=Enshaei,+H.&author=Zhang,+W.&author=Shi,+W.&author=Abdussamie,+N.&author=Miwa,+T.&author=Qu,+Z.&author=Yang,+Z.&publication_year=2023&journal=Int.+J.+Hydrogen+Energy&doi=10.1016/j.ijhydene.2023.01.220)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2023.01.220)]
34. Suzuki, T.; Shiota, K.; Izato, Y.-I.; Komori, M.; Sato, K.; Takai, Y.; Ninomiya, T.; Miyake, A. Quantitative risk assessment using a Japanese hydrogen refueling station model. Int. J. Hydrogen Energy **2021**, 46, 8329–8343. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Quantitative+risk+assessment+using+a+Japanese+hydrogen+refueling+station+model&author=Suzuki,+T.&author=Shiota,+K.&author=Izato,+Y.-I.&author=Komori,+M.&author=Sato,+K.&author=Takai,+Y.&author=Ninomiya,+T.&author=Miyake,+A.&publication_year=2021&journal=Int.+J.+Hydrogen+Energy&volume=46&pages=8329%E2%80%938343&doi=10.1016/j.ijhydene.2020.12.035)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2020.12.035)]
35. Brzezińska, D. Hydrogen Dispersion and Ventilation Effects in Enclosures under Different Release Conditions. Energies **2021**, 14, 4029. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Hydrogen+Dispersion+and+Ventilation+Effects+in+Enclosures+under+Different+Release+Conditions&author=Brzezi%C5%84ska,+D.&publication_year=2021&journal=Energies&volume=14&pages=4029&doi=10.3390/en14134029)] [[CrossRef](http://doi.org/10.3390/en14134029)]
36. Han, U.; Oh, J.; Lee, H. Safety investigation of hydrogen charging platform package with CFD simulation. Int. J. Hydrogen Energy **2018**, 43, 13687–13699. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Safety+investigation+of+hydrogen+charging+platform+package+with+CFD+simulation&author=Han,+U.&author=Oh,+J.&author=Lee,+H.&publication_year=2018&journal=Int.+J.+Hydrogen+Energy&volume=43&pages=13687%E2%80%9313699&doi=10.1016/j.ijhydene.2018.05.116)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2018.05.116)]
37. Kim, S.J.; Lee, H.H.; Park, S.W.; Baeg, D.Y.; Kim, J.H.; Seo, J.K. Blast Loading Profile of Gaseous Hydrogen in Confined Space Under Various Leak Conditions. In Proceedings of the ASME 2022 41st International Conference on Ocean, Offshore and Arctic Engineering, Hamburg, Germany, 5–10 June 2022. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Blast+Loading+Profile+of+Gaseous+Hydrogen+in+Confined+Space+Under+Various+Leak+Conditions&conference=Proceedings+of+the+ASME+2022+41st+International+Conference+on+Ocean,+Offshore+and+Arctic+Engineering&author=Kim,+S.J.&author=Lee,+H.H.&author=Park,+S.W.&author=Baeg,+D.Y.&author=Kim,+J.H.&author=Seo,+J.K.&publication_year=2022)]
38. Klebanoff, L.E.; Pratt, J.W.; LaFleur, C.B. Comparison of the safety-related physical and combustion properties of liquid hydrogen and liquid natural gas in the context of the SF-BREEZE high-speed fuel-cell ferry. Int. J. Hydrogen Energy **2017**, 42, 757–774. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Comparison+of+the+safety-related+physical+and+combustion+properties+of+liquid+hydrogen+and+liquid+natural+gas+in+the+context+of+the+SF-BREEZE+high-speed+fuel-cell+ferry&author=Klebanoff,+L.E.&author=Pratt,+J.W.&author=LaFleur,+C.B.&publication_year=2017&journal=Int.+J.+Hydrogen+Energy&volume=42&pages=757%E2%80%93774&doi=10.1016/j.ijhydene.2016.11.024)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2016.11.024)] [[Green Version](https://manuscript.elsevier.com/S036031991633316X/pdf/S036031991633316X.pdf)]
39. Li, F.; Yuan, Y.; Yan, X.; Malekian, R.; Li, Z. A study on a numerical simulation of the leakage and diffusion of hydrogen in a fuel cell ship. Renew. Sustain. Energy Rev. **2018**, 97, 177–185. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=A+study+on+a+numerical+simulation+of+the+leakage+and+diffusion+of+hydrogen+in+a+fuel+cell+ship&author=Li,+F.&author=Yuan,+Y.&author=Yan,+X.&author=Malekian,+R.&author=Li,+Z.&publication_year=2018&journal=Renew.+Sustain.+Energy+Rev.&volume=97&pages=177%E2%80%93185&doi=10.1016/j.rser.2018.08.034)] [[CrossRef](http://doi.org/10.1016/j.rser.2018.08.034)] [[Green Version](https://repository.up.ac.za/bitstream/2263/67245/1/Li_Study_2018.pdf)]
40. Mao, X.; Ying, R.; Yuan, Y.; Li, F.; Shen, B. Simulation and analysis of hydrogen leakage and explosion behaviors in various compartments on a hydrogen fuel cell ship. Int. J. Hydrogen Energy **2021**, 46, 6857–6872. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Simulation+and+analysis+of+hydrogen+leakage+and+explosion+behaviors+in+various+compartments+on+a+hydrogen+fuel+cell+ship&author=Mao,+X.&author=Ying,+R.&author=Yuan,+Y.&author=Li,+F.&author=Shen,+B.&publication_year=2021&journal=Int.+J.+Hydrogen+Energy&volume=46&pages=6857%E2%80%936872&doi=10.1016/j.ijhydene.2020.11.158)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2020.11.158)]
41. Park, S.W.; Kim, J.H.; Seo, J.K. Explosion Characteristics of Hydrogen Gas in Varying Ship Ventilation Tunnel Geometries: An Experimental Study. J. Mar. Sci. Eng. **2022**, 10, 532. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Explosion+Characteristics+of+Hydrogen+Gas+in+Varying+Ship+Ventilation+Tunnel+Geometries:+An+Experimental+Study&author=Park,+S.W.&author=Kim,+J.H.&author=Seo,+J.K.&publication_year=2022&journal=J.+Mar.+Sci.+Eng.&volume=10&pages=532&doi=10.3390/jmse10040532)] [[CrossRef](http://doi.org/10.3390/jmse10040532)]
42. Yuan, Y.; Wu, S.; Shen, B. A numerical simulation of the suppression of hydrogen jet fires on hydrogen fuel cell ships using a fine water mist. Int. J. Hydrogen Energy **2021**, 46, 13353–13364. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=A+numerical+simulation+of+the+suppression+of+hydrogen+jet+fires+on+hydrogen+fuel+cell+ships+using+a+fine+water+mist&author=Yuan,+Y.&author=Wu,+S.&author=Shen,+B.&publication_year=2021&journal=Int.+J.+Hydrogen+Energy&volume=46&pages=13353%E2%80%9313364&doi=10.1016/j.ijhydene.2021.01.130)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2021.01.130)]
43. IMO. Interim Guidelines for the Safety of Ships Using Fuel Cell Power Installations; IMO: London, UK, 2022. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Interim+Guidelines+for+the+Safety+of+Ships+Using+Fuel+Cell+Power+Installations&author=IMO&publication_year=2022)]
44. Chen, L.; Guan, W. Safety Design and Engineering Solution of Fuel Cell Powered Ship in Inland Waterway of China. World Electr. Veh. J. **2021**, 12, 202. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Safety+Design+and+Engineering+Solution+of+Fuel+Cell+Powered+Ship+in+Inland+Waterway+of+China&author=Chen,+L.&author=Guan,+W.&publication_year=2021&journal=World+Electr.+Veh.+J.&volume=12&pages=202&doi=10.3390/wevj12040202)] [[CrossRef](http://doi.org/10.3390/wevj12040202)]
45. Feng, Y.; Cao, J.; Zhang, Y.; Jin, D. Safety Analysis and Risk Control of Shore-Based Bunkering Operations for Hydrogen Powered Ships. World Electr. Veh. J. **2021**, 12, 162. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Safety+Analysis+and+Risk+Control+of+Shore-Based+Bunkering+Operations+for+Hydrogen+Powered+Ships&author=Feng,+Y.&author=Cao,+J.&author=Zhang,+Y.&author=Jin,+D.&publication_year=2021&journal=World+Electr.+Veh.+J.&volume=12&pages=162&doi=10.3390/wevj12040162)] [[CrossRef](http://doi.org/10.3390/wevj12040162)]
46. Zhao, Y.; Liu, Y.; Liu, G.; Yang, Q.; Li, L.; Gao, Z. Air and hydrogen supply systems and equipment for PEM fuel cells: A review. Int. J. Green Energy **2021**, 19, 331–348. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Air+and+hydrogen+supply+systems+and+equipment+for+PEM+fuel+cells:+A+review&author=Zhao,+Y.&author=Liu,+Y.&author=Liu,+G.&author=Yang,+Q.&author=Li,+L.&author=Gao,+Z.&publication_year=2021&journal=Int.+J.+Green+Energy&volume=19&pages=331%E2%80%93348&doi=10.1080/15435075.2021.1946812)] [[CrossRef](http://doi.org/10.1080/15435075.2021.1946812)]
47. Wang, X.; Zhang, C.; Gao, W. Risk assessment of hydrogen leakage in diesel hydrogenation process. Int. J. Hydrogen Energy **2022**, 47, 6955–6964. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Risk+assessment+of+hydrogen+leakage+in+diesel+hydrogenation+process&author=Wang,+X.&author=Zhang,+C.&author=Gao,+W.&publication_year=2022&journal=Int.+J.+Hydrogen+Energy&volume=47&pages=6955%E2%80%936964&doi=10.1016/j.ijhydene.2021.12.027)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2021.12.027)]
48. Saffers, J.B.; Molkov, V.V. Hydrogen safety engineering framework and elementary design safety tools. Int. J. Hydrogen Energy **2014**, 39, 6268–6285. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Hydrogen+safety+engineering+framework+and+elementary+design+safety+tools&author=Saffers,+J.B.&author=Molkov,+V.V.&publication_year=2014&journal=Int.+J.+Hydrogen+Energy&volume=39&pages=6268%E2%80%936285&doi=10.1016/j.ijhydene.2013.06.060)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2013.06.060)]
49. Lach, A.W.; Gaathaug, A.V.; Vaagsaether, K. Pressure peaking phenomena: Unignited hydrogen releases in confined spaces—Large-scale experiments. Int. J. Hydrogen Energy **2020**, 45, 32702–32712. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Pressure+peaking+phenomena:+Unignited+hydrogen+releases+in+confined+spaces%E2%80%94Large-scale+experiments&author=Lach,+A.W.&author=Gaathaug,+A.V.&author=Vaagsaether,+K.&publication_year=2020&journal=Int.+J.+Hydrogen+Energy&volume=45&pages=32702%E2%80%9332712&doi=10.1016/j.ijhydene.2020.08.221)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2020.08.221)]
50. Kobayashi, H.; Naruo, Y.; Maru, Y.; Takesaki, Y.; Miyanabe, K. Experiment of cryo-compressed (90-MPa) hydrogen leakage diffusion. Int. J. Hydrogen Energy **2018**, 43, 17928–17937. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Experiment+of+cryo-compressed+\(90-MPa\)+hydrogen+leakage+diffusion&author=Kobayashi,+H.&author=Naruo,+Y.&author=Maru,+Y.&author=Takesaki,+Y.&author=Miyanabe,+K.&publication_year=2018&journal=Int.+J.+Hydrogen+Energy&volume=43&pages=17928%E2%80%9317937&doi=10.1016/j.ijhydene.2018.07.145)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2018.07.145)]
51. Lan, H.; Wang, G.; Zhao, K.; He, Y.; Zheng, T. Review on the Hydrogen Dispersion and the Burning Behavior of Fuel Cell Electric Vehicles. Energies **2022**, 15, 7295. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Review+on+the+Hydrogen+Dispersion+and+the+Burning+Behavior+of+Fuel+Cell+Electric+Vehicles&author=Lan,+H.&author=Wang,+G.&author=Zhao,+K.&author=He,+Y.&author=Zheng,+T.&publication_year=2022&journal=Energies&volume=15&pages=7295&doi=10.3390/en15197295)] [[CrossRef](http://doi.org/10.3390/en15197295)]
52. Li, Y.; Hou, X.; Wang, C.; Wang, Q.; Qi, W.; Li, J.; Zhang, X. Modeling and analysis of hydrogen diffusion in an enclosed fuel cell vehicle with obstacles. Int. J. Hydrogen Energy **2022**, 47, 5745–5756. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Modeling+and+analysis+of+hydrogen+diffusion+in+an+enclosed+fuel+cell+vehicle+with+obstacles&author=Li,+Y.&author=Hou,+X.&author=Wang,+C.&author=Wang,+Q.&author=Qi,+W.&author=Li,+J.&author=Zhang,+X.&publication_year=2022&journal=Int.+J.+Hydrogen+Energy&volume=47&pages=5745%E2%80%935756&doi=10.1016/j.ijhydene.2021.11.205)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2021.11.205)]
53. Middha, P.; Hansen, O.R.; Grune, J.; Kotchourko, A. CFD calculations of gas leak dispersion and subsequent gas explosions: Validation against ignited impinging hydrogen jet experiments. J. Hazard. Mater. **2010**, 179, 84–94. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=CFD+calculations+of+gas+leak+dispersion+and+subsequent+gas+explosions:+Validation+against+ignited+impinging+hydrogen+jet+experiments&author=Middha,+P.&author=Hansen,+O.R.&author=Grune,+J.&author=Kotchourko,+A.&publication_year=2010&journal=J.+Hazard.+Mater.&volume=179&pages=84%E2%80%9394&doi=10.1016/j.jhazmat.2010.02.061)] [[CrossRef](http://doi.org/10.1016/j.jhazmat.2010.02.061)]
54. Lu, T.; Gong, J. Affecting mechanism of partition boards on hydrogen dispersion in confined space with symmetrical lateral openings. Int. J. Hydrogen Energy **2021**, 46, 38944–38958. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Affecting+mechanism+of+partition+boards+on+hydrogen+dispersion+in+confined+space+with+symmetrical+lateral+openings&author=Lu,+T.&author=Gong,+J.&publication_year=2021&journal=Int.+J.+Hydrogen+Energy&volume=46&pages=38944%E2%80%9338958&doi=10.1016/j.ijhydene.2021.09.131)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2021.09.131)]
55. Belova, O.V.; Zorina, I.G. Validation study of gas mixture propagation in hydrogen safety applications. In Proceedings of the International Conference on Science and Applied Science (Icsas2020), Omsk, Russia, 26–29 February 2020. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Validation+study+of+gas+mixture+propagation+in+hydrogen+safety+applications&conference=Proceedings+of+the+International+Conference+on+Science+and+Applied+Science+\(Icsas2020\)&author=Belova,+O.V.&author=Zorina,+I.G.&publication_year=2020)]
56. Middha, P.; Hansen, O.R.; Storvik, I.E. Validation of CFD-model for hydrogen dispersion. J. Loss Prev. Process Ind. **2009**, 22, 1034–1038. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Validation+of+CFD-model+for+hydrogen+dispersion&author=Middha,+P.&author=Hansen,+O.R.&author=Storvik,+I.E.&publication_year=2009&journal=J.+Loss+Prev.+Process+Ind.&volume=22&pages=1034%E2%80%931038&doi=10.1016/j.jlp.2009.07.020)] [[CrossRef](http://doi.org/10.1016/j.jlp.2009.07.020)] [[Green Version](https://core.ac.uk/reader/30926539)]
57. Houf, W.G.; Evans, G.H.; Ekoto, I.W.; Merilo, E.G.; Groethe, M.A. Hydrogen fuel-cell forklift vehicle releases in enclosed spaces. Int. J. Hydrogen Energy **2013**, 38, 8179–8189. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Hydrogen+fuel-cell+forklift+vehicle+releases+in+enclosed+spaces&author=Houf,+W.G.&author=Evans,+G.H.&author=Ekoto,+I.W.&author=Merilo,+E.G.&author=Groethe,+M.A.&publication_year=2013&journal=Int.+J.+Hydrogen+Energy&volume=38&pages=8179%E2%80%938189&doi=10.1016/j.ijhydene.2012.05.115)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2012.05.115)]
58. Ekoto, I.W.; Houf, W.G.; Evans, G.H.; Merilo, E.G.; Groethe, M.A. Experimental investigation of hydrogen release and ignition from fuel cell powered forklifts in enclosed spaces. Int. J. Hydrogen Energy **2012**, 37, 17446–17456. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Experimental+investigation+of+hydrogen+release+and+ignition+from+fuel+cell+powered+forklifts+in+enclosed+spaces&author=Ekoto,+I.W.&author=Houf,+W.G.&author=Evans,+G.H.&author=Merilo,+E.G.&author=Groethe,+M.A.&publication_year=2012&journal=Int.+J.+Hydrogen+Energy&volume=37&pages=17446%E2%80%9317456&doi=10.1016/j.ijhydene.2012.03.161)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2012.03.161)]
59. Moen, A.; Mauri, L.; Narasimhamurthy, V.D. Comparison of k-ε models in gaseous release and dispersion simulations using the CFD code FLACS. Process Saf. Environ. Prot. **2019**, 130, 306–316. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Comparison+of+k-%CE%B5+models+in+gaseous+release+and+dispersion+simulations+using+the+CFD+code+FLACS&author=Moen,+A.&author=Mauri,+L.&author=Narasimhamurthy,+V.D.&publication_year=2019&journal=Process+Saf.+Environ.+Prot.&volume=130&pages=306%E2%80%93316&doi=10.1016/j.psep.2019.08.016)] [[CrossRef](http://doi.org/10.1016/j.psep.2019.08.016)]
60. Wang, Q.; Zhai, C.; Gong, J.; Wang, Z.; Jiang, J.; Zhou, Y. Analytical and numerical predictions of hydrogen gas flow induced by wall and corner leakages in confined space. Int. J. Hydrogen Energy **2020**, 45, 6848–6862. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Analytical+and+numerical+predictions+of+hydrogen+gas+flow+induced+by+wall+and+corner+leakages+in+confined+space&author=Wang,+Q.&author=Zhai,+C.&author=Gong,+J.&author=Wang,+Z.&author=Jiang,+J.&author=Zhou,+Y.&publication_year=2020&journal=Int.+J.+Hydrogen+Energy&volume=45&pages=6848%E2%80%936862&doi=10.1016/j.ijhydene.2019.12.219)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2019.12.219)]
61. Wang, Q.; Zhai, C.; Gong, J.; Jiang, J.; Wang, Z.; Zhou, Y. Estimating leaked hydrogen gas flow in confined space through coupling zone model and point source buoyancy plume theory. Int. J. Hydrogen Energy **2019**, 44, 15644–15656. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Estimating+leaked+hydrogen+gas+flow+in+confined+space+through+coupling+zone+model+and+point+source+buoyancy+plume+theory&author=Wang,+Q.&author=Zhai,+C.&author=Gong,+J.&author=Jiang,+J.&author=Wang,+Z.&author=Zhou,+Y.&publication_year=2019&journal=Int.+J.+Hydrogen+Energy&volume=44&pages=15644%E2%80%9315656&doi=10.1016/j.ijhydene.2019.04.023)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2019.04.023)]
62. Ji, H.W.; Lee, H.; Hwang, I.; Jang, H. Safe Ventilation Methods against Leaks in Hydrogen Fuel Cell Rooms in Homes. Energies **2022**, 15, 5434. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Safe+Ventilation+Methods+against+Leaks+in+Hydrogen+Fuel+Cell+Rooms+in+Homes&author=Ji,+H.W.&author=Lee,+H.&author=Hwang,+I.&author=Jang,+H.&publication_year=2022&journal=Energies&volume=15&pages=5434&doi=10.3390/en15155434)] [[CrossRef](http://doi.org/10.3390/en15155434)]
63. Lv, H.; Shen, Y.; Zheng, T.; Zhou, W.; Ming, P.; Zhang, C. Numerical study of hydrogen leakage, diffusion, and combustion in an outdoor parking space under different parking configurations. Renew. Sustain. Energy Rev. **2023**, 173, 113093. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Numerical+study+of+hydrogen+leakage,+diffusion,+and+combustion+in+an+outdoor+parking+space+under+different+parking+configurations&author=Lv,+H.&author=Shen,+Y.&author=Zheng,+T.&author=Zhou,+W.&author=Ming,+P.&author=Zhang,+C.&publication_year=2023&journal=Renew.+Sustain.+Energy+Rev.&volume=173&pages=113093&doi=10.1016/j.rser.2022.113093)] [[CrossRef](http://doi.org/10.1016/j.rser.2022.113093)]
64. Lucas, M.; Skjold, T.; Hisken, H. Computational fluid dynamics simulations of hydrogen releases and vented deflagrations in large enclosures. J. Loss Prev. Process Ind. **2020**, 63, 103999. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Computational+fluid+dynamics+simulations+of+hydrogen+releases+and+vented+deflagrations+in+large+enclosures&author=Lucas,+M.&author=Skjold,+T.&author=Hisken,+H.&publication_year=2020&journal=J.+Loss+Prev.+Process+Ind.&volume=63&pages=103999&doi=10.1016/j.jlp.2019.103999)] [[CrossRef](http://doi.org/10.1016/j.jlp.2019.103999)]
65. Huang, T.; Zhao, M.; Ba, Q.; Christopher, D.M.; Li, X. Modeling of hydrogen dispersion from hydrogen fuel cell vehicles in an underground parking garage. Int. J. Hydrogen Energy **2022**, 47, 686–696. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=Modeling+of+hydrogen+dispersion+from+hydrogen+fuel+cell+vehicles+in+an+underground+parking+garage&author=Huang,+T.&author=Zhao,+M.&author=Ba,+Q.&author=Christopher,+D.M.&author=Li,+X.&publication_year=2022&journal=Int.+J.+Hydrogen+Energy&volume=47&pages=686%E2%80%93696&doi=10.1016/j.ijhydene.2021.08.196)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2021.08.196)]
66. Lee, I.; Lee, M.C. A study on the optimal design of a ventilation system to prevent explosion due to hydrogen gas leakage in a fuel cell power generation facility. Int. J. Hydrogen Energy **2016**, 41, 18663–18686. [[Google Scholar](http://scholar.google.com/scholar_lookup?title=A+study+on+the+optimal+design+of+a+ventilation+system+to+prevent+explosion+due+to+hydrogen+gas+leakage+in+a+fuel+cell+power+generation+facility&author=Lee,+I.&author=Lee,+M.C.&publication_year=2016&journal=Int.+J.+Hydrogen+Energy&volume=41&pages=18663%E2%80%9318686&doi=10.1016/j.ijhydene.2016.08.083)] [[CrossRef](http://doi.org/10.1016/j.ijhydene.2016.08.083)]

**Figure 1.** Hydrogen leakage event tree in enclosed space or confined space.

[![Jmse 11 00651 g001](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g001.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g001.png)

**Figure 2.** Framework of this study.

[![Jmse 11 00651 g002](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g002.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g002.png)

**Figure 3.** General arrangement of the “San Xia Qing Zhou 1”.

[![Jmse 11 00651 g003](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g003.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g003.png)

**Figure 4.** Top view of arrangement in fuel cell room.

[![Jmse 11 00651 g004](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g004.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g004.png)

**Figure 5.** Hydrogen gas supply system.

[![Jmse 11 00651 g005](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g005.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g005.png)

**Figure 6.** Comparison of the simulation results and the experimental results.

[![Jmse 11 00651 g006](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g006.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g006.png)

**Figure 7.** Three-dimensional view of the grid sizes, gas monitoring points on the YZ plane (X = 0.1 m), and internal equipment in the fuel cell room.

[![Jmse 11 00651 g007](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g007.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g007.png)

**Figure 8.** Three-dimensional views of hydrogen gas dispersion in the fuel cell room at different times from 1 s to 6 s. (the times represent the seconds after the start of hydrogen leakage).

[![Jmse 11 00651 g008](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g008.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g008.png)

**Figure 9.** Two-dimensional slice views of hydrogen gas dispersion in the fuel cell room (on the XZ and XY plane) at different times from 1 s to 6 s (the times represent the seconds after the start of hydrogen leakage).

[![Jmse 11 00651 g009](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g009.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g009.png)

**Figure 10.** Changes in hydrogen concentration at MP4, MP11, and MP20 in scenarios 1, 2, 3, and 4. (**a**) Scenario 1 (leakage diameter = 1 mm); (**b**) Scenario 2 (leakage diameter = 3 mm); (**c**) Scenario 3 (leakage diameter = 5 mm); (**d**) Scenario 4 (leakage diameter = 10 mm).

[![Jmse 11 00651 g010](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g010.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g010.png)

**Figure 11.** Hydrogen concentration at MP11 for different leak diameters.

[![Jmse 11 00651 g011](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g011.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g011.png)

**Figure 12.** Monitoring points identified for different leakage directions.

[![Jmse 11 00651 g012](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g012.png)](https://www.mdpi.com/jmse/jmse-11-00651/article_deploy/html/images/jmse-11-00651-g012.png)

**Table 1.** General arrangement of “San Xia Qing Zhou 1”.

|Overall Length|49.90 m|Propulsion|Two Rudder Propellers|
|---|---|---|---|
|Depth|3.2 m|Power of FC|560 kW|
|Breadth|10.40 m|Lithium battery packs|1806 kWh|
|Draught|1.85 m|Nominal propeller power|2 × 500 kW|
|Crew and passenger|80 P|Maximum speed|28 km/h (15.12 knots)|

**Table 2.** Reasons for hydrogen leakage in hydrogen gas supply system.

|Valve Leakage|Pipeline Leakage|
|---|---|
|- Improper transportation and storage of valves|- The machining accuracy of pipe joint is too low|
|- Valve’s uneven wear during use|- The surface finish of pipe joint does not meet the requirements|
|- Impurities cause scratches on the sealing surface|- Poor expansion welding technology|
|- The symmetry of flange is poor in installation|- Workers did not follow the installation process|
|- Loose fastening sleeve or thread|- Accidental collision of pipeline|
|- Failure of sleeve joints or threaded joints|- Pipeline safety protection measures are not in place|
|- Uneven pre-tightening force on the sleeve or thread|- Weld cracking|
|- Aging of valves filler||
|- The pre-tightening force on the sleeve or thread is too small||

**Table 3.** Environmental parameters and ventilation parameters of fuel cell room.

|Environmental Parameters|   |Ventilation Parameters of FCR|   |
|---|---|---|---|
|Standard atmospheric pressure|101,325 Pa|Mechanical exhaust|Air quantity: 5000 m3/h,  <br>Wind pressure: 390 Pa|
|Heat radiation intensity|0 w|Ventilation|Natural inlet|
|Environment temperature|15 °C|Atmospheric stability|F|

**Table 4.** Dimensions and locations of the equipment in the fuel cell room.

|Equipment|Dimensions (mm)|   |   |Locations (mm)|   |   |
|---|---|---|---|---|---|---|
||Length|Width|Height|X|Y|Z|
|---|---|---|---|---|---|---|
|No. 1 FC|1200|650|1200|3100|700|0|
|No. 2 FC|1200|650|1200|4900|700|0|
|Heat and water system|1300|700|1800|4700|2000|0|
|No. 1 air filter|600|300|500|3200|2700|400|
|No. 2 air filter|600|300|500|3200|2700|1000|
|Vent (out)|400|500|-|2000|900|1500|
|Vent (in)|1000|500|-|4500|1300|1900|

**Table 5.** Leakage scenarios and parameters.

|Scenarios|Leakage Location (mm)|   |   |Leakage Direction|Leakage Time (s)|Leakage Diameter (mm)|
|---|---|---|---|---|---|---|
|X|Y|Z|
|---|---|---|
|1|1700|1400|100|Upward|100|1|
|2|1700|1400|100|Upward|100|3|
|3|1700|1400|100|Upward|100|5|
|4|1700|1400|100|Upward|100|10|
|5|2750|1800|500|Stem|40|1|
|6|2750|1800|500|Stem|40|3|
|7|2750|1800|500|Stem|40|5|
|8|2750|1800|500|Stem|40|10|
|9|2200|2150|500|Port|40|1|
|10|2200|2150|500|Port|40|3|
|11|2200|2150|500|Port|40|5|
|12|2200|2150|500|Port|40|10|
|13|1650|1750|500|Stern|40|1|
|14|1650|1750|500|Stern|40|3|
|15|1650|1750|500|Stern|40|5|
|16|1650|1750|500|Stern|40|10|
|17|2200|1350|500|Starboard|40|1|
|18|2200|1350|500|Starboard|40|3|
|19|2200|1350|500|Starboard|40|5|
|20|2200|1350|500|Starboard|40|10|
|21|2200|1750|850|Upward|40|1|
|22|2200|1750|850|Upward|40|3|
|23|2200|1750|850|Upward|40|5|
|24|2200|1750|850|Upward|40|10|

**Table 6.** Coordinates of the gas monitoring points.

|MP|X|Y|Z|MP|X|Y|Z|
|---|---|---|---|---|---|---|---|
|MP1|5000|1550|2000|MP17|3250|100|1900|
|MP2|3100|1350|1250|MP18|3250|1600|100|
|MP3|4900|1350|1250|MP19|3250|1600|1000|
|MP4|2200|1150|2000|MP20|3250|1600|1900|
|MP5|4700|2000|1850|MP21|3250|3100|100|
|MP6|100|100|100|MP22|3250|3100|1000|
|MP7|100|100|1000|MP23|3250|3100|1900|
|MP8|100|100|1900|MP24|6400|100|100|
|MP9|100|1600|100|MP25|6400|100|1000|
|MP10|100|1600|1000|MP26|6400|100|1900|
|MP11|100|1600|1900|MP27|6400|1600|100|
|MP12|100|3100|100|MP28|6400|1600|1000|
|MP13|100|3100|1000|MP29|6400|1600|1900|
|MP14|100|3100|1900|MP30|6400|3100|100|
|MP15|3250|100|100|MP31|6400|3100|1000|
|MP16|3250|100|1000|MP32|6400|3100|1900|

**Table 7.** Time points and corresponding monitoring points when the hydrogen concentration first reached 0.8% and 1.6% in scenarios 5–24.

|Scenarios|Leakage Direction|Leakage Dimension|0.8% Vol|   |1.6% Vol|   |
|---|---|---|---|---|---|---|
|Time (s)|Monitoring Point|Time (s)|Monitoring Point|
|---|---|---|---|
|5|Stem|1 mm|-|-|-|-|
|6|3 mm|6.511|MP27|18.236|MP27|
|7|5 mm|1.191|MP27|4.055|MP27|
|8|10 mm|0.363|MP27|0.375|MP27|
|9|Port|1 mm|-|-|-|-|
|10|3 mm|5.442|MP12|16.88|MP12|
|11|5 mm|0.795|MP12|3.084|MP12|
|12|10 mm|0.332|MP12|0.344|MP12|
|13|Stern|1 mm|-|-|-|-|
|14|3 mm|4.811|MP9|16.097|MP9|
|15|5 mm|0.354|MP9|2.487|MP9|
|16|10 mm|0.172|MP9|0.182|MP9|
|17|Starboard|1 mm|-|-|-|-|
|18|3 mm|4.791|MP15|15.44|MP15|
|19|5 mm|0.421|MP15|2.358|MP15|
|20|10 mm|0.248|MP15|0.253|MP15|
|21|Upward|1 mm|-|-|-|-|
|22|3 mm|6.486|MP11|16.853|MP11|
|23|5 mm|1.160|MP11|3.425 (4.024)|MP20 (MP11)|
|24|10 mm|0.203 (0.356)|MP20 (MP11)|0.209 (0.368)|MP20 (MP11)|

|   |   |
|---|---|
||**Disclaimer/Publisher’s Note:** The statements, opinions and data contained in all publications are solely those of the individual author(s) and contributor(s) and not of MDPI and/or the editor(s). MDPI and/or the editor(s) disclaim responsibility for any injury to people or property resulting from any ideas, methods, instructions or products referred to in the content.|

  
© 2023 by the authors. Licensee MDPI, Basel, Switzerland. This article is an open access article distributed under the terms and conditions of the Creative Commons Attribution (CC BY) license ([https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)).

## Share and Cite

**MDPI and ACS Style**

Guan, W.; Chen, J.; Chen, L.; Cao, J.; Fan, H. Safe Design of a Hydrogen-Powered Ship: CFD Simulation on Hydrogen Leakage in the Fuel Cell Room. _J. Mar. Sci. Eng._ **2023**, _11_, 651. https://doi.org/10.3390/jmse11030651

**AMA Style**

Guan W, Chen J, Chen L, Cao J, Fan H. Safe Design of a Hydrogen-Powered Ship: CFD Simulation on Hydrogen Leakage in the Fuel Cell Room. _Journal of Marine Science and Engineering_. 2023; 11(3):651. https://doi.org/10.3390/jmse11030651

**Chicago/Turabian Style**

Guan, Wenfeng, Ju Chen, Lijian Chen, Jiaolong Cao, and Hongjun Fan. 2023. "Safe Design of a Hydrogen-Powered Ship: CFD Simulation on Hydrogen Leakage in the Fuel Cell Room" _Journal of Marine Science and Engineering_ 11, no. 3: 651. https://doi.org/10.3390/jmse11030651

**APA Style**

Guan, W., Chen, J., Chen, L., Cao, J., & Fan, H. (2023). Safe Design of a Hydrogen-Powered Ship: CFD Simulation on Hydrogen Leakage in the Fuel Cell Room. _Journal of Marine Science and Engineering_, _11_(3), 651. https://doi.org/10.3390/jmse11030651

Note that from the first issue of 2016, this journal uses article numbers instead of page numbers. See further details [here](https://www.mdpi.com/about/announcements/784).

## Article Metrics

### Citations

### Article Access Statistics

Created with Highcharts 4.0.4Article access statisticsArticle Views18. Apr19. Apr20. Apr21. Apr22. Apr23. Apr24. Apr25. Apr26. Apr27. Apr28. Apr29. Apr30. Apr1. May2. May3. May4. May5. May6. May7. May8. May9. May10. May11. May12. May13. May14. May15. May16. May17. May18. May19. May20. May21. May22. May23. May24. May25. May26. May27. May28. May29. May30. May31. May1. Jun2. Jun3. Jun4. Jun5. Jun6. Jun7. Jun8. Jun9. Jun10. Jun11. Jun12. Jun13. Jun14. Jun15. Jun16. Jun17. Jun18. Jun19. Jun20. Jun21. Jun22. Jun23. Jun24. Jun25. Jun26. Jun27. Jun28. Jun29. Jun30. Jun1. Jul2. Jul3. Jul4. Jul5. Jul6. Jul7. Jul8. Jul9. Jul10. Jul11. Jul12. Jul13. Jul14. Jul15. Jul16. Jul0k2k4k6k8k

For more information on the journal statistics, click [here](https://www.mdpi.com/journal/jmse/stats).

Multiple requests from the same IP address are counted as one view.