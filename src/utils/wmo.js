const wmo = (code) => {
    const codes = {
        0: 'Clear sky',
        1:	'Mainly clear',
        2:  'Partly cloudy',
        3:	'Overcast',
        45:	'Fog',
        48:	'Depositing rime fog',
        51:	'Light Drizzle',
        53:	'Moderate Drizzle',
        55:	'Dense Drizzle',
        56:	'Light Freezing Drizzle',
        57:	'Dense Freezing Drizzle',
        61: 'Slight Rain',
        63: 'Moderate Rain',
        65: 'Heavy Rain',
        66: 'Light Freezing Rain',
        67: 'Heavy Freezing Rain',
        71: 'Slight Snow Fall',
        73: 'Moderate Snow Fall',
        75: 'Heavy Snow Fall',
        77: 'Snow grains',
        80: 'Slight Rain Showers',
        81: 'Moderate Rain Showers',
        82: 'Violent Rain Showers',
        85: 'Slight Snow Showers',
        86: 'Heavy Snow Showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail'
    }
    return codes[code] || ''
}

module.exports = wmo



// Present Weather (WMO Code 4677)
// WMO Code 4677 for recording present weather

// ww = 00 - 03
// No meteors except photometeors
// Code
// ww	
// 00	Cloud development not observed or not observable *
// 01	Clouds generally dissolving or becoming less developed *
// 02	State of sky on the whole unchanged *
// 03	Clouds generally forming or developing *
// * characteristic change of the state of sky during the past hour

// ww = 04 - 09
// Haze, dust, sand or smoke
// Code
// ww	
// 04	Visibility reduced by smoke, e.g. veldt or forest fires, industrial smoke or volcanic ashes
// 05	Haze
// 06	Widespread dust in suspension in the air, not raised by wind at or near the station at the time of observation
// 07	Dust or sand raised by wind at or near the station at the time of observation, but no well developed dust whirl(s) or sand whirl(s), and no duststorm or sandstorm seen
// 08	Well developed dust whirl(s) or sand whirl(s) seen at or near the station during the preceding hour or at the time ot observation, but no duststorm or sandstorm
// 09	Duststorm or sandstorm within sight at the time of observation, or at the station during the preceding hour
// * The expression "at the station" refers to a land station or a ship.

// Code
// ww	
// 10	Mist
// 11	Patches of shallow fog or ice fog at the station, whether on land or sea, not deeper than about 2 metres on land or 10 metres at sea
// 12	More or less continuous shallow fog or ice fog at the station, whether on land or sea, not deeper than about 2 metres on land or 10 metres at sea
// 13	Lightning visible, no thunder heard
// 14	Precipitation within sight, not reaching the ground or the surface of the sea
// 15	Precipitation within sight, reaching the ground or the surface of the sea, but distant (i.e. estimated to be more than 5 km) from the station
// 16	Precipitation within sight, reaching the ground or the surface of the sea, near to, but not at the station
// 17	Thunderstorm, but no precipitation at the time of observation
// 18	Squalls at or within sight of the station during the preceding hour or at the time of observation
// 19	Funnel cloud(s)** at or within sight of the station during the preceding hour or at the time of observation
// * The expression "at the station" refers to a land station or a ship.
// ** Tornado cloud or waterspout.

// ww = 20 - 29
// Precipitation, fog, ice fog or thunderstorm at the station during the preceding hour but not at the time of observation
// Code
// ww	
// 20	Drizzle (not freezing) or snow grains not falling as shower(s)
// 21	Rain (not freezing) not falling as shower(s)
// 22	Snow not falling as shower(s)
// 23	Rain and snow or ice pellets, type (a) not falling as shower(s)
// 24	Freezing drizzle or freezing rain not falling as shower(s)
// 25	Shower(s) of rain
// 26	Shower(s) of snow, or of rain and snow
// 27	Shower(s) of hail*, or of rain and hail*
// 28	Fog or ice fog
// 29	Thunderstorm (with or without precipitation)
// * Hail, ice pellets, type (b), snow pellets. French: grele, gresil ou neige roulee.

// ww = 30 - 39
// Duststorm, sandstorm, drifting or blowing snow
// Code
// ww	
// 30	Slight or moderate duststorm or sandstorm - has decreased during the preceding hour
// 31	Slight or moderate duststorm or sandstorm - no appreciable change during the preceding hour
// 32	Slight or moderate duststorm or sandstorm - has begun or has increased during the preceding hour
// 33	Severe duststorm or sandstorm - has decreased during the preceding hour
// 34	Severe duststorm or sandstorm - no appreciable change during the preceding hour
// 35	Severe duststorm or sandstorm - has begun or has increased during the preceding hour
// 36	Slight or moderate blowing snow generally low (below eye level)
// 37	Heavy drifting snow generally low (below eye level)
// 38	Slight or moderate blowing snow generally high (above eye level)
// 39	Heavy drifting snow generally high (above eye level)

