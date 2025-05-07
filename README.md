# Sikre Webapplikationer  

**Et praksisnært forløb med OWASP Top 10**

## Formål
Kurset har til formål at give de studerende en praktisk og teoretisk forståelse for de mest almindelige sårbarheder i webapplikationer med afsæt i OWASP Top 10. De studerende lærer at identificere og forebygge sikkerhedsbrister ved at arbejde hands-on med konkrete kodningseksempler og værktøjer, der understøtter "security by design".

## Forudsætninger
- Kendskab til HTML, CSS og JavaScript.
- Grundlæggende forståelse for backend-udvikling (PHP, Node.js, eller lignende).
- Erfaring med webapplikationsarkitektur, databaser og RESTful API'er.

---

## Struktur og Indhold  

### Session 1: Introduktion til Websikkerhed og OWASP Top 10
- **Oplæg:** 
  - Hvad er webapplikationssikkerhed?
  - Introduktion til OWASP og de 10 mest kritiske sårbarheder.
- **Workshop:** 
  - Brug af PortSwigger Web Security Academy til at identificere og udføre simple angreb som SQL Injection og XSS.
- **Refleksion:** 
  - Hvordan kan vi som udviklere forebygge disse problemer?

---

### Session 2: Autentifikation og Sikker Håndtering af Data
- **Oplæg:** 
  - Sikker brugerautentifikation, sessionsstyring, og datakryptering.
- **Workshop:** 
  - Implementér en login-løsning med sikring mod brute force, session hijacking og dårlige adgangskoder.
- **Ekstra:** 
  - Brug af "Have I Been Pwned" API til password-checks.

---

### Session 3: Adgangskontrol og Misconfiguration
- **Oplæg:** 
  - Adgangsbegrænsning, rollebaseret adgangskontrol og almindelige konfigurationsfejl i webapps.
- **Workshop:** 
  - Byg en simpel webapplikation med brugerroller og begrænset adgang til visse ruter og handlinger.
- **Tool:** 
  - Brug af HTTP-headers (CSP, HSTS) til at beskytte applikationen.

---

### Session 4: Inklusion af Tredjepartskomponenter og Dependency Management
- **Oplæg:** 
  - Sikker brug af tredjepartsbiblioteker og afhængigheder (NPM, Composer m.fl.).
- **Workshop:** 
  - Brug af Snyk eller OWASP Dependency-Check til at scanne og håndtere sårbarheder i dependencies.
- **Øvelse:** 
  - Opdatering og "patching" af afhængigheder i en eksisterende applikation.

---

### Session 5: Security by Design og Trusselsmodellering
- **Oplæg:** 
  - Introduktion til principperne bag “Security by Design”.
  - Hvordan man tænker sikkerhed ind fra starten.
- **Workshop:** 
  - Lav en trusselsmodel (f.eks. STRIDE) for en lille webapplikation.
- **Gruppeaktivitet:** 
  - Præsentér modellerne og diskuter trusselsbilledet.

---

## Materialer
- [OWASP Top 10](https://owasp.org/Top10/)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Snyk Vulnerability Scanner](https://snyk.io)
- [Have I Been Pwned API](https://haveibeenpwned.com/API)