---
title: Django-заметки
description: Произошел врыв в Django в 2021, начинают появляться заметочки, рецептики, хочется иметь их все в одном месте
---

# Тестирование

## Тестирование дат

В респонсе дата приходит в виде строки, в drf-формате, типа такой:

```
2022-02-08T13:35:47.680868+03:00
```

Для приведения даты к drf-строке используй: 

```python
DateTimeField().to_representation(date)
```

Пример:

```python
class Item(Model):
  created = DateTimeField()
  
class ItemSerializer(ModelSerializer):
  class Meta:
    model = Item
    fields = ('created', )

item = Item(created=dt.datetime.now())

data = ItemSerializer(item).data

self.assertEqual(
  data, 
  {'created': DateTimeField().to_representation(item.created),
} 
```

