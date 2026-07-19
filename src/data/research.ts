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
      { authors: "S. Molesky et al.", title: "Inverse design in nanophotonics", venue: "Nature Photonics", year: 2018 },
      { authors: "A. Y. Piggott et al.", title: "Inverse design and demonstration of a compact and broadband on-chip wavelength demultiplexer", venue: "Nature Photonics", year: 2015 },
      { authors: "R. Yanagimoto et al.", title: "Programmable on-chip nonlinear photonics", venue: "Nature", year: 2025 },
      { authors: "Y. Shen et al.", title: "Deep learning with coherent nanophotonic circuits", venue: "Nature Photonics", year: 2017 },
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
      { authors: "H. Pourbeyram et al.", title: "Direct observations of thermalization to a Rayleigh–Jeans distribution in multimode optical fibres", venue: "Nature Physics", year: 2022 },
      { authors: "M. Ferraro et al.", title: "Calorimetry of photon gases in nonlinear multimode optical fibers", venue: "Physical Review X", year: 2024 },
      { authors: "L. G. Wright et al.", title: "Physics of highly multimode nonlinear optical systems", venue: "Nature Physics", year: 2022 },
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
      { authors: "L. G. Wright et al.", title: "Deep physical neural networks trained with backpropagation", venue: "Nature", year: 2022 },
      { authors: "T. Wang & J. Roychowdhury", title: "OIM: Oscillator-based Ising machines for solving combinatorial optimization problems", venue: "Unconventional Computation and Natural Computation", year: 2019 },
      { authors: "J. J. Hopfield", title: "Neural networks and physical systems with emergent collective computational abilities", venue: "PNAS", year: 1982 },
      { authors: "Y. Kuramoto", title: "Chemical Oscillations, Waves, and Turbulence", venue: "Springer", year: 1984 },
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
      { authors: "C. W. Hsu et al.", title: "Bound states in the continuum", venue: "Nature Reviews Materials", year: 2016 },
      { authors: "R. El-Ganainy et al.", title: "Non-Hermitian physics and PT symmetry", venue: "Nature Physics", year: 2018 },
      { authors: "T. Ozawa et al.", title: "Topological photonics", venue: "Reviews of Modern Physics", year: 2019 },
      { authors: "E. Galiffi et al.", title: "Photonics of time-varying media", venue: "Advanced Photonics", year: 2022 },
    ],
  },

  // ── add more pillars below ──
];
