# Music_Community
## Clonar el repositorio
```bash
git clone https://github.com/KuajinaiSS/Music_Community.git
```

## Instalar Backend
accederemos al backend por consola
```bash
cd backend_Community/backend
```

copiaremos el .env.example en un .env para configurarlo
```bash
copy .env.example .env
```

### Configuraremos el .env con las credenciales de Mysql
DB_USERNAME=root

DB_PASSWORD=

configuraremos el proyecto
```bash
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

iniiciaremos el backend
```bash
php artisan serve
```

## Frontend
```bash

```
#### Instalación del Frontend

accederemos al frontend por consola
```bash
cd ../../frontend_Community/frontend
```

instalaremos las dependencias
```bash
npm install
```

iniciaremos el frontend
```bash
npm run start
```
Abre tu navegador en `http://localhost:3000` para ver la aplicación en ejecución


