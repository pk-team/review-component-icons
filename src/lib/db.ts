const components = [
    {
      "code": "AXR",
      "name": "AXLE REAR"
    },
    {
      "code": "CUL",
      "name": "CATALYST UNDERBODY LEFT"
    },
    {
      "code": "CUR",
      "name": "CATALYST UNDERBODY RIGHT"
    },
    {
      "code": "DA",
      "name": "DRIVER AIRBAG"
    },
    {
      "code": "DKA",
      "name": "DRIVER KNEE AIRBAG"
    },
    {
      "code": "DSC",
      "name": "DRIVER SIDE CURTAIN AIRBAG"
    },
    {
      "code": "EN",
      "name": "ENGINE"
    },
    {
      "code": "EN",
      "name": "ENGINE"
    },
    {
      "code": "EN",
      "name": "ENGINE"
    },
    {
      "code": "ENL",
      "name": "ENGINE LEGAL VO"
    },
    {
      "code": "EXR",
      "name": "EXHAUST SYSTEM REAR"
    },
    {
      "code": "FD",
      "name": "FRONT DIFFERENTIAL UNIT"
    },
    {
      "code": "FNL",
      "name": "FRAME NUMBER LEGAL"
    },
    {
      "code": "FT",
      "name": "FUEL TANK"
    },
    {
      "code": "IK",
      "name": "IGNITION KEY"
    },
    {
      "code": "PAS",
      "name": "PASSENGER SEAT"
    },
    {
      "code": "PKA",
      "name": "PASSENGER KNEE AIRBAG"
    },
    {
      "code": "PSC",
      "name": "PASSENGER SIDE CURTAIN AIRBAG"
    },
    {
      "code": "RS",
      "name": "REAR SEAT"
    },
    {
      "code": "S1L",
      "name": "SEATBELT ROW 1 LEFT"
    },
    {
      "code": "S1R",
      "name": "SEATBELT ROW 1 RIGHT"
    },
    {
      "code": "S2C",
      "name": "SEATBELT ROW 2 CENTER"
    },
    {
      "code": "S2L",
      "name": "SEATBELT ROW 2 LEFT"
    },
    {
      "code": "S2R",
      "name": "SEATBELT ROW 2 RIGHT"
    },
    {
      "code": "S3L",
      "name": "SEATBELT ROW 3 LEFT"
    },
    {
      "code": "S3R",
      "name": "SEATBELT ROW 3 RIGHT"
    },
    {
      "code": "SCR",
      "name": "SELECTIVE CATALYTIC REDUCTION"
    },
    {
      "code": "TC",
      "name": "TRANSFER CASE"
    },
    {
      "code": "TR",
      "name": "TRANSMISSION"
    },
    {
        "code": "B2",
        "name": "SEAT BELT BUCKLE ROW 2"
      },
  
  ]

interface Component {
    code: string
    name: string
}

export function getComponents(): Component[] {
    return components.filter((v,i,s) => s.findIndex(x => x.code === v.code) === i)
}