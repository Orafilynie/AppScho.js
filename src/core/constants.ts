import type { Instance } from "~/models";

// @see https://github.com/LiterateInk/AppScho.Documentation/blob/main/DISCOVERING_INSTANCES.md
export const INSTANCES: Array<Instance> = [
  { id: "unitoulon", name: "Université de Toulon" },
  { id: "digitalcampus", name: "GGE - Digital Campus" },
  { id: "scpoaix", name: "Sciences Po Aix" },
  { id: "essec", name: "ESSEC Business School" },
  { id: "regent", name: "Regent's University London" },
  { id: "iicp", name: "Narratiiv Inside" },
  { id: "icp", name: "ICP" },
  { id: "macromedia", name: "Galileo Global Education Germany" },
  { id: "esarc", name: "ESARC go" },
  { id: "merkure", name: "Merkure Live" },
  { id: "esigelec", name: "MyESIGELEC" },
  { id: "ueve", name: "OFIL UnivEvry" },
  { id: "unieiffel", name: "Université Gustave Eiffel" },
  { id: "esaip", name: "MyEsaip" },
  { id: "psb", name: "Paris School Of Business" },
  { id: "estp", name: "MyESTP" },
  { id: "emstra", name: "EM Strasbourg INSIDE" },
  { id: "wsfactory", name: "Web School Factory" },
  { id: "pstb", name: "PSTB" },
  { id: "epp", name: "MyEPP" },
  { id: "domus", name: "Nuova Accademia: MyDA" },
  { id: "ipp", name: "IP Paris Campus" },
  { id: "ieu", name: "Instituto de Estudios Universitarios" },
  { id: "hec", name: "HEC Paris" },
  { id: "eigsi", name: "My EIGSI" },
  { id: "alijia", name: "MyELIJE" },
  { id: "sciencespo", name: "Sciences Po" },
  { id: "lisaa", name: "LISAA Campus" },
  { id: "essca", name: "My ESSCA" },
  { id: "esg", name: "ESG Live" },
  { id: "mbs", name: "Montpellier Business School" },
  { id: "unimons", name: "Université de Mons" },
  { id: "uniassas", name: "Université Paris-Panthéon-Assas" },
  { id: "bsb", name: "Burgundy School of Business" },
  { id: "univangers", name: "Université d'Angers" },
  { id: "upjv", name: "Université de Picardie Jules Verne" },
  { id: "unilyon3", name: "Université Jean Moulin Lyon3" },
  { id: "univpoitiers", name: "Université de Poitiers" },
  { id: "edhec", name: "EDHEC Business School" },
  { id: "uclouvain", name: "Université Catholique de Louvain" },
  { id: "ieseg", name: "IÉSEG Connect" },
  { id: "ucly", name: "My Ucly" },
  { id: "ubmont", name: "Université Bordeaux Montaigne" },
  { id: "unimes", name: "Université de Nîmes" }
];

export const createAppSchoAPI = (service: string): string =>
  `https://api.appscho.com/${service}`;

export const createMyAppSchoAPI = (service: string): string =>
  `https://my.appscho.com/api/${service}`;

export const createFeedAPI = (service: string): string =>
  `https://feed.appscho.com/api/m/v1/${service}`;
