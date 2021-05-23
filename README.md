# ENSAT-CLUBS-NEWS
L'objectif est de faire une plateforme de référence d’interaction entre les clubs et les élèves de l’ENSAT. L’espace sera géré par un admin qui est en relation avec les chargés de communication des clubs. Ensemble, ils publieront du contenu relatif ( des news, des invitations, etc..) aux clubs. 
## Public Ciblé 
 les étudiants de l’ensat
## But
Faciliter la communication entre les clubs et les élèves
## Vidéo de Demo du Rendu Final
[lien vers la vidép de demo](https://youtube.com)
## Rapport
[Lien vers le rapport](https://drive.google.com)
## Cahier de Charges 
club =categorie
article = contenu = event = news = etc
###### Administrateur (espace administrateur ) 
L’administrateur peut être une personne désignée par l’ensemble des clubs pour le gestion de la plateforme
-Ajouter un club
-Supprimer un club
- Publier/Ajouter un article  dans l’espace d’un club 
-Supprimer un article
-Modifier un article 
- Classer les articles selon leur type ( récent, populaire,plus vues, breaking news ): subcategory
###### Utilisateur / étudiants
-Lire un article
-Rechercher un article avec des mots clés
-Voir les articles récents, les plus populaires
-s’abonner  à la newsletter de la plateforme
######  Système
-Envoyer des mails quotidiens aux étudiants

## Diagramme de cas d'utilisation
[Link to use case diagram ](https://online.visual-paradigm.com/community/share/untitled-diagram-jrdk108ce)

## Stack Utilisé
* MongoDB
* NodeJs
* Npm

## Outils Agiles
* Trello [Link to Trello](https://google.com)
* Whatsapp
* Github

## Installation
Installer tous les modules mentionnés dans le fichier package.json en tapant la commande suivante
depuis le dossier du projet
```
npm install
```
Changer web push publicVapidKey, privateVapidKey et Email dans  index.js. Sample code:
```
const publicVapidKey = "<PublicKey>";  
const privateVapidKey  = "<PrivateKey>;  
webpush.setVapidDetails('mailto:<YourEmail>', publicVapidKey, privateVapidKey);
```  
## Deployement
Utiliser une base de données Mongodb soit en local soit dans le cloud.
ET Changer  le  db url dans  /models/db.js pour le lien vers votre base de données (ex : localhost:port)
```
await mongoose.connect('<DBurl>', { useNewUrlParser: true, useUnifiedTopology: true });  
Change all the session store url values to your DB url connection in all pages at directory /admin/*

router.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        url: 'DBurl',
    })
}));
 ```
Changer Google recaptcha Secret key pour le votre dans /routes/home.js
```
const secretKey = '<SecretKey>';
  ```
Changer email verifier module API key pour le votre dans  /routes/newsletter.js
```
let verifier = new Verifier("<YourKey>");
```
