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
  titleZh: string;
  tagline: string;
  taglineZh: string;
  image: string;
  alt?: string;
  description: string[];
  descriptionZh: string[]; // paragraph-for-paragraph Chinese of `description`
  figures?: { src: string; caption?: string; alt?: string }[];
  references?: Reference[]; // "Further reading" stays in English
  animation?: string; // dark-native animated hero figure (a key in PillarFigure.astro)
}

export const research: Pillar[] = [
  {
    slug: "reconfigurable-photonics",
    title: "Reconfigurable Photonic Chips",
    titleZh: "可重构光子芯片 (Reconfigurable Photonic Chips)",
    tagline: "Photonic chips you train instead of just fabricate — reprogrammed on the fly with light.",
    taglineZh: "可以训练、而不只是制造的光子芯片 —— 用光实时重新编程。",
    image: "/research/reconfigurable-photonics.jpg",
    alt: "A reconfigurable 2D photonic waveguide programmed by top illumination.",
    animation: "reconfigurablePixels",
    description: [
      "Conventional photonic devices are fixed once fabricated, sensitive to manufacturing errors, and limited by the discretized index profiles that lithography allows. We build a reconfigurable 2D waveguide platform whose refractive-index landscape is written by a pattern of light shone from above — so the same chip is reprogrammed for a new task instead of re-fabricated. On a single device we have demonstrated communication functions such as mode permutation and Hermite–Gaussian conversion, alongside computing functions including arbitrary unitary matrix–vector multiplication.",
      "Paired with real-time output detection and machine-learning feedback, the chip is trained toward a target function, closing the long-standing gap between simulation and experiment. This opens a path to programmable optical interconnects, adaptive error correction, ultra-broadband optical computing, programmable on-chip quantum-light sources, and optical accelerators for AI inference.",
    ],
    descriptionZh: [
      "传统光子器件一经制造便固定不变，对制造误差敏感，并受限于光刻 (lithography) 所能实现的离散折射率分布。我们构建了一种可重构的二维波导 (waveguide) 平台，其折射率分布由自上方投射的光图案「写入」—— 因此同一块芯片无需重新制造，即可为新任务重新编程。在单一器件上，我们已经演示了模式置换 (mode permutation)、厄米–高斯 (Hermite–Gaussian) 转换等通信功能，以及包括任意酉矩阵–向量乘法 (unitary matrix–vector multiplication) 在内的计算功能。",
      "结合实时输出探测与机器学习 (machine learning) 反馈，芯片被训练以逼近目标功能，弥合了仿真与实验之间长期存在的鸿沟。这为可编程光互连 (optical interconnect)、自适应纠错、超宽带光计算、可编程片上量子光源，以及面向 AI 推理的光学加速器开辟了道路。",
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
    titleZh: "光学热力学计算 (Optical Thermodynamic Computing)",
    tagline: "Computing with light's own thermal fluctuations — matrix inversion at a fraction of the energy.",
    taglineZh: "用光自身的热涨落进行计算 —— 以极低的能耗完成矩阵求逆。",
    image: "/research/optical-thermodynamic-computing.jpg",
    alt: "Thermalized multimode light encoding a matrix inversion.",
    animation: "thermalArray",
    description: [
      "This direction rests on the optical-thermodynamic theory we developed, which brings the language of statistical mechanics — temperature, chemical potential, and entropy — to multimode nonlinear optics. It explains phenomena such as optical thermalization and beam self-cleaning, and predicts in seconds dynamics that once required hours on a supercomputer.",
      "Rather than forcing light to imitate an electronic computer, we harness what light does naturally. In a complex optical field, random thermal fluctuations are not noise: they encode the system's Hamiltonian, and measuring the field's correlations directly yields matrix-inverse information. We aim to build the first optical thermodynamic computer, targeting matrix inversion roughly 1000× faster and 100× more energy-efficient — enabling the second-order and target-space training strategies that today's GPU-bound methods largely avoid.",
    ],
    descriptionZh: [
      "这一方向立足于我们所发展的光学热力学理论，它将统计力学的语言 —— 温度、化学势 (chemical potential) 与熵 (entropy) —— 引入多模非线性光学 (multimode nonlinear optics)。该理论能够解释光学热化 (optical thermalization)、光束自清洁 (beam self-cleaning) 等现象，并可在数秒内预测出过去需在超级计算机上耗时数小时才能得到的动力学过程。",
      "我们并不强迫光去模仿电子计算机，而是善用光本身的天性。在复杂光场中，随机的热涨落 (thermal fluctuation) 并非噪声：它们编码了系统的哈密顿量 (Hamiltonian)，而直接测量光场的关联即可获得矩阵求逆的信息。我们的目标是构建首台光学热力学计算机，使矩阵求逆速度约提升 1000 倍、能效约提升 100 倍 —— 从而支撑当今受限于 GPU 的方法大多难以采用的二阶 (second-order) 与目标空间 (target-space) 训练策略。",
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
    titleZh: "模拟神经网络 (Analog Neural Networks)",
    tagline: "Training physical systems until intelligence lives in the hardware itself.",
    taglineZh: "训练物理系统，直到智能栖身于硬件本身。",
    image: "/research/analog-neural-networks.jpg",
    alt: "A lattice of coupled analog oscillators synchronizing.",
    animation: "oscBrainSide",
    description: [
      "Digital hardware forces every computation onto the same rigid lattice of transistors. We take a different route: let a physical dynamical system do the computing directly. Information is written into the system's initial state; it then evolves under its own — generally time-dependent — Hamiltonian, and the answer is read from the collective state it settles into. Computation becomes a physical process rather than a sequence of instructions.",
      "The power lies in collective behaviour: many simple degrees of freedom, coupled together, organise into structured patterns that no single element carries. By shaping those interactions — and driving the system with a time-dependent Hamiltonian — we steer the system dynamics so that disordered initial states evolve toward the ordered configurations that encode a result. Rather than program the hardware, we train its dynamics, until the behaviour we want emerges from the physics itself.",
    ],
    descriptionZh: [
      "数字硬件将每一次运算都强加到同一套僵硬的晶体管阵列之上。我们另辟蹊径：让一个物理动力学系统直接完成计算。信息被写入系统的初始状态，随后系统在自身（通常随时间变化）的哈密顿量 (Hamiltonian) 下演化，答案则从它最终稳定下来的集体状态中读出。计算由此成为一个物理过程，而非一串指令。",
      "其力量源自集体行为：众多简单的自由度相互耦合，自组织成任何单一单元都无法承载的结构化图样。通过塑造这些相互作用 —— 并以随时间变化的哈密顿量驱动系统 —— 我们引导系统的动力学，使无序的初始状态朝着编码结果的有序构型演化。我们并非对硬件编程，而是训练它的动力学，直到我们想要的行为从物理本身涌现。",
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
    titleZh: "复杂光动力学 (Complex Light Dynamics)",
    tagline: "Light is both particle and wave — and each face opens onto strikingly rich physics.",
    taglineZh: "光既是粒子也是波 —— 而每一面都通向惊人丰富的物理。",
    image: "/research/complex-light-dynamics.jpg",
    alt: "A bound state in the continuum — a trapped mode whose radiation cancels.",
    animation: "bic",
    description: [
      "Light is at once a particle and a wave, and each face opens a different world of physics to explore. As a particle, a beam can be trapped on a potential hilltop — held there not by a valley but by an effective Coriolis force, exactly the way a Trojan asteroid rides stably at the L4 and L5 points, sixty degrees ahead of and behind a planet, in the solar system. In the rotating landscape above, the beam behaves as if it were a planet: a photon riding the L4 point of a Sun–Jupiter pair, circling that point even as the whole frame orbits the star.",
      "As a wave, that very same light can do the seemingly impossible — it becomes a bound light in the continuum: a mode that ought to radiate away yet stays perfectly trapped because its own outgoing waves interfere down to nothing. Particle and wave become two doorways into the same rich physics.",
      "And they are only the beginning. The same light also opens onto non-Hermitian photonics, topological protection of light, time reflection and spatiotemporal media, nonequilibrium transport, and negative-temperature optical thermodynamics — ideas long thought impossible or purely theoretical that are now becoming real experiments. If you are drawn to physics where waves and particles, order and disorder, and even space and time bend the usual rules, there is a great deal left to discover.",
    ],
    descriptionZh: [
      "光既是粒子又是波，每一面都开启一个不同的物理世界供人探索。作为粒子，一束光可以被俘获在势能的山顶之上 —— 使它停留在那里的并非山谷，而是一种有效的科里奥利力 (Coriolis force)，正如太阳系中特洛伊小行星 (Trojan asteroid) 稳定地驻留在 L4 与 L5 点、领先或落后行星六十度那样。在上方旋转的势能景观中，光束的行为宛如一颗行星：一个光子驻留在太阳–木星系统的 L4 点，即便整个参考系绕恒星公转，它仍环绕着该点回旋。",
      "作为波，同样的这束光却能做到看似不可能之事 —— 它成为连续域中的束缚光 (bound state in the continuum)：一个本应向外辐射的模式，却因自身的出射波相互干涉而彻底抵消，从而被完美地束缚住。粒子与波，由此成为通往同一片丰富物理的两道门。",
      "而这仅仅是开始。同样的光还通向非厄米光子学 (non-Hermitian photonics)、光的拓扑保护 (topological protection)、时间反射 (time reflection) 与时空介质 (spatiotemporal media)、非平衡输运 (nonequilibrium transport)，以及负温度光学热力学 (negative-temperature optical thermodynamics) —— 这些曾被认为不可能、或纯属理论的构想，如今正逐渐成为真实的实验。如果你着迷于波与粒子、有序与无序、乃至空间与时间都突破常规的物理，那么这里仍有大量未知等待发掘。",
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
