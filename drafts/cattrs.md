# cattrs
## Дисклеймер
- Справочка написана для Python 2 (`cattrs==1.0.0`)
- Cattrs не стоит на месте и уже далеко уехал для Python 3

## Что за cattrs?
- [cattrs](https://github.com/python-attrs/cattrs) - pydantic для attrs - (де)сериализация json в attrs-класс:
```python
import cattrs

@attr.s
class AnyCls(object):
    int_f = attr.ib(type=int)

assert cattrs.structure({'int_f': '1'}, AnyCls) == AnyCls(int_f=1)
```

## Сериализаторы - `cattr.Converter`
- `cattr.Converter` - сериализатор - описывает правила как парсить типы
- Если в классе содержатся нестандартные типы, напр.  енам, то для их стоит написать хук - `register_structure_hook`:
```python
class MessageStatus(IntEnum):  
    SUCCESS = 0  
    FORMAT_ERR = 1  
  
    @classmethod  
    def parse(cls, raw, _):  
        return cls(int(raw))

@attr.s  
class MessageResp(object):  
    id = attr.ib(type=str)  
    status = attr.ib(type=MessageStatus)  
    message = attr.ib(type=Optional[int])  
  
MessageRespConverter = cattr.Converter()  
MessageRespConverter.register_structure_hook(  
    MessageStatus, MessageStatus.parse,  
)

assert MessageRespConverter.structure({'id': '1', 'status': '0', 'message': None}, MessageResp) == MessageResp(id='1', status=MessageStatus.SUCCESS, message=None)
```
- Здесь `'0'` переводится в енам `MessageStatus`
- `register_structure_hook` принимает два параметра: тип и функцию-парсер
    - Функция-парсер принимает "сырое" значение и тип - удоюно оформлять их в виде класс-метода типа, который парсится
- *Важно проставлять `Optional` для полей, которые могут принимать None или вовсе не  быть переданными в словарь*
- 