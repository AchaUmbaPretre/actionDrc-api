-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 11 sep. 2023 à 15:29
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.0

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
  `contrat_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `affectations`
--

INSERT INTO `affectations` (`id`, `fonction_id`, `fonction_clientId`, `emploie_id`, `contrat_id`) VALUES
(78, NULL, 15, 57, 24),
(79, NULL, 15, 55, 24),
(80, NULL, 15, 56, 24);

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
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `affectations`
--
ALTER TABLE `affectations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
