# DogeGF API

The API for Total and Circulating Supply of DOGEGF token.

## API Reference

#### Get Total Supply

```http
  GET /api/total-supply
```

#### Get Circulating Supply

```http
  GET /api/circulating-supply
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`PROVIDER_URL`

## Contract Information

`Contract Address:` 0xfb130d93e49dca13264344966a611dc79a456bc5

`Burn Token Address:` 0xdead000000000000000042069420694206942069

`Lock Token Address:` 0xdba68f07d1b7ca219f78ae8582c213d975c25caf

`Marketing & Community Avaliable Address:` 0x6eCD8a67Ee7e4418374438EF092a3112ed2280d7

## Definition

`Total Supply` = Max Supply - Burn Token Amount

`Circulating Supply = Total Supply` - Lock Token Amount - Marketing & Community Available Amount

`Lock Token Amount` = Marketing & Community Lock Amount + Team Funds Lock Amount
