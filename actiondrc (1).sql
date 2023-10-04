-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 04 oct. 2023 à 18:14
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `actiondrc`
--

-- --------------------------------------------------------

--
-- Structure de la table `affectations`
--

CREATE TABLE `affectations` (
  `id` int(11) NOT NULL,
  `fonction_id` int(11) DEFAULT NULL,
  `fonction_clientId` int(11) DEFAULT NULL,
  `emploie_id` int(11) NOT NULL,
  `contrat_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `affectations`
--

INSERT INTO `affectations` (`id`, `fonction_id`, `fonction_clientId`, `emploie_id`, `contrat_id`, `created_at`) VALUES
(105, 26, NULL, 85, 37, '2023-10-04 13:51:21'),
(106, 26, NULL, 89, 37, '2023-10-04 13:51:21');

-- --------------------------------------------------------

--
-- Structure de la table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  `check_in_time` time(6) NOT NULL,
  `check_out_time` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `attendance`
--

INSERT INTO `attendance` (`id`, `employee_id`, `client_id`, `date`, `check_in_time`, `check_out_time`) VALUES
(10, 85, 28, '2023-10-04', '08:00:00.000000', '16:00:00.000000'),
(11, 89, 28, '2023-10-04', '08:00:00.000000', '16:00:00.000000');

-- --------------------------------------------------------

--
-- Structure de la table `avantages`
--

CREATE TABLE `avantages` (
  `id` int(11) NOT NULL,
  `avantage_1` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `avantages`
--

INSERT INTO `avantages` (`id`, `avantage_1`) VALUES
(1, 'malade'),
(2, 'transport'),
(3, 'congé payant');

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone_number` varchar(50) NOT NULL,
  `contact_name` varchar(200) NOT NULL,
  `contact_email` varchar(100) NOT NULL,
  `rccm` varchar(255) DEFAULT NULL,
  `idnate` varchar(200) DEFAULT NULL,
  `contact_phone` varchar(15) NOT NULL,
  `apr` varchar(200) DEFAULT NULL,
  `province` varchar(200) NOT NULL,
  `pays` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `company_name`, `address`, `phone_number`, `contact_name`, `contact_email`, `rccm`, `idnate`, `contact_phone`, `apr`, `province`, `pays`) VALUES
(28, 'Bralima', 'Gombe', '+2439943002312', 'Thierry', 'bralima@gmail.com', '12-121BC-A1', '1Ac-2B2', '+24399040000', '2CE-12E-2311', 'Kinshasa', 'RDC'),
(29, 'Bracongo', 'Gombe', '+2439943333233', 'Simon', 'bracongo@gmail.com', '11EB-12BE', '1A-4BE', '+243990402222', '23-A1C-2B', 'Kinshasa', 'RDC'),
(30, 'UtexAfrica', 'Kintambo', '+243994311110', 'Mathieu', 'utexafrica@gmail.com', '12e-16-A21', '1Ac-221C', '+243990000112', '2E-12EC-20', 'Kinshasa', 'RDC'),
(31, 'Scpt', 'Gombe', '+2439943022112', 'Jean', 'scpt@gmail.com', '23E-1C', '1Ac-2B1', '+24399000300', '23-A1C-2BE', 'Kinshasa', 'RDC');

-- --------------------------------------------------------

--
-- Structure de la table `competences`
--

CREATE TABLE `competences` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `competences`
--

INSERT INTO `competences` (`id`, `nom`) VALUES
(1, 'Informaticien'),
(2, 'Mecanicien'),
(3, 'Electricien');

-- --------------------------------------------------------

--
-- Structure de la table `contrats`
--

