---
title: "Automatización ONUs"
slug: "automatizacion-onus"
summary: "Aplicación de escritorio para automatizar procesos operativos relacionados con altas y configuración de ONUs en un entorno real de producción."
category: "Automatización operativa"
status: "Producción"
featured: true
year: 2024
role:
  - "Análisis"
  - "Desarrollo"
  - "Automatización"
  - "Interfaz"
  - "Empaquetado"
stack:
  - "Python"
  - "Selenium"
  - "Tkinter"
  - "PyInstaller"
impact: "Reducción aproximada del tiempo operativo de entre 90 % y 100 %."
image:
  src: "/images/projects/automatizacion-onus-flow.svg"
  alt: "Flujo técnico de la aplicación Automatización ONUs, desde la entrada operativa hasta la ejecución completada"
privateRepository: true
order: 1
---

## Problema

Los procesos operativos relacionados con altas y configuración de ONUs requerían intervención manual repetitiva. Esa dinámica consumía tiempo operativo y aumentaba la dependencia de pasos ejecutados manualmente.

## Contexto

La solución se implementó como una aplicación de escritorio utilizada en un entorno real. El caso de estudio evita exponer datos internos sensibles de la empresa.

## Objetivo

Automatizar el flujo operativo de altas y configuración de ONUs mediante una herramienta de escritorio simple de ejecutar, empaquetada para uso interno y orientada a reducir el tiempo dedicado a tareas repetitivas.

## Rol personal

Participé en el análisis del proceso, el desarrollo de la automatización, la construcción de la interfaz, la integración del flujo automatizado y el empaquetado de la aplicación.

## Stack

- Python
- Selenium
- Tkinter
- PyInstaller

## Arquitectura

La solución se organizó como una aplicación de escritorio con una interfaz en Tkinter, lógica de automatización en Python y ejecución de interacciones automatizadas mediante Selenium. El empaquetado con PyInstaller permitió distribuir la herramienta como aplicación de escritorio.

## Decisiones técnicas

- Usar Python como base para centralizar la lógica de automatización.
- Usar Selenium para automatizar pasos operativos que antes se realizaban manualmente.
- Usar Tkinter para ofrecer una interfaz de escritorio liviana.
- Usar PyInstaller para facilitar el empaquetado y la ejecución en el entorno de uso.

## Implementación

La implementación se enfocó en transformar pasos manuales del proceso de alta y configuración en una secuencia automatizada controlada desde una interfaz de escritorio. No se incluyen detalles internos sensibles, credenciales, URLs privadas ni información operativa confidencial.

## Despliegue

La aplicación fue empaquetada como herramienta de escritorio con PyInstaller y utilizada en un entorno real de producción.

## Impacto

La herramienta redujo aproximadamente entre un 90 % y un 100 % el tiempo operativo asociado a los procesos automatizados.

## Resultados

- Aplicación de escritorio en producción.
- Automatización de procesos operativos relacionados con altas y configuración de ONUs.
- Reducción aproximada del tiempo operativo de entre 90 % y 100 %.

## Desafíos

El principal desafío fue convertir un flujo operativo manual en una herramienta de escritorio usable, manteniendo una implementación adecuada para un entorno real sin exponer información interna sensible.

## Aprendizajes

El proyecto reforzó la importancia de diseñar automatizaciones operativas con foco en uso real, empaquetado, simplicidad de ejecución y protección de información confidencial.
