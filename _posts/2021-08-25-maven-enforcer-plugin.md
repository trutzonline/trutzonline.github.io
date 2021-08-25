---
title: Maven Enforcer Plugin
toc: true
tags: maven plugin java
---

Manche Maven Projekte müssen auf bestimmte Betriebsysteme oder mit bestimmten Java Versionen gebaut werden. Oder sie dürfen bestimmte Artefakte nicht als Dependencies haben.

Es kann bei solchen Maven Projekten durchaus passieren, dass die Builds fehlschlagen, weil die Constraints des Builds nicht beachtet wurden. Zum Beispiel wurde das falsche Betriebsystem beim Aufruf von `mvn clean package` verwendet oder ein Entwickler nimmt Dependencies auf, die nicht verwendet werden dürfen.

Hier kommt das [Maven Enforcer Plugin](https://maven.apache.org/enforcer/maven-enforcer-plugin/) ins Spiel. Mit Hilfe dieses Plugins können Constraints wie oben genannt in der `pom.xml` beschrieben werden und werden dann bei jedem Maven Build überprüft. Falls diese Constraints vom Entwickler nicht beachtet wurden, wird eine sprechende Fehlermeldung angezeigt, so dass die Behebung des Problems relativ einfach durchgeführt werden kann.

## Konfiguration

Muss dein Maven Projekt beispielsweise unter Java 11 gebaut werden auf einem Unix-artigen Betriebsystem (zum Beispiel Linux), trage einfach in der `pom.xml` deines Maven Projektes

``` xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-enforcer-plugin</artifactId>
      <executions>
        <execution>
          <id>enforce-versions</id>
          <goals>
            <goal>enforce</goal>
          </goals>
          <configuration>
            <rules>
              <requireJavaVersion>
                <version>11</version>
              </requireJavaVersion>
              <requireOS>
                <family>unix</family>
              </requireOS>
            </rules>
          </configuration>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
```

ein.

## Fehlermeldungen

Baust Du in dem obigen Beispiel das Maven Projekt unter Windows, so liefert Maven folgende Warnmeldung:

``` bash
[WARNING] Rule 1: org.apache.maven.plugins.enforcer.RequireOS failed with message:
OS Arch: amd64 Family: windows Name: windows 10 Version: 10.0 is not allowed by Family=unix
```

und der Build wird abgebrochen. Weitere Rules findest Du unter [Maven Enforcer Rules](https://maven.apache.org/enforcer/enforcer-rules/index.html).

## Deine Umgebung anzeigen

Mit Hilfe des Befehls `mvn enforcer:display-info` erhältst Du die Informationen zu deiner aktuellen Umgebung. Meine Umgebung sieht so aus:

``` bash
[INFO] Maven Version: 3.6.3
[INFO] JDK Version: 11.0.8 normalized as: 11.0.8
[INFO] Java Vendor: Oracle Corporation
[INFO] OS Info: Arch: amd64 Family: windows Name: windows 10 Version: 10.0
```

Falls Dir dieser Artikel gefällt, teile ihn einfach weiter.