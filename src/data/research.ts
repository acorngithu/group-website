// src/data/research.ts
// ─────────────────────────────────────────────────────────────────────────
// EDIT HERE to maintain the Research page. Each { } block is one "pillar" —
// a big research theme shown as a large picture card on /research, linking to
// its own subpage at /research/<slug>.
//
//   • slug        — URL segment for the subpage (lowercase, dashes, unique).
//   • title       — the pillar name.
//   • tagline     — one line shown on the card and under the subpage title.
//   • image       — the big attracting picture: a path under /public, e.g.
//                   "/research/materials.jpg". Files go in /public/research/.
//                   If missing, a styled numbered placeholder shows instead.
//   • alt         — optional accessible description of the image.
//   • description — array of paragraphs shown on the subpage.
//   • figures     — optional result figures / paper screenshots (matted).
//   • references  — "Further reading": key papers (often by other groups) that
//                   give readers the wider context. { authors, title, venue,
//                   year, url? }.
//
// NOTE: draft generated from Fan O. Wu's research statement, CV, work plan, and
// lab-overview slides. Please review wording + references for accuracy.
// ─────────────────────────────────────────────────────────────────────────

export interface Reference {
  authors: string;
  title: string;
  venue: string;
  year: number;
  url?: string;
}

export interface Pillar {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  alt?: string;
  description: string[];
  figures?: { src: string; caption?: string; alt?: string }[];
  references?: Reference[];
  animation?: string; // dark-native animated hero figure (a key in PillarFigure.astro)
}

