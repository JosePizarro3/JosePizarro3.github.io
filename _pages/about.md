---
permalink: /
title: "About"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi! I am Jose, a doctor in Physics by the Universidad Autónoma of Madrid, Spain, since 2019. I am an expert in simulating electronic properties of materials. After finishing my PhD in Madrid, I worked as a Postdoctoral Research Associate in Bremen and Hamburg, as well as a Software Developer and Data Managener in the FAIRmat project, at the Humboldt University of Berlin. Now, I have a permanent position at the Bundesanstalt für Materialforschung und -prüfung (BAM) working as a Senior Data Manager.

I am passionate about Science and Software Development. You can find the details about the latest software developments I have been involved with in my <a href="https://github.com/JosePizarro3" title="GitHub profile">GitHub profile</a>.
I also enjoy sharing my experience and being active on <a href="https://twitter.com/JosePizarroB" title="Twitter profile">X/Twitter</a>.


## Research 

During my career, I focused on studying strong electronic correlation effects in real materials. These correlations are crucial for certain physical phenomena, like superconductivity and magnetism. They are also key in understanding how materials interact with external electromagnetic fields. This work relies on performing highly complex simulations, but the main advantage is that it compares better with a real case scenario than more _vanilla_ simulation methods.

As a <a href="https://en.wikipedia.org/wiki/Computational_materials_science">Computational Materials Scientist</a>, I am an expert in developing these complex methodologies, in analyzing these complex behaviors, and in writing highly optimized codes. In order to do that, I always tried to follow a few key principles:
<ul>
<li>
    Being systematic when exploring electronic-structure phases of real materials, doing multiple scans for different parameters.
</li>
<li>
    Assisting experimental teams by providing a robust theoretical framework for their findings.
</li>
<li>
    Managing my data in a consistent way, following the F.A.I.R. principles.
</li>
</ul>


### 1. Research Data Management

For the last 2 years I have been working as an expert in Research Data Management (RDM). RDM is a keys aspect of Science and Good Scientific Practices that is often overlooked. Since the last years and the development of powerful Artificial Intelligence (AI) and Machine-Learning (ML) methodologies it is obvious that following a good treatment of data is key for the future of Science, see e.g., <a href="https://www.nobelprize.org/prizes/chemistry/#:~:text=The%202024%20chemistry%20laureates&text=David%20Baker%2C%20Demis%20Hassabis%20and%20John%20Jumper.">Nobel Prize of Chemistry 2024</a>, where a key aspect was the existance of protein databases which boosted the ML interatomic potential findings that gave rise to this Nobel Prize.

As an expert on RDM, my goal is to provide a service for the scientific community: I like to develop data models and ontologies, write down parsers and mappers for the generated data, and work on the software infrastructure behind these databases. In order to do that, I followed the <a href="https://www.go-fair.org/fair-principles/">F.A.I.R. principles</a>, i.e., data has to be organized to be Findable, Accessible, Interoperable, and Reusable. 


<figure>
    <img src="images/fair.png" alt="FAIR logo." class="center">
    <figcaption>
    In order to exploit the capabilities of databases, the (meta)data that we define in data models or ontologies have to follow the F.A.I.R. principles. In short, Findability means that the (meta)data fields we define must be unique; Accessibility means that the (meta)data has to be accessible by others; Interoperability means that the (meta)data has to be defined using a common language; Reusability means that the (meta)data must contain a detailed provenance of how it was extracted.
    </figcaption>
</figure>



### 2. Strongly Correlated Materials

The main topic of my carrier has been to study and propose novel experiments for understanding the physics of <a href="https://en.wikipedia.org/wiki/Strongly_correlated_material">strongly correlated materials</a>. These systems show a plethora of effects such as the Mott (metal-to-insulator) transition and Hund metallicity. The
electronic states of these materials are known to be intimately related with high-T<sub>c</sub> superconductivity and magnetism. Specifically, I studied iron-based superconductors, magic-angle twisted bilayer graphene, and 2D materials.

