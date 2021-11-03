---
title: 'Project Overview'
description: 'Enabling differentiable programming in scientific machine learning for Earth system modeling'
date: 2018-11-28T15:14:54+10:00
header_transparent: true
menu:
  main:
    name: "Overview"
    weight: 1
    parent: "research"
weight: 1
icon: 'images/research/icons8-source_code.png'
thumbnail: 'https://source.unsplash.com/ZgZsKFnSbEA/640x360'
image: 'https://source.unsplash.com/ZgZsKFnSbEA/1600x900'
hero:
  background: 'https://source.unsplash.com/ZgZsKFnSbEA/1600x900'
  blend_mode: ""
  theme: ""
---

# The role of differentiable programming in simulation-based science (SBS) and scientific machine learning (SciML)

Understanding and quantifying parameter sensitivity of simulated systems, be they numerical models of physical systems or mathematical renderings of neural networks, are essential in SBS and SciML. They are key ingredients, e.g., in Bayesian inference (gradient-based optimization for parameter calibration and state estimation and model initialization; dynamical attribution; uncertainty quantification; observing system design), and neural network training. 
* A unifying mathematical framework is that of adjoint-based optimization (employed in data assimilation) and backpropagation-based neural network training. 
* A unifying algorithmic framework is that of automatic differentiation (AD) for generating code for adjoint and backpropagation operators. 

## The role of Julia

Seizing on the opportunity of emerging open-source Earth system model development in Julia, our project is endowing these open-source models with AD-enabled derivative information, making these converging data science and simulation-based science tools available to a much broader research and data science community. Enabling a general-purpose AD framework which can handle both large-scale Earth system models as well as SciML algorithms, such as physics-informed neural networks or neural differential equations, will enable seamless integration of these approaches for hybrid Bayesian inversion, Bayesian ML, and neural network training embedded in full-model calibration. It merges big data science, in which available data enable model discovery, with sparse data science, in which model structure is exploited in the selection of surrogate models representing data-informed subspaces and fulfilling conservation laws. The emerging Julia language engages a new generation of researchers and software engineers, channeling much needed talent into computational science approaches to climate modeling. 

{{< figure src="/images/research/julia-sciml-infrastructure.png" title="Julia SciML Common Interface, Oversimplified" caption="" alt="SciML" link="https://scimlbase.sciml.ai/dev/" target="_blank">}}

## Framework development

Our team is developing a framework for universal differentiable programming and open-source, general-purpose AD that unifies these algorithmic frameworks within the high-level programming language Julia. 

> The general-purpose AD framework in Julia leverages the composability of Julia software packages and the differentiable programming approach that underlies many of the SciML and high-performance scientific computing packages.

Compared to most current modeling systems targeted for HPC, Julia is ideally suited for heterogeneous parallel computing hardware (CUDA, ROCm, oneAPI, ARM, PowerPC, x86 64, TPUs). We are bringing together expertise in AD targeted at Earth system data assimilation in high performance computing environments with SciML expertise. We are working with the Julia Computing organization and package developers to ensure sustainability of the developed frameworks.

{{< youtube XRJ-rtP2fVE >}}

## Earth system model applications

Our Earth system flagship applications consist of 
1. an open-source, AD-enabled ocean general circulation model that is being developed separately as part of the Climate Modelling Alliance (CliMA), 
2. an AD-enabled sea ice model that is tailored to the ocean model component,
3. an open-source, AD-enabled ice flow model. 

Each of these application frameworks is being made available to the community for science application, in which derivative (gradient or Hessian) information represent key algorithmic enabling tools. These include SciML-based training of surrogate models (data-driven and/or model-informed), parameter and state estimation, data assimilation for model initialization, uncertainty quantification (Hessian-based and gradient-informed MCMC) and quantitative observing system design. 

## Partnering with the private sector

Academic and industry partners are involved, who are using the frameworks for developing efficient power grids, personalized precision pharmacometrics, and improved EEG design. 