export const research: Pillar[] = [
  {
    slug: "reconfigurable-photonics",
    title: "Reconfigurable Photonic Chips",
    tagline: "Photonic chips you train instead of just fabricate — reprogrammed on the fly with light.",
    image: "/research/reconfigurable-photonics.jpg",
    alt: "A reconfigurable 2D photonic waveguide programmed by top illumination.",
    animation: "reconfigurablePixels",
    description: [
      "Conventional photonic devices are fixed once fabricated, sensitive to manufacturing errors, and limited by the discretized index profiles that lithography allows. We build a reconfigurable 2D waveguide platform whose refractive-index landscape is written by a pattern of light shone from above — so the same chip is reprogrammed for a new task instead of re-fabricated. On a single device we have demonstrated communication functions such as mode permutation and Hermite–Gaussian conversion, alongside computing functions including arbitrary unitary matrix–vector multiplication.",
      "Paired with real-time output detection and machine-learning feedback, the chip is trained toward a target function, closing the long-standing gap between simulation and experiment. This opens a path to programmable optical interconnects, adaptive error correction, ultra-broadband optical computing, programmable on-chip quantum-light sources, and optical accelerators for AI inference.",
    ],
    references: [
      { authors: "S. Molesky et al.", title: "Inverse design in nanophotonics", venue: "Nature Photonics", year: 2018, url: "https://www.nature.com/articles/s41566-018-0246-9" },
      { authors: "R. Yanagimoto et al.", title: "Programmable on-chip nonlinear photonics", venue: "Nature", year: 2025, url: "https://www.nature.com/articles/s41586-025-09620-9" },
      { authors: "Y. Shen et al.", title: "Deep learning with coherent nanophotonic circuits", venue: "Nature Photonics", year: 2017, url: "https://www.nature.com/articles/nphoton.2017.93" },
      { authors: "T. Onodera et al.", title: "Arbitrary control over multimode wave propagation for machine learning", venue: "Nature Physics", year: 2026, url: "https://www.nature.com/articles/s41567-025-03094-2" },
    ],
  },
  {
    slug: "optical-thermodynamic-computing",
    title: "Optical Thermodynamic Computing",
    tagline: "Computing with light's own thermal fluctuations — matrix inversion at a fraction of the energy.",
    image: "/research/optical-thermodynamic-computing.jpg",
    alt: "Thermalized multimode light encoding a matrix inversion.",
    animation: "thermalArray",
    description: [
      "This direction rests on the optical-thermodynamic theory we developed, which brings the language of statistical mechanics — temperature, chemical potential, and entropy — to multimode nonlinear optics. It explains phenomena such as optical thermalization and beam self-cleaning, and predicts in seconds dynamics that once required hours on a supercomputer.",
      "Rather than forcing light to imitate an electronic computer, we harness what light does naturally. In a complex optical field, random thermal fluctuations are not noise: they encode the system's Hamiltonian, and measuring the field's correlations directly yields matrix-inverse information. We aim to build the first optical thermodynamic computer, targeting matrix inversion roughly 1000× faster and 100× more energy-efficient — enabling the second-order and target-space training strategies that today's GPU-bound methods largely avoid.",
    ],
    references: [
      { authors: "F. O. Wu, A. U. Hassan, D. N. Christodoulides", title: "Thermodynamic theory of highly multimoded nonlinear optical systems", venue: "Nature Photonics", year: 2019, url: "https://doi.org/10.1038/s41566-019-0501-8" },
      { authors: "L. G. Wright, F. O. Wu, D. N. Christodoulides, F. W. Wise", title: "Physics of highly multimode nonlinear optical systems", venue: "Nature Physics", year: 2022, url: "https://doi.org/10.1038/s41567-022-01691-z" },
      { authors: "A. L. Marques Muniz, F. O. Wu et al.", title: "Observation of photon–photon thermodynamic processes under negative optical temperature conditions", venue: "Science", year: 2023, url: "https://doi.org/10.1126/science.ade6523" },
      { authors: "D. Melanson et al.", title: "Thermodynamic computing system for AI applications", venue: "Nature Communications", year: 2025, url: "https://www.nature.com/articles/s41467-025-59011-x" },
      { authors: "M. Aifer et al.", title: "Thermodynamic linear algebra", venue: "npj Unconventional Computing", year: 2024, url: "https://www.nature.com/articles/s44335-024-00014-0" },
    ],
  },
  {
    slug: "analog-neural-networks",
    title: "Analog Neural Networks",
    tagline: "Training physical systems until intelligence lives in the hardware itself.",
    image: "/research/analog-neural-networks.jpg",
    alt: "A lattice of coupled analog oscillators synchronizing.",
    animation: "oscBrainSide",
    description: [
      "Digital hardware forces every computation onto the same rigid lattice of transistors. We take a different route: let a physical dynamical system do the computing directly. Information is written into the system's initial state; it then evolves under its own — generally time-dependent — Hamiltonian, and the answer is read from the collective state it settles into. Computation becomes a physical process rather than a sequence of instructions.",
      "The power lies in collective behaviour: many simple degrees of freedom, coupled together, organise into structured patterns that no single element carries. By shaping those interactions — and driving the system with a time-dependent Hamiltonian — we steer the system dynamics so that disordered initial states evolve toward the ordered configurations that encode a result. Rather than program the hardware, we train its dynamics, until the behaviour we want emerges from the physics itself.",
    ],
    references: [
      { authors: "B. Govind, M. G. Anderson, F. O. Wu, P. L. McMahon, A. Apsel", title: "An integrated microwave neural network for broadband computation and communication", venue: "Nature Electronics", year: 2025, url: "https://doi.org/10.1038/s41928-025-01422-1" },
      { authors: "L. G. Wright et al.", title: "Deep physical neural networks trained with backpropagation", venue: "Nature", year: 2022, url: "https://www.nature.com/articles/s41586-021-04223-6" },
      { authors: "B. Scellier & Y. Bengio", title: "Equilibrium propagation: bridging the gap between energy-based models and backpropagation", venue: "arXiv:1602.05179", year: 2016, url: "https://arxiv.org/abs/1602.05179" },
      { authors: "V. López-Pastor & F. Marquardt", title: "Self-learning machines based on Hamiltonian echo backpropagation", venue: "Physical Review X", year: 2023, url: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.13.031020" },
    ],
  },
  {
    slug: "complex-light-dynamics",
    title: "Complex Light Dynamics",
    tagline: "Light is both particle and wave — and each face opens onto strikingly rich physics.",
    image: "/research/complex-light-dynamics.jpg",
    alt: "A bound state in the continuum — a trapped mode whose radiation cancels.",
    animation: "bic",
    description: [
      "Light is at once a particle and a wave, and each face opens a different world of physics to explore. As a particle, a beam can be trapped on a potential hilltop — held there not by a valley but by an effective Coriolis force, exactly the way a Trojan asteroid rides stably at the L4 and L5 points, sixty degrees ahead of and behind a planet, in the solar system. In the rotating landscape above, the beam behaves as if it were a planet: a photon riding the L4 point of a Sun–Jupiter pair, circling that point even as the whole frame orbits the star.",
      "As a wave, that very same light can do the seemingly impossible — it becomes a bound light in the continuum: a mode that ought to radiate away yet stays perfectly trapped because its own outgoing waves interfere down to nothing. Particle and wave become two doorways into the same rich physics.",
      "And they are only the beginning. The same light also opens onto non-Hermitian photonics, topological protection of light, time reflection and spatiotemporal media, nonequilibrium transport, and negative-temperature optical thermodynamics — ideas long thought impossible or purely theoretical that are now becoming real experiments. If you are drawn to physics where waves and particles, order and disorder, and even space and time bend the usual rules, there is a great deal left to discover.",
    ],
    references: [
      { authors: "H. Luo, Y. Wei, F. O. Wu et al.", title: "Guiding Trojan light beams via Lagrange points", venue: "Nature Physics", year: 2024, url: "https://doi.org/10.1038/s41567-023-02270-6" },
      { authors: "R. El-Ganainy et al.", title: "Non-Hermitian physics and PT symmetry", venue: "Nature Physics", year: 2018, url: "https://www.nature.com/articles/nphys4323" },
      { authors: "T. Ozawa et al.", title: "Topological photonics", venue: "Reviews of Modern Physics", year: 2019, url: "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.91.015006" },
      { authors: "K. Koshelev et al.", title: "Bound states in the continuum in photonic structures", venue: "arXiv:2207.01441", year: 2022, url: "https://arxiv.org/abs/2207.01441" },
    ],
  },

  // ── add more pillars below ──
];
