# aquasoft_backend_task2
- npx express-generator (genereaza automat o aplicatie express, comanda valabila pentru node.js 8.2.0 sau mai nou)
Comenzi necesare:
- npm i

Task-ul pentru back-end consta in crearea unui proiect Express cu urmatoarele cerinte:

1. Instalare Node, npm, express
2. instalare mysql
3. crearea unei baze de date formata din 2 tabele, cu structura de mai jos
4. inserarea unor date de test in baza de date
5. crearea proiectului express care sa acceseze aceasta baza de date utilizand modulul sequelize
6. crearea serviciilor REST pentru fiecare dintre aceste tabele: 2 rute GET (extragerea tuturor elementelor, atat pentru angajati cat si pentru proiecte), 2 rute POST (inserarea unui nou proiect/angajat), 2 rute PUT (update pe un proiect/angajat dupa primary key), 2 rute DELETE (remove dupa primary key)
7. testarea serviciilor REST folosind Postman sau Advanced REST Client

Hint: 
Pentru a testa POST/PUT este necesar sa scrieti niste linii de cod suplimentare in index.js/app.js, altfel req.body va fi undefined. Daca nu le gasiti, ne scrieti.

Intrucat acest task se va extinde pe o durata de cateva zile, va incurajam sa puneti proiectul express pe git, sa faceti push cu progresul vostru zilnic chiar daca nu este complet functional.

Ar fi de preferat sa creati foldere separate pentru modele si rute si sa nu scrieti tot codul in app.js, pentru a fi mai structurat.

Tabelele vor avea urmatoarea structura:

1. Projects
Id
Project_name varchar
Start_date datetime
Planned_end_date datetime
Description varchar
Project_code varchar

2. Employees
Id
Name varchar
Email varchar
Hire_date datetime
Salary 
Job_Title varchar
Project_id FOREIGN KEY