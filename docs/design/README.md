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

entity Role #fdd8bf
  entity Role.name
  entity Role.description

  Role.name --* Role
  Role.description --* Role

  entity Guest
  entity User
  entity Admin

  Guest ...> Role
  User ...> Role
  Admin ...> Role

Role "1,1"--"0,*" Client
@enduml
```

## ER-модель

## Реляційна схема

<center style="margin-top: 16px">
  <img alt="" src="./media/Relation.svg" />
</center>
