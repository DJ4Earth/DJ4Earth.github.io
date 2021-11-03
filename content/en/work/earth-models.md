---
title: 'Simulation Codes'
description: "Julia-based Earth System Modeling frameworks"
date: 2018-12-20
weight: 2
thumbnail: 'https://source.unsplash.com/kqNIQX53wSM/700x800'
header_transparent: true
portfolio: ['github']
hero:
    background: 'https://source.unsplash.com/kqNIQX53wSM/1600x900'
    blend_mode: "overlay"
    theme: "primary"
work:
    heading: Scientific Machine Learning
    heading_label: "SciML"
    brief: SciML blends simulation-based science that is grounded in solving governing equations based on PDEs with ML approaches. A general framework has been laid out in a 2019 DoE Workshop Report on Basic Research Needs for Scientific Machine Learning - see https://doi.org/10.2172/1478744
    link: https://sciml.ai
---

The project's Earth system flagship application frameworks will demonstrate the various uses of derivative information for SBS and SciML in the context
of (1) an open-source, AD-enabled ocean general circulation model, and (2) an open-source, AD-enabled
ice flow model.

## Ocean modeling

[**Oceananigans.jl**](https://github.com/clima/oceananigans.jl) is a fast and friendly fluid flow solver written in Julia that can be run in 1-3 dimensions on CPUs and GPUs. It can simulate the incompressible Boussinesq equations, the shallow water equations, or the hydrostatic Boussinesq equations with a free surface. Oceananigans.jl comes with user-friendly features for simulating rotating stratified fluids including user-defined boundary conditions and forcing functions, arbitrary tracers, large eddy simulation turbulence closures, high-order advection schemes, immersed boundaries, Lagrangian particle tracking, and more!



## Ice flow modeling


...