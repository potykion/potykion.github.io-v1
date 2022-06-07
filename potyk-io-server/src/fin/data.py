import datetime as dt
from decimal import Decimal
from typing import List

from src.fin.cases import FinGoal, FinGoalProgress
from src.fin.utils import date_from_str

# cur_date = date_from_str('2022/05/15')
cur_date = dt.date.today()

goals: List[FinGoalProgress] = [
    FinGoal(id=1, name='хата', price=Decimal(750_000), deadline_date=date_from_str('2023/03/31')).as_progress(cur_price=Decimal(0), cur_date=cur_date),
    FinGoal(id=2, name='инвестиции', price=Decimal(500_000), deadline_date=date_from_str('2023/03/31'), weight=0.5).as_progress(cur_price=Decimal(0), cur_date=cur_date),
    FinGoal(id=3, name='колечко', price=Decimal(45_000), deadline_date=date_from_str('2022/10/31'), weight=3).as_progress(cur_price=Decimal(18_000), cur_date=cur_date),
    FinGoal(id=4, name='новая хата', price=Decimal(170_000), deadline_date=date_from_str('2022/10/31')).as_progress(cur_price=Decimal(31_000), cur_date=cur_date),
    FinGoal(id=5, name='отпуск', price=Decimal(100_000), deadline_date=date_from_str('2022/08/31')).as_progress(cur_price=Decimal(25_800), cur_date=cur_date),
    FinGoal(id=6, name='абик', price=Decimal(90_000), deadline_date=date_from_str('2023/03/31')).as_progress(cur_price=Decimal(13_000), cur_date=cur_date),
]

deposit = Decimal(40_000)
deposit_days = 7
