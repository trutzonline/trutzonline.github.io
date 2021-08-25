---
title: Maven Enforcer Plugin
toc: true
tags: maven plugin
---

## Problem

Manche Maven Projekte müssen auf bestimmte Betriebsysteme oder mit bestimmten Java Versionen gebaut werden. Oder sie dürfen bestimmte Artefakte nicht als Dependencies haben. Entwickler, die diese Constrains nicht kennen und das Maven Projekt auf dem falschen Betriebsystem zum Beispiel bauen, müssen dann meistens aufwendige Fehlersuche betreiben.

Hier kommt das [Maven Enforcer Plugin](https://maven.apache.org/enforcer/maven-enforcer-plugin/) ins Spiel.

