import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'custom-pen',
    title: 'Custom Hand-Machined Pen',
    category: 'Hardware',
    field: 'Manual machining',
    stats: [{ value: '3', label: 'Cartridges evaluated' }],
    description: 'Designed and machined a custom pen for my Dad\'s 65th birthday, creating a timeless and useful gift. Utilized Single-point threading along other machining techniques.',
    tags: ['Manual Lathe', 'Single-Point Threading', 'Machining', 'On-The-Spot problem solving', 'DFMA'],
    outer_image: '/pictures/hand_machined_pen-out.jpeg',
    inner_image: '/pictures/hand_machined_pen-in.jpeg',
    details: {
      fullDescription: [
        `Designed around a Pilot G2 cartridge, chosen (between Parker and Scribe contenders) due to its cost effectiveness to premium feel ratio, as well as it's availability (I could mess up a few without incurring great cost).

        Use Solidworks to created a fully dimensioned model of the cartridge, including complex and curved geometries, and designed the pen to fit around it while keeping DFMA and tool availability principles in mind.

        Chose the specific screw-in mechanism for ease of use, as well as to ensure a no-seam fit when the pen was in-use. Calculated pen moment arm for ideal top-section fill and length for best writing feel, and chose 310 stainless steel for the final pen for its durability and sand-blasted aesthetic appeal.`
      ]
    }
  },
  {
    slug: 'heat-equalizer',
    title: 'The (Heat) Equalizer™',
    category: 'Hardware',
    field: 'Thermal design',
    stats: [{ value: '3', label: 'Design iterations' }, { value: '~$70', label: 'Total parts cost' }],
    description: 'Designed a heat-transfer device to smooth the sinusoidal heating profile of electric stoves',
    tags: ['SolidWorks', 'Fusion 360', 'CAM', 'DFM'],
    outer_image: '/pictures/heat_device-out.jpeg',
    inner_image: '/pictures/heat_device-in.jpeg',
    details: {
      fullDescription: [
        ` Used SolidWorks for design and thermal simulation to determine minimum necessary wall width and assess theoretical effectiveness of air pockets as a thermal resistor, acting as a regulator that dampened heat spikes and absorbed & transferred heat more smoothly.

          This project started after countless burned pans, and realizing that most cheaper electric stoves have a lot of temperature overshoot since they are purely an on-off state that is driven by a thermistor.

          V3 of the ‘Equalizer’ ™ is picture inside this card, and features an easy-to-machine and prototype layout (there is not enough functional difference between the circular and straight fins), with components and materials (including disk diameter) that are most affordable and easiest to find in McMaster Carr, with a total cost of around $70.00.

          The equalizer also features clearance slots under the base that allow the installation of teflon pads to add more friction with stove surfaces and prevent the device from slipping.`
      ]
    }
  },
  {
    slug: 'air-engine',
    title: 'Air Engine Components',
    category: 'Hardware',
    field: 'CNC machining',
    stats: [{ value: '5', label: 'Parts CNC-machined' }],
    description: 'Programmed, CNC-machined and assembled 5 components for an air engine',
    tags: ['Fusion 360', 'Haas VF-3', 'CNC', 'ACE Certified'],
    outer_image: '/pictures/air_engine_components-out.jpeg',
    inner_image: '/pictures/air_engine_components-in.mp4',
    isVideo: true,
    details: {
      fullDescription: [
        `Programmed, CNC-machined and assembled 5 components for an air engine. Using Fusion and a Haas VF-3 mill. Earning the ACE CNC certificate.`
      ]
    }
  },
  {
    slug: 'fsd-truss',
    title: 'FSD Truss Automation Pipeline',
    category: 'Software',
    field: 'Structural automation',
    stats: [{ value: '16 hr → 2 min', label: 'Per truss analysis' }, { value: '~20', label: 'Iterations automated' }],
    description: 'Automated Python pipeline for iterative FSD (Fully Stressed Design) of general 2D trusses by interacting with the Abaqus API through the Powershell.',
    tags: ['Python', 'ABAQUS API', 'PowerShell', 'Async Communication'],
    outer_image: '/pictures/abaqus_project-flowchart.png',
    inner_image: '/pictures/abaqus_project-out.jpeg',
    details: {
      fullDescription: [
        `Engineered an automated Python pipeline for FSD (Fully Stressed Design) of 2D trusses, integrating the ABAQUS API with async PowerShell communication to write and run .inp files (Abaqus' standard input script for any 2D or 3D truss, which specifies nodes, connections and initial conditions).

            The <b> FSD process iterates through the following steps: </b>
            • Generate initial truss geometry with starting member dimensions
            • Run FEA simulation via ABAQUS to extract axial stress data for each member
            • Check if any member is below minimum size to not exceed maximum normal stress
            • Reduce cross-sectional area of over-designed members
            • Re-run simulation with updated dimensions
            • Repeat until all members are optimally sized (fully stressed)

          This automation cut manual workflow time by ~16 hours per Truss analysis, based on the following calculations:

              <b>→</b> 12 nodes @ 4 mins hand calcs per node = 48 mins per iteration.
              <b>→</b> ~20 iterations = 16 hours

            A single truss FSD instance takes less than 2 minutes with the Pipeline.

            `
      ],
      github: 'https://github.com/PabloCoralDev/Abaqus-Python-fully_stressed_method'
    }
  },
  {
    slug: 'decision-matrix',
    title: 'Dynamic Decision Matrix',
    category: 'Software',
    field: 'Data analysis',
    stats: [{ value: '4', label: 'Constraints weighed' }, { value: '3', label: 'Scoring functions' }],
    description: 'Built a dynamic decision matrix using Google Sheets and JavaScript to mathematically choose the best car given price, mpg, tranmission and trunk space constrains. <b>Final contender shown in the picture above!</b>',
    tags: ['JavaScript', 'Google Apps Script', 'Data Analysis', 'Google Sheets'],
    outer_image: '/pictures/car_decision_matrix-in-a.jpeg',
    inner_image: '/pictures/car_decision_matrix-out.jpeg',
    details: {
      fullDescription: [
        `Built a dynamic decision matrix using Sheets and JavaScript + Google Apps Script, which implemented 3 piecewise scoring functions with sensitivity scaling and anomaly filters (hand made and tuned for the specific input parameters and objectives). Applied linear regression to the output scores to generate ranked car recommendations, tailored to desired cost, mileage and mpg.`
      ],
      sheets: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTCVtAUelqurRjV4xumrZep8Ptkvn8AJ9DBHgum5hQvDlWraqsPq9BYhWdw1pwCYliq-bZXFNYj4W2f/pubhtml'
    }
  },
  {
    slug: 'diff-eq',
    title: 'Differential Equations Playground',
    category: 'Software',
    field: 'Full-stack web',
    description: 'Full-stack application to deepen mathematical understanding and cross-language integration',
    tags: ['Python', 'React', 'FastAPI', 'Vercel'],
    outer_image: '/pictures/diff_eq_playground-out.png',
    details: {
      fullDescription: [
        `Developing a full-stack differential equations playground to deepen mathematical understanding and cross-language integration. Handling logic in a Python backend, and interfacing with a modern React front-end through FastAPI. Hosting open-source on a Vercel + GitHub integration.`
      ],
      github: 'https://github.com/PabloCoralDev/Differential_Equations_Playground'
    }
  },
  {
    slug: 'adaptive-bollinger',
    title: 'Volatility-Adaptive Bollinger Bands',
    category: 'Software',
    field: 'Quantitative trading',
    stats: [{ value: '5', label: 'HMM volatility regimes' }, { value: '4 / 4', label: 'Winning trades, META 2023' }],
    description: 'A mean-reversion trading system whose Bollinger Band width is set live by a 5-state Hidden Markov Model of market volatility. Backtests on historical data and paper-trades through the Alpaca API.',
    tags: ['Python', 'Hidden Markov Models', 'NumPy', 'pandas', 'Alpaca API', 'asyncio'],
    outer_image: '/pictures/bollinger_backtest-out.png',
    inner_image: '/pictures/bollinger_math-in.png',
    details: {
      fullDescription: [
        `Classic Bollinger Bands use a fixed width (usually 2 standard deviations), so the same rule that catches real overreactions in a calm market fires constantly in a volatile one. I made the width adaptive: a 5-state Gaussian Hidden Markov Model, trained on two features per bar (log return and intra-bar range), classifies the current volatility regime, and the band width scales with it, from 1.0σ in the calmest regime to 3.0σ in the most volatile.

        States are ranked by the determinant of their covariance matrix. Every 5 bars, the last 20 bars are Viterbi-decoded to find the current regime, and the band width is updated. Signals are evaluated on closes through the previous bar and filled at the current bar, so the backtest has no lookahead. Every fill pays a $1 commission plus 5 bps of slippage.

        <b>Winning case (META, 2023, daily bars, HMM trained on 2021–2022):</b> 4 round trips, all profitable (+5% to +14% each), for +$113.69 on a one-share position with a 2.56 Sharpe ratio. The same strategy with a fixed 2σ band made a single trade for +$34.33. The chart in the overview is the system's own output: price with the bands and every buy/sell, the equity curve, and the volatility regime the HMM picked for each stretch of the year.

        The same strategy class runs live: an asyncio WebSocket loop streams 1-minute bars from Alpaca, re-decodes the regime every 5 bars, and places paper market orders on a worker thread so the data stream never blocks.`
      ]
    }
  },
  {
    slug: 'brake-temp-model',
    title: 'Brake Rotor Temperature Model',
    category: 'Software',
    field: 'Thermal modeling · Piper Aircraft',
    stats: [{ value: '~47,000', label: 'Sensor readings modeled' }, { value: '5 min', label: 'Prediction horizon' }],
    description: 'At Piper Aircraft, I modeled brake rotor temperature from flight-test sensor data with a delay-differential energy balance, solved it with Runge-Kutta, and tuned it with mini-batch gradient descent.',
    tags: ['Python', 'Heat Transfer', 'Runge-Kutta (RK4)', 'Mini-batch SGD', 'Signal Processing', 'Data Pipelines'],
    outer_image: '/pictures/brake_model-out.jpeg',
    inner_image: '/pictures/brake_math-in.png',
    details: {
      fullDescription: [
        `Brake rotors heat up during taxi and takeoff and cool down in flight; the goal was to estimate how much heat capacity the rotors had left at any moment. I taught myself heat transfer to model it from ~47,000 airspeed, brake-pressure and temperature readings logged by the aircraft's data acquisition system.

        First, a Python pipeline ingests the flight CSVs, smooths them with a Savitzky-Golay filter and resamples with Akima interpolation. A weighted decision table then uses airspeed, brake pressure and altitude to label each moment as taxi heating, takeoff/landing heating, ground cooling or in-flight cooling. The photo in the overview is that program's output: heating stretches in red, cooling in green, with the rate of change and its outlier bands below.

        The model itself is an energy balance on the brake assembly, mc·dT/dt = heat in − heat out. Heat in is driven by airspeed × brake pressure with a time delay, and heat out is convective cooling that grows with airspeed. A 4th-order Runge-Kutta solver integrates it forward to predict the temperature over the next 5 minutes at every sample, and mini-batch stochastic gradient descent, with gradients from a finite-difference Jacobian, tunes the model's constants to minimize the mean squared error across all prediction windows.`
      ]
    }
  },
  {
    slug: 'flight-sim-model',
    title: 'VR Flight Simulator Model',
    category: 'Software',
    field: 'Flight simulation · Piper Aircraft',
    stats: [{ value: '3', label: 'Aircraft configurations' }, { value: '14 pages', label: 'Build guide written' }],
    description: 'At Piper Aircraft, I took an experimental aircraft from Siemens NX to Blender to a flyable Microsoft Flight Simulator build, tuned its flight dynamics with the project test pilot, and integrated it in VR so pilots could evaluate design options before they were built.',
    tags: ['Siemens NX', 'Blender', 'Microsoft Flight Simulator', 'Flight Dynamics', 'VR', 'Python'],
    outer_image: '/pictures/flight_sim_model-out.jpeg',
    details: {
      fullDescription: [
        `The goal was a version of the experimental aircraft that a pilot could fly in VR before the real one existed, with a working cockpit, a spinning propeller and realistic handling, so design options could be judged from the pilot's seat.

        I imported the aircraft from Siemens NX into Blender and edited the geometry precisely for each design option, building the nose-extension variants from the same base model. Getting a custom model into Microsoft Flight Simulator turned out to be the hardest part: the process is poorly documented, and the first builds flew with no proper file structure and no way to tune them. I worked out the full pipeline myself, rebuilding the project's folder structure from scratch and debugging the build until the aircraft was flyable.

        For flight dynamics, I based the aircraft on a Daher TBM 930, extracting its configuration files as a starting point, then rewrote the XML for our aircraft's dynamics, animation and sound. I tuned the pitch and roll response with the project test pilot, combining their feedback with my own analysis, and checked torque at given angles of attack and speeds against the real aircraft. I also used the simulator's CFD visualization to find areas of excess drag.

        Then I integrated the whole aircraft in VR: a propeller animated by the thrust lever (driving both its speed and the engine sound), a working primary flight display (PFD) that responds in-game and in VR, and visibility details like propeller blur, eye position and canopy glare. Three configurations now live permanently on the simulator computer: the baseline aircraft, a 13-inch nose extension, and a 15-inch baggage bay.

        Because the documentation was so scattered, I wrote a 14-page build guide (folder hierarchy, control files, and animating parts with NLA tracks) so future aircraft can be built far faster. Alongside it, I wrote a Python tool that uses the CAD geometry and trigonometry to show how a 0–19 inch nose extension changes the pitch-down a pilot needs to keep the baseline view over the nose.`
      ]
    }
  },
]

