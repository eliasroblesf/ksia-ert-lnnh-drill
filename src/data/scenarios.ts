/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Scenario23 {
  id: number;
  title: string;
  scenarioText: string;
  extractionKey: {
    l: string;
    n_nature: string;
    n_numbers: string;
    h: string;
  };
}

export const scenarios23: Scenario23[] = [
  {
    id: 1,
    title: "Substation Dielectric Oil Fire",
    scenarioText: "While conducting a routine thermal scan at Terminal 1, Basement Level B1, Electrical Vault EV-04 at Grid Reference B1-D02, you observe dense black smoke and open flames issuing from a 1,500 kVA dry-type transformer enclosure. One senior electrical technician is lying unconscious on the concrete deck 3 m from the casing with irregular agonal breathing, while the upstream 13.8 kV circuit feed remains fully energized and active smoke is being pulled into the concourse supply riser.",
    extractionKey: {
      l: "Terminal 1, Basement Level B1, Electrical Vault EV-04, Grid B1-D02.",
      n_nature: "Class C energized transformer fire with dense black smoke.",
      n_numbers: "One technician unconscious / unresponsive.",
      h: "Live 13.8 kV high-voltage feed and smoke migrating into terminal supply air."
    }
  },
  {
    id: 2,
    title: "GSE Lithium Battery Thermal Runaway",
    scenarioText: "On the airside ramp at Apron West, GSE Staging Bay 12 adjacent to Gate B18, a heavy-duty electric baggage tug's lithium-ion battery pack has entered active thermal runaway, discharging violent directional jet flames and toxic white hydrofluoric acid vapor. The tug operator has evacuated with mild smoke inhalation, but two ground handlers are trapped inside a baggage cart 4 m downwind by the heat wall; the burning chassis is positioned only 15 m from a fully boarded Boeing 737 undergoing fueling.",
    extractionKey: {
      l: "Airside Apron West, GSE Staging Bay 12, adjacent to Gate B18.",
      n_nature: "Lithium-ion battery thermal runaway with jet flames and toxic fluoride gas.",
      n_numbers: "Two handlers trapped downwind, one operator with smoke inhalation.",
      h: "Toxic chemical gas envelope and active aircraft fueling operation 15 m away."
    }
  },
  {
    id: 3,
    title: "Central Plant Chiller Refrigerant Release",
    scenarioText: "In the Central Utility Complex (CUC-1), Ground Level Chiller Hall West at Compressor Unit CH-02, a high-pressure discharge flange has sheared, releasing an expanding, sub-zero cloud of R-134a refrigerant at floor level. A maintenance mechanic is collapsed inside the vapor cloud 8 m from the compressor, unresponsive to vocal commands, while a second technician has made it out to the door coughing violently; the expanding refrigerant cloud is advancing directly toward the energized low-voltage motor control center.",
    extractionKey: {
      l: "Central Utility Complex CUC-1, Ground Level, Chiller Hall West, Unit CH-02.",
      n_nature: "High-pressure toxic/asphyxiant refrigerant gas release (R-134a).",
      n_numbers: "One worker collapsed/unresponsive inside, one conscious walking casualty.",
      h: "Oxygen-deficient IDLH atmosphere and dense gas migrating toward energized electrical switchboards."
    }
  },
  {
    id: 4,
    title: "Concourse Moving Walkway Drive Seizure",
    scenarioText: "At Terminal 2, Level 3 Departures Spine between Gates A04 and A06, the subterranean drive mechanism of Moving Walkway MW-02 has suffered catastrophic bearing seizure, igniting lubricating grease and generating thick, pungent rubber smoke through the floor comb plates into the passenger flow. Zero casualties are present among airport staff, but two elderly passengers have fallen on the stopped walkway and sustained contusions; the drive motor continues to hum under locked-rotor current with no local power trip.",
    extractionKey: {
      l: "Terminal 2, Level 3 Departures Spine, between Gates A04 and A06.",
      n_nature: "Mechanical drive friction fire involving grease and rubber belts.",
      n_numbers: "Two elderly casualties with minor trauma, zero technical casualties.",
      h: "Energized locked-rotor drive motor and passenger crush panic in high-traffic concourse."
    }
  },
  {
    id: 5,
    title: "Airside Cargo Chemical Pallet Breach",
    scenarioText: "Inside Cargo Terminal 3, Airside Transfer Apron Bay 09, a counterbalanced forklift tine has punctured an intermediate bulk container (IBC) of concentrated nitric acid, releasing approximately 400 liters of corrosive liquid that is boiling upon contact with the tarmac and producing dense reddish-brown nitrogen dioxide gas. The forklift operator has fallen out of the cab, conscious but screaming with severe chemical burns across both legs, while the corrosive pool is migrating down-gradient toward an unsealed apron drainage grating.",
    extractionKey: {
      l: "Cargo Terminal 3, Airside Transfer Apron Bay 09.",
      n_nature: "Corrosive Class 8 chemical spill (nitric acid) with toxic vapor generation.",
      n_numbers: "One conscious casualty with severe chemical burns.",
      h: "Lethal nitrogen dioxide inhalation hazard and acid migrating into open apron drainage."
    }
  },
  {
    id: 6,
    title: "Subterranean Utility Tunnel Pipe Rupture",
    scenarioText: "Inside Subterranean Utility Tunnel UT-01, Elevation -8.0 m at Sector Marker UT-C14, a 200 mm high-temperature hot water line (140°C, 10 bar) has ruptured at an expansion bellows, filling the confined tunnel with blinding steam and scalding water 20 cm deep. Two insulation contractors are unaccounted for inside the sector with cries for help heard faintly from the surface manhole; overhead polyolefin 13.8 kV distribution cables are softening under direct steam impingement.",
    extractionKey: {
      l: "Subterranean Utility Tunnel UT-01, Elevation -8.0 m, Sector Marker UT-C14.",
      n_nature: "Superheated pressurized water line rupture in a confined space.",
      n_numbers: "Two trapped contractors inside the sector.",
      h: "Extreme thermal IDLH atmosphere, scalding floodwaters, and overhead high-voltage cables."
    }
  },
  {
    id: 7,
    title: "Commercial Galley Range Hood Fire",
    scenarioText: "In Terminal 1, Level 2 Food Court, Concession Unit R-08 (Wok Station), an overheated commercial cooking vat has flashed over into a roaring Class K grease fire, with flames leaping 2 m high and actively burning inside the vertical grease exhaust ductwork. The head chef sustained second-degree burns across both hands and forearms while trying to cover the vat, while three kitchen staff have safely evacuated to the rear corridor; the automated Ansul fire suppression system has failed to discharge and natural gas lines remain open.",
    extractionKey: {
      l: "Terminal 1, Level 2 Food Court, Concession Unit R-08.",
      n_nature: "Class K commercial cooking oil fire propagating into kitchen exhaust ducts.",
      n_numbers: "One conscious casualty with upper-extremity burns.",
      h: "Open natural gas line feeding appliance and active duct fire threatening the roof plenum."
    }
  },
  {
    id: 8,
    title: "Airside Fuel Hydrant Pit Flange Leak",
    scenarioText: "At Remote Aircraft Stand R-12 on the East Apron, a high-pressure aviation fuel hydrant pit coupler has ruptured during connection to a widebody aircraft dispenser truck, spraying Jet A-1 fuel at 8 bar across the ramp concrete. The hydrant serviceman is blinded and disoriented on the apron deck with heavy fuel contamination in both eyes, while approximately 250 liters of atomized fuel has formed an ignitable vapor mist in 42°C ambient heat; an auxiliary power unit (APU) on the nearby aircraft is running with open exhaust.",
    extractionKey: {
      l: "East Apron, Remote Aircraft Stand R-12, Fuel Hydrant Pit.",
      n_nature: "High-pressure Class B aviation fuel spray (Jet A-1) with atomized vapor.",
      n_numbers: "One conscious casualty with severe chemical eye exposure.",
      h: "Atomized flammable vapor above flash point, active aircraft APU ignition source."
    }
  },
  {
    id: 9,
    title: "Central IT Server Vault Battery Outgassing",
    scenarioText: "Inside the Central IT Server Vault, Terminal 2, Level 2 at Grid Reference L2-IT04, a cabinet of sealed lead-acid UPS backup batteries has cracked and is violently off-gassing hydrogen and sulfuric acid vapor, triggering the room VESDA system at 9.2%/m obscuration. One IT network engineer is slumped forward over the crash cart inside, conscious but confused and unable to stand due to respiratory irritation; the room's FM-200 clean-agent system countdown has paused at 12 seconds on a manual hold switch that is being released.",
    extractionKey: {
      l: "Terminal 2, Level 2, Central IT Server Vault, Grid L2-IT04.",
      n_nature: "Toxic acid gas release and explosive hydrogen off-gassing from UPS battery failure.",
      n_numbers: "One semi-conscious, incapacitated engineer inside the room.",
      h: "Explosive hydrogen atmosphere, sulfuric acid vapor, and imminent FM-200 clean-agent release."
    }
  },
  {
    id: 10,
    title: "Baggage Tunnel High-Speed Diverter Jam",
    scenarioText: "In Terminal 1, Basement Level B2, Main Baggage Tunnel B at Conveyor Diverter D-07 (Grid Reference B2-G09), an oversized suitcase has jammed the mechanical high-speed pusher arm, causing the 400V drive motor to lock, overheat, and ignite the heavy rubber sortation belt. One baggage technician has suffered an open traumatic fracture of the right wrist after being caught in the roller nip point while clearing the jam, and is bleeding heavily; the conveyor drive remains energized and smoke is drifting north toward the main baggage hall.",
    extractionKey: {
      l: "Terminal 1, Basement B2, Main Baggage Tunnel B, Diverter D-07, Grid B2-G09.",
      n_nature: "Conveyor mechanical jam with rubber belt friction fire and severe entrapment trauma.",
      n_numbers: "One conscious casualty with severe arterial bleeding and crushed limb.",
      h: "Energized mechanical roller nip point and dense rubber smoke migrating into work areas."
    }
  },
  {
    id: 11,
    title: "Bulk Fuel Farm Manifold Flange Fire",
    scenarioText: "At the South Bulk Fuel Farm, Pump Manifold Pad 03 adjacent to Storage Tank T-104, an electric transfer pump motor bearing has seized, igniting a jet of pressurized Jet A-1 fuel escaping from a failing pump seal. Zero casualties are on the concrete manifold pad as both operators evacuated immediately upon ignition; however, an active 2.5 m jet flame is impinging directly onto the manual shutoff valve manifold of the adjacent 10,000 m³ bulk storage tank.",
    extractionKey: {
      l: "South Bulk Fuel Farm, Pump Manifold Pad 03, near Storage Tank T-104.",
      n_nature: "Pressurized Class B jet flame from leaking pump seal.",
      n_numbers: "Zero casualties.",
      h: "Direct flame impingement on primary bulk storage tank valve manifold."
    }
  },
  {
    id: 12,
    title: "Hangar Aircraft Maintenance Scissor Lift Arc",
    scenarioText: "Inside Maintenance Hangar 1, Bay North at Aircraft Tail Stand 03, an electric hydraulic scissor lift platform has crushed an overhead 480V temporary power cable against an airframe maintenance dock, triggering a sustained electrical arc that has ignited hydraulic fluid pooled on the lift deck. An airframe technician on the elevated platform (9 m in the air) is unresponsive following an electrical shock, while the hydraulic lines below are burning with dripping flaming liquid; the hangar's high-expansion foam deluge system is in supervisory alarm.",
    extractionKey: {
      l: "Maintenance Hangar 1, Bay North, Aircraft Tail Stand 03.",
      n_nature: "Class C electrical arc and Class B burning hydraulic fluid on elevated work platform.",
      n_numbers: "One unresponsive casualty trapped on platform 9 m above floor.",
      h: "Energized overhead cable, falling flaming liquid, and potential high-expansion foam deluge trip."
    }
  },
  {
    id: 13,
    title: "Terminal Departure Gate Electrical Smolder",
    scenarioText: "In Terminal 2, Level 3 Departures, Boarding Gate Concourse C at Gate C14, an electrical raceway under the gate podium has shorted, causing dense acrid plastic smoke to billow out across the gate lounge and obscuring emergency exit signage. Two customer service agents have evacuated into the airside corridor uninjured, but one mobility-impaired passenger in a wheelchair remains stranded in the boarding queue amidst expanding smoke; the circuit breaker at Panel DP-3C has failed to trip and wiring continues to sizzle.",
    extractionKey: {
      l: "Terminal 2, Level 3 Departures, Gate Concourse C, Gate C14.",
      n_nature: "Class C electrical fire in sub-floor raceway with heavy toxic smoke.",
      n_numbers: "One conscious, non-ambulatory passenger trapped in smoke envelope.",
      h: "Continuous energized electrical feed and rapid smoke accumulation in crowded public boarding area."
    }
  },
  {
    id: 14,
    title: "Central Waste Water Plant Toxic Gas Surge",
    scenarioText: "At the KSIA Wastewater Treatment Facility, Basement Dewatering Vault Grid WTP-B02, an anaerobic accumulation has triggered a massive release of hydrogen sulfide (H2S) gas, with stationary sensors registering 120 ppm in the below-grade sump. One plant operator is lying motionless at the foot of the access stairs in the sump chamber, while a second technician who attempted an unequipped rescue is on the upper platform semi-conscious and vomiting; atmospheric oxygen in the sump is reading 17.1%.",
    extractionKey: {
      l: "Wastewater Treatment Facility, Basement Dewatering Vault, Grid WTP-B02.",
      n_nature: "Toxic H2S gas surge and oxygen deficiency in below-grade confined vault.",
      n_numbers: "One unresponsive worker in sump, one semi-conscious worker on platform.",
      h: "Lethal IDLH toxic gas atmosphere (120 ppm H2S) and extreme confined space entrapment."
    }
  },
  {
    id: 15,
    title: "GSE Workshop Acetylene Cylinder Leak",
    scenarioText: "Inside the Airside GSE Mechanical Maintenance Depot, Welding Bay 02 at Grid Reference GSE-W02, a pressurized acetylene gas cylinder has suffered a regulator valve fracture after being knocked over by a steel work trolley, emitting a loud continuous whistling gas jet. Two mechanics have evacuated the workshop bay without physical injuries, but one mechanic is pinned beneath the overturned heavy steel trolley 2 m from the leaking cylinder, conscious and calling out; adjacent to the cylinder is an active, open-flame parts drying furnace.",
    extractionKey: {
      l: "Airside GSE Mechanical Maintenance Depot, Welding Bay 02, Grid GSE-W02.",
      n_nature: "Pressurized flammable gas release (acetylene) with mechanical entrapment.",
      n_numbers: "One conscious casualty pinned beneath heavy trolley.",
      h: "Explosive gas accumulation in enclosed workshop and active furnace ignition source nearby."
    }
  },
  {
    id: 16,
    title: "Multi-Story Parking Electric Vehicle Fire",
    scenarioText: "In the Landside Multi-Story Car Park P2, Level 3 North at Grid Pillar P3-F12, a passenger electric vehicle connected to a 50 kW fast-charging station has suffered an underbody battery pack puncture, producing continuous thermal crackling, explosive venting, and dense white chemical smoke rolling across the parking deck. Zero casualties have been sighted, but several car alarms are blaring and panic is spreading among parking patrons; the high-voltage charging pedestal is still energized with power cables coupled firmly into the vehicle port.",
    extractionKey: {
      l: "Landside Multi-Story Car Park P2, Level 3 North, Grid Pillar P3-F12.",
      n_nature: "EV lithium battery thermal runaway and casing breach in enclosed parking structure.",
      n_numbers: "Zero confirmed casualties.",
      h: "High-voltage active charging connection (400V), toxic chemical smoke, and horizontal vehicle exposure."
    }
  },
  {
    id: 17,
    title: "In-Flight Catering Steam Kettle Overpressurization",
    scenarioText: "Inside the In-Flight Catering Center, Ground Floor Production Kitchen 4, a commercial 500-liter pressurized steam jacket kettle has suffered a pressure relief valve failure, causing the secondary seal to blow out and discharging a high-velocity jet of steam and boiling soup across the prep floor. Two kitchen assistants have sustained extensive scalding burns across their upper bodies, with one casualty lying on the wet floor shaking violently in shock, while high-pressure steam continues to roar from the 4 bar supply line; the main emergency boiler isolation valve is obscured by the steam plume.",
    extractionKey: {
      l: "In-Flight Catering Center, Ground Floor, Production Kitchen 4.",
      n_nature: "High-pressure steam rupture and boiling liquid scald event.",
      n_numbers: "Two conscious casualties with extensive severe scald burns and shock.",
      h: "Continuous unisolated 4 bar steam release and boiling liquid slick on kitchen floor."
    }
  },
  {
    id: 18,
    title: "Airside Apron 400 Hz Cable Ground Fault",
    scenarioText: "At Terminal 1, Apron Stand 14 under the nose of an Airbus A330, an apron pit ground power converter cable (400 Hz, 200V) has experienced a mechanical shear beneath the wheel of a pushback tractor, producing intense blue-white electrical arcs that have ignited the rubber tire casing of the tractor. The tractor driver is slumped unconscious over the steering wheel inside the cab, which is surrounded by pooled flaming rubber melt; the aircraft refueler 10 m away has halted pumping, but the aircraft's fuel tanks contain over 40 tons of fuel.",
    extractionKey: {
      l: "Terminal 1, Airside Apron Stand 14, Aircraft Nose Position.",
      n_nature: "Class C 400 Hz high-amperage ground-fault arc and burning heavy vehicle tire.",
      n_numbers: "One unconscious tractor operator trapped in cab.",
      h: "Continuous electrical arc, tire explosion risk, and immediate proximity to fueled passenger aircraft."
    }
  },
  {
    id: 19,
    title: "Emergency Generator Diesel Supply Leak",
    scenarioText: "In the East Power Complex, Sub-Basement Generator Hall at Unit GEN-04 (Grid Reference E-GEN04), a high-pressure diesel injection manifold on a 2.5 MW standby generator has fractured during a load bank test, spraying atomized diesel fuel onto an unlagged turbocharger exhaust manifold glowing red at 520°C. The shift electrical operator has tripped and fallen into an oily sump trench 5 m away, conscious but incapacitated by a suspected hip fracture; a secondary fire has ignited on the base skid (1.5 m² burning area) while the generator continues to run at full speed.",
    extractionKey: {
      l: "East Power Complex, Sub-Basement Generator Hall, Unit GEN-04, Grid E-GEN04.",
      n_nature: "Pressurized Class B diesel fuel spray and active surface skid pool fire.",
      n_numbers: "One conscious casualty with severe orthopedic trauma in sump trench.",
      h: "Running engine maintaining fuel pressure and auto-ignition from red-hot turbocharger."
    }
  },
  {
    id: 20,
    title: "Arrival Hall Architectural Glass Façade Failure",
    scenarioText: "At Terminal 2, International Arrivals Greeting Concourse near Entry Door 04, a heavy exterior maintenance crane boom has impacted the upper structural curtain wall, shattering three 4 m x 6 m tempered glass panels and sending tons of glass cascading down onto the public seating arrays. One female greeter is lying motionless with catastrophic arterial hemorrhage from a neck laceration, while three other passengers have sustained deep penetrating wounds; the crane boom remains wedged against the upper façade steelwork, which is creaking under structural stress.",
    extractionKey: {
      l: "Terminal 2, International Arrivals Greeting Concourse, near Entry Door 04.",
      n_nature: "Structural glass envelope collapse with severe kinetic impact trauma.",
      n_numbers: "One critical casualty with arterial bleeding, three conscious trauma casualties.",
      h: "Unstable overhead crane boom and remaining damaged glass panels suspended above crowd."
    }
  },
  {
    id: 21,
    title: "High-Voltage Switchgear Arc Flash",
    scenarioText: "Inside Substation SS-03, Technical Mezzanine Level M2 at Grid Reference M2-SS03, an internal busbar flashover has occurred in Medium Voltage Switchgear Cubicle 2 (13.8 kV), blowing open the steel blast doors and discharging an intense heat wave and sulfurous smoke into the corridor. One high-voltage electrician is lying on his back 4 m outside the doorway with full-thickness flash burns across his face and smoldering overalls, unresponsive and in agonal arrest; the redundant tie-breaker from Substation 3B remains energized.",
    extractionKey: {
      l: "Substation SS-03, Technical Mezzanine Level M2, Grid M2-SS03.",
      n_nature: "13.8 kV electrical arc flash explosion and structural switchgear combustion.",
      n_numbers: "One unresponsive casualty in cardiac/respiratory arrest with severe burns.",
      h: "Energized tie-breaker busbar and toxic polyolefin insulation combustion products."
    }
  },
  {
    id: 22,
    title: "Check-in Hall Conveyor Belt Motor Ignition",
    scenarioText: "In Terminal 1, Level 3 Departures Check-in Hall at Island 04, Conveyor Infeed 08, an electrical short inside an under-counter feeder motor has ignited dust and cardboard packaging debris, sending thick white smoke mushrooming up through the passenger luggage scales. Four airline check-in agents have evacuated the counter safely, but a maintenance technician who was underneath the conveyor deck is trapped by his clothing in the jammed take-up pulley, conscious and shouting for help; public passenger queues are beginning to surge back in panic.",
    extractionKey: {
      l: "Terminal 1, Level 3 Departures, Check-in Hall, Island 04, Conveyor Infeed 08.",
      n_nature: "Class C/A motor and packaging debris fire with physical mechanical entrapment.",
      n_numbers: "One conscious technician trapped in conveyor mechanism beneath counter.",
      h: "Active energized conveyor drive and mass crowd panic in departure concourse."
    }
  },
  {
    id: 23,
    title: "De-icing Fluid Storage Tank Overfill",
    scenarioText: "At the Aircraft De-icing Facility, North Apron Storage Yard at Tank Farm Pad 02, an automated filling valve on Tank T-201 has failed to cut off, resulting in the overflow of approximately 2,500 liters of heated Type IV aircraft anti-icing fluid (75°C) cascading over the tank lip and pooling across the containment apron. The transfer tanker driver is conscious but stranded on top of the truck catwalk surrounded by the steaming slippery chemical pool; the fluid has reached an ungrounded temporary diesel transfer pump whose exhaust is sputtering.",
    extractionKey: {
      l: "North Apron, Aircraft De-icing Facility, Storage Yard, Tank Farm Pad 02.",
      n_nature: "Major heated chemical release (Type IV glycol) with containment overflow.",
      n_numbers: "One conscious uninjured driver stranded on elevated catwalk.",
      h: "Extreme slip and burn hazard, and chemical pool threatening ungrounded hot diesel exhaust."
    }
  },
  {
    id: 24,
    title: "MEP Corridor Natural Gas Pipeline Flange Weep",
    scenarioText: "In Terminal 2, Basement Level B1, Technical Service Corridor 08 at Grid Reference B1-SC08, a low-pressure natural gas supply line feeding the terminal boilers has developed a sheared flange gasket, filling a 30 m corridor sector with a deafening gas hiss and overwhelming mercaptan odor. The facility HVAC engineer who detected the leak has evacuated the corridor with no injuries, reporting zero casualties inside; however, fixed combustible gas sensors are reading 45% LEL (Lower Explosive Limit) and an unsealed electrical distribution panel is located 6 m down the corridor.",
    extractionKey: {
      l: "Terminal 2, Basement Level B1, Technical Service Corridor 08, Grid B1-SC08.",
      n_nature: "Pressurized flammable gas release (natural gas / methane) reaching explosive concentration.",
      n_numbers: "Zero casualties.",
      h: "45% LEL explosive gas atmosphere in confined service corridor near non-explosion-proof electrical panel."
    }
  },
  {
    id: 25,
    title: "Airside Runway Rapid Exit Taxiway FOD Fire",
    scenarioText: "On Runway 16L, Rapid Exit Taxiway Whiskey-3 at Grid Reference RWY-W03, a widebody aircraft landing gear tire blow-out has left extensive shredded rubber debris burning fiercely on the paved taxiway shoulder across a 10 m x 4 m area. Zero human casualties are present on the runway surface; however, dense billowing black tire smoke is blowing directly across the runway centerline, while an approaching cargo flight on short final approach is 2 miles out and the secondary runway remains active.",
    extractionKey: {
      l: "Runway 16L, Rapid Exit Taxiway Whiskey-3, Grid RWY-W03.",
      n_nature: "Class A/B heavy aircraft tire rubber fire on active aerodrome movement area.",
      n_numbers: "Zero casualties on site.",
      h: "Severe smoke obscuration across active runway centerline during live flight operations."
    }
  },
  {
    id: 26,
    title: "Boiler Plant High-Pressure Steam Blowout",
    scenarioText: "Inside Central Boiler Plant 1, Level 1 Main Header Hall at Boiler Unit BLR-01, an automated blowdown valve body has cracked under pressure, releasing an uncontrolled discharge of saturated steam (185°C, 12 bar) roaring through the main walkway. One lead boiler operator was knocked down by the initial shockwave and is lying unconscious on the steel grating 4 m from the steam blast, not moving; visibility in the hall has dropped to less than one meter with ambient temperature reaching 60°C and climbing.",
    extractionKey: {
      l: "Central Boiler Plant 1, Level 1 Main Header Hall, Boiler Unit BLR-01.",
      n_nature: "Catastrophic 12 bar high-pressure saturated steam blowout in enclosed plant hall.",
      n_numbers: "One unconscious/unresponsive operator on steel walkway.",
      h: "Lethal thermal IDLH atmosphere, rapid blindness risk, and zero visibility near open machinery pits."
    }
  },
  {
    id: 27,
    title: "Baggage Screening EDS X-Ray Machine Smoke",
    scenarioText: "In Terminal 1, Basement Level B2, Checked Baggage Inspection System Matrix 2, Explosive Detection System (EDS) Machine CT-04, an internal electrical blower motor failure has ignited acoustic lining foam inside the lead-lined scanning tunnel. Two security screening agents have evacuated the control booth without injuries, but one maintenance technician is trapped inside the maintenance access enclosure behind the machine, conscious and calling out while coughing heavily; the EDS machine uses a radioactive cesium test source and power remains energized.",
    extractionKey: {
      l: "Terminal 1, Basement Level B2, Baggage Matrix 2, EDS Machine CT-04.",
      n_nature: "Class C electrical and polyurethane foam fire inside specialized baggage screening unit.",
      n_numbers: "One conscious technician trapped inside maintenance enclosure with smoke inhalation.",
      h: "Energized high-voltage X-ray generator, sealed lead enclosure, and toxic cyanide gas from burning foam."
    }
  },
  {
    id: 28,
    title: "Engine Test Cell High-Pressure Fuel Jet",
    scenarioText: "Inside the Engine Maintenance Test Cell Complex, Ground Floor Prep Bay 01, a quick-disconnect coupling on an aircraft engine fuel supply calibration rig has failed, projecting a fine atomized spray of Jet A-1 fuel across a 10 m test radius. The test cell technician was sprayed across his upper body and face, conscious and staggering away from the rig with severe chemical eye burning, while the atomized fuel spray is striking a high-intensity halogen test lighting bank mounted on the wall; fuel pooling on the deck is estimated at 120 liters.",
    extractionKey: {
      l: "Engine Maintenance Test Cell Complex, Ground Floor Prep Bay 01.",
      n_nature: "Pressurized Class B aviation fuel spray and expanding hydrocarbon vapor mist.",
      n_numbers: "One conscious, ambulatory casualty with acute chemical eye and skin burns.",
      h: "Finely atomized fuel cloud impinging directly onto hot halogen illumination fixtures."
    }
  },
  {
    id: 29,
    title: "Departure Lounge Restroom Exhaust Fire",
    scenarioText: "In Terminal 2, Level 3 Departures Lounge, Restroom Facility West adjacent to Gate B03, an electrical ventilation extract fan has suffered winding burnout, dropping burning plastic droplets onto paper supply storage shelves inside the janitorial service room. The facility janitor has evacuated coughing mildly, reporting that zero persons remain in the public restrooms; however, dense brown smoke is entering the common public concourse ceiling void and fire dampers have failed to close automatically, drawing smoke toward Gate B03.",
    extractionKey: {
      l: "Terminal 2, Level 3 Departures Lounge, Restroom Facility West near Gate B03.",
      n_nature: "Class C fan electrical fire propagating into Class A storage materials.",
      n_numbers: "One walking wounded casualty with mild smoke inhalation, zero trapped.",
      h: "Failed fire dampers allowing smoke migration into public departure lounge ceiling void."
    }
  },
  {
    id: 30,
    title: "Landside Solar Farm Central Inverter Arc Flash",
    scenarioText: "At the Landside Energy Center, South Solar PV Array Substation Pad 04 at Grid Reference SOL-P04, an internal DC short circuit has detonated a 1,000V string inverter cabinet, blowing the outer casing panels 6 m away and setting the surrounding dry brush and grass alight. Two photovoltaic maintenance contractors are on scene: one contractor is conscious on the ground with severe shrapnel lacerations and burns, while the second contractor is uninjured and attempting to extinguish the grass fire with a handheld unit; the high-voltage DC string lines cannot be disconnected from the roof panels during daylight.",
    extractionKey: {
      l: "Landside Energy Center, South Solar PV Array, Substation Pad 04, Grid SOL-P04.",
      n_nature: "High-voltage DC arc explosion with secondary wildland/grass fire spread.",
      n_numbers: "One conscious casualty with severe burns and penetrating trauma.",
      h: "Continuous non-isolatable energized DC solar feeds (1,000V) during daylight and expanding brush fire."
    }
  }
];
