# Browser Technologies Chris Gabriel III - Minor Web


## Opdracht - Maak een demo op basis van een user story
Zorg dat de gebruikers met alle browsers minimaal de core functionaliteit hebben en maximaal een hele goede user experience.

Je moet de demo op 3 lagen bouwen met het principe van Progressive enhancement.
-doe onderzoek naar welke features op verschillende browsers werken.
-hoe je goede fallback hebt als een feature niet ondersteund wordt.
-je features moet je vervolgens ook testen op een obscure browser.

## User story - Nerdy T-shirt
"Ik wil mijn eigen t-shirt met nerdy tekst kunnen ontwerpen, opslaan, bestellen en een volgende keer dat ik de site bezoek kunnen gebruiken.

## Eisen
- Gegevens maker (naam, telefoon of email)
- Kleur t-shirt
- Tekst t-shirt
- Maat t-shirt
- M/v
- Afbeelding toevoegen
- Verder gaan waar je gebleven bent/ontwerp herzien
- Validatie
- Meerdere shirten kunnen maken en herzien
- Bestel pagina


### Houd tijdens ontwerpen in gedachte:
- Doe onderzoek naar semantische HTML elementen
- Kijk voor de usable laag naar gebruikvsvriendelijkheid en design patterns die je zou kunnen toepassen
- De meeste enhanced versie moet gaaf zijn en prettig werken.

# [link naar de Demo](https://chrisvanhva.github.io/browser-technologies/)

#Ontwerproces

In de eerste week ging ik nadenken hoe ik deze opdracht kon uitwerken in code, ik begon met wireframe tekeningen van de "bestel" pagina en hoe het er uit zou zien met alleen HTML, en daarna met CSS/JS.  
![image](https://github.com/ChrisvanHvA/browser-technologies/assets/90341211/603a95bb-16f7-48ba-810d-afc996960201)

De kleuren had ik radiobuttons gemaakt, voor de text op de shirt had ik in gedachte om een textarea te gberuiken en daarna de rest van de opties weer met radio buttons.  
Radio buttons zijn best vriendelijk om te gebruiken voor alle browsers en kunnen daarna met styling ook nog wat mooier gemaakt worden, als css volledig ondersteunt is kan ik ook een voorbeeld laten zien van het shirt, maar waar de webkit filters niet gesupport worden krijg je alsnog een gekleurd vak te zien.

Mijn idee was om 4 pagina's te maken:
1. Design page
2. Overzicht page
3. Order page
4. Server page

Wanneer de gebruiker geen JS heeft, kunnen de gegevens van het shirt niet doorgestuurd worden, de gebruiker wordt dan naar een andere pagina gebracht waarbij je verteld wordt dat het designen van een shirt niet mogelijk is, het geeft je nog wel de optie om naar de bestel pagina te gaan zodat je alsnog door de applicatie heen kan gaan.

Voor de order page had ik de gedachte om van alles text inputs te maken omdat deze ook al vrij oud zijn en ondertussen bijna overal wel ondersteunt worden.
met de CSS styling er bij ziet de site er een stuk netter uit, en krijg je weer een preview.
![image](https://github.com/ChrisvanHvA/browser-technologies/assets/90341211/0bd07a40-4665-4889-909a-cf835a4650c6)

## Gebruik browsers
De demo heb ik gemaakt in Chrome en is ook het meest afgestemd voor deze browser, hiernaast heb ik op android getest
![image](https://github.com/ChrisvanHvA/browser-technologies/assets/90341211/43d73998-0e27-48da-8ecc-28896fdf941c)

![image](https://github.com/ChrisvanHvA/browser-technologies/assets/90341211/987d4ac1-3c20-4ec8-8f1d-f0308def289f)

De webkit filters waren niet ondersteund waardoor de preview alleen een andere achtergrondkleur kreeg, ik vond dit nog wel duidelijk genoeg voor de gebruiker om er niet veel verandering aan te maken.

##narrator test 
Ik heb de ingebouwde narrator getest op de demo site, alhoewel de hierarchy klopte was het soms nog wel moeilijk om perfect door de site heen te komen omdat radio buttons vaak snel overgeslagen worden door de tab functie, maar iemand die meer ervaring heeft met de narrator zal wel begrijpen hoe je een radio button menu moet doorbrowsen. 
Ook realiseerde ik dat ik nog een paar image names miste die ik nog moest toepassen.


