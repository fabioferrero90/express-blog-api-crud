<img src="https://lwfiles.mycourse.app/6368e5089f20781a7e4f1805-public/2c162927114072f9ebbf04043a593fb9.png" width="200">
<br>
Trentacinquesimo Esercizio Classe #137 - Boolean

---

Studente: Fabio Ferrero

---
# English

## Target of the project:
**Milestone 1**
As a first step, we create a controller for our posts, in a `controllers.` folder.
Inside, we prepare all the necessary functions and copy into each the logic of the functions that are currently in the router (they only return messages at the moment).
Then we go back to the routing file. Here we import the functions declared in the controller and associate them with the various routes, as seen in class.
We test on postman/thunder-client whether calling the endpoints actually gets the same responses as we had before.
If everything works, we move on to the next milestone
**Milestone 2**
To begin, we create a `data` folder in which to create a file that contains and exports the array of posts you find attached.  We import this file into the top of the controller.
Now let's move on to implementing the logic of our CRUDs:
- Index will have to return the list of posts in JSON format
- Show will have to return a single post in JSON format
- Destroy will have to delete a single post from the list, print in the terminal (`console.log`) the updated list, and respond with a 204 status and no content.
### Bonus.
- Implement a search filter in the index that shows only posts that have a certain Tag.
- In Show and Destroy, check if the parameter refers to an existing post, if not, respond with a 404 status and an error message, again in JSON format.


---
# Italiano

## Obiettivo del progetto:
**Milestone 1**
Come prima cosa, creiamo un controller per i nostri post, in una cartella `controllers.`
All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).
Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
Testiamo su postman/thunder-client se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.
Se tutto funziona, passiamo alla prossima milestone
**Milestone 2**
Per iniziare, creiamo una cartella `data`  in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato.  Importiamo questo file in cima al controller.
Ora passiamo ad implementare le logiche delle nostre CRUD:
- Index dovrà restituire la lista dei post in formato JSON
- Show dovrà restituire un singolo post in formato JSON
- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (`console.log`) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
### Bonus
- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

---

<img src="./cover.jpg">