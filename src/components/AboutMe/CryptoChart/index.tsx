import { forwardRef, useEffect, useState } from "react";
import Image from "next/image";
import { BaseGridStyle, GridContent, GridTitle } from "../util";
import { CryptoContent, CryptoIcon, CryptoPrice } from "./style";
import environment from "@/configuration/environment";
import EthIcon from "@/assets/images/eth.png";
import { ReferencePointer } from "@/utils/type";

const CryptoChart = ({}, ref: ReferencePointer) => {
  const historicalMode = true;
  const [tokenPrice, setTokenPrice] = useState<string>("0");
  const [pump, setPump] = useState<boolean>(true);

  const fetchEthPrice = async () => {
    if (!window.location.origin.includes("localhost")) {
      try {
        // https://build.portals.fi/dashboard
        const response = await fetch(
          "https://api.portals.fi/v2/tokens?search=eth&platforms=native&networks=ethereum",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + environment.PORTAL_API_KEY,
            },
          }
        );
        const data = await response.json();
        setTokenPrice(data.tokens[0].price);
      } catch (error) {
        setTokenPrice("Error");
      }
    }
  };

  const fetchHistoricalPrice = async () => {
    if (!window.location.origin.includes("localhost")) {
      try {
        // https://min-api.cryptocompare.com/documentation?key=Historical&cat=dataHistoday
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=2&api_key=${environment.MIN_CRYPTO_API_KEY}`
        );
        const data = await response.json();
        const listOfPrices = data.Data.Data;
        const latestPrice = listOfPrices[listOfPrices.length - 1].close;
        const previousPrice = listOfPrices[listOfPrices.length - 2].close;

        setPump(latestPrice >= previousPrice);
        setTokenPrice(latestPrice);
      } catch (error) {
        setTokenPrice("Error");
      }
    }
  };

  useEffect(() => {
    if (historicalMode) {
      fetchHistoricalPrice();
    } else {
      fetchEthPrice();
    }
  }, []);

  return (
    <BaseGridStyle style={{ gridArea: "crypto-chart" }} ref={ref}>
      <GridContent>
        <GridTitle>Ethereum</GridTitle>
        <CryptoContent>
          <CryptoIcon>
            <Image src={EthIcon} alt="Token Icon" fill />
          </CryptoIcon>
          {historicalMode ? (
            <CryptoPrice color={pump ? "#52ff6e" : "#f52b55"}>
              {Number.isNaN(tokenPrice) ? "Error" : `${tokenPrice}`}
            </CryptoPrice>
          ) : (
            <CryptoPrice>
              {Number.isNaN(tokenPrice) ? "Error" : `${tokenPrice}`}
            </CryptoPrice>
          )}
        </CryptoContent>
      </GridContent>
    </BaseGridStyle>
  );
};

const ForwardRefCryptoChart = forwardRef(CryptoChart);

export default ForwardRefCryptoChart;
