# Temat pracy inżynierskiej:

System monitorowania i analizy sprzedaży oraz danych bankowych Globalnej Korporacji

## Cel pracy:

Celem projektu jest stworzenie kompletnego systemu analitycznego umożliwiającego pobieranie, oczyszczanie, przechowywanie i wizualizację danych sprzedażowych oraz bankowych fikcyjnej globalnej korporacji w czasie rzeczywistym. W ramach projektu zostanie przygotowana własna baza danych na potrzeby dużej korporacji zarządzającej sklepami internetowymi (e-commerce) i operacjami bankowymi, co obejmuje lokalną optymalizację baz danych w MS SQL Server (dane strukturyzowane, np. transakcje sprzedażowe i bankowe) i MongoDB (dane elastyczne, np. historie zakupów i transakcji), oczyszczanie danych bankowych za pomocą Pythona i Power Query (np. usuwanie duplikatów, normalizacja), oczyszczanie danych sprzedażowych w chmurze Azure za pomocą Azure Data Factory, przechowywanie ich w Azure SQL Database i Azure Cosmos DB, a następnie wizualizację wyników w Power BI w formie interaktywnego dashboardu wspierającego decyzje biznesowe z możliwością monitorowania w czasie rzeczywistym.

## Praktyczność:

Globalne korporacje handlowo-finansowe, zarządzające zarówno sprzedażą, jak i operacjami finansowymi, potrzebują takich narzędzi do monitorowania sprzedaży i przepływów finansowych w czasie rzeczywistym, analizy oczyszczonych danych oraz szybkiego reagowania na trendy i anomalie, np. spadki sprzedaży w określonych kategoriach czy nietypowe transakcje bankowe. Projekt umożliwia analizę kluczowych wskaźników (KPI), takich jak przychód, konwersja, saldo kont firmowych czy korelacja między wydatkami bankowymi a sprzedażą, wykorzystując elastyczność i skalowalność chmury Azure w połączeniu z Pythonem i Power Query do precyzyjnego oczyszczania danych. Rozwiązanie pozwala na efektywne zarządzanie danymi, minimalizując koszty dzięki lokalnej optymalizacji przed wdrożeniem w chmurze.

## Technologie:

1. MS SQL Server
   - Lokalnie: SQL Server Developer (optymalizacja bazy danych).
   - W chmurze: Azure SQL Database (przechowywanie danych relacyjnych, czyszczenie i analiza SQL).
2. MongoDB
   - Lokalnie: MongoDB Community Edition (optymalizacja bazy nierelacyjnej).
   - W chmurze: Azure Cosmos DB z API MongoDB (przechowywanie danych elastycznych).
3. Azure
   - Azure Blob Storage (przechowywanie surowych danych).
   - Azure Data Factory (czyszczenie danych sprzedażowych i ETL).
   - Azure SQL Database (hosting MS SQL Server).
   - Azure Cosmos DB (hosting MongoDB).
4. Power BI
   - Wizualizacja danych w formie interaktywnych dashboardów.
5. SQ
   - Zarządzanie i analiza danych w MS SQL Server.
6. Python
   - Czyszczenie danych bankowych (za pomocą bibliotek np. Pandas, NumPY)
   - Automatyzacja transferu danych do Azure (za pomocą Azure SDK dla Pythona)
   - Skrypty do zasilania Azure SQL Database i Azure Blob Storage
   - Walidacja i transformacja danych przed załadowaniem do baz docelowych
   - Biblioteki wymagane:
     * Podstawowe: pandas, numpy, python-dotenv
     * Azure SDK: azure-storage-blob, azure-identity
     * Bazy danych: pyodbc (lub sqlalchemy)
     * Web i API: Flask, Flask-WTF
     * Obsługa plików: csv, json
   - Biblioteki dodatkowe (w razie potrzeby):
     * Analiza zaawansowana: scipy, scikit-learn
     * Wizualizacja: matplotlib, seaborn
     * Azure rozszerzone: azure-cosmos, azure-mgmt-sql, azure-keyvault-secrets
     * Bazy danych dodatkowe: pymongo
     * Web i API rozszerzone: Flask-RESTful, Flask-SQLAlchemy, requests
     * Walidacja danych: Great Expectations, pandera
     * Obsługa plików zaawansowana: openpyxl, xlrd
     * Narzędzia pomocnicze: logging, tqdm
     * Testowanie: pytest, unittest
     * Bezpieczeństwo: cryptography, azure-keyvault
     * Monitorowanie: opencensus-ext-azure, applicationinsights
     * Zadania asynchroniczne (jeśli potrzebne): celery, redis
7. Flask
   - Implementacja panelu administracyjnego w postaci aplikacji webowej
   - Obsługa formularzy do wprowadzania i edycji danych
   - Integracja z Azure SDK dla Pythona do bezpośredniego wstawiania danych
   - REST API do komunikacji z usługami Azure

## Architektura systemu:

1. **Warstwa danych źródłowych**
   - Lokalne bazy danych (SQL Server, MongoDB)
   - Pliki źródłowe (CSV, JSON, Excel)
   - Systemy zewnętrzne dostarczające dane
   - Panel administracyjny Flask do ręcznego wprowadzania i edycji danych

2. **Warstwa transferu i przechowywania**
   - Skrypty Pythona do automatycznego przesyłania danych
   - Azure Blob Storage do przechowywania danych niestrukturyzowanych
   - Azure Data Factory do orkiestracji przepływów danych
   - Flask API do bezpośredniego wstawiania danych do Azure SQL i Azure Blob Storage

3. **Warstwa przetwarzania**
   - Procesy ETL w Azure Data Factory
   - Skrypty Python do czyszczenia i transformacji danych
   - Procedury SQL do analizy i agregacji
   - Middleware Flask do walidacji danych przed zapisem

4. **Warstwa magazynowania**
   - Azure SQL Database - dane strukturalne
   - Azure Cosmos DB - dane niestrukturalne i elastyczne

5. **Warstwa analityczna i prezentacji**
   - Power BI - raportowanie i wizualizacja
   - Aplikacja webowa Flask do monitorowania - panel zarządzania danymi
   - Interaktywne formularze do wstawiania danych do Azure
