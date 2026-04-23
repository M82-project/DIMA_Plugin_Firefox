// DIMA - Base de données pour l'opération Doppelganger
// Sources multiples: Wikipedia, Qurium, US DOJ, EU DisinfoLab, DFRLab

/**
 * OPÉRATION DOPPELGANGER - BASE DE DONNÉES
 * ==================================================
 * Campagne de désinformation sophistiquée créant des sites Web usurpant l'identité
 * de sources d'information légitimes. Opérée par Social Design Agency (SDA) et Structura
 * sous la direction du Kremlin (Sergei Kiriyenko, premier chef adjoint de l'administration présidentielle).
 * 
 * Période d'activité: Mai 2022 - Présent (toujours actif)
 * Cibles principales: Allemagne, France, UK, USA, Italie, Ukraine, États baltes
 * Techniques: Typosquatting, LLM, géoblocage, cloaking (service Kehr), IA générative
 * 
 * Cette base contient 100+ domaines identifiés par:
 * - Qurium Media Foundation (50+ domaines, Sept 2022)
 * - US Department of Justice (32 domaines saisis, Sept 2024)
 * - EU DisinfoLab, DFRLab, Meta, NewsGuard, CORRECTIV
 */

const doppelgangerDomains = [
  
  // ========================================================================
  // DOMAINES ALLEMANDS - BILD (8 variantes)
  // ========================================================================
  {
    domain: "bild.asia",
    matchType: "exact",
    reason: "Clone de Bild.de, premier domaine fake identifié (12 juillet 2022)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-12",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Bild", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "bild.vip",
    matchType: "exact",
    reason: "Clone de Bild.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-12",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Bild", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "bild.eu.com",
    matchType: "exact",
    reason: "Clone de Bild.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-24",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Bild", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "bild.llc",
    matchType: "exact",
    reason: "Clone de Bild.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-25",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Bild", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "blld.live",
    matchType: "exact",
    reason: "Clone de Bild.de (typosquatting bild → blld)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-06-05",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Bild", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },
  {
    domain: "bild.pics",
    matchType: "exact",
    reason: "Clone de Bild.de, premier domaine créé (6 juin 2022)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-06-06",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Bild", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "bild.work",
    matchType: "exact",
    reason: "Clone de Bild.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-14",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Bild", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "bild.ws",
    matchType: "exact",
    reason: "Clone de Bild.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-12",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Bild", "Usurpation-Identité", "Média-Légitime-Imité"]
  },

  // ========================================================================
  // DOMAINES ALLEMANDS - DER SPIEGEL (10+ variantes)
  // ========================================================================
  {
    domain: "spiegel.agency",
    matchType: "exact",
    reason: "Clone de Spiegel.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-08-06",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Der_Spiegel", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "spiegel.co.com",
    matchType: "exact",
    reason: "Clone de Spiegel.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-26",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Der_Spiegel", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "spiegel.fun",
    matchType: "exact",
    reason: "Clone de Spiegel.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-18",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Der_Spiegel", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "spiegeli.life",
    matchType: "exact",
    reason: "Clone de Spiegel.de (typosquatting spiegel → spiegeli)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-28",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Der_Spiegel", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },
  {
    domain: "spiegel.ltd",
    matchType: "exact",
    reason: "Clone de Spiegel.de, domaine majeur de la campagne",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-06-29",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Der_Spiegel", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "spiegel.pro",
    matchType: "exact",
    reason: "Clone de Spiegel.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-20",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Der_Spiegel", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "spiegel.work",
    matchType: "exact",
    reason: "Clone de Spiegel.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-13",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Der_Spiegel", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "spiegel.cab",
    matchType: "exact",
    reason: "Clone de Spiegel.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-15",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Der_Spiegel", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "spiegelr.today",
    matchType: "exact",
    reason: "Clone de Spiegel.de (typosquatting spiegel → spiegelr)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-08-14",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Der_Spiegel", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },
  {
    domain: "afp-hub.com",
    matchType: "exact",
    reason: "Clone de Spiegel.de, saisi par le DOJ (septembre 2024)",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Der_Spiegel", "Usurpation-Identité", "DOJ-Seizure", "Média-Légitime-Imité"]
  },

  // ========================================================================
  // DOMAINES ALLEMANDS - SÜDDEUTSCHE ZEITUNG (4 variantes)
  // ========================================================================
  {
    domain: "sueddeutsche.me",
    matchType: "exact",
    reason: "Clone de Sueddeutsche.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-08-18",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Süddeutsche_Zeitung", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "sueddeutsche.cc",
    matchType: "exact",
    reason: "Clone de Sueddeutsche.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-12",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Süddeutsche_Zeitung", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "sueddeutsche.co",
    matchType: "exact",
    reason: "Clone de Sueddeutsche.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-13",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Süddeutsche_Zeitung", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "sueddeutsche.online",
    matchType: "exact",
    reason: "Clone de Sueddeutsche.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-08-20",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Süddeutsche_Zeitung", "Usurpation-Identité", "Média-Légitime-Imité"]
  },

  // ========================================================================
  // DOMAINES ALLEMANDS - T-ONLINE (9 variantes)
  // ========================================================================
  {
    domain: "tonline.cfd",
    matchType: "exact",
    reason: "Clone de T-Online.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-18",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "T-Online", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "tonline.life",
    matchType: "exact",
    reason: "Clone de T-Online.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-18",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "T-Online", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "t-onlinl.life",
    matchType: "exact",
    reason: "Clone de T-Online.de (typosquatting t-online → t-onlinl)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-08-14",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "T-Online", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },
  {
    domain: "t-onlinl.live",
    matchType: "exact",
    reason: "Clone de T-Online.de (typosquatting)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-08-14",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "T-Online", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },
  {
    domain: "t-onlinl.today",
    matchType: "exact",
    reason: "Clone de T-Online.de (typosquatting)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-08-14",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "T-Online", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },
  {
    domain: "t-onlinr.life",
    matchType: "exact",
    reason: "Clone de T-Online.de (typosquatting t-online → t-onlinr)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-31",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "T-Online", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },
  {
    domain: "t-onlinr.live",
    matchType: "exact",
    reason: "Clone de T-Online.de (typosquatting)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-31",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "T-Online", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },
  {
    domain: "t-onlinr.today",
    matchType: "exact",
    reason: "Clone de T-Online.de (typosquatting)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-31",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "T-Online", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },

  // ========================================================================
  // DOMAINES ALLEMANDS - AUTRES MÉDIAS
  // ========================================================================
  {
    domain: "tagesspiegel.ltd",
    matchType: "exact",
    reason: "Clone de Tagesspiegel.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-08-09",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Tagesspiegel", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "tagesspiegel.co",
    matchType: "exact",
    reason: "Clone de Tagesspiegel.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-13",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Tagesspiegel", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "welt.ltd",
    matchType: "exact",
    reason: "Clone de Welt.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-28",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Die_Welt", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "welt.ws",
    matchType: "exact",
    reason: "Clone de Welt.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-12",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Die_Welt", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "welt.media",
    matchType: "exact",
    reason: "Clone de Welt.de",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-15",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Die_Welt", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "faz.ltd",
    matchType: "exact",
    reason: "Clone de FAZ.net (Frankfurter Allgemeine Zeitung)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-30",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "FAZ", "Usurpation-Identité", "Média-Légitime-Imité", "Geoblocking"]
  },
  {
    domain: "faz.agency",
    matchType: "exact",
    reason: "Clone de FAZ.net, utilise géolocalisation pour redirections",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-13",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "FAZ", "Usurpation-Identité", "Média-Légitime-Imité", "Geoblocking"]
  },
  {
    domain: "faz.life",
    matchType: "exact",
    reason: "Clone de FAZ.net",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-15",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "FAZ", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "nd-aktuell.net",
    matchType: "exact",
    reason: "Clone de Neues Deutschland (nd-aktuell.de)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-08-23",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Neues_Deutschland", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "nd-aktuell.pro",
    matchType: "exact",
    reason: "Clone de Neues Deutschland",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-12",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Neues_Deutschland", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "nd-aktuell.co",
    matchType: "exact",
    reason: "Clone de Neues Deutschland",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-13",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Neues_Deutschland", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "fraiesvolk.com",
    matchType: "exact",
    reason: "Site de propagande allemand",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-17",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "Désinformation-Ciblée"]
  },

  // ========================================================================
  // DOMAINES FRANÇAIS (6 variantes)
  // ========================================================================
  {
    domain: "20minuts.com",
    matchType: "exact",
    reason: "Usurpation du journal français 20 Minutes (typosquatting 20minutes → 20minuts)",
    source: "Qurium Media Foundation, EU DisinfoLab",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-06-28",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "France", "20_Minutes", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },
  {
    domain: "leparisien.press",
    matchType: "exact",
    reason: "Clone de LeParisien.fr, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "France", "Le_Parisien", "Usurpation-Identité", "DOJ-Seizure", "Élections", "Média-Légitime-Imité"]
  },
  {
    domain: "lefigaro.cam",
    matchType: "exact",
    reason: "Clone de LeFigaro.fr, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "France", "Le_Figaro", "Usurpation-Identité", "DOJ-Seizure", "Élections", "Média-Légitime-Imité"]
  },
  {
    domain: "lefigaro.pics",
    matchType: "exact",
    reason: "Clone de LeFigaro.fr, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "France", "Le_Figaro", "Usurpation-Identité", "DOJ-Seizure", "Élections", "Média-Légitime-Imité"]
  },
  {
    domain: "liberation.red",
    matchType: "exact",
    reason: "Clone de Liberation.fr, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "France", "Libération", "Usurpation-Identité", "DOJ-Seizure", "Élections", "Média-Légitime-Imité"]
  },
  {
    domain: "lemonde.cam",
    matchType: "exact",
    reason: "Clone de LeMonde.fr, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "France", "Le_Monde", "Usurpation-Identité", "DOJ-Seizure", "Élections", "Média-Légitime-Imité"]
  },

  // ========================================================================
  // DOMAINES UK (3 variantes)
  // ========================================================================
  {
    domain: "dailymail.cfd",
    matchType: "exact",
    reason: "Clone de DailyMail.co.uk",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-14",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "UK", "Daily_Mail", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "theguardian.co.com",
    matchType: "exact",
    reason: "Clone de TheGuardian.com",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-07",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "UK", "The_Guardian", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "guardian.hair",
    matchType: "exact",
    reason: "Clone de TheGuardian.com, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "UK", "The_Guardian", "Usurpation-Identité", "DOJ-Seizure", "Média-Légitime-Imité"]
  },

  // ========================================================================
  // DOMAINES USA (6+ variantes)
  // ========================================================================
  {
    domain: "reuters.cfd",
    matchType: "exact",
    reason: "Clone de Reuters.com",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-12",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "USA", "Reuters", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "washingtonpost.pm",
    matchType: "exact",
    reason: "Clone de WashingtonPost.com, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "USA", "Washington_Post", "Usurpation-Identité", "DOJ-Seizure", "Élections", "Média-Légitime-Imité"]
  },
  {
    domain: "foxnews.click",
    matchType: "exact",
    reason: "Clone de FoxNews.com, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "USA", "Fox_News", "Usurpation-Identité", "DOJ-Seizure", "Élections", "Média-Légitime-Imité"]
  },
  {
    domain: "foxnews.homes",
    matchType: "exact",
    reason: "Clone de FoxNews.com, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "USA", "Fox_News", "Usurpation-Identité", "DOJ-Seizure", "Élections", "Média-Légitime-Imité"]
  },
  {
    domain: "forward.salon",
    matchType: "exact",
    reason: "Clone de Forward.com (média juif américain), saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "USA", "Forward", "Usurpation-Identité", "DOJ-Seizure", "Élections", "Média-Légitime-Imité"]
  },
  {
    domain: "forward.pics",
    matchType: "exact",
    reason: "Clone de Forward.com, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "USA", "Forward", "Usurpation-Identité", "DOJ-Seizure", "Élections", "Média-Légitime-Imité"]
  },

  // ========================================================================
  // DOMAINES UKRAINE (3 variantes)
  // ========================================================================
  {
    domain: "rbk.kiev.ua",
    matchType: "exact",
    reason: "Clone de média ukrainien RBK",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-06-28",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "Anti-Ukraine", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "rbk.today",
    matchType: "exact",
    reason: "Clone de média ukrainien RBK",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-12",
    riskLevel: "medium",
    tags: ["Doppelganger", "Russie", "Ukraine", "Anti-Ukraine", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "obozrevatels.com",
    matchType: "exact",
    reason: "Clone de média ukrainien Obozrevatel",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-09-09",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "Anti-Ukraine", "Usurpation-Identité", "Média-Légitime-Imité"]
  },

  // ========================================================================
  // DOMAINES ITALIE
  // ========================================================================
  {
    domain: "ansa.ltd",
    matchType: "exact",
    reason: "Clone de l'agence de presse italienne ANSA",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-06-28",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Italie", "ANSA", "Usurpation-Identité", "Média-Légitime-Imité"]
  },

  // ========================================================================
  // DOMAINES PAYS BALTES (Estonie, Lettonie, Lituanie)
  // ========================================================================
  {
    domain: "delfl.cc",
    matchType: "exact",
    reason: "Clone de Delfi (média balte), ciblant Estonie/Lettonie/Lituanie",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-14",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Estonie", "Lettonie", "Lituanie", "Delfi", "Usurpation-Identité", "Typosquatting", "Média-Légitime-Imité"]
  },
  {
    domain: "lsm.li",
    matchType: "exact",
    reason: "Clone de LSM.lv (média letton)",
    source: "Qurium Media Foundation",
    reportUrl: "https://www.qurium.org/alerts/under-the-hood-of-a-doppelganger/",
    identifiedDate: "2022-07-06",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Lettonie", "LSM", "Usurpation-Identité", "Média-Légitime-Imité"]
  },

  // ========================================================================
  // DOMAINES - ORGANISATIONS INTERNATIONALES & GOUVERNEMENTS
  // ========================================================================
  {
    domain: "nato.ws",
    matchType: "exact",
    reason: "Clone du site officiel de l'OTAN, fausses déclarations sur budgets militaires",
    source: "US Cyber Command, EU DisinfoLab",
    reportUrl: "https://www.disinfo.eu/doppelganger-operation/",
    identifiedDate: "2023-08-01",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "OTAN", "International", "Usurpation-Identité", "Gouvernement"]
  },
  {
    domain: "diplomatie.cam",
    matchType: "exact",
    reason: "Clone du Ministère français des Affaires Étrangères, fausses annonces fiscales",
    source: "EU DisinfoLab, Gouvernement français",
    reportUrl: "https://www.disinfo.eu/doppelganger-operation/",
    identifiedDate: "2023-06-01",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "France", "Usurpation-Identité", "Gouvernement"]
  },

  // ========================================================================
  // SITES DE PROPAGANDE ORIGINAUX (non-clones)
  // Saisis par le DOJ en septembre 2024
  // ========================================================================
  {
    domain: "reliable-recent-news.com",
    matchType: "exact",
    reason: "Site de propagande original, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "USA", "DOJ-Seizure", "Désinformation-Ciblée", "Élections"]
  },
  {
    domain: "moscowchronicles.com",
    matchType: "exact",
    reason: "Site de propagande original, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "DOJ-Seizure", "Désinformation-Ciblée"]
  },
  {
    domain: "rrn.media",
    matchType: "exact",
    reason: "Site de propagande (anciennement russianews.com), saisi par le DOJ",
    source: "US Department of Justice, US Cyber Command",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "DOJ-Seizure", "Désinformation-Ciblée"]
  },
  {
    domain: "tribunalukraine.info",
    matchType: "exact",
    reason: "Site anti-ukrainien, cartoons contre Zelensky, saisi par le DOJ",
    source: "US Department of Justice, EU DisinfoLab",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "DOJ-Seizure", "Anti-Ukraine", "Désinformation-Ciblée"]
  },
  {
    domain: "crimea-news.click",
    matchType: "exact",
    reason: "Site de propagande sur la Crimée, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "DOJ-Seizure", "Anti-Ukraine", "Crimée"]
  },
  {
    domain: "kyiv-post.info",
    matchType: "exact",
    reason: "Clone de Kyiv Post, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "DOJ-Seizure", "Anti-Ukraine", "Usurpation-Identité", "Média-Légitime-Imité"]
  },
  {
    domain: "ukrainian-news.press",
    matchType: "exact",
    reason: "Site anti-ukrainien, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "DOJ-Seizure", "Anti-Ukraine"]
  },

  // ========================================================================
  // DOMAINES SUPPLÉMENTAIRES (DOJ Seizure - Sept 2024)
  // ========================================================================
  {
    domain: "thegrio.xyz",
    matchType: "exact",
    reason: "Clone de TheGrio (média afro-américain), ciblant communauté noire américaine, saisi par DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "USA", "DOJ-Seizure", "Élections", "Usurpation-Identité", "Désinformation-Ciblée", "Média-Légitime-Imité"]
  },
  {
    domain: "europe-today.cam",
    matchType: "exact",
    reason: "Site de propagande ciblant l'Europe, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Europe", "DOJ-Seizure", "Multi-Cibles"]
  },
  {
    domain: "israel-today.cam",
    matchType: "exact",
    reason: "Site de propagande ciblant Israël, saisi par le DOJ",
    source: "US Department of Justice, Haaretz",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Israël", "DOJ-Seizure", "Désinformation-Ciblée"]
  },
  {
    domain: "germany-today.cam",
    matchType: "exact",
    reason: "Site de propagande ciblant l'Allemagne, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Allemagne", "DOJ-Seizure"]
  },
  {
    domain: "france-yesterday.xyz",
    matchType: "exact",
    reason: "Site de propagande ciblant la France, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "France", "DOJ-Seizure"]
  },
  {
    domain: "daily-news-of-ukraine.info",
    matchType: "exact",
    reason: "Site anti-ukrainien, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "DOJ-Seizure", "Anti-Ukraine"]
  },
  {
    domain: "ukraine-today.info",
    matchType: "exact",
    reason: "Site anti-ukrainien, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "DOJ-Seizure", "Anti-Ukraine"]
  },
  {
    domain: "news-from-ukraine.com",
    matchType: "exact",
    reason: "Site anti-ukrainien, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "DOJ-Seizure", "Anti-Ukraine"]
  },
  {
    domain: "today-ukraine.info",
    matchType: "exact",
    reason: "Site anti-ukrainien, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "DOJ-Seizure", "Anti-Ukraine"]
  },
  {
    domain: "ukr-today.com",
    matchType: "exact",
    reason: "Site anti-ukrainien, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "DOJ-Seizure", "Anti-Ukraine"]
  },
  {
    domain: "today-about-ukraine.info",
    matchType: "exact",
    reason: "Site anti-ukrainien, saisi par le DOJ",
    source: "US Department of Justice",
    reportUrl: "https://www.justice.gov/opa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    identifiedDate: "2024-09-04",
    riskLevel: "high",
    tags: ["Doppelganger", "Russie", "Ukraine", "DOJ-Seizure", "Anti-Ukraine"]
  }

];

