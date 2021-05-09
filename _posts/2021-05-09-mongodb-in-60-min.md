---
title: MongoDB in 60 Minuten
toc: true
tags: mongodb beginner tutorial
---

## Einführung

{% include video id="ZTpT3B1hReM" provider="youtube" %}

Du lernst in diesem Kurs die Grundlagen von MongoDB kennen. Am Ende des Kurses erreichst Du folgende

### Lernziele

- Du lernst die Grundkonzepte von MongoDB,
- die CRUD Operationen sind Dir wohlvertraut,
- beim Suchen von Dokumenten verwendest Du Indizes um die Performance zu verbessern,
- mit dem `writeConcern` wägst Du zwischen Performance und Sicherheit beim Einfügen und Aktualisieren von Dokumenten ab,
- Du kannst Testdaten mit Hilfe von `mgeneratejs` erzeugen und mit `mongoimport` in eine Collection importieren,
- die Verwendung des `$set` Operators beim Aktualisieren von Dokumenten ist Dir bekannt und
- beim Löschen von Dokumenten kennst Du den Unterschied zwischen `remove()` und `drop()`.

Ein gutes Verständnis der erweiterten Funktionen von MongoDB setzt voraus, dass Du solide Basiskenntnisse hast. Diese erhältst Du mit diesem Kurs.

## Warum MongoDB?

{% include video id="7IFFI8SaxJM" provider="youtube" %}

Warum solltest du MongoDB in deinen Software Projekten verwenden?

- MongoDB ist eine NoSQL Datenbank,
- sie kann horizontal skalieren und damit extrem viele Daten aufnehmen,
- sie ist dokumenten-orientiert und benötigt damit keine Joins,
- Suchen werden verglichen mit SQL Datenbanken performater ausgeführt,
- beim Einfügen und beim Aktualisieren von Dokumenten kann zwischen Performance und Sicherheit abgewogen werden und 
- MongoDB ist entwickler-freundlich.

## Installation

{% include video id="ReDxb3yxOIM" provider="youtube" %}

Installiere bitte 
- die [MongoDB Community Server Version](https://www.mongodb.com/try/download/community) und 
- die [Database Tools](https://www.mongodb.com/try/download/database-tools) von MongoDB.

Die Database Tools beinhalten das `mongoimport` Kommando mit dem Massendaten nach MongoDB importiert werden können. Dieses Kommando wirst Du in den späteren Lektionen benötigen.
