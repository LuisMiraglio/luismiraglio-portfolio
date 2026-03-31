---
title: "Aplicación móvil Flutter para seguimiento vehicular"
description: "Aplicación móvil desarrollada en Flutter para consultar flota, recorridos, detenciones y actividad vehicular, conectada a una API propia y publicada en Play Store."
image: "/images/projects/app-flutter-seguimiento.jpg"
category: "Mobile"
status: "production"
highlight: "App móvil en producción publicada en Play Store, integrada con backend propio y utilizada por clientes y operación interna."
tags: ["Flutter", "Dart", "HTTP", "Flutter Map", "Secure Storage", "Play Store"]
repo: "PONER_URL_DEL_REPO_SI_LA_VAS_A_MOSTRAR"
relatedTitle: "API backend para app móvil de gestión vehicular"
relatedSlug: "api-avl-fastapi"
relatedLabel: "Backend relacionado"
playStore: "https://play.google.com/store/apps/details?id=com.conectar.seguimiento&pcampaignid=web_share"
screenshots:
  - src: "/images/projects/flutter/login.jpeg"
    alt: "Pantalla de inicio de sesión"
    label: "Inicio de sesión"
  - src: "/images/projects/flutter/flota.jpeg"
    alt: "Pantalla de visualización de flota"
    label: "Flota"
  - src: "/images/projects/flutter/vehiculos.jpeg"
    alt: "Pantalla de detalle de vehículo"
    label: "Vehiculos"
  - src: "/images/projects/flutter/recorrido.jpeg"
    alt: "Pantalla de recorrido y mapa"
    label: "Recorrido y Detenciones"
  - src: "/images/projects/flutter/detalles.jpeg"
    alt: "Pantalla de detalle de paradas"
    label: "Detalle de Recorrido"
---

## Resumen

Aplicación móvil desarrollada en Flutter para el sistema de seguimiento vehicular de Conectar, diseñada para brindar acceso rápido y cómodo a información de flota, recorridos y actividad desde dispositivos móviles.

La app consume una API backend desarrollada específicamente para este ecosistema y se encuentra publicada en Play Store, en uso por clientes reales y también por operación interna dentro de la empresa.

## Contexto

Este proyecto fue desarrollado dentro de la misma iniciativa en la que se construyó la API backend de Conectar AVL.

La necesidad surgió a partir de la expansión del sistema hacia una experiencia móvil, buscando ofrecer una solución más accesible, cómoda y práctica para usuarios que necesitaban consultar información vehicular desde el celular sin depender del sistema web.

El objetivo fue crear una aplicación enfocada en consulta operativa y seguimiento de vehículos, optimizada para uso cotidiano en movilidad.

## Problema

Hasta ese momento, el acceso a la información dependía principalmente del sistema web.

Eso implicaba que, para consultar recorridos, actividad o estado general de los vehículos, el usuario debía hacerlo desde una computadora o desde una experiencia menos cómoda en contextos móviles.

En la práctica, esto generaba una fricción innecesaria para usuarios que necesitaban consultar información de manera rápida, especialmente fuera del horario laboral o lejos de un puesto fijo de trabajo.

## Solución implementada

Desarrollé una aplicación móvil en Flutter conectada a una API propia, orientada a simplificar la consulta de información vehicular desde dispositivos móviles.

La app permite:

- iniciar sesión
- elegir servicio cuando el usuario tiene más de uno asociado
- visualizar la flota de vehículos
- consultar recorridos históricos
- consultar recorridos del día o por rango de fechas
- visualizar detenciones con detalle de dirección, duración e inicio y fin
- ver kilómetros totales del recorrido consultado
- ver tiempo total de actividad
- consultar inicio y fin de actividad

La solución fue pensada para ser clara, operativa y escalable, permitiendo agregar nuevas funcionalidades en el futuro sobre una base ya productiva.

## Integración con backend

La aplicación consume una API backend desarrollada en Python con FastAPI, también construida dentro del proyecto.

Esa API expone información proveniente de la misma base de datos SQL Server utilizada por el sistema web, lo que permite mantener consistencia entre plataformas y centralizar la lógica de acceso a datos.

De esta forma, la app no se conecta directamente a la base de datos, sino que consume endpoints diseñados específicamente para uso móvil, con autenticación, validación de acceso y respuestas adaptadas a la experiencia de la aplicación.

## Publicación y distribución

La aplicación fue publicada en Google Play Store como parte del despliegue real del proyecto.

Link público:

[Ver en Play Store](https://play.google.com/store/apps/details?id=com.conectar.seguimiento&pcampaignid=web_share)

También participé en todo el proceso de distribución móvil, incluyendo:

- configuración del proyecto para release
- firma de APK / AAB
- preparación de versión de publicación
- gestión de cuenta de desarrollador
- publicación final en Play Store

## Estado de uso

La app se encuentra en uso real por clientes y también dentro de la propia empresa, que utiliza el sistema sobre su propia flota de vehículos.

Esto convierte al proyecto en una solución móvil productiva, no en una demo o prototipo.

## Mi aporte

Participé en todo el desarrollo de punta a punta:

- desarrollo completo de la aplicación Flutter
- definición de arquitectura y flujo general
- integración con la API backend
- implementación de login y selección de servicios
- desarrollo de pantallas y navegación
- configuración de conexión con entorno productivo
- preparación de builds release
- firma de la aplicación
- publicación en Play Store
- gestión completa del proceso técnico de salida a producción

## Stack técnico

- Flutter
- Dart
- HTTP
- flutter_secure_storage
- shared_preferences
- flutter_map
- latlong2
- intl
- url_launcher

## Impacto

- permitió llevar el sistema de seguimiento vehicular a una experiencia móvil real
- mejoró la comodidad de consulta para clientes y usuarios internos
- redujo la dependencia del sistema web para tareas de consulta operativa
- habilitó acceso rápido a recorridos, detenciones y actividad desde el celular
- aportó una solución más práctica para escenarios fuera de oficina o fuera de horario laboral