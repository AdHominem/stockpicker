

const overview= {
    "Symbol": "BABA",
    "AssetType": "Common Stock",
    "Name": "Alibaba Group Holding Limited",
    "Description": "Alibaba Group Holding Limited, through its subsidiaries, provides online and mobile commerce businesses in the People's Republic of China and internationally. It operates through four segments: Core Commerce, Cloud Computing, Digital Media and Entertainment, and Innovation Initiatives and Others. The company operates Taobao Marketplace, a mobile commerce destination; Tmall, a third-party online and mobile commerce platform for brands and retailers; Alibaba Health Internet platforms for pharmaceutical and healthcare products; Alimama, a monetization platform; 1688.com and Alibaba.com, which are online wholesale marketplaces; AliExpress, a retail marketplace; Lazada, an e-commerce platform; and Tmall Global, an import e-commerce platform. It also operates Lingshoutong, a digital sourcing platform; Cainiao Network logistic services platform; Ele.me, a delivery and local services platform; Koubei, a restaurant and local services guide platform; and Fliggy, an online travel platform. In addition, the company offers pay-for-performance and display marketing services; and Taobao Ad Network and Exchange, a real-time bidding online marketing exchange. Further, it provides elastic computing, database, storage, virtualization network, large-scale computing, security, management and application, big data analytics, and Internet of Things and other services for enterprises; payment and escrow services; and movies, television series, variety shows, animations, and other video content. Additionally, the company operates Youku, an online video platform; Alibaba Pictures and other content platforms that provide online videos, films, live events, news feeds, literature, music, and others; Amap, a mobile digital map, navigation, and real-time traffic information app; DingTalk, a business efficiency app; and Tmall Genie, an AI-powered smart speaker. The company was founded in 1999 and is based in Hangzhou, the People's Republic of China.",
    "CIK": "1577552",
    "Exchange": "NYSE",
    "Currency": "USD",
    "Country": "USA",
    "Sector": "Consumer Cyclical",
    "Industry": "Internet Retail",
    "Address": "969 West Wen Yi Road, Hangzhou, China, 311121",
    "FullTimeEmployees": "252084",
    "FiscalYearEnd": "March",
    "LatestQuarter": "2020-12-31",
    "MarketCapitalization": "628876836864",
    "EBITDA": "153215991808",
    "PERatio": "25.8045",
    "PEGRatio": "1.3661",
    "BookValue": "346.37",
    "DividendPerShare": "None",
    "DividendYield": "0",
    "EPS": "8.95",
    "RevenuePerShareTTM": "238.988",
    "ProfitMargin": "0.2471",
    "OperatingMarginTTM": "0.1663",
    "ReturnOnAssetsTTM": "0.0453",
    "ReturnOnEquityTTM": "0.1565",
    "RevenueTTM": "644208001024",
    "GrossProfitTTM": "229998000000",
    "DilutedEPSTTM": "8.95",
    "QuarterlyEarningsGrowthYOY": "0.476",
    "QuarterlyRevenueGrowthYOY": "0.369",
    "AnalystTargetPrice": "314.98",
    "TrailingPE": "25.8045",
    "ForwardPE": "20.6186",
    "PriceToSalesRatioTTM": "6.4621",
    "PriceToBookRatio": "4.3954",
    "EVToRevenue": "0.9216",
    "EVToEBITDA": "3.1388",
    "Beta": "0.818",
    "52WeekHigh": "319.32",
    "52WeekLow": "189.53",
    "50DayMovingAverage": "232.2082",
    "200DayMovingAverage": "255.229",
    "SharesOutstanding": "2712499968",
    "SharesFloat": "1865897138",
    "SharesShort": "46836399",
    "SharesShortPriorMonth": "44065333",
    "ShortRatio": "2.52",
    "ShortPercentOutstanding": "0.02",
    "ShortPercentFloat": "0",
    "PercentInsiders": "10.202",
    "PercentInstitutions": "39.877",
    "ForwardAnnualDividendRate": "0",
    "ForwardAnnualDividendYield": "0",
    "PayoutRatio": "0",
    "DividendDate": "None",
    "ExDividendDate": "None",
    "LastSplitFactor": "None",
    "LastSplitDate": "None"
}

function Overview(props) {
    return(
        <div>
            <h2>Overview</h2>
            <h3>Institutional Ownership</h3>
            {overview.PercentInstitutions}%
            <h3>Market Cap</h3>
            ${Math.trunc(overview.MarketCapitalization / 1000000000)}B
        </div>
    )
}

export default Overview;