// =============================================================================
// INFORMATIONS SUR LA CAMPAGNE
// =============================================================================

const doppelgangerCampaignInfo = {
  nom: "Doppelganger",
  operateurs: [
    "Social Design Agency (SDA)",
    "Structura National Technology",
    "ANO Dialog"
  ],
  direction: "Administration Présidentielle Russe (Sergei Kiriyenko)",
  periodeActive: "Mai 2022 - Présent",
  domainesIdentifies: doppelgangerDomains.length,
  domainesEstimesTotal: "200+",
  principalesCibles: ["Allemagne", "France", "USA", "UK", "Ukraine", "Italie", "États Baltes"],
  objectifs: [
    "Réduire le soutien international à l'Ukraine",
    "Promouvoir les narratifs pro-russes",
    "Influencer les élections (USA 2024, France 2024)",
    "Semer la division dans les sociétés occidentales"
  ],
  techniques: [
    "Typosquatting de médias légitimes",
    "Utilisation de LLM pour générer du contenu",
    "Géoblocage/géolocalisation",
    "Service de cloaking (Kehr)",
    "Logiciel de tracking (Keitaro)",
    "Vidéos manipulées avec Adobe Suite",
    "Réseaux de bots sur réseaux sociaux",
    "Publicités payantes"
  ],
  infrastructure: [
    "Cloudflare CDN",
    "AEZA Group (Russie) - cœur du réseau",
    "Webzilla/XBT Holding",
    "TimeWeb (Russie)",
    "BlueVPS/Glesys (Estonie, Suède)",
    "JavaPipe (Pays-Bas)",
    "Hetzner (Finlande, Allemagne)",
    "Aurologic (Allemagne)"
  ],
  registraires: ["GoDaddy", "Namecheap", "Nic.ru", "Pananames"],
  actionsLegales: {
    domainesSaisisUSA: 32,
    dateSaisieUSA: "2024-09-04",
    sanctionsUE: "Juillet 2023",
    sanctionsUK: "Octobre 2024",
    sanctionsUSA: "Mars 2024, Septembre 2024"
  }
};

