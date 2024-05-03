# Проєктування системи

## Модель бізнес-об'єктів

@startuml
  entity Client #d3ffd9
    entity Client.id
    entity Client.login
    entity Client.email
    entity Client.password

    Client.id -r-* Client
    Client.login -u-* Client
    Client.email -u-* Client
    Client.password -u-* Client

  entity Role #d3ffd9
    entity Role.id
    entity Role.name
    entity Role.description

    Role.id --* Role
    Role.name --* Role
    Role.description --* Role

  entity Guest
  entity User
  entity Admin

  Guest ...> Role : instanceOf
  User ...> Role : instanceOf
  Admin ...> Role : instanceOf

  entity Permissions #d3ffd9
    entity Permissions.id

    Permissions.id --* Permissions

  entity Permission #d3ffd9
    entity Permission.id
    entity Permission.name

    Permission.id --* Permission
    Permission.name --* Permission

  entity Request #d3ffd9
    entity Request.id
    entity Request.description
    entity Request.datetime
  
    Request.id --* Request
    Request.description --* Request
    Request.datetime --* Request

  entity Action #d3ffd9
    entity Action.id
    entity Action.name
    entity Action.description

    Action.id -u-* Action
    Action.name -u-* Action
    Action.description -u-* Action

  entity MediaData #d3ffd9
    entity MediaData.id
    entity MediaData.name
    entity MediaData.fileType
    entity MediaData.metadata

    MediaData.id -u-* MediaData
    MediaData.name -u-* MediaData
    MediaData.fileType -u-* MediaData
    MediaData.metadata -u-* MediaData

  Permission "1,1"--"0,*" Permissions
  Permissions "0,*"--"1,1" Role
  Role "1,1"--"0,*" Client
  Client "1,1"--"0,*" Request
  Request "1,1"--"0,*" Action
  Request "1,1"--"0,*" MediaData

@enduml

## ER-модель

@startuml
  package ClientManage {
      entity Client <<ENTITY>> {
        id: BINARY(16)
        login: VARCHAR(32)
        email: VARCHAR(255)
        password: VARCHAR(40)
        role_id: INT
      }
  }

  package AccessControl {
      entity Role <<ENTITY>> {
        id: INT
        name: VARCHAR(32)
        description: TEXT
      }

      object Guest #white
      object User #white
      object Admin #white

      Guest ..> Role : instanceOf
      User ..> Role : instanceOf
      Admin ..> Role : instanceOf

      entity Permissions <<ENTITY>> {
        id: INT
        role_id: INT
        permission_id: INT
      }

      entity Permission <<ENTITY>> {
        id: INT
        name: VARCHAR(32)
      }
  }

  package MediaManagement {
      entity Request <<ENTITY>> {
        id: INT
        description: TEXT
        datetime: DATETIME
        action_id: INT
        mediadata_id: INT
        client_id: INT
      }

      entity Action <<ENTITY>> {
        id: INT
        name: TEXT
        description: TEXT
      }

      object SupportManage #white
      object ProfileManage #white
      object SearchManage #white
      object DataManage #white
      object ManageAccount #white
      object ManageSource #white

      SupportManage ..> Action : instanceOf
      ProfileManage ...> Action : instanceOf
      SearchManage ...> Action : instanceOf
      DataManage ...> Action : instanceOf
      ManageAccount .u.> Action : instanceOf
      ManageSource .> Action : instanceOf


      entity MediaData <<ENTITY>> {
        id: INT
        name: TEXT
        fileType: TEXT
        metadata: TEXT
      }
  }

  Permission "1,1"--"0,*" Permissions
  Permissions "0,*"--"1,1" Role
  Role "1,1"--"0,*" Client
  Client "1,1"--"0,*" Request
  Request "1,1"--"0,*" Action
  Request "1,1"--"0,*" MediaData

@enduml

## Реляційна схема

<p align="center">
  <img src="./media/Relation.svg" width="600">
</p>