/** Skill areas for the Toolbox table; `used` lists project slugs. */
export const toolbox: Array<{ area: string; tools: string; used: string[] }> = [
  { area: 'CAD & Simulation', tools: 'SolidWorks, Siemens NX, Fusion 360, Abaqus FEA, Blender, MS Flight Simulator', used: ['custom-pen', 'heat-equalizer', 'air-engine', 'fsd-truss', 'flight-sim-model'] },
  { area: 'Manufacturing', tools: 'Manual lathe, Haas VF-3 CNC, CAM, DFM/DFMA', used: ['custom-pen', 'heat-equalizer', 'air-engine'] },
  { area: 'Programming', tools: 'Python, JavaScript, React, PowerShell, asyncio', used: ['fsd-truss', 'decision-matrix', 'diff-eq', 'adaptive-bollinger', 'brake-temp-model', 'flight-sim-model'] },
  { area: 'Numerical Methods & ML', tools: 'Runge-Kutta solvers, gradient descent, Hidden Markov Models', used: ['diff-eq', 'adaptive-bollinger', 'brake-temp-model'] },
  { area: 'Data & Web', tools: 'pandas, NumPy, FastAPI, Alpaca API, Google Apps Script, Vercel', used: ['decision-matrix', 'diff-eq', 'adaptive-bollinger', 'brake-temp-model'] },
]
