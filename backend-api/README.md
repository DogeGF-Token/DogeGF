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

`Marketing & Community Available Addresses:`
- 0x6eCD8a67Ee7e4418374438EF092a3112ed2280d7
- 0xB9Cebf54cF4Ba7bAE70d7b30B120D1Fe4bf1875c
- 0xd0AD8EC297487280B7b5dFbF14e6aB31289687E8
- 0x73C6DA31Fd1Fa9d5028bd33C766a206f258182D4
- 0x8D4da1D47164b5F0a4066b770524CBE98a6cD66F

## Definition

`Total Supply` = Max Supply - Burn Token Amount

`Circulating Supply = Total Supply` - Lock Token Amount - Marketing & Community Available Amount

`Lock Token Amount` = Marketing & Community Lock Amount + Team Funds Lock Amount
