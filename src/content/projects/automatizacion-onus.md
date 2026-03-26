---
title: "Automatización de Configuración de ONUs"
description: "Aplicación de escritorio en Python que automatiza la configuración inicial de ONUs Datacom y elimina por completo la carga manual del técnico."
image: "/images/projects/onus.png"
category: "Automation"
status: "production"
highlight: "Reducción total del tiempo manual de configuración y eliminación de errores humanos en producción."
tags: ["Python", "Selenium", "Tkinter", "PyInstaller", "Automation", "Networking"]
repo: "https://github.com/LuisMiraglio/datacom-dm986-selenium-automation"
---

## Resumen

Aplicación de automatización técnica desarrollada para configurar ONUs Datacom de forma estandarizada, rápida y sin intervención manual del técnico en tareas repetitivas de preparación de equipos.

La herramienta fue pensada para resolver un proceso operativo real dentro de una empresa de servicios de internet, mejorando tiempos, consistencia y trazabilidad en la configuración inicial de equipos.

## Contexto

Este proyecto fue desarrollado para **Conectar SRL** como una herramienta interna orientada a operación técnica real.

La solución se encuentra actualmente en uso en producción y forma parte del flujo de trabajo del área técnica para preparar ONUs antes de su instalación en domicilios de clientes.

## Problema

Antes de implementar esta automatización, cada ONU debía configurarse manualmente.

El proceso consistía en conectar el equipo por cable Ethernet, ingresar a su IP por defecto, acceder al panel de administración y aplicar uno por uno todos los parámetros necesarios para dejarlo operativo.

Este flujo demandaba entre **5 y 8 minutos por equipo**, requería intervención manual constante y estaba expuesto a errores de carga, inconsistencias entre técnicos y pérdida de tiempo en tareas repetitivas.

## Solución implementada

Desarrollé una aplicación de escritorio con interfaz gráfica simple que permite seleccionar entre distintos modelos soportados y cargar los datos necesarios para la configuración inicial del equipo, incluyendo:

- usuario y contraseña por defecto
- SSID de la red Wi-Fi
- contraseña Wi-Fi
- nueva contraseña de administración

Una vez ingresados esos datos, la herramienta ejecuta automáticamente todo el proceso de configuración sobre la ONU utilizando Selenium, sin intervención manual del técnico durante la operación.

Además, la aplicación registra cada configuración realizada, lo que aporta trazabilidad y control sobre los equipos procesados.

## Mi aporte

Participé en el proyecto de punta a punta, incluyendo:

- investigación previa para validar la viabilidad de automatización sobre ONUs Datacom
- análisis del flujo manual original de configuración
- desarrollo completo de la lógica de automatización
- diseño de la interfaz gráfica en Tkinter
- pruebas en entorno real con equipos físicos
- empaquetado final de la herramienta como ejecutable `.exe`

## Impacto

La herramienta generó un impacto operativo directo en el área técnica:

- reducción total del tiempo manual de configuración
- eliminación de errores humanos en procesos repetitivos
- estandarización de la configuración entre distintos técnicos
- mejora de la velocidad operativa en tareas masivas
- generación de registros por equipo configurado
- uso real en entorno productivo dentro de la empresa
