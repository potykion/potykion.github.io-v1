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

---

Аналогично для типов, которые при сериализации переводятся в особую строку, стоит использовать метод `to_representation`.

Напр. для Decimal: `DecimalField(max_digits=..., decimal_places=...).to_representation(decimal_)`

## Генерация тестовых данных

Используем [factory-boy](https://factoryboy.readthedocs.io/en/stable/index.html)

### Генерация тестовых данных в виде словарей

Для простых объектов тоже используем [factory-boy](https://factoryboy.readthedocs.io/en/stable/recipes.html#converting-a-factory-s-output-to-a-dict):

```
factory.build(dict, FACTORY_CLASS=UserFactory)
```

Для непростых объектов (с вложенными сущностями) - проследуйте на [стек](https://stackoverflow.com/a/66596431/5500609)
