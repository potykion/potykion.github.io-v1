# Как работать с Excel-файлами в Python?
## Как изменить ширину столбца?
```python
from openpyxl.utils import get_column_letter

column_dimension = sheet.column_dimensions[get_column_letter(1)]
column_dimension.width = 20
```

## Как изменить высоту строки?
```python
sheet.row_dimensions[1].height = 20
```