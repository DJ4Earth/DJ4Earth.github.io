---
title: 'Julia Resources'
description: "A compilation of Julia resources, with emphasis on differentiable programming and scientific machine learning"
date: 2018-12-20
weight: 1
portfolio: ['research']
header_transparent: true
thumbnail: 'https://source.unsplash.com/CHLehnxQSFQ/700x800'
hero:
    background: 'https://source.unsplash.com/CHLehnxQSFQ/1600x900'
    blend_mode: "overlay"
    theme: "primary"
work: 
    heading: Julia Programming Language
    brief: "Julia is an open source project, designed for high performance computing. Julia programs compile to efficient native code for multiple platforms via LLVM. Julia uses multiple dispatch as a paradigm, making it easy to express many object-oriented and functional programming patterns.
    "
    link: "https://julialang.org"
---

 
## Julia Differentiable Programming

> [**JuliaDiff**](https://juliadiff.org) is an informal organization which aims to unify and document packages written in Julia for evaluating derivatives. The technical features of Julia, namely, multiple dispatch, source code via reflection, JIT compilation, and first-class access to expression parsing make implementing and using techniques from automatic differentiation easier than ever before (in our biased opinion). A compilation of differentiation tools in Julia can be found on [GitHub](https://github.com/JuliaDiff).

### *A selection of Julia Automatic Differentiation (AD) packages and related tooling*

At the heart of differentiable programming is the ability to generate derivatives of functions as represented via code using [*automatic/algorithmic differentiation*](https://en.wikipedia.org/wiki/Automatic_differentiation).

[**ChainRules.jl**](https://juliadiff.org/ChainRulesCore.jl/stable/index.html) provides a variety of common utilities that can be used by downstream automatic differentiation (AD) tools to define and execute forward-, reverse-, and mixed-mode primitives. It is an AD-independent collection of rules to use in a differentiation system.

[**AbstractDifferentiation.jl**](https://github.com/JuliaDiff/AbstractDifferentiation.jl) implements an abstract interface for differentiation in Julia. This is particularly useful for implementing abstract algorithms requiring derivatives, gradients, Jacobians, Hessians or multiple of those without depending on specific automatic differentiation packages' user interfaces.

[**Enzyme.jl**](https://github.com/wsmoses/Enzyme.jl) is a plugin that performs source-to-source forward- and reverse-mode automatic differentiation (AD) of statically analyzable LLVM. It is highly-efficient and its ability perform AD on optimized code allows Enzyme to meet or exceed the performance of state-of-the-art AD tools.

[**Zygote.jl**](https://github.com/FluxML/Zygote.jl) provides intermediate-level source-to-source automatic differentiation (AD) in Julia, and is the current-generation AD system for the Flux.jl differentiable programming framework.

[**Diffractor.jl**](https://github.com/JuliaDiff/Diffractor.jl)  is an experimental next-generation, compiler-based AD system for Julia. Its public interface should be familiar to users, essentially matching Zygote.

## Project Communication

> We seek to work and communicate through Julia Language's [**Community Channels**](https://www.julialang.org/community/#community_channels)

## Julia Computing

[**Julia Computing**](https://juliacomputing.org) seeks to create and deliver products that make the Julia programming language easy to use, easy to deploy and easy to scale. Its flagship product is JuliaHub, a secure, software-as-a-service platform for developing Julia programs, deploying them, and scaling to thousands of nodes.


## Example (OLD -- TO BE REPLACED)

```js
$(window).scroll(function() {
  // this will work when your window scrolled.
  var scroll = $(window).scrollTop(); //getting the scrolling height of window
  if (scroll > 100) {
    $('.header').addClass('header-scrolled');
  } else {
    $('.header').removeClass('header-scrolled');
  }
});
```

