// @ts-ignore
import {FinGoal} from "~/logic/private/fin/models";
import {cacheGoals, getGoalsFromCache, loadFinGoalsFromGSheets} from "~/logic/private/fin/utils";

export async function loadFinGoals(config: any, force = false): Promise<FinGoal[]> {
  let goals: FinGoal[];

  goals = (
    (force && await loadFinGoalsFromGSheets(config))
    ||
    (getGoalsFromCache() ?? await loadFinGoalsFromGSheets(config))
  );
  cacheGoals(goals);

  return goals;
}
