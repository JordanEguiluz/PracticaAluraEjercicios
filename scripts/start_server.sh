#!/bin/bash
echo "Iniciando Apache..."
sudo systemctl start httpd
sudo systemctl enable httpd
echo "Apache iniciado y habilitado para reinicio automático."
