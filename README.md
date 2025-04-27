Temat pracy inżynierskiej:
System monitorowania i analizy sprzedaży oraz danych bankowych Globalnej Korporacji

Cel pracy:
Celem projektu jest stworzenie kompletnego systemu analitycznego umożliwiającego pobieranie, oczyszczanie, przechowywanie i wizualizację danych sprzedażowych oraz bankowych fikcyjnej globalnej korporacji w czasie rzeczywistym. W ramach projektu zostanie przygotowana własna baza danych na potrzeby dużej korporacji zarządzającej sklepami internetowymi (e-commerce) i operacjami bankowymi, co obejmuje lokalną optymalizację baz danych w MS SQL Server (dane strukturyzowane, np. transakcje sprzedażowe i bankowe) i MongoDB (dane elastyczne, np. historie zakupów i transakcji), oczyszczanie danych bankowych za pomocą Pythona i Power Query (np. usuwanie duplikatów, normalizacja), oczyszczanie danych sprzedażowych w chmurze Azure za pomocą Azure Data Factory, przechowywanie ich w Azure SQL Database i Azure Cosmos DB, a następnie wizualizację wyników w Power BI w formie interaktywnego dashboardu wspierającego decyzje biznesowe z możliwością monitorowania w czasie rzeczywistym.

Praktyczność:
Globalne korporacje handlowo-finansowe, zarządzające zarówno sprzedażą, jak i operacjami finansowymi, potrzebują takich narzędzi do monitorowania sprzedaży i przepływów finansowych w czasie rzeczywistym, analizy oczyszczonych danych oraz szybkiego reagowania na trendy i anomalie, np. spadki sprzedaży w określonych kategoriach czy nietypowe transakcje bankowe. Projekt umożliwia analizę kluczowych wskaźników (KPI), takich jak przychód, konwersja, saldo kont firmowych czy korelacja między wydatkami bankowymi a sprzedażą, wykorzystując elastyczność i skalowalność chmury Azure w połączeniu z Pythonem i Power Query do precyzyjnego oczyszczania danych. Rozwiązanie pozwala na efektywne zarządzanie danymi, minimalizując koszty dzięki lokalnej optymalizacji przed wdrożeniem w chmurze.

Technologie:

1. MS SQL Server
   o   Lokalnie: SQL Server Developer (optymalizacja bazy danych).
   o   W chmurze: Azure SQL Database (przechowywanie danych relacyjnych, czyszczenie i analiza SQL).
1. MongoDB
   - Lokalnie: MongoDB Community Edition (optymalizacja bazy nierelacyjnej).
   - W chmurze: Azure Cosmos DB z API MongoDB (przechowywanie danych elastycznych).
1. Azure
   - Azure Blob Storage (przechowywanie surowych danych).
   - Azure Data Factory (czyszczenie danych sprzedażowych i ETL).
   - Azure SQL Database (hosting MS SQL Server).
   - Azure Cosmos DB (hosting MongoDB).
1. Power BI
   - Wizualizacja danych w formie interaktywnych dashboardów.
1. SQL
   - Zarządzanie i analiza danych w MS SQL Server.
1. Python
   - Czyszczenie danych bankowych (za pomocą bibliotek np. Pandas, NumPY)
