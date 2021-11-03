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
* ___ForwardDiff.jl___ is a forward differentiation tool implemented in an overloading fashion by doing adatatype change. This data type is compatible with array types used for GPU computations, thus allowing transparent differentiation for GPUs.
* ___ReverseDiff.jl___ is a reverse or adjoint differentiation tool, commonly referred to as 'backpropagation'in deep learning. It uses a classic tape implementation but allows for JIT compilation of the resultingtape via the Julia compiler to allow for fast backwards passes. It has its roots in the development ofJuMP.jl, an algebraic modeling framework for optimization. However, ReverseDi? does not meet all therestrictions given by a GPU code and fails to be applied to GPU kernels.
* ___Enzyme.jl___ is a language agnostic reverse mode AD framework, that operates over optimizedLLVM IR. Enzyme integrates well with the Julia based AD tooling and allows the di?erentiation of legacycode bases that use C/C++ libraries. Current development of Enzyme focuses on AD for GPU kernelsand it may be an avenue for Julia based AD to synthesize e?cient gradients for GPU based codes.
* ___Zygote.jl___ implements reverse AD by directly accessing the untyped Julia AST. Its original userbase was around ML, which required leveraging of GPUs. While in theory Zygote could apply to anycode in Julia, in practice the restrictions on the code are still substantial (e.g. lack of support forstatic arrays and mutation) which puts limitations on the types of pre-existing code. For example, theCliMA-Ocean model makes heavy use of mutation to have non-allocating distributed and GPU code.
* ___Diffractor.jl___ is a next-generation intermediate representation-level source to source reverse-mode (and forward-mode) AD tool. 
It is currently in development.

> As an ecosystem, the ability to switch between AD backends is well-recognized and used. 
This is possible because all of the Julia AD backends target the Julia AST and can thus becomposed as well: e.g. Zygote can be used to differentiate code with ReverseDiff and ForwardDiff. The[__ChainRules.jl__](https://juliadiff.org/ChainRulesCore.jl/stable/index.html) library gives a central repository for dispatch-based forward and reverse rulesets for the ADtools to build on, so extending the AD frameworks can to be done in a manner that is independent of theAD package.

## Proposed AD Framework in Julia

Our goal is to provide a new foundation for AD in Julia which can be applied to large-scale PDEproblems, while retaining the flexibility and portability of Julia, especially for heterogeneous architectures(GPUs, ARM, X86 64).
Recent developments to the Julia compiler allow for user compiler extensions tobe written to act on the typed intermediate representation (IR) of the lowered Julia abstract syntax tree(AST).
A new AD mechanism, __Diffractor.jl__, has demonstrated that it can overcome core efficiency issues unhandled in Zygote.jl for ML, and the main ML frameworks, Flux.jl and KNet.jl, arescheduled to adopt this AD back end as the core backpropogation mechanism.

> Our plan is to develop compilation passes which augment [__Diffractor.jl__](https://juliadiff.org/Diffractor.jl/dev/) and give support for high-performance scientific computing infrastructure in this sameframework, allowing it to effectively be the first open source source-to-source optimizing AD frameworkon a high performance high level language that can support all of the language constructs to allow forboth a machine learning and a climate model to be differentiated without users having to perform codemodifications.


## Proposed framework extensions

Researchers from U. Chicago, in collaboration with MIT Julia Lab, will implement several extensions tothe core framework. These already exist in part in various mature AD tools such as OpenAD and TAF. These extensions will target:
* __Program Analysis__
* __Objects and Mutation__
* __Checkpointing__
* __Sparse Derivatives__
* __Parallelism__
* __Nonsmooth Computation__
* __Jacobian Scarcity__

These extensions will be implemented in a tool-agnostic manner, such that they can be deployed in different AD tools, e.g., Enzyme.jl and Diffractor.jl.

