#!/bin/bash
#Perfom any pre-deployment cleanup or checks
#example: remove old files
echo "Eliminando archivos antiguos..."
sudo rm -rf /var/www/html/*