// ww = 40 - 49
// Fog or ice fog at the time of observation
// Code
// ww	
// 40	Fog or ice fog at a distance at the time of observation, but not at the station during the preceding hour, the fog or ice fog extending to a level above that of the observer
// 41	Fog or ice fog in patches
// 42	Fog or ice fog, sky visible has become thinner during the preceding hour
// 43	Fog or ice fog, sky invisible has become thinner during the preceding hour
// 44	Fog or ice fog, sky visible no appreciable change during the preceding hour
// 45	Fog or ice fog, sky invisible no appreciable change during the preceding hour
// 46	Fog or ice fog, sky visible has begun or has become thicker during the preceding hour
// 47	Fog or ice fog, sky invisible has begun or has become thicker during the preceding hour
// 48	Fog, depositing rime, sky visible
// 49	Fog, depositing rime, sky invisible

// ww = 50 - 99
// Precipitation at the station at the time of observation
// ww = 50 - 59
// Drizzle
// Code
// ww	
// 50	Drizzle, not freezing, intermittent slight at time of observation
// 51	Drizzle, not freezing, continuous slight at time of observation
// 52	Drizzle, not freezing, intermittent moderate at time of observation
// 53	Drizzle, not freezing, continuous moderate at time of observation
// 54	Drizzle, not freezing, intermittent heavy (dence) at time of observation
// 55	Drizzle, not freezing, continuous heavy (dence) at time of observation
// 56	Drizzle, freezing, slight
// 57	Drizzle, freezing, moderate or heavy (dence)
// 58	Drizzle and rain, slight
// 59	Drizzle and rain, moderate or heavy

// ww = 60 - 69
// Rain
// Code
// ww	
// 60	Rain, not freezing, intermittent slight at time of observation
// 61	Rain, not freezing, continous slight at time of observation
// 62	Rain, not freezing, intermittent moderate at time of observation
// 63	Rain, not freezing, continuous moderate at time of observation
// 64	Rain, not freezing, intermittent heavy at time of observation
// 65	Rain, not freezing, continuous heavy at time of observation
// 66	Rain, freezing, slight
// 67	Rain, freezing, moderate or heavy
// 68	Rain, or drizzle and snow, slight
// 69	Rain, or drizzle and snow, moderate or heavy

// ww = 70 - 79
// Solid precipitation not in showers
// Code
// ww	
// 70	Intermittent fall of snow flakes slight at time of observation
// 71	Continuous fall of snow flakes slight at time of observation
// 72	Intermittent fall of snow flakes moderate at time of observation
// 73	Continuous fall of snow flakes moderate at time of observation
// 74	Intermittent fall of snow flakes heavy at time of observation
// 75	Continuous fall of snow flakes heavy at time of observation
// 76	Ice prisms (with or without fog)
// 77	Snow grains (with or without fog)
// 78	Isolated starlike snow crystals (with or without fog)
// 79	Ice pellets, type (a)

// ww = 80 - 99
// Showery precipitation, or precipitation with current or recent thunder storm
// Code
// ww	
// 80	Rain shower(s), slight
// 81	Rain shower(s), moderate or heavy
// 82	Rain shower(s), violent
// 83	Shower(s) of rain and snow mixed, slight
// 84	Shower(s) of rain and snow mixed, moderate or heavy
// 85	Snow shower(s), slight
// 86	Snow shower(s), moderate or heavy
// 87	Shower(s) of snow pellets or ice pellets, type (b), with or without rain or rain and snow mixed - slight
// 88	Shower(s) of snow pellets or ice pellets, type (b), with or without rain or rain and snow mixed - moderate or heavy
// 89	Shower(s) of hail*, with or without rain or rain and snow mixed, not associated with thunder - slight
// 90	Shower(s) of hail*, with or without rain or rain and snow mixed, not associated with thunder - moderate or heavy
// 91	Slight rain at time of observation - thunderstorm during the preceding hour but not at time of observation
// 92	Moderate or heavy rain at time of observation - thunderstorm during the preceding hour but not at time of observation
// 93	Slight snow, or rain and snow mixed or hail** at time of observation - thunderstorm during the preceding hour but not at time of observation
// 94	Moderate or heavy snow, or rain and snow mixed or hail** at time of observation - thunderstorm during the preceding hour but not at time of observation
// 95	Thunderstorm, slight or moderate, without hail**, but with rain and/or snow at time of observation - thunderstorm at time of observation
// 96	Thunderstorm, slight or moderate, with hail** at time of observation - thunderstorm at time of observation
// 97	Thunderstorm, heavy, without hail**, but with rain and/or snow at time of observation - thunderstorm at time of observation
// 98	Thunderstorm combined with duststorm or sandstorm at time of observation - thunderstorm at time of observation
// 99	Thunderstorm, heavy, with hail** at time of observation - thunderstorm at time of observation