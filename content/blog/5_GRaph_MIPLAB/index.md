---
title: White Matter Brain Graphs- MIPLAB - EPFL
date: "2023-07-06T23:46:37.121Z"  
github_link: https://github.com/edouardkoehn/WM_Atlas
keywords: ["dMRI -", " Graph signal processing -", " Machine learning"]
---

[Abramian et al.](https://www.sciencedirect.com/science/article/pii/S1053811921003724?via%3Dihub) introduced a graph-based approach to model brain white matter (WM) that captures its inherent anisotropy through diffusion-weighted MRI data. Building on this, we developed a white matter atlas using voxel-level white matter brain graphs derived from dMRI data.

![White Matter Brain Graphs](Graph.png)

After graph extraction, spectral clustering was applied to obtain a parcellation of the white matter. This method offers flexibility, allowing us to produce parcellations at both individual and population scales, thereby harnessing inter-subject variability.

![Spectral Clustering of WM](EigenValue.png)  

### <ins>References</ins>:
- [D. Abramian, M. Larsson, A. Eklund, I. Aganj, C. Westin, H. Behjat, “Diffusion-informed spatial smoothing of fMRI data in white matter using spectral graph filters”](https://www.sciencedirect.com/science/article/pii/S1053811921003724?via%3Dihub)  
- [K. H. Maier-Hein et al., “The challenge of mapping the human connectome based on diffusion tractography”](https://www.nature.com/articles/s41467-017-01285-x)  
- [A. Ortega, P. Frossard, J. Kovačević, J. M. F. Moura, and P. Vandergheynst, “Graph Signal Processing: Overview, Challenges, and Applications”](https://ieeexplore.ieee.org/document/8347162)  

### <ins>Supervision</ins>:  
- Hamid Behjat - EPFL  
- Andrea Santoro - EPFL  
