flowchart TD
    A([Klant / Ondernemer]):::actor -->|Aanleveren van financiële data| B((Gegevens))
    B -->|Aanleveren van documenten| C[Boekhouder / Administratief medewerker]
    C -->|Administratief informatie| B
    C --> D{Verwerking van administratie (Exact)}:::decision
    D -->|Ja| E[Boekingen verwerkt]
    D -->|Nee| F[Gegevens afgewezen]
    F -->|Klant verzoeken om juiste gegevens| B

    E --> G[Periodieke afsluiting]
    G --> H[Rapportages, BTW aangifte en financiële rapporten (jaarrekening)]
    H -->|Controleert en keurt de financiële cijfers goed| I[Accountant]:::role

    I -->|Gecontroleerde cijfers| J[Business Controller]:::role
    B -->|Forecast data| J
    J -->|Analyseren en opmaken van budgetten en forecasting| K[Budgeting and Forecasting]
    K -->|Verzoek om goedkeuring| A
    A -->|Goedkeuring| K

    J -->|Actuele gegevens| H
    I -->|Samenwerking voor controle| L[Fiscalist]:::role
    L -->|Fiscale advisering| M[Financieel Adviseur]:::role
    A -->|Financieel advies| M
    M -->|Fiscale advisering| L