CREATE TABLE `contrats` (
  `id` int(11) NOT NULL,
  `contract_type` varchar(200) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `duree` varchar(200) DEFAULT NULL,
  `contract_status` varchar(100) NOT NULL,
  `client_id` int(11) NOT NULL,
  `employee_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contrats`
--

INSERT INTO `contrats` (`id`, `contract_type`, `start_date`, `end_date`, `duree`, `contract_status`, `client_id`, `employee_id`) VALUES
(37, 'Journalier', '2023-12-03', '2024-01-03', '1', 'En attente', 28, NULL),
(38, 'Interim', '2023-10-04', '2023-12-04', '2', 'En cours', 28, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `date_of_birth` date NOT NULL,
  `gender` varchar(1) NOT NULL DEFAULT 'h',
  `address` varchar(100) NOT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `identification_number` varchar(45) DEFAULT NULL,
  `etat_civil` varchar(200) NOT NULL,
  `number_inpp` varchar(200) DEFAULT NULL,
  `number_cnss` varchar(200) DEFAULT NULL,
  `nombre_enfant` int(11) DEFAULT 0,
  `identification_type` varchar(255) NOT NULL,
  `skills` varchar(100) NOT NULL,
  `certifications` varchar(100) NOT NULL,
  `employment_status` varchar(50) NOT NULL,
  `contrat_id` int(11) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `est_supprime` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `date_of_birth`, `gender`, `address`, `phone_number`, `email`, `identification_number`, `etat_civil`, `number_inpp`, `number_cnss`, `nombre_enfant`, `identification_type`, `skills`, `certifications`, `employment_status`, `contrat_id`, `source`, `est_supprime`) VALUES
(85, 'Kilolo', 'Tite', '2023-10-03', 'H', 'Ngaliema', '+24399430000', 'tite@gmail.com', '1E11', 'celibataire', '12-12ZA', '1AC-11BC', 4, 'Carte d\'identité', 'Informaticien', 'Licence', 'Interne', 37, '1696422731770-maxim_nguz.PNG', 0),
(86, 'Ndambi', 'Acha', '2023-10-02', 'H', 'Q/debonhomme C/ commune N° 40', '+243994300020', 'achandambi@gmail.com', '113A', 'celibataire', '12-12ZA', '1AC-11BC', 1, 'Carte d\'identité', 'Electricien', 'Licence', 'Interne', NULL, '1696423675225-maxim_nguz.PNG', 0),
(87, 'Malu', 'Miguel', '2023-10-09', 'H', 'Kintambo', '+243994300076', 'miguel@gmail.com', '113A', 'celibataire', '12-12ZA', '1AC-11BC', 0, 'Carte d\'identité', 'Mecanicien', 'Licence', 'Interne', NULL, '1696423886246-patrick.PNG', 1),
(88, 'Malu', 'Miguel', '2023-10-02', 'H', 'Kintambo', '+243994300076', 'miguel@gmail.com', '1E11', 'celibataire', '12-120EB', '1AC-12AAZ', NULL, 'Carte d\'identité', 'Mecanicien', 'Licence', 'Interne', NULL, '1696424769826-patrick.PNG', 0),
(89, 'Kilala', 'Nobel', '2023-10-16', 'F', 'Ngaliema', '+24399430001', 'nobel@gmail.com', '1AC-A2', 'celibataire', '12-1CZ', '21-2CI1', 0, 'Carte d\'identité', 'Informaticien', 'Licence', 'Interne', 37, '1696424890088-nana_manda.PNG', 0),
(90, 'Kalala', 'Rabbi', '2023-10-10', 'H', 'Q/ victoire   C/kalamu N°12', '+243994300002', 'rabbi@gmail.com', '1121EI', 'celibataire', '12-1-zA', '1AC-12V', 0, 'Passport', 'Electricien', 'Licence', 'Interne', NULL, '1696425698491-jeremi_wayway.PNG', 0),
(91, 'Kilulu', 'Grady', '1999-10-02', 'H', 'Nsele', '+243994300111', 'grady@gmail.com', '1AC-AE12', 'celibataire', '12-121EB', '1AC-1BC', 0, 'Permis de conduire', 'Mecanicien', 'Graduat', 'Externe', NULL, '1696426582411-jeremi_wayway.PNG', 0);

-- --------------------------------------------------------

--
-- Structure de la table `fonction`
--

CREATE TABLE `fonction` (
  `id` int(11) NOT NULL,
  `contrat_id` int(11) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  `skills` varchar(255) DEFAULT NULL,
  `avantages` varchar(255) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `salaire` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `fonction`
--

INSERT INTO `fonction` (`id`, `contrat_id`, `client_id`, `skills`, `avantages`, `prix`, `salaire`) VALUES
(26, 37, NULL, '1', 'Transport', 300.00, 200.00),
(27, 38, NULL, '2', 'Malade et transport', 350.00, 300.00);

-- --------------------------------------------------------

--
-- Structure de la table `fonctions`
--

CREATE TABLE `fonctions` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `avantages` text DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `salaire` decimal(10,2) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  `horaire_conge` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `fonctions`
--

INSERT INTO `fonctions` (`id`, `nom`, `avantages`, `prix`, `salaire`, `client_id`, `horaire_conge`) VALUES
(1, 'Informaticien', 'malade, transport, congé payé', 200.00, 180.00, NULL, '20'),
(2, 'Mecanicien', 'Maladie, transport', 200.00, 150.00, NULL, '50'),
(3, 'Nounou', 'Malade, transport', 150.00, 100.00, NULL, '20'),
(4, 'Electricien', 'Malade, transport', 200.00, 150.00, NULL, '30');

-- --------------------------------------------------------

--
-- Structure de la table `fonction_client`
--

CREATE TABLE `fonction_client` (
  `id` int(11) NOT NULL,
  `contrat_id` int(11) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  `skills` varchar(200) DEFAULT NULL,
  `avantages` varchar(255) DEFAULT NULL,
  `prix` decimal(10,0) DEFAULT NULL,
  `salaire` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `horaires`
--

CREATE TABLE `horaires` (
  `id` int(11) NOT NULL,
  `agent_id` int(11) DEFAULT NULL,
  `day_of_week` varchar(10) DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `informations`
--

CREATE TABLE `informations` (
  `id` int(11) NOT NULL,
  `contrat_id` int(11) DEFAULT NULL,
  `nom` varchar(200) DEFAULT NULL,
  `avantages` varchar(255) DEFAULT NULL,
  `prix` varchar(200) DEFAULT NULL,
  `salaire` varchar(200) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `total_amount` int(255) NOT NULL,
  `status` varchar(40) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `invoices`
--

INSERT INTO `invoices` (`id`, `client_id`, `invoice_date`, `due_date`, `total_amount`, `status`, `created_at`) VALUES
(14, 28, NULL, NULL, 600, 'Payée', '2023-10-04 14:56:03');

-- --------------------------------------------------------

--
-- Structure de la table `leave_requests`
--

CREATE TABLE `leave_requests` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `leave_type` varchar(200) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `methode_paiement`
--

CREATE TABLE `methode_paiement` (
  `id` int(11) NOT NULL,
  `nom` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `methode_paiement`
--

INSERT INTO `methode_paiement` (`id`, `nom`) VALUES
(1, 'Espèces'),
(2, 'Chèque'),
(3, 'Virement');

-- --------------------------------------------------------

--
-- Structure de la table `mission`
--

CREATE TABLE `mission` (
  `id` int(11) NOT NULL,
  `agent_id` int(11) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  `heureEntrant` time DEFAULT NULL,
  `heureSortant` time DEFAULT NULL,
  `jour` varchar(200) DEFAULT NULL,
  `site` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `mois`
--

CREATE TABLE `mois` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `jours` int(11) NOT NULL,
  `feries` date DEFAULT NULL,
  `jour_semaine` enum('Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `mois`
--

INSERT INTO `mois` (`id`, `nom`, `jours`, `feries`, `jour_semaine`) VALUES
(1, 'Janvier', 31, NULL, NULL),
(2, 'Février', 28, NULL, NULL),
(3, 'Mars', 31, NULL, NULL),
(4, 'Avril', 30, NULL, NULL),
(5, 'Mai', 31, NULL, NULL),
(6, 'Juin', 30, NULL, NULL),
(7, 'Juillet', 31, NULL, NULL),
(8, 'Août', 31, NULL, NULL),
(9, 'Septembre', 30, NULL, NULL),
(10, 'Octobre', 31, NULL, NULL),
(11, 'Novembre', 30, NULL, NULL),
(12, 'Décembre', 31, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `niveauetude`
--

CREATE TABLE `niveauetude` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `niveauetude`
--

INSERT INTO `niveauetude` (`id`, `titre`) VALUES
(1, 'Licence'),
(2, 'Graduat'),
(3, 'Humanité'),
(4, 'Secondaire'),
(5, 'Primaire');

-- --------------------------------------------------------

--
-- Structure de la table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `payment_date` date NOT NULL,
  `amount` int(11) NOT NULL,
  `payment_method` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE `pays` (
  `id` int(11) NOT NULL,
  `nom` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `pays`
--

INSERT INTO `pays` (`id`, `nom`) VALUES
(1, 'RDC');

-- --------------------------------------------------------

--
-- Structure de la table `province`
--

CREATE TABLE `province` (
  `id` int(11) NOT NULL,
  `nom` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `province`
--

INSERT INTO `province` (`id`, `nom`) VALUES
(1, 'Bas-Uele'),
(2, 'Équateur'),
(3, 'Haut-Katanga'),
(4, 'Haut-Lomami'),
(5, 'Haut-Uele'),
(6, 'Ituri'),
(7, 'Kasaï'),
(8, 'Kasaï central'),
(9, 'Kasaï oriental'),
(10, 'Kinshasa'),
(11, 'Kongo-Central'),
(12, 'Kwango'),
(13, 'Kwilu'),
(14, 'Lomami'),
(15, 'Lualaba'),
(16, 'Mai-Ndombe'),
(17, 'Maniema'),
(18, 'Mongala'),
(19, 'Nord-Kivu'),
(20, 'Nord-Ubangi'),
(21, 'Sankuru'),
(22, 'Sud-Kivu'),
(23, 'Sud-Ubangi'),
(24, 'Tanganyika'),
(25, 'Tshopo'),
(26, 'Tshuapa');

-- --------------------------------------------------------

--
-- Structure de la table `salaire`
--

CREATE TABLE `salaire` (
  `id` int(11) NOT NULL,
  `montant` decimal(10,2) NOT NULL,
  `fonction_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `sites`
--

CREATE TABLE `sites` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `nom_site` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `sites`
--

INSERT INTO `sites` (`id`, `client_id`, `nom_site`) VALUES
(31, 26, 'Ngaliema'),
(32, 26, 'Gombe'),
(33, 27, 'Maluku av.mbiza'),
(34, 27, 'Kintambo');

-- --------------------------------------------------------

--
-- Structure de la table `sites_travail`
--

CREATE TABLE `sites_travail` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `avenue` varchar(255) NOT NULL,
  `quartier` varchar(255) NOT NULL,
  `commune` varchar(255) NOT NULL,
  `numero` varchar(200) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `sites_travail`
--

INSERT INTO `sites_travail` (`id`, `client_id`, `avenue`, `quartier`, `commune`, `numero`, `description`) VALUES
(2, 28, 'Lalu', 'Kinshasa', 'Ngaliema', '40', 'Non loin de meteo');

-- --------------------------------------------------------

--
-- Structure de la table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `nom_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `status`
--

INSERT INTO `status` (`id`, `nom_status`) VALUES
(1, 'Interne'),
(2, 'Externe');

-- --------------------------------------------------------

--
-- Structure de la table `statuscontrat`
--

CREATE TABLE `statuscontrat` (
  `id` int(11) NOT NULL,
  `nomContrat` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `statuscontrat`
--

INSERT INTO `statuscontrat` (`id`, `nomContrat`) VALUES
(14, 'Actif'),
(15, 'Terminé'),
(16, 'Resilié');

-- --------------------------------------------------------

--
-- Structure de la table `statusmontant`
--

CREATE TABLE `statusmontant` (
  `id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `statusmontant`
--

INSERT INTO `statusmontant` (`id`, `status`) VALUES
(1, 'En attente'),
(2, 'Payée');

-- --------------------------------------------------------

--
-- Structure de la table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `contract_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `task_description` varchar(255) NOT NULL,
  `task_date` date NOT NULL,
  `task_hours` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `typecontrat`
--

CREATE TABLE `typecontrat` (
  `id` int(11) NOT NULL,
  `nom` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `typecontrat`
--

INSERT INTO `typecontrat` (`id`, `nom`) VALUES
(1, 'CDD'),
(2, 'CDI'),
(5, 'Interim'),
(6, 'Journalier');

-- --------------------------------------------------------

--
-- Structure de la table `type_piece`
--

CREATE TABLE `type_piece` (
  `id` int(11) NOT NULL,
  `nom_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `type_piece`
--

INSERT INTO `type_piece` (`id`, `nom_type`) VALUES
(1, 'Carte d\'identité'),
(2, 'Passport'),
(3, 'Permis de conduire');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `img`, `password`, `role`) VALUES
(2, 'acha', 'achandambi@gmail.com', NULL, '$2a$10$lE2U3ncvDpXGpTjaSvO2Je4RNtviPPRLAM6B.hk4CbcQP1oPseKbW', 0);

-- --------------------------------------------------------

--
-- Structure de la table `weekdays`
--

CREATE TABLE `weekdays` (
  `id` int(11) NOT NULL,
  `days` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `weekdays`
--

INSERT INTO `weekdays` (`id`, `days`) VALUES
(2, 'Lundi'),
(3, 'Mardi'),
(4, 'Mercredi'),
(5, 'Jeudi'),
(6, 'Vendredi'),
(7, 'Samedi'),
(8, 'Dimanche');

-- --------------------------------------------------------

--
-- Structure de la table `work_schedule`
--

CREATE TABLE `work_schedule` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `weekday` varchar(40) NOT NULL,
  `start_time` time(6) NOT NULL,
  `end_time` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `affectations`
--
ALTER TABLE `affectations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emploie_id` (`emploie_id`),
  ADD KEY `contrat_id` (`contrat_id`),
  ADD KEY `fonction_id` (`fonction_id`),
  ADD KEY `fonction_clientId` (`fonction_clientId`);

--
-- Index pour la table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`),
  ADD KEY `clientId` (`client_id`);

--
-- Index pour la table `avantages`
--
ALTER TABLE `avantages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `competences`
--
ALTER TABLE `competences`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contrats`
--
ALTER TABLE `contrats`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contrat_id` (`contrat_id`);

--
-- Index pour la table `fonction`
--
ALTER TABLE `fonction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contrat_id` (`contrat_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Index pour la table `fonctions`
--
ALTER TABLE `fonctions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Index pour la table `fonction_client`
--
ALTER TABLE `fonction_client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contrat_id` (`contrat_id`);

--
-- Index pour la table `horaires`
--
ALTER TABLE `horaires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `agent_id` (`agent_id`);

--
-- Index pour la table `informations`
--
ALTER TABLE `informations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contrat_id` (`contrat_id`);

--
-- Index pour la table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Index pour la table `leave_requests`
--
ALTER TABLE `leave_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Index pour la table `methode_paiement`
--
ALTER TABLE `methode_paiement`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `agent_id` (`agent_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Index pour la table `mois`
--
ALTER TABLE `mois`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `niveauetude`
--
ALTER TABLE `niveauetude`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoice_id` (`invoice_id`);

--
-- Index pour la table `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `province`
--
ALTER TABLE `province`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `salaire`
--
ALTER TABLE `salaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fonction_id` (`fonction_id`);

--
-- Index pour la table `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Index pour la table `sites_travail`
--
ALTER TABLE `sites_travail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Index pour la table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `statuscontrat`
--
ALTER TABLE `statuscontrat`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `statusmontant`
--
ALTER TABLE `statusmontant`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contract_id` (`contract_id`),
  ADD KEY `employee` (`employee_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Index pour la table `typecontrat`
--
ALTER TABLE `typecontrat`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type_piece`
--
ALTER TABLE `type_piece`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `weekdays`
--
ALTER TABLE `weekdays`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `work_schedule`
--
ALTER TABLE `work_schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`),
  ADD KEY `clienId` (`client_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `affectations`
--
ALTER TABLE `affectations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT pour la table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `avantages`
--
ALTER TABLE `avantages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT pour la table `competences`
--
ALTER TABLE `competences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `contrats`
--
ALTER TABLE `contrats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT pour la table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT pour la table `fonction`
--
ALTER TABLE `fonction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `fonctions`
--
ALTER TABLE `fonctions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `fonction_client`
--
ALTER TABLE `fonction_client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `horaires`
--
ALTER TABLE `horaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `informations`
--
ALTER TABLE `informations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `leave_requests`
--
ALTER TABLE `leave_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `methode_paiement`
--
ALTER TABLE `methode_paiement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `mission`
--
ALTER TABLE `mission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT pour la table `mois`
--
ALTER TABLE `mois`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `niveauetude`
--
ALTER TABLE `niveauetude`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `pays`
--
ALTER TABLE `pays`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `province`
--
ALTER TABLE `province`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `salaire`
--
ALTER TABLE `salaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `sites`
--
ALTER TABLE `sites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT pour la table `sites_travail`
--
ALTER TABLE `sites_travail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `statuscontrat`
--
ALTER TABLE `statuscontrat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `statusmontant`
--
ALTER TABLE `statusmontant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `typecontrat`
--
ALTER TABLE `typecontrat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `type_piece`
--
ALTER TABLE `type_piece`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `weekdays`
--
ALTER TABLE `weekdays`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `work_schedule`
--
ALTER TABLE `work_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `affectations`
--
ALTER TABLE `affectations`
  ADD CONSTRAINT `affectations_ibfk_2` FOREIGN KEY (`emploie_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `affectations_ibfk_3` FOREIGN KEY (`contrat_id`) REFERENCES `contrats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `affectations_ibfk_4` FOREIGN KEY (`fonction_id`) REFERENCES `fonction` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `affectations_ibfk_5` FOREIGN KEY (`fonction_clientId`) REFERENCES `fonction_client` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `clientId` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employeeId` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`contrat_id`) REFERENCES `contrats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employees_ibfk_2` FOREIGN KEY (`contrat_id`) REFERENCES `contrats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `fonction`
--
ALTER TABLE `fonction`
  ADD CONSTRAINT `fonction_ibfk_1` FOREIGN KEY (`contrat_id`) REFERENCES `contrats` (`id`),
  ADD CONSTRAINT `fonction_ibfk_2` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

--
-- Contraintes pour la table `fonctions`
--
ALTER TABLE `fonctions`
  ADD CONSTRAINT `fonctions_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `fonction_client`
--
ALTER TABLE `fonction_client`
  ADD CONSTRAINT `fonction_client_ibfk_1` FOREIGN KEY (`contrat_id`) REFERENCES `contrats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `horaires`
--
ALTER TABLE `horaires`
  ADD CONSTRAINT `horaires_ibfk_1` FOREIGN KEY (`agent_id`) REFERENCES `employees` (`id`);

--
-- Contraintes pour la table `informations`
--
ALTER TABLE `informations`
  ADD CONSTRAINT `informations_ibfk_1` FOREIGN KEY (`contrat_id`) REFERENCES `contrats` (`id`);

--
-- Contraintes pour la table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `mission`
--
ALTER TABLE `mission`
  ADD CONSTRAINT `mission_ibfk_2` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

--
-- Contraintes pour la table `sites`
--
ALTER TABLE `sites`
  ADD CONSTRAINT `sites_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `sites_travail`
--
ALTER TABLE `sites_travail`
  ADD CONSTRAINT `sites_travail_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
