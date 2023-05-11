import { useState } from "react";
import {
	SelectChangeEvent,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

export const constellations = {
	and: "Andromeda",
	ant: "Antlia",
	aps: "Apus",
	aqr: "Aquarius",
	aql: "Aquila",
	ara: "Ara",
	ari: "Aries",
	aur: "Auriga",
	boo: "Boötes",
	cae: "Caelum",
	cam: "Camelopardalis",
	cnc: "Cancer",
	cvn: "Canes Venatici",
	cma: "Canis Major",
	cmi: "Canis Minor",
	cap: "Capricornus",
	car: "Carina",
	cas: "Cassiopeia",
	cen: "Centaurus",
	cep: "Cepheus",
	cet: "Cetus",
	cha: "Chamaeleon",
	cir: "Circinus",
	col: "Columba",
	com: "Coma Berenices",
	cra: "Corona Austrina",
	crb: "Corona Borealis",
	crv: "Corvus",
	crt: "Crater",
	cru: "Crux",
	cyg: "Cygnus",
	del: "Delphinus",
	dor: "Dorado",
	dra: "Draco",
	equ: "Equuleus",
	eri: "Eridanus",
	for: "Fornax",
	gem: "Gemini",
	gru: "Grus",
	her: "Hercules",
	hor: "Horologium",
	hya: "Hydra",
	hyi: "Hydrus",
	ind: "Indus",
	lac: "Lacerta",
	leo: "Leo",
	lmi: "Leo Minor",
	lep: "Lepus",
	lib: "Libra",
	lup: "Lupus",
	lyn: "Lynx",
	lyr: "Lyra",
	men: "Mensa",
	mic: "Microscopium",
	mon: "Monoceros",
	mus: "Musca",
	nor: "Norma",
	oct: "Octans",
	oph: "Ophiuchus",
	ori: "Orion",
	pav: "Pavo",
	peg: "Pegasus",
	per: "Perseus",
	phe: "Phoenix",
	pic: "Pictor",
	psc: "Pisces",
	psa: "Piscis Austrinus",
	pup: "Puppis",
	pyx: "Pyxis",
	ret: "Reticulum",
	sge: "Sagitta",
	sgr: "Sagittarius",
	sco: "Scorpius",
	scl: "Sculptor",
	sct: "Scutum",
	ser: "Serpens Cauda",
	sex: "Sextans",
	tau: "Taurus",
	tel: "Telescopium",
	tri: "Triangulum",
	tra: "Triangulum Australe",
	tuc: "Tucana",
	uma: "Ursa Major",
	umi: "Ursa Minor",
	vel: "Vela",
	vir: "Virgo",
	vol: "Volans",
	Vul: "Vulpecula",
};

interface Props {
	onSelectConstellation: (constellation: string) => void;
}

const StarChartFormSelector_Constellation = ({
	onSelectConstellation,
}: Props) => {
	const [constellation, setConstellation] = useState("and");

	const handleChange = (event: SelectChangeEvent) => {
		// set planet to show selected planet on dropdown
		setConstellation(event.target.value);

		// // parse selected planet to parent component to fetch data
		// // parse empty string if selected is All
		// if (event.target.value == "") {
		// 	onSelectConstellation("");
		// } else {
		// 	onSelectConstellation(event.target.value);
		// }

		// parse selected style back to parent component
		onSelectConstellation(event.target.value);
	};
	return (
		<>
			<FormControl sx={{ width: "50%" }} color="primary" className="form">
				<InputLabel id="constellationFilter">Constellation</InputLabel>
				<Select
					labelId="constellationFilter"
					id="constellationFilter_select"
					value={constellation}
					label="Constellation"
					onChange={handleChange}
					size="small"
					style={{
						textTransform: "capitalize",
					}}
				>
					{Object.entries(constellations).map(([key, value]) => (
						<MenuItem value={key} key={key}>
							{value}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
};

export default StarChartFormSelector_Constellation;
