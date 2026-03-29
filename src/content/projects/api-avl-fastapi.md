---
title: "API backend para app móvil de gestión vehicular"
description: "API desarrollada en Python + FastAPI que expone datos de vehículos, servicios y usuarios desde base de datos SQL, utilizada por una app móvil en producción."
image: "/images/projects/api-avl.jpg"
category: "Backend"
status: "production"
highlight: "API en producción desplegada como servicio de Windows con NSSM, utilizada por una app móvil real."
tags: ["Python", "FastAPI", "SQLAlchemy", "SQL Server", "JWT", "Backend"]
repo: "PONER_URL_DEL_REPO_SI_LA_VAS_A_MOSTRAR"
relatedTitle: "Aplicación móvil Flutter para seguimiento vehicular"
relatedSlug: "app-flutter-seguimiento-vehicular"
relatedLabel: "App relacionada"
---
## Resumen

Desarrollo de una API backend en Python utilizando FastAPI para el sistema Conectar AVL, diseñada para exponer información de vehículos, servicios y usuarios a una aplicación móvil.

La API se conecta directamente a una base de datos SQL Server y permite consultar recorridos, actividad, métricas y datos históricos de vehículos.

Actualmente se encuentra en producción y es consumida por una app móvil desarrollada en Flutter.

## Contexto

Este proyecto fue desarrollado dentro de la empresa como parte de una iniciativa para llevar el sistema AVL existente, disponible en web, a una aplicación móvil.

El objetivo no era replicar todo el sistema web, sino crear una app más simple enfocada en:

- visualización de vehículos
- consulta de recorridos
- análisis de actividad

Para esto fue necesario desarrollar una API intermedia que gestione el acceso a los datos.

## Problema

La aplicación móvil no podía conectarse directamente a la base de datos por varios motivos:

- seguridad
- complejidad de consultas
- necesidad de lógica de negocio intermedia
- control de accesos por usuario y servicio

## Solución implementada

Se desarrolló una API REST en FastAPI que:

- gestiona autenticación mediante JWT
- valida accesos por usuario y servicio
- expone endpoints para vehículos, servicios, eventos e historial de recorridos
- procesa datos desde SQL Server mediante SQLAlchemy
- estructura respuestas optimizadas para consumo móvil

## Integración con app móvil

Esta API fue diseñada específicamente como backend de una aplicación móvil desarrollada en Flutter.

La app permite:

- login de usuarios
- selección de servicios
- visualización de vehículos
- consulta de recorridos históricos
- análisis de kilómetros recorridos, tiempos de actividad, detenciones e inicio y fin de jornada

## Infraestructura y despliegue

La API se encuentra desplegada en un servidor Windows en entorno productivo.

Características del despliegue:

- ejecutada como servicio nativo de Windows
- gestionada mediante NSSM
- inicio automático junto con el sistema
- reinicio automático ante fallos
- logs persistentes para monitoreo

Configuración técnica:

- puerto interno `localhost:8001`
- entorno virtual dedicado `venv`
- variables sensibles gestionadas con `.env`
- logs separados de salida y errores

Operación:

- control mediante `Start-Service` y `Stop-Service`
- verificación mediante `/docs`
- diagnóstico a través de logs del servicio

## Mantenimiento y operación

El proyecto incluye documentación interna para:

- actualización manual del servicio
- instalación de dependencias
- gestión de errores comunes
- configuración del entorno

Esto permite mantener la API de forma estable en producción.

## Mi aporte

Participé en todo el proceso de punta a punta:

- desarrollo completo de la API
- arquitectura de endpoints
- autenticación y validación de accesos
- integración con base de datos SQL Server
- diseño de respuestas para consumo móvil
- configuración del entorno
- despliegue en servidor Windows
- implementación como servicio con NSSM
- documentación técnica completa del proyecto

## Impacto

- permite el funcionamiento de una app móvil real utilizada en entorno empresarial
- mejora el acceso a la información de vehículos desde dispositivos móviles
- reduce la dependencia del sistema web para consultas específicas
- centraliza la lógica de acceso a datos en una API segura y escalable