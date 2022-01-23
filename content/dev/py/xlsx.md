---
title: Справка по openpyxl
description: openpyxl - лучшая либа для работы с Excel-файлами, тут будут рецепты как ей пользоваться
showToc: true
---

<div class="mendel-card">

## Начало работы

1. `pip install openpyxl`
2. `import openpyxl`

</div>

<div class="mendel-card">

## Workbook / Книга

`Workbook` - эксель-файл - т.е. полный эксель-файл, со всеми вкладочками и мета-инфой

### Пустой Workbook

```python
wb = openpyxl.Workbook()
```

### Workbook из файла
  
```python
wb = openpyxl.load_workbook("path/to/file.xlsx")
```

Можно передавать file-like объекты, напр. `io.BytesIO`:

```python
wb = openpyxl.load_workbook(io.BytesIO(...))
```


### Сохранение в файл

```python
wb.save("path/to/file.xlsx")
```

### Сохранение в bytes

Удобно, когда нужно отдать эксель наружу, напр. в ответе на запрос:

```python
stream = io.BytesIO()
wb.save(stream)
stream.getvalue() # type: bytes
```

</div>

<div class="mendel-card">


## Worksheet / Лист

`Worksheet` - лист / вкладка / страница эксель-файла

Находится тут: `openpyxl.worksheet.worksheet.Worksheet`

### Первая вкладка 

```python
wb.active
```

### Вкладка по имени

```python
wb["sheet-name"]
```

### Создание вкладки 

```python
wb.create_sheet("sheet-name")
```

</div>

[comment]: <TODO> (## Объединение ячеек)

<div class="mendel-card">

## Cell / Ячейка

Считаем, что `sheet = wb.active` 

Ячейки нумеруются с 1: (1, 1) = A1

### Получение ячейки

```python
sheet.cell(row=1, column=1)
sheet['A1']
```

### Выставление значения 

```python
sheet.cell(row=1, column=1, value='val')
sheet.cell(row=1, column=1).value = 'val'
```

### Строчки (row)

Сущности Row как таковой нет, в openpyxl Row - массив ячеек:

```python
rows: Iterable[Tuple[Cell, ...]] = sheet.rows
```

### Объединение ячеек

```python
sheet.merge_cells(
  start_row=1, start_col=1,
  end_row=2, end_column=2
)
```


Код выше объединяет ячейки A1, A2, B1, B2

</div>


<div class="mendel-card">

## Стилизовочка

Считаем, что `cell = sheet.cell(row, col)` и `from openpyxl.styles import *`

### Жирный шрифт

```python
cell.font = Font(bold=True)
```

### Границы

```python
side = Side(style='thin', color='000000')
thin_border = Border(left=side, top=side, right=side, bottom=side)
cell.border = thin_border
```

### Выравнивание по центру

```python
cell.alignment = Alignment(horizontal='center')
```

### Заливка / цвет бекграунда

```python
color = 'D0F5A9'
cell.fill = PatternFill(
    start_color=Color(color), end_color=Color(color),
    fill_type='solid',
)
```

### Стили и объединение ячеек

Если требуется применить стили для объединенных ячеек, 
то лучше применить стиль для одной ячейки, а затем произвести объединение

</div>


[comment]: <> (<div class="mendel-card">)

[comment]: <> (##  ColumnDimension, RowDimension &#40;Колонки и строки&#41; )

[comment]: <> (`from openpyxl.worksheet.dimensions import RowDimension, ColumnDimension`)

[comment]: <> (### Свертка)



[comment]: <> (### Ширина)

[comment]: <> (</div>)





<div class="mendel-card">

## Сложный эксель

Когда нужно сформировать сложный эксель файл, то код быстро превращается в такое:

```python
sheet.cell(row=2, column=col).value = _('Всего назначено')
sheet.cell(row=2, column=col).style = self.bold_font_thin_border
sheet.merge_cells(start_row=2, start_column=col, end_row=3, end_column=col)
sheet.cell(row=2, column=col + 1).value = _('Исследований')
sheet.cell(row=2, column=col + 1).style = self.bold_font_thin_border
sheet.merge_cells(start_row=2, start_column=col + 1, end_row=2, end_column=col + 1 + 1)
sheet.cell(row=2, column=col + 3).value = _('Визитов')
sheet.cell(row=2, column=col + 3).style = self.bold_font_thin_border
sheet.merge_cells(start_row=2, start_column=col + 3, end_row=2, end_column=col + 3 + 8)
sheet.cell(row=2, column=col + 12).value = _('Всего услуг')
sheet.cell(row=2, column=col + 12).style = self.bold_font_thin_border
sheet.merge_cells(start_row=2, start_column=col + 12, end_row=3, end_column=col + 12)
```

А если еще if-ами приправить, то становится совсем не читаемо

---

Гораздо приятнее использовать декларативный подход, напр. html:

```html
<table>
  <tbody>
    <tr>
        <td rowspan="2" style="border: 1px solid black; font-weight: bold">Всего назначено</td>
        <td colspan="2" style="border: 1px solid black; font-weight: bold">Исследований</td>
        <td colspan="8" style="border: 1px solid black; font-weight: bold">Визитов</td>
        <td rowspan="2" style="border: 1px solid black; font-weight: bold">Всего услуг</td>
    </tr>
  </tbody>
</table>
```

А поможет в генерации экселя из html *моя* библиотечка - [jinja2xlsx](https://github.com/potykion/jinja2xlsx):

```python
from jinja2xlsx import render_xlsx

workbook: openpyxl.Workbook = render_xlsx(html_str)
```

Библиотечка парсит html-таблицы в эксель-таблицы + применяет стили из `style` + объединяет ячейки, согласно `rowspan/colspan` и тд.


</div>
