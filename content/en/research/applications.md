---
title: 'Earth system model applications'
description: 'Differentiable programming in Earth system modeling.'
date: 2018-11-28T15:15:34+10:00
menu:
  main:
    name: "ESM applications"
    weight: 3
    parent: "research"
weight: 3
header_transparent: false
icon: 'images/research/icons8-protect_from_magnetic_field.png'
thumbnail: 'https://source.unsplash.com/zoCDWPuiRuA/640x360'
image: ""
---

For this project, we will consider flagship Earth system model applications, in which adjoints have
had a demonstrable impact, and where convergence between SBS and SciML approaches hold the
promise for producing transformative research.
Differentiable programming and general-purpose AD will enable a range of derivative-based science
applications, including formal model calibration, surrogate model training using machine learning, data
assimilation for state estimation and model initialization, sensitivity analysis, uncertainty quantification,
and quantitative observing system design.

{{< figure src="/images/research/ecco2-subtropics.jpg">}}

## Ocean climate modeling

Our first domain application is an ocean general circulation model, CliMA-Ocean,
the ocean component of a new climate model that is currently being developed as part of the
Climate Modeling Alliance [CliMA](https://clima.caltech.edu) project, and a localized process model, [Oceananigans.jl](https://clima.github.io/OceananigansDocumentation/dev/),
targeted at simulating small-scale ocean physics at high-resolution that affect the evolution of Earths
climate. Both models are coded in pure Julia and run on GPUs. 

For two decades the Estimating the Climate of the Ocean [(ECCO)](https://ecco-group.org) consortium has successfully harnessed
AD to enable a range of ocean science applications (beyond gradient-based optimization) in which derivative information obtained via tangent
linear, adjoint, and Hessian operators of an underlying ocean general circulation model is a key enabling
computational tool.
Examples are 
1. ocean state estimation and parameter calibration as practiced in ECCO [51], the Arctic Subpolar North Atlantic State Estimate (ASTE, [137]), the NSF Southern Ocean Carbon and Climate Observations and Modeling project (SOCCOM, [182]), and the
California Current System [124]; 
2. comprehensive sensitivity analysis in ocean biogeochemistry [42],
coastal sea level variability, ENSO prediction [56, 129], [183], Antarctic ice sheet-ocean interactions, e.g.,
in the context of the NSF/NERC International Thwaites Collaboration [63], and Arctic coupled ocean-sea
ice modeling [23, 138, 167]; 
3. dynamical attribution of variability in support of the Overturning
in the Subpolar North Atlantic Program (OSNAP) or the South Atlantic [87, 144, 171]; 
4. linear predictability and transient non-normal amplification [126, 128, 188]; 
5. uncertainty quantification and optimal observing system design.

The application capabilities based on adjoint models go well beyond data assimilation or gradient-based
optimization, as listed above. The proposed capabilities also enable a natural integration of
SciML approaches for surrogate model calibration via neural networks or neural differential equations
and uncertainty quantification within a variational data assimilation system. This approach would
support, not only *process model training/calibration* as proposed in [165], but also, through availability
of the full *backpropagation* tree (reverse mode AD) *full-model training/calibration* of the combined
PDE and ML-based system. It presents a natural framework for hybrid, physics informed SciML.

{{< figure src="/images/research/ecco2-vmag.png">}}

## Coupled ocean-sea ice modeling

To be applicable for polar research, a differentiable thermodynamic and dynamic sea ice component will be developed. Fortran-based AD of the MITgcm/ECCO infrastructure has previously enabled studies of sea ice predictability by way of comprehensive sensitivity studies and dynamical attribution.

## Ice flow modeling

Another compelling domain application is the use of derivative information in the context of
regional to continental-scale ice sheet modeling. Going back to the early 1990's, D. MacAyeal has
convincingly demonstrated the critical role of inverse modeling approaches to comprehensively calibrate
and initialize ice flow models for prediction. Today, adjoint methods plays a central role in ice sheet
modeling, parameter estimation initialization for prediction. The complexity of some of the physical
processes underlying ice flow (calving and glacial hydrology, in particular) also suggest a significant role
for SciML approaches.

While sophisticated, the new generation of ice-sheet models su?er from serious limitations, mainly because important input parameters (e.g. basal conditions, iceberg calving) cannot be measured directly or are poorly constrained by observations. AD has been applied in ice sheet modeling to tackle some of these questions. Although incredibly powerful, AD remains woefully underused in ice sheet
modeling, primarily because of technical complexities.

We will take advantage of the new development in AD and SciML within Julia to develop a
new generation, open-source ice sheet model that is designed to take advantage of the increasing 
amount of remote sensing data collected by various agencies, to reduce the uncertainty in
sea level rise projection.
We will reuse some of the functionalities that have been developed (e.g., partitioning, matrix system solve,
integration) and follow the general structure, capabilities and parameterizations of another open-source
code, the Ice-sheet and Sea-level System Model [(ISSM)](https://issm.jpl.nasa.gov).
Laying the computational foundations, as we do in
this project, will enable wider community engagement.

{{< figure src="/images/research/pig-tongue.png">}}

## Uncertainty quantification

UQ has emerged as a central challenge in climate science. To be of value to decision-makers, climate
predictions must be accompanied by the degree of confidence we have in our model simulations. A crucial
question is: How do we quantify uncertainties, given limitations in observational data, model inadequacy,
our understanding of physical processes, and computational resources? A common approach in ocean
and climate modeling has been to resort to ensemble and Markov Chain Monte Carlo (MCMC) methods,
including emergent applications for Bayesian parameter calibration for oceanic vertical mixing with
Oceananigans.jl [174]. However, *the curse of dimensionality* [140], i.e., the gigantic dimensionality of
uncertain model inputs, has meant that ensemble sizes are a minute fraction of the number of degrees
of freedom in Earth system models, and that the nature of the ensemble is poorly known.
Bayesian inverse theory provides powerful tools for UQ. Hessian UQ exploits the fact that, in a
Gaussian approximation, the posterior error covariance is represented by the inverse Hessian, i.e., second
derivative of the objective function with respect to the uncertain input variables

## Quantitative observing system design

Closely related to UQ is optimal observing system
design (OSD, [5]). It addresses (1) how to design
an observing system, based on given or hypothetical
assets, that minimizes the uncertainty in one
or several target quantities of interest (e.g., heat
transports); and (2) how to quantify the complementarity
versus redundancy of a set of observational
assets.

