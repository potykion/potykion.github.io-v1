// @ts-ignore
import {GoogleSpreadsheet} from "google-spreadsheet";
import {FinGoal} from "~/logic/private/fin/models";


export async function loadFinGoalsFromGSheets(config: any) {
  const doc = new GoogleSpreadsheet(config.GOOGLE_SHEETS_TABLE_ID);

  await doc.useServiceAccountAuth({
    client_email: config.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: config.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsById[config.GOOGLE_SHEETS_SHEET_ID];

  const goalRows = await sheet.getRows();
  const goals = goalRows.map((r: any) => ({
    name: r.name,
    reqSum: r.reqSum,
    curSum: r.curSum,
    deadline: new Date(r.deadline),
  }));

  return goals;
}

export function cacheGoals(goals: FinGoal[]) {
  localStorage.setItem('goals', JSON.stringify(goals));
}

export function getGoalsFromCache(): FinGoal[] | null {
  return JSON.parse(localStorage.getItem('goals') || "null");
}
