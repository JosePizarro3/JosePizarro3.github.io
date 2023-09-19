---
title: Software Development
---

Studying strongly correlated materials is computationally very demanding. The paradigmatic model it is used
is called the <a href="https://en.wikipedia.org/wiki/Hubbard_model">Hubbard model</a> and its extensions. 
This is a model that has been known for decades but whose exact solution is impossible to obtain, so that
often new approximations and methodologies, as well as optimized algorithms are developed to reach 
meaningful solutions. 

Furthermore, this implies using several different tools to obtain solutions of the Hubbard model. A typical
workflow will include: choosing the material and optimizing its crystal structure, performing Density
Functional Theory (DFT) simulations for the ground-state properties, projecting and downfolding into a
smaller sub-space (this step is normally done to make the original material problem more tractable), and finally,
solving the Hubbard model by solving the equivalent quantum embedded problem.

<figure>
    <div class="img-container">
        <img src="assets/images/dft_wannier.png" alt="DFT and Wannier model.">
        <figcaption>
            DFT band structure calculated for NdNiO<sub>2</sub> and CaCuO<sub>2</sub> and lower energy projection into a
            Wannier tight-binding model, extracted from 
            <a href="https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.021061">J. Karp et al., Phys. Rev. X <b>10</b>, 021061 (2020)</a>.
            This shows an example of reducing the original DFT degrees of freedom to make the problem more tractable
            by quantum embedded theories.
        </figcaption>
    </div>
</figure>

In my case, I worked on implementing new approximations, as the
<a href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.72.205124">Slave-Spin Mean-Field</a> method,
and on optimizing the code defining new algorithms.
