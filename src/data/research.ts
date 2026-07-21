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
    titleZh: "可重构光子芯片",
    tagline: "Photonic chips you train instead of just fabricate — reprogrammed on the fly with light.",
    taglineZh: "这样的光子芯片不是造出来的，而是“训练”出来的 —— 用光即时重新编程。",
    image: "/research/reconfigurable-photonics.jpg",
    alt: "A reconfigurable 2D photonic waveguide programmed by top illumination.",
    animation: "reconfigurablePixels",
    description: [
      "Conventional photonic devices are fixed once fabricated, sensitive to manufacturing errors, and limited by the discretized index profiles that lithography allows. We build a reconfigurable 2D waveguide platform whose refractive-index landscape is written by a pattern of light shone from above — so the same chip is reprogrammed for a new task instead of re-fabricated. On a single device we have demonstrated communication functions such as mode permutation and Hermite–Gaussian conversion, alongside computing functions including arbitrary unitary matrix–vector multiplication.",
      "Paired with real-time output detection and machine-learning feedback, the chip is trained toward a target function, closing the long-standing gap between simulation and experiment. This opens a path to programmable optical interconnects, adaptive error correction, ultra-broadband optical computing, programmable on-chip quantum-light sources, and optical accelerators for AI inference. In a sense, such a chip is no longer something we merely fabricate but something that comes alive — it learns, adapts, and grows richer as time goes on.",
    ],
    descriptionZh: [
      "传统光子器件一旦制成便无法更改，既容易受制造误差影响，也受限于光刻工艺所能实现的离散折射率分布。我们搭建了一种可重构的二维波导平台：它的折射率分布由自上方投射的光场图案“写入”，因此同一块芯片无需重新流片，就能针对新任务重新编程。在单一器件上，我们已经演示了模式置换、厄米–高斯变换等通信功能，以及任意酉矩阵–向量乘法等计算功能。",
      "再借助实时的输出探测与机器学习反馈，芯片被训练着逼近目标功能，长期横亘在仿真与实验之间的鸿沟就此弥合。这为可编程光互连、自适应纠错、超宽带光计算、可编程片上量子光源，以及面向 AI 推理的光学加速器等应用铺平了道路。某种意义上，这样的芯片不再只是被制造出来的器件，而仿佛拥有了生命 —— 它会学习、会适应，也会随着时间不断成长。",
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
    titleZh: "光学热力学计算",
    tagline: "Computing with light's own thermal fluctuations — matrix inversion at a fraction of the energy.",
    taglineZh: "用光自身的热涨落进行计算 —— 以极低的能耗完成矩阵求逆。",
    image: "/research/optical-thermodynamic-computing.jpg",
    alt: "Thermalized multimode light encoding a matrix inversion.",
    animation: "thermalArray",
    description: [
      "Optical thermodynamics seeks to describe the collective behavior of highly multimoded nonlinear photonic systems using macroscopic concepts such as entropy, temperature, chemical potential, and equilibrium. Rather than tracking every optical mode individually, it asks whether large ensembles of interacting modes can be understood through a small set of thermodynamic principles. This perspective has provided a unified language for phenomena such as thermalization, mode redistribution, and the emergence of equilibrium states, while helping address long-standing questions that were difficult to resolve through conventional wave-based descriptions alone.",
      "Beyond explaining complex optical systems, optical thermodynamics may also offer a new way to compute. In thermodynamic matrix inversion, the solution to a linear system is encoded in the correlations and fluctuations of an optical system as it relaxes toward equilibrium, allowing the underlying physics to perform the computation directly. This is particularly promising because modern accelerators are highly efficient at matrix–vector multiplication but far less efficient at operations such as matrix inversion and linear-system solving. As a result, many algorithms that are mathematically attractive remain computationally impractical at scale. By removing this bottleneck, optical thermodynamic computing could make a broader class of algorithms viable and, in doing so, reshape some of the computational foundations of modern artificial intelligence.",
    ],
    descriptionZh: [
      "现代光学正进入一个高度多模的时代。在许多光子系统中，成百上千个光学模式可以同时存在；当这些模式通过非线性效应彼此作用时，系统便会呈现出极其复杂的多体运动问题，难以再通过传统理论逐一求解。光热力学为理解这类复杂系统提供了一种新的视角。它不再试图追踪每一个光学模式的具体演化，而是借助熵、温度、化学势等宏观参量，描述高度多模、强非线性光学系统的整体行为，研究能量如何在不同模式之间流动与重新分配，系统如何趋于平衡，以及新的宏观状态如何从复杂的微观相互作用中涌现。这就如同我们会用温度、压强等宏观参量描述屋子里的气体，而从不追踪每一个分子的位置和速度一样，我们放弃追踪每一个光子，并且使用熵来描述系统的演化。通过这一框架，光的热化、模态竞争与能量输运等现象得以被纳入统一的描述，一些长期困扰多模非线性光学领域的问题也因此获得了新的理解与答案。",
      "与此同时，光热力学也为计算提供了一条不同于传统数字处理的路径。以热力学矩阵求逆为例，线性方程组的解可以通过光学系统在平衡态下的涨落与关联直接获得，从而利用系统自身的物理演化完成计算。当前的 GPU 围绕矩阵乘法进行了高度优化，却难以同样高效地处理矩阵求逆和线性方程组求解；因此，一些在算法上很有吸引力的方法，常常由于与现有硬件不匹配而难以大规模应用。若光热力学计算能够显著降低这类运算的时间与能耗，它带来的就不只是更快的计算硬件，也可能让一批过去受制于计算成本的算法重新成为现实，并进一步改变现代人工智能所依赖的算法与计算基础。",
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
    titleZh: "模拟信号神经网络",
    tagline: "Training physical systems until intelligence lives in the hardware itself.",
    taglineZh: "训练物理系统，直到智能栖息于硬件本身。",
    image: "/research/analog-neural-networks.jpg",
    alt: "A lattice of coupled analog oscillators synchronizing.",
    animation: "oscBrainSide",
    description: [
      "Digital hardware maps nearly every computation onto the same underlying machinery: transistors executing long sequences of discrete instructions. This architecture is extraordinarily versatile, but it often forces the physics to imitate an algorithm designed in software. We take a different route. Instead of prescribing every intermediate step, we let a physical dynamical system carry out the computation through its own natural evolution. Information is encoded in the system’s initial state or external constraints; the system then evolves under its Hamiltonian, interactions, and dissipation, and the answer is extracted from the collective state, correlations, or equilibrium configuration that emerges. Computation becomes not merely something represented by physics, but a physical process in itself.",
      "The opportunity lies in collective behavior. When many simple degrees of freedom interact, they can organize into structured states that are not contained in any individual component. These emergent states may encode solutions to optimization problems, linear systems, inference tasks, or other computations that are costly to reproduce through sequential digital operations. By shaping the interactions, energy landscape, and boundary conditions of the system, we guide its dynamics so that a disordered or incomplete input evolves toward a state that represents the desired result. In this framework, we do not program every operation performed by the hardware. We design—and, where possible, train—the dynamics themselves, allowing useful computational behavior to emerge from the underlying physics.",
      "This perspective opens a broader question: what algorithms become possible when computation is no longer constrained to the operations that conventional processors perform efficiently? Physical systems offer parallelism, fluctuations, nonlinear interactions, relaxation, and self-organization as native resources. Harnessing these processes may not only accelerate existing algorithms, but also enable new computational models built around what nature already does well.",
    ],
    descriptionZh: [
      "数字计算几乎把所有问题都转化为同一种形式：由晶体管执行一连串离散指令。这一架构极其通用，但也意味着，无论问题本身来自怎样的物理过程，最终都必须被重新编码成适合数字处理器执行的算法。我们尝试走另一条路：不再规定每一步应该如何计算，而是让一个真实的物理动力系统通过自身演化直接给出答案。信息可以被写入系统的初始状态、边界条件或外部约束之中，随后系统在相互作用、非线性、耗散与涨落的共同作用下自然演化，计算结果则从最终形成的整体状态、关联或平衡构型中读取。于是，计算不再只是由物理器件执行的一串指令，而成为物理过程本身。",
      "这种计算方式的潜力来自集体行为。当大量简单的自由度彼此耦合时，它们可以自发形成具有结构的整体状态，而这些状态并不属于任何单个元件。通过设计系统中的相互作用、能量景观和边界条件，我们可以引导其动力学，使一个无序或不完整的初始状态逐渐演化为编码答案的目标构型。这里，我们不再逐条编程硬件，而是设计乃至训练系统的动力学本身，让所需的功能从底层物理规律中自然涌现。优化、线性方程求解、推断等任务，都可能由此获得不同于传统数字算法的实现方式。",
      "更重要的是，这一思路提出了一个更根本的问题：当计算不再受限于传统处理器最擅长的操作时，哪些新的算法和机器将成为可能？物理系统天然具备并行演化、非线性耦合、涨落、弛豫与自组织等能力。真正利用这些特性，目标不仅是更快地执行已有算法，更是围绕物理系统本身擅长的过程，发展新的计算原理与人工智能架构。",
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
    titleZh: "复杂光场动力学",
    tagline: "Light opens a window onto physical worlds that challenge our usual intuitions.",
    taglineZh: "光为我们打开通往奇异物理世界的窗口，也不断挑战我们习以为常的直觉。",
    image: "/research/complex-light-dynamics.jpg",
    alt: "A bound state in the continuum — a trapped mode whose radiation cancels.",
    animation: "bic",
    description: [
      "Light can inhabit many different physical worlds. In one setting, it behaves like a particle moving through an effective landscape; in another, it reveals its wave nature through interference, radiation, and localization. By shaping the geometry, motion, and interactions of an optical system, we can make these different descriptions tangible—and use them to realize phenomena that would otherwise seem inaccessible.",
      "From a particle-like perspective, a beam can be stabilized at the top of an effective potential rather than at its minimum. The mechanism is analogous to the stability of Trojan asteroids near the L4 and L5 Lagrange points, located sixty degrees ahead of and behind a planet in its orbit. In a rotating optical landscape, an effective Coriolis force can hold the beam near such a point, allowing it to circulate around an otherwise unstable equilibrium. The optical field then behaves as though it were a small celestial body trapped within a synthetic Sun–Jupiter system: localized not by an ordinary potential well, but by motion, geometry, and the rotating frame itself.",
      "The same light can also enter a very different regime governed by its wave nature. A mode embedded within a continuum of radiating states would ordinarily be expected to leak away. Yet carefully structured interference can cause all of its outgoing radiation channels to cancel, leaving the field perfectly confined. This is a bound state in the continuum: a localized optical mode existing where localization should seemingly be impossible. The trapping mechanism is not a material barrier or a conventional cavity, but the destructive interference of the wave with itself.",
      "These examples are two entrances into a much broader landscape. Light provides a platform for exploring non-Hermitian dynamics, topological protection, time reflection, spatiotemporal media, nonequilibrium transport, and optical thermodynamics. Many of these phenomena challenge familiar distinctions—between localization and radiation, stability and instability, equilibrium and nonequilibrium, or space and time — and turn ideas once regarded as mathematical curiosities into controllable experiments.",
      "Our interest lies not only in observing such unusual effects, but in understanding the principles that connect them and learning how to engineer them. When light is placed in synthetic landscapes, driven far from equilibrium, or coupled across many degrees of freedom, familiar rules can give way to new forms of motion, organization, and control. For those drawn to physics at the boundaries between waves and particles, order and disorder, and conventional and synthetic dimensions, much remains unexplored.",
    ],
    descriptionZh: [
      "光能够呈现出许多看似截然不同的物理图景。有时，它像粒子一样在人工构造的势能场中运动；有时，它又以波的形式展现干涉、辐射与局域化。通过调控光学系统的结构、运动和相互作用，我们可以把这些抽象的物理图景转化为真实可见的实验现象，并进一步探索那些隐藏在自然之下的状态。",
      "从粒子的角度看，光束甚至可以被稳定在势能的“山顶”，而不是通常意义上的势阱底部。这与太阳系中的特洛伊小行星十分相似：在太阳和木星共同形成的旋转引力场中，在科里奥利力的帮助下，小行星能够停留在行星轨道前后约六十度的 L4 和 L5 拉格朗日点附近。同样的，在旋转的光学势场中，等效科里奥利力也可以将不稳定平衡点变稳定，使光束围绕其持续运动。此时，光就像运行在一个人工“太阳—木星”系统中的天体；维持它局域的并不是普通的势阱，而是旋转参考系、几何结构和动力学效应的共同作用。",
      "从波的角度看，同一束光又会展现完全不同的可能。一个处在连续辐射谱中的光学模式，按常理应当不断向外泄漏，却可能因为各个辐射通道之间发生精确的相消干涉而被牢牢束缚。这就是连续谱中的束缚态：一个本应辐射消散的光学模式，却能够长期保持局域。困住它的并非材料屏障或传统光学腔，而是光波自身的干涉。",
      "这些现象只是通往更广阔物理世界的几个入口。非厄米光子学、光的拓扑保护、时间反射与时空介质、非平衡输运，以及光热力学，都可以借助光学系统被构造、调控和观测。它们不断重新定义我们熟悉的边界：局域与辐射、稳定与不稳定、平衡与非平衡，甚至空间与时间之间，都可能出现超出直觉的新关系。",
      "我们不仅希望观察这些反常而迷人的现象，更希望理解它们背后的共同规律，并探索如何主动创造和利用它们。当光被置于人工势场之中、被驱动至远离平衡的状态，或在大量自由度之间发生耦合时，熟悉的物理规则可能让位于全新的运动、组织与控制方式。在波与粒子、秩序与无序、真实空间与人工维度的交界处，仍然有许多问题等待我们去发现。",
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
