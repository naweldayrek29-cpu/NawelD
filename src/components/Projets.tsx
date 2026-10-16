import React, { useMemo, useState } from "react";
import {
  FolderOpen,
  School,
  Building,
  Calendar,
  Users,
  Download,
  X,
  Eye,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Image as ImageIcon,
  Network,
  Server,
  Activity,
  type LucideIcon,
} from "lucide-react";

type Category = "scolaire";
type ProjetStatus = "Terminé" | "En cours";

interface Projet {
  title: string;
  description: string;
  fullDescription?: React.ReactNode;
  technologies: string[];
  date: string;
  status: ProjetStatus;
  icon: LucideIcon;
  color: string;
  download?: string;
  view?: string;
}


const captures = [
  { file: "ad_utilisateurs.png", title: "Organisation de l'annuaire", description: "Unités d'organisation, utilisateurs et groupes dans la console ADUC." },
  { file: "ad_gpo.png", title: "Stratégies de groupe", description: "Vue des GPO configurées et de leur liaison aux unités d'organisation." },
];

function Capture({ file, title, description }: (typeof captures)[number]) {
  const [error, setError] = React.useState(false);
  const [zoomed, setZoomed] = React.useState(false);
  const src = `${import.meta.env.BASE_URL}${file}`;

  React.useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomed(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomed]);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-purple-500/20 bg-gray-950/40">
        {!error ? (
          <button
            type="button"
            onClick={() => setZoomed(true)}
            className="block w-full cursor-zoom-in bg-gray-950/60 group"
            aria-label={`Agrandir la capture : ${title}`}
          >
            <img
              src={src}
              alt={title}
              loading="lazy"
              className="w-full max-h-[680px] object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              onError={() => setError(true)}
            />
            <span className="block py-2 text-xs text-purple-300">Cliquer pour agrandir</span>
          </button>
        ) : (
          <div className="h-44 flex flex-col items-center justify-center gap-2 text-gray-400 text-sm px-4 text-center">
            <ImageIcon size={26} className="text-purple-400" />
            <span>Ajouter {file} dans public/</span>
          </div>
        )}
        <div className="p-4">
          <h5 className="font-semibold text-white mb-1">{title}</h5>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>

      {zoomed && !error && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Capture agrandie : ${title}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={() => setZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            className="absolute right-4 top-4 rounded-xl bg-gray-800 p-3 text-white hover:bg-gray-700"
            aria-label="Fermer l'image"
          >
            <X size={24} />
          </button>
          <img
            src={src}
            alt={title}
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function ActiveDirectoryDetail() {
  return (
    <div className="space-y-9 text-gray-300">
      <div>
        <h4 className="text-xl font-bold text-white mb-3">01 — Contexte et objectif</h4>
        <p className="leading-8">Dans le cadre de l'environnement pédagogique fictif NAUTICOR, ce projet vise à centraliser l'administration des utilisateurs, des ordinateurs et des stratégies de sécurité grâce à un domaine Active Directory sous Windows Server.</p>
      </div>

      <div>
        <h4 className="text-xl font-bold text-white mb-4">02 — Architecture technique</h4>
        <div className="rounded-2xl border border-purple-500/20 bg-gray-950/40 p-5 md:p-7">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-full max-w-xs rounded-xl border border-sky-500/40 bg-sky-500/10 p-4">
              <Server className="mx-auto mb-2 text-sky-400" size={28} />
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-200 mb-1">Machine virtuelle</p>
              <p className="font-semibold text-white">Windows Server</p>
              <p className="text-sm text-sky-200">Contrôleur de domaine — AD DS</p>
            </div>
            <div className="h-7 w-px bg-purple-400" />
            <div className="grid w-full grid-cols-3 gap-2 md:gap-4">
              {[
                ["DNS", "Résolution de noms"],
                ["AD DS", "Comptes et groupes"],
                ["GPO", "Stratégies"],
              ].map(([name, desc]) => (
                <div key={name} className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-3 md:p-4">
                  <p className="font-bold text-purple-200">{name}</p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">{desc}</p>
                </div>
              ))}
            </div>
            <div className="h-7 w-px bg-purple-400" />
            <div className="w-full max-w-xs rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <Network className="mx-auto mb-2 text-emerald-400" size={26} />
              <p className="font-semibold text-white">Postes clients du domaine</p>
              <p className="text-sm text-emerald-200">Authentification centralisée</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-5">Schéma logique simplifié — à adapter à l'architecture réellement déployée.</p>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold text-white mb-4">03 — Réalisations techniques</h4>
        <div className="space-y-3">
          {[
            "Installation et configuration d'un contrôleur de domaine Active Directory",
            "Mise en place du service DNS associé au domaine",
            "Organisation et gestion centralisée des utilisateurs et des groupes",
            "Configuration de stratégies de groupe (GPO)",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 size={19} className="mt-1 shrink-0 text-emerald-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold text-white mb-2">04 — Résultats et preuves visuelles</h4>
        <p className="text-sm text-gray-400 mb-5">Captures de l'environnement final, sans publier les procédures d'installation. Clique sur une capture pour la voir en grand.</p>
        <div className="grid gap-5 lg:grid-cols-2">
          {captures.map((capture) => <Capture key={capture.file} {...capture} />)}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="text-purple-400" size={22} />
          <h4 className="text-xl font-bold text-white">05 — Compétences mobilisées</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Administration Windows Server", "Services d'annuaire", "Gestion des identités", "DNS", "Stratégies de groupe", "Sécurisation des accès"].map((skill) => (
            <span key={skill} className="rounded-full border border-purple-500/20 bg-purple-600/15 px-3 py-1.5 text-sm text-purple-200">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

type FicheConfig = {
  objectif: string;
  source: string;
  centre: string;
  destination: string;
  realisation: string;
  validation: string;
  images: { file: string; title: string; description: string }[];
  largeCaptures?: boolean;
  machineVirtuelle?: string;
  schemaGlpi?: boolean;
  serveurVM?: string;
  serviceVM?: string;
  descriptionVM?: string;
};

// Les schémas représentent des principes simplifiés : vérifier la topologie exacte avant publication.
// Les images absentes sont affichées comme des emplacements à compléter, jamais comme de fausses preuves.
function FicheTechnique({ config }: { config: FicheConfig }) {
  return (
    <div className="space-y-9 text-gray-300">
      <div>
        <h4 className="text-xl font-bold text-white mb-3">01 — Contexte et objectif</h4>
        <p>Dans l’environnement pédagogique NAUTICOR, ce projet répond au besoin suivant : {config.objectif}</p>
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-4">02 — Architecture technique</h4>
        {config.schemaGlpi ? (
          <div className="rounded-2xl border border-purple-500/20 bg-gray-950/40 p-5 md:p-7 text-center">
            <div className="mx-auto max-w-lg rounded-2xl border border-indigo-400/40 bg-indigo-500/10 p-4 md:p-5">
              <div className="flex items-center justify-center gap-2 text-indigo-200 font-semibold mb-3">
                <Server size={22} /> Machine virtuelle
              </div>
              <div className="rounded-xl border border-sky-500/40 bg-sky-500/10 p-3 mb-3">
                <p className="font-bold text-white">Serveur Ubuntu</p>
                <p className="text-sm text-sky-200">Système hébergeant GLPI</p>
              </div>
              <div className="rounded-xl border border-teal-500/40 bg-teal-500/10 p-4">
                <p className="font-bold text-white text-lg">GLPI</p>
                <p className="text-sm text-teal-200">Application de gestion du parc et du support</p>
              </div>
            </div>
            <div className="flex flex-col items-center my-3 gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-300">Liaison LDAP / Authentification</span>
              <span className="text-purple-300 text-2xl leading-none">↕</span>
            </div>
            <div className="mx-auto max-w-lg rounded-xl border border-purple-500/40 bg-purple-500/10 p-4">
              <Network className="mx-auto text-purple-300 mb-2" size={25} />
              <p className="font-bold text-white">Active Directory (AD)</p>
              <p className="text-sm text-purple-200">Comptes utilisateurs du domaine</p>
              <p className="text-xs text-gray-300 mt-2">Connexion à GLPI avec le même identifiant et le même mot de passe que sur le domaine</p>
            </div>
            <div className="h-6 w-px bg-teal-400/70 mx-auto my-2" />
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
                <p className="font-semibold text-emerald-200">Tickets d’assistance</p>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
                <p className="font-semibold text-emerald-200">Inventaire du parc</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-5">Schéma fonctionnel simplifié de l’intégration GLPI et Active Directory.</p>
          </div>
        ) : config.serveurVM && config.serviceVM ? (
          <div className="rounded-2xl border border-purple-500/20 bg-gray-950/40 p-5 md:p-7 text-center">
            <div className="mx-auto max-w-lg rounded-2xl border border-indigo-400/40 bg-indigo-500/10 p-4 md:p-5">
              <div className="flex items-center justify-center gap-2 text-indigo-200 font-semibold mb-3">
                <Server size={22} /> Machine virtuelle
              </div>
              <div className="rounded-xl border border-sky-500/40 bg-sky-500/10 p-3 mb-3">
                <p className="font-bold text-white">{config.serveurVM}</p>
                <p className="text-sm text-sky-200">Système hébergeant {config.serviceVM}</p>
              </div>
              <div className="rounded-xl border border-teal-500/40 bg-teal-500/10 p-4">
                <p className="font-bold text-white text-lg">{config.serviceVM}</p>
                <p className="text-sm text-teal-200">{config.descriptionVM}</p>
              </div>
            </div>
            <div className="h-7 w-px bg-purple-400 mx-auto my-2" />
            <div className="mx-auto max-w-lg rounded-xl border border-purple-500/30 bg-purple-500/10 p-4">
              <Network className="mx-auto text-purple-300 mb-2" size={26} />
              <p className="font-semibold text-white">{config.source}</p>
            </div>
            <div className="h-7 w-px bg-purple-400 mx-auto my-2" />
            <div className="mx-auto max-w-lg rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <p className="font-semibold text-white">{config.destination}</p>
            </div>
            <p className="text-xs text-gray-500 mt-5">Schéma fonctionnel simplifié de l’architecture de supervision ou du service.</p>
          </div>
        ) : (
        <div className="rounded-2xl border border-purple-500/20 bg-gray-950/40 p-5 md:p-7 text-center">
          <div className="mx-auto max-w-md rounded-xl border border-indigo-500/40 bg-indigo-500/10 p-4 mb-3">
            <Server className="mx-auto text-indigo-300 mb-2" size={26} />
            <p className="font-semibold text-white">Machine virtuelle</p>
            <p className="text-sm text-indigo-200">{config.machineVirtuelle || "Environnement virtualisé de laboratoire (selon déploiement)"}</p>
          </div>
          <div className="h-7 w-px bg-purple-400 mx-auto" />
          <div className="mx-auto max-w-md rounded-xl border border-sky-500/40 bg-sky-500/10 p-4">
            <Server className="mx-auto text-sky-400 mb-2" size={26} />
            <p className="font-semibold text-white">{config.source}</p>
          </div>
          <div className="h-7 w-px bg-purple-400 mx-auto" />
          <div className="mx-auto max-w-md rounded-xl border border-purple-500/30 bg-purple-500/10 p-4">
            <Network className="mx-auto text-purple-300 mb-2" size={26} />
            <p className="font-semibold text-white">{config.centre}</p>
          </div>
          <div className="h-7 w-px bg-purple-400 mx-auto" />
          <div className="mx-auto max-w-md rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
            <CheckCircle2 className="mx-auto text-emerald-400 mb-2" size={26} />
            <p className="font-semibold text-white">{config.destination}</p>
          </div>
          <p className="text-xs text-gray-500 mt-5">Schéma de principe simplifié, sans détails d’adressage IP.</p>
        </div>
        )}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-3">03 — Réalisations techniques</h4>
        <div className="flex gap-3 items-start"><CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={19}/><p>{config.realisation}</p></div>
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-3">04 — Résultats et preuves visuelles</h4>
        <p className="text-sm text-gray-400 mb-5">{config.validation}{!config.largeCaptures && " Ajoute tes vraies captures ci-dessous, après avoir masqué les données sensibles."}</p>
        <div className={`grid gap-5 ${config.largeCaptures ? "grid-cols-1" : "lg:grid-cols-2"}`}>
          {config.images.map(image => <Capture key={image.file} {...image} />)}
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-3">05 — Compétences mobilisées</h4>
        <p>Configuration, administration, vérification du fonctionnement et documentation de la solution mise en place.</p>
      </div>
    </div>
  );
}

const fichesTechniques: Record<string, FicheConfig> = {
  "Configuration du routeur Zyxel": {
    "objectif": "Configurer les interfaces réseau du routeur Zyxel USG40 et préparer la segmentation du réseau.",
    "machineVirtuelle": "Poste de laboratoire virtualisé (si utilisé) — routeur Zyxel physique",
    "source": "Routeur Zyxel USG40",
    "centre": "Interfaces WAN / LAN",
    "destination": "Interface VLAN 10",
    "realisation": "Paramétrage des interfaces réseau et création d’une interface VLAN 10 sur le routeur Zyxel USG40.",
    "validation": "Les captures ci-dessous illustrent les interfaces configurées et le VLAN 10. Elles ne constituent pas des captures de tests de connectivité.",
    "largeCaptures": true,
    "images": [
      { "file": "zyxel_configuration.png", "title": "Configuration de l’interface VLAN 10", "description": "Vue de l’interface VLAN 10, de son association à l’interface LAN et de son adressage IPv4." },
      { "file": "zyxel_tests.png", "title": "Configuration des interfaces WAN et LAN", "description": "Vue des interfaces réseau du routeur Zyxel USG40 et de leurs paramètres d’adressage." }
    ]
  },
  "Paramétrage Routeur & Switch": {
    "objectif": "Configurer un switch administrable Netgear pour organiser les ports réseau et mettre en place une segmentation logique par VLAN.",
    "machineVirtuelle": "Poste de laboratoire virtualisé (si utilisé) — switch Netgear physique",
    "source": "Switch administrable Netgear",
    "centre": "Configuration des ports et appartenance aux VLAN",
    "destination": "VLAN 10 / VLAN 20",
    "realisation": "Accès à l’interface d’administration du switch Netgear, configuration de l’appartenance des ports aux VLAN et paramétrage des VLAN 802.1Q depuis les menus dédiés.",
    "validation": "Les captures présentent la configuration des ports et les paramètres des VLAN sur le switch Netgear. Elles ne prouvent pas à elles seules les tests de connectivité ou l’isolation entre VLAN.",
    "largeCaptures": true,
    "images": [
      { "file": "vlan_switch.jpeg", "title": "Appartenance des ports aux VLAN — Netgear", "description": "Interface VLAN Membership du switch Netgear montrant l’affectation des ports aux VLAN." },
      { "file": "vlan_tests.jpeg", "title": "Configuration des VLAN 802.1Q — Netgear", "description": "Interface VLAN Configuration du switch Netgear présentant les VLAN définis et leurs paramètres." }
    ]
  },
  "Installation de GLPI": {
    "objectif": "Centraliser le support et l’inventaire informatique, tout en permettant aux utilisateurs du domaine Active Directory d’accéder à GLPI avec leurs identifiants habituels.",
    "machineVirtuelle": "Serveur Ubuntu hébergeant GLPI",
    "schemaGlpi": true,
    "source": "Active Directory — comptes du domaine",
    "centre": "GLPI — liaison LDAP / AD",
    "destination": "Connexion des utilisateurs / Tickets / Inventaire",
    "realisation": "Déploiement et configuration de GLPI pour le suivi des tickets d’assistance et l’inventaire du parc informatique. Intégration LDAP avec Active Directory : un utilisateur créé dans le domaine peut se connecter à GLPI avec le même identifiant et le même mot de passe.",
    "validation": "Présentation de l’interface de gestion des tickets et de l’inventaire du parc. L’authentification LDAP permet aux utilisateurs Active Directory de se connecter à GLPI avec leur compte du domaine.",
    "largeCaptures": true,
    "images": [
      { "file": "glpi_tickets.jpg", "title": "Gestion des tickets d’assistance", "description": "Vue de l’interface GLPI consacrée au suivi des demandes d’assistance." },
      { "file": "glpi_inventaire.PNG", "title": "Inventaire du parc informatique", "description": "Vue de l’inventaire des équipements depuis GLPI." }
    ]
  },
  "Installation de Zabbix": {
    "serveurVM": "Serveur Debian",
    "serviceVM": "Zabbix",
    "descriptionVM": "Serveur de supervision et monitoring du parc informatique",
    "objectif": "Mettre en place une supervision centralisée des systèmes Windows et Ubuntu ainsi que du routeur Zyxel afin de suivre leur état depuis Zabbix.",
    "machineVirtuelle": "Machine virtuelle Debian : serveur Zabbix installé et configuré",
    "source": "Windows (agent Zabbix) / Ubuntu (agent Zabbix) / Routeur Zyxel (SNMP)",
    "centre": "Serveur Zabbix — collecte et supervision",
    "destination": "État des hôtes / Métriques / Tableaux de bord",
    "realisation": "Création et installation d’une machine virtuelle Debian dédiée à la supervision, puis installation et configuration du serveur Zabbix. Installation et configuration d’un agent Zabbix sur un poste Windows et sur une machine Ubuntu. Ajout de ces équipements dans Zabbix pour leur supervision. Configuration de la surveillance du routeur Zyxel via le protocole SNMP, afin de récupérer ses informations de supervision sans installer d’agent sur le routeur.",
    "validation": "La liste des hôtes montre des agents Zabbix disponibles sur les serveurs Windows et une interface SNMP disponible pour l’équipement Zyxel. La seconde capture présente la configuration SNMPv2 du Zyxel sur le port 161. L’installation de l’agent Ubuntu fait également partie des réalisations, mais n’apparaît pas sur ces deux captures.",
    "largeCaptures": true,
    "images": [
      { "file": "Tableau_de_bord_Zabbix.PNG", "title": "Hôtes supervisés dans Zabbix", "description": "Liste des hôtes avec les agents Zabbix disponibles sur les serveurs Windows et la supervision SNMP de l’équipement Zyxel." },
      { "file": "Zabbix_Zyxel.PNG", "title": "Configuration SNMP du Zyxel", "description": "Configuration de l’hôte Zyxel dans Zabbix : modèle SNMP, interface réseau, SNMPv2 et port 161." }
    ]
  },
  "Installation d’Artica Proxy": {
    "serveurVM": "Serveur Debian",
    "serviceVM": "Artica Proxy",
    "descriptionVM": "Serveur proxy et filtrage des accès Web","objectif": "Encadrer et filtrer les accès au Web depuis le réseau.", "machineVirtuelle": "Machine virtuelle Debian — Artica Proxy", "source": "Postes clients", "centre": "Artica Proxy", "destination": "Accès Internet filtré", "realisation": "Déploiement et configuration d’Artica Proxy pour le filtrage web et la gestion des accès.", "validation": "Les captures montrent la création d’une règle de blocage et le refus d’accès affiché côté client.", "largeCaptures": true, "images": [{"file": "Blockage_Artica.jpeg", "title": "Configuration du blocage de sites", "description": "Ajout d’un domaine à la liste des sites bloqués dans Artica Proxy."}, {"file": "Resultat_Blockage_Artica.jpeg", "title": "Résultat du filtrage Web", "description": "Paramétrage du proxy côté client et page de refus d’accès affichée par Artica."}]},
  "Déploiement du contrôleur WiFi UniFi": {
    "serveurVM": "Serveur Debian",
    "serviceVM": "Contrôleur WiFi UniFi",
    "descriptionVM": "Administration centralisée du réseau WiFi","objectif": "Administrer les équipements WiFi depuis une interface centralisée.", "machineVirtuelle": "Debian — contrôleur UniFi", "source": "Réseau local", "centre": "Contrôleur UniFi", "destination": "Équipements WiFi", "realisation": "Installation du contrôleur UniFi sur Debian et configuration de l’accès à son interface web.", "validation": "Les captures présentent le point d’accès détecté et les deux réseaux WiFi configurés.", "largeCaptures": true, "images": [{"file": "Borne_Unifi.jpg", "title": "Borne WiFi détectée par UniFi", "description": "Point d’accès U6+ visible dans la console de gestion UniFi."}, {"file": "SSD_Unifi.PNG", "title": "Réseaux WiFi configurés", "description": "Réseaux WiFi employés et invités visibles dans le contrôleur UniFi."}]},
  "Installation de XiVO (VoIP)": {
    "serveurVM": "Serveur Debian",
    "serviceVM": "XiVO",
    "descriptionVM": "Solution de téléphonie IP / VoIP","objectif": "Mettre en place un environnement de téléphonie IP.", "machineVirtuelle": "Machine virtuelle Debian — XiVO", "source": "Serveur XiVO", "centre": "Comptes SIP", "destination": "Clients Zoiper", "realisation": "Déploiement de XiVO et paramétrage des utilisateurs et des postes VoIP.", "validation": "Les captures montrent la configuration des lignes SIP et d’un compte utilisateur. Elles ne démontrent pas à elles seules un appel abouti.", "largeCaptures": true, "images": [{"file": "Ligne_Xivo.PNG", "title": "Lignes SIP configurées", "description": "Deux lignes SIP associées aux utilisateurs et aux numéros internes 1001 et 1002."}, {"file": "Users_Xivo_masque.PNG", "title": "Configuration d’un utilisateur SIP", "description": "Paramètres d’un compte SIP XiVO, avec les identifiants sensibles masqués pour publication."}]},
};

const Projets = () => {
  const [activeCategory] = useState<Category>("scolaire");
  const [activeFilter, setActiveFilter] = useState("Tous");

  const [selectedProjet, setSelectedProjet] =
    useState<Projet | null>(null);
  const detailRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (selectedProjet) {
      // Attend le rendu du panneau de détail avant de défiler.
      const frame = window.requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, [selectedProjet]);

  const projets: Record<Category, Projet[]> = {
    scolaire: [
      {
        title: "Mise en place d'un Active Directory",
        description:
          "Installation et configuration d’un contrôleur de domaine Active Directory avec gestion centralisée des utilisateurs, groupes et stratégies.",
        technologies: [
          "Windows Server",
          "Active Directory",
          "DNS",
          "GPO",
        ],
        date: "01/02/2025 au 15/02/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-sky-600 to-sky-700",
        fullDescription: <ActiveDirectoryDetail />,
      },

      {
        title: "Configuration du routeur Zyxel",
        description:
          "Configuration et sécurisation d’un routeur Zyxel avec gestion du DHCP, du routage et des accès réseau.",
        technologies: [
          "Zyxel",
          "DHCP",
          "Routage",
          "Réseau",
        ],
        date: "15/02/2025 au 01/03/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-emerald-600 to-emerald-700",
        fullDescription: <FicheTechnique config={fichesTechniques["Configuration du routeur Zyxel"]} />,
        download:
          import.meta.env.BASE_URL + "tpZyXel.pdf",
        view:
          import.meta.env.BASE_URL + "tpZyXel.pdf",
      },

      {
        title: "Configuration du switch Netgear",
        description:
          "Configuration d’un switch administrable Netgear : création des VLAN et affectation des ports pour segmenter le réseau local.",
        technologies: [
          "Switch Netgear",
          "VLAN 802.1Q",
          "Affectation des ports",
          "Segmentation réseau",
        ],
        date: "01/01/2025 au 01/02/2025",
        status: "Terminé",
        icon: School,
        color: "from-indigo-600 to-indigo-700",
        fullDescription: <FicheTechnique config={fichesTechniques["Paramétrage Routeur & Switch"]} />,
        download:
          import.meta.env.BASE_URL +
          "Parametrage_Routeur_Switch.pdf",
        view:
          import.meta.env.BASE_URL +
          "Parametrage_Routeur_Switch.pdf",
      },

      {
        title: "Installation de GLPI",
        description:
          "Installation de GLPI sur un serveur Ubuntu virtualisé, gestion des tickets et de l’inventaire, et liaison LDAP avec les comptes utilisateurs du domaine Active Directory.",
        technologies: [
          "GLPI",
          "Linux (Debian/Ubuntu)",
          "Apache",
          "MariaDB/MySQL",
          "LDAP / Active Directory",
          "GLPI Agent",
        ],
        date: "01/03/2025 au 20/03/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-teal-600 to-teal-700",
        fullDescription: <FicheTechnique config={fichesTechniques["Installation de GLPI"]} />,
        download:
          import.meta.env.BASE_URL + "Procédure_GLPI.pdf",
        view:
          import.meta.env.BASE_URL + "Procédure_GLPI.pdf",
      },

      {
        title: "Installation de Zabbix",
        description:
          "Déploiement de Zabbix avec installation des agents sur Windows et Ubuntu, et supervision du routeur Zyxel par SNMP.",
        technologies: [
          "Zabbix Server",
          "Agent Zabbix Windows",
          "Agent Zabbix Ubuntu",
          "SNMP — Zyxel",
          "Linux",
        ],
        date: "21/03/2025 au 10/04/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-orange-600 to-orange-700",
        fullDescription: <FicheTechnique config={fichesTechniques["Installation de Zabbix"]} />,
        download:
          import.meta.env.BASE_URL + "Procédure_Zabbix.pdf",
        view:
          import.meta.env.BASE_URL + "Procédure_Zabbix.pdf",
      },

      {
        title: "Installation d’Artica Proxy",
        description:
          "Configuration d’un proxy avec filtrage web et sécurisation de l’accès à Internet.",
        technologies: [
          "Artica Proxy",
          "SSL",
          "Linux",
          "GPO",
        ],
        date: "01/10/2025 au 15/10/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-purple-600 to-purple-700",
        fullDescription: <FicheTechnique config={fichesTechniques["Installation d’Artica Proxy"]} />,
        download:
          import.meta.env.BASE_URL + "Procédure_ARTICA.pdf",
        view:
          import.meta.env.BASE_URL + "Procédure_ARTICA.pdf",
      },

      {
        title: "Déploiement du contrôleur WiFi UniFi",
        description:
          "Installation et configuration d’un contrôleur WiFi UniFi sous Debian avec accès web centralisé pour la gestion du réseau sans fil.",
        technologies: [
          "UniFi",
          "Debian",
          "WiFi",
          "Réseau",
        ],
        date: "01/11/2025 au 15/11/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-blue-600 to-blue-700",
        fullDescription: <FicheTechnique config={fichesTechniques["Déploiement du contrôleur WiFi UniFi"]} />,
        download:
          import.meta.env.BASE_URL +
          "Procédure_WIFI_Unifi.pdf",
        view:
          import.meta.env.BASE_URL +
          "Procédure_WIFI_Unifi.pdf",
      },

      {
        title: "Installation de XiVO (VoIP)",
        description:
          "Déploiement d’une solution de téléphonie IP avec configuration des utilisateurs, des postes et de l’environnement VoIP.",
        technologies: [
          "XiVO",
          "SIP",
          "Debian",
          "Zoiper",
        ],
        date: "01/12/2025 au 20/12/2025",
        status: "Terminé",
        icon: FolderOpen,
        color: "from-rose-600 to-rose-700",
        fullDescription: <FicheTechnique config={fichesTechniques["Installation de XiVO (VoIP)"]} />,
        download:
          import.meta.env.BASE_URL +
          "Procedure_XiVO_DAYREKNAWEL.pdf",
        view:
          import.meta.env.BASE_URL +
          "Procedure_XiVO_DAYREKNAWEL.pdf",
      },
    ],


  };

  const activeProjects = useMemo(
    () => projets[activeCategory],
    [activeCategory]
  );

  const projectDomain = (title: string): string[] => {
    if (title.includes("Active Directory")) return ["Systèmes", "Administration", "Sécurité"];
    if (title.includes("Zyxel") || title.includes("Netgear")) return ["Réseaux", "Sécurité"];
    if (title.includes("GLPI")) return ["Administration", "Support", "Systèmes"];
    if (title.includes("Zabbix")) return ["Supervision", "Systèmes", "Administration"];
    if (title.includes("Artica")) return ["Sécurité", "Réseaux"];
    if (title.includes("UniFi")) return ["Réseaux", "Administration"];
    if (title.includes("XiVO")) return ["Réseaux", "Administration"];
    return ["Systèmes"];
  };
  const filteredProjects = activeFilter === "Tous"
    ? activeProjects
    : activeProjects.filter((project) => projectDomain(project.title).includes(activeFilter));

  return (
    <section
      id="projets"
      className="relative py-24 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden"
    >
      {/* EFFETS DE FOND */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* EN-TÊTE — projets techniques, évolutif pour les futurs projets Bachelor */}
        <header className="relative mb-10 overflow-hidden rounded-3xl border border-indigo-500/20 bg-[#0b1329] px-6 py-8 md:px-10 md:py-10 shadow-2xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-950/35 via-transparent to-purple-950/40" />
          <div className="relative grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200">
                <Sparkles size={16} /> Projets & réalisations
              </span>
              <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                Mes projets<br /><span className="bg-gradient-to-r from-purple-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">techniques</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                Découvrez mes réalisations en systèmes, réseaux et cybersécurité :
                des infrastructures déployées, des services configurés et des solutions documentées.
              </p>
            </div>
            {/* Illustration réseau construite en composants : nette sur tous les écrans */}
            <div className="relative mx-auto flex min-h-[220px] w-full max-w-lg items-center justify-center lg:min-h-[260px]" aria-hidden="true">
              <div className="absolute h-64 w-64 rounded-full bg-purple-600/15 blur-3xl" />
              <div className="absolute inset-x-12 top-1/2 border-t border-dashed border-purple-400/40" />
              <div className="absolute bottom-12 left-1/2 top-10 border-l border-dashed border-blue-400/40" />
              <div className="relative grid w-full grid-cols-3 items-center gap-4">
                <div className="flex flex-col items-center gap-8">
                  <div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-5 shadow-lg shadow-blue-900/30"><Server className="text-blue-300" size={40} /></div>
                  <div className="rounded-2xl border border-purple-400/30 bg-purple-500/10 p-4"><Network className="text-purple-300" size={34} /></div>
                </div>
                <div className="relative flex flex-col items-center gap-3 rounded-3xl border border-indigo-400/40 bg-slate-900/95 p-6 shadow-2xl shadow-purple-900/40">
                  <Server size={48} className="text-violet-300" />
                  <span className="text-center text-xs font-semibold text-slate-200">Infrastructure</span>
                </div>
                <div className="flex flex-col items-center gap-8">
                  <div className="rounded-2xl border border-fuchsia-400/30 bg-fuchsia-500/10 p-5"><ShieldCheck className="text-fuchsia-300" size={40} /></div>
                  <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-4"><Users className="text-cyan-300" size={34} /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6" aria-label="Filtrer les projets par domaine">
            {[
              { label: "Tous", Icon: FolderOpen, color: "text-slate-200", line: "bg-slate-300" },
              { label: "Systèmes", Icon: Server, color: "text-blue-400", line: "bg-blue-400" },
              { label: "Réseaux", Icon: Network, color: "text-purple-400", line: "bg-purple-400" },
              { label: "Sécurité", Icon: ShieldCheck, color: "text-fuchsia-400", line: "bg-fuchsia-400" },
              { label: "Administration", Icon: FolderOpen, color: "text-emerald-400", line: "bg-emerald-400" },
              { label: "Support", Icon: Users, color: "text-amber-400", line: "bg-amber-400" },
            ].map(({ label, Icon, color, line }) => (
              <button key={label} type="button" onClick={() => { setActiveFilter(label); setSelectedProjet(null); }}
                aria-pressed={activeFilter === label}
                className={`flex items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 ${activeFilter === label ? "border-purple-400/70 bg-purple-500/20 shadow-lg shadow-purple-900/20" : "border-white/10 bg-white/[0.035]"}`}>
                <Icon size={23} className={`shrink-0 ${color}`} />
                <div className="min-w-0"><span className="text-sm font-semibold text-white">{label}</span><div className={`mt-2 h-1 w-9 rounded-full ${line}`} /></div>
              </button>
            ))}
          </div>

        </header>

        {/* LISTE DES PROJETS : catégories interactives */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-white">{activeFilter === "Tous" ? "Tous les projets" : `Projets — ${activeFilter}`}</h3>
          <span className="text-sm text-slate-400">{filteredProjects.length} projet{filteredProjects.length > 1 ? "s" : ""}</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredProjects.map((projet, index) => {
            const Icon = projet.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-purple-500/20 bg-gradient-to-br from-gray-800/70 to-gray-900/80 backdrop-blur-sm p-6 shadow-xl hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-purple-500/10 transition-all duration-300 flex flex-col min-h-[410px]"
              >

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                {/* HAUT CARTE */}
                <div className="flex items-start justify-between gap-4 mb-6">

                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${projet.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon
                      className="text-white"
                      size={24}
                    />
                  </div>

                  <div className="text-right">

                    <div className="inline-flex items-center gap-2 text-gray-400 text-xs mb-2">
                      <Calendar size={15} />
                      <span>{projet.date}</span>
                    </div>

                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          projet.status === "Terminé"
                            ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                            : "bg-orange-500/15 text-orange-300 border border-orange-500/20"
                        }`}
                      >
                        {projet.status}
                      </span>
                    </div>

                  </div>

                </div>

                {/* CONTENU */}
                <div className="flex-1 flex flex-col">

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                    {projet.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-300 leading-7 mb-5 flex-1">
                    {projet.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2 mb-6">

                    {projet.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-xs bg-purple-600/15 text-purple-200 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* BOUTONS */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">

                    {projet.fullDescription && (
                        <button
                          onClick={() => setSelectedProjet(projet)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:opacity-90 transition-all"
                        >
                          <Eye size={18} />
                          Découvrir le projet
                        </button>
                      )}

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* DETAIL PROJET SCOLAIRE */}
        {selectedProjet && (
          <div ref={detailRef} className="scroll-mt-6 mt-14 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm p-8 md:p-10 shadow-2xl animate-fade-in">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">

              <div>

                <div className="inline-flex items-center gap-2 text-purple-300 text-sm font-medium mb-3">
                  <>
                    <School size={16} />
                    Projet technique
                  </>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">
                  {selectedProjet.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {selectedProjet.date} •{" "}
                  {selectedProjet.status}
                </p>

              </div>

              <button
                onClick={() =>
                  setSelectedProjet(null)
                }
                className="self-start text-gray-400 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>

            </div>

            <div className="text-gray-300 leading-8 text-base md:text-lg mb-8">
              {selectedProjet.fullDescription}
            </div>

            <div className="pt-6 border-t border-white/10">

              <h4 className="text-white font-semibold mb-4">
                Technologies utilisées
              </h4>

              <div className="flex flex-wrap gap-3">

                {selectedProjet.technologies.map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm bg-purple-600/15 text-purple-200 border border-purple-500/20"
                    >
                      #{tech}
                    </span>
                  )
                )}

              </div>

            </div>

          </div>
        )}


      </div>
    </section>
  );
};

export default Projets;