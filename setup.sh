#!/bin/bash

echo "=== GadgetStore infrastructure setup ==="

sudo apt update

echo "Installing basic packages..."
sudo apt install -y docker.io docker-compose git curl ufw nginx openssh-server fail2ban

echo "Starting services..."
sudo systemctl enable ssh
sudo systemctl start ssh

sudo systemctl enable nginx
sudo systemctl start nginx

sudo systemctl enable fail2ban
sudo systemctl start fail2ban

echo "Configuring firewall..."
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 3000
sudo ufw allow 5000
sudo ufw allow 8080
sudo ufw allow 9090
sudo ufw allow 9100
sudo ufw --force enable

echo "Starting Docker containers..."
sudo docker compose up -d --build

echo "Creating backup..."
mkdir -p backups
tar -czf backups/gadgetstore_backup.tar.gz .

echo "Setup completed successfully!"
