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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `fonction_client`
--

INSERT INTO `fonction_client` (`id`, `contrat_id`, `client_id`, `skills`, `avantages`, `prix`, `salaire`) VALUES
(4, 24, NULL, '3', 'Malade et transport', '300', '200'),
(5, 24, NULL, '3', 'Malade et transport', '300', '200'),
(6, 24, NULL, '1', 'Transport', '400', '300'),
(7, 24, NULL, '1', 'Transport', '400', '300'),
(8, 24, NULL, '3', 'Transport', '500', '400'),
(9, 24, NULL, '1', 'Transport', '400', '350'),
(10, 24, NULL, '1', 'Transport', '500', '350'),
(11, 24, NULL, '1', 'Transport', '400', '390'),
(12, 24, NULL, '1', 'Transport', '800', '600'),
(13, 24, NULL, '1', 'Transport', '600', '400'),
(14, 24, NULL, '1', 'Transport', '400', '260'),
(15, 24, NULL, '1', 'Transport', '700', '600');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `fonction_client`
--
ALTER TABLE `fonction_client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contrat_id` (`contrat_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `fonction_client`
--
ALTER TABLE `fonction_client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `fonction_client`
--
ALTER TABLE `fonction_client`
  ADD CONSTRAINT `fonction_client_ibfk_1` FOREIGN KEY (`contrat_id`) REFERENCES `contrats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
