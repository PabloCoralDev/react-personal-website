import type { Project } from '../types'

export const projects: Project[] = [
      {
    title: 'Custom Hand-Machined Pen',
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
    title: 'The (Heat) Equalizer™',
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
    title: 'Air Engine Components',
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
    title: 'FSD Truss Automation Pipeline',
    description: 'Automated Python pipeline for iterative FSD (Fully Stressed Design) of general 2D trusses by interacting with the Abaqus API through the Powershell.',
    tags: ['Python', 'ABAQUS API', 'PowerShell', 'Async Communication'],
    outer_image: '/pictures/abaqus_project-out.jpeg',
    inner_image: '/pictures/abaqus_project-in.jpeg',
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
    title: 'Dynamic Decision Matrix',
    description: 'Built a dynamic decision matrix using Google Sheets and JavaScript to mathematically choose the best car given price, mpg, tranmission and trunk space constrains. <b>Final contender shown in the picture above!</b>',
    tags: ['JavaScript', 'Google Apps Script', 'Data Analysis', 'Google Sheets'],
    outer_image: '/pictures/car_decision_matrix-out.jpeg',
    inner_image: '/pictures/car_decision_matrix-in-a.jpeg',
    details: {
      fullDescription: [
        `Built a dynamic decision matrix using Sheets and JavaScript + Google Apps Script, which implemented 3 piecewise scoring functions with sensitivity scaling and anomaly filters (hand made and tuned for the specific input parameters and objectives). Applied linear regression to the output scores to generate ranked car recommendations, tailored to desired cost, mileage and mpg.`
      ],
      sheets: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTCVtAUelqurRjV4xumrZep8Ptkvn8AJ9DBHgum5hQvDlWraqsPq9BYhWdw1pwCYliq-bZXFNYj4W2f/pubhtml'
    }
  },
      {
    title: 'Differential Equations Playground',
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
]
