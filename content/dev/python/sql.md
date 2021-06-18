---
title: Python / SQL
---

## Python / SQL


По умолчанию в SQLAlchemy sql-запросы рендерятся без конкретных значений. Чтобы получить полный sql-запрос с
конкретными
значениями:

```python
query.compile(compile_kwargs={"literal_binds": True})
```
