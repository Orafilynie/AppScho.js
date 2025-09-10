import type { Instance } from "~/models";

const createLogoUrl = (filename: string) => new URL(`../logos/${filename}`, import.meta.url);

// @see https://github.com/LiterateInk/AppScho.Documentation/blob/main/DISCOVERING_INSTANCES.md
export const INSTANCES: Array<Instance> = [
  { id: "bsb", logo: createLogoUrl("bsb.webp"), name: "Burgundy School of Business" },
  { id: "edhec", logo: createLogoUrl("edhec.webp"), name: "EDHEC Business School" },
  { id: "emstra", logo: createLogoUrl("emstra.webp"), name: "EM Strasbourg INSIDE" },
  { casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "04a71590-4e7e-013d-0d74-4224903aba3737627", id: "esarc", logo: createLogoUrl("esarc.webp"), name: "ESARC go", scope: "openid+profile+email+params+groups", uriend: false },
  { casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "9ffb9be0-4e7d-013d-5b5d-123144e9468637627", id: "esg", logo: createLogoUrl("esg.webp"), name: "ESG Live", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "essec", logo: createLogoUrl("essec.webp"), name: "ESSEC Business School" },
  { casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "63a20580-4e7f-013d-983f-3ae74bc6093237627", id: "digitalcampus", logo: createLogoUrl("digitalcampus.webp"), name: "GGE - Digital Campus", scope: "openid+profile+email+params+groups", uriend: false },
  { casurl: "https://gge-deu.onelogin.com/oidc/2/auth", clientid: "ba5a9ba0-88f8-013a-9a42-02ce5bf6a8b437628", id: "macromedia", logo: createLogoUrl("macromedia.webp"), name: "Galileo Global Education Germany", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "hec", logo: createLogoUrl("hec.webp"), name: "HEC Paris" },
  { id: "icp", logo: createLogoUrl("icp.png"), name: "ICP" },
  { id: "ipp", logo: createLogoUrl("ipp.webp"), name: "IP Paris Campus" },
  { id: "ieu", logo: createLogoUrl("ieu.webp"), name: "Instituto de Estudios Universitarios" },
  { id: "ieseg", logo: createLogoUrl("iseg.webp"), name: "IÉSEG Connect" },
  { casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "29e9c370-4e80-013d-885d-0abcaae3a4cf37627", id: "lisaa", logo: createLogoUrl("lisaa.webp"), name: "LISAA Campus", scope: "openid+profile+email+params+groups", uriend: false },
  { casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "f2d6ed00-7e43-013d-0e35-020afc8f024837627", id: "merkure", logo: createLogoUrl("merkure.webp"), name: "Merkure Live", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "mbs", logo: createLogoUrl("mbs.webp"), name: "Montpellier Business School" },
  { id: "eigsi", logo: createLogoUrl("eigsi.webp"), name: "My EIGSI" },
  { id: "essca", logo: createLogoUrl("essca.webp"), name: "My ESSCA" },
  { id: "ucly", logo: createLogoUrl("ucly.webp"), name: "My Ucly" },
  { casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "df9f8d90-4e7e-013d-9599-3e3983e056fd37627", id: "alijia", logo: createLogoUrl("alijia.webp"), name: "MyELIJE", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "epp", logo: createLogoUrl("epp.webp"), name: "MyEPP" },
  { id: "esigelec", logo: createLogoUrl("esigelec.webp"), name: "MyESIGELEC" },
  { id: "estp", logo: createLogoUrl("estp.webp"), name: "MyESTP" },
  { id: "esaip", logo: createLogoUrl("esaip.webp"), name: "MyEsaip" },
  { casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "2fe63b60-bff1-013b-ddc6-0668df09704237627", id: "iicp", logo: createLogoUrl("iicp.webp"), name: "Narratiiv Inside", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "domus", name: "Nuova Accademia: MyDA" },
  { id: "ueve", logo: createLogoUrl("ueve.webp"), name: "OFIL UnivEvry" },
  { casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "23cc4030-4e7d-013d-b0f6-4e4814bd4e6d37627", id: "pstb", logo: createLogoUrl("pstb.webp"), name: "PSTB", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "psb", logo: createLogoUrl("psb.jpg"), name: "Paris School Of Business" },
  { casurl: "https://gge-gbr.onelogin.com/oidc/2/auth", clientid: "d29993a0-6b00-013a-7b8e-02732a18081038446", id: "regent", logo: createLogoUrl("regent.webp"), name: "Regent's University London", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "sciencespo", logo: createLogoUrl("sciencepo.webp"), name: "Sciences Po" },
  { id: "scpoaix", logo: createLogoUrl("scpoaix.webp"), name: "Sciences Po Aix" },
  { id: "ubmont", logo: createLogoUrl("ubmont.webp"), name: "Université Bordeaux Montaigne" },
  { id: "uclouvain", logo: createLogoUrl("uclouvain.webp"), name: "Université Catholique de Louvain" },
  { casurl: "https://cas.univ-eiffel.fr/oidc/authorize", clientid: "726a397e14d8465e80a46202", id: "unieiffel", logo: createLogoUrl("univeiffel.webp"), name: "Université Gustave Eiffel", uriend: true },
  { id: "unilyon3", logo: createLogoUrl("unilyon3.webp"), name: "Université Jean Moulin Lyon3" },
  { casurl: "https://cas.u-paris2.fr/cas/oidc/authorize", clientid: "973379d68bb7da4533b84c45eaf2c9fd", id: "uniassas", logo: createLogoUrl("uniassas.webp"), name: "Université Paris-Panthéon-Assas", uriend: true },
  { id: "univangers", logo: createLogoUrl("univangers.webp"), name: "Université d'Angers" },
  { id: "unimons", logo: createLogoUrl("unimons.webp"), name: "Université de Mons" },
  { id: "unimes", logo: createLogoUrl("unimes.webp"), name: "Université de Nîmes" },
  { casurl: "https://cas.u-picardie.fr/oidc/authorize", clientid: "AppSchoProd", id: "upjv", logo: createLogoUrl("upjv.webp"), name: "Université de Picardie Jules Verne", uriend: true},
  { id: "univpoitiers", logo: createLogoUrl("univpoitiers.webp"), name: "Université de Poitiers" },
  { casurl: "https://cas.univ-tln.fr/cas/oidc/authorize", clientid: "appscho", id: "unitoulon", logo: createLogoUrl("unitoulon.webp"), name: "Université de Toulon", uriend: false },
  { casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "269eb430-4e7f-013d-80d4-06e3653b829437627", id: "wsfactory", logo: createLogoUrl("wsfactory.png"), name: "Web School Factory", scope: "openid+profile+email+params+groups", uriend: false }
];

export const createAppSchoAPI = (instance: string): string =>
  `https://api.appscho.com/${instance}`;

export const createMyAppSchoAPI = (instance: string): string =>
  `https://my.appscho.com/api/${instance}`;

export const createFeedAPI = (instance: string): string =>
  `https://feed.appscho.com/api/m/v1/${instance}`;
