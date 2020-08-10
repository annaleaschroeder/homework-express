#homework-express

##First steps:

- npm install
- add .prettierrc:

```
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "useTabs": false
}
```

###HTML-Inteface:

- Input, um Studenten hinzu zu fügen
- Submit-Button, um den Input abzuschicken
- Button-Show-Students, um alle Studenten und deren IDs anzuzeigen
- Bereich, in dem wir alle Studenten samt IDs anzeigen

* 4 Energy-Buttons: 25%, 50%, 75%, 100%
* Button (ShowEnergyData)
* Feld, in dem wir die vom Server zurück gegebenen Energy-Daten eintragen lassen können (Card?)

###Get-Funktionen: Wo rufen wir get auf (wo holen wir uns Daten vom Server?):

- ButtonShowStudents, um alle Studenten anzuzeigen
- Button ShowEnergyData

###Post-Funtionen: Wo posten wir Daten an den Server?

- Submit-Button
- Energy-Buttons

Montag. 10.08.2020 - Excercise

1. Wir möchten, dass unsere App mit unserer MongoDB Datenbank kommuniziert.

-

2. Zu unserer Datenbank „student-companion-app“ eine collection „journals“ hinzufügen.

-

3. Mongoose installieren \$’npm install mongoose’ (Aufbauend auf MongoDB, was bereits global installiert ist)

4. Schema für unsere Datenbank „student-companion-app“ ein Model für die Collections: „journals“,„energy“,„students“ hinzufügen und formatieren.

- journals: {
  timestamp: Date
  rating: Number-int
  comprehension: Number-int
  motto: String
  notes: String
  studentId: String
  }
- energy {
  timestamp: Date
  value: Number-int
  studentId: String
  }
- students {
  name: String
  }
  Anlegen der Models im directory „Models“ auf der äußersten Ebene. / Die Files der Models nach folgendem Beispiel: „Journal.js“

5. Routen für die Connections erstellen (Siehe Aufgabenstellung).

6.

Journal im HTML schreiben
