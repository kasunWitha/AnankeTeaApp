#!/bin/bash

cp -a src/assets/ dist/dashboardApp/
cp src/.htaccess dist/dashboardApp/
sudo rm -r /var/www/html/dashboardApp/
sudo cp -a dist/dashboardApp/ /var/www/html/
sudo chown -R www-data:www-data /var/www/html/dashboardApp
sudo service apache2 restart
echo "DONE *******"