Thus, understanding these states and proposing new materials with such properties using the capabilities of AI and ML is key to solve the long-standing problem of high-T<sub>c</sub> superconductivity and to exploit their full potential in real world applications.

<figure>
    <img src="images/chromiumdiagram.png" alt="Chromium pnictides phase diagram." width="10%">
    <figcaption>
        My collaborators and I proposed to search for high-T<sub>c</sub> superconductivity in chromium pnictides 
        based on their potentially similar behavior with another class of high-T<sub>c</sub> superconductors, the
        iron-based superconductors. Taken from <a href="https://doi.org/10.1103/PhysRevB.95.075115">J. M. Pizarro et al., <i>Strong correlations and the search for high-Tc superconductivity in chromium pnictides and chalcogenides</i>, Phys. Rev. B <b>95</b>, 075115 (2017)</a>.
    </figcaption>
</figure>



### 3. Methods and Software Development

Studying strongly correlated materials and running ML codes is computationally very demanding. In the case of strongly correlated materials, the paradigmatic model used is called the <a href="https://en.wikipedia.org/wiki/Hubbard_model">Hubbard model</a>. This is a model that has been known for decades, extended, but whose exact solutions are impossible to obtain, so that often new approximations and methodologies, as well as optimized algorithms are developed to reach meaningful solutions. 

Furthermore, this implies using several different tools to obtain solutions of the Hubbard model and managing workflows. A typical workflow will include: choosing the material and relaxing its crystal structure, performing Density Functional Theory (DFT) simulations for the ground-state properties, projecting and downfolding into a smaller sub-space (this step is normally done to make the original material problem more tractable), and finally, solving the Hubbard model by solving the interacting many-body quantum problem.

<figure>
    <div class="img-container">
        <img src="images/dft_wannier.png" alt="DFT and Wannier model." class="center">
        <figcaption>
            Electronic band structure calculated for twisted and non-twisted 1T-TaSe<sub>2</sub>and lower energy projection into a
            Wannier tight-binding model, extracted from 
            <a href="https://www.nature.com/articles/s41535-020-00277-3">J.M. Pizarro et al., npj Quantum Materials <b>5</b>, 79 (2020)</a>.
            This shows an example of reducing the original DFT degrees of freedom to make the problem more tractable
            by interacting many-body quantum theories.
        </figcaption>
    </div>
</figure>

I worked on implementing new approximations, as the
<a href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.72.205124">Slave-Spin Mean-Field</a> (SSMF) method,
and on optimizing the code defining new algorithms, see <a href="https://arxiv.org/abs/1912.04141">J.M. Pizarro, PhD Thesis: Electronic correlations in multiorbital systems, arXiv/1912.04141</a>:

<ul>
<li>
    <a href="https://github.com/JosePizarro3/pySSMF">pySSMF</a>: an open-source Python package to calculate the SSMF solution of an input tight-binding model.
</li>
</ul>

I am also involved on the development of:

<ul>
<li>
    <a href="https://github.com/nomad-coe/nomad">NOMAD</a>: a free web-service to share Materials Science data.
</li>
<li>
    <a href="https://github.com/nomad-coe/nomad-simulations">NOMAD-Simulations</a>: an open-source Python standard for managing Materials Science simulation data.
</li>
<li>
    Multiple NOMAD parsers.
</li>
</ul>

### 4. High-Throughput and Code Automation

An important aspect of strongly correlated materials is to define a smaller sub-space of bands and to solve the Hubbard model for these subset. However, this _projection_ or _downfolding_ is still a very human-involved problem, i.e., it needs a scientists deciding which bands to project to.

In the recent years, there has been a huge push for automation of both simulations and experiments in Materials Science. However, the aforementioned problem makes that still an expert in strong correlations is needed to study what is happening in these materials.

I am currently working on improving this procedure to make the study of strongly correlated materials more automated, or at least, with minimal human intervention.

<!--This requires more explanation once I start to work on the topic.-->