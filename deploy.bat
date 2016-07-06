echo {"date":"%date% %time%"} > version
git fetch
touch kurczak.appcache
git add .
git ci -m "ok"
git push