# Проєктування системи

## Модель бізнес-об'єктів

```plantuml
@startuml

entity Client #fdd8bf
  entity Client.id
  entity Client.login
  entity Client.email
  entity Client.password

  Client.id -r-* Client
  Client.login -u-* Client
  Client.email -u-* Client
  Client.password -u-* Client


@enduml
```

## ER-модель

## Реляційна схема

<center style="margin-top: 16px">
  <img alt="" src="./media/Relation.svg" />
</center>
