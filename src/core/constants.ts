import type { Instance } from "~/models";

// @see https://github.com/LiterateInk/AppScho.Documentation/blob/main/DISCOVERING_INSTANCES.md
export const INSTANCES: Array<Instance> = [
  { id: "unitoulon", name: "Université de Toulon", casurl: "https://cas.univ-tln.fr/cas/oidc/authorize", clientid: "appscho", uriend: false },
  { id: "digitalcampus", name: "GGE - Digital Campus", casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "63a20580-4e7f-013d-983f-3ae74bc6093237627", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "scpoaix", name: "Sciences Po Aix" },
  { id: "essec", name: "ESSEC Business School" },
  { id: "regent", name: "Regent's University London", casurl: "https://gge-gbr.onelogin.com/oidc/2/auth", clientid: "d29993a0-6b00-013a-7b8e-02732a18081038446", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "iicp", name: "Narratiiv Inside", casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "2fe63b60-bff1-013b-ddc6-0668df09704237627", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "icp", name: "ICP", casurl: "https://login.windows.net/common/oauth2/authorize", clientid: "1320c5ec-0239-404b-aa44-5f3a43bbd2ac" },
  { id: "macromedia", name: "Galileo Global Education Germany", casurl: "https://gge-deu.onelogin.com/oidc/2/auth", clientid: "ba5a9ba0-88f8-013a-9a42-02ce5bf6a8b437628", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "esarc", name: "ESARC go", casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "04a71590-4e7e-013d-0d74-4224903aba3737627", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "merkure", name: "Merkure Live", casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "f2d6ed00-7e43-013d-0e35-020afc8f024837627", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "esigelec", name: "MyESIGELEC" },
  { id: "ueve", name: "OFIL UnivEvry" },
  { id: "unieiffel", name: "Université Gustave Eiffel", casurl: "https://cas.univ-eiffel.fr/oidc/authorize", clientid: "726a397e14d8465e80a46202", uriend: true },
  { id: "esaip", name: "MyEsaip" },
  { id: "psb", name: "Paris School Of Business" },
  { id: "estp", name: "MyESTP" },
  { id: "emstra", name: "EM Strasbourg INSIDE" },
  { id: "wsfactory", name: "Web School Factory", casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "269eb430-4e7f-013d-80d4-06e3653b829437627", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "pstb", name: "PSTB", casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "23cc4030-4e7d-013d-b0f6-4e4814bd4e6d37627", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "epp", name: "MyEPP", casurl: "https://login.windows.net/common/oauth2/authorize", clientid: "f2faae8f-c52a-4f55-8589-dab25366127a", uriend: false },
  { id: "domus", name: "Nuova Accademia: MyDA" },
  { id: "ipp", name: "IP Paris Campus" },
  { id: "ieu", name: "Instituto de Estudios Universitarios" },
  { id: "hec", name: "HEC Paris" },
  { id: "eigsi", name: "My EIGSI" },
  { id: "alijia", name: "MyELIJE", casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "df9f8d90-4e7e-013d-9599-3e3983e056fd37627", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "sciencespo", name: "Sciences Po" },
  { id: "lisaa", name: "LISAA Campus", casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "29e9c370-4e80-013d-885d-0abcaae3a4cf37627", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "essca", name: "My ESSCA" },
  { id: "esg", name: "ESG Live", casurl: "https://gge-fra.onelogin.com/oidc/2/auth", clientid: "9ffb9be0-4e7d-013d-5b5d-123144e9468637627", scope: "openid+profile+email+params+groups", uriend: false },
  { id: "mbs", name: "Montpellier Business School", casurl: "https://login.windows.net/common/oauth2/authorize", clientid: "535795f4-7389-4885-a7f0-4e58a81d1062", uriend: false },
  { id: "unimons", name: "Université de Mons", casurl: "https://login.windows.net/common/oauth2/authorize", clientid: "03374ac3-c4e8-42aa-ae00-dd4aa58d08ed", uriend: false },
  { id: "uniassas", name: "Université Paris-Panthéon-Assas", casurl: "https://cas.u-paris2.fr/cas/oidc/authorize", clientid: "973379d68bb7da4533b84c45eaf2c9fd", uriend: true },
  { id: "bsb", name: "Burgundy School of Business" },
  { id: "univangers", name: "Université d'Angers" },
  { id: "upjv", name: "Université de Picardie Jules Verne", casurl: "https://cas.u-picardie.fr/oidc/authorize", clientid: "AppSchoProd", uriend: true},
  { id: "unilyon3", name: "Université Jean Moulin Lyon3" },
  { id: "univpoitiers", name: "Université de Poitiers" },
  { id: "edhec", name: "EDHEC Business School", casurl: "https://login.windows.net/common/oauth2/authorize", clientid: "ce615df8-c59e-487f-ab0d-cf9a51bb341a", uriend: false},
  { id: "uclouvain", name: "Université Catholique de Louvain" },
  { id: "ieseg", name: "IÉSEG Connect", casurl: "https://login.windows.net/common/oauth2/authorize", clientid: "71fe6827-097f-4639-8524-a2d42b558b25", uriend: false },
  { id: "ucly", name: "My Ucly" },
  { id: "ubmont", name: "Université Bordeaux Montaigne" },
  { id: "unimes", name: "Université de Nîmes" }
];

export const createAppSchoAPI = (instance: string): string =>
  `https://api.appscho.com/${instance}`;

export const createMyAppSchoAPI = (instance: string): string =>
  `https://my.appscho.com/api/${instance}`;

export const createFeedAPI = (instance: string): string =>
  `https://feed.appscho.com/api/m/v1/${instance}`;
