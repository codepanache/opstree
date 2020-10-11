#!/bin/bash
sudo service nginx start
sudo pm2 restart /var/www/html/app.js
