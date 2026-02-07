import type { Instance } from "~/models";

// @see https://github.com/LiterateInk/AppScho.Documentation/blob/main/DISCOVERING_INSTANCES.md
export const INSTANCES: Array<Instance> = [
  { id: "bsb", name: "Burgundy School of Business" },
  { id: "edhec", name: "EDHEC Business School" },
  { id: "emstra", name: "EM Strasbourg INSIDE" },
  {
    casurl: "https://gge-fra.onelogin.com/oidc/2/auth",
    clientid: "04a71590-4e7e-013d-0d74-4224903aba3737627",
    id: "esarc",
    name: "ESARC go",
    scope: "openid+profile+email+params+groups",
    uriend: false
  },
  {
    casurl: "https://gge-fra.onelogin.com/oidc/2/auth",
    clientid: "9ffb9be0-4e7d-013d-5b5d-123144e9468637627",
    id: "esg",
    name: "ESG Live",
    scope: "openid+profile+email+params+groups",
    uriend: false
  },
  { id: "essec", name: "ESSEC Business School" },
  {
    casurl: "https://gge-fra.onelogin.com/oidc/2/auth",
    clientid: "63a20580-4e7f-013d-983f-3ae74bc6093237627",
    id: "digitalcampus",
    name: "GGE - Digital Campus",
    scope: "openid+profile+email+params+groups",
    uriend: false
  },
  {
    casurl: "https://gge-deu.onelogin.com/oidc/2/auth",
    clientid: "ba5a9ba0-88f8-013a-9a42-02ce5bf6a8b437628",
    id: "macromedia",
    name: "Galileo Global Education Germany",
    scope: "openid+profile+email+params+groups",
    uriend: false
  },
  { id: "hec", name: "HEC Paris" },
  { id: "icp", name: "ICP" },
  { id: "ipp", name: "IP Paris Campus" },
  { id: "ieu", name: "Instituto de Estudios Universitarios" },
  { id: "ieseg", name: "IÉSEG Connect" },
  {
    casurl: "https://gge-fra.onelogin.com/oidc/2/auth",
    clientid: "29e9c370-4e80-013d-885d-0abcaae3a4cf37627",
    id: "lisaa",
    name: "LISAA Campus",
    scope: "openid+profile+email+params+groups",
    uriend: false
  },
  {
    casurl: "https://gge-fra.onelogin.com/oidc/2/auth",
    clientid: "f2d6ed00-7e43-013d-0e35-020afc8f024837627",
    id: "merkure",
    name: "Merkure Live",
    scope: "openid+profile+email+params+groups",
    uriend: false
  },
  { id: "mbs", name: "Montpellier Business School" },
  { id: "eigsi", name: "My EIGSI" },
  { id: "essca", name: "My ESSCA" },
  { id: "ucly", name: "My Ucly" },
  {
    casurl: "https://gge-fra.onelogin.com/oidc/2/auth",
    clientid: "df9f8d90-4e7e-013d-9599-3e3983e056fd37627",
    id: "alijia",
    name: "MyELIJE",
    scope: "openid+profile+email+params+groups",
    uriend: false
  },
  { id: "epp", name: "MyEPP" },
  { id: "esigelec", name: "MyESIGELEC" },
  { id: "estp", name: "MyESTP" },
  { id: "esaip", name: "MyEsaip" },
  {
    casurl: "https://gge-fra.onelogin.com/oidc/2/auth",
    clientid: "2fe63b60-bff1-013b-ddc6-0668df09704237627",
    id: "iicp",
    name: "Narratiiv Inside",
    scope: "openid+profile+email+params+groups",
    uriend: false
  },
  { id: "domus", name: "Nuova Accademia: MyDA" },
  { id: "ueve", name: "OFIL UnivEvry" },
  {
    casurl: "https://gge-fra.onelogin.com/oidc/2/auth",
    clientid: "23cc4030-4e7d-013d-b0f6-4e4814bd4e6d37627",
    id: "pstb",
    name: "PSTB",
    scope: "openid+profile+email+params+groups",
    uriend: false
  },
  { id: "psb", name: "Paris School Of Business" },
  {
    casurl: "https://gge-gbr.onelogin.com/oidc/2/auth",
    clientid: "d29993a0-6b00-013a-7b8e-02732a18081038446",
    id: "regent",
    name: "Regent's University London",
    scope: "openid+profile+email+params+groups",
    uriend: false
  },
  { id: "sciencespo", name: "Sciences Po" },
  { id: "scpoaix", name: "Sciences Po Aix" },
  { id: "ubmont", name: "Université Bordeaux Montaigne" },
  { id: "uclouvain", name: "Université Catholique de Louvain" },
  {
    casurl: "https://cas.univ-eiffel.fr/oidc/authorize",
    clientid: "726a397e14d8465e80a46202",
    id: "unieiffel",
    name: "Université Gustave Eiffel",
    uriend: true
  },
  { id: "unilyon3", name: "Université Jean Moulin Lyon3" },
  {
    casurl: "https://cas.u-paris2.fr/cas/oidc/authorize",
    clientid: "973379d68bb7da4533b84c45eaf2c9fd",
    id: "uniassas",
    name: "Université Paris-Panthéon-Assas",
    uriend: true
  },
  { id: "univangers", name: "Université d'Angers" },
  { id: "unimons", name: "Université de Mons" },
  { id: "unimes", name: "Université de Nîmes" },
  {
    casurl: "https://cas.u-picardie.fr/oidc/authorize",
    clientid: "AppSchoProd",
    id: "upjv",
    name: "Université de Picardie Jules Verne",
    scope: "openid+profile+email+offline_access",
    uriend: true,
    exchangeParams: {
      redirect_uri: "https://upjv.callback.oauth.appscho.com/",
      client_id: "AppSchoProd",
      resource: "https://graph.microsoft.com"
    }
  },
  { id: "univpoitiers", name: "Université de Poitiers" },
  { casurl: "https://cas.univ-tln.fr/cas/oidc/authorize", clientid: "appscho", id: "unitoulon", name: "Université de Toulon", uriend: false },
  {
    casurl: "https://gge-fra.onelogin.com/oidc/2/auth",
    clientid: "269eb430-4e7f-013d-80d4-06e3653b829437627",
    id: "wsfactory",
    name: "Web School Factory",
    scope: "openid+profile+email+params+groups",
    uriend: false
  }
];

export const createAppSchoAPI = (instance: string): string =>
  `https://api.appscho.com/${instance}`;

export const createMyAppSchoAPI = (instance: string): string =>
  `https://my.appscho.com/api/${instance}`;

export const createFeedAPI = (instance: string): string =>
  `https://feed.appscho.com/api/m/v1/${instance}`;