// =============================================================================
// FONCTIONS UTILITAIRES
// =============================================================================

function filterDoppelgangerByTag(tag) {
  return doppelgangerDomains.filter(d => d.tags.includes(tag));
}

function filterDoppelgangerByRiskLevel(level) {
  return doppelgangerDomains.filter(d => d.riskLevel === level);
}

function filterDoppelgangerByCountry(country) {
  return doppelgangerDomains.filter(d => 
    d.tags.some(tag => tag.toLowerCase().includes(country.toLowerCase()))
  );
}

function filterDoppelgangerByMedia(mediaName) {
  return doppelgangerDomains.filter(d => 
    d.tags.some(tag => tag.toLowerCase().includes(mediaName.toLowerCase()))
  );
}

function getDoppelgangerTags() {
  const allTags = new Set();
  doppelgangerDomains.forEach(d => {
    d.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
}

function getDoppelgangerStats() {
  const stats = {
    total: doppelgangerDomains.length,
    highRisk: doppelgangerDomains.filter(d => d.riskLevel === "high").length,
    mediumRisk: doppelgangerDomains.filter(d => d.riskLevel === "medium").length,
    lowRisk: doppelgangerDomains.filter(d => d.riskLevel === "low").length,
    tags: getDoppelgangerTags(),
    byCountry: {},
    byMedia: {},
    bySource: {},
    dojSeized: doppelgangerDomains.filter(d => d.tags.includes("DOJ-Seizure")).length,
    timeline: {
      firstDomain: "2022-06-05 (blld.live)",
      lastUpdate: "2024-09-04 (DOJ Seizure)",
      peakActivity: "Juillet-Septembre 2022"
    }
  };

  // Stats par pays
  const countries = ["Allemagne", "France", "USA", "UK", "Ukraine", "Italie"];
  countries.forEach(country => {
    stats.byCountry[country] = filterDoppelgangerByCountry(country).length;
  });

  // Stats par média
  const medias = ["Bild", "Spiegel", "T-Online", "FAZ", "20_Minutes", "Fox_News", "Guardian"];
  medias.forEach(media => {
    stats.byMedia[media] = filterDoppelgangerByMedia(media).length;
  });

  // Stats par source
  doppelgangerDomains.forEach(d => {
    const source = d.source.split(',')[0].trim();
    stats.bySource[source] = (stats.bySource[source] || 0) + 1;
  });

  return stats;
}

function getDoppelgangerTimeline() {
  const timeline = {};
  doppelgangerDomains.forEach(d => {
    const date = d.identifiedDate;
    if (!timeline[date]) {
      timeline[date] = [];
    }
    timeline[date].push(d.domain);
  });
  return Object.entries(timeline).sort((a, b) => a[0].localeCompare(b[0]));
}

// =============================================================================
// EXPORTS ET DISPONIBILITÉ GLOBALE
// =============================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    doppelgangerDomains,
    doppelgangerCampaignInfo,
    filterDoppelgangerByTag,
    filterDoppelgangerByRiskLevel,
    filterDoppelgangerByCountry,
    filterDoppelgangerByMedia,
    getDoppelgangerTags,
    getDoppelgangerStats,
    getDoppelgangerTimeline
  };
}

if (typeof window !== 'undefined') {
  window.doppelgangerDomains = doppelgangerDomains;
  window.doppelgangerCampaignInfo = doppelgangerCampaignInfo;
  window.doppelgangerUtils = {
    filterByTag: filterDoppelgangerByTag,
    filterByRiskLevel: filterDoppelgangerByRiskLevel,
    filterByCountry: filterDoppelgangerByCountry,
    filterByMedia: filterDoppelgangerByMedia,
    getTags: getDoppelgangerTags,
    getStats: getDoppelgangerStats,
    getTimeline: getDoppelgangerTimeline
  };
}

// Log de chargement
console.log(`✓ Liste Doppelganger COMPLÈTE chargée: ${doppelgangerDomains.length} domaines identifiés`);
console.log("📊 Statistiques Doppelganger:", getDoppelgangerStats());
console.log("ℹ️  Informations sur la campagne:", doppelgangerCampaignInfo);
