---
permalink: /
title: "About"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi! I am Jose, a doctor in Physics by the Universidad Autónoma of Madrid, Spain since 2019. I am an expert in Materials Science, with a focus on Computational Methods applied to real materials simulations. I worked as a Postdoctoral Research Associate in Bremen and Hamburg, as well as a Software Developer and Data Management expert in the FAIRmat project, at the Humboldt University of Berlin. Now, I have a permanent position at the Bundesanstalt für Materialforschung und -prüfung (BAM) working as a Senior Data Management expert.

I am passionate about Science and Software Development. You can find the details about the latest software developments I have been involved with in my <a href="https://github.com/JosePizarro3" title="GitHub profile">GitHub profile</a>.
I also enjoy sharing my experience and being active on <a href="https://twitter.com/JosePizarroB" title="Twitter profile">X/Twitter</a>.


## Research 

The main focus during my career was to understand strong electronic correlations in different materials. These correlations are crucial for certain physical phenomena; they help explaining real materials behaviors such as superconductivity and magnetism. They are also key in understanding how materials interact with external electromagnetic fields.

As a <a href="https://en.wikipedia.org/wiki/Computational_materials_science">Computational Materials Scientist</a>, I am an expert in developing methodologies to address these problems, in analyzing these complex behaviors, and in writing highly optimized codes. In order to do that, I  have always tried to follow a few key principles:
<ul>
<li>
    Being systematic when exploring electronic-structure phases of real materials, doing multiple scans for different parameters.
</li>
<li>
    Assisting experimental teams by providing a robust theoretical framework for their findings.
</li>
<li>
    Managing my data in a consistent way, following the F.A.I.R. principles (see below).
</li>
</ul>


### 1. Research Data Management

A key aspect of Science that is often overlooked is the management of the data that is produced. Following a set of good practices 
in Data Management is very important to keep the data that we, scientists, produce in a consistent way. Furthermore, it allows to 
exploit the capabilities of Artificial Intelligence and Machine-Learning techniques, possibly opening new routes using Big Data to find new materials
or to explain long-standing problems, such as the one of high-T<sub>c</sub> superconductivity.

Since August 2022, I am working in Research Data Management and I am involved in Data Science activities for strongly correlated materials. My goal is to
provide a service for the scientific community. I developed data models and ontologies using the <a href="https://nomad-lab.eu/nomad-lab/">NOMAD Archive & Repository</a>, for computations in strongly correlated materials. In order to do that, I followed the <a href="https://www.go-fair.org/fair-principles/">F.A.I.R. principles</a>, i.e., data has to be organized to be Findable, Accessible, Interoperable, and Reusable. 

Since November 2024, I started a permanent position in the Bundesanstalt für Materialforschung und -prüfung (BAM) as a Senior Data Management expert in the eScience group.


<figure>
    <img src="images/fair.png" alt="FAIR logo." class="center">
    <figcaption>
    In order to exploit the capabilities of databases, the metadata that we define in data models or ontologies have to follow the F.A.I.R. principles. In short, Findability means that the metadata fields we define must be unique; Accessibility means that the metadata has to be accessible by others; Interoperability means that the metadata has to be defined in a common framework for data coming from similar sources; Reusability means that the metadata must contain a detailed provenance of how it was extracted so the users can reuse it in an understandable way.
    </figcaption>
</figure>



### 2. Strongly Correlated Materials

My main scientific activity has been to study and propose novel experiments for understanding the physics of 
<a href="https://en.wikipedia.org/wiki/Strongly_correlated_material">strongly correlated materials</a>. These 
systems show a plethora of effects such as the Mott (metal-to-insulator) transition and Hund metallicity. The
electronic states of these materials are known to be intimately related with high-T<sub>c</sub> superconductivity and magnetism.

Thus, understanding these states and proposing new materials with such properties is key to solve 
the long-standing problem of high-T<sub>c</sub> superconductivity and to exploit their full potential in
real world applications.

<figure>
    <img src="images/chromiumdiagram.png" alt="Chromium pnictides phase diagram." width="10%">
    <figcaption>
        My collaborators and I proposed to search for high-T<sub>c</sub> superconductivity in chromium pnictides 
        based on their potentially similar behavior with another class of high-T<sub>c</sub> superconductors, the
        iron-based superconductors. Taken from <a href="https://doi.org/10.1103/PhysRevB.95.075115">J. M. Pizarro et al., <i>Strong correlations and the search for high-Tc superconductivity in chromium pnictides and chalcogenides</i>, Phys. Rev. B <b>95</b>, 075115 (2017)</a>.
    </figcaption>
</figure>

I studied iron-based superconductors, magic-angle twisted bilayer graphene, and 2D materials.


### 3. Methods and Software Development

Studying strongly correlated materials is computationally very demanding. The paradigmatic model it is used
is called the <a href="https://en.wikipedia.org/wiki/Hubbard_model">Hubbard model</a> and its extensions. 
This is a model that has been known for decades but whose exact solution is impossible to obtain, so that
often new approximations and methodologies, as well as optimized algorithms are developed to reach 
meaningful solutions. 

Furthermore, this implies using several different tools to obtain solutions of the Hubbard model and managing workflows. A typical
workflow will include: choosing the material and relaxing its crystal structure, performing Density
Functional Theory (DFT) simulations for the ground-state properties, projecting and downfolding into a
smaller sub-space (this step is normally done to make the original material problem more tractable), and finally,
solving the Hubbard model by solving the interacting many-body quantum problem.

<figure>
    <div class="img-container">
        <img src="images/dft_wannier.png" alt="DFT and Wannier model." class="center">
        <figcaption>
            DFT band structure calculated for NdNiO<sub>2</sub> and CaCuO<sub>2</sub> and lower energy projection into a
            Wannier tight-binding model, extracted from 
            <a href="https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.021061">J. Karp et al., Phys. Rev. X <b>10</b>, 021061 (2020)</a>.
            This shows an example of reducing the original DFT degrees of freedom to make the problem more tractable
            by interacting many-body quantum theories.
        </figcaption>
    </div>
</figure>

In my case, I worked on implementing new approximations, as the
<a href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.72.205124">Slave-Spin Mean-Field</a> method,
and on optimizing the code defining new algorithms, see <a href="https://arxiv.org/abs/1912.04141">J.M. Pizarro, PhD Thesis: Electronic correlations in multiorbital systems, arXiv/1912.04141</a>


### 4. High-Throughput and Code Automation

An important aspect of strongly correlated materials is to define a smaller sub-space of bands 
and to solve the Hubbard model for these subset. However, this _projection_ or _downfolding_ is
still a very human-involved problem, i.e., it needs a scientists deciding which bands to project
to.

In the recent years, there has been a huge push for automation of both simulations and experiments
in Materials Science. However, the aforementioned problem makes that still an expert in strong
correlations is needed to study what is happening in these materials.

I am currently working on improving this procedure to make the study of strongly correlated materials
more automated, or at least, with minimal human intervention.

<!--This requires more explanation once I start to work on the topic.-->