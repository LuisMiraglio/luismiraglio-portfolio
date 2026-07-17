---
title: "Conectar AVL Mobile"
summary: "Aplicación móvil desarrollada en Flutter para consultar vehículos, recorridos y detenciones mediante una experiencia adaptada a dispositivos móviles."
category: "Aplicación móvil"
status: "Producción"
featured: false
role:
  - "Diseño de experiencia móvil"
  - "Desarrollo Flutter"
  - "Integración con API"
  - "Autenticación"
  - "Mapas"
  - "Publicación y despliegue móvil"
  - "Pruebas en dispositivos"
stack:
  - "Flutter"
  - "Dart"
  - ".NET API"
  - "Google Maps"
  - "Dio"
  - "JWT"
  - "Flutter Secure Storage"
  - "API REST"
impact: "Acceso móvil al sistema AVL mediante una interfaz moderna conectada a una API propia."
image:
  src: "/images/projects/conectar-avl-mobile.svg"
  alt: "Composición ilustrada y reemplazable de un teléfono con un mapa para Conectar AVL Mobile"
privateRepository: true
company: "Conectar Servicios"
order: 3
---

## Problema

El acceso al sistema AVL necesitaba una experiencia específica para dispositivos móviles que facilitara consultar vehículos, recorridos y detenciones fuera de una interfaz de escritorio.

## Contexto

La aplicación forma parte del ecosistema AVL, pero mantiene responsabilidades, tecnologías, repositorio y despliegue propios. Consume la API REST desarrollada para integrar de forma segura el sistema existente.

## Objetivo

Ofrecer una aplicación móvil moderna para acceder a la información operativa disponible, con navegación clara, autenticación segura y visualización geográfica.

## Experiencia móvil

La interfaz desarrollada en Flutter contempla selección de servicio, autenticación, listado y búsqueda de vehículos, detalle de cada vehículo y acceso a mapas, recorridos y detenciones.

## Autenticación

La aplicación consume el flujo de autenticación JWT de la API. Flutter Secure Storage permite conservar de manera adecuada la información de sesión necesaria en el dispositivo.

## Integración con la API

La comunicación con la API REST se implementó mediante Dio. La aplicación mantiene separadas la experiencia de presentación y las operaciones remotas provistas por el backend .NET.

## Mapas

Google Maps brinda el contexto geográfico para visualizar vehículos y la información asociada a sus recorridos, sin presentar aquí posiciones ni datos reales.

## Vehículos

La aplicación permite listar, buscar, ubicar en el mapa y consultar el detalle de los vehículos disponibles para el servicio seleccionado.

## Recorridos

La consulta de recorridos incluye su visualización y las métricas disponibles para el trayecto, sin publicar información operativa real.

## Detenciones

Las detenciones pueden consultarse junto con sus direcciones, obtenidas a través de la integración provista por el sistema.

## Publicación

La aplicación fue publicada o distribuida mediante Google Play. El contenido está preparado para mostrar el enlace oficial cuando sea proporcionado, sin inventar una URL.

## Desafíos

Los principales desafíos fueron adaptar el dominio AVL a una navegación móvil clara, integrar autenticación y mapas, y coordinar estados de carga, consulta y visualización con la API.

## Resultados

- Aplicación Flutter disponible en producción.
- Acceso móvil a vehículos, recorridos y detenciones.
- Integración con la API propia y visualización mediante mapas.
- Distribución móvil mediante Google Play.

## Rol personal

Realicé el diseño de la experiencia móvil, el desarrollo en Flutter, la integración con la API, la autenticación, los mapas, la publicación y despliegue móvil, y las pruebas en dispositivos.

## Confidencialidad

El repositorio es privado. El caso de estudio no expone credenciales, usuarios, vehículos, identificadores, posiciones, direcciones internas, URLs privadas ni información sensible de clientes.
