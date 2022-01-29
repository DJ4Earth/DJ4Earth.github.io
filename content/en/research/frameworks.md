---
title: 'Cyberinfrastructure Frameworks'
description: 'Developing general-purpose automatic differentiation in Julia.'
date: 2018-11-28T15:15:34+10:00
menu:
  main:
    name: "CI  Frameworks"
    weight: 2
    parent: "research"
weight: 2
header_transparent: true
icon: 'images/research/icons8-web_design.png'
thumbnail: 'https://source.unsplash.com/ubIWo074QlU/640x360'
image: ""
hero:
  background: 'https://source.unsplash.com/ubIWo074QlU/1600x900'
  blend_mode: "overlay"
  theme: "primary"
---

# Current AD capabilities in Julia

We list here current efforts in the Julia community that have a certain continuity within projects. A comprehensive list is maintained at [JuliaDiff.org](https://juliadiff.org).
* ___ForwardDiff.jl___ is a forward differentiation tool implemented in an overloading fashion by doing a
* ___ReverseDiff.jl___ is a reverse or adjoint differentiation tool, commonly referred to as 'backpropagation'
* ___Enzyme.jl___ is a language agnostic reverse mode AD framework, that operates over optimized
* ___Zygote.jl___ implements reverse AD by directly accessing the untyped Julia AST. Its original user
* ___Diffractor.jl___ is a next-generation intermediate representation-level source to source reverse-mode (and forward-mode) AD tool. 
It is currently in development.

> As an ecosystem, the ability to switch between AD backends is well-recognized and used. 
This is possible because all of the Julia AD backends target the Julia AST and can thus be

## Proposed AD Framework in Julia

Our goal is to provide a new foundation for AD in Julia which can be applied to large-scale PDE
Recent developments to the Julia compiler allow for user compiler extensions to
A new AD mechanism, __Diffractor.jl__, has demonstrated that it can overcome core efficiency issues unhandled in Zygote.jl for ML, and the main ML frameworks, Flux.jl and KNet.jl, are

> Our plan is to develop compilation passes which augment [__Diffractor.jl__](https://juliadiff.org/Diffractor.jl/dev/) and give support for high-performance scientific computing infrastructure in this same


## Proposed framework extensions

Researchers from U. Chicago, in collaboration with MIT Julia Lab, will implement several extensions to
* __Program Analysis__
* __Objects and Mutation__
* __Checkpointing__
* __Sparse Derivatives__
* __Parallelism__
* __Nonsmooth Computation__
* __Jacobian Scarcity__

These extensions will be implemented in a tool-agnostic manner, such that they can be deployed in different AD tools, e.g., Enzyme.jl and Diffractor.jl.
