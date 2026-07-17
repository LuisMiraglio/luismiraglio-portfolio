---
title: "Conectar AVL API"
summary: "API REST desarrollada para modernizar el acceso al sistema AVL existente y exponer vehículos, recorridos y detenciones a aplicaciones cliente de forma segura."
category: "Backend y API REST"
status: "Producción"
featured: false
role:
  - "Análisis del sistema existente"
  - "Diseño de arquitectura"
  - "Desarrollo backend"
  - "Integración con base de datos"
  - "Autenticación"
  - "Despliegue"
  - "Pruebas"
stack:
  - ".NET 9"
  - "C#"
  - "SQL Server"
  - "JWT"
  - "Arquitectura por capas"
  - "API REST"
  - "Google Geocoding API"
  - "Procedimientos almacenados"
  - "Sistema legado"
impact: "Modernización del acceso al sistema AVL mediante una API propia, segura e integrada con la infraestructura existente."
image:
  src: "/images/projects/conectar-avl-api.svg"
  alt: "Diagrama simplificado de una aplicación cliente conectada mediante JWT a una API REST, SQL Server y el sistema AVL"
privateRepository: true
company: "Conectar Servicios"
order: 2
---

## Problema

El sistema AVL existente necesitaba ofrecer a nuevas aplicaciones cliente un acceso moderno y seguro a vehículos, recorridos y detenciones, sin exponer directamente la infraestructura interna.

## Contexto

La solución debía integrarse con un sistema legado y su base de datos SQL Server, respetando los procesos existentes y la confidencialidad de la información operativa.

## Objetivo

Construir una API REST propia que centralizara autenticación y consultas, y proporcionara un contrato claro para las aplicaciones cliente.

## Arquitectura

La API se desarrolló con .NET 9 y C# mediante una arquitectura por capas. Esta separación organiza las responsabilidades de exposición HTTP, lógica de aplicación e integración con datos y servicios existentes.

## Autenticación

El flujo contempla autenticación por usuario y servicio, además de emisión y validación de JWT. El filtrado por servicio limita las consultas al contexto seleccionado por el usuario.

## Integración con el sistema existente

La API funciona como una capa moderna sobre el sistema AVL existente. La integración conserva los procesos necesarios sin publicar URLs privadas, identificadores internos ni detalles sensibles de clientes.

## Endpoints principales

- Servicios disponibles para el usuario.
- Login.
- Vehículos.
- Historial de un vehículo.
- Detenciones de un vehículo.

## Base de datos

La solución integra SQL Server y procedimientos almacenados existentes. La capa de acceso a datos mantiene esa implementación separada del contrato público de la API.

## Geocodificación

La integración con Google Geocoding API permite resolver direcciones para la información que lo requiere, sin revelar direcciones internas en este caso de estudio.

## Despliegue

La API se desplegó en servidor como parte de la infraestructura del sistema. No se publican dominios, rutas ni configuraciones privadas.

## Desafíos

El desafío principal fue modernizar el acceso sin alterar las responsabilidades del sistema legado, incorporando a la vez autenticación, separación por servicio y una interfaz estable para clientes móviles.

## Resultados

- API REST disponible en producción.
- Consulta segura de vehículos, recorridos y detenciones.
- Integración con SQL Server y el sistema AVL existente.
- Base propia para conectar aplicaciones cliente.

## Rol personal

Realicé el análisis del sistema existente, el diseño de arquitectura, el desarrollo backend, la integración con base de datos, la autenticación, el despliegue y las pruebas.

## Confidencialidad

El repositorio es privado. Este caso describe arquitectura, responsabilidades y tecnologías sin exponer credenciales, usuarios, vehículos, identificadores, direcciones, URLs privadas ni información sensible de clientes.
