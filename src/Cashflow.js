import {createAnnualReports, formatNumber} from "./Utils";

const reports = {}//createAnnualReports();

function Cashflow() {

    return (
        <div className="App">
            <h2>Cashflow</h2>
            {
                Object.entries(reports).map(entry => {
                    const [key, report] = entry;
                    console.log("Report:");
                    console.log(report);
                    return (
                        <div>
                        <p>{key}</p>
                        <p>{
                            formatNumber(
                                report.cashflow.operatingCashflow
                                + report.income.interestExpense
                                - report.cashflow.capitalExpenditures
                            )
                        }
                        </p>
                    </div>)
                })
            }
        </div>
    )
}

export default Cashflow;