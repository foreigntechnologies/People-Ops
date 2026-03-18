Remove-Item -Recurse -Force frontend\shell -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force frontend\mfe-auth -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force frontend\mfe-jobs -ErrorAction SilentlyContinue

ng new shell --directory frontend/shell --style css --routing --ssr false --skip-git --skip-install --defaults
ng new mfe-auth --directory frontend/mfe-auth --style css --routing --ssr false --skip-git --skip-install --defaults
ng new mfe-jobs --directory frontend/mfe-jobs --style css --routing --ssr false --skip-git --skip-install --defaults
