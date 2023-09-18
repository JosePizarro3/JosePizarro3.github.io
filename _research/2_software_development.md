---
title: Software Development
---

Solving and understanding electrons behavior in high-Tc superconductors is computationally very demanding. The 
main model that I solved was the <a href="https://en.wikipedia.org/wiki/Hubbard_model">Hubbard model</a> and extensions of it. 
This is a model that has been known for decades but whose exact solution is not possible to obtain, so it
often implies developing new approximations and methodologies to reach meaningful solutions. Thus I worked
on implementing new approximations, e.g., the
<a href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.72.205124">slave-spin mean-field</a> method,
and on optimizing the code defining new algorithms and using massive parallelization.