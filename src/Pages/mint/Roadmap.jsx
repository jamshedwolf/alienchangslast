import React from "react"
import alien from "./alien 1.svg"
import road from "./road.svg"
import heli from "./heli.svg"

function PhaseOne() {
  return (
    <div className="flex flex-col m-10 lg:m-0 exo justify-center relative" id="roadmap">
      {/* Main container for each phase card */}
      <div className="w-[300px] h-[200px] lg:w-[500px] flex lg:h-[300px]">
        {/* Container for the card structure */}
        <div className="w-[100px] h-[200px] lg:w-[200px] lg:h-[300px] border-[5px] border-r-[0px] rounded-l-[20px] border-[#22C55E]"></div>
        <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border opacity-0"></div>
        <div className="absolute left-[10px] lg:left-[20px] w-[250px] h-[180px] top-[10px] p-5 lg:w-[460px] lg:top-[20px] lg:p-10 rounded-[10px] lg:rounded-[20px] text-white pt-0 border-[#22C55E] lg:h-[260px] border">
          {/* Content of the card */}
          <div className="font-bold text-center builder lg:text-2xl p-2 clash">
            Phase 1
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-3xl fontbox">Conceptualization & Design:</p>
            <p className="text-[12px] builder lg:text-[18px] clash">
            Define the token concept and create branding elements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhaseTwo() {
  return (
    <div className="flex flex-col m-10 exo lg:m-0 justify-center relative" id="roadmap">
      {/* Main container for each phase card */}
      <div className="w-[300px] h-[200px] lg:w-[500px] flex lg:h-[300px]">
        {/* Container for the card structure */}
        <div className="w-[100px] h-[200px] lg:w-[200px] lg:h-[300px] border-[5px] border-r-[0px] rounded-l-[20px] border-[#22C55E]"></div>
        <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border opacity-0"></div>
        <div className="absolute left-[10px] lg:left-[20px] w-[250px] h-[180px] top-[10px] p-5 lg:w-[460px] lg:top-[20px] lg:p-10 rounded-[10px] lg:rounded-[20px] text-white pt-0 border-[#22C55E] lg:h-[260px] border">
          {/* Content of the card */}
          <div className="font-bold text-center builder lg:text-2xl p-2 clash">
            Phase 2
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-3xl fontbox">Tokenomics Research and
            Design:</p>
            <p className="text-[12px] builder lg:text-[18px] clash">
            Explore tokenomics models and design incentives for holders.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhaseThree() {
  return (
    <div className="flex flex-col m-10 exo lg:m-0 justify-center relative" id="roadmap">
      {/* Main container for each phase card */}
      <div className="w-[300px] h-[200px] lg:w-[500px] flex lg:h-[300px]">
        {/* Container for the card structure */}
        <div className="w-[100px] h-[200px] lg:w-[200px] lg:h-[300px] border-[5px] border-r-[0px] rounded-l-[20px] border-[#22C55E]"></div>
        <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border opacity-0"></div>
        <div className="absolute left-[10px] lg:left-[20px] w-[250px] h-[180px] top-[10px] p-5 lg:w-[460px] lg:top-[20px] lg:p-10 rounded-[10px] lg:rounded-[20px] text-white pt-0 border-[#22C55E] lg:h-[260px] border">
          {/* Content of the card */}
          <div className="font-bold text-center builder lg:text-2xl p-2 clash">
            Phase 3
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-3xl fontbox">Smart Contract and Token Minting:</p>
            <p className="text-[12px] builder lg:text-[18px] clash">
            Develop and deploy a secure smart contract for token creation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhaseFour() {
  return (
    <div className="flex flex-col m-10 exo lg:m-0 justify-center relative" id="roadmap">
      {/* Main container for each phase card */}
      <div className="w-[300px] h-[200px] lg:w-[500px] flex lg:h-[300px]">
        {/* Container for the card structure */}
        <div className="w-[100px] h-[200px] lg:w-[200px] lg:h-[300px] border-[5px] border-r-[0px] rounded-l-[20px] border-[#22C55E]"></div>
        <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border opacity-0"></div>
        <div className="absolute left-[10px] lg:left-[20px] w-[250px] h-[180px] top-[10px] p-5 lg:w-[460px] lg:top-[20px] lg:p-10 rounded-[10px] lg:rounded-[20px] text-white pt-0 border-[#22C55E] lg:h-[260px] border">
          {/* Content of the card */}
          <div className="font-bold text-center builder lg:text-2xl p-2 clash">
            Phase 4
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-3xl fontbox">Community Development,
            Social Media, and Website:</p>
            <p className="text-[12px] builder lg:text-[18px] clash">
            Build an engaged community through social media and website
            presence.Introduce new features and functionalities to the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhaseFive() {
  return (
    <div className="flex flex-row m-10 lg:m-0 exo relative justify-center" id="roadmap">
      {/* Main container for each phase card */}
      <div className="w-[300px] h-[200px] lg:w-[500px] flex lg:h-[300px]">
        {/* Container for the card structure */}
        <div className="w-[100px] h-[200px] lg:w-[200px] lg:h-[300px] border-[5px] border-r-[0px] rounded-l-[20px] border-[#22C55E]"></div>
        <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border opacity-0"></div>
        <div className="absolute left-[10px] lg:left-[20px] w-[250px] h-[180px] top-[10px] p-5 lg:w-[460px] lg:top-[20px] lg:p-10 rounded-[10px] lg:rounded-[20px] text-white pt-0 border-[#22C55E] lg:h-[260px] border">
          {/* Content of the card */}
          <div className="font-bold text-center builder lg:text-2xl p-2 clash">
            Phase 5
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-3xl fontbox">Presale:</p>
            <p className="text-[12px] builder lg:text-[18px] clash">
            Conduct an initial sale phase to raise liquidity and bootstrap token
            distribution.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
function Phasesix() {
  return (
    <div className="flex flex-row m-10 lg:m-0 relative exo justify-center" id="roadmap">
      {/* Main container for each phase card */}
      <div className="w-[300px] h-[200px] lg:w-[500px] flex lg:h-[300px]">
        {/* Container for the card structure */}
        <div className="w-[100px] h-[200px] lg:w-[200px] lg:h-[300px] border-[5px] border-r-[0px] rounded-l-[20px] border-[#22C55E]"></div>
        <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border opacity-0"></div>
        <div className="absolute left-[10px] lg:left-[20px] w-[250px] h-[180px] top-[10px] p-5 lg:w-[460px] lg:top-[20px] lg:p-10 rounded-[10px] lg:rounded-[20px] text-white pt-0 border-[#22C55E] lg:h-[260px] border">
          {/* Content of the card */}
          <div className="font-bold text-center builder lg:text-2xl p-2 clash">
          Phase 6
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-3xl fontbox">Marketing:</p>
            <p className="text-[12px] builder lg:text-[18px] clash">
            Execute marketing campaigns to increase token reach & awareness.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
function Phaseseven() {
  return (
    <div className="flex flex-row m-10 lg:m-0 relative exo justify-center" id="roadmap">
      {/* Main container for each phase card */}
      <div className="w-[300px] h-[200px] lg:w-[500px] flex lg:h-[300px]">
        {/* Container for the card structure */}
        <div className="w-[100px] h-[200px] lg:w-[200px] lg:h-[300px] border-[5px] border-r-[0px] rounded-l-[20px] border-[#22C55E]"></div>
        <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border opacity-0"></div>
        <div className="absolute left-[10px] lg:left-[20px] w-[250px] h-[180px] top-[10px] p-5 lg:w-[460px] lg:top-[20px] lg:p-10 rounded-[10px] lg:rounded-[20px] text-white pt-0 border-[#22C55E] lg:h-[260px] border">
          {/* Content of the card */}
          <div className="font-bold text-center builder lg:text-2xl p-2 clash">
            Phase 7
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-3xl fontbox">DEX Token Launch and Permanent
            Liquidity Lock:</p>
            <p className="text-[12px] builder lg:text-[18px] clash">
            Launch the token on decentralized exchanges and lock liquidity to
            ensure stability.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
function Phaseeight() {
  return (
    <div className="flex flex-row m-10 lg:m-0 relative exo justify-center" id="roadmap">
      {/* Main container for each phase card */}
      <div className="w-[300px] h-[200px] lg:w-[500px] flex lg:h-[300px]">
        {/* Container for the card structure */}
        <div className="w-[100px] h-[200px] lg:w-[200px] lg:h-[300px] border-[5px] border-r-[0px] rounded-l-[20px] border-[#22C55E]"></div>
        <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border opacity-0"></div>
        <div className="absolute left-[10px] lg:left-[20px] w-[250px] h-[180px] top-[10px] p-5 lg:w-[460px] lg:top-[20px] lg:p-10 rounded-[10px] lg:rounded-[20px] text-white pt-0 border-[#22C55E] lg:h-[260px] border">
          {/* Content of the card */}
          <div className="font-bold text-center builder lg:text-2xl p-2 clash">
            Phase 8
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-3xl fontbox">Ecosystem Expansion and
            Future Projects:</p>
            <p className="text-[12px] builder lg:text-[18px] clash">
            Expand the ecosystem through ongoing development and introduce
            future projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Roadmap() {
  return (
    <div className="relative h-auto bg-[#21272a] p-10 overflow-x-hidden">
      {/* Main container for the roadmap section */}
      <div className="flex flex-col items-center justify-center lg:p-5">
        {/* Header section for the roadmap */}
        <div className="flex p-2 flex-col gap-2 py-10 items-center justify-center">
          <div className="h text-[#33BC24] atomicage text-center flex items-center gap-2 justify-center font-bold">
            <img src={alien} alt="Alien" className="" />
            ALIEN TRIP
          </div>
        </div>

        
      </div>

      {/* Grid layout for the phase cards */}
      <div className="h-auto  grid-cols-1 hidden lg:grid  lg:grid-cols-3 lg:gap-12 max-w-[1200px] mx-auto items-center justify-center">
        <div className="flex flex-col gap-8  lg:gap-[150px] place-self-center">
          <PhaseOne />
          <PhaseThree />
          <PhaseFive />
          <Phaseseven/>

        </div>

        <div className="place-self-center  hidden lg:block lg:left-[610px] top-[350px]">
        <img src={heli} alt="" className="mx-10" />
<img src={road} alt="" className="" />


        </div>

        <div className="flex flex-col gap-8 lg:gap-[150px] place-self-center">
          <PhaseTwo />
          <PhaseFour />
          <Phasesix />

        </div>
        <div className="flex flex-col gap-8 lg:gap-[150px] place-self-center lg:ml-[800px]">
          <Phaseeight />
        </div>
      </div>
      <div className="h-auto  grid-cols-1 grid lg:hidden  lg:grid-cols-3 lg:gap-12 max-w-[1200px] mx-auto items-center justify-center">
        <div className="flex flex-col gap-8  lg:gap-[150px] place-self-center">
          <PhaseOne />
          <PhaseTwo />
          <PhaseThree />
          <PhaseFour />
          
         

        </div>

        <div className="place-self-center hidden lg:block lg:left-[610px] top-[350px]"></div>

        <div className="flex flex-col gap-8 lg:gap-[150px] place-self-center">
          
        <PhaseFive />
          <Phasesix />
          <Phaseseven/>

        </div>
        <div className="flex flex-col gap-8 lg:gap-[150px] place-self-center lg:ml-[800px]">
          <Phaseeight />
        </div>
      </div>

      {/* Decorative dotted line with circles */}
      {/* <div className="absolute hidden lg:block top-[700px] right-[-20] w-[200px] rounded-full h-[500px] bg-[#8749b4] blur-[200px]"></div>
      <div className="absolute hidden lg:block top-[100px] right-20 w-[200px] rounded-full h-[500px] bg-[#8749b4] blur-[200px]"></div> */}
    </div>
  )
}

export default Roadmap
